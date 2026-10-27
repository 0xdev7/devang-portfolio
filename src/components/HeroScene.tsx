"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Edges, Float } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const BLOCKS = 9;
const COLORS = ["#22d3ee", "#8b5cf6", "#34d399", "#f472b6", "#fbbf24"];

function blockPosition(i: number): THREE.Vector3 {
  const t = i / (BLOCKS - 1);
  const angle = t * Math.PI * 2.2;
  return new THREE.Vector3(Math.cos(angle) * 2.5, (t - 0.5) * 5.2, Math.sin(angle) * 2.5);
}

function Block({ index }: { index: number }) {
  const ref = useRef<THREE.Mesh>(null);
  const color = COLORS[index % COLORS.length];
  const pos = useMemo(() => blockPosition(index), [index]);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.x = t * 0.25 + index;
    ref.current.rotation.y = t * 0.35 + index * 0.5;
    const pulse = 0.35 + Math.max(0, Math.sin(t * 1.6 - index * 0.7)) * 0.9;
    (ref.current.material as THREE.MeshStandardMaterial).emissiveIntensity = pulse;
  });
  return (
    <group position={pos}>
      <Float speed={1.4} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh ref={ref}>
          <boxGeometry args={[0.95, 0.95, 0.95]} />
          <meshStandardMaterial
            color="#0b1020"
            emissive={color}
            emissiveIntensity={0.5}
            metalness={0.6}
            roughness={0.25}
            transparent
            opacity={0.85}
          />
          <Edges color={color} lineWidth={1.5} />
        </mesh>
      </Float>
    </group>
  );
}

function Links() {
  const points = useMemo(() => Array.from({ length: BLOCKS }, (_, i) => blockPosition(i)), []);
  const curve = useMemo(() => new THREE.CatmullRomCurve3(points), [points]);
  const geometry = useMemo(() => new THREE.TubeGeometry(curve, 200, 0.018, 8, false), [curve]);
  const packets = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    packets.current?.children.forEach((child, i) => {
      const u = (t * 0.07 + i / 6) % 1;
      child.position.copy(curve.getPointAt(u));
    });
  });

  return (
    <>
      <mesh geometry={geometry}>
        <meshBasicMaterial color="#3b4a7a" transparent opacity={0.8} />
      </mesh>
      <group ref={packets}>
        {Array.from({ length: 6 }).map((_, i) => (
          <mesh key={i}>
            <sphereGeometry args={[0.09, 16, 16]} />
            <meshBasicMaterial color={i % 2 ? "#34d399" : "#22d3ee"} />
          </mesh>
        ))}
      </group>
    </>
  );
}

function Particles() {
  const ref = useRef<THREE.Points>(null);
  const geometry = useMemo(() => {
    const g = new THREE.BufferGeometry();
    const n = 900;
    const arr = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      const r = 6 + Math.random() * 9;
      const th = Math.random() * Math.PI * 2;
      const ph = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(ph) * Math.cos(th);
      arr[i * 3 + 1] = r * Math.sin(ph) * Math.sin(th);
      arr[i * 3 + 2] = r * Math.cos(ph);
    }
    g.setAttribute("position", new THREE.BufferAttribute(arr, 3));
    return g;
  }, []);
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.02;
  });
  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial size={0.03} color="#8ea2ff" transparent opacity={0.7} sizeAttenuation />
    </points>
  );
}

function Rig({ children }: { children: React.ReactNode }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((state, dt) => {
    if (!ref.current) return;
    ref.current.rotation.y += dt * 0.12;
    ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, state.pointer.y * 0.25, 0.05);
    ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, 0.9 + state.pointer.x * 0.4, 0.05);
  });
  return <group ref={ref}>{children}</group>;
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 45 }} dpr={[1, 1.75]} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.4} />
      <pointLight position={[6, 6, 6]} intensity={60} color="#22d3ee" />
      <pointLight position={[-6, -4, 4]} intensity={50} color="#8b5cf6" />
      <Rig>
        <Links />
        {Array.from({ length: BLOCKS }).map((_, i) => (
          <Block key={i} index={i} />
        ))}
      </Rig>
      <Particles />
    </Canvas>
  );
}

"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Edges, Float } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

// Everything I've built orbits one core: cards, KYC, coins, blocks, servers, security.
type Kind = "card" | "id" | "coin" | "block" | "shield" | "server";

const ITEMS: { kind: Kind; color: string; ring: number; phase: number }[] = [
  { kind: "card", color: "#22d3ee", ring: 0, phase: 0 },
  { kind: "id", color: "#34d399", ring: 1, phase: 1.2 },
  { kind: "coin", color: "#fbbf24", ring: 2, phase: 2.3 },
  { kind: "block", color: "#8b5cf6", ring: 0, phase: 3.3 },
  { kind: "shield", color: "#fb7185", ring: 1, phase: 4.3 },
  { kind: "server", color: "#22d3ee", ring: 2, phase: 5.3 },
  { kind: "card", color: "#f472b6", ring: 1, phase: 2.9 },
  { kind: "block", color: "#34d399", ring: 2, phase: 0.6 },
];

const RINGS = [
  { r: 2.7, tilt: 0.35, speed: 0.22 },
  { r: 3.3, tilt: -0.55, speed: -0.16 },
  { r: 2.2, tilt: 1.1, speed: 0.28 },
];

function orbitPos(ring: number, angle: number, out: THREE.Vector3) {
  const { r, tilt } = RINGS[ring];
  out.set(Math.cos(angle) * r, 0, Math.sin(angle) * r);
  out.applyAxisAngle(new THREE.Vector3(1, 0, 0), tilt);
  return out;
}

function Shape({ kind, color }: { kind: Kind; color: string }) {
  const mat = (
    <meshStandardMaterial color="#0b1020" emissive={color} emissiveIntensity={0.55} metalness={0.6} roughness={0.25} transparent opacity={0.88} />
  );
  switch (kind) {
    case "card":
      return (
        <mesh>
          <boxGeometry args={[1.25, 0.8, 0.05]} />
          {mat}
          <Edges color={color} />
        </mesh>
      );
    case "id":
      return (
        <group>
          <mesh>
            <boxGeometry args={[1.0, 0.66, 0.05]} />
            {mat}
            <Edges color={color} />
          </mesh>
          <mesh position={[-0.25, 0.02, 0.04]}>
            <circleGeometry args={[0.16, 24]} />
            <meshBasicMaterial color={color} />
          </mesh>
        </group>
      );
    case "coin":
      return (
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.45, 0.45, 0.1, 40]} />
          {mat}
          <Edges color={color} />
        </mesh>
      );
    case "block":
      return (
        <mesh>
          <boxGeometry args={[0.7, 0.7, 0.7]} />
          {mat}
          <Edges color={color} />
        </mesh>
      );
    case "shield":
      return (
        <mesh>
          <octahedronGeometry args={[0.5]} />
          {mat}
          <Edges color={color} />
        </mesh>
      );
    case "server":
      return (
        <group>
          {[-0.28, 0, 0.28].map((y) => (
            <mesh key={y} position={[0, y, 0]}>
              <boxGeometry args={[0.9, 0.22, 0.5]} />
              {mat}
              <Edges color={color} />
            </mesh>
          ))}
        </group>
      );
  }
}

function Orbiter({ index }: { index: number }) {
  const item = ITEMS[index];
  const group = useRef<THREE.Group>(null);
  const packet = useRef<THREE.Mesh>(null);
  const tmp = useMemo(() => new THREE.Vector3(), []);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const a = item.phase + t * RINGS[item.ring].speed;
    orbitPos(item.ring, a, tmp);
    if (group.current) {
      group.current.position.copy(tmp);
      group.current.rotation.y = t * 0.6 + index;
      group.current.rotation.x = Math.sin(t * 0.5 + index) * 0.4;
    }
    // A data packet flows from each item into the core and back.
    if (packet.current) {
      const u = (t * 0.35 + index / ITEMS.length) % 1;
      const k = u < 0.5 ? 1 - u * 2 : (u - 0.5) * 2;
      packet.current.position.copy(tmp).multiplyScalar(k);
    }
  });
  return (
    <>
      <group ref={group}>
        <Float speed={1.4} rotationIntensity={0.2} floatIntensity={0.4}>
          <Shape kind={item.kind} color={item.color} />
        </Float>
      </group>
      <mesh ref={packet}>
        <sphereGeometry args={[0.06, 12, 12]} />
        <meshBasicMaterial color={item.color} />
      </mesh>
    </>
  );
}

function Core() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state, dt) => {
    if (!ref.current) return;
    ref.current.rotation.y += dt * 0.25;
    const s = 1 + Math.sin(state.clock.elapsedTime * 1.8) * 0.04;
    ref.current.scale.setScalar(s);
  });
  return (
    <group>
      <mesh ref={ref}>
        <icosahedronGeometry args={[0.95, 1]} />
        <meshBasicMaterial color="#22d3ee" wireframe transparent opacity={0.55} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.55, 32, 32]} />
        <meshStandardMaterial color="#0b1020" emissive="#8b5cf6" emissiveIntensity={0.9} />
      </mesh>
    </group>
  );
}

function Rings() {
  const geoms = useMemo(
    () =>
      RINGS.map((_, ring) =>
        new THREE.BufferGeometry().setFromPoints(
          Array.from({ length: 128 }, (_, i) => orbitPos(ring, (i / 128) * Math.PI * 2, new THREE.Vector3())),
        ),
      ),
    [],
  );
  return (
    <>
      {geoms.map((g, i) => (
        <lineLoop key={i} geometry={g}>
          <lineBasicMaterial color="#3b4a7a" transparent opacity={0.6} />
        </lineLoop>
      ))}
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
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, 0.15 + state.pointer.y * 0.25, 0.05);
    ref.current.rotation.z = THREE.MathUtils.lerp(ref.current.rotation.z, -state.pointer.x * 0.15, 0.05);
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
        <Core />
        <Rings />
        {ITEMS.map((_, i) => (
          <Orbiter key={i} index={i} />
        ))}
      </Rig>
      <Particles />
    </Canvas>
  );
}

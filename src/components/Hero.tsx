"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, CheckCircle2, CreditCard, MapPin, Rocket, ScanFace } from "lucide-react";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

function Typewriter({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const word = words[i % words.length];
    const delay = del ? 35 : text === word ? 1600 : 70;
    const id = setTimeout(() => {
      if (!del && text === word) setDel(true);
      else if (del && text === "") {
        setDel(false);
        setI((n) => n + 1);
      } else setText(word.slice(0, text.length + (del ? -1 : 1)));
    }, delay);
    return () => clearTimeout(id);
  }, [text, del, i, words]);
  return (
    <span className="font-mono text-cyan">
      &gt;_ {text}
      <span className="caret">▍</span>
    </span>
  );
}

function LocalTime() {
  const [t, setT] = useState("--:--:--");
  useEffect(() => {
    const tick = () =>
      setT(new Date().toLocaleTimeString("en-GB", { timeZone: profile.timezone, hour12: false }));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return <span className="font-mono">{t} IST</span>;
}

function SplitName({ text, delay, className }: { text: string; delay: number; className?: string }) {
  return (
    <span className={`inline-block ${className ?? ""}`} aria-label={text}>
      {text.split("").map((c, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="inline-block"
          initial={{ y: "110%", opacity: 0, rotateX: -80 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          transition={{ delay: delay + i * 0.05, type: "spring", stiffness: 160, damping: 16 }}
        >
          {c}
        </motion.span>
      ))}
    </span>
  );
}

const badges = [
  { icon: ScanFace, text: "KYC verified · liveness ✓", cls: "-left-12 top-8 text-emerald", delay: 2.2 },
  { icon: CreditCard, text: "Payment captured · ₹2,499", cls: "-right-10 top-1/3 text-cyan", delay: 2.5 },
  { icon: CheckCircle2, text: "Tx confirmed · 12/12", cls: "-left-8 bottom-24 text-violet", delay: 2.8 },
  { icon: Rocket, text: "Deployed · Azure", cls: "-right-6 bottom-8 text-amber", delay: 3.1 },
];

function useWebGL() {
  const [ok, setOk] = useState(false);
  useEffect(() => {
    // Phones get the light gradient fallback: saves battery and keeps the name readable.
    if (window.matchMedia("(max-width: 767px)").matches) return;
    try {
      const c = document.createElement("canvas");
      setOk(!!(c.getContext("webgl2") || c.getContext("webgl")));
    } catch {
      setOk(false);
    }
  }, []);
  return ok;
}

export function Hero() {
  const webgl = useWebGL();
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-28">
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute inset-0 opacity-40 md:left-[42%] md:opacity-90">
        {webgl ? (
          <HeroScene />
        ) : (
          <div className="absolute right-[-20%] top-24 h-72 w-72 rounded-full bg-gradient-to-br from-cyan/25 to-violet/25 blur-3xl md:right-[10%] md:top-1/4 md:h-80 md:w-80" />
        )}
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent md:via-ink/40" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 md:grid-cols-[1.25fr_0.75fr] md:pt-10">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald/30 bg-emerald/10 px-3 py-1 font-mono text-xs text-emerald"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
            </span>
            {profile.availability}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7 }}
            className="font-mono text-sm text-muted"
          >
            {"// gm, I'm"}
          </motion.p>
          <h1 className="mt-2 text-[3.4rem] font-bold leading-[0.95] tracking-tight [perspective:600px] sm:text-7xl lg:text-8xl">
            <SplitName text={profile.firstName} delay={1.75} />
            <br />
            <SplitName text={profile.lastName} delay={2.05} className="text-gradient" />
          </h1>

          <div className="mt-6 h-7 truncate text-base sm:text-xl">
            <Typewriter words={profile.roles} />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.6 }}
            className="mt-8 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:items-center"
          >
            <a
              href="#projects"
              className="rounded-xl bg-gradient-to-r from-cyan to-violet px-5 py-3 text-center font-semibold text-ink shadow-[0_0_30px_rgba(34,211,238,0.35)] transition hover:brightness-110"
            >
              Explore my work
            </a>
            <a href="#about" className="rounded-xl border border-line px-5 py-3 text-center font-semibold transition hover:border-cyan hover:text-cyan">
              About me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8 }}
            className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted sm:mt-10"
          >
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-cyan" /> {profile.location}
            </span>
            <span className="flex items-center gap-2">
              <span className="text-violet">◷</span> <LocalTime />
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 1.9, type: "spring", stiffness: 90 }}
          className="relative mx-auto w-[min(320px,80vw)]"
        >
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-cyan/40 via-violet/30 to-pink-400/30 blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 p-1.5 glass">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.4rem]">
              <Image src={profile.photo} alt={profile.name} fill priority sizes="320px" className="object-cover object-top" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/85 to-transparent p-4 pt-20">
                <div className="font-semibold">{profile.name}</div>
                <div className="font-mono text-xs text-cyan">Front-End Team Lead · 14 yrs</div>
              </div>
            </div>
          </div>
          {badges.map(({ icon: Icon, text, cls, delay }) => (
            <motion.div
              key={text}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: [0, -6, 0] }}
              transition={{ opacity: { delay }, y: { delay, duration: 4, repeat: Infinity, ease: "easeInOut" } }}
              className={`absolute hidden items-center gap-2 rounded-xl px-3 py-2 font-mono text-xs shadow-xl sm:flex glass ${cls}`}
            >
              <Icon className="h-4 w-4" />
              <span className="text-text">{text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <a href="#about" className="absolute bottom-6 left-1/2 hidden md:flex -translate-x-1/2 flex-col items-center gap-1 font-mono text-[11px] text-muted">
        scroll to explore
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </a>
    </section>
  );
}

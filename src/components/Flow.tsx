"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeftRight, Boxes, CandlestickChart, CreditCard, Landmark, Rocket, ScanFace, Wallet } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { flowStages } from "@/data/profile";
import { ProjectVisual } from "./visuals/Visuals";

const icons = {
  kyc: ScanFace,
  banking: Landmark,
  payment: CreditCard,
  wallet: Wallet,
  remittance: ArrowLeftRight,
  exchange: CandlestickChart,
  intent: Boxes,
  devops: Rocket,
} as const;

const STEP_MS = 3800;

export function Flow() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const rail = useRef<HTMLDivElement>(null);
  const steps = useRef<(HTMLButtonElement | null)[]>([]);

  // On narrow screens the stepper scrolls sideways; keep the active step centred.
  useEffect(() => {
    const box = rail.current;
    const btn = steps.current[active];
    if (!box || !btn || box.scrollWidth <= box.clientWidth) return;
    box.scrollTo({ left: btn.offsetLeft - box.clientWidth / 2 + btn.offsetWidth / 2, behavior: "smooth" });
  }, [active]);

  useEffect(() => {
    if (paused) return;
    const id = setTimeout(() => setActive((a) => (a + 1) % flowStages.length), STEP_MS);
    return () => clearTimeout(id);
  }, [active, paused]);

  const stage = flowStages[active];
  const pct = (active / (flowStages.length - 1)) * 100;

  return (
    <section className="relative mx-auto max-w-6xl px-5 py-12 md:py-16">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="font-mono text-xs text-violet">{"// one_request.trace()"}</div>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          One customer journey, <span className="text-gradient">every system I&apos;ve built.</span>
        </h2>
      </motion.div>

      <div className="mt-8 rounded-2xl p-4 glass sm:p-6" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        {/* stepper with a packet travelling along the rail */}
        <div ref={rail} className="relative -mx-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:px-0">
          <div className="relative flex min-w-[640px] justify-between">
            <div className="absolute left-5 right-5 top-5 h-px bg-line" />
            <motion.div
              className="absolute left-5 top-5 h-px bg-gradient-to-r from-cyan via-violet to-emerald"
              animate={{ width: `calc((100% - 2.5rem) * ${pct / 100})` }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
            <motion.span
              className="absolute top-[15px] h-2.5 w-2.5 rounded-full bg-cyan shadow-[0_0_14px_rgba(34,211,238,0.9)]"
              animate={{ left: `calc(1.25rem + (100% - 2.5rem) * ${pct / 100} - 5px)` }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
            {flowStages.map((s, i) => {
              const Icon = icons[s.visual as keyof typeof icons] ?? Boxes;
              const on = i === active;
              const done = i < active;
              return (
                <button
                  key={s.title}
                  ref={(el) => {
                    steps.current[i] = el;
                  }}
                  onClick={() => setActive(i)}
                  className="relative z-10 flex w-20 flex-col items-center gap-2 text-center"
                  aria-label={s.title}
                >
                  <motion.span
                    className={`grid h-10 w-10 place-items-center rounded-xl border transition-colors ${
                      on ? "border-cyan bg-cyan/15 text-cyan" : done ? "border-emerald/50 bg-ink text-emerald" : "border-line bg-ink text-muted"
                    }`}
                    animate={on ? { scale: [1, 1.12, 1], boxShadow: ["0 0 0 rgba(34,211,238,0)", "0 0 22px rgba(34,211,238,0.6)", "0 0 0 rgba(34,211,238,0)"] } : { scale: 1 }}
                    transition={{ duration: 1.6, repeat: on ? Infinity : 0 }}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.span>
                  <span className={`font-mono text-[10px] leading-tight ${on ? "text-text" : "text-muted"}`}>{s.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* active stage: big live visual + what I built there */}
        <div className="mt-6 grid gap-6 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div className="relative h-52 overflow-hidden rounded-xl border border-line bg-panel/60 p-3 sm:h-64">
            <AnimatePresence mode="wait">
              <motion.div
                key={stage.title}
                className="h-full"
                initial={{ opacity: 0, scale: 0.96, filter: "blur(4px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.03, filter: "blur(4px)" }}
                transition={{ duration: 0.4 }}
              >
                <ProjectVisual kind={stage.visual} />
              </motion.div>
            </AnimatePresence>
            <motion.div
              key={`bar-${active}-${paused}`}
              className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan to-violet"
              initial={{ width: "0%" }}
              animate={{ width: paused ? "0%" : "100%" }}
              transition={{ duration: STEP_MS / 1000, ease: "linear" }}
            />
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={stage.title}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.35 }}
            >
              <div className="font-mono text-xs text-cyan">
                step {String(active + 1).padStart(2, "0")} / {String(flowStages.length).padStart(2, "0")}
              </div>
              <h3 className="mt-1 text-2xl font-bold">{stage.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text/80">{stage.text}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {stage.tags.map((t) => (
                  <span key={t} className="rounded bg-panel-2 px-2 py-0.5 font-mono text-[10px] text-text/70">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

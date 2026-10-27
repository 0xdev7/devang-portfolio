"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { caseStudies, faq } from "@/data/profile";
import { BlockHeader } from "./BlockHeader";
import { ProjectVisual } from "./visuals/Visuals";

const steps = [
  { key: "problem", label: "problem", cls: "border-rose/30 bg-rose/5 text-rose" },
  { key: "solution", label: "solution", cls: "border-cyan/30 bg-cyan/5 text-cyan" },
  { key: "result", label: "result", cls: "border-emerald/30 bg-emerald/5 text-emerald" },
] as const;

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mt-16">
      <div className="mb-4 font-mono text-xs text-violet">{"// recruiter.faq()"}</div>
      <h3 className="mb-6 text-2xl font-bold sm:text-3xl">Questions I get asked most</h3>
      <div className="space-y-2">
        {faq.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} className="overflow-hidden rounded-xl glass">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold transition hover:text-cyan"
              >
                {f.q}
                <ChevronDown className={`h-4 w-4 shrink-0 text-muted transition ${isOpen ? "rotate-180 text-cyan" : ""}`} />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-5"
                  >
                    <p className="pb-4 text-sm leading-relaxed text-text/80">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function Cases() {
  return (
    <section id="cases" className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-16 md:py-24">
      <BlockHeader
        block={4}
        kicker="// hard_problems.solve()"
        title={
          <>
            Hard problems, <span className="text-gradient">shipped solutions.</span>
          </>
        }
      />

      <div className="grid gap-4 md:grid-cols-2">
        {caseStudies.map((c, i) => (
          <motion.article
            key={c.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: (i % 2) * 0.08 }}
            className="flex flex-col overflow-hidden rounded-2xl glass"
          >
            <div className="relative h-28 border-b border-line bg-panel/60 p-3">
              <ProjectVisual kind={c.visual} />
              <span className="absolute left-3 top-3 rounded-md border border-line bg-ink/80 px-2 py-0.5 font-mono text-[10px] text-muted">
                case #{String(i + 1).padStart(2, "0")}
              </span>
              <span className="absolute right-3 top-3 rounded-md border border-amber/40 bg-amber/10 px-2 py-0.5 font-mono text-[10px] text-amber">
                {c.market}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <div className="font-mono text-[11px] text-violet">{c.where}</div>
              <h3 className="mt-1 text-xl font-bold leading-snug">{c.title}</h3>
              <div className="mt-4 space-y-2.5">
                {steps.map((s) => (
                  <div key={s.key} className={`rounded-lg border p-3 ${s.cls}`}>
                    <div className="font-mono text-[10px] uppercase tracking-wider">{s.label}</div>
                    <p className="mt-1 text-sm leading-relaxed text-text/85">{c[s.key]}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <Faq />
    </section>
  );
}

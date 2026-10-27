"use client";

import { motion } from "framer-motion";
import { Bot, FileText, GitBranch, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { aiWorkflow } from "@/data/profile";
import { BlockHeader } from "./BlockHeader";

const icons = [FileText, GitBranch, Bot, ShieldCheck];

const terminal = [
  { c: "text-muted", t: "$ claude --resume hedge-mapping-3-venue" },
  { c: "text-violet", t: "● spec       docs/superpowers/specs/dated-futures-route-design.md" },
  { c: "text-cyan", t: "● plan       docs/superpowers/plans/dated-futures-route.md · 9 tasks" },
  { c: "text-amber", t: "● implement  worktree feat/exposure-caps (3 agents)" },
  { c: "text-emerald", t: "✓ tests      1,900+ passed · 0 failed" },
  { c: "text-emerald", t: "✓ review     human-approved · staged rollout" },
];

function Terminal() {
  const [n, setN] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setN((x) => (x >= terminal.length + 3 ? 0 : x + 1)), 900);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-[#070b16] shadow-2xl">
      <div className="flex items-center gap-1.5 border-b border-line px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-rose/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald/70" />
        <span className="ml-3 font-mono text-[11px] text-muted">claude-code · hedging-engine</span>
      </div>
      <div className="min-h-[200px] space-y-1.5 p-5 font-mono text-[12.5px]">
        {terminal.slice(0, n).map((l, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} className={l.c}>
            {l.t}
          </motion.div>
        ))}
        {n <= terminal.length && <span className="caret text-cyan">▍</span>}
      </div>
    </div>
  );
}

// Spec → plan → implement → verify for one project, ticking through its real feature list.
function SpecProject({ p, offset }: { p: (typeof aiWorkflow.specProjects)[number]; offset: number }) {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 700 + offset);
    return () => clearInterval(id);
  }, [offset]);
  const stage = tick % 4;
  const i = Math.floor(tick / 4) % p.features.length;
  const stages = ["spec", "plan", "implement", "verify"];
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col rounded-2xl p-5 glass sm:p-6"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="font-mono text-[11px] text-violet">spec-driven · AI-implemented</div>
          <h3 className="mt-1 text-xl font-bold">{p.name}</h3>
          <p className="mt-1 text-sm text-muted">{p.what}</p>
        </div>
        <div className="flex shrink-0 gap-2 text-center">
          <div className="rounded-lg border border-line px-3 py-1.5">
            <div className="text-lg font-bold text-cyan">{p.specs}</div>
            <div className="font-mono text-[9px] text-muted">SPECS</div>
          </div>
          <div className="rounded-lg border border-line px-3 py-1.5">
            <div className="text-lg font-bold text-violet">{p.plans}</div>
            <div className="font-mono text-[9px] text-muted">PLANS</div>
          </div>
        </div>
      </div>

      <div className="mt-5 rounded-xl border border-line bg-ink/60 p-4">
        <div className="font-mono text-[10px] text-muted">feature</div>
        <motion.div key={i} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="mt-0.5 font-semibold">
          {p.features[i]}
        </motion.div>
        <div className="mt-3 grid grid-cols-4 gap-1.5">
          {stages.map((s, k) => (
            <div key={s}>
              <div className="h-1.5 overflow-hidden rounded-full bg-line">
                <motion.div
                  className={`h-full ${k === 3 ? "bg-emerald" : "bg-gradient-to-r from-cyan to-violet"}`}
                  animate={{ width: stage > k ? "100%" : stage === k ? "60%" : "0%" }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              <div className={`mt-1 font-mono text-[10px] ${stage >= k ? "text-text/80" : "text-muted/60"}`}>
                {stage > k ? "✓ " : ""}
                {s}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {p.features.map((f, k) => (
          <span
            key={f}
            className={`rounded px-2 py-0.5 font-mono text-[10px] transition-colors ${
              k === i ? "bg-cyan/15 text-cyan" : k < i ? "bg-emerald/10 text-emerald/80" : "bg-panel-2 text-text/60"
            }`}
          >
            {f}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function AIWorkflow() {
  return (
    <section id="ai" className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-16 md:py-24">
      <BlockHeader
        block={7}
        kicker="// agents.config"
        title={
          <>
            AI-augmented, <span className="text-gradient">human-verified.</span>
          </>
        }
      />

      <div className="grid items-start gap-10 lg:grid-cols-2">
        <div>
          <p className="text-lg leading-relaxed text-text/85">{aiWorkflow.intro}</p>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {aiWorkflow.numbers.map((n, i) => (
              <motion.div
                key={n.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-xl p-4 glass"
              >
                <div className="text-2xl font-bold text-gradient">{n.value}</div>
                <div className="text-xs text-muted">{n.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
        <Terminal />
      </div>

      <div className="relative mt-14 grid gap-4 md:grid-cols-4">
        <div className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-cyan via-violet to-emerald md:block" />
        {aiWorkflow.steps.map((s, i) => {
          const Icon = icons[i];
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative"
            >
              <motion.div
                animate={{ boxShadow: ["0 0 0 rgba(34,211,238,0)", "0 0 24px rgba(34,211,238,0.6)", "0 0 0 rgba(34,211,238,0)"] }}
                transition={{ duration: 2.4, delay: i * 0.6, repeat: Infinity }}
                className="relative z-10 mb-4 grid h-[72px] w-[72px] place-items-center rounded-2xl border border-cyan/40 bg-ink"
              >
                <Icon className="h-7 w-7 text-cyan" />
              </motion.div>
              <div className="font-mono text-[11px] text-violet">step 0{i + 1}</div>
              <div className="text-lg font-bold">{s.title}</div>
              <p className="mt-1 text-sm text-muted">{s.text}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-16">
        <div className="font-mono text-xs text-violet">{"// docs/superpowers/{specs,plans}"}</div>
        <h3 className="mt-2 text-2xl font-bold sm:text-3xl">
          Spec-based plans, <span className="text-gradient">implemented through AI.</span>
        </h3>
        <p className="mt-2 max-w-3xl text-sm text-text/75">
          I write the design spec and the step-by-step plan; Claude Code implements each task in its own worktree; I review, test and
          release. These are the real features shipped this way.
        </p>
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {aiWorkflow.specProjects.map((p, i) => (
            <SpecProject key={p.name} p={p} offset={i * 90} />
          ))}
        </div>
      </div>
    </section>
  );
}

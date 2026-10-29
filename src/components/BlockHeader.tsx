"use client";

import { motion } from "framer-motion";

function fakeRef(seed: number) {
  let h = 0x9e3779b9 ^ seed;
  let out = "";
  for (let i = 0; i < 4; i++) {
    h = Math.imul(h ^ (h >>> 15), 0x85ebca6b) >>> 0;
    out += (h & 0xff).toString(16).padStart(2, "0");
  }
  return out.toUpperCase();
}

// Each section reads like an event from a different system I've built.
const events: Record<number, { system: string; event: string; ref: string }> = {
  1: { system: "BUILD", event: "passing", ref: "RUN" },
  2: { system: "LEDGER", event: "14 yrs settled", ref: "LDG" },
  3: { system: "INCIDENT", event: "resolved", ref: "INC" },
  4: { system: "AGENT", event: "reviewed by human", ref: "PR" },
  5: { system: "DEPLOY", event: "ready", ref: "REL" },
};

export function BlockHeader({ block, title, kicker }: { block: number; title: React.ReactNode; kicker: string }) {
  const ev = events[block] ?? { system: "SYSTEM", event: "ok", ref: "REF" };
  return (
    <div className="mb-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        className="mb-4 flex flex-wrap items-center gap-3 font-mono text-xs text-muted"
      >
        <span className="rounded-md border border-cyan/50 bg-cyan/10 px-2 py-0.5 text-cyan">
          {String(block).padStart(2, "0")} · {ev.system}
        </span>
        <span>
          {ev.ref}-{fakeRef(block + 7)}
        </span>
        <span className="flex items-center gap-1 text-emerald">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald" /> {ev.event}
        </span>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-2 font-mono text-sm text-violet"
      >
        {kicker}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold tracking-tight sm:text-5xl"
      >
        {title}
      </motion.h2>
    </div>
  );
}

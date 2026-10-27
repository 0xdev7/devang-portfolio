"use client";

import { motion } from "framer-motion";

function fakeHash(seed: number) {
  let h = 0x9e3779b9 ^ seed;
  let out = "0x";
  for (let i = 0; i < 10; i++) {
    h = Math.imul(h ^ (h >>> 15), 0x85ebca6b) >>> 0;
    out += (h & 0xff).toString(16).padStart(2, "0");
  }
  return `${out.slice(0, 8)}…${out.slice(-4)}`;
}

export function BlockHeader({ block, title, kicker }: { block: number; title: React.ReactNode; kicker: string }) {
  return (
    <div className="mb-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        className="mb-4 flex flex-wrap items-center gap-3 font-mono text-xs text-muted"
      >
        <span className="rounded-md border border-cyan/50 bg-cyan/10 px-2 py-0.5 text-cyan">BLOCK #{block}</span>
        <span>hash {fakeHash(block + 7)}</span>
        <span className="hidden sm:inline">prev {fakeHash(block + 6)}</span>
        <span className="flex items-center gap-1 text-emerald">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald" /> confirmed
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

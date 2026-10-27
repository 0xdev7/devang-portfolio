"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { skills } from "@/data/profile";
import { BlockHeader } from "./BlockHeader";

export function Skills() {
  const [active, setActive] = useState(0);
  const group = skills[active];

  return (
    <section id="skills" className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-16 md:py-24">
      <BlockHeader
        block={6}
        kicker="// stack.json"
        title={
          <>
            The toolkit, <span className="text-gradient">battle-tested in production.</span>
          </>
        }
      />

      <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
        <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible" data-lenis-prevent>
          {skills.map((s, i) => (
            <button
              key={s.group}
              onClick={() => setActive(i)}
              className={`relative shrink-0 rounded-xl px-4 py-3 text-left font-mono text-sm transition ${
                i === active ? "text-text" : "text-muted hover:text-text"
              }`}
            >
              {i === active && <motion.span layoutId="skill-active" className="absolute inset-0 rounded-xl border border-cyan/50 bg-cyan/10" />}
              <span className="relative flex items-center justify-between gap-4">
                <span>{s.group}</span>
                <span className="text-[10px] text-muted">{s.items.length}</span>
              </span>
            </button>
          ))}
        </div>

        <div className="relative min-h-[320px] overflow-hidden rounded-2xl p-6 glass sm:p-8">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet/20 blur-3xl" />
          <div className="relative mb-6 font-mono text-xs text-muted">
            <span className="text-violet">const</span> <span className="text-cyan">{group.group.replace(/[^a-zA-Z]/g, "")}</span> = [
          </div>
          <motion.div key={active} className="relative flex flex-wrap gap-3">
            {group.items.map((item, i) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, scale: 0.6, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: i * 0.035, type: "spring", stiffness: 260, damping: 18 }}
                whileHover={{ y: -4, scale: 1.05 }}
                className="cursor-default rounded-xl border border-line bg-panel-2/80 px-4 py-2.5 text-sm shadow-lg transition-colors hover:border-cyan hover:text-cyan"
              >
                {item}
              </motion.span>
            ))}
          </motion.div>
          <div className="relative mt-6 font-mono text-xs text-muted">];</div>
        </div>
      </div>
    </section>
  );
}

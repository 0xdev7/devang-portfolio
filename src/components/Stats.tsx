"use client";

import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { stats } from "@/data/profile";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, value, { duration: 1.8, ease: "easeOut", onUpdate: (v) => setN(Math.round(v)) });
    return () => c.stop();
  }, [inView, value]);
  return (
    <span ref={ref}>
      {n.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group relative overflow-hidden rounded-2xl p-5 glass"
          >
            <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-cyan/10 blur-2xl transition group-hover:bg-violet/30" />
            <div className="font-mono text-[10px] text-muted">0{i + 1}</div>
            <div className="mt-2 text-3xl font-bold text-gradient">
              <Counter value={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-1 text-xs text-muted">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

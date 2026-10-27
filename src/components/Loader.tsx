"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const steps = ["Verifying identity (KYC)", "Authorising payment", "Settling transfer", "Confirming on-chain", "Deploying portfolio"];

export function Loader() {
  const [pct, setPct] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    // Time-based so a busy main thread (WebGL warm-up) can't stall the intro.
    const DURATION = 1800;
    const start = performance.now();
    const id = setInterval(() => {
      const next = Math.min(100, Math.round(((performance.now() - start) / DURATION) * 100));
      setPct(next);
      if (next === 100) {
        clearInterval(id);
        setTimeout(() => setDone(true), 300);
      }
    }, 60);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (done) document.documentElement.style.overflow = "";
  }, [done]);

  const step = steps[Math.min(steps.length - 1, Math.floor(pct / 20))];
  const blocks = 12;
  const filled = Math.round((pct / 100) * blocks);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink grid-bg"
          exit={{ opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8 font-mono text-xs tracking-[0.3em] text-muted">DEVANG.PAREKH · FINTECH SYSTEMS</div>
          <div className="flex gap-1.5">
            {Array.from({ length: blocks }).map((_, i) => (
              <motion.div
                key={i}
                className="h-7 w-7 rounded-md border"
                animate={{
                  backgroundColor: i < filled ? "rgba(34,211,238,0.85)" : "rgba(16,23,43,1)",
                  borderColor: i < filled ? "rgba(34,211,238,1)" : "rgba(29,39,66,1)",
                  boxShadow: i < filled ? "0 0 18px rgba(34,211,238,0.6)" : "0 0 0 rgba(0,0,0,0)",
                }}
                transition={{ duration: 0.2 }}
              />
            ))}
          </div>
          <div className="mt-6 flex w-[min(420px,80vw)] justify-between font-mono text-sm">
            <span className="text-muted">{step}…</span>
            <span className="text-cyan">{pct}%</span>
          </div>
          <div className="mt-2 font-mono text-[11px] text-muted/60">
            TXN-{(18_204_311 + pct * 7).toString(16).toUpperCase()} · {filled}/{blocks} checks passed
          </div>
          <button
            onClick={() => setDone(true)}
            className="mt-10 rounded-full border border-line px-4 py-1.5 font-mono text-xs text-muted transition hover:border-cyan hover:text-cyan"
          >
            Skip →
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

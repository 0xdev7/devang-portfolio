"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { sections } from "@/data/profile";

export function Nav() {
  const [active, setActive] = useState<string>("home");
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const activeIdx = sections.findIndex((s) => s.id === active);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div className="h-[2px] origin-left bg-gradient-to-r from-cyan via-violet to-pink-400" style={{ scaleX: progress }} />
      <nav className="mx-3 mt-3 flex max-w-6xl md:mx-auto items-center justify-between gap-4 rounded-2xl px-4 py-2.5 glass">
        <a href="#home" className="flex items-center gap-2 font-mono text-sm font-semibold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-cyan to-violet text-ink">DP</span>
          <span className="hidden text-muted sm:inline lg:hidden xl:inline">devang.dev</span>
        </a>

        <ol className="hidden items-center lg:flex">
          {sections.map((s, i) => {
            const isActive = s.id === active;
            const passed = i <= activeIdx;
            return (
              <li key={s.id} className="flex items-center">
                {i > 0 && (
                  <span className={`h-px w-2 transition-colors xl:w-4 duration-500 ${passed ? "bg-cyan" : "bg-line"}`} />
                )}
                <a
                  href={`#${s.id}`}
                  className={`group relative whitespace-nowrap rounded-md border px-2 py-1 font-mono text-[11px] transition-all xl:px-2.5 ${
                    isActive
                      ? "border-cyan bg-cyan/10 text-cyan shadow-[0_0_16px_rgba(34,211,238,0.35)]"
                      : passed
                        ? "border-cyan/40 text-text/80"
                        : "border-line text-muted hover:border-violet hover:text-text"
                  }`}
                >
                  <span className="opacity-60">#{s.block}</span> {s.label}
                </a>
              </li>
            );
          })}
        </ol>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="whitespace-nowrap rounded-xl bg-gradient-to-r from-cyan to-violet px-4 py-2 text-sm font-semibold text-ink transition hover:brightness-110"
          >
            Hire me
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center rounded-xl border border-line text-muted transition hover:border-cyan hover:text-cyan lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ol
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mx-3 mt-2 grid grid-cols-2 gap-2 rounded-2xl p-3 glass md:mx-auto md:max-w-6xl md:grid-cols-4 lg:hidden"
          >
            {sections.map((s, i) => {
              const isActive = s.id === active;
              return (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-2 rounded-xl border px-3 py-3 font-mono text-xs transition ${
                      isActive ? "border-cyan bg-cyan/10 text-cyan" : i <= activeIdx ? "border-cyan/30 text-text/80" : "border-line text-muted"
                    }`}
                  >
                    <span className="opacity-60">#{s.block}</span> {s.label}
                  </a>
                </li>
              );
            })}
          </motion.ol>
        )}
      </AnimatePresence>
    </header>
  );
}

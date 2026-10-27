"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { projects, type Project } from "@/data/profile";
import { BlockHeader } from "./BlockHeader";
import { ProjectVisual } from "./visuals/Visuals";

const filters = ["All", "Fintech", "KYC & Payments", "Web3", "Trading", "Full-stack", "Libraries", "AI-built"] as const;
type Filter = (typeof filters)[number];

function matches(p: Project, f: Filter) {
  if (f === "All") return true;
  const hay = `${p.title} ${p.domain} ${p.stack.join(" ")} ${p.points.join(" ")}`.toLowerCase();
  if (f === "Fintech") return /wallet|remittance|mlm|money|fintech|travel|exchange/.test(hay);
  if (f === "Web3") return /safe|defi|vault|staking|intent|lending|wagmi|solidity|treasury/.test(hay);
  if (f === "KYC & Payments") return /kyc|stripe|paypal|payment|imps|aeps|fireblocks|money transfer/.test(hay);
  if (f === "Trading") return /trading|hedge|exchange|engine|intent|mev/.test(hay);
  if (f === "Full-stack") return /node\.js|php|mssql|mysql|mongodb|postgresql|\.net|trpc/.test(hay);
  if (f === "Libraries") return /library|npm|form engine|component/.test(hay);
  return /claude|ai-built/.test(hay);
}

function Card({ p, i, hideOnMobile, onOpen }: { p: Project; i: number; hideOnMobile: boolean; onOpen: () => void }) {
  return (
    <motion.button
      layout
      onClick={onOpen}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay: (i % 6) * 0.05 }}
      whileHover={{ y: -6 }}
      className={`group relative flex-col overflow-hidden rounded-2xl text-left glass ${p.featured ? "md:col-span-2" : ""} ${hideOnMobile ? "hidden md:flex" : "flex"}`}
    >
      <div className="relative h-44 border-b border-line bg-panel/60 p-4 sm:h-52">
        <ProjectVisual kind={p.visual} />
        <span className="absolute right-3 top-3 rounded-md border border-line bg-ink/80 px-2 py-0.5 font-mono text-[10px] text-muted">
          #{String(i + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="font-mono text-[11px] text-violet">
          {p.domain}
          {p.year ? ` · ${p.year}` : ""}
        </div>
        <h3 className="mt-1 text-lg font-bold leading-snug transition group-hover:text-cyan">{p.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted">{p.points[0]}</p>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
          {p.stack.slice(0, 5).map((s) => (
            <span key={s} className="rounded bg-panel-2 px-2 py-0.5 font-mono text-[10px] text-text/70">
              {s}
            </span>
          ))}
        </div>
        <span className="mt-4 font-mono text-xs text-cyan opacity-70 transition group-hover:opacity-100">view details →</span>
      </div>
    </motion.button>
  );
}

function Modal({ p, onClose }: { p: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);
  return (
    <motion.div
      className="fixed inset-0 z-[60] grid items-end bg-ink/80 backdrop-blur sm:place-items-center sm:p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      data-lenis-prevent
    >
      <motion.div
        initial={{ y: 60, scale: 0.98 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 20, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[90dvh] w-full max-w-2xl overflow-y-auto rounded-t-2xl pb-[env(safe-area-inset-bottom)] glass sm:rounded-2xl"
      >
        <div className="relative h-48 border-b border-line bg-panel p-6 sm:h-56">
          <ProjectVisual kind={p.visual} />
          <button onClick={onClose} aria-label="Close" className="absolute right-3 top-3 rounded-lg border border-line bg-ink/80 p-1.5 hover:border-cyan">
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="p-6">
          <div className="font-mono text-xs text-violet">
            {p.domain}
            {p.year ? ` · ${p.year}` : ""}
          </div>
          <h3 className="mt-1 text-2xl font-bold">{p.title}</h3>
          <ul className="mt-4 space-y-3">
            {p.points.map((pt, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed text-text/85">
                <span className="text-cyan">▸</span>
                {pt}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <span key={s} className="rounded-md border border-line px-2 py-0.5 font-mono text-[11px] text-muted">
                {s}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const [open, setOpen] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);
  const all = projects.filter((p) => matches(p, filter));
  // Phones get the first 6, then a "show all" — desktop always shows everything.
  const MOBILE_LIMIT = 6;

  return (
    <section id="projects" className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-16 md:py-24">
      <BlockHeader
        block={5}
        kicker="// projects.shipped"
        title={
          <>
            {projects.length} builds, 2012 → 2026, <span className="text-gradient">banking to blockchain.</span>
          </>
        }
      />

      <div className="-mx-5 mb-8 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => {
              setFilter(f);
              setShowAll(false);
            }}
            className={`relative shrink-0 rounded-full px-4 py-1.5 font-mono text-xs transition ${filter === f ? "text-ink" : "text-muted hover:text-text"}`}
          >
            {filter === f && (
              <motion.span layoutId="pill" className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan to-violet" />
            )}
            <span className="relative">{f}</span>
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-flow-row-dense gap-4 md:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {all.map((p, i) => (
            <Card key={p.title} p={p} i={i} hideOnMobile={!showAll && i >= MOBILE_LIMIT} onOpen={() => setOpen(p)} />
          ))}
        </AnimatePresence>
      </motion.div>

      {!showAll && all.length > MOBILE_LIMIT && (
        <button
          onClick={() => setShowAll(true)}
          className="mt-6 w-full rounded-xl border border-line py-3 font-mono text-xs text-cyan transition hover:border-cyan md:hidden"
        >
          show all {all.length} projects ↓
        </button>
      )}

      <AnimatePresence>{open && <Modal p={open} onClose={() => setOpen(null)} />}</AnimatePresence>
    </section>
  );
}

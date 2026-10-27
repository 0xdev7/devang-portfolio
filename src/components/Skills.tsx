"use client";

import { motion } from "framer-motion";
import { Blocks, Cloud, CodeXml, CreditCard, Database, FlaskConical, Gauge, Package, ScanFace, Server, ShieldCheck, Users } from "lucide-react";
import { skills } from "@/data/profile";
import { BlockHeader } from "./BlockHeader";

const icons = {
  code: CodeXml,
  server: Server,
  database: Database,
  cloud: Cloud,
  shield: ShieldCheck,
  card: CreditCard,
  kyc: ScanFace,
  web3: Blocks,
  gauge: Gauge,
  test: FlaskConical,
  team: Users,
  package: Package,
} as const;

// One accent per card, cycled; hex so the hover spotlight can use it directly.
const accents = ["#22d3ee", "#8b5cf6", "#34d399", "#fbbf24", "#fb7185", "#f472b6"];

const CORE = 3;
const total = skills.reduce((n, s) => n + s.items.length, 0);

// Light follows the cursor across the card.
function spotlight(e: React.MouseEvent<HTMLElement>) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
}

export function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-16 md:py-24">
      <BlockHeader
        block={1}
        kicker="// stack.json"
        title={
          <>
            The toolkit, <span className="text-gradient">battle-tested in production.</span>
          </>
        }
      />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="-mt-6 mb-8 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs text-muted"
      >
        <span>
          <span className="text-cyan">{skills.length}</span> areas
        </span>
        <span>
          <span className="text-violet">{total}</span> tools &amp; practices
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald" /> all used in shipped products
        </span>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, i) => {
          const Icon = icons[s.icon as keyof typeof icons] ?? Package;
          const accent = accents[i % accents.length];
          const core = i < CORE;
          return (
            <motion.article
              key={s.group}
              onMouseMove={spotlight}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: (i % 3) * 0.08, duration: 0.5 }}
              whileHover={{ y: -5 }}
              style={{ "--accent": accent, boxShadow: core ? `inset 0 0 0 1px ${accent}55` : undefined } as React.CSSProperties}
              className="group relative overflow-hidden rounded-2xl p-5 glass sm:p-6"
            >
              {/* cursor spotlight + top accent line */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: `radial-gradient(260px circle at var(--x, 50%) var(--y, 0%), ${accent}22, transparent 70%)` }}
              />
              <div className="absolute inset-x-0 top-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }} />

              <header className="relative mb-4 flex items-center gap-3">
                <motion.span
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border"
                  style={{ borderColor: `${accent}66`, background: `${accent}14`, color: accent }}
                  whileHover={{ rotate: -8, scale: 1.08 }}
                >
                  <Icon className="h-5 w-5" />
                </motion.span>
                <div className="min-w-0 flex-1">
                  <h3 className="truncate font-semibold">{s.group}</h3>
                  <div className="font-mono text-[10px] text-muted">{s.items.length} items</div>
                </div>
                {core && (
                  <span className="rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider" style={{ borderColor: `${accent}80`, color: accent }}>
                    core
                  </span>
                )}
              </header>

              <ul className="relative flex flex-wrap gap-1.5">
                {s.items.map((item, j) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + j * 0.025, type: "spring", stiffness: 300, damping: 20 }}
                    className={`cursor-default rounded-lg border border-line bg-panel-2/70 px-2.5 py-1 transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] ${
                      core ? "text-[13px] text-text" : "text-xs text-text/85"
                    }`}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Activity, Bot, Coins, Layers, ShieldCheck, Users } from "lucide-react";
import { edge } from "@/data/profile";
import { BlockHeader } from "./BlockHeader";
import { ProjectVisual } from "./visuals/Visuals";

const icons = { bot: Bot, coins: Coins, activity: Activity, layers: Layers, users: Users, shield: ShieldCheck } as const;
const accents = ["text-cyan", "text-amber", "text-emerald", "text-violet", "text-pink-400", "text-rose"];

export function Edge() {
  return (
    <section id="edge" className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-16 md:py-24">
      <BlockHeader
        block={1}
        kicker="// why.me"
        title={
          <>
            Where the market is going — <span className="text-gradient">and where I already am.</span>
          </>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {edge.map((e, i) => {
          const Icon = icons[e.icon as keyof typeof icons];
          return (
            <motion.article
              key={e.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: (i % 3) * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl p-6 glass"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet/10 blur-3xl transition group-hover:bg-cyan/20" />
              <div className="relative -mx-6 -mt-6 mb-5 h-28 border-b border-line bg-panel/50 px-4 py-2">
                <ProjectVisual kind={e.visual} />
              </div>
              <div className="flex items-center gap-3">
                <span className={`grid h-10 w-10 place-items-center rounded-xl border border-line bg-panel ${accents[i]}`}>
                  <Icon className="h-5 w-5" />
                </span>
                <span className="font-mono text-[11px] text-muted">edge #{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-4 text-xl font-bold leading-snug">{e.title}</h3>

              <div className="mt-4 rounded-lg border border-line/70 bg-ink/40 p-3">
                <div className="font-mono text-[10px] uppercase tracking-wider text-muted">market signal</div>
                <p className="mt-1 text-sm text-text/75">{e.signal}</p>
              </div>
              <div className="mt-3 rounded-lg border border-emerald/25 bg-emerald/5 p-3">
                <div className="font-mono text-[10px] uppercase tracking-wider text-emerald">my proof</div>
                <p className="mt-1 text-sm text-text/90">{e.proof}</p>
              </div>

              <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
                {e.tags.map((t) => (
                  <span key={t} className="rounded bg-panel-2 px-2 py-0.5 font-mono text-[10px] text-text/70">
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

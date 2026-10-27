"use client";

import { motion } from "framer-motion";
import { GraduationCap, Languages, Award } from "lucide-react";
import { about } from "@/data/profile";
import { BlockHeader } from "./BlockHeader";
import { Candles, Chain, MlmTree, Remittance } from "./visuals/Visuals";

const domainCards = [
  { title: "Blockchain & DeFi", text: "Safe multisig, intents, vaults, MEV", Visual: Chain },
  { title: "Fintech & Trading", text: "Exchanges, order books, hedging", Visual: Candles },
  { title: "Money Transfer", text: "Remittance, FX rate-lock, payouts", Visual: Remittance },
  { title: "MLM Platforms", text: "Genealogy trees, level commissions", Visual: MlmTree },
];

const layerColors = ["text-cyan", "text-violet", "text-pink-400", "text-emerald", "text-amber"];

function FullStack() {
  const fs = about.fullStack;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-16 grid gap-8 rounded-2xl p-6 glass md:p-8 lg:grid-cols-[1.1fr_0.9fr]"
    >
      <div>
        <div className="font-mono text-xs text-violet">{"// fullstack.story"}</div>
        <h3 className="mt-2 text-2xl font-bold leading-snug sm:text-3xl">{fs.title}</h3>
        {fs.story.map((p) => (
          <p key={p} className="mt-4 leading-relaxed text-text/85">
            {p}
          </p>
        ))}
        <div className="mt-6 flex flex-wrap gap-2">
          {fs.stacks.map((s) => (
            <span
              key={s}
              className="rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 font-mono text-xs text-cyan"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      <div className="relative flex flex-col gap-3">
        {/* request packet travelling down through the stack and back */}
        <div className="absolute bottom-6 left-[22px] top-6 w-px bg-gradient-to-b from-cyan via-violet to-emerald opacity-40" />
        <motion.div
          className="absolute left-[18px] h-2.5 w-2.5 rounded-full bg-cyan shadow-[0_0_12px_rgba(34,211,238,0.9)]"
          animate={{ top: ["6%", "90%", "6%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        {fs.layers.map((l, i) => (
          <motion.div
            key={l.name}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 * i }}
            className="relative ml-10 rounded-xl border border-line bg-panel/70 p-4"
          >
            <span className="absolute -left-[26px] top-1/2 h-px w-5 bg-line" />
            <div className={`font-mono text-xs ${layerColors[i]}`}>
              L{i + 1} · {l.name}
            </div>
            <div className="mt-1 text-sm text-text/85">{l.tech}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-16 md:py-24">
      <BlockHeader
        block={2}
        kicker="// about.sol"
        title={
          <>
            I build the <span className="text-gradient">front-ends money moves through.</span>
          </>
        }
      />

      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg leading-relaxed text-text/85"
          >
            {about.summary}
          </motion.p>

          <ul className="mt-8 space-y-3">
            {about.highlights.map((h, i) => (
              <motion.li
                key={h}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3"
              >
                <span className="mt-1 font-mono text-xs text-emerald">tx{i + 1} ✓</span>
                <span>{h}</span>
              </motion.li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-2">
            {about.domains.map((d) => (
              <span key={d} className="rounded-full border border-line bg-panel px-3 py-1 font-mono text-xs text-muted">
                {d}
              </span>
            ))}
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl p-4 glass">
              <GraduationCap className="mb-2 h-5 w-5 text-cyan" />
              {about.education.map((e) => (
                <div key={e} className="text-xs text-muted">{e}</div>
              ))}
            </div>
            <div className="rounded-xl p-4 glass">
              <Award className="mb-2 h-5 w-5 text-violet" />
              <div className="text-xs text-muted">{about.certification}</div>
            </div>
            <div className="rounded-xl p-4 glass">
              <Languages className="mb-2 h-5 w-5 text-emerald" />
              <div className="text-xs text-muted">{about.languages.join(" · ")}</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {domainCards.map(({ title, text, Visual }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24, rotateX: 20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl p-4 glass"
            >
              <div className="h-28">
                <Visual />
              </div>
              <div className="mt-3 font-semibold">{title}</div>
              <div className="text-xs text-muted">{text}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <FullStack />
    </section>
  );
}

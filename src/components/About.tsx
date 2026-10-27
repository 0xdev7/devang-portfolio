"use client";

import { motion } from "framer-motion";
import { GraduationCap, Languages, Award } from "lucide-react";
import { about, domainShowcase } from "@/data/profile";
import { BlockHeader } from "./BlockHeader";
import { ProjectVisual } from "./visuals/Visuals";

const layerColors = ["text-cyan", "text-violet", "text-pink-400", "text-emerald", "text-amber"];

function Domains() {
  return (
    <div className="mt-16">
      <div className="font-mono text-xs text-violet">{"// domains.map(shipped)"}</div>
      <h3 className="mt-2 text-2xl font-bold leading-snug sm:text-3xl">
        12 domains, <span className="text-gradient">one engineer who has shipped in all of them.</span>
      </h3>
      <div className="mt-6 grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4">
        {domainShowcase.map((d, i) => (
          <motion.div
            key={d.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: (i % 4) * 0.08 }}
            whileHover={{ y: -6 }}
            className="group rounded-2xl p-2.5 glass sm:p-4"
          >
            <div className="h-20 rounded-xl sm:h-28 border border-line/60 bg-panel/50 p-1 transition group-hover:border-cyan/40">
              <ProjectVisual kind={d.visual} />
            </div>
            <div className="mt-3 flex items-center justify-between gap-2">
              <span className="text-sm font-semibold sm:text-base">{d.title}</span>
              <span className="hidden font-mono text-[10px] text-muted sm:inline">{String(i + 1).padStart(2, "0")}</span>
            </div>
            <div className="mt-0.5 line-clamp-2 text-[11px] leading-relaxed text-muted sm:line-clamp-none sm:text-xs">{d.text}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

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
        block={3}
        kicker="// about.me"
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
                <span className="mt-1 font-mono text-xs text-emerald">✓</span>
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

        </div>

        <div className="grid content-start gap-3">
          {[
            { Icon: GraduationCap, cls: "text-cyan", label: "Education", lines: about.education },
            { Icon: Award, cls: "text-violet", label: "Certifications", lines: [about.certification] },
            { Icon: Languages, cls: "text-emerald", label: "Languages", lines: [about.languages.join(" · ")] },
          ].map(({ Icon, cls, label, lines }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4 rounded-2xl p-5 glass"
            >
              <Icon className={`mt-0.5 h-5 w-5 shrink-0 ${cls}`} />
              <div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-muted">{label}</div>
                {lines.map((l) => (
                  <div key={l} className="mt-1 text-sm text-text/85">{l}</div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Domains />
      <FullStack />
    </section>
  );
}

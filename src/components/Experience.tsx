"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { experience } from "@/data/profile";
import { BlockHeader } from "./BlockHeader";

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-16 md:py-24">
      <BlockHeader
        block={3}
        kicker="// experience.log"
        title={
          <>
            14 years, <span className="text-gradient">four roles, one direction.</span>
          </>
        }
      />

      <div ref={ref} className="relative pl-8 sm:pl-14">
        <div className="absolute left-2 top-0 h-full w-px bg-line sm:left-5" />
        <motion.div className="absolute left-2 top-0 w-px bg-gradient-to-b from-cyan via-violet to-pink-400 sm:left-5" style={{ height }} />

        {experience.map((job, i) => (
          <motion.article
            key={job.role}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative mb-12 last:mb-0"
          >
            <div className="absolute -left-[30px] top-2 grid h-6 w-6 place-items-center rounded-md border border-cyan bg-ink font-mono text-[9px] text-cyan shadow-[0_0_14px_rgba(34,211,238,0.5)] sm:-left-[46px]">
              {experience.length - i}
            </div>

            <div className="rounded-2xl p-6 glass sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-2xl font-bold">{job.role}</h3>
                  <div className="mt-1 text-text/80">{job.focus}</div>
                  <div className="mt-1 font-mono text-sm text-cyan">
                    @ {job.company} · {job.place}
                  </div>
                </div>
                <div className="text-right">
                  <div className="rounded-lg border border-line bg-panel px-3 py-1 font-mono text-xs text-muted">{job.period}</div>
                  {job.note && <div className="mt-2 font-mono text-[11px] text-amber">{job.note}</div>}
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {job.tags.map((t) => (
                  <span key={t} className="rounded-md bg-violet/10 px-2 py-0.5 font-mono text-[11px] text-violet">
                    {t}
                  </span>
                ))}
              </div>

              <ul className="mt-5 space-y-3">
                {job.points.map((p, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + j * 0.06 }}
                    className="flex gap-3 text-sm leading-relaxed text-text/80"
                  >
                    <span className="mt-[3px] text-cyan">▸</span>
                    <span>{p}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

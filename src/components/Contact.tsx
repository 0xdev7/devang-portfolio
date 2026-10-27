"use client";

import { motion } from "framer-motion";
import { Check, Copy, Mail, Phone, UserRound } from "lucide-react";
import { useState } from "react";
import { profile } from "@/data/profile";
import { BlockHeader } from "./BlockHeader";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);
  const [msg, setMsg] = useState("");

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard blocked — the mailto link still works */
    }
  };

  const send = () => {
    setSent(true);
    const body = encodeURIComponent(msg || "Hi Devang, I'd like to talk about a role.");
    setTimeout(() => {
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent("Opportunity for Devang")}&body=${body}`;
      setSent(false);
    }, 1400);
  };

  const links = [
    { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: profile.phone, href: profile.phoneHref },
    { icon: UserRound, label: "linkedin.com/in/devang-parekh", href: profile.linkedin },
  ];

  return (
    <section id="contact" className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-16 md:py-24">
      <BlockHeader
        block={8}
        kicker="// contact.send()"
        title={
          <>
            Let&apos;s ship <span className="text-gradient">the next product together.</span>
          </>
        }
      />

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-3">
          <p className="mb-6 text-lg text-text/85">
            Open to senior front-end, full-stack and team-lead roles — fintech, Web3, trading or any product where reliability matters. Ahmedabad-based — remote, hybrid or on-site.
          </p>
          {links.map(({ icon: Icon, label, href }) => (
            <motion.a
              key={href}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              whileHover={{ x: 6 }}
              className="flex items-center gap-4 rounded-xl p-4 glass transition hover:border-cyan/50"
            >
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-cyan/10">
                <Icon className="h-5 w-5 text-cyan" />
              </span>
              <span className="font-mono text-sm">{label}</span>
            </motion.a>
          ))}
          <button onClick={copy} className="flex items-center gap-2 font-mono text-xs text-muted hover:text-cyan">
            {copied ? <Check className="h-3.5 w-3.5 text-emerald" /> : <Copy className="h-3.5 w-3.5" />}
            {copied ? "copied to clipboard" : "copy email"}
          </button>
        </div>

        <div className="rounded-2xl p-6 glass">
          <div className="mb-5 flex items-center justify-between font-mono text-xs">
            <span className="text-muted">Send transaction</span>
            <span className="rounded-md bg-emerald/10 px-2 py-0.5 text-emerald">fee: ₹0</span>
          </div>
          <div className="space-y-3 font-mono text-sm">
            <div className="rounded-xl border border-line bg-panel p-3">
              <div className="text-[10px] text-muted">FROM</div>
              <div className="text-text/80">you@company.com</div>
            </div>
            <div className="rounded-xl border border-line bg-panel p-3">
              <div className="text-[10px] text-muted">TO</div>
              <div className="text-cyan">{profile.email}</div>
            </div>
            <div className="rounded-xl border border-line bg-panel p-3">
              <div className="text-[10px] text-muted">DATA</div>
              <textarea
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                rows={4}
                placeholder="Tell me about the role…"
                className="mt-1 w-full resize-none bg-transparent text-text outline-none placeholder:text-muted/50"
              />
            </div>
          </div>
          <button
            onClick={send}
            disabled={sent}
            className="mt-5 w-full rounded-xl bg-gradient-to-r from-cyan to-violet py-3 font-semibold text-ink transition hover:brightness-110 disabled:opacity-80"
          >
            {sent ? "Encrypting… sent ✓" : "Encrypt & send"}
          </button>
        </div>
      </div>

      <footer className="mt-24 flex flex-col items-center justify-between gap-3 border-t border-line pt-8 font-mono text-xs text-muted sm:flex-row">
        <span>© {new Date().getFullYear()} {profile.name} · Ahmedabad, India</span>
        <span>Built with Next.js · React Three Fiber · Framer Motion</span>
      </footer>
    </section>
  );
}

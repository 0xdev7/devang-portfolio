"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Download, X } from "lucide-react";
import { useEffect, useState } from "react";

type InstallEvent = Event & { prompt: () => Promise<void>; userChoice: Promise<{ outcome: string }> };

export function PWA() {
  const [deferred, setDeferred] = useState<InstallEvent | null>(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Dev server rebuilds chunks constantly — only cache in production.
    if ("serviceWorker" in navigator && process.env.NODE_ENV === "production") {
      navigator.serviceWorker.register("/sw.js").catch(() => {});
    }
    const onPrompt = (e: Event) => {
      e.preventDefault();
      setDeferred(e as InstallEvent);
    };
    const onInstalled = () => setDeferred(null);
    window.addEventListener("beforeinstallprompt", onPrompt);
    window.addEventListener("appinstalled", onInstalled);
    return () => {
      window.removeEventListener("beforeinstallprompt", onPrompt);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  const install = async () => {
    if (!deferred) return;
    await deferred.prompt();
    await deferred.userChoice;
    setDeferred(null);
  };

  return (
    <AnimatePresence>
      {deferred && !hidden && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ delay: 4 }}
          className="fixed inset-x-3 bottom-[max(12px,env(safe-area-inset-bottom))] z-[55] mx-auto flex max-w-sm items-center gap-3 rounded-2xl p-3 shadow-2xl glass"
        >
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-cyan to-violet font-mono text-sm font-bold text-ink">
            DP
          </span>
          <div className="min-w-0 flex-1">
            <div className="text-sm font-semibold">Install this portfolio</div>
            <div className="truncate font-mono text-[11px] text-muted">Works offline · one tap from home screen</div>
          </div>
          <button
            onClick={install}
            className="flex items-center gap-1 rounded-lg bg-gradient-to-r from-cyan to-violet px-3 py-2 text-xs font-semibold text-ink"
          >
            <Download className="h-3.5 w-3.5" /> Install
          </button>
          <button onClick={() => setHidden(true)} aria-label="Dismiss" className="text-muted hover:text-text">
            <X className="h-4 w-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";

import { tickerItems } from "@/data/profile";

export function Ticker() {
  const row = (
    <div className="flex shrink-0 items-center">
      {tickerItems.map((t) => (
        <span key={t} className="flex items-center gap-2 px-6 font-mono text-sm">
          <span className="text-text/90">{t}</span>
          <span className="text-violet">✦</span>
        </span>
      ))}
    </div>
  );
  return (
    <div className="relative overflow-hidden border-y border-line bg-panel/60 py-3 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max animate-marquee">
        {row}
        {row}
      </div>
    </div>
  );
}

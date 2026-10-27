"use client";

import { useEffect, useState } from "react";
import { tickerItems } from "@/data/profile";

function useDrift(base: number) {
  const [v, setV] = useState(base);
  useEffect(() => {
    const id = setInterval(() => setV((x) => +(x * (1 + (Math.random() - 0.48) * 0.004)).toFixed(2)), 1500);
    return () => clearInterval(id);
  }, []);
  return v;
}

export function Ticker() {
  const eth = useDrift(3412.55);
  const btc = useDrift(98210.4);
  const items = [
    { k: "ETH", v: eth.toLocaleString("en-US"), up: true },
    ...tickerItems.slice(0, 8).map((t) => ({ k: t, v: "", up: true })),
    { k: "BTC", v: btc.toLocaleString("en-US"), up: true },
    ...tickerItems.slice(8).map((t) => ({ k: t, v: "", up: true })),
  ];
  const row = (
    <div className="flex shrink-0 items-center">
      {items.map((it, i) => (
        <span key={i} className="flex items-center gap-2 px-6 font-mono text-sm">
          <span className="text-text/90">{it.k}</span>
          {it.v ? <span className="text-emerald">▲ {it.v}</span> : <span className="text-violet">✦</span>}
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

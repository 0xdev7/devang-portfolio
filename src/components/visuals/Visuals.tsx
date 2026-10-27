"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import type { VisualKind } from "@/data/profile";

const C = { cyan: "#22d3ee", violet: "#8b5cf6", emerald: "#34d399", amber: "#fbbf24", rose: "#fb7185", line: "#1d2742", muted: "#8a94b3" };
const loop = { repeat: Infinity, ease: "easeInOut" as const };

/* Deterministic pseudo-random so server and client render the same SVG. */
function seeded(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function useTick(ms: number) {
  const [t, setT] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setT((x) => x + 1), ms);
    return () => clearInterval(id);
  }, [ms]);
  return t;
}

/* Candlestick chart that keeps printing new candles — exchanges, hedging. */
function Candles({ accent = C.cyan }: { accent?: string }) {
  const tick = useTick(900);
  const base = useMemo(() => {
    const r = seeded(7);
    let p = 50;
    return Array.from({ length: 40 }, () => {
      const o = p;
      p = Math.max(15, Math.min(85, p + (r() - 0.47) * 12));
      return { o, c: p, h: Math.max(o, p) + r() * 6, l: Math.min(o, p) - r() * 6 };
    });
  }, []);
  const visible = Array.from({ length: 18 }, (_, i) => base[(i + tick) % base.length]);
  return (
    <svg viewBox="0 0 200 110" className="h-full w-full">
      {[25, 50, 75].map((y) => (
        <line key={y} x1="0" x2="200" y1={y} y2={y} stroke={C.line} strokeDasharray="2 4" />
      ))}
      {visible.map((k, i) => {
        const up = k.c >= k.o;
        const col = up ? C.emerald : C.rose;
        const x = 8 + i * 10.5;
        return (
          <g key={`${tick}-${i}`}>
            <line x1={x} x2={x} y1={100 - k.h} y2={100 - k.l} stroke={col} strokeWidth="1" />
            <rect x={x - 3} width="6" y={100 - Math.max(k.o, k.c)} height={Math.max(1.5, Math.abs(k.c - k.o))} fill={col} rx="1" />
          </g>
        );
      })}
      <motion.line
        x1="0"
        x2="200"
        stroke={accent}
        strokeDasharray="3 3"
        animate={{ y1: [40, 60, 45], y2: [40, 60, 45] }}
        transition={{ duration: 6, ...loop }}
      />
    </svg>
  );
}

/* Blocks chaining with a tx packet travelling — treasury, intents. */
function Chain() {
  return (
    <svg viewBox="0 0 200 110" className="h-full w-full">
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          {i > 0 && <line x1={i * 48 - 14} x2={i * 48 + 8} y1="55" y2="55" stroke={C.line} strokeWidth="2" />}
          <motion.rect
            x={8 + i * 48}
            y="35"
            width="34"
            height="40"
            rx="6"
            fill="#0b1020"
            stroke={C.cyan}
            initial={{ opacity: 0.3 }}
            animate={{ opacity: [0.3, 1, 0.3], stroke: [C.line, C.cyan, C.line] }}
            transition={{ duration: 3.2, delay: i * 0.8, ...loop }}
          />
          <text x={25 + i * 48} y="52" textAnchor="middle" fontSize="7" fill={C.muted} fontFamily="monospace">#{18204 + i}</text>
          <text x={25 + i * 48} y="64" textAnchor="middle" fontSize="6" fill={C.emerald} fontFamily="monospace">✓ tx</text>
        </g>
      ))}
      <motion.circle r="4" cy="55" fill={C.emerald} animate={{ cx: [20, 180] }} transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }} />
    </svg>
  );
}

/* 3-of-5 multisig: signer dots light up then execute. */
function Multisig() {
  const tick = useTick(700);
  const signed = tick % 7;
  const pts = [0, 1, 2, 3, 4].map((i) => {
    const a = -Math.PI / 2 + (i * 2 * Math.PI) / 5;
    return { x: 100 + Math.cos(a) * 38, y: 55 + Math.sin(a) * 38 };
  });
  const executed = signed >= 3;
  return (
    <svg viewBox="0 0 200 110" className="h-full w-full">
      {pts.map((p, i) => (
        <g key={i}>
          <line x1="100" y1="55" x2={p.x} y2={p.y} stroke={i < signed ? C.emerald : C.line} strokeWidth="1.5" />
          <circle cx={p.x} cy={p.y} r="8" fill="#0b1020" stroke={i < signed ? C.emerald : C.line} strokeWidth="2" />
          {i < signed && <text x={p.x} y={p.y + 3} textAnchor="middle" fontSize="8" fill={C.emerald}>✓</text>}
        </g>
      ))}
      <motion.circle
        cx="100"
        cy="55"
        r="16"
        fill={executed ? "rgba(52,211,153,0.15)" : "rgba(34,211,238,0.1)"}
        stroke={executed ? C.emerald : C.cyan}
        strokeWidth="2"
        animate={executed ? { scale: [1, 1.15, 1] } : {}}
        transition={{ duration: 0.6 }}
        style={{ transformOrigin: "100px 55px" }}
      />
      <text x="100" y="58" textAnchor="middle" fontSize="8" fontFamily="monospace" fill={executed ? C.emerald : C.cyan}>
        {Math.min(signed, 5)}/5
      </text>
      <text x="170" y="104" textAnchor="middle" fontSize="7" fontFamily="monospace" fill={executed ? C.emerald : C.muted}>
        {executed ? "EXECUTED" : "SIGNING"}
      </text>
    </svg>
  );
}

/* Genealogy tree growing level by level with commission coins flowing up. */
function MlmTree() {
  const levels = [
    [{ x: 100, y: 16 }],
    [{ x: 55, y: 48 }, { x: 145, y: 48 }],
    [{ x: 30, y: 84 }, { x: 80, y: 84 }, { x: 120, y: 84 }, { x: 170, y: 84 }],
  ];
  const edges: { a: { x: number; y: number }; b: { x: number; y: number }; d: number }[] = [];
  levels[1].forEach((n) => edges.push({ a: levels[0][0], b: n, d: 0.4 }));
  levels[2].forEach((n, i) => edges.push({ a: levels[1][i < 2 ? 0 : 1], b: n, d: 0.9 }));
  return (
    <svg viewBox="0 0 200 110" className="h-full w-full">
      {edges.map((e, i) => (
        <motion.line
          key={i}
          x1={e.a.x}
          y1={e.a.y}
          x2={e.b.x}
          y2={e.b.y}
          stroke={C.violet}
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: e.d }}
        />
      ))}
      {levels.flat().map((n, i) => (
        <motion.circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={i === 0 ? 9 : 7}
          fill="#0b1020"
          stroke={i === 0 ? C.amber : C.violet}
          strokeWidth="2"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: i === 0 ? 0 : i < 3 ? 0.6 : 1.3, type: "spring" }}
          style={{ transformOrigin: `${n.x}px ${n.y}px` }}
        />
      ))}
      {levels[2].map((n, i) => (
        <motion.circle
          key={`coin-${i}`}
          r="3"
          fill={C.amber}
          animate={{ cx: [n.x, levels[1][i < 2 ? 0 : 1].x, 100], cy: [n.y, 48, 16], opacity: [0, 1, 0] }}
          transition={{ duration: 2.4, delay: 1.6 + i * 0.5, repeat: Infinity, repeatDelay: 1 }}
        />
      ))}
    </svg>
  );
}

/* World arcs with money moving between corridors and a flipping FX rate. */
function Remittance() {
  const tick = useTick(1400);
  const rate = (83.12 + Math.sin(tick) * 0.18).toFixed(2);
  const pts = [
    { x: 40, y: 40, l: "US" },
    { x: 95, y: 30, l: "UK" },
    { x: 118, y: 52, l: "AE" },
    { x: 145, y: 58, l: "IN" },
    { x: 170, y: 82, l: "SG" },
  ];
  const routes = [
    [0, 3],
    [1, 3],
    [2, 3],
    [2, 4],
    [1, 2],
  ];
  const dots = useMemo(() => {
    const r = seeded(11);
    return Array.from({ length: 90 }, () => ({ x: 10 + r() * 180, y: 15 + r() * 80 }));
  }, []);
  return (
    <svg viewBox="0 0 200 110" className="h-full w-full">
      {dots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r="0.9" fill={C.line} />
      ))}
      {routes.map(([a, b], i) => {
        const A = pts[a];
        const B = pts[b];
        const mx = (A.x + B.x) / 2;
        const my = Math.min(A.y, B.y) - 22;
        const d = `M${A.x},${A.y} Q${mx},${my} ${B.x},${B.y}`;
        return (
          <g key={i}>
            <path d={d} fill="none" stroke={C.cyan} strokeOpacity="0.35" strokeWidth="1" />
            <motion.circle
              r="2.6"
              fill={C.emerald}
              style={{ offsetPath: `path("${d}")` }}
              animate={{ offsetDistance: ["0%", "100%"] }}
              transition={{ duration: 2.2, delay: i * 0.45, repeat: Infinity, ease: "easeInOut" }}
            />
          </g>
        );
      })}
      {pts.map((p) => (
        <g key={p.l}>
          <circle cx={p.x} cy={p.y} r="3.5" fill={C.cyan} />
          <text x={p.x} y={p.y - 6} textAnchor="middle" fontSize="6" fontFamily="monospace" fill={C.muted}>{p.l}</text>
        </g>
      ))}
      <rect x="6" y="88" width="72" height="16" rx="4" fill="#0b1020" stroke={C.line} />
      <text x="42" y="99" textAnchor="middle" fontSize="7" fontFamily="monospace" fill={C.emerald}>USD/INR {rate} 🔒</text>
    </svg>
  );
}

/* Phone with transactions sliding in — NassWallet. */
function Wallet() {
  const tick = useTick(1600);
  const txs = [
    { t: "P2P transfer", a: "-25K IQD", c: C.rose },
    { t: "Cash-in · Agent", a: "+120K IQD", c: C.emerald },
    { t: "Bill payment", a: "-18.5K IQD", c: C.rose },
    { t: "Airtime top-up", a: "-5K IQD", c: C.rose },
    { t: "Merchant QR", a: "-9.7K IQD", c: C.rose },
    { t: "Bulk salary", a: "+640K IQD", c: C.emerald },
  ];
  const shown = [0, 1, 2].map((i) => txs[(tick + i) % txs.length]);
  return (
    <svg viewBox="0 0 200 110" className="h-full w-full">
      <rect x="54" y="4" width="92" height="102" rx="12" fill="#0b1020" stroke={C.line} strokeWidth="2" />
      <rect x="60" y="12" width="80" height="24" rx="6" fill="url(#wg)" />
      <defs>
        <linearGradient id="wg" x1="0" x2="1">
          <stop offset="0" stopColor={C.cyan} />
          <stop offset="1" stopColor={C.violet} />
        </linearGradient>
      </defs>
      <text x="65" y="21" fontSize="5" fill="#05070d" fontFamily="monospace">BALANCE</text>
      <text x="65" y="31" fontSize="8" fontWeight="700" fill="#05070d">1,284,500 IQD</text>
      {shown.map((tx, i) => (
        <motion.g key={`${tick}-${i}`} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }}>
          <rect x="60" y={42 + i * 19} width="80" height="15" rx="4" fill="#10172b" />
          <text x="64" y={51 + i * 19} fontSize="4.6" fill="#e6ebff">{tx.t}</text>
          <text x="136" y={51 + i * 19} fontSize="4.2" textAnchor="end" fill={tx.c} fontFamily="monospace">{tx.a}</text>
        </motion.g>
      ))}
      <motion.g animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, ...loop }}>
        <rect x="156" y="38" width="34" height="34" rx="4" fill="none" stroke={C.cyan} />
        {[0, 1, 2, 3].map((r) =>
          [0, 1, 2, 3].map((c) => ((r * 3 + c) % 3 ? <rect key={`${r}${c}`} x={160 + c * 7} y={42 + r * 7} width="5" height="5" fill={C.cyan} /> : null)),
        )}
      </motion.g>
      <text x="173" y="82" textAnchor="middle" fontSize="6" fontFamily="monospace" fill={C.muted}>QR PAY</text>
      <text x="26" y="40" textAnchor="middle" fontSize="6" fontFamily="monospace" fill={C.muted}>EN · ع · کوردی</text>
      <text x="26" y="58" textAnchor="middle" fontSize="11" fill={C.emerald}>35+</text>
      <text x="26" y="68" textAnchor="middle" fontSize="5.5" fill={C.muted}>services</text>
    </svg>
  );
}

/* KPI dashboard: counters, bars and a PnL line — ops dashboard. */
function Dashboard() {
  const tick = useTick(1200);
  const bars = useMemo(() => {
    const r = seeded(3);
    return Array.from({ length: 30 }, () => 20 + r() * 50);
  }, []);
  const pnl = (2.41 + Math.sin(tick / 2) * 0.3).toFixed(2);
  return (
    <svg viewBox="0 0 200 110" className="h-full w-full">
      {[
        { l: "TVL", v: "$11.59M", c: C.cyan },
        { l: "PnL 24h", v: `+${pnl}%`, c: C.emerald },
        { l: "Alerts", v: `${tick % 3}`, c: C.amber },
      ].map((k, i) => (
        <g key={k.l}>
          <rect x={6 + i * 64} y="6" width="60" height="26" rx="5" fill="#10172b" stroke={C.line} />
          <text x={12 + i * 64} y="16" fontSize="5.5" fill={C.muted} fontFamily="monospace">{k.l}</text>
          <text x={12 + i * 64} y="27" fontSize="9" fontWeight="700" fill={k.c}>{k.v}</text>
        </g>
      ))}
      {Array.from({ length: 14 }).map((_, i) => {
        const h = bars[(i + tick) % bars.length];
        return (
          <motion.rect
            key={i}
            x={8 + i * 13.5}
            width="9"
            rx="2"
            fill={i % 4 === 0 ? C.violet : C.cyan}
            fillOpacity="0.7"
            animate={{ y: 104 - h, height: h }}
            transition={{ type: "spring", stiffness: 80, damping: 14 }}
          />
        );
      })}
    </svg>
  );
}

/* Supply/borrow gauge + health factor — money market. */
function Lending() {
  return (
    <svg viewBox="0 0 200 110" className="h-full w-full">
      <path d="M40 90 A60 60 0 0 1 160 90" fill="none" stroke={C.line} strokeWidth="10" strokeLinecap="round" />
      <motion.path
        d="M40 90 A60 60 0 0 1 160 90"
        fill="none"
        stroke="url(#lg)"
        strokeWidth="10"
        strokeLinecap="round"
        animate={{ pathLength: [0.3, 0.72, 0.55, 0.3] }}
        transition={{ duration: 6, ...loop }}
      />
      <defs>
        <linearGradient id="lg">
          <stop offset="0" stopColor={C.emerald} />
          <stop offset="0.6" stopColor={C.amber} />
          <stop offset="1" stopColor={C.rose} />
        </linearGradient>
      </defs>
      <text x="100" y="78" textAnchor="middle" fontSize="16" fontWeight="700" fill="#e6ebff">1.82</text>
      <text x="100" y="90" textAnchor="middle" fontSize="6" fontFamily="monospace" fill={C.muted}>HEALTH FACTOR</text>
      <text x="22" y="20" fontSize="6" fontFamily="monospace" fill={C.emerald}>SUPPLY 4.2% APY</text>
      <text x="178" y="20" textAnchor="end" fontSize="6" fontFamily="monospace" fill={C.amber}>BORROW 6.1% APR</text>
    </svg>
  );
}

/* Stake → voting power bars growing. */
function Staking() {
  return (
    <svg viewBox="0 0 200 110" className="h-full w-full">
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.rect
          key={i}
          x={20 + i * 34}
          width="22"
          rx="4"
          fill={i === 4 ? C.violet : C.cyan}
          fillOpacity={0.3 + i * 0.15}
          animate={{ y: [95, 95 - (i + 1) * 15, 95], height: [0, (i + 1) * 15, 0] }}
          transition={{ duration: 4, delay: i * 0.2, ...loop }}
        />
      ))}
      <text x="100" y="14" textAnchor="middle" fontSize="7" fontFamily="monospace" fill={C.muted}>STAKE → veVOTE → DELEGATE → CLAIM</text>
    </svg>
  );
}

/* Vault filling with share price ticking — ERC-4626. */
function Vault() {
  return (
    <svg viewBox="0 0 200 110" className="h-full w-full">
      <rect x="70" y="14" width="60" height="82" rx="10" fill="#0b1020" stroke={C.violet} strokeWidth="2" />
      <motion.rect
        x="72"
        width="56"
        rx="8"
        fill={C.violet}
        fillOpacity="0.45"
        animate={{ y: [90, 40, 90], height: [4, 54, 4] }}
        transition={{ duration: 5, ...loop }}
      />
      <text x="100" y="58" textAnchor="middle" fontSize="8" fontFamily="monospace" fill="#e6ebff">sZeroX</text>
      {[0, 1, 2].map((i) => (
        <motion.circle
          key={i}
          r="4"
          fill={C.amber}
          animate={{ cx: [30, 70], cy: [30 + i * 20, 50], opacity: [0, 1, 0] }}
          transition={{ duration: 1.6, delay: i * 0.5, repeat: Infinity }}
        />
      ))}
      <text x="165" y="50" textAnchor="middle" fontSize="6" fontFamily="monospace" fill={C.muted}>share</text>
      <text x="165" y="60" textAnchor="middle" fontSize="8" fontFamily="monospace" fill={C.emerald}>1.0427</text>
    </svg>
  );
}

/* Order book bars pulsing on both sides — exchanges. */
function OrderBook() {
  const tick = useTick(500);
  const rows = useMemo(() => {
    const r = seeded(5 + tick);
    return Array.from({ length: 7 }, () => 0.2 + r() * 0.7);
  }, [tick]);
  return (
    <svg viewBox="0 0 200 110" className="h-full w-full">
      {rows.map((v, i) => (
        <g key={i}>
          <motion.rect x={98 - v * 80} y={8 + i * 13} height="10" fill={C.emerald} fillOpacity="0.25" animate={{ width: v * 80 }} />
          <motion.rect x="102" y={8 + i * 13} height="10" fill={C.rose} fillOpacity="0.25" animate={{ width: (1 - v) * 80 }} />
          <text x="94" y={16 + i * 13} textAnchor="end" fontSize="6" fontFamily="monospace" fill={C.emerald}>{(3412 - i * 0.5).toFixed(1)}</text>
          <text x="106" y={16 + i * 13} fontSize="6" fontFamily="monospace" fill={C.rose}>{(3412.5 + i * 0.5).toFixed(1)}</text>
        </g>
      ))}
    </svg>
  );
}

/* Rust hot-path ↔ TS orchestrator over a Redis bus. */
function Engine() {
  return (
    <svg viewBox="0 0 200 110" className="h-full w-full">
      <rect x="8" y="30" width="56" height="50" rx="8" fill="#0b1020" stroke={C.amber} />
      <text x="36" y="52" textAnchor="middle" fontSize="8" fill={C.amber} fontWeight="700">Rust</text>
      <text x="36" y="63" textAnchor="middle" fontSize="5.5" fontFamily="monospace" fill={C.muted}>hot-path</text>
      <rect x="136" y="30" width="56" height="50" rx="8" fill="#0b1020" stroke={C.cyan} />
      <text x="164" y="52" textAnchor="middle" fontSize="8" fill={C.cyan} fontWeight="700">TS</text>
      <text x="164" y="63" textAnchor="middle" fontSize="5.5" fontFamily="monospace" fill={C.muted}>orchestrator</text>
      <rect x="78" y="46" width="44" height="18" rx="9" fill="#10172b" stroke={C.rose} />
      <text x="100" y="58" textAnchor="middle" fontSize="6" fontFamily="monospace" fill={C.rose}>redis+pb</text>
      {[0, 1, 2].map((i) => (
        <motion.circle key={`a${i}`} r="2.5" cy="50" fill={C.amber} animate={{ cx: [64, 136] }} transition={{ duration: 1.2, delay: i * 0.4, repeat: Infinity, ease: "linear" }} />
      ))}
      {[0, 1].map((i) => (
        <motion.circle key={`b${i}`} r="2.5" cy="60" fill={C.cyan} animate={{ cx: [136, 64] }} transition={{ duration: 1.5, delay: i * 0.7, repeat: Infinity, ease: "linear" }} />
      ))}
      <text x="100" y="98" textAnchor="middle" fontSize="6.5" fontFamily="monospace" fill={C.emerald}>p95 &lt; 5ms · 19 CEX feeds</text>
    </svg>
  );
}

/* Flight path with a plane — travel. */
function Travel() {
  const d = "M20 85 Q100 -5 180 70";
  return (
    <svg viewBox="0 0 200 110" className="h-full w-full">
      <path d={d} fill="none" stroke={C.cyan} strokeDasharray="4 4" strokeOpacity="0.6" />
      <circle cx="20" cy="85" r="4" fill={C.cyan} />
      <circle cx="180" cy="70" r="4" fill={C.violet} />
      <motion.text
        fontSize="12"
        style={{ offsetPath: `path("${d}")`, offsetRotate: "auto" }}
        animate={{ offsetDistance: ["0%", "100%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        ✈
      </motion.text>
      <text x="20" y="100" textAnchor="middle" fontSize="6" fontFamily="monospace" fill={C.muted}>AMD</text>
      <text x="180" y="85" textAnchor="middle" fontSize="6" fontFamily="monospace" fill={C.muted}>DXB</text>
      <text x="100" y="104" textAnchor="middle" fontSize="6" fontFamily="monospace" fill={C.emerald}>FARE LOCKED · TICKETED</text>
    </svg>
  );
}

export function ProjectVisual({ kind }: { kind: VisualKind }) {
  switch (kind) {
    case "wallet":
      return <Wallet />;
    case "dashboard":
      return <Dashboard />;
    case "multisig":
      return <Multisig />;
    case "hedge":
      return <Candles accent={C.amber} />;
    case "intent":
      return <Chain />;
    case "lending":
      return <Lending />;
    case "exchange":
      return <OrderBook />;
    case "remittance":
      return <Remittance />;
    case "mlm":
      return <MlmTree />;
    case "engine":
      return <Engine />;
    case "staking":
      return <Staking />;
    case "vault":
      return <Vault />;
    case "travel":
      return <Travel />;
  }
}

export { Candles, Chain, MlmTree, Remittance };

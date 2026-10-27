export type VisualKind =
  | "wallet"
  | "dashboard"
  | "multisig"
  | "lending"
  | "staking"
  | "vault"
  | "hedge"
  | "intent"
  | "engine"
  | "exchange"
  | "remittance"
  | "mlm"
  | "travel"
  | "payment"
  | "kyc"
  | "banking"
  | "ecommerce"
  | "api"
  | "devops";

export const profile = {
  name: "Devang Parekh",
  firstName: "Devang",
  lastName: "Parekh",
  roles: [
    "Front-End Team Lead",
    "Senior Full-Stack Engineer",
    "React · Next.js · Node.js",
    "Fintech, KYC & Payments",
    "Web3 & DeFi Builder",
    "AI-Augmented Engineer",
  ],
  tagline:
    "14 years building fintech — crypto exchanges, money transfer, e-wallets, digital-bank onboarding with e-KYC, and now Web3 / DeFi. I lead a team of 6, build the Node.js APIs and databases behind the UI, and ship it all with Docker, CI/CD and Azure.",
  location: "Ahmedabad, India",
  availability: "Open to senior / lead roles · Remote, hybrid or on-site",
  timezone: "Asia/Kolkata",
  email: "parekhdevang14@gmail.com",
  phone: "+91 90333 80042",
  phoneHref: "tel:+919033380042",
  linkedin: "https://www.linkedin.com/in/devang-parekh-96a96218a",
  photo: "/images/devang.jpg",
};

export const stats = [
  { value: 14, suffix: "", label: "Years in fintech & web" },
  { value: 15, suffix: "+", label: "Payment gateways integrated" },
  { value: 5, suffix: "+", label: "KYC / identity providers" },
  { value: 20, suffix: "+", label: "Security audit findings fixed" },
  { value: 6, suffix: "", label: "Engineers led" },
  { value: 12, suffix: "", label: "Domains shipped" },
];

export const tickerItems = [
  "React 19",
  "Next.js 16",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "MSSQL",
  "PHP · CodeIgniter",
  "Express",
  "e-KYC integration",
  "Payment gateway integration",
  "wagmi · viem",
  "ECC · AES · RSA",
  "WebAssembly",
  "tRPC",
  "Redux-Saga",
  "Tailwind",
  "Docker",
  "Azure Container Apps",
  "GitHub Actions CI/CD",
  "Claude Code",
];

// Every domain I've shipped in, each with its own animated graphic.
export const domainShowcase: { title: string; text: string; visual: VisualKind }[] = [
  { title: "Digital Banking", text: "Account opening, agency banking — City Bank, CRDB, 9PSB", visual: "banking" },
  { title: "e-KYC & Identity", text: "Sumsub, Jumio, Aadhaar, NID OCR, video liveness", visual: "kyc" },
  { title: "Payment Gateways", text: "Stripe, PayPal, PayU, CCAvenue, Paystack — 15+", visual: "payment" },
  { title: "E-Wallets", text: "NassWallet, QCell, Rupio — 35+ services per role", visual: "wallet" },
  { title: "Money Transfer", text: "DMT / IMPS, AEPS, remittance via bank APIs", visual: "remittance" },
  { title: "Crypto Exchanges", text: "Ohocash, Paro, white-label for 8+ brands", visual: "exchange" },
  { title: "Web3 & DeFi", text: "Staking, money market, Safe multisig, vaults", visual: "intent" },
  { title: "Trading & Hedging", text: "Filler & solver integrations, hedging dashboards (AI-assisted)", visual: "hedge" },
  { title: "Travel Booking", text: "Flights with TBO API, caching, ticketing", visual: "travel" },
  { title: "E-commerce", text: "OpenCart stores, grocery marketplace", visual: "ecommerce" },
  { title: "MLM Platforms", text: "Genealogy trees, level commissions, e-wallet", visual: "mlm" },
  { title: "APIs & DevOps", text: "Node / PHP / .NET APIs, Docker, Azure CI/CD", visual: "devops" },
];

// A customer's journey through the systems I've built, start to finish.
export const flowStages: { title: string; text: string; visual: VisualKind; tags: string[] }[] = [
  { title: "Onboard · e-KYC", text: "ID card OCR, video liveness and AML checks before an account exists — City Bank, Zeebu KYC / KYB, Aadhaar e-KYC.", visual: "kyc", tags: ["Sumsub", "Jumio", "Aadhaar", "NID OCR", "Liveness"] },
  { title: "Open account", text: "Rule-driven onboarding across agent, branch and self channels; one submit fans out to 6+ bank APIs.", visual: "banking", tags: ["React", "Redux-Saga", "JSON config", "Bank APIs"] },
  { title: "Pay", text: "Card, UPI and net-banking through 15+ gateways — authorise, capture, refund, webhooks and 3-D Secure.", visual: "payment", tags: ["Stripe", "PayPal", "PayU", "CCAvenue", "Paystack"] },
  { title: "Wallet", text: "35+ wallet services per role — P2P, cash-in / out, bills, airtime, QR pay — in English, Arabic and Kurdish.", visual: "wallet", tags: ["NassWallet", "QCell", "Rupio", "RTL"] },
  { title: "Transfer", text: "Domestic money transfer (IMPS / NEFT), AEPS and cross-border remittance with AES + RSA encrypted calls.", visual: "remittance", tags: ["ICICI", "RBL", "AU", "AES + RSA"] },
  { title: "Trade", text: "Crypto exchanges with live order books over WebSocket / SignalR — Ohocash, Paro and a white-label for 8+ brands.", visual: "exchange", tags: ["React", ".NET", "SignalR", "TradingView"] },
  { title: "On-chain", text: "Web2 → Web3: wallet sign-in, staking, money market, Safe multisig and savings vaults.", visual: "intent", tags: ["wagmi", "viem", "ethers", "Safe SDK"] },
  { title: "Ship", text: "Docker images through GitHub Actions to Azure Container Apps and Web Apps, UAT → prod.", visual: "devops", tags: ["Docker", "GitHub Actions", "Azure"] },
];

export const about = {
  summary:
    "Front-End Team Lead who also works full-stack. I started in PHP (CodeIgniter, OpenCart), grew through AngularJS and React, and today build with Next.js, Node.js and TypeScript on MSSQL, MySQL, MongoDB and PostgreSQL. My strongest areas are payments and KYC integrations, API security, performance tuning and implementing reusable component libraries — and I lead the team that ships them.",
  highlights: [
    "Lead a team of 6 engineers — people manager since 2022: sprint planning, code review, hiring, mentoring, releases",
    "50+ fintech products: exchanges, wallets, money transfer, digital banking, DeFi",
    "15+ payment gateways and 5+ KYC providers integrated end to end",
    "20+ security audit findings fixed · ECC / AES / RSA encrypted APIs",
    "Implemented and tested shared libraries across portals: ECC encryption npm package, 35-control form engine, React component kit",
  ],
  domains: [
    "Fintech",
    "Digital Banking",
    "e-KYC & Onboarding",
    "Payments",
    "Crypto Exchanges",
    "Wallets",
    "Money Transfer",
    "DeFi & Treasury",
    "Trading Ops",
    "Travel",
    "MLM",
  ],
  fullStack: {
    title: "Front-end lead by title. Full-stack by habit.",
    story: [
      "I lead front-end teams, but I've never stopped at the API boundary. When a screen needs a new endpoint, a faster query or a background job, I build it myself instead of filing a ticket and waiting.",
      "My career is full-stack from the start: PHP + MySQL exchanges, a Node.js CAB API on MSSQL, OpenCart ↔ Node.js flight booking, MongoDB lead systems, and today Next.js + tRPC + PostgreSQL. It makes me a better lead — I can review a PR end to end and unblock whoever is stuck, front or back.",
    ],
    stacks: ["MERN", "Next.js full-stack", "Node + Postgres", "PHP + MySQL", "Node + MSSQL"],
    layers: [
      { name: "UI", tech: "React · Next.js · TypeScript · Tailwind · AngularJS" },
      { name: "API", tech: "Node.js · Express · tRPC · REST · GraphQL · PHP" },
      { name: "Realtime", tech: "WebSockets · Socket.io · SignalR · cron jobs" },
      { name: "Data", tech: "PostgreSQL · MongoDB · MySQL · MSSQL · Redis" },
      { name: "Ship", tech: "Docker · GitHub Actions CI/CD · Azure Web Apps · Container Apps" },
    ],
  },
  education: [
    "MCA — Indira Gandhi National Open University (IGNOU)",
    "BCA — SVCCS, Bhavnagar",
  ],
  certification: "The Graph Academy — GraphQL & Subgraphs (2023) · TestDome React (2023)",
  languages: ["English", "Hindi", "Gujarati"],
};

export type Job = {
  role: string;
  focus: string;
  company: string;
  place: string;
  period: string;
  note?: string;
  tags: string[];
  points: string[];
};

export const experience: Job[] = [
  {
    role: "Front-End Team Lead",
    focus: "Web3, DeFi, Trading & Telecom-Fintech",
    company: "Bankai Infotech (Panamax Infotech · Bankai Group)",
    place: "Ahmedabad",
    period: "2023 — Present",
    tags: ["Zeebu", "ORBT", "DeFi", "Trading", "Team lead"],
    points: [
      "Lead a 6-engineer front-end team for Zeebu (telecom settlement & loyalty) and ORBT (intent-based DeFi) — architecture, sprint planning, code review, hiring, mentoring and 100+ production releases.",
      "Moved Zeebu from Web2 to Web3 in three steps — MetaMask + ethers.js → wagmi with a custom wallet connector → Reown AppKit — with staking, withdraw, bonus, referral commission and wallet-signature registration.",
      "Integrated Money Market (Aave-style) and ORBT contracts — supply / borrow / repay, ERC-4626 savings vaults, Safe multisig flows — with Multicall batching and subgraph data.",
      "Built the DeFi trading stack: UniswapX / 1inch Fusion filler, OKX and CoW solvers, keeper and rebalancer, a treasury dashboard (980 commits) and a PERP / X-PERP hedge module — the Rust services built with Claude Code (AI), which I specified, reviewed and tested.",
      "Build and ship every service myself: Docker images to Azure Container Registry, GitHub Actions CI/CD with UAT → prod promotion, deploys to Azure Container Apps and Web Apps; Azure → AWS KMS federation for signing.",
      "Owned security: OAK Security audit remediation, encrypted payloads, nonce / replay and MITM protection, throttling, CSP — 20+ findings fixed.",
    ],
  },
  {
    role: "Principal Consultant — Frontend Development",
    focus: "Digital Banking, E-Wallets & e-KYC (MobiFin)",
    company: "Bankai Infotech (Panamax Infotech · Bankai Group)",
    place: "Ahmedabad",
    period: "Apr 2020 — 2022",
    tags: ["Digital banking", "e-KYC", "Wallets", "Security"],
    points: [
      "Front-end lead for MobiFin banking and wallet portals for banks and telcos — NassWallet (Iraq), QCell / QMoney (Gambia), City Bank (Bangladesh), CRDB (Tanzania), 9PSB (Nigeria), Tangerine, ColtoMoney.",
      "Designed a configuration-driven portal engine: screens, forms and services render from JSON / CMS config per role — new services ship without a redeploy.",
      "Built City Bank's digital account opening: huge rule-driven forms, NID card OCR and validation, video liveness, 6+ API fan-out.",
      "Implemented and tested the in-house ECC encryption npm package (checksum + signature), added replay / MITM protection and throttling, ran Go → WebAssembly crypto R&D, and tuned Webpack builds.",
    ],
  },
  {
    role: "PHP Developer → Principal Consultant, Front-End",
    focus: "Crypto Exchanges, Money Transfer, Wallets & Travel",
    company: "Joshi Biztech Solution Pvt. Ltd.",
    place: "Bhavnagar",
    period: "Jan 2016 — Mar 2020",
    note: "Acquired by Bankai Group, Mar 2020 · Person of the Year 2018/19",
    tags: ["PHP", "Node.js", "AngularJS", "React", "Exchanges", "DMT / AEPS"],
    points: [
      "Grew from PHP developer to front-end lead across 15+ fintech products — exchanges, DMT / IMPS money transfer, AEPS, recharge, white-label wallets, travel and marketplaces.",
      "Built crypto exchanges on CodeIgniter + MySQL (Ohocash, Paro), then rebuilt Paro in React + Redux-Saga with a .NET API — the base for a white-label exchange used by 8+ brands.",
      "Built a secure Node.js CAB API on MSSQL, OpenCart + AngularJS 1.5 money transfer with AES + RSA encrypted API calls, and an OpenCart ↔ Node.js flight module with caching.",
      "Integrated 15+ payment gateways, ICICI / RBL bank APIs, BitGo wallets and Aadhaar e-KYC; mentored 8–12 engineers.",
    ],
  },
  {
    role: "PHP Developer",
    focus: "E-commerce, SaaS & Enterprise Web",
    company: "Cantech",
    place: "Bhavnagar",
    period: "Oct 2012 — Dec 2015",
    tags: ["PHP", "MySQL", "jQuery", "E-commerce"],
    points: [
      "Built e-commerce stores, SaaS modules and enterprise web apps in PHP (CodeIgniter, OpenCart), MySQL and jQuery.",
      "Mailchimp, Zoho and Facebook Account-Kit integrations; reusable form / table / dashboard kits.",
    ],
  },
];

export type Project = {
  title: string;
  domain: string;
  year?: string;
  visual: VisualKind;
  stack: string[];
  points: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Zeebu dApp — Web2 → Web3 Staking & Referral",
    domain: "Telecom-fintech · staking · KYC",
    year: "2023 – 2025",
    visual: "staking",
    featured: true,
    stack: ["Next.js 14", "TypeScript", "ethers", "wagmi v2", "Reown AppKit", "Sumsub", "Apollo"],
    points: [
      "Converted a live Web2 product to Web3 in three steps: MetaMask + ethers.js → wagmi v2 with a custom wallet connector, chain switching and session persistence → Reown AppKit.",
      "Staking for ZBU, LP, vZBU and vLP across chains — stake, withdraw, early withdraw, restake, bonus and points → token claim.",
      "Waitlist + referral system: invite codes, referral commission and history, leaderboard, Claimr social tasks, airdrop and Chainalysis screening.",
      "Wallet-signature registration with signed terms; KYC / KYB via Sumsub 1.0 → 2.0; encrypted payloads, nonce + server-time sync (replay protection), throttling and OAK Security audit fixes.",
    ],
  },
  {
    title: "City Bank — Digital Account Opening & e-KYC",
    domain: "Digital banking · onboarding · e-KYC",
    year: "2020 – 2022",
    visual: "kyc",
    featured: true,
    stack: ["React", "Redux-Saga", "JSON-config engine", "ECC + AES", "Go WASM", "Webpack"],
    points: [
      "Self, loan, merchant and credit-card onboarding across agent, branch and sales channels — very large rule-driven forms with field-level validation.",
      "NID card OCR with identity validation and video liveness check; one submit fans out to 6+ bank APIs.",
      "Every request ECC + AES encrypted with checksum and signature, nonce / timestamp replay protection, throttling and MITM protection.",
      "Go → WebAssembly crypto inside React, plus Webpack code-splitting and compression for slow mobile networks.",
    ],
  },
  {
    title: "NassWallet — Plug-and-Play Wallet Platform",
    domain: "E-wallet · multi-role PaaS",
    year: "2020 – 2022",
    visual: "wallet",
    stack: ["React", "Redux-Saga", "Material-UI", "Highcharts", "PWA", "Node.js"],
    points: [
      "Dynamic service engine: onboarding, KYC and every transaction render from server-side layout config — 35 reusable form controls, multi-step wizards and per-role actions (customer, agent, merchant, enterprise, teller).",
      "35+ services live in Iraq — P2P, bank / agent cash-in / cash-out, bill pay, airtime, e-vouchers, bulk disbursement, 3-D Secure top-up.",
      "English / Arabic / Kurdish with RTL, maker-checker approvals, 2FA, transaction PIN, device registration and QR pay.",
      "Same engine reused for QCell / QMoney, CRDB, 9PSB, Tangerine and ColtoMoney.",
    ],
  },
  {
    title: "ORBT Finance Center — Treasury & Trading Ops",
    domain: "DeFi treasury · data-heavy ops UI · AI-built",
    year: "2026",
    visual: "dashboard",
    featured: true,
    stack: ["Next.js 14", "tRPC v11", "Drizzle", "PostgreSQL", "BullMQ (AI-written)", "Redis", "Safe SDK", "AWS KMS", "Docker", "Azure Container Apps", "Claude Code"],
    points: [
      "Lead author (980 commits): 3-of-5 Gnosis Safe across 5 EVM chains with propose → sign → execute flows, delegates, whitelisting and signed-message login.",
      "Treasury, money-market, executor, filler, maker, pocket and OKX views — PnL, solvency, reconciliation, rebalancing and alerts.",
      "3-tier data fallback (Postgres views → admin proxy → live stats) so pages stay up when a source fails; virtualised tables with CSV / XLSX export.",
    ],
  },
  {
    title: "Hedge Module — PERP & X-PERP",
    domain: "Trading · risk · hedging · AI-built",
    year: "2026",
    visual: "hedge",
    featured: true,
    stack: ["Claude Code (AI)", "Rust (AI-written)", "PostgreSQL", "Redis", "OKX v5 API"],
    points: [
      "Built end to end with Claude Code: I wrote the spec, risk rules and test plan, the AI wrote the Rust, and I reviewed and tested every change — 11 crates, 1,900+ tests, hedging fills on OKX spot, perpetuals and dated futures.",
      "OCO brackets, trailing stops, reprice ladder and long / short netting; exposure caps per asset / side / route and a kill switch.",
      "HMAC-signed API with replay protection, PnL attribution, Telegram alerts and an operator console.",
    ],
  },
  {
    title: "DeFi Trading Stack — UniswapX, 1inch Fusion, CoW & OKX",
    domain: "Intents · fillers · solvers · MEV",
    year: "2026",
    visual: "intent",
    featured: true,
    stack: ["TypeScript", "Node.js", "ethers v6", "PostgreSQL", "AWS KMS", "Docker", "Azure Container Apps", "Claude Code (AI)"],
    points: [
      "Filler service (335 commits): inventory-backed UniswapX Dutch-order and 1inch Fusion filler — pre-fill simulation, multi-venue quoting off the OKX book, post-fill hedging, per-venue gas-tier ladders, exclusive-window re-simulate / replace and MEV-aware submit lanes.",
      "Risk controls: fleet-wide $500k open-volume cap measured off the live OKX book, volatility gate, quote pause across the fleet, per-pair markup and buy / sell switches from a live config console.",
      "OKX intent solver (137 commits, Rust written with Claude Code): /quote → /solve → /settle with EIP-712 signing and KMS broadcast, OKX spot + perp hedging; Multicall batching cut RPC load ~138k → ~49k calls / day.",
      "CoW Protocol solver (AI-written Rust, my config and testing): dry-run master switch, Redis-down salvage of financial writes, JIT ERC-1271 settlement from executor inventory.",
      "Each service shipped as a Docker image through GitHub Actions to Azure Container Apps, with per-venue dry-run and UAT / pre-prod / prod pipelines.",
      "Ops around it: keeper bot with Multicall3 reconcile and per-venue hedge registry, cross-chain rebalancer with Azure → AWS KMS signing, and a solver-stats dashboard with 3-tier fallback.",
    ],
  },
  {
    title: "Money Market & ORBT dApp — Contract Integrations",
    domain: "Lending · savings vaults · Safe App",
    year: "2024 – 2026",
    visual: "lending",
    stack: ["Next.js 13–16", "React 19", "wagmi", "viem", "Safe Apps SDK", "MUI", "Jest", "Cypress"],
    points: [
      "Aave-style money market: supply / borrow / repay / withdraw, health factor, reserve analytics; swap & bridge via KyberSwap, Paraswap and Wormhole; Transak on-ramp.",
      "ORBT savings, swap, portfolio and transparency pages; ERC-4626 vaults; runs as a Safe App with EIP-1271 signature checks.",
      "Multicall batching, subgraph charts (TVL / APY), 80%+ Jest coverage and Cypress E2E.",
    ],
  },
  {
    title: "Zeebu PSP, Backoffice & Settlement",
    domain: "B2B telecom payments",
    year: "2023 – 2026",
    visual: "payment",
    stack: ["React → Next.js", "TypeScript", "Fireblocks", "wagmi v2", "subgraph"],
    points: [
      "Invoice generation and payment, swap-and-pay, settlement hooks (create / accept / reject) and Fireblocks auto-withdrawal; moved chain from BSC to Base.",
      "Backoffice: invoices, waitlist admin, farm P&L and NAV, wallet ledger and reports on shared lazy-loaded filter / report components.",
      "Migrations: React → Next.js, ethers → wagmi v2, JavaScript → TypeScript.",
    ],
  },
  {
    title: "Paro Exchange — PHP → React + .NET Rebuild",
    domain: "Crypto exchange · white-label product",
    year: "2018 – 2020",
    visual: "exchange",
    featured: true,
    stack: ["React", "Redux-Saga", ".NET API", "SignalR", "WebSocket", "TradingView", "CodeIgniter"],
    points: [
      "Started as CodeIgniter + MySQL; rebuilt as a React + Redux-Saga trading UI on a .NET API — live order book, trades and ticker over SignalR / WebSocket.",
      "Implemented the Jbs* component library (layout, cards, data tables, loaders) across the product, which became a white-label exchange used for 8+ brands (Cooldex, Worldex, Uniq and more).",
      "Spot trading with limit / stop orders, deposits, withdrawals, 2FA, KYC, referrals and admin panels.",
    ],
  },
  {
    title: "Ohocash Crypto Exchange",
    domain: "Crypto exchange · multi-pair trading",
    year: "2017 – 2019",
    visual: "exchange",
    stack: ["PHP (CodeIgniter)", "MySQL", "jQuery", "WebSocket"],
    points: [
      "Trading platform with deposit, withdraw and trade across multiple pairs; order matching logic and wallet ledger in MySQL.",
      "Later moved toward a .NET / MSSQL back-end.",
    ],
  },
  {
    title: "Money Transfer (DMT / IMPS) Platform",
    domain: "Domestic money transfer · banking APIs",
    year: "2016 – 2020",
    visual: "remittance",
    stack: ["OpenCart", "AngularJS 1.5", "AES", "RSA", "ICICI / RBL / AU APIs"],
    points: [
      "Sender / beneficiary registration, OTP verification and IMPS / NEFT transfer through ICICI, RBL, AU and NovoPay bank APIs.",
      "AES + RSA hybrid encryption on every API call; white-label iframe mode with a setup wizard for partners.",
    ],
  },
  {
    title: "CAB API — Secure Node.js Service",
    domain: "Back-end API · security",
    year: "2016 – 2020",
    visual: "api",
    stack: ["Node.js", "Express", "MSSQL", "JWT"],
    points: [
      "Secure REST API on MSSQL with JWT auth, request validation and a ClearCar adapter for a third-party system.",
    ],
  },
  {
    title: "Flight & Travel Module",
    domain: "Travel booking · caching",
    year: "2016 – 2020",
    visual: "travel",
    stack: ["OpenCart", "Node.js", "MySQL", "TBO API", "Caching"],
    points: [
      "OpenCart storefront and Node.js booking service talking both ways over a shared MySQL store.",
      "Search-result caching in front of the TBO supplier API — fewer paid calls and faster repeat searches; fare and ticket-status flow.",
    ],
  },
  {
    title: "Rupio Wallet — Recharge, DMT, AEPS & Travel",
    domain: "B2B2C fintech wallet · white-label",
    year: "2017 – 2020",
    visual: "banking",
    stack: ["OpenCart", "JavaScript", "MySQL", "Aadhaar e-KYC", "AEPS"],
    points: [
      "Cache-based JS loading, mobile / DTH recharge, money transfer as a white-label iframe, travel booking and AEPS cash withdrawal.",
      "User-type-wise access (distributor, retailer, customer) with commission rules; Aadhaar e-KYC onboarding.",
    ],
  },
  {
    title: "BFIC / XChangeOn — Trading Wallet & IPO",
    domain: "Fintech platform · payments",
    year: "2021 – 2023",
    visual: "payment",
    stack: ["React", ".NET API", "Stripe", "PayPal", "KYC"],
    points: [
      "Full user flow — registration, KYC, trading wallet and IPO-style token sale.",
      "All fintech services with Stripe, PayPal and other payment gateways.",
    ],
  },
  {
    title: "ECC Encryption & Form Engine — Implementation",
    domain: "Shared libraries · integration & testing",
    year: "2021",
    visual: "api",
    stack: ["npm", "ECC", "AES", "TypeScript", "React"],
    points: [
      "Implemented and tested the in-house ecc-node-package — ECC key exchange + AES payload encryption with checksum and signature — across Node.js services and React portals.",
      "Integrated the form-input-controls package (35 config-driven controls) into every MobiFin portal and tested each flow.",
    ],
  },
  {
    title: "Kyabol — Grocery Marketplace",
    domain: "E-commerce · grocery",
    year: "2017 – 2019",
    visual: "ecommerce",
    stack: ["OpenCart", "MySQL", "MongoDB"],
    points: ["OpenCart grocery store with MySQL catalogue and a MongoDB lead-capture system."],
  },
  {
    title: "MLM / Network-Marketing Platform",
    domain: "MLM · direct selling",
    year: "2016 – 2020",
    visual: "mlm",
    stack: ["PHP (CodeIgniter)", "MySQL", "jQuery"],
    points: [
      "Member onboarding, genealogy / matrix tree, level commissions, e-wallet, KYC and an admin commission engine with downline reports.",
    ],
  },
];

// Hard problems, told the way interviewers ask: problem → solution → result.
export const caseStudies = [
  {
    title: "Ship new wallet services without a redeploy",
    where: "NassWallet / MobiFin · 2020–22",
    visual: "wallet" as VisualKind,
    problem:
      "Every bank and telco wanted different services, forms and roles. Hard-coding screens meant a release for every change and the same work repeated per client.",
    solution:
      "Config-driven engine — screens, forms, validations and role actions render from server JSON, on 35 reusable form controls, wizards, maker-checker and RTL.",
    result: "35+ services live with no code change; same engine reused for 5 more banks and telcos.",
    market: "Platform thinking",
  },
  {
    title: "Secure a bank's onboarding against tampering",
    where: "City Bank Bangladesh · 2020–22",
    visual: "kyc" as VisualKind,
    problem:
      "Digital account opening with ID OCR, video liveness and huge forms. Bank required encrypted payloads plus replay and MITM protection — in the browser.",
    solution:
      "ECC key exchange + AES, checksum and signature per request, nonce + timestamp, throttling. Implemented with the in-house ECC npm package; Go → WebAssembly for fast crypto.",
    result: "Passed the bank security review; the same setup rolled out to every MobiFin portal.",
    market: "Security & KYC",
  },
  {
    title: "Move a live product from Web2 to Web3",
    where: "Zeebu · 2023–25",
    visual: "staking" as VisualKind,
    problem:
      "Existing users and referrals on Web2 login; business needed wallet registration, staking and commissions across chains while wallet libraries kept changing.",
    solution:
      "Stepped migration — ethers → wagmi with a custom connector → Reown AppKit; wallet-signature terms, encrypted API, nonce sync, throttling, audit fixes.",
    result: "Staking, waitlist and referral shipped with no forced re-signup; 20+ audit findings closed.",
    market: "Web3 & stablecoins",
  },
  {
    title: "Cut RPC load on dashboards and bots",
    where: "ORBT · 2024–26",
    visual: "dashboard" as VisualKind,
    problem:
      "Pages and services read hundreds of contract values one by one — slow and hitting provider rate limits.",
    solution:
      "Multicall batching, subgraph for history, 3-tier data fallback, Redis caching and virtualised tables.",
    result: "Solver RPC calls ~138k → ~49k / day; pages stay fast and up when one source fails.",
    market: "Performance",
  },
  {
    title: "Hedge on-chain trades safely on a CEX",
    where: "ORBT Hedge Module · 2026",
    visual: "hedge" as VisualKind,
    problem:
      "Filled trades leave price risk that must be hedged instantly on OKX spot, perps and futures — no double orders, hard stop on failure.",
    solution:
      "I wrote the spec and risk rules; Claude Code wrote the Rust — netting, OCO brackets, trailing stops, exposure caps, kill switch, signed API; I reviewed and tested every change.",
    result: "Shipped in under 6 weeks with 1,900+ tests — without me writing Rust by hand.",
    market: "AI-built, test-heavy",
  },
  {
    title: "Rebuild a PHP exchange into a product",
    where: "Paro Exchange · 2018–20",
    visual: "exchange" as VisualKind,
    problem:
      "CodeIgniter exchange was hard to scale and every new client brand meant copying the codebase.",
    solution:
      "Rebuilt in React + Redux-Saga on a .NET API with real-time SignalR order book, using the Jbs* component library.",
    result: "Became a white-label exchange used for 8+ brands.",
    market: "Legacy → modern",
  },
];

export const faq = [
  {
    q: "Front-end or full-stack?",
    a: "Both. I lead front-end, but I build Node.js APIs and design databases myself — MERN, Next.js full-stack, and PHP with MySQL / MSSQL before that.",
  },
  {
    q: "What third-party integrations have you done?",
    a: "15+ payment gateways (Stripe, PayPal, Paystack, CCAvenue, PayU, Atom…), KYC (Sumsub, Jumio, Trulioo, Aadhaar e-KYC, NID OCR + liveness), bank IMPS APIs, Fireblocks, Safe, BitGo, Binance and OKX APIs, TBO travel.",
  },
  {
    q: "Have you worked with shared libraries?",
    a: "Yes — I implemented and tested in-house libraries provided by the platform teams: an ECC encryption npm package, a 35-control config-driven form engine and the Jbs* React component kit; I also built a custom wagmi wallet connector.",
  },
  {
    q: "How do you optimise front-end performance?",
    a: "Code splitting and lazy loading, Webpack splitChunks / tree-shaking / compression, memoisation, virtualised tables, Redis and result caching, Multicall batching and WebAssembly for heavy crypto.",
  },
  {
    q: "Do you handle deployment and DevOps?",
    a: "Yes. I containerise apps with Docker, push to Azure Container Registry and deploy through GitHub Actions CI/CD to Azure Container Apps and Azure Web Apps (App Service), with UAT → prod promotion and env / secret handling. Earlier, .NET and PHP apps on IIS and Linux servers.",
  },
  {
    q: "Leadership experience?",
    a: "I lead a team of 6 engineers and have been people manager since 2022 — sprint planning, code review, hiring interviews, mentoring, client calls, releases and L3 support.",
  },
  {
    q: "How do you use AI?",
    a: "Daily with Claude Code: spec → plan → implement → review. The Finance Center and the hedge module were built this way — the AI writes code (including Rust, which I don't write by hand), and I own the spec, review and testing.",
  },
  {
    q: "Notice period and location?",
    a: "One month. Based in Ahmedabad — open to on-site, hybrid or remote.",
  },
];

export const skills = [
  {
    group: "Front-End",
    items: ["React 16–19", "Next.js 13–16", "TypeScript", "JavaScript ES2022", "AngularJS 1.x", "jQuery", "HTML5", "CSS3", "Tailwind", "MUI", "Chakra", "shadcn", "PWA", "i18n + RTL", "Design systems"],
  },
  {
    group: "Back-End",
    items: ["Node.js", "Express", "tRPC", "REST", "GraphQL / Apollo", "BFF / adapter layers", "cron jobs", "PHP (CodeIgniter 2–4)", "OpenCart", ".NET WebAPI"],
  },
  {
    group: "Databases",
    items: ["MSSQL / Azure SQL", "MySQL (triggers, stored procs)", "MongoDB / Mongoose", "PostgreSQL", "Redis", "Cosmos DB", "AWS Aurora", "Drizzle", "Prisma", "Schema design & migrations"],
  },
  {
    group: "KYC & Identity",
    items: ["Sumsub", "Jumio", "Trulioo", "Aadhaar e-KYC", "NID OCR", "Video liveness", "KYC / KYB flows", "Chainalysis", "2FA / OTP", "Transaction PIN", "Device registration"],
  },
  {
    group: "Payments & 3rd Party",
    items: ["Stripe", "PayPal", "Paystack", "CCAvenue", "PayU", "Atom", "Mollie", "CoinGate", "Banxa", "Transak", "ICICI / RBL IMPS", "BitGo", "Fireblocks", "Safe", "Binance / OKX APIs", "TBO travel"],
  },
  {
    group: "Optimisation",
    items: ["Webpack 4 / 5 splitChunks", "Tree-shaking & compression", "Code splitting", "React.lazy / react-loadable", "Memoisation", "Virtualised tables", "Redis / result caching", "Multicall batching", "WebAssembly (Go / TinyGo)"],
  },
  {
    group: "Libraries Implemented",
    items: ["ECC encryption npm package", "35-control form engine", "Jbs* React component kit", "JSON menu & permissions", "Custom wagmi connector", "Shared filter / report kit", "Tailwind token system"],
  },
  {
    group: "Security",
    items: ["ECC / AES-256 / RSA", "HMAC-SHA512", "Nonce / replay protection", "MITM protection", "Throttling & rate limits", "CSP", "RBAC", "Signed-message login", "AWS KMS", "Audit remediation"],
  },
  {
    group: "Web3 & Trading",
    items: ["wagmi v2", "viem", "ethers", "Reown AppKit", "RainbowKit", "WalletConnect", "Safe SDK", "Solidity", "Foundry", "ERC-20 / 721 / 4626", "EIP-712 / 1271", "The Graph", "DEX / intent API integration"],
  },
  {
    group: "DevOps & Cloud",
    items: ["Docker (multi-stage builds)", "GitHub Actions CI/CD", "Azure Web Apps (App Service)", "Azure Container Apps", "Azure Container Registry", "Azure Front Door", "Azure Key Vault", "Azure → AWS KMS federation", "AWS S3", "UAT → prod promotion", "IIS (.NET)", "Linux servers", "Sentry", "Grafana"],
  },
  {
    group: "Testing & Quality",
    items: ["Jest", "React Testing Library", "Cypress", "Vitest", "80%+ coverage", "Fork / dry-run testing", "Code review", "ESLint / Prettier"],
  },
  {
    group: "Leadership",
    items: ["Team lead (6 engineers)", "People manager", "Agile / Scrum", "Code review", "Hiring", "Mentoring", "Tech docs & handover", "Stakeholder comms", "Release management", "L3 support"],
  },
];

export const aiWorkflow = {
  intro:
    "I ship production systems with a spec-driven AI workflow: every feature starts as a written spec, becomes a step-by-step plan, and is then implemented by Claude Code agents — while I own the design, review every change, and test before release. The filler service and the hedge module were both built this way.",
  numbers: [
    { value: "2,000+", label: "AI-assisted commits" },
    { value: "150+", label: "Claude Code sessions" },
    { value: "15+", label: "Repos (trading, treasury, solver)" },
    { value: "10", label: "Custom subagents" },
  ],
  steps: [
    { title: "Spec", text: "Each feature becomes a written spec and data model — tables, routes, state machines, rate-limit and replay rules." },
    { title: "Plan", text: "Specs turn into implementation plans split into named, resumable agent sessions with per-repo memory." },
    { title: "Implement", text: "Specialised subagents — explorer, architect, reviewer — work in parallel git worktrees." },
    { title: "Review", text: "Model treated as a fast junior: human review, tests and staged rollout before anything ships." },
  ],
  // Real spec → plan → implement runs, counted from each repo's docs/superpowers folder.
  specProjects: [
    {
      name: "Filler Service",
      what: "UniswapX + 1inch Fusion filler with hedging and risk gates",
      specs: 7,
      plans: 7,
      features: [
        "Exclusive intent fill bridge",
        "OIDC → AWS KMS signing auth",
        "Unified filler config + cutover",
        "Hedge placement redesign",
        "Hedge balance gate",
        "OKX volatility gate",
        "UniswapX volatility halt",
      ],
    },
    {
      name: "Hedge Module",
      what: "PERP & X-PERP hedging service with exposure caps",
      specs: 10,
      plans: 6,
      features: [
        "Hedge module design",
        "ETH-BTC cross legs",
        "Redis write-behind",
        "Perp netting",
        "X-PERP route",
        "Manual bracket override",
        "Venue-sourced PnL",
        "Base caps + filler gate",
        "Perp route per base & side",
        "Zone markup",
      ],
    },
  ],
};

// Strengths mapped to where hiring demand is heading (2026+).
export const edge = [
  {
    icon: "bot",
    title: "AI-native engineering",
    visual: "devops" as VisualKind,
    signal: "Teams now hire engineers who ship faster with AI — without lowering the bar.",
    proof: "Daily Claude Code workflow: 2,000+ AI-assisted commits, 10 custom subagents; AI-written Rust services I specified, reviewed and tested (1,900+ tests).",
    tags: ["Claude Code", "Agentic workflows", "AI code review"],
  },
  {
    icon: "coins",
    title: "Payments, KYC & digital banking",
    visual: "payment" as VisualKind,
    signal: "Digital banking, stablecoins and cross-border payments keep growing — real integration experience is rare.",
    proof: "15+ payment gateways, 5+ KYC providers (Sumsub, Jumio, Aadhaar, NID OCR + liveness), bank IMPS APIs, Fireblocks and Safe — for banks in 6+ countries.",
    tags: ["Payments", "e-KYC", "Banking APIs", "Web3"],
  },
  {
    icon: "layers",
    title: "Full-stack TypeScript, MERN & DevOps",
    visual: "api" as VisualKind,
    signal: "Leaner teams want leads who own a feature from UI to database.",
    proof: "Next.js + React on top, Node.js / Express / tRPC in the middle, PostgreSQL, MongoDB, MySQL, MSSQL and Redis underneath — and I ship it myself with Docker, GitHub Actions CI/CD, Azure Web Apps and Container Apps.",
    tags: ["Next.js", "Node.js", "MERN", "Docker", "Azure"],
  },
  {
    icon: "shield",
    title: "Security-first front-ends",
    visual: "kyc" as VisualKind,
    signal: "Regulated money products face audits and real attacks — security can't be an afterthought.",
    proof: "ECC / AES / RSA encrypted APIs, replay and MITM protection, throttling, CSP, in-house ECC npm library implemented — 20+ audit findings fixed.",
    tags: ["Encryption", "Audits", "Replay protection"],
  },
  {
    icon: "activity",
    title: "Performance & reusable libraries",
    visual: "dashboard" as VisualKind,
    signal: "Fast apps on slow networks and design systems that scale teams are what product companies pay for.",
    proof: "Webpack tuning, code splitting, virtualised tables, Multicall batching (138k → 49k RPC calls/day), WebAssembly; implemented shared form engine and component kits across 8+ brands.",
    tags: ["Core Web Vitals", "Design systems", "WASM"],
  },
  {
    icon: "users",
    title: "Team leadership",
    visual: "mlm" as VisualKind,
    signal: "Senior engineers who can lead, mentor and release reliably are the hardest hires.",
    proof: "Lead a team of 6 engineers; people manager since 2022 — sprint planning, code standards, reviews, hiring, mentoring, client calls and 100+ releases. Person of the Year 2018/19.",
    tags: ["Lead", "Mentoring", "Release"],
  },
];

export const sections = [
  { id: "home", label: "Home", block: 0 },
  { id: "edge", label: "Why me", block: 1 },
  { id: "about", label: "About", block: 2 },
  { id: "experience", label: "Experience", block: 3 },
  { id: "cases", label: "Cases", block: 4 },
  { id: "projects", label: "Projects", block: 5 },
  { id: "skills", label: "Skills", block: 6 },
  { id: "ai", label: "AI", block: 7 },
  { id: "contact", label: "Contact", block: 8 },
] as const;

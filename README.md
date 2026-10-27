# Devang Parekh — Portfolio

**Front-End Team Lead · Senior Full-Stack Engineer · Fintech, KYC, Payments & Web3**

14 years building fintech: crypto exchanges, money transfer, e-wallets, digital-bank onboarding with e-KYC, and now DeFi trading. I lead a team of 6 engineers, build the Node.js APIs and databases behind the UI, and ship everything with Docker, CI/CD and Azure.

📍 Ahmedabad, India · open to remote, hybrid or on-site · [LinkedIn](https://www.linkedin.com/in/devang-parekh-96a96218a) · parekhdevang14@gmail.com

---

## What's inside the site

| Section | What it shows |
|---|---|
| **Why me** | Six strengths matched to current hiring demand: AI-native engineering, payments & KYC, full-stack + DevOps, security, performance, leadership |
| **About** | Full-stack story — PHP → AngularJS → React → Next.js, with Node.js on MSSQL, MySQL, MongoDB and PostgreSQL |
| **Experience** | Bankai Infotech (Team Lead and Principal Consultant), Joshi Biztech, Cantech — 2012 to now |
| **Cases** | Hard problems told as problem → solution → result, plus a recruiter FAQ |
| **Projects** | 18 projects, filterable by Fintech, KYC & Payments, Web3, Trading, Full-stack, Libraries and AI-built |
| **Skills** | 12 groups, including KYC & Identity, Payments, Optimisation, Custom Libraries and DevOps & Cloud |
| **AI** | How I ship with Claude Code: spec → plan → implement → review |

## Highlights

- **Digital banking & e-KYC:** City Bank (Bangladesh) account opening with NID OCR and video liveness; NassWallet config-driven wallet platform with 35+ services
- **Payments:** 15+ gateways (Stripe, PayPal, Paystack, CCAvenue, PayU…), bank IMPS APIs, Fireblocks, Safe, BitGo
- **Web3 & DeFi:** Zeebu Web2 → Web3 migration, Money Market and ORBT contract integrations, UniswapX / 1inch Fusion / CoW / OKX fillers and solvers, Rust hedge module
- **Security:** ECC / AES / RSA encrypted APIs, replay and MITM protection, 20+ audit findings fixed
- **Own libraries:** ECC encryption npm package, 35-control form engine, React component kits
- **DevOps:** Docker, GitHub Actions CI/CD, Azure Web Apps and Container Apps

## Tech

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion · React Three Fiber + drei · Lenis smooth scroll · lucide-react · installable PWA

The design is a blockchain ledger: every section is a "block", the hero is a 3D chain, and each project has its own animated graphic. It works on phones (no WebGL under 767 px, bottom-sheet project details, hamburger nav).

## Run locally

```bash
pnpm install
pnpm dev                     # http://localhost:3000
pnpm build && pnpm start     # production build
```

## Edit content

All text lives in `src/data/profile.ts`: profile, stats, experience, case studies, FAQ, projects, skills and the AI workflow. The photo is `public/images/devang.jpg`.

```
src/app/                             layout, page, manifest (PWA), global theme
src/components/                      Nav, Hero (+ 3D HeroScene), Stats, Edge, About,
                                     Experience, Cases, Projects, Skills, AIWorkflow, Contact, PWA
src/components/visuals/Visuals.tsx   animated SVG graphics per project domain
public/sw.js                         service worker (offline + install)
```

## Deploy

No environment variables needed. Vercel is the quickest: import the repo and deploy. On Azure, run it as a Web App (Node 20, start command `pnpm start`) or build a Docker image and deploy it to Container Apps.

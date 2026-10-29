# Devang Parekh — Portfolio

**Front-End Team Lead · Senior Full-Stack Engineer · Fintech, KYC, Payments & Web3**

14 years building fintech: crypto exchanges, money transfer, e-wallets, digital-bank onboarding with e-KYC, and now DeFi trading. I lead a team of 6 engineers, build the Node.js APIs and databases behind the UI, and ship everything with Docker, CI/CD and Azure.

📍 Ahmedabad, India · open to remote, hybrid or on-site · [LinkedIn](https://www.linkedin.com/in/devang-parekh-96a96218a) · parekhdevang14@gmail.com

---

## What's inside the site

| Section | What it shows |
|---|---|
| **Skills** | 12 groups shown at once, core areas first: Front-End, Back-End, Databases, DevOps & Cloud, Security, Payments, KYC and more |
| **Experience** | Bankai Infotech (Team Lead and Principal Consultant), Joshi Biztech, Cantech — 2012 to now, followed by 18 projects filterable by Fintech, KYC & Payments, Web3, Trading, Full-stack, Libraries and AI-built |
| **Cases** | Hard problems told as problem → solution → result, plus a recruiter FAQ |
| **AI** | How I ship with Claude Code: spec → plan → implement → review |

## Highlights

- **Digital banking & e-KYC:** City Bank (Bangladesh) account opening with NID OCR and video liveness; NassWallet config-driven wallet platform with 35+ services
- **Payments:** 15+ gateways (Stripe, PayPal, Paystack, CCAvenue, PayU…), bank IMPS APIs, Fireblocks, Safe, BitGo
- **Web3 & DeFi:** Zeebu Web2 → Web3 migration, money-market and protocol contract integrations, intent-based settlement (UniswapX, 1inch Fusion, CoW, OKX DEX), smart-contract integration across 5+ dApps, AI-built delta-neutral hedging engine
- **Security:** ECC / AES / RSA encrypted APIs, replay and MITM protection, 20+ audit findings fixed
- **Libraries implemented and tested:** in-house ECC encryption npm package, 35-control form engine, React component kits
- **DevOps:** Docker, GitHub Actions CI/CD, Azure Web Apps and Container Apps

## Tech

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion · React Three Fiber + drei · Lenis smooth scroll · lucide-react · installable PWA

The design is a "fintech systems" theme: each section reads like an event from a system I have built (KYC verified, payment captured, build passing, deployed), the 3D hero shows cards, ID, coins, blocks and servers orbiting one core, and every domain and project has its own animated graphic. It works on phones (no WebGL under 767 px, bottom-sheet project details, hamburger nav).

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
src/components/                      Nav, Hero (+ 3D HeroScene), Stats, Skills,
                                     Experience, Projects, Cases, AIWorkflow, Contact, PWA
src/components/visuals/Visuals.tsx   animated SVG graphics per project domain
public/sw.js                         service worker (offline + install)
```

## Deploy

No environment variables needed. Vercel is the quickest: import the repo and deploy. On Azure, run it as a Web App (Node 20, start command `pnpm start`) or build a Docker image and deploy it to Container Apps.

## Security

- Security headers on every route (`next.config.ts`): Content-Security-Policy, HSTS (preload), X-Frame-Options DENY + `frame-ancestors 'none'`, nosniff, strict Referrer-Policy, a locked-down Permissions-Policy, COOP / CORP same-origin, `X-Powered-By` removed
- `pnpm audit` clean — the vulnerable `postcss` that Next pulls in is overridden to a patched version in `pnpm-workspace.yaml`
- Service worker caches only good, same-origin responses and is always served uncached, so fixes reach visitors at once
- External links use `rel="noopener noreferrer"`; no secrets, env vars or third-party scripts in the bundle
- Responsible disclosure: `/.well-known/security.txt`

CSP keeps `'unsafe-inline'` for scripts and styles because Next's App Router injects inline RSC scripts and the CSS is inlined; nonces would force every page to render dynamically.

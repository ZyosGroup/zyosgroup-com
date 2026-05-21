# zyosgroup.com

The marketing site for [Zyos Group](https://zyosgroup.com) — an ROI-focused agentic-transformation partner.

> **Agentic transformation built for ROI. We assess your maturity, architect the right solution for your context, and infuse AI into your operations — measured against business performance.**

## Stack

- **Next.js 14 App Router** (TypeScript strict mode, React Server Components by default)
- **Tailwind v3** — design tokens locked in `tailwind.config.ts`
- **Sanity CMS** — schema for `caseStudy` + `outcome` at `/studio` (Studio not yet deployed; pass 2)
- **Fonts** — Inter Tight (display + body), JetBrains Mono (numerals + code) via `next/font/google`
- **Icons** — lucide-react
- **Validation** — Zod for the `/start` Opportunity Engine intake
- **Animation** — Framer Motion, subtle, scroll-triggered, respects `prefers-reduced-motion`
- **No CSS-in-JS** beyond Tailwind. No Material / Mantine / Chakra.
- **No client rendering on marketing pages** — Server Components by default. `'use client'` only where required (forms, animated showcases).

## Source-of-truth docs

Everything content-related lifts from the locked positioning corpus:

- `zyos-operating-system/artifacts/marketing/zyosgroup-positioning-architecture.md` — canonical structure
- `zyos-operating-system/artifacts/marketing/canonical-entity-descriptions.md` — locked copy
- `zyos-operating-system/artifacts/marketing/zyosgroup-com-positioning-research.md` — research + keyword map
- `zyos-operating-system/artifacts/marketing/cross-property-link-strategy.md` — JSON-LD entity graph
- `zyos-operating-system/artifacts/marketing/zyosgroup-com-capability-showcases.md` — seven showcases spec
- `zyos-operating-system/artifacts/marketing/zyosgroup-com-showcase-brief.md` — page-by-page IA
- `zyos-operating-system/artifacts/marketing/content-engine-playbook.md` — Quick Answer + cadence
- `zyos-operating-system/artifacts/marketing/customer-video-pipeline.md` — Track A only on first ship
- `zyos-operating-system/CLAUDE.md` — three-service framework conventions (Fixed Price / Retainer / As-A-Service)

When in doubt, those docs win. Don't paraphrase the canonical tagline.

## Project layout

```
src/
  app/
    layout.tsx           # Root layout — fonts, Organization JSON-LD, Header/Footer
    page.tsx             # Homepage — 11 sections per positioning architecture §7
    about/page.tsx       # Locked Org description + Paul founder block + 4 pillars
    start/               # Opportunity Engine intake (Zod + server action; stubs ZyosApp wiring)
    solutions/           # AaaS + GaaS pages
    consulting/          # 4 practice areas
    who-we-serve/        # 3 ICPs
    platform/            # Zyos OS tour stub
    case-studies/        # Catalog stub
    framework/           # Stage 1 — Assess
    foundation/          # Stage 2 — Build foundation
    the-brief/           # LinkedIn Newsletter archive stub
    robots.ts            # Robots.txt
    sitemap.ts           # XML sitemap
    not-found.tsx        # 404
    globals.css          # Tailwind + base styles
  components/
    layout/              # SiteHeader, SiteFooter
    sections/            # Hero, ComponentsBar, OperatingModelFlow, IcpCards, TwoArmsBlock,
                         # OpportunityEngineDemo, HomeShowcasePreview, TestimonialRail,
                         # FounderBlock, NewsletterSignup, StubPage
    showcases/           # AgentWorkflowCard (full), TopologyDiagram (stub), DashboardCard (stub),
                         # PiDeliverableScrollthrough (stub), OutcomeCard (stub),
                         # AutomationReel (stub), SystemBuildCard (stub) + sample-workflows.ts
    ui/                  # Button, Section, QuickAnswer
    seo/                 # PageSchema
  lib/
    site.ts              # Locked tagline, hero copy, canonical URLs, @id anchors
    schema.ts            # JSON-LD generators (Organization, WebPage, AboutPage, Service, Breadcrumb)
    cn.ts                # tailwind-merge helper
studio/
  schemas/               # Sanity content models (caseStudy, outcome) — not yet deployed
```

## What ships in pass 1

**Fully built:**

- `/` — homepage, all 11 sections
- `/about` — locked Org long description + founder + 4 pillars + cross-link to paulruddy.com
- `/start` — Opportunity Engine intake (Zod-validated, server action, console-log backend, success state)
- Foundational layout: `SiteHeader`, `SiteFooter`, locked design tokens
- Foundational sections: `Hero`, `ComponentsBar`, `OperatingModelFlow`, `IcpCards`, `TwoArmsBlock`, `OpportunityEngineDemo`, `TestimonialRail`, `FounderBlock`, `NewsletterSignup`, `QuickAnswer`
- `AgentWorkflowCard` (full Framer Motion build) + 6 sample workflows
- Sanity schemas for `caseStudy` + `outcome`
- `robots.ts` + `sitemap.ts` + `not-found.tsx`
- JSON-LD on every page (Organization root, WebPage / AboutPage / Service / Breadcrumb per route)
- Open Graph + Twitter Card metadata
- Quick Answer block on every page (40–80 words, near top)

**Stubbed (pass 2 hooks marked `TODO Pass 2`):**

- 6 showcase components: `TopologyDiagram` (Reactflow), `DashboardCard` (screenshots), `PiDeliverableScrollthrough`, `OutcomeCard` (filtered catalog), `AutomationReel`, `SystemBuildCard`
- All other IA pages — Solutions index + AaaS + GaaS; Consulting index + 4 practice areas; Who We Serve index + 3 ICPs; Platform; Case Studies; Framework; Foundation; The Brief
- Sanity Studio not yet deployed
- ZyosApp `/api/intake` integration — stubbed (logs to server console; real wiring is ~3 hours of ZyosApp work per showcase-brief §7)
- Aggregate stat bar from `/api/public/aggregate-stats` — stub
- Customer video pipeline (Track A founder-on-camera + Track B customer video where permissioned) — stub
- Sanity-backed case-study templates + outcomes catalog

## Locked conventions

- **No vendor names** in client-facing copy (per CLAUDE.md). Exception: AMS adapters may name iMIS / NetForum / Personify in scoping context.
- **Routing language exact:** "Engagement recommended" / "Conditions to address" / "Not yet — revisit."
- **No agile/sprint jargon** in client-facing copy — "monthly delivery cycle", "delivery review", "phase".
- **No NASPGHAN / Doc4Me** named as marketing proof anywhere.
- **No customer video** on zyosgroup.com without separate per-property written permission (customer-video-pipeline.md §6).
- **No real customer names** in case studies/outcomes until permission lands. Placeholder testimonials are clearly tagged "permission pending."
- **Three-service framework only:** Fixed Price / Retainer (incl. Build & Operate) / As-A-Service (AaaS + GaaS variants). PIaaS retired. PI is always the first delivery cycle of Retainer + As-A-Service.

## Local development

```bash
npm install
npm run dev
# open http://localhost:3000
```

```bash
npm run build      # production build
npm run typecheck  # TypeScript strict
npm run lint       # Next.js ESLint
```

## Deploy

`vercel.json` is pre-configured. Paul wires up the Vercel project — do not deploy from CLI. After connection, push to `main` deploys automatically.

## Pass 2 priorities

1. Wire `/start` intake into ZyosApp `/api/intake` + the new Resend diagnostic-email template per showcase-brief §3 + §7.
2. Reactflow-based `TopologyDiagram` (used in 4 places).
3. `AgentWorkflowCard` full build for the remaining 4 workflows on `/solutions/agent-as-a-service`.
4. `DashboardCard` gallery sourced from ZyosApp localhost captures with seeded demo data.
5. Sanity Studio deployment + GROQ queries powering `/case-studies` + outcomes catalog.
6. `/platform` Zyos OS tour with screen-recording assets.
7. Aggregate stat bar from `/api/public/aggregate-stats` (ZyosApp side).
8. Track A founder-on-camera shoots (per the quarterly cadence in customer-video-pipeline §5).

---

© Zyos Group. Founded by Paul Ruddy.

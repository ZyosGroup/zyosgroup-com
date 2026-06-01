# zyosgroup.com — PI Baseline (In-Development Site)

**Captured:** 2026-05-26
**Framework:** `zyos-gaas-process-intelligence` adapted for a B2B agentic-AI services site (the channel weights shift — SEO + GEO dominate; Local Services Ads / GBP / Google Ads are marginal for a non-local B2B audience).
**Subject:** The in-development Next.js + Tailwind + Sanity codebase at `C:\Users\pruddy\Documents\zyosgroup-com\` (NOT the live legacy Gatsby site — that's covered in `2026-05-19-pre-cutover-baseline.md`).
**Goal:** Identify the leverage points required for the in-development site to RANK #1 in the agentic-AI consulting cluster the day it cuts over.
**Companion baseline:** [`2026-05-19-pre-cutover-baseline.md`](./2026-05-19-pre-cutover-baseline.md) — legacy site teardown (lock measurable deltas at cutover).

---

## Executive Summary

**The bones are good.** The locked positioning is propagated through every page I read: tagline, four-stage Customer Journey, three service components + Agents-across, two arms (Consulting + Solutions), three ICPs (SMB/PE/Associations), Customer Success operationalized via 11 named features. Every page has a `QuickAnswer` block (GEO-friendly), per-page `metadata` with canonical, breadcrumb schema, and a single Organization schema in the root layout.

**What's missing is what makes you #1, not what makes you indexable.** The site will index cleanly. It will not yet OUTRANK competitors in the agentic-AI cluster because the entity-authority signals (Organization schema breadth, Person/E-E-A-T linkage, knowsAbout topical claims, FAQ schema for AI Overview surfaces, Article schema for the unbuilt blog, llms.txt for LLM ingestion, AI-crawler explicit allowlist) are not yet in place. Most of these are 1–2-hour fixes; their combined effect on agentic-AI cluster rankability is large.

**Top-5 leverage points** (in order of expected rank-impact):

1. **Organization schema breadth** — add `knowsAbout` (20+ agentic-AI concepts), `slogan`, `logo`, expanded `sameAs`, `hasOfferCatalog` linking the 6 services, `foundingDate` (2009), `numberOfEmployees`, secondary `@type` for `ProfessionalService`. This is THE entity-authority signal that tells Google + LLMs that zyosgroup.com IS an agentic-AI consulting entity, not just mentions the phrase.

2. **FAQ schema on five high-intent pages** — `/framework`, `/solutions/agent-as-a-service`, `/solutions/growth-as-a-service`, `/how-we-deliver`, `/platform`. FAQ schema is what gets you into Google's PAA boxes and AI Overview citation lists. Currently zero.

3. **`llms.txt` + explicit AI-crawler allowlist in `robots.ts`** — GPTBot, PerplexityBot, ClaudeBot, Google-Extended, Applebot-Extended, CCBot, Bytespider. The current robots.ts is default-allow but lacks the explicit signals that LLM ingestion crawlers look for. zyos.io already publishes `llms.txt` — pattern parity matters.

4. **Person schema for Paul Ruddy** linked to Organization via `@id`, with `sameAs` to paulruddy.com + LinkedIn. E-E-A-T (Experience-Expertise-Authoritativeness-Trustworthiness) is now a load-bearing ranking signal in Google's "Helpful Content" + AI Overview ranker; an unauthored services site under-ranks an authored one.

5. **Dynamic OG image at `app/opengraph-image.tsx`** — fixes the inherited "no OG image" gap from the legacy site. Critical because (a) the locked content-engine distribution model is LinkedIn + Facebook + LinkedIn Newsletters where social previews ARE the impression, and (b) social-card-equipped pages get better CTR in social-source-attribution ranking signals.

---

## Site Under Audit — Stack + Posture

| Dimension | Value |
|---|---|
| Framework | Next.js 14.2.15 (App Router) |
| Styling | Tailwind 3.4.11 |
| CMS | Sanity (scaffolded; schemas for `caseStudy`, `outcome`, `post` exist but NOT yet wired to any page) |
| Fonts | Inter Tight (display) + JetBrains Mono (mono) — `next/font` self-hosted, `display: swap` |
| Analytics | Google Tag Manager `GTM-5KJRM3S` + HubSpot portal `6624575` (both ported from legacy) |
| Tracking strategy | `afterInteractive` Script tags via `next/script`; noscript GTM iframe present |
| Hosting | Vercel (vercel.json present) |
| `next.config.mjs` | Minimal — `reactStrictMode: true`, `poweredByHeader: false`. No headers, no image config, no compression flags. |
| Sitemap | `app/sitemap.ts` — **hand-maintained list of 27 paths**, will drift |
| `robots.ts` | Default-allow; no AI-crawler explicit policy |
| JSON-LD library | `src/lib/schema.ts` — has `organizationSchema`, `webPageSchema`, `aboutPageSchema`, `serviceSchema`, `breadcrumb`. NO Person, FAQ, SoftwareApplication, Article, HowTo, SiteNavigationElement, Review yet. |
| Page-level schema | `src/components/seo/PageSchema.tsx` — composes WebPage + optional Service + optional Breadcrumb |
| Accessibility | Skip-to-main link present; `aria-label`s on nav; `aria-hidden` on decorative spans |
| OG / Twitter | metadataBase set; per-page openGraph titles + descriptions; **no opengraph-image file** |

---

## Channel-by-channel Audit (PI for GaaS adapted for B2B services site)

Channel weights for this audit are NOT equal — for a non-local B2B agentic-AI services site, weights are reallocated from the SMB-local-services default:

| Channel | Default weight (SMB local) | Re-weighted (B2B agentic-AI services) |
|---|---|---|
| **SEO** (organic + technical) | 15% | **35%** |
| **GEO / AEO** (LLM answer engines + AI Overviews) | not in default | **25%** |
| **UX / CWV** | 10% | 10% |
| **GTM + measurement** | 15% | 10% |
| **Security** | 5% | 5% |
| **Content** | 10% | 10% |
| **GBP** | 20% | 3% (informational only) |
| **Google Ads** | 15% | 2% (paid not currently in scope for Zyos's own site) |
| **LSA** | 10% | 0% (N/A) |

### 1. SEO — STRONG positioning, MEDIUM technical, WEAK entity-authority

**Strong:**
- Per-page `metadata` object with title, description, canonical on every page surveyed.
- WebPage + Breadcrumb schema rendered on every page via `PageSchema`.
- Hub-and-spoke IA matches Google's preferred topical-cluster pattern (parent + children under `/consulting`, `/solutions`, `/who-we-serve`, `/by-function`).
- Locked KW targets are visible per-page in code comments (e.g., framework targets "ai readiness assessment" KD 15; consulting targets "ai consulting services" vol 2,900 KD 20; AaaS targets "agentic ai consulting" KD 5 $39 CPC — the head term).
- QuickAnswer block on every page (40–80-word lift-able snippet).
- Heading hierarchy clean (single H1 per page).
- Internal linking present (footer is comprehensive; in-body links present on most pages).

**Medium:**
- Sitemap is hand-maintained — will drift the moment a page is added/removed without sitemap.ts edit.
- WebPage schema is missing `inLanguage`, `dateModified`, `primaryImageOfPage`, `mainEntityOfPage`.
- Service schema only on `/consulting` + `/solutions` parents and AaaS child + Software & Data child + Sales function. Other children inherit Page-level Service via `service` prop where set; many child pages do not declare a Service.
- No HowTo schema on `/framework` (4-stage journey is a textbook HowTo) or `/how-we-deliver` (3-phase model).
- Hero H1 is the tagline only — does not include the head term "agentic AI consulting" or "agentic AI services". Brand-first decision, defensible, but a missed slot.

**Weak — the rank-blockers:**
- **No `knowsAbout` on Organization schema.** This is the single most important LLM/SGE entity-authority signal for a services-firm site. Should be a 15–25-item array.
- **No Person schema for Paul Ruddy.** E-E-A-T is unverifiable to Google as a result. The About page even has founder copy that's ready to schema-tag.
- **No FAQ schema anywhere.** FAQ schema is the cheapest entry to PAA + AI Overviews and Zyos is not playing.
- **No SoftwareApplication schema on /platform** (Zyos OS is a software product; the page describes it; no schema declares it).
- **No `og:image`** — defaults to nothing, which kills LinkedIn + Slack + X previews. The locked content-engine distribution mode is LinkedIn+FB+Newsletters; this matters.
- **Sitemap will drift.** `/about` isn't in `sitemap.ts` — actual file `src/app/about/page.tsx` exists. The hand-maintained list has already drifted.

### 2. GEO / AEO — UNDERDEVELOPED — biggest single-category lift available

GEO (Generative Engine Optimization / Answer Engine Optimization) ranks pages in **LLM-mediated answer surfaces** (Perplexity, ChatGPT browsing, Google AI Overviews, Bing Copilot, Claude search) using a different ranker than classical search. Strong GEO signals:

| Signal | Currently | Should be |
|---|---|---|
| `llms.txt` published | **No** | Yes — markdown index of canonical pages + entity descriptions |
| Explicit AI-crawler allowlist in robots.txt | **No** | Yes — GPTBot, PerplexityBot, ClaudeBot, Google-Extended, Applebot-Extended, CCBot, Bytespider |
| Entity-defining FAQ blocks | **No** | Yes — on 5 high-intent pages, with FAQPage schema |
| Author/Person schema | **No** | Yes — Paul as `Person` linked to `Organization` |
| Citable-prose pattern (short definition paragraphs, claimable facts, quantified outcomes) | Partially — QuickAnswer is good; rest of pages are sometimes too narrative | Tighten: lead each section with a 2-sentence claimable definition |
| Structured-data breadth | Organization + WebPage + Breadcrumb + AboutPage + Service (partial) | Add Person + SoftwareApplication + FAQPage + Article + (eventually) Review |
| Canonical cross-property `sameAs` cluster | Partial (zyos.io, paulruddy.com referenced but not in schema.sameAs) | Full — Organization.sameAs = [linkedinCompany, facebook, zyos.io, paulruddy.com, newsletter]; Person.sameAs = [paulruddy.com, linkedin/in/paulruddy] |

**This is the largest single-category lift available.** A clean SEO foundation + explicit GEO investment = the difference between page-2 ranking and being a canonical citation in answer-engine responses.

### 3. UX / Core Web Vitals — projected GOOD, untested

Cannot fully measure without a deployed URL + Lighthouse. Static reads suggest:

- **LCP candidate:** Hero text block. Inter Tight is `next/font` (self-hosted, no FOIT). Should be ≤2.0s.
- **CLS:** No image dimensions audited because there are no hero images yet (text-first hero). Risk near zero.
- **INP:** Hero CTA + IntakeForm are the only interactive surfaces above the fold; framer-motion is in package deps but not heavily used on home that I saw.
- **TBT / JS payload:** Recharts in deps adds ~140KB gzipped IF used on a critical path. Need to confirm it's only on the catalog page.

**Action:** add Lighthouse CI to next CI step. Until then, projected fine.

### 4. GTM + measurement — STRONG (IDs ported, posture clean)

- Both GTM and HubSpot IDs ported from legacy, preserving the analytics timeline across cutover (correct decision, already in memory).
- `Script` strategy `afterInteractive` — does not block initial render.
- `<noscript>` GTM iframe present.
- **Gap:** no GA4 conversion event firing on `/start` form submission visible in the form actions. Add `dataLayer.push({event: 'lead_submitted', engagement_type: ...})` in `actions.ts`. Otherwise the diagnostic-intake conversion event is invisible to Ads/Analytics.

### 5. Security — STRONG (Vercel posture + clean config)

- `poweredByHeader: false` — good.
- HTTPS will be enforced by Vercel.
- No mixed-content risk in static reads.
- **Gap:** no `headers()` in `next.config.mjs` — should add: `Strict-Transport-Security`, `Content-Security-Policy` (or report-only first), `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy` baseline.

### 6. GBP / Local — INFORMATIONAL (low weight for B2B services)

Zyos's GBP exists; not a primary lever for B2B-services ranking. Make sure the GBP profile lists `zyosgroup.com` and that Organization schema includes the same NAP (name/address/phone) consistent with the GBP. Currently `lib/site.ts` has no address. Add a `LocalBusiness` enhancement on Organization with at least city + region, plus `contactPoint` for `Sales`.

### 7. Google Ads / LSA — N/A (Zyos doesn't run paid for itself yet)

No action. When/if Zyos runs paid for its own brand, GTM is wired and ready.

---

## Content depth audit (rank-relevant pages)

| Page | Approx word count (eyeballed) | Verdict |
|---|---|---|
| `/` | 600–800 (across all sections) | Adequate, dense |
| `/framework` | 1,400 | Strong |
| `/foundation` | 1,800 | Strong |
| `/platform` | 1,200 | Strong |
| `/how-we-deliver` | 2,400 | Excellent |
| `/the-brief` | 400 | Thin (intentional — points to LinkedIn) |
| `/consulting` | 800 | Strong |
| `/consulting/software-and-data` | 1,000 | Strong |
| `/solutions` | 700 | Strong |
| `/solutions/agent-as-a-service` | 1,500 | Strong |
| `/who-we-serve` | 500 | Thin — consider adding the ICP-shaped pain blocks back at the parent level |
| `/who-we-serve/high-growth-smbs` | 700 | Adequate |
| `/by-function/sales` | 1,100 | Strong |
| `/case-studies` | 400 | Thin — by design (the catalog component is the body) |
| `/about` | 600 | Adequate |
| `/start` | 400 | Adequate — conversion page, not ranking page |

**Verdict:** content density is strong for the head pages. Adding FAQ blocks (5 Q/A on each) lifts depth + adds the missing schema in one move.

---

## Top 10 leverage points (ranked by expected impact on agentic-AI cluster ranking)

| # | Leverage | Surface | Effort | Expected lift |
|---|---|---|---|---|
| 1 | Enrich Organization schema (knowsAbout, sameAs, slogan, logo, hasOfferCatalog, foundingDate, secondary @type ProfessionalService) | `lib/site.ts` + `lib/schema.ts` | 1 hr | **High** — entity authority |
| 2 | Add FAQ schema + visible Q/A on 5 high-intent pages | 5 page files + `lib/schema.ts` | 3 hrs | **High** — AI Overview + PAA |
| 3 | Add Person schema for Paul + render visibly on /about | `lib/schema.ts` + `app/about/page.tsx` + `app/layout.tsx` | 30 min | **High** — E-E-A-T |
| 4 | Add `llms.txt` + explicit AI-crawler allowlist | `public/llms.txt` + `app/robots.ts` | 30 min | **High** — LLM ingestion |
| 5 | Dynamic OG image generator | `app/opengraph-image.tsx` | 45 min | **Med-High** — social CTR |
| 6 | Auto-generate sitemap from filesystem | `app/sitemap.ts` | 30 min | **Med** — crawl hygiene (already drifting) |
| 7 | SoftwareApplication schema for Zyos OS on /platform | `app/platform/page.tsx` + `lib/schema.ts` | 30 min | **Med** — product entity claim |
| 8 | Enrich WebPage schema with inLanguage + dateModified + mainEntityOfPage | `lib/schema.ts` | 15 min | **Med** — freshness signal |
| 9 | next.config.mjs headers (HSTS, CSP-RO, nosniff, Referrer-Policy, Permissions-Policy) + image optimization | `next.config.mjs` | 45 min | **Low-Med** — security posture, ranking signal |
| 10 | GA4 conversion event on /start form submission | `app/start/actions.ts` | 15 min | **Med** — measurement closure |

**Combined effort: ~8 hours. Combined ranking impact: substantial.**

---

## Recommended 90-day plan (post-cutover)

**Sprint 1 — this session (today):** items 1–10 above.

**Sprint 2 (week 2):** Sanity-wire `/case-studies` so anonymized GaaS outcomes show up dynamically, with `Article` schema per case study. Begin McMahons + FSM full case studies as customer permission clears (gated by `permissioned` boolean in schema).

**Sprint 3 (week 3):** Build the `/blog` route reading from `post` schema (already scaffolded in Sanity). Each post ships with `Article` schema, `author: Person @id Paul`, `publisher: Organization @id`. First post: "What 'agentic AI consulting' actually means" — own the head term with a definition page that LLMs cite.

**Sprint 4 (week 4):** Lighthouse CI in Vercel preview deploys. Set thresholds (LCP ≤ 2.0s, CLS ≤ 0.05, INP ≤ 200ms, perf ≥ 95). Block PRs that regress.

**Sprint 5–8 (month 2):** Content engine cadence (per [content-engine-playbook.md](../../../zyos-operating-system/artifacts/marketing/content-engine-playbook.md)). One Brief issue/month + one case study/month + 2 blog posts/month, cross-distributed to LinkedIn + FB + LinkedIn Newsletter.

**Sprint 9–12 (month 3):** Internal link audit — confirm every page surfaces 3–5 in-body links to related pages (hub-and-spoke density). Add a `Related` block to consulting/solutions children. Add Speakable schema where applicable.

---

## Appendix A — Schema breadth target (what should ship for "rank #1 in agentic AI")

| Schema type | Where | Status today |
|---|---|---|
| Organization (rich) | Root layout (every page) | **Thin** — has @id, name, url, description, founder, owns, sameAs (2 items). Needs knowsAbout, slogan, logo, hasOfferCatalog, foundingDate, numberOfEmployees, address, contactPoint, areaServed, secondary @type ProfessionalService. |
| Person (Paul Ruddy) | Root layout + /about | **Missing** |
| SoftwareApplication (Zyos OS) | /platform | **Missing** |
| WebPage | Per page via PageSchema | **Present, sparse** — needs inLanguage, dateModified, mainEntityOfPage, primaryImageOfPage |
| AboutPage | /about | **Present** |
| Service | /consulting, /solutions, AaaS, Software & Data, Sales | **Partial coverage** — add to other Solutions children, other Consulting children, other By-Function children |
| BreadcrumbList | Per page via PageSchema | **Present** |
| FAQPage | High-intent pages | **Missing — biggest GEO miss** |
| Article | Blog + case studies | **Missing (no blog yet, case studies not Sanity-wired)** |
| HowTo | /framework (4-stage journey), /how-we-deliver (3-phase model) | **Missing — easy add** |
| SiteNavigationElement | Header nav | **Missing** |
| Review / AggregateRating | Testimonials | **Missing (TestimonialRail not yet schema-tagged)** |

---

## Appendix B — `knowsAbout` candidate list (for Organization schema)

To establish Zyos as the entity, the schema should claim topical authority over these concepts. **All terms below appear in the locked positioning** (canonical-entity-descriptions, zyosgroup-positioning-architecture, the SKILL.md files).

Agentic AI · Agentic transformation · AI agent development · AI consulting · AI operating system · AI readiness assessment · AI maturity assessment · Business intelligence · Custom software development · Customer success operations · Data engineering · Digital transformation · Growth as a Service · Integrated marketing · Local SEO · Managed AI services · Operating model design · Operations consulting · Process intelligence · Process optimization · Quarterly business review · ROI-focused consulting · Search engine optimization · Generative engine optimization · Software architecture · Solution architecture · Strategic consulting

---

## Appendix C — Items NOT in scope this audit (intentional)

- Live URL performance metrics (the in-dev site has no production URL yet; Vercel preview deploys aren't lighthouse-instrumented yet).
- Conversion-rate audit on the IntakeForm (needs traffic data).
- Outbound + ABM agent integration (queued as separate project; see `project-zyosgroup-outbound-and-abm-agents`).
- Customer-video pipeline (separate skill; see [customer-video-pipeline.md](../../../zyos-operating-system/artifacts/marketing/customer-video-pipeline.md)).
- Vercel deployment configuration (separate from codebase audit; verify before cutover per [feedback-vercel-autodeploy-must-be-verified]).

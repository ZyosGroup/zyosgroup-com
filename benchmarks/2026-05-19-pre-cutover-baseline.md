# zyosgroup.com Pre-Cutover Baseline Benchmark

**Captured:** 2026-05-19
**Purpose:** Lock in a measurable record of the current zyosgroup.com so improvements from the Pass 2 redesign (targeted Q3 2026 cutover) can be quantified.
**Method:** Read-only HTTP fetches of HTML, sitemap, robots.txt, page-data JSON, JS chunks, and TLS cert. No JS execution; static HTML signals only (this turns out to be load-bearing — see findings).
**Live URL audited:** https://zyosgroup.com/

---

## Sitemap + Structure

`/sitemap.xml` exists, is valid XML (single `<urlset>`, no sitemap index), and lists **30 URLs**.

| # | URL | HEAD status | Title (from HTML) | Meta description (from HTML) |
|---|-----|-------------|-------------------|------------------------------|
| 1 | https://zyosgroup.com/ | 200 | Zyos Group Drives AI-Powered Transformation Through Agent-Driven Operational Intelligence That Increases Revenue, Improves Efficiency, Scales Operations, Reduces Risk, and Delivers Real-Time Business Insight | Zyos Group enables AI-driven transformation across portfolio companies, accelerating revenue, optimizing operations, reducing risk, and providing real-time business intelligence. |
| 2 | /services/innovation-as-service/ | 200 | AI-Led Digital Transformation Services \| Innovation Solutions Zyos Group | Transform your business with our comprehensive AI-powered digital transformation services. From cloud solutions to process optimization, we help organizations innovate and drive sustainable growth. |
| 3 | /services/innovation-as-service/digital-transformation-strategy/ | 200 | (not pulled — child page) | — |
| 4 | /services/innovation-as-service/managed-it-service/ | 200 | (child) | — |
| 5 | /services/innovation-as-service/cloud-services/ | 200 | (child) | — |
| 6 | /services/innovation-as-service/cybersecurity-services/ | 200 | (child) | — |
| 7 | /services/innovation-as-service/bpm-and-okr-services/ | 200 | (child) | — |
| 8 | /services/innovation-as-service/process-optimization-services/ | 200 | (child) | — |
| 9 | /services/customer-growth-as-service/ | 200 | **AI-Led Digital Transformation Services \| Innovation Solutions Zyos Group** (DUPLICATE of #2) | **DUPLICATE of #2** |
| 10 | /services/customer-growth-as-service/web-development-services/ | 200 | (child) | — |
| 11 | /services/customer-growth-as-service/seo-services/ | 200 | (child) | — |
| 12 | /services/customer-growth-as-service/paid-marketing-services/ | 200 | (child) | — |
| 13 | /services/customer-growth-as-service/content-marketing-services/ | 200 | (child) | — |
| 14 | /services/customer-growth-as-service/ecommerce-solution-services/ | 200 | (child) | — |
| 15 | /industries/ | 200 | **Industries Page** (placeholder) | _(missing)_ |
| 16 | /industries/general-Services/ | 200 | (child) | — |
| 17 | /industries/manufacturing/ | 200 | (child) | — |
| 18 | /industries/legal/ | 200 | (child) | — |
| 19 | /industries/healthcare/ | 200 | (child) | — |
| 20 | /framework/ | 200 | Digital Transformation & AI Solutions \| Zyos Business Framework | _(missing)_ |
| 21 | /about-us/ | 200 | Zyos Group \| Business Transformation, Process Optimization & AI Enablement | We redesign how your business operates. Zyos Group builds scalable systems, connects your data, and enables automation and AI to drive measurable growth. |
| 22 | /portfolio/ | 200 | _(missing title)_ | _(missing)_ |
| 23 | /portfolio/lilio-learning-growing-bright-minds-from-abc-to-z/ | **404** | — | — |
| 24 | /portfolio/packers-and-movers-services-professional-moving-solutions-you-can-trust/ | **404** | — | — |
| 25 | /portfolio/power-washing-services-restore-your-propertys-original-beauty/ | **404** | — | — |
| 26 | /portfolio/khloes-paw-pastries-baking-joy-from-treat-to-tail/ | **404** | — | — |
| 27 | /portfolio/construction-services-building-excellence-from-foundation-to-finish/ | **404** | — | — |
| 28 | /portfolio/landscaping-services-creating-outdoor-spaces-that-inspire/ | **404** | — | — |
| 29 | /case-study/ | 200 | _(missing title)_ | _(missing)_ |
| 30 | /contact-us/ | 200 | Contact Us \| Professional Business Solutions \| Zyos | _(missing)_ |

**Structure summary:** 4 top-level sections — Services (with two parents: Innovation-as-Service + Customer-Growth-as-Service, each with sub-services), Industries (4 verticals), and top-level pages (Framework, About-Us, Portfolio, Case-Study, Contact-Us). Nav is nested 2 levels under Services.

**Of 30 sitemap entries: 24 return 200, 6 return 404** (all six portfolio detail pages). Sitemap is advertising dead URLs to Google.

`/robots.txt` exists and is permissive:

```
User-agent: *
Disallow:

Sitemap: https://zyosgroup.com/sitemap.xml
```

---

## Homepage Analysis

### Meta + Head

| Item | Value |
|---|---|
| Final URL | `https://zyosgroup.com/` (HTTP 200) |
| HTML size | **893,465 bytes (872 KB)** |
| Server | AmazonS3 behind CloudFront (POP: JFK52-P8) |
| Last-Modified | Mon, 20 Apr 2026 17:07:21 GMT |
| `<title>` | "Zyos Group Drives AI-Powered Transformation Through Agent-Driven Operational Intelligence That Increases Revenue, Improves Efficiency, Scales Operations, Reduces Risk, and Delivers Real-Time Business Insight" — **303 characters** (Google truncates at ~60) |
| `<meta name="description">` | "Zyos Group enables AI-driven transformation across portfolio companies, accelerating revenue, optimizing operations, reducing risk, and providing real-time business intelligence." — **177 characters** (Google truncates at ~155-160) |
| `<meta name="viewport">` | `width=device-width, initial-scale=1, shrink-to-fit=no` (present, mobile-aware) |
| `<meta name="robots">` | _(absent — defaults to index,follow)_ |
| `<meta name="generator">` | `Gatsby 5.16.1` |
| `<link rel="canonical">` | `https://zyosgroup.com` (no trailing slash, no www) |
| `og:title` | (same 303-char string as `<title>`) |
| `og:description` | (same 177-char description) |
| `og:url` | `https://zyosgroup.com` |
| `og:type` | **`article`** (should be `website` for a homepage) |
| `og:image` | _(absent — only empty `og:image:width` and `og:image:height` present)_ — **OG previews will have no image** |
| `twitter:card` | `summary_large_image` (but no twitter:image set) |
| `twitter:title` / `twitter:description` | duplicates of og: |
| Favicon | Yes — `/favicon-32x32.png?v=9a45dfe6e2aac9d6ca2a6640603ee148` plus apple-touch-icon set |
| JSON-LD structured data | **None** (0 `application/ld+json` blocks) |

### TLS / HTTPS

- HTTPS enforced; valid Amazon-issued wildcard cert
- `CN=*.zyosgroup.com`, issuer `Amazon RSA 2048 M01`
- Valid Oct 2 2025 → Oct 31 2026

### Visible Content (Server-Rendered)

**The static HTML body, after stripping scripts and styles, contains exactly 209 characters of text — only the title sentence.** Everything else hydrates client-side after Gatsby loads.

H1 / H2 / CTAs / hero copy: **none present in HTML**. Bots that don't execute JS (and WebFetch markdown converters) see only:

> "Zyos Group Drives AI-Powered Transformation Through Agent-Driven Operational Intelligence That Increases Revenue, Improves Efficiency, Scales Operations, Reduces Risk, and Delivers Real-Time Business Insight"

The `<noscript>` fallback contains only the GTM iframe and a Gatsby image opacity helper — **no graceful-degradation copy at all**. Users with JS disabled see nothing.

### Tech Stack Signals

| Signal | Evidence |
|---|---|
| Framework | **Gatsby 5.16.1** (`<meta name="generator">`, `data-gatsby-head` attributes, `webpack-runtime-*.js`, `framework-*.js`, `app-*.js` chunks, `/page-data/*/page-data.json` endpoints all live) |
| UI library | **Ant Design** (`class="css-xogyor ant-app css-var-root"` on body wrapper) |
| CSS framework (also) | **Bootstrap 5.3.8** — full Bootstrap is inlined as a `<style>` block (`/*! * Bootstrap v5.3.8 (https://getbootstrap.com/)` literally in source) |
| CMS / asset host | **Contentful** (`images.ctfassets.net/v83qizhmhn6x/...`) |
| Fonts | Google Fonts — Bebas Neue + Poppins (loaded via 3 separate stylesheet links — two of them duplicate Bebas Neue) |
| Analytics | **Google Tag Manager** (container `GTM-5KJRM3S`, with `<noscript>` iframe fallback) and **HubSpot tracking** (`//js-na1.hs-scripts.com/6624575.js`, portal ID 6624575) |
| Hosting / CDN | Amazon S3 origin, CloudFront edge |
| First-load JS | `webpack-runtime` 8 KB + `framework` 141 KB + `app` 345 KB ≈ **482 KB of JS** before any page-specific code |
| Total HTML + JS first-load | **~1.35 MB** before images, fonts, or Contentful assets |

### Inline CSS Bloat (Page Weight)

- 3 `<style>` blocks totaling **881,293 chars** = 98.6% of the 893 KB homepage HTML
- One block is the full Bootstrap 5.3.8 stylesheet inlined
- Another carries the Ant Design CSS-vars build
- Net: every page reships ~860 KB of CSS in HTML instead of caching a stylesheet (and `/styles.b69732dbc6f8f7a56714.css` ALSO exists as an external link). **Double-loaded styles.**

---

## Content Depth (Top Pages)

Because the HTML is empty of body copy and `page-data.json` is empty of content (~200 bytes each, no Contentful payload — content is hardcoded into the JS bundle), **server-rendered text on every page is just the title**. The table below reflects what a crawler or social embedder sees.

| URL | HTML title | Server-rendered body text length | H1 in HTML | 1-sentence summary |
|---|---|---|---|---|
| `/` | (303-char marketing sentence) | 209 chars | none | Homepage exists as JS shell; meta description is the only summary signal. |
| `/services/innovation-as-service/` | AI-Led Digital Transformation Services \| Innovation Solutions Zyos Group | 74 chars | none | Innovation-as-Service hub for IT/cloud/cyber/BPM/process; content rendered client-side. |
| `/services/customer-growth-as-service/` | (DUPLICATE of innovation-as-service) | 74 chars | none | Growth-as-Service hub for web/SEO/paid/content/ecom; **shares title, description, and canonical with innovation-as-service.** |
| `/about-us/` | Zyos Group \| Business Transformation, Process Optimization & AI Enablement | 80 chars | none | Company narrative around AI-enabled operations; only About has a decent description tag. |
| `/framework/` | Digital Transformation & AI Solutions \| Zyos Business Framework | 69 chars | none | Methodology page; missing meta description and canonical entirely. |
| `/industries/` | **Industries Page** (literal placeholder) | 17 chars | none | Industries landing; title is dev placeholder shipped to production. |
| `/portfolio/` | _(no title at all)_ | 1 char | none | Portfolio index; no title, no description, and child URLs 404. |
| `/case-study/` | _(no title at all)_ | 1 char | none | Case study index; no metadata. |
| `/contact-us/` | Contact Us \| Professional Business Solutions \| Zyos | 53 chars | none | Contact landing; canonical points to **jerseyshorepowerwash.com** (wrong domain). |

> Reliable word counts of rendered content cannot be obtained without a headless browser. Document this limitation; resume in a Pass-1.5 audit if needed before cutover.

---

## Design + UX Signals (Inferred from HTML)

- **Fonts:** Bebas Neue (display) + Poppins (body), via Google Fonts. Three separate Google Fonts stylesheet `<link>`s — two of which duplicate Bebas Neue. Likely a CMS-vs-theme conflict that no one cleaned up.
- **CSS framework reality:** Bootstrap 5.3.8 (full, inlined) + Ant Design (`ant-app`, `css-var-root`) co-existing. Two competing design systems compete for layout primitives and components on the same page.
- **Distinct page templates (inferred from Gatsby `componentChunkName`):** at least 9 — `index`, `about-us`, `framework`, `services-innovation-as-service-index`, `services-customer-growth-as-service-index`, `industries`, `portfolio`, `case-study`, `contact-us` — plus child service templates and child industry templates.
- **Forms in HTML:** **none.** Contact page has no static `<form>`. Forms are presumably injected client-side via HubSpot.
- **Nav structure:** Nested 2 levels (Services → two as-a-Service parents → 5–6 sub-services each). 4 industry sub-pages. Most other top-level pages are flat.
- **Content surfaces present:** About, Framework, Portfolio (broken), Case-Study (empty), Contact. **No blog. No pricing. No team. No press/news. No customer testimonials surface as standalone.**

---

## SEO State

### Homepage

| Check | Verdict |
|---|---|
| Title length | 303 chars (target ≤ 60). Google will truncate; the brand-promise sentence is unrecognizable in SERPs. |
| Description length | 177 chars (target ≤ 155). Will truncate. |
| Canonical | `https://zyosgroup.com` (no trailing slash, no www) |
| Robots meta | absent (indexable) |
| hreflang | none (not needed; English only) |
| OG image | **missing** |
| JSON-LD | **none** (no Organization, no WebSite, no SiteNavigationElement, no BreadcrumbList) |
| Server-rendered body | **209 chars of title only** — no crawlable content for non-JS crawlers, no E-E-A-T signals, no internal anchor text from copy |

### /services/innovation-as-service/

| Check | Verdict |
|---|---|
| Title | 79 chars — too long, but acceptable |
| Description | 233 chars — too long |
| Canonical | **`https://zyosgroup.com/innovation-as-a-service`** (a URL that returns 404 and is NOT in the sitemap; correct URL is `/services/innovation-as-service/`) |
| Issue | **DUPLICATE title + description + canonical with `/services/customer-growth-as-service/`.** Google will treat the two parent service pages as one. |

### /services/customer-growth-as-service/

| Check | Verdict |
|---|---|
| Title | (DUPLICATE) |
| Description | (DUPLICATE) |
| Canonical | **`https://zyosgroup.com/innovation-as-a-service`** (canonicals AWAY from itself, to a 404, telling Google to drop this page entirely) |

### /contact-us/

| Check | Verdict |
|---|---|
| Title | 50 chars (OK) |
| Description | **missing** |
| Canonical | **`https://www.jerseyshorepowerwash.com/contact-us/`** — canonicalizes the Zyos contact page to a customer's domain. Almost certainly a copy-paste artifact from a portfolio-site template. Search engines will drop the page from Zyos's index and credit jerseyshorepowerwash.com instead. |

### Site-wide SEO issues

| Issue | Severity |
|---|---|
| Sitemap advertises 6 portfolio URLs that all 404 | **High** — Google Search Console will flag this; visitors clicking a SERP can land on a 404 |
| Inconsistent www-vs-apex canonicals: home → `zyosgroup.com`, about-us → `www.zyosgroup.com`, contact-us → `www.jerseyshorepowerwash.com` | **High** — duplicate-content risk; both www and apex return 200 with identical bodies and no redirect |
| Cross-domain canonical to `jerseyshorepowerwash.com` on /contact-us/ | **Critical** — deindexing risk for primary lead-capture page |
| Wrong canonical to `/innovation-as-a-service` (404) on both parent service pages | **Critical** |
| `og:type = article` on homepage (should be `website`) | Medium |
| No OG image set | Medium — bad LinkedIn/Slack/X previews |
| No JSON-LD Organization schema | Medium |
| Title tags 200+ chars stuffed with keywords | Medium — bad SERP CTR |
| Placeholder titles shipped: `Industries Page`, missing on Portfolio + Case Study | Medium |
| URL case inconsistency: only `/industries/general-Services/` (capital S) works; `/industries/general-services/` returns 404 from S3 | Medium — typing the natural URL gives a 404 |
| Almost zero server-rendered body content (≤ 209 chars per page) | **High** — Gatsby is being used as a SPA shell; SSR/SSG content output is essentially empty. Search engines that index without rendering see blank pages. |

---

## Summary Verdict — What Is Genuinely Wrong With This Site

1. **The SEO foundation is broken in ways that actively hurt indexing.** Both parent service pages canonicalize to a URL that 404s. The contact page canonicalizes to `jerseyshorepowerwash.com` (a customer site). The sitemap lists 6 portfolio pages that all return 404. Title tags are 200–300 characters. Multiple pages have no description, no canonical, no title at all. This isn't "needs SEO polish" — this is "Google is being told to ignore the page."

2. **The HTML body is almost empty.** Despite being on Gatsby (which can statically render content), every page ships only its `<title>` as server-rendered text — the other ~872 KB of HTML is inlined CSS. Crawlers that don't render JS, AI ingestion bots, social embedders, and screen readers in a degraded state all see a near-blank page. JS-disabled users see nothing at all because the `<noscript>` block contains only the GTM iframe.

3. **The page weight is grotesque for what it delivers.** 893 KB of HTML + ~482 KB of first-load JS = ~1.35 MB before a single image or font has loaded. 881 KB of that HTML is inline CSS — and a separate external stylesheet ALSO loads. Bootstrap 5 AND Ant Design AND custom CSS all ship together; the same Google Font family is requested by three different `<link>` tags. The toolchain has been bolted onto, never cleaned up.

4. **The brand voice in head tags doesn't match Zyos's current positioning.** The homepage title is a 303-character word-salad ("Drives AI-Powered Transformation Through Agent-Driven Operational Intelligence That Increases Revenue, Improves Efficiency, Scales Operations, Reduces Risk, and Delivers Real-Time Business Insight"). It crams every benefit-keyword into one sentence. It is unscannable, unmemorable, doesn't reference the Consulting / Solutions structure or the four practice areas defined for the redesign, and contradicts the locked tagline direction.

5. **Conversion infrastructure is fragile.** No `<form>` exists in the static HTML — lead capture depends entirely on HubSpot's JS injecting forms client-side. If HubSpot fails to load, blocks via an ad-blocker, or returns slowly, the contact page becomes ornamental. Combined with the bad canonical on /contact-us/, the primary conversion surface is the weakest part of the site.

6. **Production carries a portfolio-template lineage that was never scrubbed.** The cross-domain canonical to `jerseyshorepowerwash.com`, the `Industries Page` placeholder title, missing titles on Portfolio and Case Study, the URL-case inconsistency, and broken portfolio detail URLs all suggest the site was forked from a customer-build template and ran out of polish before launch. The redesign needs to replace, not iterate on, this codebase.

---

## Measurement Targets for Pass 2

To make the Pass 2 cutover measurable, here are the metrics worth re-capturing in the same format after launch:

| Metric | Today (2026-05-19 baseline) | Target post-cutover |
|---|---|---|
| Pages in sitemap | 30 | TBD — should match real published count |
| Sitemap URLs returning 200 | 24 of 30 (80%) | 100% |
| Pages with unique titles | partial — homepage + about + framework + contact + 2 services (duped) | 100% unique, ≤ 60 chars |
| Pages with unique descriptions | partial | 100% unique, ≤ 155 chars |
| Pages with valid canonical pointing to self | 1 of 9 sampled (homepage only) | 100% |
| Pages with JSON-LD | 0 | ≥ homepage Organization + WebSite + per-page BreadcrumbList |
| Server-rendered body text length (home) | 209 chars | ≥ 2,000 chars (real copy in HTML) |
| First-load JS | ~482 KB | < 150 KB (Astro/Next SSR) |
| Inlined CSS in homepage HTML | 881 KB | < 50 KB critical CSS only |
| OG image set | no | yes, branded |
| Cross-domain canonicals to non-Zyos sites | 1 (contact → jerseyshorepowerwash) | 0 |
| GTM container live | yes (`GTM-5KJRM3S`) | yes — **must port to new site** |
| HubSpot tracking live | yes (portal `6624575`) | yes — **must port to new site** |
| Contentful CMS in use | yes | TBD (Sanity is the locked CMS for NASPGHAN; zyosgroup.com CMS choice for Pass 2 is open) |

---

## Appendix — Verbatim Strings (for Reference)

**Homepage title (303 chars):**
> Zyos Group Drives AI-Powered Transformation Through Agent-Driven Operational Intelligence That Increases Revenue, Improves Efficiency, Scales Operations, Reduces Risk, and Delivers Real-Time Business Insight

**Homepage meta description (177 chars):**
> Zyos Group enables AI-driven transformation across portfolio companies, accelerating revenue, optimizing operations, reducing risk, and providing real-time business intelligence.

**About-us description (the only well-written one):**
> We redesign how your business operates. Zyos Group builds scalable systems, connects your data, and enables automation and AI to drive measurable growth.

**Innovation/Customer-Growth service page shared description (233 chars):**
> Transform your business with our comprehensive AI-powered digital transformation services. From cloud solutions to process optimization, we help organizations innovate and drive sustainable growth.

**HubSpot portal ID:** `6624575` (currently active — confirm it's still the right portal to use post-cutover)
**Google Tag Manager container:** `GTM-5KJRM3S` (currently active)
**Contentful space ID (from image URLs):** `v83qizhmhn6x`

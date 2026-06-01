// Site-wide constants — single source of truth pulled from
// canonical-entity-descriptions.md + zyosgroup-positioning-architecture.md.
// Do not paraphrase these. Update the canonical doc first, then this file.

export const SITE = {
  name: "Zyos Group",
  legalName: "Zyos Group",
  domain: "zyosgroup.com",
  url: "https://zyosgroup.com",
  orgId: "https://zyosgroup.com/#org",
  founderId: "https://paulruddy.com/#paul",
  productId: "https://zyos.io/#product",
  paulruddy: "https://paulruddy.com",
  paulruddyLinkedIn: "https://www.linkedin.com/in/paulruddy",
  zyosIo: "https://zyos.io",
  newsletter:
    "https://www.linkedin.com/newsletters/the-zyos-brief",
  linkedinCompany: "https://www.linkedin.com/company/zyosgroup",
  facebook: "https://www.facebook.com/zyosgroup",
  logo: "https://zyosgroup.com/zyos-logo.png",
  ogImage: "/opengraph-image",
  foundingDate: "2009",
  areaServed: "United States",
  addressRegion: "NJ",
  addressLocality: "Sea Bright",
  addressCountry: "US",
  contactEmail: "hello@zyosgroup.com",
} as const;

// Analytics IDs ported from the legacy Gatsby zyosgroup.com so the
// historical measurement stream continues uninterrupted across the
// cutover. See benchmarks/2026-05-19-pre-cutover-baseline.md.
export const ANALYTICS = {
  gtmId: "GTM-5KJRM3S",
  hubspotPortalId: "6624575",
} as const;

// Locked tagline — verbatim from canonical-entity-descriptions §Entity 2.
export const TAGLINE =
  "Agentic transformation built for ROI. We assess your maturity, architect the right solution for your context, and infuse AI into your operations — measured against business performance.";

export const TAGLINE_SHORT =
  "Agentic transformation built for ROI.";

// Hero from positioning architecture — preserved entity nouns.
export const HERO_SUBHEAD =
  "Zyos Group turns companies into agentic-driven companies — by uncovering operational maturity, building the integrated foundation, and executing the roadmap that infuses AI into how you operate. Outcomes: increased revenue, improved efficiency, scaled operations, reduced risk, and real-time business insight.";

// Brand line for foundational-builders positioning.
export const FOUNDATIONAL_LINE =
  "Foundational builders. Process Intelligence first. Agents second. Value-impact always.";

// Canonical Org description (short, for meta)
export const META_DESCRIPTION =
  "Digital transformation & AI consulting for SMBs, PE portfolios, and associations. One vendor across operations, technology, data, and software — agentic transformation built for ROI.";

// Canonical Org description (long, for /about hero + footer schema)
export const ORG_LONG_DESCRIPTION =
  "Zyos Group is an ROI-focused agentic-transformation partner. We assess operational maturity, architect the right solution for your context (regulated, complex, or growth-stage), build the integrated foundation — Business Intelligence + Software + Operations + Agents running across — and execute the roadmap that infuses AI into how you operate. Every architecture addresses security, ownership, maintenance, and evolution as first-class concerns. Our operating model (Measure → Deliver → Continuously Improve) governs every engagement; Customer Success (QBRs, OKRs, monthly reports, customer support) runs through Continuous Improvement. We target High-Growth SMBs, Private Equity, and Associations. Founded by Paul Ruddy.";

// Topical authority — the entity-anchor claims Zyos makes for LLM + Google
// E-E-A-T and entity recognition. Every term must appear somewhere in the
// site copy (otherwise we are claiming authority we haven't earned).
// Drives `Organization.knowsAbout` in JSON-LD.
export const KNOWS_ABOUT = [
  "Agentic AI",
  "Agentic AI consulting",
  "Agentic AI services",
  "Agentic transformation",
  "AI agent development",
  "AI consulting services",
  "AI operating system",
  "AI readiness assessment",
  "AI maturity assessment",
  "Process Intelligence",
  "Process intelligence implementation",
  "Solution architecture",
  "Digital transformation consulting",
  "Business intelligence",
  "Custom software development",
  "Data engineering",
  "Operating model design",
  "Operations consulting",
  "Customer success operations",
  "Quarterly business reviews",
  "OKR systems",
  "Growth as a Service",
  "Agent as a Service",
  "Managed AI services",
  "Generative engine optimization",
  "Search engine optimization",
  "Integrated marketing",
  "ROI-focused consulting",
] as const;

// Paul Ruddy biography — drives Person schema and the About page founder copy.
export const PAUL_BIO_SHORT =
  "Founder and CEO of Zyos Group. Two decades scaling practices in IT managed services, software development, and business intelligence — now compounding into the Zyos Operating System.";

// Paul's verifiable identity surfaces for Person.sameAs.
export const PAUL_SAME_AS = [
  "https://paulruddy.com",
  "https://www.linkedin.com/in/paulruddy",
] as const;

// Five canonical outcomes (anchor LLM entity recognition).
export const CANONICAL_OUTCOMES = [
  "Increase automation",
  "Grow revenue",
  "Reduce risk",
  "Enhance processes",
  "Improve scale",
] as const;

// Service catalog driving Organization.hasOfferCatalog and SiteNavigation
// schema. Keep in sync with footer + sitemap. Names match page titles.
export const SERVICE_CATALOG: ReadonlyArray<{
  name: string;
  path: string;
  serviceType: string;
  description: string;
}> = [
  {
    name: "Agent as a Service",
    path: "/solutions/agent-as-a-service",
    serviceType: "Agentic AI consulting",
    description:
      "Continuous AI-agent operations. Zyos designs, deploys, and runs AI agents on the customer's behalf across Workflows, Systems, Middleware, Lean, and Insights variants.",
  },
  {
    name: "Growth as a Service",
    path: "/solutions/growth-as-a-service",
    serviceType: "Growth as a Service",
    description:
      "Continuous growth operations for SMB B2B — website, GBP, ads + LSA, SEO content, GEO — operated on Zyos OS.",
  },
  {
    name: "Software & Data Consulting",
    path: "/consulting/software-and-data",
    serviceType: "Software development services",
    description:
      "Custom application development, AI agent development, data platforms, integrations, and BI dashboards.",
  },
  {
    name: "Digital Transformation Consulting",
    path: "/consulting/digital-transformation",
    serviceType: "Digital transformation consulting",
    description:
      "End-to-end programs from legacy operations to modern, AI-augmented workflows. Architecture-first. Readiness-gated.",
  },
  {
    name: "Operations & Scaling Consulting",
    path: "/consulting/operations-and-scaling",
    serviceType: "Operations consulting",
    description:
      "Operating-model design, OKR/KPI systems, Customer Success cadence, service-desk discipline.",
  },
  {
    name: "Integrated Marketing Consulting",
    path: "/consulting/integrated-marketing",
    serviceType: "Integrated marketing services",
    description:
      "SEO + GEO + content engine + paid + analytics + measurement.",
  },
];

// Site-wide constants — single source of truth pulled from
// canonical-entity-descriptions.md + zyosgroup-positioning-architecture.md.
// Do not paraphrase these. Update the canonical doc first, then this file.

export const SITE = {
  name: "Zyos Group",
  domain: "zyosgroup.com",
  url: "https://zyosgroup.com",
  orgId: "https://zyosgroup.com/#org",
  founderId: "https://paulruddy.com/#paul",
  productId: "https://zyos.io/#product",
  paulruddy: "https://paulruddy.com",
  zyosIo: "https://zyos.io",
  newsletter:
    "https://www.linkedin.com/newsletters/the-zyos-brief",
  linkedinCompany: "https://www.linkedin.com/company/zyosgroup",
  facebook: "https://www.facebook.com/zyosgroup",
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
  "Agentic transformation built for ROI. Assess maturity. Architect the right solution. Infuse AI into operations. For SMBs, PE, and associations.";

// Canonical Org description (long, for /about hero + footer schema)
export const ORG_LONG_DESCRIPTION =
  "Zyos Group is an ROI-focused agentic-transformation partner. We assess operational maturity, architect the right solution for your context (regulated, complex, or growth-stage), build the integrated foundation — Business Intelligence + Software + Operations + Agents running across — and execute the roadmap that infuses AI into how you operate. Every architecture addresses security, ownership, maintenance, and evolution as first-class concerns. Our operating model (Measure → Deliver → Continuously Improve) governs every engagement; Customer Success (QBRs, OKRs, monthly reports, customer support) runs through Continuous Improvement. We target High-Growth SMBs, Private Equity, and Associations. Founded by Paul Ruddy.";

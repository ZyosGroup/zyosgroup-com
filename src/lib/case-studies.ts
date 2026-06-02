// Case study content layer for zyosgroup.com.
// Same feature shape as blog (typed data → index + [slug] route → schema),
// DISTINCT structure: the operating-model arc — Situation → Work → Outcome,
// mapped to PI Phase 1 (what discovery surfaced) → Phase 2 (cycles run) →
// Phase 3 (what each QBR recalibrated) — plus quantified value-impact metrics.
//
// Content-engine-ready: the pipeline (CONTENT-ENGINE-SPEC.md) drafts these into
// the approval queue; on approval they publish here. Sanity replaces this array
// in a later pass without changing routes.

export interface CaseMetric {
  /** The number, formatted (e.g. "3.5×", "62%", "$240K"). */
  value: string;
  /** What it measures. */
  label: string;
  /** Outcome class — drives the catalog filter + color. */
  type: "revenue" | "cost" | "risk" | "time" | "quality";
}

export interface CasePhase {
  /** "Phase 1 — Discover" etc. */
  name: string;
  /** Short timeframe label, e.g. "Weeks 1–4". */
  window?: string;
  /** Bullet outcomes for the phase. */
  points: string[];
}

export interface CaseStudy {
  slug: string;
  /** Public title. */
  title: string;
  seoTitle?: string;
  description: string; // 150–160 char meta
  quickAnswer: string; // 40–80 word AI-liftable summary
  /** Customer name, or anonymized label if permission pending. */
  client: string;
  anonymized: boolean;
  industry: string;
  /** Flexible engagement model used (name only — NO pricing). */
  engagementModel: string;
  serviceLine: string;
  primaryKeyword: string;
  keywords: string[];
  datePublished: string;
  dateModified?: string;
  /** Headline metrics — render as the hero KPI band. */
  metrics: CaseMetric[];
  /** One-line framing of each arc stage. */
  situation: string;
  work: string;
  outcome: string;
  /** The PI-phase breakdown (the operating-model arc). */
  phases: CasePhase[];
  /** Optional client quote. */
  testimonial?: { quote: string; attribution: string };
  faqs: { q: string; a: string }[];
  pillars?: string[];
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "smb-finance-ops-agentic-foundation",
    title:
      "A High-Growth SMB Replaced Its Manual Intake Queue With a Governed Agent",
    seoTitle: "SMB Agentic AI Case Study | Zyos Group",
    description:
      "How a High-Growth SMB went from one-person email intake to a governed AI operating model, foundation first, agent second, with measured cycle-time and capacity gains.",
    quickAnswer:
      "A High-Growth SMB had a single person manually triaging all inbound requests by email, no SLA, no audit trail, no way to scale without hiring. Zyos built the foundational layer (policy, data classification, reusable skills), then deployed a governed intake agent on top. Result: structured intake with a visible task log, faster response, and capacity recovered without added headcount.",
    client: "Anonymized, High-Growth SMB (B2B services)",
    anonymized: true,
    industry: "B2B Services",
    engagementModel: "As-A-Service",
    serviceLine: "Agent as a Service",
    primaryKeyword: "agentic ai case study",
    keywords: [
      "agentic ai case study",
      "ai operating model",
      "ai agent for operations",
      "fractional operations",
    ],
    datePublished: "2026-06-01",
    pillars: ["Foundation for Agentic", "Single Vendor", "Differentiators", "The blend"],
    metrics: [
      { value: "0→1", label: "Governed intake agent in production", type: "quality" },
      { value: "Same week", label: "Response SLA established (was: none)", type: "time" },
      { value: "0", label: "Added headcount to scale intake", type: "cost" },
    ],
    situation:
      "All inbound work arrived as unstructured email and text. One person was the queue, no priority, no SLA, no audit trail, and no way to scale without adding headcount.",
    work:
      "Foundation before automation: an AI usage policy, data classification, and a small set of reusable skills came first. Only then did a single-purpose intake agent go live on top of the validated foundation, with a visible task log the team could audit.",
    outcome:
      "Intake became structured and measurable. Requests are captured, prioritized, and routed by the agent; the team reviews the reasoning trace, not the raw inbox. Capacity that was lost to triage came back, without a new hire.",
    phases: [
      {
        name: "Phase 1, Discover",
        window: "Weeks 1–4",
        points: [
          "Interviewed the function; mapped the intake value stream end-to-end.",
          "Scored the gap on the Opportunity Index, high frequency, high impact, low effort.",
          "Classified the data the agent would touch; published the one-page AI usage policy.",
        ],
      },
      {
        name: "Phase 2, Build",
        window: "Weeks 5–10",
        points: [
          "Stood up the shared knowledge base + reusable skills (the foundation).",
          "Deployed the Lean intake agent with a visible task log.",
          "Wired it into the existing CRM, no rip-and-replace.",
        ],
      },
      {
        name: "Phase 3, Improve",
        window: "Ongoing",
        points: [
          "Monthly report on agent throughput, reliability, and value-impact captured.",
          "First QBR recalibrated the next-highest-ranked fix from the register.",
        ],
      },
    ],
    testimonial: {
      quote:
        "We didn't buy a tool. We got an operating model, and one partner who handled the process, the data, the integration, and the agent.",
      attribution: "Operations lead, anonymized client",
    },
    faqs: [
      {
        q: "Why build the foundation before deploying the agent?",
        a: "Because AI accelerates whatever already exists, deploy an agent on a broken, ungoverned process and you scale the mess. The foundation (policy, data classification, reusable skills, shared knowledge base) is what makes the agent safe, auditable, and able to compound.",
      },
      {
        q: "What makes this different from buying an AI tool?",
        a: "A tool is an island, its own data, its own prompts, no governance, no audit trail. This was one vendor delivering operations + technology + data + software together: the process redesign, the data foundation, the integration, and the governed agent on top, measured against business outcomes.",
      },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}

export function allCaseSlugs(): string[] {
  return CASE_STUDIES.map((c) => c.slug);
}

export const METRIC_TYPE_LABEL: Record<CaseMetric["type"], string> = {
  revenue: "Revenue",
  cost: "Cost",
  risk: "Risk",
  time: "Time",
  quality: "Quality",
};

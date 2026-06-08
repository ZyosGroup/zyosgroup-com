// Case study content layer for zyosgroup.com.
// A Case Study is NARROW: one problem we solved, told straight (vs Projects,
// which is the holistic per-customer engagement). Same typed-data pattern as
// blog.ts / projects.ts (data -> index + [slug] route -> schema).
//
// HONESTY RULE (Paul 2026-06-07): no invented numbers. Metric tiles carry real,
// qualitative facts until a customer gives permission to publish hard figures;
// then we swap real numbers in. Each study maps to a real project on /projects.

export interface CaseMetric {
  /** The number or short fact, formatted (e.g. "Zero", "94/95", "$240K"). */
  value: string;
  /** What it measures. */
  label: string;
  /** Outcome class, drives the catalog filter + color. */
  type: "revenue" | "cost" | "risk" | "time" | "quality";
}

export interface CasePhase {
  /** "Phase 1, Discover" etc. */
  name: string;
  /** Short timeframe label, e.g. "Weeks 1-4". */
  window?: string;
  /** Bullet outcomes for the phase. */
  points: string[];
}

export interface CaseStudy {
  slug: string;
  /** Public title. */
  title: string;
  seoTitle?: string;
  description: string; // 150-160 char meta
  quickAnswer: string; // 40-80 word AI-liftable summary
  /** Customer name, or anonymized label if permission pending. */
  client: string;
  anonymized: boolean;
  industry: string;
  /** Engagement type (name only, NO pricing). */
  engagementModel: string;
  serviceLine: string;
  primaryKeyword: string;
  keywords: string[];
  datePublished: string;
  dateModified?: string;
  /** Headline metrics, render as the hero KPI band. Real/qualitative only. */
  metrics: CaseMetric[];
  /** The single problem we zoomed in on. */
  situation: string;
  /** What we did about it. */
  work: string;
  /** What changed. */
  outcome: string;
  /** The phased breakdown. */
  phases: CasePhase[];
  /** Slug of the related project on /projects, for cross-linking. */
  relatedProject?: string;
  /** Optional client quote, only when real + permissioned. */
  testimonial?: { quote: string; attribution: string };
  faqs: { q: string; a: string }[];
  pillars?: string[];
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "asta-modular-association-platform",
    title:
      "An Association Replaced Its Monolith With a Modular Stack It Owns",
    seoTitle: "Modular Association Platform Case Study | Zyos Group",
    description:
      "How Zyos Group rebuilt an association's expo and membership stack as modular, best-in-class systems orchestrated by middleware, with zero-downtime migration and full data ownership.",
    quickAnswer:
      "An association was trapped in a monolith whose event platform could not handle modern e-commerce, bundling, or membership-aware pricing. Zyos rebuilt the front end on a commerce core and orchestrated a modular best-in-class stack (commerce, access, CRM, events) connected by a middleware layer with one-directional data flow. The association launched immediately, kept its events running, and now owns its data and can swap any single component without a rebuild.",
    client: "ASTA, Automotive Service & Tire Alliance",
    anonymized: false,
    industry: "Associations",
    engagementModel: "Systems integration",
    serviceLine: "Software & Data",
    primaryKeyword: "association management platform",
    keywords: [
      "association management platform",
      "headless event registration",
      "systems integration consulting",
      "middleware orchestration",
    ],
    datePublished: "2026-06-07",
    relatedProject: "asta-modular-platform",
    pillars: ["The blend", "Single Vendor", "Differentiators"],
    metrics: [
      { value: "Zero", label: "downtime during the migration", type: "time" },
      { value: "Headless", label: "commerce front end, events back end", type: "quality" },
      { value: "Owns", label: "its data, no vendor lock-in", type: "risk" },
    ],
    situation:
      "The association's systems could not talk to each other, and its event platform's native front end could not support modern e-commerce UX, bundling, or membership-aware pricing. It was tied to a monolith it did not own, with revenue depending on complex expo events.",
    work:
      "We rebuilt the primary website on a modern commerce core and orchestrated a modular best-in-class stack around it: commerce as the system of record, an entitlement layer for access, a CRM for lifecycle, and the existing event tools for registration, all connected by a middleware layer with clean one-directional data flow. Registration went headless: a custom commerce front end for UX, cart, pricing, and payment, with the event back end kept for badges, floor plans, logistics, and check-in.",
    outcome:
      "Clean separation of concerns. Memberships launched immediately with a zero-downtime migration of existing members. The association owns its data end to end and can swap any single component without rebuilding the whole business.",
    phases: [
      {
        name: "Phase 1, Launch",
        window: "Immediate",
        points: [
          "Stood up memberships on the commerce core with entitlement logic.",
          "Migrated existing members with zero downtime and a clean activation path.",
        ],
      },
      {
        name: "Phase 2, Expo",
        window: "Next",
        points: [
          "Solved expo complexity with a headless registration design.",
          "Custom commerce front end handles money; the event back end handles logistics.",
        ],
      },
      {
        name: "Phase 3, Orchestrate",
        window: "Ongoing",
        points: [
          "Middleware enforces one-directional data flow to prevent sync conflicts.",
          "Each platform can be swapped on its own as needs change.",
        ],
      },
    ],
    faqs: [
      {
        q: "Why a modular stack instead of one all-in-one platform?",
        a: "Because all-in-one association platforms lock you in: you cannot swap a weak component without rebuilding everything, and you rarely own your data. A modular best-in-class stack lets each system do what it is best at, connected by middleware, so the association can replace any single piece without disrupting the rest.",
      },
      {
        q: "How do you keep modular systems in sync?",
        a: "With a middleware layer that enforces one-directional data flow from the point of purchase downstream. Data flows commerce to CRM to event tools, never in conflicting loops, which prevents the sync errors that plague bi-directional integrations.",
      },
    ],
  },
  {
    slug: "association-member-benchmarking",
    title:
      "An Association Sold Benchmarking Without Exposing Member Data",
    seoTitle: "Member Benchmarking Analytics Case Study | Zyos Group",
    description:
      "How Zyos Group built a secure, per-member analytics platform so an association could deliver decision-support and benchmarking to members without exposing any member's data to another.",
    quickAnswer:
      "Members wanted benchmarking to improve performance, but the association could not share data without exposing each member's numbers to competitors. Zyos built a secure multi-tenant analytics platform with strict per-member data isolation and a benchmark methodology for production planning. Each member sees only their own figures, benchmarked against the de-identified cohort, and the association gained a new decision-support and benchmarking offering.",
    client: "BCA",
    anonymized: false,
    industry: "Associations",
    engagementModel: "Executive decision support",
    serviceLine: "Software & Data",
    primaryKeyword: "member benchmarking analytics",
    keywords: [
      "member benchmarking analytics",
      "row-level security analytics",
      "decision support system",
      "association data platform",
    ],
    datePublished: "2026-06-07",
    relatedProject: "bca-powerbi-benchmarking",
    pillars: ["The blend", "Differentiators"],
    metrics: [
      { value: "Per-member", label: "data isolation, enforced at the row level", type: "risk" },
      { value: "Cohort", label: "de-identified benchmarking across members", type: "quality" },
      { value: "New", label: "benchmarking line for the association", type: "revenue" },
    ],
    situation:
      "Members wanted to benchmark their performance to plan and improve, but the association could not share data without exposing each member's numbers to competitors. Sensitive operational data made a naive shared dashboard a non-starter.",
    work:
      "We built a secure, multi-tenant analytics platform with strict per-member data isolation, so each member only ever sees their own data. On top of that we built a benchmark methodology for production planning and execution, letting members compare themselves against a de-identified cohort. Zyos served as the solution provider behind the performance benchmarks: an executive and operational decision-support engagement.",
    outcome:
      "Each member sees only their own figures, benchmarked against the cohort. The association can deliver decision-support to members and monetize benchmarking insights, all without ever exposing one member's data to another.",
    phases: [
      {
        name: "Phase 1, Model",
        window: "Discovery",
        points: [
          "Mapped the member data model and the isolation requirements.",
          "Designed the per-member security model and the benchmark methodology.",
        ],
      },
      {
        name: "Phase 2, Build",
        window: "Build",
        points: [
          "Built the multi-tenant analytics platform with row-level isolation.",
          "Wired the executive and operational decision-support dashboards.",
        ],
      },
      {
        name: "Phase 3, Operate",
        window: "Ongoing",
        points: [
          "Members benchmark against the de-identified cohort.",
          "The association extends benchmarking as a member offering.",
        ],
      },
    ],
    faqs: [
      {
        q: "How do you let members benchmark without seeing each other's data?",
        a: "With strict per-member data isolation enforced at the data layer (row-level security), so a member's view only ever contains their own records. Benchmarks are computed against a de-identified cohort, so members see how they compare without any individual member's numbers being exposed.",
      },
    ],
  },
  {
    slug: "displacing-rigid-ops-software-home-services",
    title:
      "A Home-Services Company Escaped Its All-in-One Tool, One Module at a Time",
    seoTitle: "Replacing All-in-One Field Software | Zyos Group",
    description:
      "How Zyos Group is moving home-services businesses off a rigid all-in-one tool onto an owned, agentic stack, replacing components one at a time with zero rip-and-replace risk.",
    quickAnswer:
      "Home-services companies were trapped in a rigid all-in-one tool they could not extend and could not orchestrate AI agents across, and did not own. Instead of a risky rip-and-replace, Zyos started with a high-performance new site, then began replacing the incumbent's components one at a time, starting with a custom quote builder, moving the business onto an owned agentic stack with no downtime.",
    client: "McMahons and Fresh Start (home services)",
    anonymized: false,
    industry: "Home services",
    engagementModel: "Growth as a Service",
    serviceLine: "Growth as a Service",
    primaryKeyword: "replace field service software",
    keywords: [
      "replace field service software",
      "service management software alternative",
      "custom quote builder",
      "agentic operations stack",
    ],
    datePublished: "2026-06-07",
    relatedProject: "mcmahons-power-washing",
    pillars: ["Single Vendor", "Foundation for Agentic", "Differentiators"],
    metrics: [
      { value: "94/95", label: "Lighthouse desktop / mobile on the new site", type: "quality" },
      { value: "One at a time", label: "components replaced, no rip-and-replace", type: "risk" },
      { value: "Owned", label: "agentic stack, not a rigid tool", type: "quality" },
    ],
    situation:
      "The business was locked into a rigid all-in-one service-management tool. It could not extend it, could not orchestrate AI agents across it, and did not own it. A full rip-and-replace would have been too risky to run a live operation through.",
    work:
      "We started with a high-performance new site engineered to rank and book, then began replacing the incumbent's components one at a time, starting with a custom quote builder. Each replaced module is owned by the business and built to be orchestrated by agents, so the migration happens piece by piece instead of all at once.",
    outcome:
      "The business is moving onto an owned, agentic stack with no downtime and no rip-and-replace risk. Each component it controls is one more part of operations agents can run, instead of a black box it rents.",
    phases: [
      {
        name: "Phase 1, Site",
        window: "First",
        points: [
          "Shipped a fast, local-SEO-tuned site (Lighthouse 94 desktop, 95 mobile).",
          "Wired real reviews, service-area pages, and a fast quote path.",
        ],
      },
      {
        name: "Phase 2, Displace",
        window: "Underway",
        points: [
          "Built a custom quote builder to replace the incumbent's first module.",
          "Each module is owned by the business and agent-ready.",
        ],
      },
      {
        name: "Phase 3, Orchestrate",
        window: "Ongoing",
        points: [
          "Replace remaining components one at a time, no downtime.",
          "Orchestrate agents across the owned stack as it grows.",
        ],
      },
    ],
    faqs: [
      {
        q: "Why replace an all-in-one tool one component at a time?",
        a: "Because a full rip-and-replace is risky when the tool runs a live operation, and it usually swaps one rigid all-in-one for another. Replacing components one at a time lets the business keep running, own each piece as it lands, and build toward a stack that agents can actually orchestrate.",
      },
    ],
  },
  {
    slug: "ai-operating-model-services-firm",
    title:
      "A Services Firm Turned Stalled AI Pilots Into a Governed Operating Model",
    seoTitle: "AI Operating Model Case Study | Zyos Group",
    description:
      "How Zyos Group replaced scattered AI pilots with a governed, bottom-up AI operating model, mapping every department to a scored roadmap and rebuilding manual reporting as live dashboards.",
    quickAnswer:
      "A services firm had plenty of AI tools and pilots but no governance and nothing compounding, the classic stall. Zyos built a governed AI operating model bottom-up: policy and artifacts, then skills, then agents, then apps. We interviewed every department, produced standard artifacts and a scored opportunity register, and executed the smallest layer that created each outcome. Every department now maps to a ranked roadmap, and manual multi-tool reporting was rebuilt as live, governed dashboards.",
    client: "Enterprise technology services firm (anonymized)",
    anonymized: true,
    industry: "Technology services",
    engagementModel: "Strategic consulting",
    serviceLine: "Digital Transformation",
    primaryKeyword: "ai operating model",
    keywords: [
      "ai operating model",
      "ai governance framework",
      "digital transformation consulting",
      "ai readiness assessment",
    ],
    datePublished: "2026-06-07",
    relatedProject: "ai-operating-model-transformation",
    pillars: ["Foundation for Agentic", "ROI over tokens", "Single Vendor"],
    metrics: [
      { value: "Every dept", label: "mapped to a scored roadmap", type: "quality" },
      { value: "12", label: "governed skills in the library", type: "quality" },
      { value: "Live", label: "dashboards replacing manual reporting", type: "time" },
    ],
    situation:
      "The firm had no shortage of AI: many tools, many pilots. What it lacked was governance and compounding. Every team experimented on its own, nothing was owned, and none of it tied to a business result, so the initiative stalled.",
    work:
      "We built a governed AI operating model from the bottom up: governance and policy first, then projects and artifacts, then skills, then agents, then apps. We interviewed every department, produced the standard artifacts (value stream maps, SOPs, a scored opportunity register, a roadmap), ranked by opportunity, and executed the smallest layer that created each outcome, a process change, a skill, an agent, or an app.",
    outcome:
      "Every department now maps to a scored opportunity register and a phased roadmap. Manual, multi-tool report pipelines were rebuilt as live, governed dashboards, and the firm has a safe foundation for agents instead of scattered, ungoverned pilots.",
    phases: [
      {
        name: "Phase 1, Foundation",
        window: "Weeks 1-4",
        points: [
          "Set governance, the AI usage policy, and the AI champion role.",
          "Stood up the core skill library and the artifact standards.",
        ],
      },
      {
        name: "Phase 2, Discovery",
        window: "Weeks 5-12",
        points: [
          "Interviewed and mapped each department.",
          "Scored the company-wide opportunity register and ranked it.",
        ],
      },
      {
        name: "Phase 3, Execution",
        window: "Weeks 13-20",
        points: [
          "Deployed the top-ranked fixes and the first agents.",
          "Rebuilt manual report pipelines as live dashboards.",
        ],
      },
    ],
    faqs: [
      {
        q: "Why build a foundation before deploying agents?",
        a: "Because AI accelerates whatever already exists. Point an agent at a broken, ungoverned process and you scale the mess. The foundation, policy, artifacts, validated skills, is what makes agents safe, auditable, and able to compound instead of stall.",
      },
      {
        q: "What does a governed AI operating model actually include?",
        a: "Five layers built bottom-up: governance and policy, then projects and artifacts, then reusable skills, then agents built on those skills, then the apps where it all surfaces. Skip a layer and the initiative stalls, which is exactly why most do.",
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

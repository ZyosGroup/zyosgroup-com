// Blog content layer for zyosgroup.com — "The Brief" long-form, on-site.
// On-site articles (distinct from the LinkedIn Newsletter archive at /the-brief):
// these are the rankable, GEO-citable assets. Each post is authored against the
// keyword research (ZG-KEYWORD-OPPORTUNITY.md) and weaves the 7 messaging pillars.
//
// Pattern: typed objects here → /blog index + /blog/[slug] dynamic route render
// them. Sanity can replace this array in a later pass without changing the routes.

export type BlogSection =
  | { kind: "p"; text: string }
  | { kind: "h2"; text: string; id?: string }
  | { kind: "h3"; text: string }
  | { kind: "ul"; items: string[] }
  | { kind: "ol"; items: string[] }
  | { kind: "quote"; text: string; cite?: string }
  | { kind: "callout"; label: string; text: string };

export interface BlogPost {
  slug: string;
  title: string;
  /** ≤60-char SEO title; falls back to title. */
  seoTitle?: string;
  /** 150–160 char meta description. */
  description: string;
  /** 40–80 word plain-text answer block — lifted by AI Overviews / PAA. */
  quickAnswer: string;
  /** Primary keyword this post targets (from keyword research). */
  primaryKeyword: string;
  /** Secondary keywords woven in. */
  keywords: string[];
  category: string;
  author: string;
  datePublished: string; // ISO yyyy-mm-dd
  dateModified?: string;
  readingMinutes: number;
  /** Ordered body. */
  body: BlogSection[];
  /** FAQ block → FAQPage schema + PAA surface. */
  faqs: { q: string; a: string }[];
  /** Related internal links (slugs or absolute paths) for topical clustering. */
  related?: { label: string; href: string }[];
  /** Which messaging pillars this post leans on (for our own tracking). */
  pillars?: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "ai-operating-model-vs-ai-tools",
    title:
      "An AI Operating Model Beats a Pile of AI Tools. Here's Why.",
    seoTitle: "AI Operating Model vs. AI Tools | Zyos Group",
    description:
      "Most companies aren't behind on AI capability. They're behind on AI structure. Why a governed AI operating model out-compounds scattered tools, and how to build one.",
    quickAnswer:
      "An AI operating model is a governed, company-wide system (policy, a shared knowledge base, reusable skills, and agents) that every department plugs into. It out-compounds scattered AI tools because skills, data, and governance are shared instead of fragmented. A company running a hundred AI licenses with no operating model is still effectively at zero.",
    primaryKeyword: "ai operating model",
    keywords: [
      "ai operating model",
      "ai transformation consulting",
      "agentic ai consulting",
      "ai governance framework",
    ],
    category: "AI Operating Model",
    author: "Paul Ruddy",
    datePublished: "2026-06-01",
    readingMinutes: 7,
    pillars: ["Single Vendor", "Foundation for Agentic", "Cost of waiting", "The blend"],
    body: [
      {
        kind: "p",
        text: "Walk into most mid-market companies in 2026 and you won't find a lack of AI. You'll find the opposite: a hundred licenses, a dozen pilots, every team quietly paying for its own tool. And almost none of it compounds. That's not a capability problem. It's a structure problem.",
      },
      {
        kind: "h2",
        text: "The broken pattern repeats in every department",
        id: "the-broken-pattern",
      },
      {
        kind: "p",
        text: "Work enters as unstructured email or chat. One person becomes the human queue, with no SLA, no priority, and no audit trail. Knowledge lives in individuals, not systems. AI gets used privately, without governance. Every team buys its own tool. There's no shared data, no shared skills, and so no scale. Six months in, the budget is gone and nothing scaled.",
      },
      {
        kind: "callout",
        label: "The core idea",
        text: "AI does not fix broken operations. It accelerates whatever already exists. Point it at a broken process and you get a faster broken process.",
      },
      {
        kind: "h2",
        text: "What an operating model actually is",
        id: "what-it-is",
      },
      {
        kind: "p",
        text: "An AI operating model is the governed structure every workflow plugs into. It has five layers, built bottom-up: governance and policy at the base; shared Projects and Artifacts above that; reusable Skills tied to how the company actually operates; Agents built on those validated Skills; and internal Apps at the top. Skip a layer and the initiative stalls, which is exactly why most of them do.",
      },
      {
        kind: "p",
        text: "The difference shows up in compounding. Tools fragment: each one is an island with its own data and its own prompts. An operating model shares: one knowledge base, one set of skills, one governance layer, so every department's work makes the next department faster.",
      },
      {
        kind: "h2",
        text: "Why the blend matters",
        id: "the-blend",
      },
      {
        kind: "p",
        text: "Infusing AI into how a company operates takes four capabilities most firms don't have under one roof: operations, technology, data, and software. An agency gives you marketing. A dev shop gives you software. A management consultant gives you a deck. Putting AI into operations needs all four at once: the process redesign, the integration, the data foundation, and the software to run it. That blend is the unique ability, and it's why a single vendor beats four stitched-together ones.",
      },
      {
        kind: "h2",
        text: "The cost of waiting is structural, not optional",
        id: "cost-of-waiting",
      },
      {
        kind: "p",
        text: "Within 12 to 18 months, every employee will be able to build their own personal agent: calendar prep, inbox triage, document drafting. Companies with an operating model already in place won't blink. The rails, the governance, and the data classification are there, so personal agents are safe by default. Companies without it will be starting from scratch with no rails, exposed rather than accelerated. The gap won't be capability. It'll be structure, and structure takes time to build.",
      },
      {
        kind: "h2",
        text: "Where it starts: map before you automate",
        id: "where-it-starts",
      },
      {
        kind: "p",
        text: "Before automating anything, map the organization end-to-end. Interview every department. Build value stream maps. Score every gap on a single index (impact, frequency, effort, readiness, strategic fit) so the roadmap is ranked, not opinionated. Then sequence the fixes: foundation first, automation second, AI augmentation last. That map is the roadmap.",
      },
    ],
    faqs: [
      {
        q: "What is an AI operating model?",
        a: "An AI operating model is a governed, company-wide structure (policy, a shared knowledge base, reusable skills, agents, and internal apps) that every department plugs into. It replaces scattered, team-by-team AI tools with one shared system so skills, data, and governance compound instead of fragmenting.",
      },
      {
        q: "Why isn't buying AI tools enough?",
        a: "AI tools fragment: each has its own data, prompts, and no governance, so nothing compounds and leadership has no visibility into ROI. AI also accelerates whatever already exists. Point it at a broken process and you get a faster broken process. An operating model fixes the structure first.",
      },
      {
        q: "How long does it take to stand up an AI operating model?",
        a: "A typical rollout runs roughly 20 weeks: foundation (governance, policy, AI Champion, core skills) in weeks 1–4, discovery (interview and map every department, score the opportunity register) through week 12, and execution (deploy top-ranked fixes, first agents) through week 20. It compresses or extends with company size, but the order never changes.",
      },
    ],
    related: [
      { label: "How we deliver", href: "/how-we-deliver" },
      { label: "The Foundational AI Layer", href: "/foundation" },
      { label: "Agent as a Service", href: "/solutions/agent-as-a-service" },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function allPostSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug);
}

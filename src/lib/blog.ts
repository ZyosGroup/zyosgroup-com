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
    slug: "digital-transformation-consulting-agentic-era",
    title:
      "Digital Transformation Consulting Just Changed Meaning. Here's What It Is Now.",
    seoTitle: "Digital Transformation Consulting in the Agentic Era",
    description:
      "Agentic AI is arriving faster than the internet did, and digital transformation consulting no longer means a cloud migration or a new platform. Here's what it means now, and why most programs still fail for the same structural reason.",
    quickAnswer:
      "Digital transformation consulting is the work of redesigning how a business operates so modern technology, data, and AI can run inside it. In the agentic era the deliverable has changed: it is no longer a platform purchase but a business that AI agents can actually operate safely. That requires documenting how the company works, building the data and process foundation, and measuring everything against business performance, not against how much AI was bought.",
    primaryKeyword: "digital transformation consulting",
    keywords: [
      "digital transformation consulting",
      "digital transformation consulting firm",
      "digital transformation consulting services",
      "agentic ai consulting",
      "ai transformation consulting",
    ],
    category: "Digital Transformation",
    author: "Paul Ruddy",
    datePublished: "2026-06-07",
    readingMinutes: 8,
    pillars: [
      "Foundation for Agentic",
      "ROI over tokens",
      "The blend",
      "Single Vendor",
      "Readiness-gated",
    ],
    body: [
      {
        kind: "p",
        text: "Agentic AI is arriving faster than the internet did. The internet took a decade to reorganize how companies worked. Agents are doing it in quarters. And somewhere in that compression, the phrase digital transformation consulting quietly changed meaning, while most of the market kept selling the old version of it.",
      },
      {
        kind: "p",
        text: "The old version was a technology project: migrate to the cloud, buy a platform, roll out a new system, declare victory. That work still has to happen, but it is no longer the point. The point now is whether your business is something an AI agent can actually operate. Almost nobody is funding the work that makes that true, which is exactly why most transformation programs will fail again, for the same structural reason they always have.",
      },
      {
        kind: "h2",
        text: "The deliverable changed from a platform to an operable business",
        id: "the-deliverable-changed",
      },
      {
        kind: "p",
        text: "An agent cannot run a process that lives only in someone's head. It cannot follow a workflow nobody ever wrote down, query data nobody ever structured, or respect a policy nobody ever set. The real deliverable of transformation today is the foundation underneath the agents: documented processes, governed data, clear policy, and reusable building blocks. The software is the easy part. The foundation is the work.",
      },
      {
        kind: "callout",
        label: "The core idea",
        text: "You cannot automate a process you have never written down. Agents need a foundation. Digital transformation is the work of building that foundation, not the work of buying the agents.",
      },
      {
        kind: "h2",
        text: "The contrarian part: it is not about how much AI you buy",
        id: "not-about-how-much-ai",
      },
      {
        kind: "p",
        text: "Walk the market today and transformation gets measured in the wrong currency: how many licenses, how many pilots, how many tokens burned, how many tools adopted. That scoreboard produces three reliable outcomes: chaos, because every team runs its own ungoverned experiment; no governance, because nobody owns the data, the access, or the risk; and no ROI, because none of it was ever tied to a business result. More AI on a broken foundation is just a faster way to lose the thread.",
      },
      {
        kind: "p",
        text: "A real transformation program measures itself in the only currency that matters: business performance. Did automation increase. Did revenue grow. Did risk go down. Did the process actually get better. Did the company scale without adding headcount in proportion. If a consulting engagement cannot draw a line from the work to one of those, it is selling activity, not transformation.",
      },
      {
        kind: "h2",
        text: "What good digital transformation consulting actually does",
        id: "what-good-consulting-does",
      },
      {
        kind: "p",
        text: "Stripped of the jargon, the job is four moves in a fixed order. Skip the order and the program stalls, which is why so many of them do.",
      },
      {
        kind: "ol",
        items: [
          "Assess the maturity. Find out how the business actually operates and how ready it is, before recommending anything. No two companies start from the same place, so no honest engagement starts with a fixed answer.",
          "Architect for the context. Design the right solution for this business, with security, ownership, maintenance, and evolution addressed in writing before anyone builds. Architecture-first, not tool-first.",
          "Sequence foundation-first. Build the governance, data, and process layer before the automation, and the automation before the AI augmentation. Crawl, walk, run, in that order.",
          "Measure against business performance. Tie every initiative to a business outcome and review it on a cadence, so the program stays honest after the kickoff energy fades.",
        ],
      },
      {
        kind: "p",
        text: "Notice that none of those four moves is buy a product. The product comes last, and only once the foundation can hold it. That is what readiness-gated means: nothing automated gets switched on until the structure underneath it can carry the weight.",
      },
      {
        kind: "h2",
        text: "Why one vendor across operations, technology, data, and software",
        id: "why-one-vendor",
      },
      {
        kind: "p",
        text: "Putting AI into how a company operates takes four capabilities most firms do not have under one roof: operations redesign, technology, data engineering, and software. An agency gives you marketing. A dev shop gives you software. A management consultancy gives you a deck and leaves before anything is built. Stitch four vendors together and the work falls into the seams between them, which is precisely where transformation programs die.",
      },
      {
        kind: "quote",
        text: "The differentiator is not any single specialty. It is the blend of all of them under one accountable owner, applied to your operations.",
      },
      {
        kind: "p",
        text: "That blend is also what lets a program move fast without breaking governance. The same team that maps the process designs the data model, builds the integration, and stands up the agent. There is no handoff to lose context across, and one owner is accountable for the business result instead of for a slice of the work.",
      },
      {
        kind: "h2",
        text: "The cost of treating it as a purchase",
        id: "cost-of-a-purchase",
      },
      {
        kind: "p",
        text: "Within twelve to eighteen months, every employee will expect to build their own agent: inbox triage, document drafting, meeting prep. Companies that did the foundational work will absorb that safely, because the rails, the governance, and the data classification already exist. Companies that treated transformation as a shopping trip will be exposed instead of accelerated, with sensitive data flowing through ungoverned tools and no way to see it. The gap between the two will not be capability. It will be structure, and structure takes time to build, which is why the time to start is before you feel behind.",
      },
      {
        kind: "h2",
        text: "Where a real program starts: map before you automate",
        id: "where-it-starts",
      },
      {
        kind: "p",
        text: "Every serious engagement starts the same way: a structured measurement of how the business actually runs. Interview every department. Build the value stream maps. Score every gap on one index of impact, frequency, effort, readiness, and strategic fit, so the roadmap is ranked by evidence instead of by opinion. Then sequence the fixes foundation-first. That map is the roadmap, and the roadmap is the first real artifact of transformation, long before a single agent goes live.",
      },
    ],
    faqs: [
      {
        q: "What is digital transformation consulting?",
        a: "Digital transformation consulting is the work of redesigning how a business operates so modern technology, data, and AI can run inside it and produce measurable results. In the agentic era the deliverable is a business that AI agents can safely operate: documented processes, governed data, clear policy, and a foundation built before any automation is switched on.",
      },
      {
        q: "How is digital transformation different now that AI agents exist?",
        a: "It has shifted from a technology purchase to an operability problem. An agent cannot run a process that was never written down or query data nobody structured, so the real work is building the process, data, and governance foundation underneath the agents. The software is the easy part. The foundation is the work, and it is what most programs skip.",
      },
      {
        q: "How do you measure ROI on digital transformation?",
        a: "Against business performance, not against how much AI was bought. The honest metrics are whether automation increased, revenue grew, risk went down, processes improved, and the company scaled without adding proportional headcount. If an engagement cannot draw a line from the work to one of those outcomes, it is measuring activity, not transformation.",
      },
    ],
    related: [
      { label: "Digital Transformation Consulting", href: "/consulting/digital-transformation" },
      { label: "How we deliver", href: "/how-we-deliver" },
      { label: "The Foundational AI Layer", href: "/foundation" },
    ],
  },
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
        a: "A typical rollout runs roughly 20 weeks: foundation (governance, policy, AI Champion, core skills) in weeks 1 to 4, discovery (interview and map every department, score the opportunity register) through week 12, and execution (deploy top-ranked fixes, first agents) through week 20. It compresses or extends with company size, but the order never changes.",
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

// Projects ("Portfolio") content layer for zyosgroup.com.
//
// PURPOSE (Paul 2026-06-07): customers don't fully grasp what we sell, so the
// Portfolio makes it CONCRETE and VISUAL: real screenshots of work + how it's
// built. Each Project is PER-CUSTOMER and brings the whole engagement together,
// showing how we layered the building blocks (Skills, Agents, Artifacts, Apps)
// plus the website / modules we built. (Case Studies, by contrast, are narrow:
// one area or one problem. Projects = the holistic, visual story.)
//
// Screenshots live in /public/projects. Entries flagged `confirm: true` are
// pending a name/screenshot/permission call and render with a neutral label +
// gradient placeholder until cleared.

export type BuildBlock =
  | "website"
  | "skill"
  | "agent"
  | "artifact"
  | "app";

export const BLOCK_LABEL: Record<BuildBlock, string> = {
  website: "Website",
  skill: "Skill",
  agent: "Agent",
  artifact: "Artifact",
  app: "App / Module",
};

export interface ProjectComponent {
  block: BuildBlock;
  label: string;
}

export interface Project {
  slug: string;
  /** Customer / project display name. */
  customer: string;
  /** Short category, e.g. "Home services", "Associations", "Product". */
  category: string;
  /** One-line of what we did for them. */
  headline: string;
  /** 1–2 sentence, visual-first description. */
  blurb: string;
  /** Screenshot under /public/projects (e.g. /projects/fsm.jpg). */
  image?: string;
  /** Live URL when public + linkable. */
  liveUrl?: string;
  /** Small status note shown near the title, e.g. "Launching 2026". */
  status?: string;
  /** The building blocks we layered — this is the "how it's built" view. */
  components: ProjectComponent[];
  /** Light, true outcome notes (no invented metrics; hard numbers live in Case Studies). */
  impact?: string[];
  featured?: boolean;
  /** Name / screenshot / permission not yet confirmed — render neutrally. */
  confirm?: boolean;
}

export const PROJECTS: Project[] = [
  {
    slug: "shorefoodies-verdict",
    customer: "ShoreFoodies",
    category: "Product / SaaS",
    headline: "A critic-led restaurant-review platform, built end to end.",
    blurb:
      "We designed and built Verdict, a multi-tenant review platform, and launched ShoreFoodies as its first market. One codebase spins up a fully branded review site per city, with an editorial workflow and secure admin.",
    image: "/projects/shorefoodies.jpg",
    liveUrl: "https://shorefoodies.com",
    featured: true,
    components: [
      { block: "website", label: "Public review site (Next.js)" },
      { block: "app", label: "Multi-tenant platform (Verdict)" },
      { block: "skill", label: "Editorial publishing workflow" },
      { block: "skill", label: "OTP-secured admin" },
    ],
    impact: [
      "One platform now launches a new branded review market without a rebuild.",
    ],
  },
  {
    slug: "zyos-operating-system",
    customer: "Zyos Operating System",
    category: "Product / Platform",
    headline: "The platform that runs every Zyos engagement.",
    blurb:
      "Our own product, and the place every module below is born. Intake and opportunity scoring, proposals, an engagement board, OKRs and KPIs, Customer Success cadence, and Quarterly Business Reviews, on one connected system.",
    image: "/projects/zyos-os.jpg",
    liveUrl: "https://zyos.io",
    featured: true,
    components: [
      { block: "app", label: "Engagement + portal platform" },
      { block: "agent", label: "Optimizer + research agents" },
      { block: "skill", label: "Scoring, proposal, audit skills" },
      { block: "artifact", label: "Roadmaps, audits, QBRs" },
    ],
    impact: [
      "Every customer engagement runs on one system instead of scattered tools.",
    ],
  },
  {
    slug: "ai-operating-model-transformation",
    customer: "Enterprise technology services firm",
    category: "AI Operating Model / Strategic Consulting",
    headline: "A company-wide AI operating model, from governance to live agents.",
    blurb:
      "A high-touch transformation engagement: Zyos embedded in a digital leadership role, interviewed every department, and stood up a governed AI operating model end to end. Bottom up, from policy and a governed skill library to orchestration agents and a single role-based company app. The kind of on-premise, stakeholder-deep work that changes how an organization actually runs.",
    image: "/projects/ai-operating-model.svg",
    status: "Strategic consulting, in progress",
    featured: true,
    confirm: true,
    components: [
      { block: "skill", label: "12-skill governed library" },
      { block: "artifact", label: "Value stream maps, SOPs, scored roadmap" },
      { block: "agent", label: "Provisioning, help-desk, finance agents" },
      { block: "app", label: "Role-based company app (SSO)" },
    ],
    impact: [
      "Every department mapped to a scored opportunity register and a phased roadmap.",
      "Manual multi-tool report pipelines rebuilt as live, governed dashboards.",
    ],
  },
  {
    slug: "fsm-moving",
    customer: "Fresh Start",
    category: "Home services (moving)",
    headline: "A new site, plus a moving platform we are building piece by piece.",
    blurb:
      "We started with a ground-up site, county and town coverage pages, real photography, Google reviews throughout, engineered for local search (Lighthouse 98 desktop, 89 mobile). Now we are going further: replacing their moving software one component at a time, starting with a custom quote builder, so the business runs on an agentic stack it owns instead of a rigid off-the-shelf tool.",
    image: "/projects/fsm.jpg",
    status: "Site + platform build, in progress",
    featured: true,
    confirm: true,
    components: [
      { block: "website", label: "Astro site, county + town pages" },
      { block: "app", label: "Custom quote builder (replacing the incumbent)" },
      { block: "app", label: "Moving-ops modules, built one at a time" },
      { block: "agent", label: "Rank tracking + GBP optimizer" },
      { block: "artifact", label: "Monthly performance reports" },
    ],
    impact: [
      "Desktop performance 98, mobile 89; real Place IDs, reviews, and legal pages in place.",
      "Moving software is being displaced component by component, toward an owned agentic stack.",
    ],
  },
  {
    slug: "mcmahons-power-washing",
    customer: "McMahons",
    category: "Home services (power washing)",
    headline: "A new site, and a service-management system we are replacing piece by piece.",
    blurb:
      "We started with a high-performance lead-generating site that leads with their track record (500+ homes, 7 years, zero claims): service-area pages, real photos, reviews, and a fast quote path (Lighthouse 94 desktop, 95 mobile). Now we are replacing the components of their service-management system one at a time, so they run on an agentic stack they own rather than a rigid all-in-one tool.",
    image: "/projects/powerwashing.jpg",
    status: "Site + platform build, in progress",
    featured: true,
    confirm: true,
    components: [
      { block: "website", label: "Astro site, service-area pages" },
      { block: "app", label: "Service-management modules (replacing the incumbent)" },
      { block: "agent", label: "Rank tracking + GBP optimizer" },
      { block: "app", label: "Analytics + reporting portal" },
    ],
    impact: [
      "Lighthouse 94/95 desktop/mobile; real reviews and Place ID wired in.",
      "Service-management system being displaced component by component, toward an owned agentic stack.",
    ],
  },
  {
    slug: "bca-powerbi-benchmarking",
    customer: "BCA",
    category: "Associations / Business Intelligence",
    headline:
      "A secure member-benchmarking analytics platform for an association.",
    blurb:
      "We built a secure, multi-tenant analytics platform so the association could deliver decision-support to its members, benchmark and measure member performance, and monetize benchmarking insights, with strict per-member data isolation. Zyos served as the solution provider behind the performance benchmarks for blood-bank production planning and execution: an executive and operational decision-support engagement.",
    image: "/projects/bca-analytics.svg",
    status: "Illustrative dashboard",
    featured: true,
    confirm: true,
    components: [
      { block: "app", label: "Secure multi-tenant analytics app" },
      { block: "skill", label: "Per-member data isolation + modeling" },
      { block: "skill", label: "Benchmark methodology" },
      { block: "artifact", label: "Executive + operational dashboards" },
    ],
    impact: [
      "Members see only their own data; the association sells benchmarking across the cohort.",
    ],
  },
  {
    slug: "asta-modular-platform",
    customer: "ASTA, Automotive Service & Tire Alliance",
    category: "Associations / Systems integration",
    headline:
      "A modular association platform: commerce, CRM, and events, orchestrated.",
    blurb:
      "ASTA's systems could not talk to each other. We rebuilt their primary website on a modern commerce core and orchestrated a modular, best-in-class stack around it, membership and e-commerce, access and entitlement, CRM lifecycle, and event registration, connected by a middleware layer with clean one-directional data flow. Designed for ownership, not vendor lock-in: ASTA owns the data and can swap any single component without rebuilding the whole business.",
    image: "/projects/asta.jpg",
    liveUrl: "https://asta.org",
    featured: true,
    components: [
      { block: "website", label: "Rebuilt asta.org on a commerce core" },
      { block: "app", label: "Modular best-in-class platform stack" },
      { block: "skill", label: "Middleware orchestration, one-way data flow" },
      { block: "skill", label: "Membership entitlement + access control" },
      { block: "artifact", label: "Architecture + integration blueprint" },
    ],
    impact: [
      "Memberships launched immediately, with a zero-downtime legacy migration.",
      "Headless registration solved the expo complexity; ASTA owns the data end to end.",
    ],
  },
  {
    slug: "lilio-learning",
    customer: "Lillio",
    category: "Education / EdTech",
    headline: "A modern front end in full React for an early-learning platform.",
    blurb:
      "A bright, fully custom React build for an early-childhood learning brand: component-driven, fast, responsive, and easy to extend as the program grows.",
    image: "/projects/lilio.jpg",
    liveUrl: "https://www.lillio.com",
    featured: true,
    components: [
      { block: "website", label: "Custom React front end" },
      { block: "skill", label: "Responsive component system" },
    ],
  },
];

export function allProjectSlugs(): string[] {
  return PROJECTS.map((p) => p.slug);
}

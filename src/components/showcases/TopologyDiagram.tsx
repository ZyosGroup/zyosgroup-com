"use client";

// Full implementation per zyosgroup-com-capability-showcases.md §1.
// Interactive system topology — hover/click reveals "What Zyos did here";
// industry filter morphs the topology to match a typical fabric.
// Performance budget: <80KB page-weight contribution — uses inline SVG + minimal state,
// no Reactflow runtime to keep bundle thin.

import { useMemo, useState } from "react";
import { cn } from "@/lib/cn";

type IndustryKey =
  | "mid-market-saas"
  | "smb-services"
  | "professional-services"
  | "association";

type TopologyNode = {
  id: string;
  label: string;
  x: number;
  y: number;
  category: "source" | "system" | "agent" | "data";
  description: string; // "What Zyos did here"
};

type Topology = {
  label: string;
  nodes: TopologyNode[];
};

const TOPOLOGIES: Record<IndustryKey, Topology> = {
  "mid-market-saas": {
    label: "Mid-market SaaS",
    nodes: [
      { id: "crm", label: "CRM", x: 80, y: 50, category: "source", description: "Pipeline + activity instrumentation; agent-driven hygiene + reply triage on top." },
      { id: "billing", label: "Billing + payments", x: 220, y: 50, category: "source", description: "Revenue + retention signals piped into BI; dunning + collections automated." },
      { id: "support", label: "Support", x: 360, y: 50, category: "source", description: "Tier-1 resolution agent + SLA tracking via Service Desk module." },
      { id: "app", label: "Product app", x: 500, y: 50, category: "source", description: "Event instrumentation: usage + activation + churn-risk signals." },
      { id: "warehouse", label: "Data warehouse", x: 640, y: 50, category: "data", description: "Single source of truth; agent + dashboard reads run here." },
      { id: "hub", label: "Zyos OS", x: 360, y: 175, category: "agent", description: "The integration + agent runtime. Every workflow runs through here." },
      { id: "kanban", label: "Engagement Kanban", x: 110, y: 300, category: "system", description: "Customer-visible delivery board; nothing happens off-board." },
      { id: "qbr", label: "QBR + OKR tracker", x: 360, y: 300, category: "system", description: "Quarterly value-impact recap + re-prioritization decisions." },
      { id: "agents", label: "Agent fleet", x: 610, y: 300, category: "agent", description: "Outbound · ABM · Support · Anomaly · Finance · HR agents — all visible task logs." },
    ],
  },
  "smb-services": {
    label: "SMB services (GaaS shape)",
    nodes: [
      { id: "gbp", label: "Google Business Profile", x: 80, y: 50, category: "source", description: "GBP optimization + Q&A + post cadence operated continuously." },
      { id: "site", label: "Customer website", x: 220, y: 50, category: "source", description: "Built on the Zyos customer-site template; auto-deployed." },
      { id: "reviews", label: "Review platforms", x: 360, y: 50, category: "source", description: "Review monitoring + response drafting + velocity tracking." },
      { id: "ads", label: "Ads + LSA", x: 500, y: 50, category: "source", description: "Paid optimization agent runs continuously, not weekly." },
      { id: "ga", label: "GA4 + Ads pipelines", x: 640, y: 50, category: "data", description: "Analytics integrations feed the GaaS pipeline-health dashboard." },
      { id: "hub", label: "Zyos OS (GaaS variant)", x: 360, y: 175, category: "agent", description: "Single operating system for every GaaS customer." },
      { id: "content", label: "Content engine", x: 110, y: 300, category: "agent", description: "Topic discovery → draft → editorial review → publish → measure." },
      { id: "gaas-qbr", label: "GaaS QBR", x: 360, y: 300, category: "system", description: "Specialized SMB QBR — SEO + GEO + reviews + ads + content." },
      { id: "citations", label: "Citation manager", x: 610, y: 300, category: "agent", description: "Citation consistency + GEO mention tracking." },
    ],
  },
  "professional-services": {
    label: "Professional services",
    nodes: [
      { id: "crm", label: "CRM / Practice mgmt", x: 80, y: 50, category: "source", description: "Practice management as the system of record." },
      { id: "intake", label: "Intake portal", x: 220, y: 50, category: "source", description: "Client intake instrumented end-to-end; agent routes case shape." },
      { id: "docs", label: "Document mgmt", x: 360, y: 50, category: "source", description: "Document automation + retrieval-grounded drafting." },
      { id: "billing", label: "Billing / TKR", x: 500, y: 50, category: "source", description: "Time + billing instrumentation; agent variance flags." },
      { id: "warehouse", label: "Knowledge base", x: 640, y: 50, category: "data", description: "Vector-indexed firm knowledge with privilege-aware boundaries." },
      { id: "hub", label: "Zyos OS", x: 360, y: 175, category: "agent", description: "Architecture is conservative: audit trails, human-in-loop defaults." },
      { id: "kanban", label: "Matter Kanban", x: 110, y: 300, category: "system", description: "Matter / engagement-level visibility for partners + clients." },
      { id: "qbr", label: "Client QBR", x: 360, y: 300, category: "system", description: "Per-client review with value-impact recap and risk register." },
      { id: "agents", label: "Drafting + research agents", x: 610, y: 300, category: "agent", description: "Privilege-aware drafting + retrieval grounded in firm KB." },
    ],
  },
  "association": {
    label: "Association (AMS-aware)",
    nodes: [
      { id: "ams", label: "AMS", x: 80, y: 50, category: "source", description: "iMIS / NetForum / Personify — scoped via AMS adapter skills." },
      { id: "cms", label: "Member CMS", x: 220, y: 50, category: "source", description: "Member content + access tiering instrumented for measurement." },
      { id: "events", label: "Events + LMS", x: 360, y: 50, category: "source", description: "Registration + LMS + CE tracking joined to member record." },
      { id: "email", label: "Member email", x: 500, y: 50, category: "source", description: "Lifecycle agent + segmentation aware of membership stage." },
      { id: "warehouse", label: "Member data store", x: 640, y: 50, category: "data", description: "Privacy-first single member record across all surfaces." },
      { id: "hub", label: "Zyos OS", x: 360, y: 175, category: "agent", description: "Architecture is regulated-context: audit trails + ownership matrix." },
      { id: "kanban", label: "Engagement Kanban", x: 110, y: 300, category: "system", description: "Board-visible delivery cadence + transparent re-prioritization." },
      { id: "qbr", label: "Annual + quarterly review", x: 360, y: 300, category: "system", description: "Volunteer + staff-facing review of value-impact + roadmap." },
      { id: "agents", label: "Member-service agents", x: 610, y: 300, category: "agent", description: "Help desk + onboarding + content recommendation agents." },
    ],
  },
};

const INDUSTRY_OPTIONS: { key: IndustryKey; label: string }[] = [
  { key: "mid-market-saas", label: "Mid-market SaaS" },
  { key: "smb-services", label: "SMB services" },
  { key: "professional-services", label: "Professional services" },
  { key: "association", label: "Association" },
];

function nodeFill(category: TopologyNode["category"]) {
  switch (category) {
    case "agent":
      return "#0F1B3F";
    case "data":
      return "#22D3EE";
    case "system":
      return "#FFFFFF";
    case "source":
    default:
      return "#FFFFFF";
  }
}

function nodeTextColor(category: TopologyNode["category"]) {
  if (category === "agent") return "#FAFAF9";
  return "#0A0E1F";
}

export function TopologyDiagram({
  className,
  caption = "System topology — Zyos integrates the stack and runs agents across all of it. Pick an industry to see how the fabric shifts.",
  initialIndustry = "mid-market-saas",
}: {
  className?: string;
  caption?: string;
  initialIndustry?: IndustryKey;
}) {
  const [industry, setIndustry] = useState<IndustryKey>(initialIndustry);
  const [activeId, setActiveId] = useState<string | null>(null);

  const topology = TOPOLOGIES[industry];

  const hub = useMemo(
    () => topology.nodes.find((n) => n.id === "hub")!,
    [topology]
  );

  const active = activeId
    ? topology.nodes.find((n) => n.id === activeId)
    : null;

  return (
    <figure
      className={cn(
        "rounded-lg border border-border bg-surface p-6 md:p-8",
        className
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="mono text-[11px] uppercase tracking-[0.16em] text-subtle">
          System connections · {topology.label}
        </p>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Industry filter">
          {INDUSTRY_OPTIONS.map((opt) => (
            <button
              key={opt.key}
              type="button"
              onClick={() => {
                setIndustry(opt.key);
                setActiveId(null);
              }}
              aria-pressed={industry === opt.key}
              className={cn(
                "text-xs rounded-md border px-2.5 py-1 transition-colors",
                industry === opt.key
                  ? "bg-primary text-white border-primary"
                  : "bg-surface text-ink/75 border-border hover:border-primary/40"
              )}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5 grid gap-6 md:grid-cols-[1.6fr_1fr]">
        <div className="relative">
          <svg
            viewBox="0 0 720 360"
            className="w-full h-auto"
            preserveAspectRatio="xMidYMid meet"
            role="img"
            aria-label={`System topology for ${topology.label}`}
          >
            <g stroke="#22D3EE" strokeWidth="1.2" opacity="0.55">
              {topology.nodes
                .filter((n) => n.id !== "hub")
                .map((n) => (
                  <line
                    key={`edge-${n.id}`}
                    x1={hub.x + 60}
                    y1={hub.y + 20}
                    x2={n.x + 60}
                    y2={n.y + 20}
                    strokeDasharray={activeId === n.id ? "0" : "4 4"}
                    opacity={activeId === null || activeId === n.id ? 0.7 : 0.2}
                  />
                ))}
            </g>

            {topology.nodes.map((n) => {
              const isActive = activeId === n.id;
              const isHub = n.id === "hub";
              const w = isHub ? 130 : 120;
              const h = 40;
              return (
                <g
                  key={n.id}
                  transform={`translate(${n.x}, ${n.y})`}
                  className="cursor-pointer"
                  onMouseEnter={() => setActiveId(n.id)}
                  onFocus={() => setActiveId(n.id)}
                  onClick={() => setActiveId(n.id)}
                  tabIndex={0}
                  role="button"
                  aria-label={`${n.label} — show details`}
                >
                  <rect
                    x={0}
                    y={0}
                    width={w}
                    height={h}
                    rx={6}
                    fill={nodeFill(n.category)}
                    stroke={isActive ? "#22D3EE" : "#E2E8F0"}
                    strokeWidth={isActive ? 2 : 1}
                  />
                  <text
                    x={w / 2}
                    y={h / 2 + 4}
                    textAnchor="middle"
                    fontFamily="Inter Tight, sans-serif"
                    fontSize={isHub ? 12 : 11}
                    fontWeight={isHub ? 600 : 500}
                    fill={nodeTextColor(n.category)}
                  >
                    {n.label}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        <aside
          aria-live="polite"
          className="rounded-md border border-border bg-bg p-5 min-h-[180px]"
        >
          <p className="mono text-[11px] uppercase tracking-[0.16em] text-accent">
            {active ? "What Zyos did here" : "Hover or tap a node"}
          </p>
          <h3 className="mt-2 text-base font-semibold text-primary tracking-tightish">
            {active ? active.label : "Integration as the foundation"}
          </h3>
          <p className="mt-2 text-sm text-ink/80 leading-relaxed">
            {active
              ? active.description
              : "Most agentic-AI vendors deploy single-task agents on top of disconnected systems. Zyos integrates the stack first, then runs agents across — which is what makes them compound."}
          </p>
        </aside>
      </div>

      <figcaption className="mt-5 text-sm text-subtle">{caption}</figcaption>
    </figure>
  );
}

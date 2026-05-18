"use client";

// Full implementation per zyosgroup-com-capability-showcases.md §3.
// Case-card grid with before/after topology and Build / Implement / Both badge.
// Used on /consulting/software-and-data + /consulting/digital-transformation.

import { useState } from "react";
import { cn } from "@/lib/cn";

export type SystemBuild = {
  industry: string;
  scale: string;
  oneLiner: string;
  tag: "Build" | "Implement" | "Both";
  outcome: string;
  beforeNodes: string[];
  afterNodes: string[]; // typically fewer + a central Zyos hub
};

export const SAMPLE_SYSTEM_BUILDS: SystemBuild[] = [
  {
    industry: "Mid-market SaaS",
    scale: "$50M ARR",
    oneLiner:
      "Built a custom intake-to-quote application replacing four disconnected sales tools.",
    tag: "Build",
    outcome: "−23% deal cycle · +18 NPS for AEs",
    beforeNodes: ["CRM", "Form tool", "Pricing sheet", "DocSign", "Slack handoff"],
    afterNodes: ["CRM", "Intake-to-quote app", "DocSign"],
  },
  {
    industry: "Professional services",
    scale: "180 staff",
    oneLiner:
      "Implemented the AMS + practice-management stack; built the agent layer that runs across both.",
    tag: "Both",
    outcome: "−42% Tier-1 ticket time · audit-ready trail",
    beforeNodes: ["AMS legacy", "Spreadsheets", "Email threads", "Shared drive"],
    afterNodes: ["AMS", "Practice mgmt", "Agent layer"],
  },
  {
    industry: "Association",
    scale: "12K members",
    oneLiner:
      "Built the member-facing portal + integrated it with the AMS and LMS.",
    tag: "Both",
    outcome: "+22% member portal engagement · clean privacy boundaries",
    beforeNodes: ["AMS", "Static site", "Forum", "LMS", "Email tool"],
    afterNodes: ["AMS", "Member portal", "LMS"],
  },
  {
    industry: "SMB services (GaaS)",
    scale: "Local trades",
    oneLiner:
      "Built the customer-site template; operate the entire growth stack on Zyos OS.",
    tag: "Build",
    outcome: "+340K ARR (anonymized) · 6-month window",
    beforeNodes: ["Manual website", "Forms in inbox", "Quote PDFs"],
    afterNodes: ["Customer site", "Zyos OS"],
  },
  {
    industry: "Regulated mid-market",
    scale: "Healthcare-adjacent",
    oneLiner:
      "Built the data instrumentation layer + ownership matrix; implemented HIPAA-aware connectors.",
    tag: "Both",
    outcome: "−$2.3M risk exposure · audit packet shippable in 1 day",
    beforeNodes: ["EHR", "Spreadsheets", "Shadow IT", "Reports inbox"],
    afterNodes: ["EHR", "Audit-ready data layer"],
  },
  {
    industry: "B2B services",
    scale: "Series A",
    oneLiner:
      "Built a custom Outbound + ABM agent runtime on the Foundational AI Layer.",
    tag: "Build",
    outcome: "Reply rate 1.8% → 6.2% · pipeline coverage +2.1x",
    beforeNodes: ["Sequencer A", "Enrichment tool", "Manual SDR work"],
    afterNodes: ["Outbound + ABM agent"],
  },
];

function MiniTopology({
  nodes,
  highlightHub = false,
}: {
  nodes: string[];
  highlightHub?: boolean;
}) {
  const w = 280;
  const h = 140;
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      role="img"
      aria-hidden
      className="w-full h-auto"
      preserveAspectRatio="xMidYMid meet"
    >
      <rect width={w} height={h} fill="#FAFAF9" />
      {nodes.map((n, i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const x = 18 + col * 84;
        const y = 22 + row * 50;
        const isHub = highlightHub && /Zyos|app|agent|portal|layer/i.test(n);
        return (
          <g key={`${n}-${i}`} transform={`translate(${x} ${y})`}>
            <rect
              width={78}
              height={36}
              rx={5}
              fill={isHub ? "#0F1B3F" : "#FFFFFF"}
              stroke={isHub ? "#22D3EE" : "#E2E8F0"}
            />
            <text
              x={39}
              y={22}
              textAnchor="middle"
              fontFamily="Inter Tight, sans-serif"
              fontSize={10}
              fill={isHub ? "#FAFAF9" : "#0A0E1F"}
            >
              {n.length > 14 ? `${n.slice(0, 13)}…` : n}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export function SystemBuildCard({
  build,
  className,
}: {
  build: SystemBuild;
  className?: string;
}) {
  const [view, setView] = useState<"before" | "after">("after");

  return (
    <article
      className={cn(
        "rounded-lg border border-border bg-surface p-5 flex flex-col",
        className
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <p className="mono text-[11px] uppercase tracking-[0.16em] text-subtle">
          {build.industry} · {build.scale}
        </p>
        <span className="mono text-[11px] px-2 py-0.5 rounded bg-primary/5 text-primary border border-primary/15">
          {build.tag}
        </span>
      </div>
      <h3 className="mt-3 text-lg font-semibold text-primary tracking-tightish">
        {build.oneLiner}
      </h3>

      <div className="mt-4 rounded-md border border-border bg-bg p-3">
        <div className="flex items-center justify-between gap-3">
          <p className="mono text-[10px] uppercase tracking-[0.18em] text-subtle">
            Architecture · {view}
          </p>
          <div className="flex gap-1.5">
            {(["before", "after"] as const).map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => setView(v)}
                aria-pressed={view === v}
                className={cn(
                  "text-[11px] mono rounded px-2 py-0.5 border",
                  view === v
                    ? "bg-primary text-white border-primary"
                    : "bg-surface text-ink/70 border-border hover:border-primary/40"
                )}
              >
                {v}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-2">
          <MiniTopology
            nodes={view === "before" ? build.beforeNodes : build.afterNodes}
            highlightHub={view === "after"}
          />
        </div>
      </div>

      <p className="mt-4 mono text-sm text-accent">{build.outcome}</p>
    </article>
  );
}

export function SystemBuildGrid({
  builds = SAMPLE_SYSTEM_BUILDS,
  className,
}: {
  builds?: SystemBuild[];
  className?: string;
}) {
  return (
    <div className={cn("grid gap-4 md:grid-cols-2 lg:grid-cols-3", className)}>
      {builds.map((b) => (
        <SystemBuildCard key={b.oneLiner} build={b} />
      ))}
    </div>
  );
}

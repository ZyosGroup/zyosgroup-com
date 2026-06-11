// Full implementation per zyosgroup-com-capability-showcases.md §7.
// Two surfaces:
//   - <OutcomeCard /> : presentation card (server-renderable)
//   - <OutcomeCatalog /> : filterable client surface used on /case-studies
//
// Data: placeholder seed today. Sanity GROQ fetch wires in pass 3 — the
// `caseStudy` + `outcome` schemas are already in /studio/schemas so the
// shape is locked.

import { cn } from "@/lib/cn";

export type Outcome = {
  hero: string; // "+$340K ARR"
  context: string; // "GaaS customer · 6 months"
  customer: string; // "[Anonymized]"
  type: "revenue" | "cost" | "risk" | "time" | "quality";
  serviceLine?: ServiceLine;
  engagementModel?: EngagementModel;
  industry?: string;
};

export type ServiceLine =
  | "Software & Data"
  | "Digital Transformation"
  | "Operations & Scaling"
  | "Integrated Marketing"
  | "Agent as a Service"
  | "Growth as a Service";

export type EngagementModel =
  | "Fixed Price"
  | "Retainer"
  | "Build & Operate Retainer"
  | "AaaS"
  | "GaaS";

export function OutcomeCard({
  outcome,
  className,
}: {
  outcome: Outcome;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "rounded-lg border border-border bg-surface p-5 flex flex-col",
        className
      )}
    >
      <p className="mono text-[11px] uppercase tracking-[0.16em] text-accent">
        {outcome.type}
      </p>
      <p className="mt-2 mono text-2xl text-primary font-semibold tracking-tightish">
        {outcome.hero}
      </p>
      <p className="mt-2 text-sm text-ink/80">{outcome.context}</p>
      <p className="mt-3 text-xs text-subtle">{outcome.customer}</p>
      {(outcome.serviceLine || outcome.engagementModel || outcome.industry) && (
        <div className="mt-4 flex flex-wrap gap-1.5 text-[11px] mono">
          {outcome.serviceLine ? (
            <span className="rounded bg-primary/5 text-primary px-2 py-0.5 border border-primary/10">
              {outcome.serviceLine}
            </span>
          ) : null}
          {outcome.engagementModel ? (
            <span className="rounded bg-surface text-ink/70 px-2 py-0.5 border border-border">
              {outcome.engagementModel}
            </span>
          ) : null}
          {outcome.industry ? (
            <span className="rounded bg-surface text-ink/70 px-2 py-0.5 border border-border">
              {outcome.industry}
            </span>
          ) : null}
        </div>
      )}
    </article>
  );
}

// Seed catalog. Anonymized customer labels.
export const SAMPLE_OUTCOMES: Outcome[] = [
  {
    hero: "+$340K ARR",
    context: "GaaS customer · 6 months",
    customer: "[Anonymized]",
    type: "revenue",
    serviceLine: "Growth as a Service",
    engagementModel: "GaaS",
    industry: "SMB services",
  },
  {
    hero: "−42% TTFR",
    context: "Mid-market SaaS support · 9 weeks",
    customer: "[Anonymized]",
    type: "time",
    serviceLine: "Agent as a Service",
    engagementModel: "AaaS",
    industry: "SaaS",
  },
  {
    hero: "−$180K / yr",
    context: "ERP + process redesign · 4 months",
    customer: "[Anonymized]",
    type: "cost",
    serviceLine: "Digital Transformation",
    engagementModel: "Build & Operate Retainer",
    industry: "Mid-market",
  },
  {
    hero: "+18 NPS",
    context: "Onboarding redesign · 3 months",
    customer: "[Anonymized]",
    type: "quality",
    serviceLine: "Operations & Scaling",
    engagementModel: "Retainer",
    industry: "Mid-market",
  },
  {
    hero: "−$2.3M risk",
    context: "Compliance + data instrumentation · 6 months",
    customer: "[Anonymized]",
    type: "risk",
    serviceLine: "Software & Data",
    engagementModel: "Retainer",
    industry: "Regulated",
  },
  {
    hero: "+3.4x reply rate",
    context: "Outbound + ABM agents · 90 days",
    customer: "[Anonymized]",
    type: "revenue",
    serviceLine: "Agent as a Service",
    engagementModel: "AaaS",
    industry: "B2B services",
  },
  {
    hero: "+150% review velocity",
    context: "Reviews engine · ongoing GaaS",
    customer: "[Anonymized]",
    type: "quality",
    serviceLine: "Growth as a Service",
    engagementModel: "GaaS",
    industry: "SMB services",
  },
  {
    hero: "−75% close cycle",
    context: "Finance reconciliation agents · 90 days",
    customer: "[Anonymized]",
    type: "time",
    serviceLine: "Agent as a Service",
    engagementModel: "AaaS",
    industry: "Mid-market",
  },
  {
    hero: "1 piece / week",
    context: "Content engine + GEO · ongoing",
    customer: "Internal, content-engine-playbook cadence",
    type: "quality",
    serviceLine: "Integrated Marketing",
    engagementModel: "Retainer",
    industry: "Internal",
  },
];

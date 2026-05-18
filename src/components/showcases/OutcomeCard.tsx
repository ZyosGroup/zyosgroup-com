// TODO Pass 2: full implementation per zyosgroup-com-capability-showcases.md §7
// Filterable outcomes catalog backed by Sanity CMS. Filter by outcome type /
// service line / engagement model / industry; URL-query state for shareability.
//
// Stub: a placeholder OutcomeCard with hero number + context line + customer
// tag pattern, used on the homepage with sample data.

import { cn } from "@/lib/cn";

export type Outcome = {
  hero: string;        // "+$340K ARR"
  context: string;     // "GaaS customer · 6 months"
  customer: string;    // "[Anonymized · permission pending]"
  type: "revenue" | "cost" | "risk" | "time" | "quality";
};

export function OutcomeCard({ outcome, className }: { outcome: Outcome; className?: string }) {
  return (
    <article
      className={cn(
        "rounded-lg border border-border bg-surface p-5",
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
    </article>
  );
}

export const SAMPLE_OUTCOMES: Outcome[] = [
  {
    hero: "+$340K ARR",
    context: "GaaS customer · 6 months",
    customer: "[Anonymized · permission pending]",
    type: "revenue",
  },
  {
    hero: "−42% TTFR",
    context: "Mid-market SaaS support · 9 weeks",
    customer: "[Anonymized]",
    type: "time",
  },
  {
    hero: "−$180K / yr",
    context: "ERP + process redesign · 4 months",
    customer: "[Anonymized]",
    type: "cost",
  },
  {
    hero: "+18 NPS",
    context: "Onboarding redesign · 3 months",
    customer: "[Anonymized]",
    type: "quality",
  },
  {
    hero: "−$2.3M risk",
    context: "Compliance + data instrumentation · 6 months",
    customer: "[Anonymized]",
    type: "risk",
  },
  {
    hero: "1 piece / week",
    context: "Content engine + GEO · ongoing",
    customer: "Internal — content-engine-playbook cadence",
    type: "quality",
  },
];

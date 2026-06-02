"use client";

// Filterable client surface for /case-studies. Filters by outcome type +
// service line + engagement model + industry. URL-query state for shareability.

import { useMemo, useState } from "react";
import {
  OutcomeCard,
  SAMPLE_OUTCOMES,
  type Outcome,
} from "./OutcomeCard";
import { cn } from "@/lib/cn";

const TYPES: Array<Outcome["type"] | "all"> = [
  "all",
  "revenue",
  "cost",
  "risk",
  "time",
  "quality",
];

const SERVICE_LINES = [
  "all",
  "Software & Data",
  "Digital Transformation",
  "Operations & Scaling",
  "Integrated Marketing",
  "Agent as a Service",
  "Growth as a Service",
] as const;

const ENGAGEMENT_MODELS = [
  "all",
  "Fixed Price",
  "Retainer",
  "Build & Operate Retainer",
  "AaaS",
  "GaaS",
] as const;

export function OutcomeCatalog({
  outcomes = SAMPLE_OUTCOMES,
  className,
}: {
  outcomes?: Outcome[];
  className?: string;
}) {
  const [type, setType] = useState<(typeof TYPES)[number]>("all");
  const [serviceLine, setServiceLine] = useState<
    (typeof SERVICE_LINES)[number]
  >("all");
  const [model, setModel] = useState<(typeof ENGAGEMENT_MODELS)[number]>("all");

  const filtered = useMemo(() => {
    return outcomes.filter((o) => {
      if (type !== "all" && o.type !== type) return false;
      if (serviceLine !== "all" && o.serviceLine !== serviceLine) return false;
      if (model !== "all" && o.engagementModel !== model) return false;
      return true;
    });
  }, [outcomes, type, serviceLine, model]);

  return (
    <div className={cn("space-y-6", className)}>
      <div className="rounded-lg border border-border bg-surface p-4 md:p-5">
        <div className="grid gap-4 md:grid-cols-3">
          <Group label="Outcome type">
            {TYPES.map((t) => (
              <Pill
                key={t}
                active={type === t}
                onClick={() => setType(t)}
                label={t === "all" ? "All" : t}
              />
            ))}
          </Group>
          <Group label="Service line">
            {SERVICE_LINES.map((s) => (
              <Pill
                key={s}
                active={serviceLine === s}
                onClick={() => setServiceLine(s)}
                label={s === "all" ? "All" : s}
              />
            ))}
          </Group>
          <Group label="Engagement model">
            {ENGAGEMENT_MODELS.map((m) => (
              <Pill
                key={m}
                active={model === m}
                onClick={() => setModel(m)}
                label={m === "all" ? "All" : m}
              />
            ))}
          </Group>
        </div>
        <p className="mt-4 text-xs text-subtle">
          {filtered.length} of {outcomes.length} outcomes shown · filters combine.
        </p>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-lg border border-dashed border-border bg-bg p-10 text-center">
          <p className="mono text-[11px] uppercase tracking-[0.16em] text-subtle">
            Empty state
          </p>
          <p className="mt-2 text-ink/80">
            No outcomes match this combination yet. Clear a filter, or start
            with a measurement and put yours on the list.
          </p>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((o, i) => (
            <OutcomeCard key={`${o.hero}-${i}`} outcome={o} />
          ))}
        </div>
      )}
    </div>
  );
}

function Group({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="mono text-[10px] uppercase tracking-[0.18em] text-subtle">
        {label}
      </p>
      <div className="mt-2 flex flex-wrap gap-1.5">{children}</div>
    </div>
  );
}

function Pill({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "text-[12px] rounded-md border px-2.5 py-1 transition-colors",
        active
          ? "bg-primary text-white border-primary"
          : "bg-surface text-ink/75 border-border hover:border-primary/40"
      )}
    >
      {label}
    </button>
  );
}

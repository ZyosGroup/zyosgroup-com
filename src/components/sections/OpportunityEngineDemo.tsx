import { Section, SectionHeading } from "@/components/ui/Section";
import { CtaButton } from "@/components/ui/Button";

const STEPS = [
  {
    n: "01",
    label: "Intake",
    body: "Four questions. Ninety seconds. Industry, size, current bottleneck, contact.",
  },
  {
    n: "02",
    label: "Diagnostic",
    body: "Scored snapshot in your inbox within 60 minutes, across Process maturity, Technology and integration, Data quality and visibility, Process Automation and AI foundation, and People and knowledge risk.",
  },
  {
    n: "03",
    label: "Proposal",
    body: "Engagement recommended · Conditions to address · Not yet, revisit. Real-human-reviewed proposal by next business day.",
  },
];

// Sample diagnostic dimensions. Band thresholds mirror the routing language:
// >= 3.0 Engagement recommended (green), 2.0-2.9 Conditions to address (amber),
// < 2.0 Not yet, revisit (red).
// Canonical scored dimensions from the Opportunity Engine (zyos-s1a survey +
// zyos-optimization-score). Use these labels verbatim.
const DIMENSIONS = [
  { label: "Process maturity", score: 3.6 },
  { label: "Technology and integration", score: 2.8 },
  { label: "Data quality and visibility", score: 2.9 },
  { label: "Process Automation and AI foundation", score: 3.3 },
  { label: "People and knowledge risk", score: 3.5 },
];
// Composite RS ~3.2 (>= 3.0) -> "Engagement recommended", consistent with the
// routing band shown below. Two amber + three green keep the legend honest.

function band(score: number) {
  if (score >= 3.0) return { text: "text-emerald-400", bar: "bg-emerald-400" };
  if (score >= 2.0) return { text: "text-amber-400", bar: "bg-amber-400" };
  return { text: "text-red-400", bar: "bg-red-400" };
}

export function OpportunityEngineDemo() {
  return (
    <Section>
      <SectionHeading
        eyebrow="The Opportunity Engine"
        title="The sales process is a working product, not a sales pitch."
        description="Most firms sell outcomes and figure out scope after the contract. We sell the measurement, scope follows from what the measurement surfaces."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        <ol className="space-y-4">
          {STEPS.map((s) => (
            <li
              key={s.n}
              className="rounded-lg border border-border bg-surface p-5 md:p-6"
            >
              <div className="flex items-baseline gap-4">
                <span className="mono text-xs text-accent">{s.n}</span>
                <h3 className="text-lg font-semibold text-primary tracking-tightish">
                  {s.label}
                </h3>
              </div>
              <p className="mt-2 text-[15px] text-ink/80 leading-relaxed">
                {s.body}
              </p>
            </li>
          ))}
          <li className="pt-2">
            <CtaButton href="/start">Start your intake</CtaButton>
          </li>
        </ol>

        <div className="rounded-lg border border-border bg-primary text-white p-6 md:p-8 flex flex-col">
          <p className="mono text-[11px] uppercase tracking-[0.16em] text-accent">
            Preview · Diagnostic shape
          </p>
          <p className="mt-3 text-sm text-white/80">
            What you receive in 60 minutes:
          </p>
          <dl className="mt-5 grid gap-3.5">
            {DIMENSIONS.map((d) => {
              const b = band(d.score);
              return (
                <div key={d.label} className="flex items-center gap-3">
                  <dt className="w-44 shrink-0 text-[13px] leading-snug text-white/85">
                    {d.label}
                  </dt>
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                    <div
                      className={`h-full rounded-full ${b.bar}`}
                      style={{ width: `${((d.score - 1) / 4) * 100}%` }}
                    />
                  </div>
                  <dd className="w-12 shrink-0 text-right tabular-nums">
                    <span className={`text-[17px] font-bold ${b.text}`}>
                      {d.score.toFixed(1)}
                    </span>
                    <span className="text-[11px] text-white/45">/5</span>
                  </dd>
                </div>
              );
            })}
          </dl>

          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 text-[11px] text-white/60">
            <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-emerald-400" />3.0+ recommended</span>
            <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-amber-400" />2.0–2.9 conditions</span>
            <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-red-400" />below 2.0 not yet</span>
          </div>

          <div className="hairline mt-6 border-white/15" />
          <p className="mt-6 text-sm text-white/85">
            Routing decision · <span className="font-semibold text-emerald-400">Engagement recommended</span>
          </p>
          <p className="mt-2 text-xs text-white/60">
            Sample numbers. Your diagnostic is scored against your actual intake.
          </p>
        </div>
      </div>
    </Section>
  );
}

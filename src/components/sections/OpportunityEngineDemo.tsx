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
    body: "Scored snapshot in your inbox within 60 minutes, Process Maturity, Tech + Integration, Data Quality, AI Readiness, People + Knowledge Risk.",
  },
  {
    n: "03",
    label: "Proposal",
    body: "Engagement recommended · Conditions to address · Not yet, revisit. Real-human-reviewed proposal by next business day.",
  },
];

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
          <dl className="mt-4 grid gap-3 mono text-[13px]">
            <div className="flex justify-between gap-4">
              <dt>Process Maturity</dt>
              <dd className="text-accent">3.2 / 5</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>Tech + Integration</dt>
              <dd className="text-accent">2.6 / 5</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>Data Quality</dt>
              <dd className="text-accent">2.1 / 5</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>Automation + AI Readiness</dt>
              <dd className="text-accent">2.8 / 5</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>People + Knowledge Risk</dt>
              <dd className="text-accent">3.4 / 5</dd>
            </div>
          </dl>
          <div className="hairline mt-6 border-white/15" />
          <p className="mt-6 text-sm text-white/85">
            Routing decision · <span className="font-semibold text-accent">Engagement recommended</span>
          </p>
          <p className="mt-2 text-xs text-white/60">
            Sample numbers. Your diagnostic is scored against your actual intake.
          </p>
        </div>
      </div>
    </Section>
  );
}

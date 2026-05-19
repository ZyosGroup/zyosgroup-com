import { Section, SectionHeading } from "@/components/ui/Section";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { CtaButton } from "@/components/ui/Button";
import { AgentWorkflowCard, type AgentWorkflowCardProps } from "@/components/showcases/AgentWorkflowCard";

// Shared shape for the /by-function/* pages — lifts directly from
// zyosgroup-com-business-impact-map.md (one function per page).
//
// Each page hands the FunctionPage component:
//   - eyebrow, title, quickAnswer (the GEO surface)
//   - the agent workflows we deploy (5 named)
//   - the BI signals generated + consumed
//   - the software + integrations layer
//   - the operations changes the function sees
//   - measured business outcomes table (90-day movements)
//   - Customer Success cadence that proves the results
//   - 1-2 example agent workflows from SAMPLE_WORKFLOWS to embed

export type FunctionPageProps = {
  eyebrow: string;
  title: string;
  quickAnswer: string;
  intro: string;
  agentWorkflows: { name: string; body: string }[];
  biGenerated: string[];
  biConsumed: string[];
  software: string;
  operationsChanges: string[];
  outcomes: { metric: string; movement: string }[];
  customerSuccess: string;
  embedWorkflows: AgentWorkflowCardProps[];
};

export function FunctionPage({
  eyebrow,
  title,
  quickAnswer,
  intro,
  agentWorkflows,
  biGenerated,
  biConsumed,
  software,
  operationsChanges,
  outcomes,
  customerSuccess,
  embedWorkflows,
}: FunctionPageProps) {
  return (
    <>
      <Section>
        <p className="eyebrow mb-4">{eyebrow}</p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tightish text-primary leading-[1.05] max-w-4xl">
          {title}
        </h1>

        <div className="mt-10 max-w-3xl">
          <QuickAnswer>{quickAnswer}</QuickAnswer>
        </div>

        <p className="mt-10 max-w-prose text-[15px] text-ink/85 leading-relaxed">
          {intro}
        </p>
      </Section>

      <Section className="bg-surface border-y border-border">
        <SectionHeading
          eyebrow="Agent workflows we deploy"
          title="Five concrete workflows — not abstract claims."
          description="Each workflow is a multi-step orchestration with a visible task log and an outcome metric. Productized inside AaaS."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {agentWorkflows.map((w, i) => (
            <article
              key={w.name}
              className="rounded-lg border border-border bg-bg p-5"
            >
              <p className="mono text-[11px] uppercase tracking-[0.16em] text-subtle">
                Workflow 0{i + 1}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-primary tracking-tightish">
                {w.name}
              </h3>
              <p className="mt-2 text-sm text-ink/80 leading-relaxed">
                {w.body}
              </p>
            </article>
          ))}
        </div>
      </Section>

      {embedWorkflows.length ? (
        <Section>
          <SectionHeading
            eyebrow="Show, don't tell"
            title="One worked example, end-to-end."
            description="Workflow steps + a sample of the visible task log + the outcome metric."
          />
          <div className="mt-10 grid gap-6">
            {embedWorkflows.map((w) => (
              <AgentWorkflowCard key={w.title} {...w} />
            ))}
          </div>
        </Section>
      ) : null}

      <Section className="bg-surface border-y border-border">
        <SectionHeading
          eyebrow="BI signals"
          title="What this function generates — and what it consumes from the rest of the business."
          description="The cross-functional integration is what makes agents compound. A signal generated here often triggers action somewhere else."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 max-w-4xl">
          <article className="rounded-lg border border-border bg-bg p-6">
            <h3 className="text-lg font-semibold text-primary tracking-tightish">
              Generated
            </h3>
            <ul className="mt-3 space-y-2 text-[15px] text-ink/80 leading-relaxed">
              {biGenerated.map((s) => (
                <li key={s} className="flex gap-2">
                  <span aria-hidden className="text-accent">·</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-lg border border-border bg-bg p-6">
            <h3 className="text-lg font-semibold text-primary tracking-tightish">
              Consumed
            </h3>
            <ul className="mt-3 space-y-2 text-[15px] text-ink/80 leading-relaxed">
              {biConsumed.map((s) => (
                <li key={s} className="flex gap-2">
                  <span aria-hidden className="text-accent">·</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Software + integrations"
          title="The stack we integrate."
        />
        <p className="mt-6 max-w-prose text-[15px] text-ink/85 leading-relaxed">
          {software}
        </p>
      </Section>

      <Section className="bg-surface border-y border-border">
        <SectionHeading
          eyebrow="Operations changes"
          title="What the team experiences in the first 90 days."
        />
        <ul className="mt-10 grid gap-3 max-w-3xl">
          {operationsChanges.map((c, i) => (
            <li
              key={i}
              className="rounded-md border border-border bg-bg p-4 flex gap-4"
            >
              <span className="mono text-[11px] uppercase tracking-[0.16em] text-subtle pt-1">
                0{i + 1}
              </span>
              <span className="text-[15px] text-ink/85 leading-relaxed">
                {c}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Measured business outcomes"
          title="Typical 90-day movement."
          description="Ranges, not promises. Actual outcomes depend on the starting state surfaced by PI Implementation."
        />
        <div className="mt-10 overflow-hidden rounded-lg border border-border max-w-3xl">
          <table className="w-full text-sm">
            <thead className="bg-bg">
              <tr>
                <th className="text-left px-5 py-3 font-medium text-primary">Outcome</th>
                <th className="text-left px-5 py-3 font-medium text-primary">Typical 90-day movement</th>
              </tr>
            </thead>
            <tbody>
              {outcomes.map((o) => (
                <tr key={o.metric} className="border-t border-border">
                  <td className="px-5 py-3 text-ink/85">{o.metric}</td>
                  <td className="px-5 py-3 mono text-primary">{o.movement}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section className="bg-surface border-y border-border">
        <SectionHeading
          eyebrow="Customer Success cadence"
          title="How the results stay proven, quarter over quarter."
        />
        <p className="mt-6 max-w-prose text-[15px] text-ink/85 leading-relaxed">
          {customerSuccess}
        </p>
      </Section>

      <Section className="bg-primary text-white">
        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr] items-end">
          <div>
            <p className="mono text-[11px] uppercase tracking-[0.18em] text-accent">
              Ready when you are
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tightish text-white">
              Start with a measurement.
            </h2>
            <p className="mt-4 text-white/80 max-w-prose">
              The Opportunity Engine intake routes by function. Pick this one
              in the bottleneck question and the diagnostic will identify the
              two or three workflows worth deploying first.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <CtaButton href="/start">Start your intake</CtaButton>
          </div>
        </div>
      </Section>
    </>
  );
}

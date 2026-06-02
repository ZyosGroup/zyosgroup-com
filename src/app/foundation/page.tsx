import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/Section";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { PiDeliverableScrollthrough } from "@/components/showcases/PiDeliverableScrollthrough";
import { DashboardGallery } from "@/components/showcases/DashboardCard";
import { TopologyDiagram } from "@/components/showcases/TopologyDiagram";
import { CtaButton } from "@/components/ui/Button";
import { PageSchema } from "@/components/seo/PageSchema";
import { SITE, FOUNDATIONAL_LINE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Foundation: PI Implementation + Solution Architecture | Zyos Group",
  description:
    "Process Intelligence Implementation, the six deliverables, and the Solution Architecture brief addressing security, ownership, maintenance, and evolution.",
  alternates: { canonical: "/foundation" },
};

const NON_NEGOTIABLES = [
  {
    t: "Security",
    b: "IAM, encryption, secret management, audit trails, incident response, certifications. Security is designed in, not bolted on. The architecture's posture matches your regulatory and risk context.",
  },
  {
    t: "Ownership",
    b: "Who owns the code, the data, the model artifacts, the agent prompts, the decisions agents make on your behalf. Default: you own everything we produce for you; Zyos owns the platform IP that powers it.",
  },
  {
    t: "Maintenance",
    b: "Operational responsibility (runbooks, monitoring, alerting, on-call), update responsibility (security patches, model updates, framework migrations), and SLA + escalation paths, articulated in writing before construction begins.",
  },
  {
    t: "Evolution",
    b: "How the solution adapts as the AI category evolves, as the business changes (scale, M&A, new lines), as regulations evolve, and as platforms come and go. Portability, vendor-lock-in mitigation, and the option to take the solution independent if the Zyos relationship ends.",
  },
];

const CONTEXT_TABLE = [
  {
    dim: "Regulatory",
    drives:
      "Healthcare (HIPAA + HITRUST), finance (SOC2, SOX, PCI-DSS), legal (privilege + work-product), education (FERPA), government (FedRAMP), shapes data residency, audit trails, IAM, agent autonomy levels, human-in-loop defaults.",
  },
  {
    dim: "Complexity",
    drives:
      "Distributed enterprise vs single-instance mid-market vs lean SMB, informs whether agents are per-tenant or shared, whether data is centralized or federated, whether change governance is heavyweight or lightweight.",
  },
  {
    dim: "Scale",
    drives:
      "User count, transaction volume, integration breadth, geographic distribution, drives infrastructure decisions, agent runtime capacity, observability investment.",
  },
  {
    dim: "Risk",
    drives:
      "What fails if this breaks? Customer-facing vs internal? Reversible vs irreversible? Drives agent-autonomy conservatism, depth of testing, rollback structure.",
  },
  {
    dim: "Maturity",
    drives:
      "The Stage 1 scorecard informs architecture: low-data-discipline customers need instrumentation BEFORE agents; low-process-discipline customers need process mapping BEFORE automation.",
  },
];

const ARCHITECTURE_BRIEF_SECTIONS = [
  "Context summary (regulatory + complexity + scale + risk + maturity, from Stage 1 PI)",
  "Architecture diagram (the topology component, customer-specific)",
  "Component selection rationale, for each layer, why we built vs configured, what we bought vs hosted, what we own vs license",
  "Security posture + certifications mapped to compliance",
  "Ownership matrix (who owns each artifact at each lifecycle stage)",
  "Maintenance + operational responsibility matrix + SLAs",
  "Evolution plan (year-1, year-2, year-3 expected adaptations)",
  "ROI hypothesis tied to foundation cost (the Stage 2 ROI gate)",
];

export default function FoundationPage() {
  return (
    <>
      <PageSchema
        path="/foundation"
        name="Foundation: PI Implementation + Solution Architecture"
        description="Stage 2 of the customer journey: build the integrated foundation with PI Implementation and a context-specific architecture brief."
        breadcrumbTrail={[
          { name: "Home", url: SITE.url },
          { name: "Foundation", url: `${SITE.url}/foundation` },
        ]}
      />

      <Section>
        <p className="eyebrow mb-4">Foundation · Stage 2, Build</p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tightish text-primary leading-[1.05] max-w-4xl">
          Foundational builders. Process Intelligence first. Agents second.
          Value-impact always.
        </h1>

        <div className="mt-10 max-w-3xl">
          <QuickAnswer>
            Process Intelligence maps your processes and your value stream. We
            discover where you need automation, where you need insights, where
            you need new technology, and we architect a plan to get all of
            that in place. Then we begin to automate the most important
            processes across your business with agents that either operate them
            or scale them. Every Retainer and As-A-Service engagement starts
            here.
          </QuickAnswer>
        </div>

        <p className="mt-10 max-w-prose text-[15px] text-ink/85 leading-relaxed">
          Most agentic-AI firms sell the agent. Zyos sells the foundation that
          makes the agent work. An agent deployed on a process nobody has
          mapped automates chaos. An agent operating on data nobody has
          instrumented produces noise. An agent making decisions nobody has
          prioritized burns trust. An agent without measured value-impact
          targets becomes a budget line item nobody can defend.
        </p>
        <p className="mt-4 max-w-prose text-[15px] text-ink/85 leading-relaxed">
          You don&apos;t deploy an agent on top of an unobserved process and
          hope it works. You first <em>see</em> the process, its inputs,
          decisions, exceptions, handoffs, latency, value-impact per step.
          That&apos;s Process Intelligence. Then you deploy the agent on the
          right slice of the process, instrumented to prove what it changed.
        </p>
      </Section>

      <Section className="bg-surface border-y border-border">
        <SectionHeading
          eyebrow="Process Intelligence Implementation"
          title="Six deliverables. 30 days. The truth-finding pass."
          description="Scroll through an anonymized PI deliverable, the artifact that turns a hypothesis into a real plan with a real architecture and a real prioritized backlog."
        />
        <div className="mt-10">
          <PiDeliverableScrollthrough />
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Solution Architecture"
          title="Not every customer needs the same solution."
          description="Solution architecture is a first-class deliverable that sits between Stage 1 (Assess) and Stage 2 (Build). Five context dimensions shape the architecture decision."
        />
        <div className="mt-10 overflow-hidden rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead className="bg-bg">
              <tr>
                <th className="text-left px-5 py-3 font-medium text-primary">
                  Context dimension
                </th>
                <th className="text-left px-5 py-3 font-medium text-primary">
                  What it changes about the architecture
                </th>
              </tr>
            </thead>
            <tbody>
              {CONTEXT_TABLE.map((row) => (
                <tr key={row.dim} className="border-t border-border">
                  <td className="px-5 py-4 mono text-primary align-top whitespace-nowrap">
                    {row.dim}
                  </td>
                  <td className="px-5 py-4 text-ink/80 leading-relaxed">
                    {row.drives}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-10">
          <TopologyDiagram
            caption="A regulated customer and a growth-stage SMB get different architectures from the same operating model. Pick an industry to see how the fabric shifts."
          />
        </div>
      </Section>

      <Section className="bg-surface border-y border-border">
        <SectionHeading
          eyebrow="The four non-negotiables"
          title="Security · Ownership · Maintenance · Evolution."
          description="Beyond functional design, every Zyos architecture explicitly addresses these four, articulated in the Architecture Brief before construction begins."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {NON_NEGOTIABLES.map((c) => (
            <article
              key={c.t}
              className="rounded-lg border border-border bg-bg p-6"
            >
              <h3 className="text-xl font-semibold text-primary tracking-tightish">
                {c.t}
              </h3>
              <p className="mt-3 text-[15px] text-ink/80 leading-relaxed">
                {c.b}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="The Architecture Brief"
          title="What the customer signs off on before Foundation construction begins."
          description="The Architecture Brief IS the differentiator from commodity AI-services firms that skip architecture and ship 'MVPs' that don't survive the first scale event or regulatory audit."
        />
        <ol className="mt-10 grid gap-3 max-w-3xl">
          {ARCHITECTURE_BRIEF_SECTIONS.map((s, i) => (
            <li
              key={s}
              className="rounded-md border border-border bg-surface p-4 flex gap-4"
            >
              <span className="mono text-[11px] uppercase tracking-[0.16em] text-subtle pt-1">
                0{i + 1}
              </span>
              <span className="text-[15px] text-ink/85 leading-relaxed">
                {s}
              </span>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="bg-surface border-y border-border">
        <SectionHeading
          eyebrow="What PI produces, operationalized"
          title="The dashboards that come out of the Foundation work."
          description="PI's instrumentation plan becomes operating instrumentation. Below: anonymized previews of the eight standard dashboards every engagement ends with."
        />
        <div className="mt-10">
          <DashboardGallery
            slugs={[
              "seo-baseline",
              "engagement-kanban",
              "okr-tracker",
              "qbr-output",
              "cs-cadence-heatmap",
              "agent-throughput",
            ]}
          />
        </div>
      </Section>

      <Section className="bg-primary text-white">
        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr] items-end">
          <div>
            <p className="mono text-[11px] uppercase tracking-[0.18em] text-accent">
              {FOUNDATIONAL_LINE}
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tightish text-white">
              Start your PI Implementation.
            </h2>
            <p className="mt-4 text-white/80 max-w-prose">
              Customers who refuse PI are customers we politely decline , 
              without it, every downstream cycle is guessing.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <CtaButton href="/start">Start with a measurement</CtaButton>
            <Link
              href="/framework"
              className="inline-flex items-center gap-2 text-white/85 hover:text-white text-sm"
            >
              Or read the framework (Stage 1) →
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}

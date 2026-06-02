import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/Section";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { CtaButton } from "@/components/ui/Button";
import { PageSchema } from "@/components/seo/PageSchema";
import { Faq } from "@/components/seo/Faq";
import { AgentWorkflowCard } from "@/components/showcases/AgentWorkflowCard";
import { SAMPLE_WORKFLOWS } from "@/components/showcases/sample-workflows";
import { SITE } from "@/lib/site";

const AAAS_FAQS = [
  {
    q: "What is agentic AI consulting?",
    a: "Agentic AI consulting is the design, deployment, and ongoing operation of AI agents, autonomous, multi-step software workers, across business functions. Unlike single-task chatbots, agentic systems span discovery, decision-making, execution, and reporting. Zyos Group's Agent as a Service (AaaS) productizes this work into a continuous engagement with five named variants: Workflows, Systems, Middleware, Lean, and Insights.",
  },
  {
    q: "What does Agent as a Service include?",
    a: "Agent as a Service is a continuous service in which Zyos designs, deploys, and operates AI agents on the customer's behalf. The customer does not manage prompts, infrastructure, agent reliability, model updates, framework migrations, or integration drift, Zyos does, as a service. Every engagement begins with Process Intelligence Implementation as the first delivery cycle. Support is part of the service.",
  },
  {
    q: "What are the five AaaS variants?",
    a: "Workflows (multi-step agent orchestrations across a function), Systems (cross-system agents that monitor and act across the stack), Middleware (integration-tier agents that translate events between systems), Lean (single-purpose, narrowly-scoped agents like ticket triage or expense compliance), and Insights (read-only agents that draft analysis, narrate dashboards, prepare executive packets).",
  },
  {
    q: "How is agent reliability measured?",
    a: "Reliability is part of the SLA. Every agent ships with a visible task log, the agent's reasoning trace, recorded and displayed to the customer. Monthly reports include agent throughput, reliability, cost, drift, and value-impact captured. The QBR shows the trend. Visible task log is the moat: most agentic-AI sites show outputs; we show the reasoning.",
  },
  {
    q: "How does an AaaS engagement work?",
    a: "AaaS is a flexible, continuous engagement scoped to the variant that fits, narrow (Lean) or broad (Systems, Middleware). Support is part of the service, not a separate ticket. Process Intelligence Implementation is the first delivery cycle, always. Customers who refuse PI are customers we politely decline.",
  },
];

// Primary KW: "agentic ai consulting" (vol 90, KD 5, $39 CPC) per research §6.2.
export const metadata: Metadata = {
  title: "Agent as a Service: Agentic AI Consulting | Zyos Group",
  description:
    "Agent as a Service: we design, deploy, and run AI agents on your behalf. Workflows, Systems, Middleware, Lean, Insights variants. Continuous engagement, support included.",
  alternates: { canonical: "/solutions/agent-as-a-service" },
};

const VARIANTS = [
  {
    name: "Workflows",
    body: "Multi-step agent orchestrations that span an entire business function, sales outbound + ABM, content + distribution, support tier-1, onboarding orchestration. The default starting variant for most engagements.",
  },
  {
    name: "Systems",
    body: "Cross-system agents that monitor + act across the stack, anomaly detection, root-cause hypothesis, alert triage. The agent layer that closes the BI → action gap.",
  },
  {
    name: "Middleware",
    body: "Integration-tier agents that sit between systems, translating events, enriching records, routing tasks. Replaces brittle iPaaS workflows with adaptive agents.",
  },
  {
    name: "Lean",
    body: "Single-purpose, narrowly-scoped agents, Tier-1 ticket triage, expense compliance, reconciliation, simple reply triage. Lower-cost variant for one focused job.",
  },
  {
    name: "Insights",
    body: "Read-only agents that draft analysis, narrate dashboards, summarize variances, prepare CFO + executive packets. Augment human judgment without acting autonomously.",
  },
];

export default function AaaSPage() {
  return (
    <>
      <PageSchema
        path="/solutions/agent-as-a-service"
        name="Agent as a Service (AaaS): Zyos Group"
        description="Continuous AI-agent operations. Design, deploy, run AI agents on your behalf, across Workflows, Systems, Middleware, Lean, and Insights variants."
        service={{ type: "Agent as a Service" }}
        breadcrumbTrail={[
          { name: "Home", url: SITE.url },
          { name: "Solutions", url: `${SITE.url}/solutions` },
          { name: "Agent as a Service", url: `${SITE.url}/solutions/agent-as-a-service` },
        ]}
      />

      <Section>
        <p className="eyebrow mb-4">Solutions · AaaS</p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tightish text-primary leading-[1.05] max-w-4xl">
          Agent as a Service. We design, deploy, and run AI agents on your
          behalf.
        </h1>

        <div className="mt-10 max-w-3xl">
          <QuickAnswer>
            Agent as a Service (AaaS) is a continuous service in which
            Zyos Group designs, deploys, and operates AI agents on the
            customer&apos;s behalf, sales outbound, content engine, support
            tier-1, process anomaly detection, finance reconciliation, HR
            onboarding. Variants: Workflows, Systems, Middleware, Lean,
            Insights. The customer doesn&apos;t manage prompts, infrastructure,
            or agent reliability. Engagement starts with Process Intelligence
            Implementation as the first delivery cycle.
          </QuickAnswer>
        </div>

        <p className="mt-10 max-w-prose text-[15px] text-ink/85 leading-relaxed">
          Most agentic-AI vendors sell single-task agents, a sales agent, a
          marketing agent, a support agent, operated in isolation. Zyos
          deploys comprehensive agent workflows that span an entire business
          function, and we run them across BI + Software + Operations as the
          integration layer. That integration is what makes agents <em>worth
          deploying</em>: disconnected agents create overhead without
          compounding return.
        </p>
      </Section>

      <Section className="bg-surface border-y border-border">
        <SectionHeading
          eyebrow="Five productized variants"
          title="Each variant earns its name, buyer recognition, scope clarity, and productization compounding."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {VARIANTS.map((v, i) => (
            <article
              key={v.name}
              className="rounded-lg border border-border bg-bg p-6"
            >
              <p className="mono text-[11px] uppercase tracking-[0.16em] text-subtle">
                Variant 0{i + 1}
              </p>
              <h3 className="mt-1 text-xl font-semibold text-primary tracking-tightish">
                {v.name}
              </h3>
              <p className="mt-3 text-[15px] text-ink/80 leading-relaxed">
                {v.body}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Six worked agent workflows"
          title="Show, don't tell."
          description="Multi-step orchestrations that span an entire business function. Each card includes the workflow steps, a sample of the visible task log (the agent's reasoning trace), and the outcome metric."
        />
        <div className="mt-10 grid gap-6">
          {SAMPLE_WORKFLOWS.map((w) => (
            <AgentWorkflowCard key={w.title} {...w} />
          ))}
        </div>
        <p className="mt-8 max-w-prose text-sm text-subtle">
          Visible task log is the moat: most agentic-AI sites show outputs;
          we show the agent&apos;s reasoning. Reliability you can audit, not
          just trust.
        </p>
      </Section>

      <Section className="bg-surface border-y border-border">
        <SectionHeading
          eyebrow="What you don't manage"
          title="Prompts. Infrastructure. Reliability. Drift. We do, as a service."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              t: "Prompts + agent logic",
              b: "We own and evolve the prompt + tool definitions; you see what the agent did but don't have to maintain it.",
            },
            {
              t: "Infrastructure",
              b: "Agent runtime, observability, scaling, secret management, IAM, all on the Foundational AI Layer.",
            },
            {
              t: "Reliability",
              b: "We monitor reliability + cost + drift continuously. Reliability targets are part of the SLA.",
            },
            {
              t: "Evolution",
              b: "Model updates, framework migrations, capability upgrades, we absorb the platform churn.",
            },
            {
              t: "Integrations",
              b: "Connecting agents into your CRM, ERP, support, BI, marketing stack, once, then maintained.",
            },
            {
              t: "Reporting",
              b: "Monthly report + QBR with agent throughput, reliability, value-impact captured, and re-prioritization.",
            },
          ].map((c) => (
            <article
              key={c.t}
              className="rounded-lg border border-border bg-bg p-5"
            >
              <h3 className="text-lg font-semibold text-primary tracking-tightish">
                {c.t}
              </h3>
              <p className="mt-2 text-sm text-ink/80 leading-relaxed">{c.b}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="How AaaS buys"
          title="Continuous engagement. Scoped by variant. PI Implementation always Sprint 1."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 max-w-4xl">
          <article className="rounded-lg border border-border bg-surface p-6">
            <h3 className="text-lg font-semibold text-primary tracking-tightish">
              Engagement model
            </h3>
            <ul className="mt-3 space-y-2 text-[15px] text-ink/80 leading-relaxed">
              <li>· As-A-Service · continuous engagement</li>
              <li>· Scoped to the variant that fits, narrow (Lean) or broad (Systems / Middleware)</li>
              <li>· Support is part of the service, no separate ticket</li>
              <li>· PI Implementation is the first delivery cycle, always</li>
            </ul>
          </article>
          <article className="rounded-lg border border-border bg-surface p-6">
            <h3 className="text-lg font-semibold text-primary tracking-tightish">
              What we ship in the first 90 days
            </h3>
            <ul className="mt-3 space-y-2 text-[15px] text-ink/80 leading-relaxed">
              <li>· PI Implementation deliverable (six outputs), weeks 1–2</li>
              <li>· Architecture Brief signed, by end of week 2</li>
              <li>· First agent in production with visible task log, by week 6</li>
              <li>· Measured outcome vs target, at the end of each monthly cycle</li>
              <li>· First QBR with value-impact recap, at month 3</li>
            </ul>
          </article>
        </div>
        <div className="mt-8">
          <Link
            href="/by-function/sales"
            className="text-sm text-primary hover:underline"
          >
            See AaaS applied to a specific function → /by-function/sales
          </Link>
        </div>
      </Section>

      <Faq
        eyebrow="Agentic AI consulting, FAQ"
        title="What buyers ask about Agent as a Service."
        description="Lifted from prospect calls. Published as FAQPage schema for AI Overview + PAA citation."
        faqs={AAAS_FAQS}
      />

      <Section className="bg-primary text-white">
        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr] items-end">
          <div>
            <p className="mono text-[11px] uppercase tracking-[0.18em] text-accent">
              The agent that&apos;s still running in three years
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tightish text-white">
              Build agents on top of a foundation. Operate them as a service.
            </h2>
            <p className="mt-4 text-white/80 max-w-prose">
              Three years from now, the procurement question every B2B buyer
              asks won&apos;t be &quot;do you build agents?&quot;, it&apos;ll
              be &quot;show me your customers&apos; agents that are still
              running.&quot; We build for that question.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <CtaButton href="/start">Start with a measurement</CtaButton>
          </div>
        </div>
      </Section>
    </>
  );
}

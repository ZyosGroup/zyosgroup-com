import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { CtaButton } from "@/components/ui/Button";
import { PageSchema } from "@/components/seo/PageSchema";
import { DashboardGallery } from "@/components/showcases/DashboardCard";
import { SITE } from "@/lib/site";
import { ArrowUpRight } from "lucide-react";

// Primary KW: "ai operating system" (vol 1,000, KD 26) + "agentic ai platform" (vol 880).
export const metadata: Metadata = {
  title: "Platform — The Zyos Operating System | Zyos Group",
  description:
    "Zyos OS is the operating system that runs every Zyos Group engagement. Intake → scoring → proposal → Kanban → Customer Success → QBR. One connected system.",
  alternates: { canonical: "/platform" },
};

const TOUR = [
  {
    n: "01",
    t: "Intake & scoring",
    b: "The /start intake flows into the prospect-scoring pipeline. The five-dimension Readiness + Maturity scorecard generates the routing decision.",
  },
  {
    n: "02",
    t: "Proposal generation",
    b: "Scoped proposal generated from the diagnostic — engagement type, variant, value-impact OKRs named. Human-reviewed before send.",
  },
  {
    n: "03",
    t: "Engagement Kanban",
    b: "Customer-visible delivery board. Every two-week cycle ships against a measurable outcome target. Visible to customer leadership any time.",
  },
  {
    n: "04",
    t: "OKR + KPI tracking",
    b: "Value-impact OKRs measured continuously. Optimization Score re-measured at every QBR. Score curve across five dimensions visualized.",
  },
  {
    n: "05",
    t: "Customer Success cadence",
    b: "Monthly reports + QBR scheduling + Service Desk tickets all live here. The Continuous Improvement phase operationalized.",
  },
  {
    n: "06",
    t: "QBR + value-impact recap",
    b: "Quarterly artifact: recap, re-prioritization, next-quarter commitments, strategic agenda. The renewal evidence customers actually defend.",
  },
];

export default function PlatformPage() {
  return (
    <>
      <PageSchema
        path="/platform"
        name="The Zyos Operating System — Zyos Group platform"
        description="The operating system that runs every Zyos Group customer engagement end-to-end."
        breadcrumbTrail={[
          { name: "Home", url: SITE.url },
          { name: "Platform", url: `${SITE.url}/platform` },
        ]}
      />

      <Section>
        <p className="eyebrow mb-4">Platform</p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tightish text-primary leading-[1.05] max-w-4xl">
          The marketing site is the product. The product is the operating
          system.
        </h1>

        <div className="mt-10 max-w-3xl">
          <QuickAnswer>
            An AI Operating System is the platform that runs an enterprise&apos;s
            agent fleet, data pipelines, and operational measurements
            end-to-end. Zyos OS is the operating system Zyos Group built to run
            its own customer engagements — intake, scoring, proposal generation,
            engagement Kanban, OKR + KPI tracking, Customer Success cadence,
            and Quarterly Business Reviews — on one connected system.
          </QuickAnswer>
        </div>
      </Section>

      <Section className="bg-surface border-y border-border">
        <SectionHeading
          eyebrow="The end-to-end tour"
          title="Intake → scoring → proposal → Kanban → CS → QBR."
          description="The same operating system that powers the Opportunity Engine intake on this site powers every paying customer engagement. The pitch and the proof are the same artifact."
        />
        <ol className="mt-10 grid gap-3 max-w-4xl">
          {TOUR.map((s) => (
            <li
              key={s.n}
              className="rounded-md border border-border bg-bg p-5 flex gap-5"
            >
              <span className="mono text-[11px] uppercase tracking-[0.16em] text-subtle pt-1 shrink-0">
                {s.n}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-primary tracking-tightish">
                  {s.t}
                </h3>
                <p className="mt-2 text-[15px] text-ink/80 leading-relaxed">
                  {s.b}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="The dashboards"
          title="Eight standard surfaces — the same ones live in every customer's Zyos OS."
          description="Real product capabilities. Anonymized previews; demo-data screenshots replace these as ZyosApp captures are pulled."
        />
        <div className="mt-10">
          <DashboardGallery />
        </div>
      </Section>

      <Section className="bg-surface border-y border-border">
        <SectionHeading
          eyebrow="The Foundational AI Layer"
          title="The platform under the platform."
          description="The agent runtime + orchestration + tool integrations + observability + multi-tenant isolation. Powers AaaS and GaaS on the same platform. The structural moat."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3 max-w-4xl">
          {[
            {
              t: "Agent runtime",
              b: "Orchestrates multi-step agent workflows. Visible task logs — the agent's reasoning trace — recorded and displayed.",
            },
            {
              t: "Tool integrations",
              b: "Vector stores, APIs, browser automation, CRM connectors. The connective tissue between agents and the systems they act on.",
            },
            {
              t: "Multi-tenant isolation",
              b: "Per-customer isolation across every layer. Data, agents, configurations, and observability scoped to the engagement.",
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
        <p className="mt-8 max-w-prose text-sm text-subtle">
          The Foundational AI Layer is the engine; it isn&apos;t pitched as a
          standalone customer-facing product. Mentioned here so the architecture
          isn&apos;t opaque.
        </p>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Want to license Zyos OS?"
          title="For services firms that want to run engagements on the same operating system."
          description="If you operate a B2B services firm and want to license the operating system rather than rebuild it — visit zyos.io. This is the one canonical Org → Product editorial link."
        />
        <div className="mt-8">
          <a
            href={SITE.zyosIo}
            rel="noopener"
            className="inline-flex items-center gap-3 rounded-lg border border-border bg-surface p-6 hover:border-primary/40 transition-colors max-w-2xl"
          >
            <div>
              <p className="mono text-[11px] uppercase tracking-[0.16em] text-accent">
                License Zyos OS for your own services firm
              </p>
              <p className="mt-1 text-lg font-semibold text-primary tracking-tightish">
                zyos.io
              </p>
              <p className="mt-2 text-sm text-ink/75">
                Same operating system. Your engagements. Your team. Your IP
                compounding on the platform that runs ours.
              </p>
            </div>
            <ArrowUpRight aria-hidden className="h-5 w-5 text-primary ml-auto" />
          </a>
        </div>
      </Section>

      <Section className="bg-primary text-white">
        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr] items-end">
          <div>
            <p className="mono text-[11px] uppercase tracking-[0.18em] text-accent">
              Experience the product as the sales process
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tightish text-white">
              Start the intake. Run on Zyos OS from day one.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <CtaButton href="/start">Start your intake</CtaButton>
          </div>
        </div>
      </Section>
    </>
  );
}

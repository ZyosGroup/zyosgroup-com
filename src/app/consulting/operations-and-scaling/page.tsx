import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/Section";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { CtaButton } from "@/components/ui/Button";
import { PageSchema } from "@/components/seo/PageSchema";
import { DashboardGallery } from "@/components/showcases/DashboardCard";
import { AutomationReel } from "@/components/showcases/AutomationReel";
import { SITE } from "@/lib/site";

// Primary KW: "operations consulting" (vol 1,900, KD 0) per research §6.2.
export const metadata: Metadata = {
  title: "Operations & Scaling Consulting | Zyos Group",
  description:
    "Operations consulting: OKR + KPI systems, Customer Success cadence, service-desk discipline, operating-model design. Productize your founder's playbook.",
  alternates: { canonical: "/consulting/operations-and-scaling" },
};

const CAPABILITIES = [
  {
    t: "Operating-model design",
    b: "Process design, organizational shape, role definitions, RACI, decision rights. The 'how the company runs' work.",
  },
  {
    t: "OKR + KPI systems",
    b: "Named at engagement kickoff, measured continuously in Zyos OS. The Optimization Score (Process Maturity, Tech + Integration, Data Quality, Automation + AI Readiness, People + Knowledge Risk) re-measured every QBR.",
  },
  {
    t: "Customer Success cadence",
    b: "QBR rollout, monthly reports, OKR tracking, value-impact recap. The full Customer Success function operationalized through Zyos OS.",
  },
  {
    t: "Service Desk discipline",
    b: "Productized customer-support function via the Zyos Service Desk module — email-in → ticket → SLA → status emails → reminder cron → escalation routing.",
  },
  {
    t: "Process Intelligence",
    b: "Process mapping + value-stream mapping + instrumentation planning. The first delivery cycle of every Retainer.",
  },
  {
    t: "Operating-model productization",
    b: "Turning a founder's playbook into a repeatable system. The work that makes the next hire and the next customer cost less than the last.",
  },
];

export default function OperationsScalingPage() {
  return (
    <>
      <PageSchema
        path="/consulting/operations-and-scaling"
        name="Operations & Scaling Consulting — Zyos Group"
        description="Operating-model design, OKR + KPI systems, Customer Success cadence, service-desk discipline."
        service={{ type: "Operations consulting" }}
        breadcrumbTrail={[
          { name: "Home", url: SITE.url },
          { name: "Consulting", url: `${SITE.url}/consulting` },
          { name: "Operations & Scaling", url: `${SITE.url}/consulting/operations-and-scaling` },
        ]}
      />

      <Section>
        <p className="eyebrow mb-4">Consulting · Operations & Scaling</p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tightish text-primary leading-[1.05] max-w-4xl">
          Scale headcount, throughput, and revenue — without proportional cost.
        </h1>

        <div className="mt-10 max-w-3xl">
          <QuickAnswer>
            Zyos Group&apos;s Operations & Scaling practice productizes how
            you operate. Operational design, OKR + KPI systems, Customer
            Success cadence, service-desk discipline (Zyos Service Desk
            module), and the operating-model work that turns a founder&apos;s
            playbook into a repeatable system. Engagement models: Retainer
            (most common — ongoing operating-model work) or Fixed Price
            (one-time operating-model designs). Continuous Improvement phase
            delivers the Customer Success function.
          </QuickAnswer>
        </div>
      </Section>

      <Section className="bg-surface border-y border-border">
        <SectionHeading
          eyebrow="Six core capabilities"
          title="What productization looks like, concretely."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((c) => (
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
          eyebrow="The eight-dashboard gallery"
          title="What you measure is what you can improve."
          description="Every Operations & Scaling engagement ends with the right instrumentation in Zyos OS. These eight dashboards are the standard set."
        />
        <div className="mt-10">
          <DashboardGallery />
        </div>
      </Section>

      <Section className="bg-surface border-y border-border">
        <SectionHeading
          eyebrow="Automation reel"
          title="Workflow automation that compounds."
          description="Beyond agent workflows (those live in AaaS), Operations delivers traditional workflow automation: a thing happens in System A, the right downstream action happens in B, C, D — measured + observable."
        />
        <div className="mt-10">
          <AutomationReel />
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Customer Success function"
          title="The proof layer lives here."
          description="Customer Success isn't a separate component — it's how Operations as a service shows up in the Continuous Improvement phase for every Retainer and As-A-Service engagement."
        />
        <div className="mt-8">
          <Link
            href="/how-we-deliver"
            className="text-sm text-primary hover:underline"
          >
            Read the full delivery model + the 11 Customer Success features →
          </Link>
        </div>
      </Section>

      <Section className="bg-primary text-white">
        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr] items-end">
          <div>
            <p className="mono text-[11px] uppercase tracking-[0.18em] text-accent">
              Operate, don&apos;t orchestrate
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tightish text-white">
              Make the next hire cheaper than the last.
            </h2>
            <p className="mt-4 text-white/80 max-w-prose">
              Most founders scale by adding people. Zyos&apos;s Operations work
              scales the operating model so the same people can do more — and
              the next hire onboards into a system, not a void.
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

import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/Section";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { CtaButton } from "@/components/ui/Button";
import { PageSchema } from "@/components/seo/PageSchema";
import { SITE } from "@/lib/site";
import { ArrowUpRight } from "lucide-react";

// Primary KW: "ai consulting services" (vol 2,900, KD 20) — secondary: digital
// transformation consulting (vol 1,900, KD 1), operations consulting (vol 1,900, KD 0).
export const metadata: Metadata = {
  title: "Consulting — AI Consulting Services | Zyos Group",
  description:
    "Zyos Group Consulting: Software & Data, Digital Transformation, Operations & Scaling, Integrated Marketing. Fixed Price or Retainer. Delivered on Zyos OS.",
  alternates: { canonical: "/consulting" },
};

const PRACTICE_AREAS = [
  {
    title: "Software & Data",
    href: "/consulting/software-and-data",
    body: "Custom application development, data platforms, integrations, BI dashboards. Built when off-the-shelf can't. Two decades of IT, software, and BI lineage.",
    kw: "software development services · ai agent development",
  },
  {
    title: "Digital Transformation",
    href: "/consulting/digital-transformation",
    body: "End-to-end programs from legacy operations to modern, AI-augmented workflows. Architecture-first. Readiness-gated. Build & Operate Retainer available.",
    kw: "digital transformation consulting · vol 1,900 · KD 1",
  },
  {
    title: "Operations & Scaling",
    href: "/consulting/operations-and-scaling",
    body: "Productize how you operate. OKR / KPI systems, Customer Success cadence, service-desk discipline, operating-model design that turns a founder's playbook into a repeatable system.",
    kw: "operations consulting · vol 1,900 · KD 0",
  },
  {
    title: "Integrated Marketing",
    href: "/consulting/integrated-marketing",
    body: "SEO + GEO + content engine + paid + analytics + measurement. When productized for SMB customers, this becomes Growth as a Service.",
    kw: "integrated marketing services · KD 0",
  },
];

export default function ConsultingPage() {
  return (
    <>
      <PageSchema
        path="/consulting"
        name="Zyos Group Consulting"
        description="Human-led, scoped, expert work — delivered on Zyos OS so deliverables compound into reusable IP."
        service={{ type: "AI consulting services" }}
        breadcrumbTrail={[
          { name: "Home", url: SITE.url },
          { name: "Consulting", url: `${SITE.url}/consulting` },
        ]}
      />

      <Section>
        <p className="eyebrow mb-4">Consulting arm</p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tightish text-primary leading-[1.05] max-w-4xl">
          Human-led, scoped, expert work — delivered on the operating system.
        </h1>

        <div className="mt-10 max-w-3xl">
          <QuickAnswer>
            Zyos Group Consulting is human-led, scoped, expert work across four
            practice areas: Software & Data, Digital Transformation, Operations
            & Scaling, and Integrated Marketing. Every engagement is delivered
            on Zyos OS so deliverables compound into reusable IP. Engagement
            models: Fixed Price (defined scope) or Retainer (evolving scope —
            Standard or Build & Operate variants). Process Intelligence
            Implementation is always the first delivery cycle of every Retainer.
          </QuickAnswer>
        </div>
      </Section>

      <Section className="bg-surface border-y border-border">
        <SectionHeading
          eyebrow="Four practice areas"
          title="Pick a starting practice — or run the Opportunity Engine and we'll route."
          description="Most engagements touch 2–3 practice areas. Practice-area boundaries are how we organize our experts; from the customer side it's one team on Zyos OS."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {PRACTICE_AREAS.map((p) => (
            <Link
              key={p.title}
              href={p.href}
              className="group rounded-lg border border-border bg-bg p-6 hover:border-primary/40 transition-colors flex flex-col"
            >
              <p className="mono text-[11px] uppercase tracking-[0.16em] text-accent">
                {p.kw}
              </p>
              <h3 className="mt-1 text-2xl font-semibold text-primary tracking-tightish">
                {p.title}
              </h3>
              <p className="mt-3 text-[15px] text-ink/80 leading-relaxed flex-1">
                {p.body}
              </p>
              <div className="mt-5 flex items-center gap-2 text-sm text-primary/85 group-hover:text-primary">
                <span>Read more</span>
                <ArrowUpRight aria-hidden className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="How Consulting buys"
          title="Fixed Price or Retainer. PI Implementation always Sprint 1 of Retainer."
          description="Solutions is the productized arm (Agent + Growth as a Service); Consulting is the human-led, scoped, expert work. Both run on the same operating system."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3 max-w-5xl">
          <article className="rounded-lg border border-border bg-surface p-6">
            <h3 className="text-lg font-semibold text-primary tracking-tightish">
              Fixed Price
            </h3>
            <p className="mt-2 text-sm text-ink/80 leading-relaxed">
              Defined-scope projects with a known endpoint. Website builds,
              data platform implementations, single-deliverable engagements,
              audits, one-time architecture briefs.
            </p>
            <p className="mt-4 mono text-[11px] text-subtle uppercase tracking-[0.16em]">
              Defined scope · defined endpoint
            </p>
          </article>
          <article className="rounded-lg border border-border bg-surface p-6">
            <h3 className="text-lg font-semibold text-primary tracking-tightish">
              Standard Retainer
            </h3>
            <p className="mt-2 text-sm text-ink/80 leading-relaxed">
              Ongoing advisory + iteration where scope evolves continuously.
              The default Retainer shape — &quot;I need ongoing help.&quot;
            </p>
            <p className="mt-4 mono text-[11px] text-subtle uppercase tracking-[0.16em]">
              Evolving scope · ongoing
            </p>
          </article>
          <article className="rounded-lg border border-border bg-surface p-6">
            <h3 className="text-lg font-semibold text-primary tracking-tightish">
              Build & Operate Retainer
            </h3>
            <p className="mt-2 text-sm text-ink/80 leading-relaxed">
              Build-then-run engagements where the spec is intentionally
              incomplete at signing. Discovery happens IN the engagement.
            </p>
            <p className="mt-4 mono text-[11px] text-subtle uppercase tracking-[0.16em]">
              Build-then-run · discovery in-engagement
            </p>
          </article>
        </div>
      </Section>

      <Section className="bg-primary text-white">
        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr] items-end">
          <div>
            <p className="mono text-[11px] uppercase tracking-[0.18em] text-accent">
              Compounding deliverables
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tightish text-white">
              Every engagement makes the next one better.
            </h2>
            <p className="mt-4 text-white/80 max-w-prose">
              Engagement N is faster, cheaper, and better-measured than N–1
              because the platform retains the IP. That&apos;s the
              consulting-arm difference vs services firms that start from zero
              every engagement.
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

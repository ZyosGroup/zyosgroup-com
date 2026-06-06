import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/Section";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { CtaButton } from "@/components/ui/Button";
import { PageSchema } from "@/components/seo/PageSchema";
import { HeroConsulting } from "@/components/brand/HeroConsulting";
import { SITE } from "@/lib/site";
import { ArrowRight, ArrowUpRight } from "lucide-react";

// Primary KW: "ai consulting services" (vol 2,900, KD 20) — secondary: digital
// transformation consulting (vol 1,900, KD 1), operations consulting (vol 1,900, KD 0).
export const metadata: Metadata = {
  title: "Consulting: AI Consulting Services",
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
        description="Human-led, scoped, expert work, delivered on Zyos OS so deliverables compound into reusable IP."
        service={{ type: "AI consulting services" }}
        breadcrumbTrail={[
          { name: "Home", url: SITE.url },
          { name: "Consulting", url: `${SITE.url}/consulting` },
        ]}
      />

      {/* Dark hero band with the Consulting graphic */}
      <section className="relative overflow-hidden bg-primary-deep text-white">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div
            className="aurora-a absolute -top-1/3 right-[-10%] h-[40rem] w-[40rem] rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(72,193,235,0.30), transparent 60%)" }}
          />
          <div
            className="aurora-b absolute bottom-[-30%] left-[-10%] h-[34rem] w-[34rem] rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(21,105,172,0.45), transparent 62%)" }}
          />
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
              backgroundSize: "56px 56px",
              maskImage: "radial-gradient(ellipse at 60% 40%, #000 40%, transparent 80%)",
              WebkitMaskImage: "radial-gradient(ellipse at 60% 40%, #000 40%, transparent 80%)",
            }}
          />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-white" />
        </div>

        <div className="container-content pt-20 pb-24 md:pt-24 md:pb-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-6">
                Consulting · AI consulting services
              </p>
              <h1 className="text-4xl md:text-6xl font-light tracking-tight text-white leading-[1.04] [text-shadow:0_2px_30px_rgba(0,0,0,0.35)]">
                Human-led, expert work, delivered on the operating system.
              </h1>
              <p className="mt-6 max-w-2xl text-lg md:text-xl text-white/75 leading-relaxed">
                Four practice areas, Software &amp; Data, Digital Transformation,
                Operations &amp; Scaling, and Integrated Marketing, run as one
                team. Every deliverable compounds into reusable IP on Zyos OS.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  href="/start"
                  className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-primary-deep transition-colors hover:bg-accent-vivid"
                >
                  Start with a measurement <ArrowRight aria-hidden className="h-4 w-4" />
                </Link>
                <Link
                  href="/solutions"
                  className="inline-flex items-center gap-2 rounded-md border border-white/25 px-5 py-3 text-sm font-medium text-white transition-colors hover:border-accent hover:text-accent"
                >
                  Or see Solutions
                </Link>
              </div>
            </div>

            <div className="hidden lg:block">
              <HeroConsulting className="mx-auto w-full max-w-lg drop-shadow-[0_20px_60px_rgba(0,0,0,0.45)]" />
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="max-w-3xl">
          <QuickAnswer>
            Zyos Group Consulting is human-led, scoped, expert work across four
            practice areas: Software & Data, Digital Transformation, Operations
            & Scaling, and Integrated Marketing. Every engagement is delivered
            on Zyos OS so deliverables compound into reusable IP. Engagement
            models: Fixed Price (defined scope) or Retainer (evolving scope:
            Standard or Build &amp; Operate variants). Process Intelligence
            Implementation is always the first delivery cycle of every Retainer.
          </QuickAnswer>
        </div>
      </Section>

      <Section className="bg-surface border-y border-border">
        <SectionHeading
          eyebrow="Four practice areas"
          title="Pick a starting practice, or run the Opportunity Engine and we'll route."
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
              The default Retainer shape, &quot;I need ongoing help.&quot;
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

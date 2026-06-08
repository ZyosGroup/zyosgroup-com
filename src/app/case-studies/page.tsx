import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CtaButton } from "@/components/ui/Button";
import { PageSchema } from "@/components/seo/PageSchema";
import { SITE } from "@/lib/site";
import { CASE_STUDIES } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Case Studies: One Problem, Solved",
  description:
    "Real, single-problem case studies from Zyos Group: modular association platforms, secure member benchmarking, replacing rigid field software, and governed AI operating models.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageSchema
        path="/case-studies"
        name="Case studies: Zyos Group"
        description="Real, single-problem case studies across associations, home services, and technology firms."
        breadcrumbTrail={[
          { name: "Home", url: SITE.url },
          { name: "Case studies", url: `${SITE.url}/case-studies` },
        ]}
      />

      <Section>
        <p className="eyebrow mb-4">Case studies</p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tightish text-primary leading-[1.05] max-w-4xl">
          One problem each. Solved.
        </h1>
        <div className="mt-10 max-w-3xl">
          <QuickAnswer>
            Where Projects shows a full engagement, each case study zooms in on a
            single problem we solved, and exactly how. Real work, told straight. We
            add hard numbers as customers give us permission to publish them, and
            new studies land as engagements close.
          </QuickAnswer>
          <p className="mt-5 text-sm text-subtle">
            Want the full, multi-area engagements behind these?{" "}
            <Link href="/projects" className="text-primary font-medium hover:text-ink">
              See Projects
            </Link>
            .
          </p>
        </div>
      </Section>

      <Section className="bg-surface border-y border-border">
        <SectionHeading
          eyebrow="The work"
          title="Specific problems, specific fixes."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {CASE_STUDIES.map((c) => (
            <Link
              key={c.slug}
              href={`/case-studies/${c.slug}`}
              className="group flex flex-col rounded-lg border border-border bg-bg p-6 transition-colors hover:border-accent"
            >
              <p className="mono text-[11px] uppercase tracking-[0.16em] text-subtle">
                {c.industry} · {c.serviceLine}
              </p>
              <h3 className="mt-2 text-xl font-semibold tracking-tightish text-primary">
                {c.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink/80">
                {c.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {c.metrics.slice(0, 3).map((m) => (
                  <span
                    key={m.label}
                    className="rounded border border-border bg-surface px-2 py-1 text-[12px] text-ink/80"
                  >
                    <span className="font-semibold text-primary">{m.value}</span>{" "}
                    {m.label}
                  </span>
                ))}
              </div>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-ink transition-colors">
                Read the case study
                <ArrowUpRight
                  aria-hidden
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-primary text-white">
        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr] items-end">
          <div>
            <p className="mono text-[11px] uppercase tracking-[0.18em] text-accent">
              Want yours here?
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tightish text-white">
              Start with a real assessment.
            </h2>
            <p className="mt-4 text-white/80 max-w-prose">
              We name the value-impact outcomes we would set together at kickoff.
              Those become the case study when the work is done.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <CtaButton href="/start">Take the assessment</CtaButton>
          </div>
        </div>
      </Section>
    </>
  );
}

import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import Link from "next/link";
import { OutcomeCatalog } from "@/components/showcases/OutcomeCatalog";
import { CtaButton } from "@/components/ui/Button";
import { PageSchema } from "@/components/seo/PageSchema";
import { SITE } from "@/lib/site";
import { CASE_STUDIES } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Case studies: Outcomes Catalog",
  description:
    "Quantified outcomes across Zyos Group engagements. Revenue captured, cost reduced, risk retired, time saved, quality improved. Filterable.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageSchema
        path="/case-studies"
        name="Case studies: Zyos Group outcomes catalog"
        description="Quantified outcomes filtered by type, service line, engagement model, and industry."
        breadcrumbTrail={[
          { name: "Home", url: SITE.url },
          { name: "Case studies", url: `${SITE.url}/case-studies` },
        ]}
      />

      <Section>
        <p className="eyebrow mb-4">Case studies</p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tightish text-primary leading-[1.05] max-w-4xl">
          Revenue. Cost. Risk. Time. Quality.
        </h1>

        <div className="mt-10 max-w-3xl">
          <QuickAnswer>
            The Zyos Group outcomes catalog. Every engagement names value-impact
            OKRs at kickoff and a recap at termination. Entries are quantified
            outcomes, revenue captured, cost reduced, risk retired, time
            saved, quality improved, filterable by type, service line,
            engagement model, and industry. Anonymized where customer
            permission is still pending; named when permissioned.
          </QuickAnswer>
        </div>
      </Section>

      <Section className="bg-surface border-y border-border">
        <SectionHeading
          eyebrow="The filterable catalog"
          title="Filter by outcome type, service line, and engagement model."
          description="Sanity-backed in pass 3; today the entries are seeded from the working customer engagements with anonymization where required."
        />
        <div className="mt-10">
          <OutcomeCatalog />
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Full case studies"
          title="Founder-on-camera reflection + situation / work / outcome arc."
          description="Each customer's full case study is in production. The shape is the operating-model arc, what PI surfaced in Phase 1, the cycles that ran in Phase 2, what each QBR recalibrated in Phase 3. McMahons and Fresh Start Movers are first."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 max-w-4xl">
          {CASE_STUDIES.map((c) => (
            <Link
              key={c.slug}
              href={`/case-studies/${c.slug}`}
              className="group rounded-lg border border-border bg-surface p-6 transition-colors hover:border-accent"
            >
              <p className="mono text-[11px] uppercase tracking-[0.16em] text-subtle">
                {c.industry} · {c.serviceLine}
              </p>
              <h3 className="mt-2 text-lg font-semibold tracking-tightish text-primary">
                {c.title}
              </h3>
              <p className="mt-2 text-sm text-ink/75">{c.description}</p>
              <p className="mt-3 mono text-[12px] text-accent group-hover:underline">
                Read the case study →
              </p>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-primary text-white">
        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr] items-end">
          <div>
            <p className="mono text-[11px] uppercase tracking-[0.18em] text-accent">
              Want yours on the list?
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tightish text-white">
              Start with a measurement.
            </h2>
            <p className="mt-4 text-white/80 max-w-prose">
              The proposal that comes back names the value-impact OKRs
              we&apos;d set together. Those OKRs become the catalog entry when
              the engagement closes.
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

import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { OutcomeCard, SAMPLE_OUTCOMES } from "@/components/showcases/OutcomeCard";
import { CtaButton } from "@/components/ui/Button";
import { PageSchema } from "@/components/seo/PageSchema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Case studies — Outcomes Catalog | Zyos Group",
  description:
    "Quantified outcomes across Zyos Group engagements. Revenue captured, cost reduced, risk retired, time saved, quality improved.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageSchema
        path="/case-studies"
        name="Case studies — Zyos Group outcomes catalog"
        description="Quantified outcomes filtered by type, service line, engagement model, industry."
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
            outcomes — revenue captured, cost reduced, risk retired, time saved,
            quality improved — filtered by type, service line, engagement model,
            and industry. Pass 2 loads the filterable Sanity CMS-backed catalog;
            this page previews the shape and a starting set of entries.
          </QuickAnswer>
        </div>
      </Section>

      <Section className="bg-surface border-y border-border">
        <SectionHeading
          eyebrow="Outcomes preview"
          title="A starter set, anonymized where required."
          description="Real customer names land as permissions clear. Until then — pattern + magnitude."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {SAMPLE_OUTCOMES.map((o, i) => (
            <OutcomeCard key={i} outcome={o} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Empty state"
          title="Want yours on the list?"
          description="Start with a measurement. The proposal that comes back will name the value-impact OKRs we'd set together."
        />
        <div className="mt-8">
          <CtaButton href="/start">Start with a measurement</CtaButton>
        </div>
      </Section>
    </>
  );
}

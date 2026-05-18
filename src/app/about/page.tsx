import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { CtaButton } from "@/components/ui/Button";
import { jsonLdScript, aboutPageSchema, breadcrumb } from "@/lib/schema";
import { SITE, ORG_LONG_DESCRIPTION } from "@/lib/site";
import { ArrowUpRight } from "lucide-react";

// Keyword target: "top ai consulting firms" (KD 8) per research §6.2.
export const metadata: Metadata = {
  title: "About Zyos Group — Founded by Paul Ruddy",
  description:
    "Zyos Group is an ROI-focused agentic-transformation partner — assess maturity, architect the right solution, build the foundation, infuse AI into operations. Founded by Paul Ruddy.",
  alternates: { canonical: "/about" },
};

const PILLARS = [
  {
    title: "Software",
    body:
      "Custom application development plus the technology layer — infrastructure, platforms, integrations, cloud, security, devops. We build when off-the-shelf can't. ZyosApp ships weekly.",
  },
  {
    title: "Data",
    body:
      "Instrumentation, dashboards, KPI / OKR tracking, analytics integrations (GA4, Google Ads, Facebook Ads), the SEO baseline + research module. Every engagement begins with the question — what do we need to instrument to know if this worked?",
  },
  {
    title: "Operations",
    body:
      "Process design, operating-model rollouts, OKR / KPI systems, Customer Success cadence, service desk discipline. The capability that turns ad-hoc work into a repeatable system and productizes a founder's playbook.",
  },
  {
    title: "Scaling",
    body:
      "Helping companies scale headcount, throughput, and revenue without proportional cost. The lineage from two decades of IT managed services, software development, and business intelligence — and the work that compounds into reusable IP on Zyos OS.",
  },
];

export default function AboutPage() {
  const url = `${SITE.url}/about`;
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          aboutPageSchema({
            url,
            name: "About Zyos Group",
            description: ORG_LONG_DESCRIPTION,
          })
        )}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumb([
            { name: "Home", url: SITE.url },
            { name: "About", url },
          ])
        )}
      />

      <Section>
        <p className="eyebrow mb-4">About</p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tightish text-primary leading-[1.05] max-w-4xl">
          We measure the opportunity before we promise the outcome.
        </h1>

        <div className="mt-10 max-w-3xl">
          <QuickAnswer>
            Zyos Group is an ROI-focused agentic-transformation partner. We
            assess operational maturity, architect the right solution for your
            context (regulated, complex, or growth-stage), build the integrated
            foundation — Business Intelligence, Software, Operations, and Agents
            running across — and execute the roadmap that infuses AI into how
            you operate. Founded by Paul Ruddy. Builders of the Zyos Operating
            System.
          </QuickAnswer>
        </div>

        <div className="mt-12 max-w-prose">
          {/* Canonical Org long description — verbatim from canonical-entity-descriptions.md */}
          <p className="text-lg text-ink/85 leading-relaxed">
            {ORG_LONG_DESCRIPTION}
          </p>
        </div>
      </Section>

      {/* Founder — locked Paul section with single editorial paulruddy.com link */}
      <Section className="bg-surface border-y border-border">
        <SectionHeading
          eyebrow="Founder"
          title="Founded by Paul Ruddy"
          description="Two decades in IT managed services, software, and business intelligence — now compounding into one operating system."
        />
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <div
            aria-label="Paul Ruddy — photo placeholder"
            className="aspect-[4/5] rounded-lg border border-border bg-bg flex items-center justify-center"
          >
            <div className="text-center px-6">
              <p className="mono text-[11px] uppercase tracking-[0.16em] text-subtle">
                Founder · Paul Ruddy
              </p>
              <p className="mt-3 text-primary text-2xl font-semibold tracking-tightish">
                PR
              </p>
              <p className="mt-1 text-xs text-subtle">
                Track A on-camera still — pending
              </p>
            </div>
          </div>
          <div className="text-ink/85 leading-relaxed space-y-4 text-lg">
            <p>
              Paul Ruddy is the founder and CEO of Zyos Group. Over two decades
              he has built and scaled practices in IT managed services, software
              development, and business intelligence — work that now compounds
              into the Zyos Operating System, the platform Zyos Group builds on
              for its customer engagements.
            </p>
            <p>
              He is based in New Jersey, advises early-stage B2B founders, and
              writes about operator-grade go-to-market and agentic AI at{" "}
              <a
                href={SITE.paulruddy}
                rel="noopener"
                className="text-primary underline underline-offset-4 hover:text-ink"
              >
                paulruddy.com
              </a>
              .
            </p>
            <p className="text-base text-subtle">
              We build the{" "}
              <a
                href={SITE.zyosIo}
                rel="noopener"
                className="text-primary underline underline-offset-4 hover:text-ink"
              >
                Zyos Operating System
              </a>
              .
            </p>
          </div>
        </div>
      </Section>

      {/* Four expertise pillars */}
      <Section>
        <SectionHeading
          eyebrow="Expertise pillars"
          title="Software · Data · Operations · Scaling."
          description="The four entity-anchor nouns we've earned the right to claim. Each linked to concrete proof across Consulting, Solutions, and Zyos OS."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {PILLARS.map((p) => (
            <article
              key={p.title}
              className="rounded-lg border border-border bg-surface p-6"
            >
              <h3 className="text-xl font-semibold text-primary tracking-tightish">
                {p.title}
              </h3>
              <p className="mt-3 text-[15px] text-ink/80 leading-relaxed">
                {p.body}
              </p>
            </article>
          ))}
        </div>
      </Section>

      {/* CTA */}
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
              Four questions. Ninety seconds. Diagnostic in your inbox within
              60 minutes. Scoped proposal by next business day.
            </p>
          </div>
          <div className="flex lg:justify-end gap-3">
            <CtaButton href="/start">Start your intake</CtaButton>
            <a
              href={SITE.zyosIo}
              rel="noopener"
              className="inline-flex items-center gap-2 text-white/85 hover:text-white"
            >
              Zyos OS at zyos.io
              <ArrowUpRight aria-hidden className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}

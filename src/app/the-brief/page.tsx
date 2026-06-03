import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { PageSchema } from "@/components/seo/PageSchema";
import { SITE } from "@/lib/site";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "The Zyos Brief: LinkedIn Newsletter",
  description:
    "The Zyos Brief is Paul Ruddy's monthly read on agentic AI, operating systems for services firms, and what Zyos Group shipped this month. Subscribe on LinkedIn.",
  alternates: { canonical: "/the-brief" },
};

const TOPICS = [
  "What's happening in the agentic-AI category, the publications, the model releases, the procurement shifts that actually move the SMB and mid-market floor.",
  "The operating-systems-for-services-firms thesis, why services firms that operate on owned platforms compound differently from those that don't.",
  "Founder reads from paulruddy.com, the longer-form thinking that quotes into pitch artifacts + sales conversations.",
  "Product notes from zyos.io, what shipped this month in Zyos OS and what's queued for next.",
  "One outside read worth your time, usually a research paper, a competitor positioning shift, or an operator essay.",
  "What Zyos Group shipped this month, outcomes captured, cycles delivered, QBRs run.",
];

export default function TheBriefPage() {
  return (
    <>
      <PageSchema
        path="/the-brief"
        name="The Zyos Brief: Newsletter archive"
        description="Monthly LinkedIn Newsletter on agentic AI, operating systems, and what Zyos Group shipped."
        breadcrumbTrail={[
          { name: "Home", url: SITE.url },
          { name: "The Brief", url: `${SITE.url}/the-brief` },
        ]}
      />

      <Section>
        <p className="eyebrow mb-4">The Zyos Brief</p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tightish text-primary leading-[1.05] max-w-4xl">
          One monthly read for B2B operators.
        </h1>

        <div className="mt-10 max-w-3xl">
          <QuickAnswer>
            The Zyos Brief is Paul Ruddy&apos;s monthly LinkedIn Newsletter.
            Each first-Tuesday issue covers what&apos;s happening in agentic
            AI, the operating-systems-for-services-firms thesis, founder reads
            from paulruddy.com, product notes from zyos.io, one outside read
            worth your time, and what Zyos Group shipped this month. Subscribe
            on LinkedIn, canonical archive lives there.
          </QuickAnswer>
        </div>

        <div className="mt-10 rounded-lg border border-border bg-surface p-8 max-w-3xl">
          <p className="mono text-[11px] uppercase tracking-[0.16em] text-accent">
            Read it on LinkedIn
          </p>
          <p className="mt-3 text-[15px] text-ink/80 leading-relaxed">
            Per the content engine playbook, we don&apos;t republish in full
            here, that would split the entity. The canonical archive is on
            LinkedIn, and the subscribe action lives there.
          </p>
          <a
            href={SITE.newsletter}
            rel="noopener"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-white hover:bg-ink transition-colors"
          >
            Subscribe on LinkedIn
            <ArrowUpRight aria-hidden className="h-4 w-4" />
          </a>
        </div>
      </Section>

      <Section className="bg-surface border-y border-border">
        <SectionHeading
          eyebrow="What you'll find in each issue"
          title="Six recurring sections. First Tuesday of each month."
        />
        <ol className="mt-10 grid gap-3 max-w-3xl">
          {TOPICS.map((t, i) => (
            <li
              key={i}
              className="rounded-md border border-border bg-bg p-4 flex gap-4"
            >
              <span className="mono text-[11px] uppercase tracking-[0.16em] text-subtle pt-1">
                0{i + 1}
              </span>
              <span className="text-[15px] text-ink/85 leading-relaxed">
                {t}
              </span>
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}

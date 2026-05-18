import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { PageSchema } from "@/components/seo/PageSchema";
import { SITE } from "@/lib/site";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "The Zyos Brief — LinkedIn Newsletter | Zyos Group",
  description:
    "The Zyos Brief is Paul Ruddy's monthly read on agentic AI, operating systems, and what Zyos Group shipped this month. Published on LinkedIn.",
  alternates: { canonical: "/the-brief" },
};

export default function TheBriefPage() {
  return (
    <>
      <PageSchema
        path="/the-brief"
        name="The Zyos Brief — Newsletter archive"
        description="LinkedIn Newsletter — one Tuesday-morning issue per month on agentic AI, operating systems, and what Zyos Group shipped."
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
            The Zyos Brief is Paul Ruddy&apos;s monthly LinkedIn Newsletter. Each
            first-Tuesday issue covers what&apos;s happening in agentic AI, the
            operating-systems-for-services-firms thesis, founder reads from
            paulruddy.com, product notes from zyos.io, one outside read worth
            your time, and what Zyos Group shipped this month. Subscribe on
            LinkedIn — canonical archive lives there.
          </QuickAnswer>
        </div>

        <div className="mt-10 rounded-lg border border-border bg-surface p-8 max-w-3xl">
          <p className="mono text-[11px] uppercase tracking-[0.16em] text-subtle">
            Archive · coming pass 2
          </p>
          <p className="mt-3 text-[15px] text-ink/80 leading-relaxed">
            Pass 2 mirrors each issue here as a canonical-on-LinkedIn preview
            (per the content engine playbook §5 — we never republish in full,
            to avoid splitting the entity). Until then, subscribe directly on
            LinkedIn.
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
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/Section";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { CtaButton } from "@/components/ui/Button";
import { PageSchema } from "@/components/seo/PageSchema";
import { SITE } from "@/lib/site";

// Primary KW: "integrated marketing services" (KD 0).
export const metadata: Metadata = {
  title: "Integrated Marketing Consulting: SEO, GEO, Content | Zyos Group",
  description:
    "Integrated marketing: SEO + GEO + content engine + paid + analytics + measurement. The marketing layer that drives growth on top of operational and technical work.",
  alternates: { canonical: "/consulting/integrated-marketing" },
};

const LAYERS = [
  {
    t: "SEO",
    b: "Technical SEO + on-page + content SEO. Quarterly baseline tracked in Zyos OS. Rank tracking on the queries that move pipeline.",
  },
  {
    t: "GEO (generative engine optimization)",
    b: "Quick-answer-shaped content + entity stacking + citation tracking for ChatGPT, Perplexity, Claude, Google AI Overviews. The category most firms haven't built for yet.",
  },
  {
    t: "Content engine",
    b: "Topic discovery → draft → editorial review → publish → measure → next-topic recommendation. ~5 pieces / month across owned properties.",
  },
  {
    t: "Paid",
    b: "Paid optimization continuously, not weekly. Bid adjustments, creative refresh, audience expansion/exclusion, budget rebalancing.",
  },
  {
    t: "Analytics + measurement",
    b: "GA4 + Google Ads + Facebook Ads integrations into Zyos OS. Cross-channel attribution legible because agents stitch signals automatically.",
  },
  {
    t: "Brand + reviews",
    b: "Review monitoring + response drafting + reputation management, the surface most agentic-AI firms ignore but that compounds local credibility.",
  },
];

export default function IntegratedMarketingPage() {
  return (
    <>
      <PageSchema
        path="/consulting/integrated-marketing"
        name="Integrated Marketing: Zyos Group Consulting"
        description="SEO + GEO + content + paid + analytics. The marketing layer that drives growth on top of operational and technical work."
        service={{ type: "Integrated marketing services" }}
        breadcrumbTrail={[
          { name: "Home", url: SITE.url },
          { name: "Consulting", url: `${SITE.url}/consulting` },
          { name: "Integrated Marketing", url: `${SITE.url}/consulting/integrated-marketing` },
        ]}
      />

      <Section>
        <p className="eyebrow mb-4">Consulting · Integrated Marketing</p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tightish text-primary leading-[1.05] max-w-4xl">
          SEO. GEO. Content. Paid. Analytics. Measured against business
          performance.
        </h1>

        <div className="mt-10 max-w-3xl">
          <QuickAnswer>
            Zyos Group&apos;s Integrated Marketing practice delivers SEO,
            generative engine optimization (GEO), content engine, paid, and
            analytics on top of the operational and technical work. When
            productized for SMB customers, this becomes Growth as a Service.
            Engagement models: Fixed Price (audits + one-time builds) or
            Retainer (ongoing advisory). The content engine produces ~5 pieces
            / month across owned properties.
          </QuickAnswer>
        </div>
      </Section>

      <Section className="bg-surface border-y border-border">
        <SectionHeading
          eyebrow="Six layers"
          title="The integrated marketing stack, every layer measured against business performance."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {LAYERS.map((l, i) => (
            <article
              key={l.t}
              className="rounded-lg border border-border bg-bg p-5"
            >
              <p className="mono text-[11px] uppercase tracking-[0.16em] text-subtle">
                Layer 0{i + 1}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-primary tracking-tightish">
                {l.t}
              </h3>
              <p className="mt-2 text-sm text-ink/80 leading-relaxed">{l.b}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="The content engine"
          title="Cadence is the differentiator."
          description="One piece a week, every week, across owned properties, zyosgroup.com (this site) + paulruddy.com (founder voice) + zyos.io (product). LinkedIn Newsletter, The Zyos Brief, is the distribution surface."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3 max-w-4xl">
          {[
            {
              t: "zyosgroup.com",
              b: "Q&A blog posts, case studies, capability deep-dives, founder essays from Paul's archive.",
            },
            {
              t: "paulruddy.com",
              b: "Founder voice. Operator-grade go-to-market essays. The longer-form thinking that quotes into pitch artifacts.",
            },
            {
              t: "zyos.io",
              b: "Product surface for Zyos OS. Release notes, capability deep-dives, customer videos when permissioned.",
            },
          ].map((c) => (
            <article
              key={c.t}
              className="rounded-lg border border-border bg-surface p-5"
            >
              <h3 className="text-lg font-semibold text-primary tracking-tightish">
                {c.t}
              </h3>
              <p className="mt-2 text-sm text-ink/80 leading-relaxed">{c.b}</p>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/the-brief"
            className="text-sm text-primary hover:underline"
          >
            Subscribe to The Zyos Brief on LinkedIn →
          </Link>
        </div>
      </Section>

      <Section className="bg-surface border-y border-border">
        <SectionHeading
          eyebrow="Productized version"
          title="When the SMB customer needs the whole motion operated for them, that's GaaS."
          description="Integrated Marketing in Consulting is Retainer or Fixed Price. The productized as-a-service version for SMB B2B is Growth as a Service."
        />
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/solutions/growth-as-a-service"
            className="text-sm text-primary hover:underline"
          >
            See Growth as a Service →
          </Link>
        </div>
      </Section>

      <Section className="bg-primary text-white">
        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr] items-end">
          <div>
            <p className="mono text-[11px] uppercase tracking-[0.18em] text-accent">
              The marketing layer that drives growth
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tightish text-white">
              On top of operational and technical work.
            </h2>
            <p className="mt-4 text-white/80 max-w-prose">
              Marketing that ignores operations is brittle. Marketing that
              builds on operations + the technical foundation compounds.
              That&apos;s why this is one practice area among four, not a
              standalone agency.
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

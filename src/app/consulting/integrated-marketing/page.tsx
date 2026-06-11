import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { CtaButton } from "@/components/ui/Button";
import { PageSchema } from "@/components/seo/PageSchema";
import { Faq } from "@/components/seo/Faq";
import { HeroMarketing } from "@/components/brand/HeroMarketing";
import { SITE } from "@/lib/site";

const MARKETING_FAQS = [
  {
    q: "What is generative engine optimization (GEO)?",
    a: "GEO structures content and metadata so a business gets cited as a source by AI answer engines, ChatGPT, Perplexity, Claude, and Google AI Overviews. Tactics include quick-answer-shaped content, entity stacking via schema, llms.txt, AI-crawler allowlisting, and citation tracking. It sits alongside classic SEO; the two rankers are different, and most firms have not built for GEO yet.",
  },
  {
    q: "How is Zyos integrated marketing different from a marketing agency?",
    a: "An agency runs marketing in isolation. Zyos runs marketing on top of the operational and technical foundation, with SEO, GEO, content, paid, and analytics stitched into one measured system on Zyos OS. Marketing that ignores operations is brittle; marketing built on a readied foundation compounds. It is one of four consulting practice areas, not a standalone shop.",
  },
  {
    q: "How is this different from Growth as a Service?",
    a: "Integrated Marketing consulting is human-led and scoped, Fixed Price for audits and builds, or Retainer for ongoing advisory. Growth as a Service is the productized, continuously-operated version for SMB B2B, where Zyos runs the entire growth function as a service. Same capabilities; different commercial motion.",
  },
  {
    q: "How do you measure marketing?",
    a: "Against business performance, not vanity metrics. GA4, Google Ads, and Facebook Ads integrate into Zyos OS for cross-channel attribution, with rank and citation tracking on the queries that move pipeline, all reviewed against quarterly OKRs.",
  },
];

// Primary KW: "integrated marketing services" (KD 0).
export const metadata: Metadata = {
  title: "Integrated Marketing Consulting: SEO, GEO, Content",
  description:
    "Integrated marketing consulting: SEO, GEO, content engine, paid, and analytics. The marketing layer that drives growth on your operational foundation.",
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

      {/* Dark hero band with the Marketing graphic */}
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
                Consulting · Integrated Marketing
              </p>
              <h1 className="text-4xl md:text-6xl font-light tracking-tight text-white leading-[1.04] [text-shadow:0_2px_30px_rgba(0,0,0,0.35)]">
                SEO, GEO, content, paid, measured to business performance.
              </h1>
              <p className="mt-6 max-w-2xl text-lg md:text-xl text-white/75 leading-relaxed">
                Where we go deepest. Every channel stitched into one measured
                engine on Zyos OS, with generative engine optimization built in,
                the category most firms have not built for yet.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  href="/start"
                  className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-primary-deep transition-colors hover:bg-accent-vivid"
                >
                  Start with a measurement <ArrowRight aria-hidden className="h-4 w-4" />
                </Link>
                <Link
                  href="/solutions/growth-as-a-service"
                  className="inline-flex items-center gap-2 rounded-md border border-white/25 px-5 py-3 text-sm font-medium text-white transition-colors hover:border-accent hover:text-accent"
                >
                  See Growth as a Service
                </Link>
              </div>
            </div>

            <div className="hidden lg:block">
              <HeroMarketing className="mx-auto w-full max-w-lg drop-shadow-[0_20px_60px_rgba(0,0,0,0.45)]" />
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="max-w-3xl">
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

      <Faq
        eyebrow="Integrated marketing, FAQ"
        title="What buyers ask about marketing, SEO, and GEO."
        description="Straight answers to what buyers ask about marketing, SEO, and GEO."
        faqs={MARKETING_FAQS}
      />

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

import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { CtaButton } from "@/components/ui/Button";
import { PageSchema } from "@/components/seo/PageSchema";
import { Faq } from "@/components/seo/Faq";
import { DashboardGallery } from "@/components/showcases/DashboardCard";
import { SITE } from "@/lib/site";
import { ArrowUpRight } from "lucide-react";

const GAAS_FAQS = [
  {
    q: "What is Growth as a Service?",
    a: "Growth as a Service (GaaS) is a continuous service in which Zyos Group operates a small business's entire growth function, website, Google Business Profile, paid ads + Local Services Ads, SEO content, generative engine optimization (GEO), reviews and citations, measured against quarterly OKRs. A productized agentic-AI growth play built for the SMB tier. Powered by Zyos OS.",
  },
  {
    q: "Who is GaaS for?",
    a: "SMB B2B, local trades, home services, professional practices, that are structurally underserved by Big-4 firms (which won't touch SMB-tier engagements) and by enterprise boutiques (which chase larger accounts). McMahon's Jersey Shore Powerwash and Fresh Start Movers are two live GaaS engagements running today.",
  },
  {
    q: "What are the five GaaS variants?",
    a: "Website (build + operate the customer-facing site), GBP optimization (Google Business Profile cadence: posts, Q&A monitoring, citation health, review velocity), Ads + LSA (paid optimization including Local Services Ads), SEO content (topic discovery → draft → editorial review → publish → measure), and GEO (generative engine optimization, getting cited by ChatGPT, Perplexity, Claude, and Google AI Overviews).",
  },
  {
    q: "How does a GaaS engagement work?",
    a: "GaaS is As-A-Service: a continuous engagement scoped by variant. Customers can take one variant, several, or the bundle. Support is part of the service, Zyos Service Desk handles ticketing, SLA, and escalation routing. Every engagement begins with Process Intelligence Implementation as the first delivery cycle.",
  },
  {
    q: "What is GEO (generative engine optimization)?",
    a: "GEO is the practice of structuring website content and metadata so it gets cited as a source by LLM-mediated answer engines, ChatGPT, Perplexity, Claude, Google AI Overviews, Bing Copilot. Tactics include quick-answer-shaped content, entity stacking via JSON-LD schema, llms.txt publishing, explicit AI-crawler allowlisting, FAQ schema, and citation tracking. GEO sits next to classical SEO; the two rankers are different.",
  },
];

// Primary KW: "growth as a service" (vol 20, KD 0) — own the category.
export const metadata: Metadata = {
  title: "Growth as a Service: Productized for SMB B2B | Zyos Group",
  description:
    "Growth as a Service: monthly continuous growth operations for SMB B2B, website, GBP, ads, SEO content, GEO. Measured against quarterly OKRs. Powered by Zyos OS.",
  alternates: { canonical: "/solutions/growth-as-a-service" },
};

const GAAS_VARIANTS = [
  {
    name: "Website",
    body: "Build + operate. The Astro + Tailwind customer-site template that powers McMahons and FSM. Config-driven; one file per customer; auto-deployed on push.",
  },
  {
    name: "GBP optimization",
    body: "Google Business Profile cadence: posts, Q&A monitoring, service-area accuracy, citation health, review velocity tracking.",
  },
  {
    name: "Ads + LSA",
    body: "Paid optimization agent runs continuously. Bid adjustments, creative refresh, audience expansion/exclusion, budget rebalancing across channels. Including Local Services Ads where applicable.",
  },
  {
    name: "SEO content",
    body: "Topic discovery → draft → editorial review → publish → measure → next-topic recommendation. The content engine cadence productized.",
  },
  {
    name: "GEO",
    body: "Generative engine optimization, getting cited by ChatGPT, Perplexity, Claude, and Google AI Overviews. Quick-answer-shaped content, entity stacking, citation tracking.",
  },
];

export default function GaaSPage() {
  return (
    <>
      <PageSchema
        path="/solutions/growth-as-a-service"
        name="Growth as a Service (GaaS): Zyos Group"
        description="Continuous growth operations for SMB B2B, Website, GBP, Ads + LSA, SEO content, GEO."
        service={{ type: "Growth as a Service" }}
        breadcrumbTrail={[
          { name: "Home", url: SITE.url },
          { name: "Solutions", url: `${SITE.url}/solutions` },
          { name: "Growth as a Service", url: `${SITE.url}/solutions/growth-as-a-service` },
        ]}
      />

      <Section>
        <p className="eyebrow mb-4">Solutions · GaaS</p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tightish text-primary leading-[1.05] max-w-4xl">
          Growth operations on autopilot, measured against your OKRs.
        </h1>

        <div className="mt-10 max-w-3xl">
          <QuickAnswer>
            Growth as a Service (GaaS) is a continuous service in which
            Zyos Group operates a small business&apos;s entire growth function:
            website, Google Business Profile, ads + LSA, SEO content, reviews
            and citations, measured against quarterly OKRs. Variants:
            Website, GBP, Ads + LSA, SEO content, GEO. A productized
            agentic-AI growth play built for the SMB tier.
          </QuickAnswer>
        </div>

        <p className="mt-10 max-w-prose text-[15px] text-ink/85 leading-relaxed">
          Big-4 firms won&apos;t touch SMB-tier engagements. Boutiques chase
          enterprise pricing. SMB B2B, local trades, home services,
          professional practices, is structurally underserved. GaaS is the
          productized motion that brings agentic operations to the businesses
          that actually need them.
        </p>
      </Section>

      <Section className="bg-surface border-y border-border">
        <SectionHeading
          eyebrow="Five productized variants"
          title="Buy one, several, or the bundle."
          description="Each variant is operated on Zyos OS. The cadence is the same; the surface is different."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {GAAS_VARIANTS.map((v, i) => (
            <article
              key={v.name}
              className="rounded-lg border border-border bg-bg p-6"
            >
              <p className="mono text-[11px] uppercase tracking-[0.16em] text-subtle">
                Variant 0{i + 1}
              </p>
              <h3 className="mt-1 text-xl font-semibold text-primary tracking-tightish">
                {v.name}
              </h3>
              <p className="mt-3 text-[15px] text-ink/80 leading-relaxed">
                {v.body}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="What you see"
          title="The dashboards GaaS customers open every morning."
          description="No Google Sheet status reports. The pipeline lives inside Zyos OS, visible to you any time."
        />
        <div className="mt-10">
          <DashboardGallery
            slugs={["seo-baseline", "gaas-pipeline", "reviews-velocity", "qbr-output"]}
          />
        </div>
      </Section>

      <Section className="bg-surface border-y border-border">
        <SectionHeading
          eyebrow="The customers"
          title="McMahon's Jersey Shore Powerwash + Fresh Start Movers."
          description="Two live GaaS engagements running the productized motion today. Full case studies land as customer permissions clear; the outcomes catalog (anonymized where required) is on /case-studies."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <article className="rounded-lg border border-border bg-bg p-6">
            <p className="mono text-[11px] uppercase tracking-[0.16em] text-accent">
              GaaS customer #1
            </p>
            <h3 className="mt-1 text-xl font-semibold text-primary tracking-tightish">
              McMahon&apos;s Jersey Shore Powerwash
            </h3>
            <p className="mt-3 text-[15px] text-ink/80 leading-relaxed">
              Website, GBP, ads, reviews velocity, SEO content, operated
              continuously. Full case study is in production · permission
              pending for the headline metric.
            </p>
          </article>
          <article className="rounded-lg border border-border bg-bg p-6">
            <p className="mono text-[11px] uppercase tracking-[0.16em] text-accent">
              GaaS customer #2
            </p>
            <h3 className="mt-1 text-xl font-semibold text-primary tracking-tightish">
              Fresh Start Movers
            </h3>
            <p className="mt-3 text-[15px] text-ink/80 leading-relaxed">
              Same productized motion, different vertical. Live engagement;
              case study and outcomes drop on /case-studies as permission
              clears.
            </p>
          </article>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="The platform underneath"
          title="GaaS is powered by the Zyos Operating System."
          description="Same OS that powers every customer engagement. The growth motion is productized on top, not bolted-on tooling."
        />
        <div className="mt-8">
          <a
            href={SITE.zyosIo}
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface p-6 hover:border-primary/40 transition-colors max-w-2xl"
          >
            <div>
              <p className="mono text-[11px] uppercase tracking-[0.16em] text-accent">
                One canonical Org → Product link
              </p>
              <p className="mt-1 text-lg font-semibold text-primary tracking-tightish">
                Powered by Zyos OS at zyos.io
              </p>
              <p className="mt-2 text-sm text-ink/75">
                If you operate a services firm and want to license the operating
                system that runs GaaS, visit zyos.io.
              </p>
            </div>
            <ArrowUpRight aria-hidden className="h-5 w-5 text-primary ml-auto" />
          </a>
        </div>
      </Section>

      <Faq
        eyebrow="Growth as a Service, FAQ"
        title="What buyers ask about GaaS."
        description="Lifted from prospect calls. Published as FAQPage schema for AI Overview + PAA citation."
        faqs={GAAS_FAQS}
      />

      <Section className="bg-primary text-white">
        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr] items-end">
          <div>
            <p className="mono text-[11px] uppercase tracking-[0.18em] text-accent">
              Ready when you are
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tightish text-white">
              Start the GaaS intake.
            </h2>
            <p className="mt-4 text-white/80 max-w-prose">
              Tell us your industry, your geography, and your current
              bottleneck. The diagnostic tells you whether GaaS is the right
              variant, and which sub-variants to start with.
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

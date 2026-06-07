import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Stakes } from "@/components/sections/Stakes";
import { PositioningPillars } from "@/components/sections/PositioningPillars";
import { ComponentsBar } from "@/components/sections/ComponentsBar";
import { OpportunityEngineDemo } from "@/components/sections/OpportunityEngineDemo";
import { FunctionExamples } from "@/components/sections/FunctionExamples";
import { OperatedServices } from "@/components/sections/OperatedServices";
import { IcpCards } from "@/components/sections/IcpCards";
import { HowWeEngage } from "@/components/sections/HowWeEngage";
import { Disciplines } from "@/components/sections/Disciplines";
import { OwnerProblems } from "@/components/sections/OwnerProblems";
import { WorkingArtifacts } from "@/components/sections/WorkingArtifacts";
import { FounderBlock } from "@/components/sections/FounderBlock";
import { NewsletterSignup } from "@/components/sections/NewsletterSignup";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { Faq } from "@/components/seo/Faq";
import { Section } from "@/components/ui/Section";
import { jsonLdScript, webPageSchema } from "@/lib/schema";
import { SITE, META_DESCRIPTION } from "@/lib/site";

// Keyword targets (ZYOS-KEYWORD-MAP.md): "digital transformation consulting"
// (1,900/mo, KD 0–1) + "ai consulting services" (2,400/mo). Single-vendor blend
// (operations + technology + data + software) is the differentiator.
export const metadata: Metadata = {
  title: "Digital Transformation & AI Consulting | Zyos Group",
  description: META_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    url: SITE.url,
    title: "Digital Transformation & AI Consulting | Zyos Group",
    description: META_DESCRIPTION,
  },
};

// Homepage FAQ — visible Q&A + FAQPage schema (cheapest entry to AI Overviews
// + People-Also-Ask). Carries the measured head terms ("digital transformation
// consulting", "ai consulting services") into on-page copy without touching the
// hero.
const HOMEPAGE_FAQS = [
  {
    q: "What is Zyos Group?",
    a: "Zyos Group is a boutique digital transformation and AI consulting partner for high-growth SMBs, private equity portfolios, and associations. One vendor across business intelligence, software, operations, and AI agents, measured against business performance.",
  },
  {
    q: "How is Zyos different from other AI consulting services?",
    a: "Most firms sell the agent. Zyos builds the foundation that makes agents work. Every engagement starts with the Opportunity Engine survey and Process Intelligence, so the documentation, data, systems, and workflows are in place before agents orchestrate. A senior team runs the work directly, with a limited number of engagements at a time.",
  },
  {
    q: "Who does Zyos Group work with?",
    a: "Three audiences: high-growth SMBs, private equity firms and their portfolio companies, and associations. The operating model is the same; the architecture is built to each context.",
  },
  {
    q: "How does a Zyos engagement start?",
    a: "Every engagement starts with a measurement: the Opportunity Engine survey and a Business Transformation Roadmap. From there you pick the commercial model that fits, Fixed Price, Retainer, or As-A-Service. The scope follows the roadmap rather than a fixed template.",
  },
];

export default function HomePage() {
  const pageSchema = webPageSchema({
    url: SITE.url,
    name: "Digital Transformation & AI Consulting | Zyos Group",
    description: META_DESCRIPTION,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(pageSchema)}
      />

      {/* S1. Hero — identity */}
      <Hero />

      {/* Quick Answer (AEO) tucked under the hero, inside the first viewport */}
      <Section className="!py-10">
        <QuickAnswer>
          Zyos Group is a boutique agentic-AI partner built for high-growth SMBs,
          private equity portfolios, and associations. We put AI agents to work
          across your operations, on a foundation of business intelligence,
          technology, and operations that two decades of work taught us how to
          build. A senior team runs every engagement, with a flexible model to fit
          (Fixed Price, Retainer, or As-A-Service). Every engagement starts with
          Process Intelligence: a structured assessment of how your business
          actually runs that surfaces the gaps and sets the roadmap. From there we
          build the foundation agents need, stand up agent orchestration, and give
          you the software to monitor and administer it.
        </QuickAnswer>
      </Section>

      {/* S2. The stakes — fear of waiting + single-vendor close */}
      <Stakes />

      {/* S2b. The positioning spine — the six differentiators, each illustrated */}
      <PositioningPillars />

      {/* S3. The Zyos journey — OE survey → roadmap → PI → orchestration → monitoring */}
      <ComponentsBar />

      {/* S3b. The journey's front door, made tangible — the Opportunity Engine survey */}
      <OpportunityEngineDemo />

      {/* S4. Agents are the show — applied across every function */}
      <FunctionExamples />

      {/* S5. What we operate — Agent as a Service + Growth as a Service */}
      <OperatedServices />

      {/* S6. Who we serve — three ICPs (SMB highlighted) */}
      <IcpCards />

      {/* S7. How we engage — boutique / flexible model + operating cadence */}
      <HowWeEngage />

      {/* S8. The disciplines behind it (minimal) */}
      <Disciplines />

      {/* S9. Proof — owner-facing problems we solve + the real deliverables */}
      <OwnerProblems />
      <WorkingArtifacts />

      {/* S10. Founder */}
      <FounderBlock />

      {/* S11. FAQ — AEO/PAA surface + head-term coverage */}
      <Faq
        eyebrow="Frequently asked"
        title="What buyers ask about Zyos Group."
        description="Straight answers on what we do, who we serve, and how an engagement starts. Published as FAQ schema for AI Overviews and answer engines."
        faqs={HOMEPAGE_FAQS}
      />

      {/* S12. The Zyos Brief signup → Footer (RootLayout) */}
      <NewsletterSignup />
    </>
  );
}

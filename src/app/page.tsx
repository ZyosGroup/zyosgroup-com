import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { Stakes } from "@/components/sections/Stakes";
import { ComponentsBar } from "@/components/sections/ComponentsBar";
import { OpportunityEngineDemo } from "@/components/sections/OpportunityEngineDemo";
import { FunctionExamples } from "@/components/sections/FunctionExamples";
import { OperatedServices } from "@/components/sections/OperatedServices";
import { IcpCards } from "@/components/sections/IcpCards";
import { HowWeEngage } from "@/components/sections/HowWeEngage";
import { Disciplines } from "@/components/sections/Disciplines";
import { TestimonialRail } from "@/components/sections/TestimonialRail";
import { FounderBlock } from "@/components/sections/FounderBlock";
import { NewsletterSignup } from "@/components/sections/NewsletterSignup";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { Section } from "@/components/ui/Section";
import { jsonLdScript, webPageSchema } from "@/lib/schema";
import { SITE, META_DESCRIPTION } from "@/lib/site";

// Below-the-fold, client-heavy section — code-split so its JS (showcase widgets)
// is not in the homepage's initial bundle. SSR stays on (default) so server-
// rendered content + SEO are unaffected; only the hydration cost defers.
const HomeShowcasePreview = dynamic(() =>
  import("@/components/sections/HomeShowcasePreview").then((m) => m.HomeShowcasePreview)
);

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

      {/* S9. Proof — capability showcases + testimonials */}
      <HomeShowcasePreview />
      <TestimonialRail />

      {/* S10. Founder */}
      <FounderBlock />

      {/* S11. The Zyos Brief signup → Footer (RootLayout) */}
      <NewsletterSignup />
    </>
  );
}

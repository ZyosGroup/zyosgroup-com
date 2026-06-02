import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { ComponentsBar } from "@/components/sections/ComponentsBar";
import { IcpCards } from "@/components/sections/IcpCards";
import { TwoArmsBlock } from "@/components/sections/TwoArmsBlock";
import { OpportunityEngineDemo } from "@/components/sections/OpportunityEngineDemo";
import { TestimonialRail } from "@/components/sections/TestimonialRail";
import { FounderBlock } from "@/components/sections/FounderBlock";
import { NewsletterSignup } from "@/components/sections/NewsletterSignup";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { Section } from "@/components/ui/Section";
import { jsonLdScript, webPageSchema } from "@/lib/schema";
import { SITE, META_DESCRIPTION } from "@/lib/site";

// Below-the-fold, client-heavy sections — code-split so their JS (framer-motion,
// showcase widgets) is not in the homepage's initial bundle. SSR stays on (default)
// so server-rendered content + SEO are unaffected; only the hydration cost defers.
const OperatingModelFlow = dynamic(() =>
  import("@/components/sections/OperatingModelFlow").then((m) => m.OperatingModelFlow)
);
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

      {/* 1. Hero */}
      <Hero />

      {/* Quick Answer near the top of the page, inside the first viewport */}
      <Section className="!py-10">
        <QuickAnswer>
          Zyos Group is an ROI-focused agentic-transformation partner. We assess
          operational maturity, architect the right solution for your context
          (regulated, complex, or growth-stage), build the integrated foundation , 
          Business Intelligence, Software, Operations, and Agents running across , 
          and execute the roadmap in measured monthly cycles. Engagement models:
          Fixed Price, Retainer, or As-A-Service. Every engagement starts with the
          Opportunity Engine intake and Process Intelligence Implementation.
        </QuickAnswer>
      </Section>

      {/* 2. Three integrated service components + Agents-across */}
      <ComponentsBar />

      {/* 3. Operating model, Measure → Delivery → Continuous Improvement */}
      <OperatingModelFlow />

      {/* 4. Who we serve, three ICP blocks */}
      <IcpCards />

      {/* 5. Two arms, Consulting vs Solutions */}
      <TwoArmsBlock />

      {/* 6. Opportunity Engine intake demo */}
      <OpportunityEngineDemo />

      {/* 7. Capability showcases (compact) */}
      <HomeShowcasePreview />

      {/* 8. Customer love */}
      <TestimonialRail />

      {/* 9. Founder */}
      <FounderBlock />

      {/* 10. The Zyos Brief signup */}
      <NewsletterSignup />

      {/* 11. Footer, rendered by RootLayout */}
    </>
  );
}

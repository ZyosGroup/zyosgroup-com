import type { Metadata } from "next";
import { StubPage } from "@/components/sections/StubPage";
import { PageSchema } from "@/components/seo/PageSchema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Solutions — Agent as a Service & Growth as a Service",
  description:
    "Zyos Group Solutions: productized continuous services. Agent as a Service (AaaS) and Growth as a Service (GaaS) — monthly recurring, scoped variants, platform-led.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <>
      <PageSchema
        path="/solutions"
        name="Zyos Group Solutions"
        description="Productized continuous services — Agent as a Service (AaaS) and Growth as a Service (GaaS)."
        service={{ type: "Agentic AI consulting" }}
        breadcrumbTrail={[
          { name: "Home", url: SITE.url },
          { name: "Solutions", url: `${SITE.url}/solutions` },
        ]}
      />
      <StubPage
        eyebrow="Solutions arm"
        title="Productized continuous services. Monthly recurring. Platform-led."
        quickAnswer="Zyos Group Solutions is our productized continuous-service arm. Two parent offerings: Agent as a Service (AaaS — Workflows, Systems, Middleware, Lean, Insights variants) and Growth as a Service (GaaS — Website, GBP, Ads + LSA, SEO content, GEO variants). Always As-A-Service: monthly recurring, defined SLA, support baked in. Every engagement begins with Process Intelligence Implementation as the first delivery cycle."
        notes={[
          "Agent as a Service — design, deploy, and run AI agents on your behalf. You don't manage prompts, infrastructure, or agent reliability.",
          "Growth as a Service — continuous growth operations for SMB B2B: website, GBP, ads, SEO, content, reviews, citations — operated on Zyos OS, measured against quarterly OKRs.",
          "Both offerings are powered by the Foundational AI Layer + Zyos OS — the moat under the moat.",
        ]}
      />
    </>
  );
}

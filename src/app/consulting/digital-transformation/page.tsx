import type { Metadata } from "next";
import { StubPage } from "@/components/sections/StubPage";
import { PageSchema } from "@/components/seo/PageSchema";
import { SITE } from "@/lib/site";

// Primary KW: "digital transformation consulting" (vol 1,900, KD 1) — the winnable head term.
export const metadata: Metadata = {
  title: "Digital Transformation Consulting | Zyos Group",
  description:
    "End-to-end digital transformation programs. Readiness + maturity assessment, CRM/ERP modernization, process redesign, AI-native operating model rollout.",
  alternates: { canonical: "/consulting/digital-transformation" },
};

export default function DigitalTransformationPage() {
  return (
    <>
      <PageSchema
        path="/consulting/digital-transformation"
        name="Digital Transformation Consulting — Zyos Group"
        description="End-to-end transformation from legacy operations to AI-augmented workflows. Assessment-first, architecture-first."
        service={{ type: "Digital transformation consulting" }}
        breadcrumbTrail={[
          { name: "Home", url: SITE.url },
          { name: "Consulting", url: `${SITE.url}/consulting` },
          { name: "Digital Transformation", url: `${SITE.url}/consulting/digital-transformation` },
        ]}
      />
      <StubPage
        eyebrow="Consulting · Digital Transformation"
        title="From legacy operations to AI-augmented workflows — measured every cycle."
        quickAnswer="Zyos Group's Digital Transformation practice runs end-to-end programs that move a company from legacy operations to modern, AI-augmented workflows. CRM/ERP modernization, process redesign, cloud migration, AI-native operating-model rollout. Every program starts with a Readiness & Maturity scorecard and Process Intelligence Implementation. Engagement models: Fixed Price, Retainer, or Build & Operate Retainer (productized at $7K/mo · 40 hrs · 3-month minimum)."
        notes={[
          "Architecture-first: regulated, complex, or growth-stage contexts each get a different architecture.",
          "Security, ownership, maintenance, and evolution addressed in writing before construction begins.",
          "Build & Operate Retainer for build-then-run engagements — discovery happens IN the engagement.",
        ]}
      />
    </>
  );
}

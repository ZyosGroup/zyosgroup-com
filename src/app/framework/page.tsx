import type { Metadata } from "next";
import { StubPage } from "@/components/sections/StubPage";
import { PageSchema } from "@/components/seo/PageSchema";
import { SITE } from "@/lib/site";

// Primary KW: "ai readiness assessment" (vol 590, KD 15) per research §6.2.
export const metadata: Metadata = {
  title: "Framework — AI Readiness Assessment | Zyos Group",
  description:
    "The Zyos Readiness + Maturity Scorecard. Five dimensions: Process Maturity, Tech + Integration, Data Quality, Automation + AI Readiness, People + Knowledge Risk.",
  alternates: { canonical: "/framework" },
};

export default function FrameworkPage() {
  return (
    <>
      <PageSchema
        path="/framework"
        name="The Zyos Framework — Stage 1, Assess"
        description="The Readiness & Maturity scorecard, five-dimension scoring model, and Opportunity Engine diagnostic."
        breadcrumbTrail={[
          { name: "Home", url: SITE.url },
          { name: "Framework", url: `${SITE.url}/framework` },
        ]}
      />
      <StubPage
        eyebrow="Framework · Stage 1 — Assess"
        title="Measure the opportunity before we promise the outcome."
        quickAnswer="The Zyos Readiness + Maturity Scorecard rates a company across five dimensions before any SOW: Process Maturity, Tech + Integration, Data Quality, Automation + AI Readiness, People + Knowledge Risk. Score 1–5 per dimension. Routing decision: Engagement recommended (RS ≥ 3.0), Conditions to address (2.0–2.9), or Not yet — revisit (< 2.0). The framework is Stage 1 of the four-stage Customer Journey (Assess → Foundation → Roadmap → Agentic-Driven)."
        notes={[
          "ROI gate: every detected gap gets an estimated value-impact + expected payback.",
          "Customers who refuse PI Implementation are customers we politely decline.",
          "Pass 2 hosts the five-dimension visualization + the four-stage journey diagram.",
        ]}
      />
    </>
  );
}

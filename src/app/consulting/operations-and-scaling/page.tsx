import type { Metadata } from "next";
import { StubPage } from "@/components/sections/StubPage";
import { PageSchema } from "@/components/seo/PageSchema";
import { SITE } from "@/lib/site";

// Primary KW: "operations consulting" (vol 1,900, KD 0) per research §6.2.
export const metadata: Metadata = {
  title: "Operations & Scaling Consulting | Zyos Group",
  description:
    "Operations consulting: OKR / KPI systems, Customer Success cadence, operating-model design, service-desk discipline. Productize a founder's playbook.",
  alternates: { canonical: "/consulting/operations-and-scaling" },
};

export default function OperationsScalingPage() {
  return (
    <>
      <PageSchema
        path="/consulting/operations-and-scaling"
        name="Operations & Scaling Consulting — Zyos Group"
        description="Operating-model design, OKR / KPI systems, Customer Success cadence, service-desk discipline."
        service={{ type: "Operations consulting" }}
        breadcrumbTrail={[
          { name: "Home", url: SITE.url },
          { name: "Consulting", url: `${SITE.url}/consulting` },
          { name: "Operations & Scaling", url: `${SITE.url}/consulting/operations-and-scaling` },
        ]}
      />
      <StubPage
        eyebrow="Consulting · Operations & Scaling"
        title="Scale headcount, throughput, and revenue — without proportional cost."
        quickAnswer="Zyos Group's Operations & Scaling practice productizes how you operate. Operational design, KPI / OKR systems, Customer Success cadence, service-desk discipline (Zyos Service Desk module), and the operating-model work that turns a founder's playbook into a repeatable system. Engagement models: Retainer (most common — ongoing operating-model work) or Fixed Price (one-time operating-model designs). Continuous Improvement phase delivers the Customer Success function."
        notes={[
          "Eight-dashboard gallery — SEO Baseline, Engagement Kanban, Reviews Velocity, OKR Tracker, GaaS Pipeline, CS Cadence Heatmap, QBR Output, Agent Throughput.",
          "Automation reel (lead-to-quote, onboarding, anomaly-to-action, CS) lands pass 2.",
          "Customer Success function lives here, operationalized through QBR + monthly report cadence.",
        ]}
      />
    </>
  );
}

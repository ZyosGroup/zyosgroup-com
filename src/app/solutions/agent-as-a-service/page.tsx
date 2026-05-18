import type { Metadata } from "next";
import { StubPage } from "@/components/sections/StubPage";
import { PageSchema } from "@/components/seo/PageSchema";
import { SITE } from "@/lib/site";

// Primary KW: "agentic ai consulting" (KD 5, $39 CPC) per research §6.2.
export const metadata: Metadata = {
  title: "Agent as a Service — Agentic AI Consulting | Zyos Group",
  description:
    "Agent as a Service (AaaS): we design, deploy, and run AI agents on your behalf. Workflows, Systems, Middleware, Lean, Insights variants. Monthly recurring.",
  alternates: { canonical: "/solutions/agent-as-a-service" },
};

export default function AaaSPage() {
  return (
    <>
      <PageSchema
        path="/solutions/agent-as-a-service"
        name="Agent as a Service (AaaS) — Zyos Group"
        description="Continuous AI-agent operations. Design, deploy, run AI agents on your behalf — across Workflows, Systems, Middleware, Lean, and Insights variants."
        service={{ type: "Agent as a Service" }}
        breadcrumbTrail={[
          { name: "Home", url: SITE.url },
          { name: "Solutions", url: `${SITE.url}/solutions` },
          { name: "Agent as a Service", url: `${SITE.url}/solutions/agent-as-a-service` },
        ]}
      />
      <StubPage
        eyebrow="Solutions · AaaS"
        title="Agent as a Service. We design, deploy, and run AI agents on your behalf."
        quickAnswer="Agent as a Service (AaaS) is a monthly recurring service in which Zyos Group designs, deploys, and operates AI agents on the customer's behalf — sales outbound, content, support tier-1, process anomaly detection, finance reconciliation, HR onboarding. Variants: Workflows, Systems, Middleware, Lean, Insights. The customer doesn't manage prompts, infrastructure, or agent reliability. Every engagement starts with Process Intelligence Implementation."
        notes={[
          "Six worked agent workflows ship pass 2 — Sales / Marketing / Support / Operations / Finance / HR.",
          "Visible task log (reasoning traces) included with every deployed agent — most agentic-AI sites show outputs; we show the agent's reasoning.",
          "Engagement model: As-A-Service. Variant-priced. Support baked into the recurring fee.",
        ]}
      />
    </>
  );
}

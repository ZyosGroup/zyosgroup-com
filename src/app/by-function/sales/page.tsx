import type { Metadata } from "next";
import { FunctionPage } from "@/components/sections/FunctionPage";
import { PageSchema } from "@/components/seo/PageSchema";
import { SAMPLE_WORKFLOWS } from "@/components/showcases/sample-workflows";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "AI Agents for Sales: Pipeline + Outbound + ABM | Zyos Group",
  description:
    "AI agents for sales: outbound + ABM, pipeline hygiene, reply triage, win/loss intelligence. Productized inside Agent as a Service. Measured 90-day outcomes.",
  alternates: { canonical: "/by-function/sales" },
};

const sales = SAMPLE_WORKFLOWS.find((w) => w.area === "Sales")!;

export default function SalesFunctionPage() {
  return (
    <>
      <PageSchema
        path="/by-function/sales"
        name="AI Agents for Sales: Zyos Group"
        description="Agentic AI applied to the Sales function, outbound, ABM, pipeline hygiene, win/loss intelligence."
        service={{ type: "Agent as a Service, Sales" }}
        breadcrumbTrail={[
          { name: "Home", url: SITE.url },
          { name: "By function", url: `${SITE.url}/by-function/sales` },
          { name: "Sales", url: `${SITE.url}/by-function/sales` },
        ]}
      />

      <FunctionPage
        eyebrow="By function · Sales"
        title="Pipeline that prioritizes itself. Outreach that personalizes at scale."
        quickAnswer="Zyos Group's Sales-function agents deploy across outbound + ABM, reply triage, pipeline hygiene, and win/loss intelligence. The mechanical work that consumes 60–70% of an SDR or AE's day moves to agents with visible task logs. Sales focuses on relationships and judgment calls. Productized inside Agent as a Service. Engagement starts with Process Intelligence Implementation as the first delivery cycle."
        intro="Most agentic-AI vendors sell single-task sales agents, a chatbot, a sequencer plug-in. Zyos deploys comprehensive workflows that span discovery → enrichment → outreach → triage → meeting set → CRM update → handoff. The integration is what makes them compound: a pipeline anomaly becomes a marketing budget rebalance becomes a finance forecast update."
        agentWorkflows={[
          {
            name: "Outbound Lead Generation Agent",
            body: "ICP discovery → enrichment → personalized first touch → reply triage → meeting set. Replaces brittle sequencers + manual SDR enrichment.",
          },
          {
            name: "ABM Agent",
            body: "Target account list → multi-channel orchestration → response classification → human handoff. Goes deep on named accounts.",
          },
          {
            name: "SDR / Engagement Agent",
            body: "Inbound reply triage → meeting scheduling → CRM update → next-step recommendation. Closes the 'wait for reply' gap.",
          },
          {
            name: "Pipeline Hygiene Agent",
            body: "Deal-stage aging detection → stuck-deal hypothesis → next-action recommendation surfaced to the AE → CRM updates.",
          },
          {
            name: "Win/Loss Intelligence Agent",
            body: "Closed deal → reason mining (notes, emails, calls) → playbook updates → coaching recommendations.",
          },
        ]}
        biGenerated={[
          "Lead source quality scores",
          "Reply rate by message variant",
          "Meeting-set rate",
          "Pipeline velocity",
          "Win/loss reasons",
          "ICP fit score per closed deal",
        ]}
        biConsumed={[
          "Historical deal data",
          "Account firmographics",
          "Intent signals (3rd-party + 1st-party)",
          "Customer health data",
          "Marketing-attribution data",
        ]}
        software="The customer's CRM, sales engagement platform, LinkedIn API where allowed, email infrastructure, lead enrichment APIs, intent data sources, and conversation intelligence, all integrated through the Zyos OS connector layer. Capability language only: 'your CRM,' not vendor names."
        operationsChanges={[
          "Weekly pipeline reviews become 'review the agent's flagged deals', 80% shorter.",
          "SDRs can run 3–5x more accounts with the agent doing the mechanical work.",
          "Managers coach on judgment + relationship work; the agent coaches on mechanical work.",
          "Lead routing becomes dynamic, based on real signals, not static round-robin.",
        ]}
        outcomes={[
          { metric: "Outbound reply rate", movement: "1.8% → 6.2% (research-validated)" },
          { metric: "Time from lead to first meeting", movement: "−40% to −65%" },
          { metric: "Sales rep productive hours / week", movement: "+30% to +50%" },
          { metric: "Pipeline coverage ratio", movement: "+1.5x to +2.5x quality-adjusted" },
          { metric: "Win rate (where attributable)", movement: "+5–15 percentage points · 6 months" },
        ]}
        customerSuccess="QBR slide tracks pipeline velocity trend, reply-rate trend per variant, meeting-set rate, agent task throughput (volume + reliability), human time saved, and pipeline-coverage ratio. OKRs typically tie to ARR growth + sales-cycle compression. Monthly report tracks the trend between QBRs."
        embedWorkflows={[sales]}
      />
    </>
  );
}

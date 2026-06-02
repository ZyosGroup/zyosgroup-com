import type { Metadata } from "next";
import { FunctionPage } from "@/components/sections/FunctionPage";
import { PageSchema } from "@/components/seo/PageSchema";
import { SAMPLE_WORKFLOWS } from "@/components/showcases/sample-workflows";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "AI Agents for HR: Onboarding + Help Desk + Talent | Zyos Group",
  description:
    "AI agents for HR: onboarding orchestration, employee help desk, talent screening, performance review prep, compliance training. People work to humans; policy + process to agents.",
  alternates: { canonical: "/by-function/hr" },
};

const hr = SAMPLE_WORKFLOWS.find((w) => w.area === "HR")!;

export default function HRFunctionPage() {
  return (
    <>
      <PageSchema
        path="/by-function/hr"
        name="AI Agents for Human Resources: Zyos Group"
        description="Agentic AI applied to the HR function, onboarding, employee help desk, talent screening, performance review prep, compliance training."
        service={{ type: "Agent as a Service, HR" }}
        breadcrumbTrail={[
          { name: "Home", url: SITE.url },
          { name: "By function", url: `${SITE.url}/by-function/hr` },
          { name: "HR", url: `${SITE.url}/by-function/hr` },
        ]}
      />

      <FunctionPage
        eyebrow="By function · Human Resources"
        title="People work to humans. Policy + process to agents."
        quickAnswer="Zyos Group's HR-function agents deploy across onboarding orchestration, employee help desk, talent screening, performance review prep, and compliance training. HR focuses on people work; agents handle the policy-and-process work. Productized inside Agent as a Service. Engagement starts with Process Intelligence Implementation."
        intro="Onboarding that scales from 5 hires / year to 50 without breaking. Help desk that gives accurate policy answers instantly. Talent screening that's faster and less biased because the rubric is explicit, not implicit. Performance review prep that doesn't consume 40 hours of manager time per cycle. That's what the HR function looks like when agents run the operational tonnage."
        agentWorkflows={[
          {
            name: "Onboarding Orchestration Agent",
            body: "New-hire signal → 30/60/90 plan → access provisioning (IT cross-function) → equipment → buddy assignment → progress + survey administration.",
          },
          {
            name: "Employee Help Desk Agent",
            body: "Incoming question (Slack / email / portal) → policy lookup → benefits / PTO / expense answer drafting → escalation to HR for nuanced cases.",
          },
          {
            name: "Talent Screening Agent",
            body: "Resume ingestion → fit-scoring against role rubric → automated outreach for top tier → interview scheduling → reference-check orchestration.",
          },
          {
            name: "Performance Review Prep Agent",
            body: "Employee data → review template population → manager prep document → calibration suggestions → final review draft → employee + manager workflow.",
          },
          {
            name: "Compliance Training Tracker Agent",
            body: "Training requirement detection → gap analysis → assignment + reminder cadence → completion certification → audit-ready reporting.",
          },
        ]}
        biGenerated={[
          "Time-to-productivity for new hires",
          "Employee NPS",
          "Training completion rate",
          "Internal mobility rate",
          "Retention signals",
          "Talent funnel conversion",
        ]}
        biConsumed={[
          "Payroll",
          "Performance data",
          "Peer feedback",
          "Project completion records",
          "Learning system usage",
        ]}
        software="HRIS, payroll, learning management, ATS, employee survey platform, internal communications, knowledge base, plus the identity provider that handles the IT cross-function provisioning signal. Capability language only."
        operationsChanges={[
          "Onboarding moves from manual checklist to orchestrated workflow, same outcome quality, 80% less HR time.",
          "Employee help desk goes from 'ask HR' to 'ask the agent, escalate the 20% that need judgment.'",
          "Performance review prep shrinks from 40 hours to 5 hours per manager per cycle.",
          "Compliance training auto-tracks, no quarterly fire drill.",
        ]}
        outcomes={[
          { metric: "Time-to-productivity (new hires)", movement: "−25–40%" },
          { metric: "HR tickets handled at Tier-1", movement: "60–80% (vs 0% baseline)" },
          { metric: "Time-to-hire", movement: "−20–35%" },
          { metric: "Manager hours on review prep", movement: "−75%" },
          { metric: "Compliance training completion", movement: "95%+ vs typical 70–85%" },
        ]}
        customerSuccess="QBR slide tracks time-to-productivity, retention signals, talent funnel conversion, training completion, employee NPS. OKRs typically tie to retention + time-to-productivity + cost-per-hire."
        embedWorkflows={[hr]}
      />
    </>
  );
}

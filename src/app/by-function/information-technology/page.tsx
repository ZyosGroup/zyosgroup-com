import type { Metadata } from "next";
import { FunctionPage } from "@/components/sections/FunctionPage";
import { PageSchema } from "@/components/seo/PageSchema";
import { SAMPLE_WORKFLOWS } from "@/components/showcases/sample-workflows";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "AI Agents for IT: Service Desk + Anomaly + Provisioning",
  description:
    "AI agents for IT: service desk triage, anomaly and root-cause analysis, provisioning and access, and security event triage. Built on the Zyos Service Desk.",
  alternates: { canonical: "/by-function/information-technology" },
};

const support = SAMPLE_WORKFLOWS.find((w) => w.area === "Customer Support")!;

export default function ITFunctionPage() {
  return (
    <>
      <PageSchema
        path="/by-function/information-technology"
        name="AI Agents for Information Technology: Zyos Group"
        description="Agentic AI applied to the IT function, service desk, anomaly detection, knowledge base, provisioning, security triage."
        service={{ type: "Agent as a Service, IT" }}
        breadcrumbTrail={[
          { name: "Home", url: SITE.url },
          { name: "By function", url: `${SITE.url}/by-function/information-technology` },
          { name: "Information Technology", url: `${SITE.url}/by-function/information-technology` },
        ]}
      />

      <FunctionPage
        eyebrow="By function · Information Technology"
        title="Service desk that resolves Tier-1 without humans. Alerts that arrive triaged."
        quickAnswer="Zyos Group's IT-function agents deploy across service desk triage, anomaly + root-cause, knowledge base maintenance, provisioning + access, and security event triage. The Zyos Service Desk module (Postmark inbound, email-in → ticket → SLA → escalation) is the operational core. IT focuses on architecture, complex incidents, and strategic projects; agents handle the operational grind. Productized inside Agent as a Service."
        intro="The IT operations grind, Tier-1 tickets, knowledge-base maintenance, provisioning chains, alert flooding, compounds when agents handle the obvious cases and route the rest to humans with context. The Zyos Service Desk module shipped in May 2026 and runs the Tier-1 layer for engagements that adopt it."
        agentWorkflows={[
          {
            name: "Service Desk Triage Agent",
            body: "Incoming ticket → classification → KB retrieval → resolution drafting → auto-send / human review / escalation. Built on the Zyos Service Desk module.",
          },
          {
            name: "Anomaly + Root-Cause Agent",
            body: "System monitoring → anomaly detection → context gathering across systems → hypothesis → notification → corrective-action proposal.",
          },
          {
            name: "Knowledge Base Maintenance Agent",
            body: "KB freshness check → outdated-content detection → update suggestions → ticket-trend mining → new-article drafting → human review.",
          },
          {
            name: "Provisioning + Access Agent",
            body: "New-user event (HR signal) → role-based access provisioning across N tools → license tracking → 30-day usage review → deprovisioning workflow.",
          },
          {
            name: "Security Event Triage Agent",
            body: "Alert ingestion → false-positive filtering → severity classification → playbook execution for known patterns → human review for novel.",
          },
        ]}
        biGenerated={[
          "Ticket resolution time",
          "First-contact resolution rate",
          "MTTR for incidents",
          "Knowledge-base coverage",
          "License utilization",
          "Security event triage volume",
        ]}
        biConsumed={[
          "Asset inventory",
          "System telemetry",
          "HR provisioning signals",
          "Security tool alerts",
          "Change-management records",
        ]}
        software="Ticketing, monitoring + observability, knowledge base, identity provider, security tools, asset management, change management, integrated. The Zyos Service Desk module (Postmark inbound + ticket lifecycle + SLA + reminder cron) is one piece; the connector layer extends to your IT stack."
        operationsChanges={[
          "Tier-1 resolution shifts from human-first to agent-first with human-review for medium-confidence cases.",
          "Knowledge base goes from 'stale and ignored' to 'fresh and trusted', agents maintain it from real ticket data.",
          "On-call goes from alert-flooded to triaged action items.",
          "Onboarding / offboarding goes from 5-ticket chain to one orchestrated workflow.",
        ]}
        outcomes={[
          { metric: "Tier-1 ticket resolution time", movement: "−50–75%" },
          { metric: "First-contact resolution rate", movement: "+20–40 percentage points" },
          { metric: "MTTR for incidents", movement: "−30–50%" },
          { metric: "IT staff time on operational work", movement: "−40%" },
          { metric: "User CSAT for IT", movement: "+15–25 points" },
        ]}
        customerSuccess="QBR slide tracks ticket volume, resolution time trends, FCR rate, MTTR, agent reliability metrics, top resolution categories, KB freshness score. OKRs typically tie to user-impacting incident reduction + IT productivity uplift."
        embedWorkflows={[support]}
      />
    </>
  );
}

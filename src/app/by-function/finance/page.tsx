import type { Metadata } from "next";
import { FunctionPage } from "@/components/sections/FunctionPage";
import { PageSchema } from "@/components/seo/PageSchema";
import { SAMPLE_WORKFLOWS } from "@/components/showcases/sample-workflows";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "AI Agents for Finance: Reconciliation + Forecast + AP/AR",
  description:
    "AI agents for finance: reconciliation, AP/AR automation, forecast adjustment, audit prep, expense + procurement compliance. Close cycle from 10 days to 2–4.",
  alternates: { canonical: "/by-function/finance" },
};

const finance = SAMPLE_WORKFLOWS.find((w) => w.area === "Finance")!;

export default function FinanceFunctionPage() {
  return (
    <>
      <PageSchema
        path="/by-function/finance"
        name="AI Agents for Finance: Zyos Group"
        description="Agentic AI applied to the Finance function, reconciliation, AP/AR, forecast adjustment, audit prep, expense compliance."
        service={{ type: "Agent as a Service, Finance" }}
        breadcrumbTrail={[
          { name: "Home", url: SITE.url },
          { name: "By function", url: `${SITE.url}/by-function/finance` },
          { name: "Finance", url: `${SITE.url}/by-function/finance` },
        ]}
      />

      <FunctionPage
        eyebrow="By function · Finance"
        title="Close that doesn't consume the last week of every month. Variance flagged the day it happens."
        quickAnswer="Zyos Group's Finance-function agents deploy across reconciliation, AP/AR automation, forecast adjustment, audit prep, and expense + procurement compliance. The Finance team focuses on strategic analysis and business partnership; agents handle the transactional grind. Productized inside Agent as a Service. Insights variant is the read-only sub-variant most Finance teams start with."
        intro="Reconciliation that doesn't consume the last week of every month. Forecast variance flagged the day it happens, not at the quarter-end review. AP/AR cycle compressed by 40–60%. Audit prep that takes a day, not a month. That's what the Finance function looks like when agents handle the transactional layer."
        agentWorkflows={[
          {
            name: "Reconciliation Agent",
            body: "Transaction ingestion → categorization → reconciliation against bank / ERP → variance flagging → exception routing → close acceleration.",
          },
          {
            name: "AP/AR Automation Agent",
            body: "Invoice ingestion → PO matching → approval routing → payment scheduling. AR: invoice generation → dunning → collections escalation.",
          },
          {
            name: "Forecast Adjustment Agent",
            body: "Actuals ingestion → variance against forecast → driver-based forecast update → CFO summary → narrative draft for board reporting.",
          },
          {
            name: "Audit Prep Agent",
            body: "Audit requirement detection → data gathering across systems → reconciliation packet → schedule prep → exception flagging.",
          },
          {
            name: "Expense + Procurement Compliance Agent",
            body: "Expense report ingestion → policy check → exception flag → approve / route / reject → trend analysis → policy-update recommendations.",
          },
        ]}
        biGenerated={[
          "Close-cycle time",
          "Variance categories",
          "AP/AR cycle time",
          "Forecast accuracy over time",
          "Expense compliance rate",
          "Cash-conversion cycle",
        ]}
        biConsumed={[
          "Sales pipeline data (revenue forecasting)",
          "Operations data (cost forecasting)",
          "HR data (compensation modeling)",
        ]}
        software="ERP, AP platform, expense management, banking, BI/reporting, procurement systems, integrated. Tight cross-function dependence on Sales (revenue forecasting) and Operations (cost forecasting). Capability language only."
        operationsChanges={[
          "Month-end close cadence: 10 days → 2–4 days.",
          "Forecast updates: quarterly → continuous (with monthly formal updates).",
          "AP cycle time: −40% to −60%.",
          "Audit prep: '4-week project' → '1-day verification.'",
        ]}
        outcomes={[
          { metric: "Month-end close time", movement: "−50–75%" },
          { metric: "Forecast accuracy (variance)", movement: "−30–50% improvement" },
          { metric: "AP/AR cycle time", movement: "−40–60%" },
          { metric: "Finance time on transactional work", movement: "−50%" },
          { metric: "Audit findings", movement: "−50–75%" },
        ]}
        customerSuccess="QBR slide tracks close-cycle trend, forecast accuracy trend, AP/AR cycle, exception rate trend, finance team productive hours. OKRs typically tie to working capital + forecast accuracy + finance productivity."
        embedWorkflows={[finance]}
      />
    </>
  );
}

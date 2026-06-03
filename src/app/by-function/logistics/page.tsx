import type { Metadata } from "next";
import { FunctionPage } from "@/components/sections/FunctionPage";
import { PageSchema } from "@/components/seo/PageSchema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "AI Agents for Logistics: Inventory + Supplier + Shipping",
  description:
    "AI agents for logistics: inventory + demand, supplier performance, shipping optimization, returns handling, warehouse productivity. Continuous, not weekly.",
  alternates: { canonical: "/by-function/logistics" },
};

export default function LogisticsFunctionPage() {
  return (
    <>
      <PageSchema
        path="/by-function/logistics"
        name="AI Agents for Logistics: Zyos Group"
        description="Agentic AI applied to the Logistics function, inventory + demand, supplier performance, shipping optimization, returns, warehouse productivity."
        service={{ type: "Agent as a Service, Logistics" }}
        breadcrumbTrail={[
          { name: "Home", url: SITE.url },
          { name: "By function", url: `${SITE.url}/by-function/logistics` },
          { name: "Logistics", url: `${SITE.url}/by-function/logistics` },
        ]}
      />

      <FunctionPage
        eyebrow="By function · Logistics"
        title="Inventory that auto-corrects. Supplier scorecards that stay current. Shipping decisions per order."
        quickAnswer="Zyos Group's Logistics-function agents deploy across inventory + demand, supplier performance, shipping optimization, returns handling, and warehouse productivity. Logistics focuses on supplier relationships and strategic capacity decisions; agents handle the operational orchestration. Cross-function dependence on Sales (demand) + Finance (cost) is where the integration thesis pays off."
        intro="Inventory levels that auto-correct against demand. Supplier performance tracked continuously, not annually. Shipping decisions optimized per order. Returns processed without manual triage. Warehouse productivity that responds to bottlenecks before they cascade. That's the agentic logistics shape, and the cross-functional signals make it compound."
        agentWorkflows={[
          {
            name: "Inventory + Demand Agent",
            body: "Stock level monitoring → reorder triggering → demand-prediction adjustments → stockout-risk flagging → carrying-cost optimization. Continuous.",
          },
          {
            name: "Supplier Performance Agent",
            body: "Delivery data ingestion → on-time rate calculation → quality scorecard → risk flagging → renegotiation prep → alternative-supplier recommendations.",
          },
          {
            name: "Shipping Optimization Agent",
            body: "Order intake → carrier + service-level selection → cost optimization → tracking → exception handling → customer notification. Per-order, not per-RFP.",
          },
          {
            name: "Returns Handling Agent",
            body: "Return request → reason classification → resolution path (replacement / refund / repair / restock) → customer communication → root-cause feed to product / quality.",
          },
          {
            name: "Warehouse Productivity Agent",
            body: "Pick rate monitoring → bottleneck detection → resource reallocation suggestions → shift-planning recommendations → exception escalation.",
          },
        ]}
        biGenerated={[
          "Stockout rates",
          "Carrying cost trends",
          "Supplier on-time rates",
          "Shipping cost per order",
          "Returns rate by category",
          "Warehouse productivity metrics",
        ]}
        biConsumed={[
          "Sales demand signals",
          "Finance cost data",
          "IT system telemetry from warehouse systems",
          "Customer-success feedback on delivery experience",
        ]}
        software="WMS, TMS, ERP, supplier portals, carrier APIs, demand-planning platforms, integrated through Zyos OS. Cross-function dependence on Sales (demand) + Finance (cost) + Operations (process changes). Capability language only."
        operationsChanges={[
          "Inventory decisions: weekly planning → continuous adjustment.",
          "Supplier reviews: annual → continuous scorecards.",
          "Shipping decisions: rate-table-driven → per-order optimization.",
          "Warehouse work: static shift plans → responsive reallocation.",
        ]}
        outcomes={[
          { metric: "Stockout rate", movement: "−30–50%" },
          { metric: "Carrying cost", movement: "−10–20%" },
          { metric: "Shipping cost per order", movement: "−8–15%" },
          { metric: "Returns processing time", movement: "−50–70%" },
          { metric: "Warehouse productivity (units per hour)", movement: "+10–25%" },
        ]}
        customerSuccess="QBR slide tracks stockout trend, supplier scorecards, shipping cost trend, returns rate, warehouse productivity. OKRs typically tie to working capital + customer delivery experience + cost-to-serve."
        embedWorkflows={[]}
      />
    </>
  );
}

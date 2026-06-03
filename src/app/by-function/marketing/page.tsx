import type { Metadata } from "next";
import { FunctionPage } from "@/components/sections/FunctionPage";
import { PageSchema } from "@/components/seo/PageSchema";
import { SAMPLE_WORKFLOWS } from "@/components/showcases/sample-workflows";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "AI Agents for Marketing: Content + SEO + Paid + Reviews",
  description:
    "AI agents for marketing: content engine, local SEO + GBP, paid optimization, lifecycle, reviews + reputation. Productized inside Agent as a Service + GaaS.",
  alternates: { canonical: "/by-function/marketing" },
};

const marketing = SAMPLE_WORKFLOWS.find((w) => w.area === "Marketing")!;

export default function MarketingFunctionPage() {
  return (
    <>
      <PageSchema
        path="/by-function/marketing"
        name="AI Agents for Marketing: Zyos Group"
        description="Agentic AI applied to the Marketing function, content engine, SEO + GEO, paid, lifecycle, reviews."
        service={{ type: "Agent as a Service, Marketing" }}
        breadcrumbTrail={[
          { name: "Home", url: SITE.url },
          { name: "By function", url: `${SITE.url}/by-function/marketing` },
          { name: "Marketing", url: `${SITE.url}/by-function/marketing` },
        ]}
      />

      <FunctionPage
        eyebrow="By function · Marketing"
        title="Content that compounds. SEO + GEO that responds weekly, not quarterly."
        quickAnswer="Zyos Group's Marketing-function agents deploy across content engine, local SEO + GBP, paid optimization, lifecycle marketing, and reviews + reputation. Marketing leaders spend time on strategy and creative judgment; agents handle the operational tonnage. Productized inside Agent as a Service for mid-market and inside Growth as a Service for SMB B2B. Both arms start with Process Intelligence Implementation."
        intro="The marketing tonnage, topic research, draft cadence, paid re-optimization, review responses, citation maintenance, is exactly the work that compounds when agents do it continuously. The content engine, the Reviews Velocity engine, and the analytics integrations layer in Zyos OS are the productized proof."
        agentWorkflows={[
          {
            name: "Content Engine Agent",
            body: "Topic discovery → keyword + GEO targeting → draft → editorial review → publish → social blast → measure → next-topic. Productized inside GaaS.",
          },
          {
            name: "Local SEO + GBP Agent",
            body: "Citation health monitoring → review monitoring + response drafting → GBP post cadence → Q&A monitoring → service-area accuracy.",
          },
          {
            name: "Paid Optimization Agent",
            body: "Campaign monitoring → bid adjustments → creative refresh → audience expansion/exclusion → budget rebalancing. Continuous, not weekly.",
          },
          {
            name: "Lifecycle Marketing Agent",
            body: "Subscriber segmentation → re-engagement campaigns → nurture sequences → conversion-event tagging → win-back automation.",
          },
          {
            name: "Reviews + Reputation Agent",
            body: "Review monitoring across platforms → response drafting → escalation for negative sentiment → review velocity tracking. (Reviews Velocity Engine module.)",
          },
        ]}
        biGenerated={[
          "Organic + GEO impressions",
          "Conversions per channel",
          "Content performance",
          "Review velocity",
          "Citation consistency",
          "Paid efficiency (CPL, ROAS, attributed pipeline)",
        ]}
        biConsumed={[
          "Sales pipeline data (closes the attribution loop)",
          "Customer success signals (NPS, retention)",
          "Product usage signals (product-led marketing)",
        ]}
        software="GA4, Google Ads, Facebook Ads, LinkedIn Ads, your GBP, marketing automation, CMS, ad creative tooling, and review platforms, integrated through the analytics-integrations layer in Zyos OS. Capability language only."
        operationsChanges={[
          "Editorial calendar shifts from monthly planning to continuous topic discovery + automated drafting.",
          "Paid campaign management moves from weekly review to monthly review, the agent re-optimizes in between.",
          "Review responses move from 'tomorrow' to 'within 4 hours' without burning out a human.",
          "Cross-channel attribution becomes legible, the agent stitches signals automatically.",
        ]}
        outcomes={[
          { metric: "Organic traffic", movement: "+20–40%" },
          { metric: "GEO citations (LLM mentions)", movement: "0 → measurable per quarter" },
          { metric: "Review velocity", movement: "+50–150%" },
          { metric: "Paid efficiency (cost per qualified lead)", movement: "−15–30%" },
          { metric: "Content output", movement: "+3–5x without proportional headcount" },
        ]}
        customerSuccess="QBR slide tracks organic trend, GEO trend, paid efficiency, review velocity, content output, agent task throughput. OKRs typically tie to qualified pipeline + brand surface area. Monthly report tracks ranking + impressions + citations + reviews. GaaS engagements use the specialized GaaS QBR format."
        embedWorkflows={[marketing]}
      />
    </>
  );
}

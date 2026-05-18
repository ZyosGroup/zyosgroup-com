import type { Metadata } from "next";
import { StubPage } from "@/components/sections/StubPage";
import { PageSchema } from "@/components/seo/PageSchema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "For High-Growth SMBs — Productize Your Playbook | Zyos Group",
  description:
    "Zyos Group for High-Growth SMBs (10–200 employees). Productize how you operate. AI agents, integrated marketing, growth as a service, operating-model rollout.",
  alternates: { canonical: "/who-we-serve/high-growth-smbs" },
};

export default function HighGrowthSmbsPage() {
  return (
    <>
      <PageSchema
        path="/who-we-serve/high-growth-smbs"
        name="Zyos Group for High-Growth SMBs"
        description="Productized operating model + agentic AI + growth-as-a-service for 10–200-employee B2B."
        breadcrumbTrail={[
          { name: "Home", url: SITE.url },
          { name: "Who we serve", url: `${SITE.url}/who-we-serve` },
          { name: "High-Growth SMBs", url: `${SITE.url}/who-we-serve/high-growth-smbs` },
        ]}
      />
      <StubPage
        eyebrow="Who we serve · High-Growth SMBs"
        title="You're scaling. The founder's playbook isn't keeping up."
        quickAnswer="Zyos Group's high-growth-SMB practice is for 10–200-employee B2B companies on a growth trajectory. We productize how you operate so the next hire and the next customer cost less than the last — operating-model design, integrated marketing, Growth as a Service, Agent as a Service. The only firm productizing agentic AI plus growth ops at SMB-tier monthly pricing. Start with the Opportunity Engine intake."
        notes={[
          "Primary fit: Retainer (Build & Operate, $7K/mo) or As-A-Service (GaaS).",
          "Outcome catalog populates pass 2 with revenue / cost / risk / time / quality metrics.",
        ]}
      />
    </>
  );
}

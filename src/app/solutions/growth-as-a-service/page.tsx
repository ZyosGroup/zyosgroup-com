import type { Metadata } from "next";
import { StubPage } from "@/components/sections/StubPage";
import { PageSchema } from "@/components/seo/PageSchema";
import { SITE } from "@/lib/site";

// Primary KW: "growth as a service" (KD 0) — own the category.
export const metadata: Metadata = {
  title: "Growth as a Service — Productized for SMB B2B | Zyos Group",
  description:
    "Growth as a Service (GaaS): monthly continuous growth operations for SMB B2B — website, GBP, ads, SEO content, reviews, citations — measured against quarterly OKRs.",
  alternates: { canonical: "/solutions/growth-as-a-service" },
};

export default function GaaSPage() {
  return (
    <>
      <PageSchema
        path="/solutions/growth-as-a-service"
        name="Growth as a Service (GaaS) — Zyos Group"
        description="Continuous growth operations for SMB B2B — Website, GBP, Ads + LSA, SEO content, GEO. Powered by Zyos OS."
        service={{ type: "Growth as a Service" }}
        breadcrumbTrail={[
          { name: "Home", url: SITE.url },
          { name: "Solutions", url: `${SITE.url}/solutions` },
          { name: "Growth as a Service", url: `${SITE.url}/solutions/growth-as-a-service` },
        ]}
      />
      <StubPage
        eyebrow="Solutions · GaaS"
        title="Growth operations on autopilot — measured against your OKRs."
        quickAnswer="Growth as a Service (GaaS) is a monthly recurring service in which Zyos Group operates a small business's entire growth function — website, Google Business Profile, ads + LSA, SEO content, reviews and citations — measured against quarterly OKRs. Variants: Website, GBP, Ads + LSA, SEO content, GEO. The only productized agentic-AI play at SMB-tier pricing. Powered by the Zyos Operating System at zyos.io."
        notes={[
          "We operate it. You see it inside Zyos OS, not in a Google Sheet.",
          "Engagement model: As-A-Service. Variant-priced. Support baked in.",
          "Pass 2 ships case studies for the first two GaaS customers (text + photo only — customer video requires separate per-property permission).",
        ]}
      />
    </>
  );
}

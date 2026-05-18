import type { Metadata } from "next";
import { StubPage } from "@/components/sections/StubPage";
import { PageSchema } from "@/components/seo/PageSchema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "For Private Equity — Repeatable Value Creation | Zyos Group",
  description:
    "Zyos Group for PE firms and portfolio companies. Maturity assessment, operating-model rollout, agentic AI across holdings. Repeatable value creation.",
  alternates: { canonical: "/who-we-serve/private-equity" },
};

export default function PrivateEquityPage() {
  return (
    <>
      <PageSchema
        path="/who-we-serve/private-equity"
        name="Zyos Group for Private Equity"
        description="Repeatable value creation across PE portfolios via maturity assessment, operating-model rollout, and agentic AI."
        breadcrumbTrail={[
          { name: "Home", url: SITE.url },
          { name: "Who we serve", url: `${SITE.url}/who-we-serve` },
          { name: "Private Equity", url: `${SITE.url}/who-we-serve/private-equity` },
        ]}
      />
      <StubPage
        eyebrow="Who we serve · Private Equity"
        title="Repeatable value-creation across the portfolio."
        quickAnswer="Zyos Group serves PE firms and their portfolio companies. We assess maturity per holding, architect the right solution per context (regulated, complex, or growth-stage), and roll out the operating model that compounds value-impact across the portfolio. Same Zyos OS underneath every engagement — so engagement-N is faster, cheaper, and better-measured than engagement N–1. Engagement models: Retainer (most common), Build & Operate Retainer, or As-A-Service for specific motions."
        notes={[
          "Per-portfolio dashboards inside Zyos OS — pass 2.",
          "PE / SMB adapter skill in the skill library underpins the per-holding scoring.",
        ]}
      />
    </>
  );
}

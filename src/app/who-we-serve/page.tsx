import type { Metadata } from "next";
import { StubPage } from "@/components/sections/StubPage";
import { PageSchema } from "@/components/seo/PageSchema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Who we serve — SMBs, Private Equity, Associations | Zyos Group",
  description:
    "Zyos Group targets three ICPs: High-Growth SMBs, Private Equity firms + portfolio companies, and Associations. Same operating model. Context-specific architecture.",
  alternates: { canonical: "/who-we-serve" },
};

export default function WhoWeServePage() {
  return (
    <>
      <PageSchema
        path="/who-we-serve"
        name="Who Zyos Group serves"
        description="Three ICPs: High-Growth SMBs, Private Equity, and Associations."
        breadcrumbTrail={[
          { name: "Home", url: SITE.url },
          { name: "Who we serve", url: `${SITE.url}/who-we-serve` },
        ]}
      />
      <StubPage
        eyebrow="Who we serve"
        title="Three ICPs. Same operating model. Architecture tuned to context."
        quickAnswer="Zyos Group targets three ICPs: High-Growth SMBs (10–200 employees, scaling fast), Private Equity (firms plus portfolio companies needing repeatable value-creation), and Associations (non-profit and member organizations with AMS-aware, multi-stakeholder reality). The operating model — Measure, Deliver, Continuously Improve — is the same across all three. The architecture — regulated, complex, or growth-stage — is context-specific."
        notes={[
          "High-Growth SMBs — the founder's playbook isn't keeping up; we productize how you operate.",
          "Private Equity — repeatable value-creation across the portfolio; same OS, different architectures.",
          "Associations — member experience, content operations, and AMS-aware architectures.",
        ]}
      />
    </>
  );
}

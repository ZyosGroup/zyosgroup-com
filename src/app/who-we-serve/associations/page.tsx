import type { Metadata } from "next";
import { StubPage } from "@/components/sections/StubPage";
import { PageSchema } from "@/components/seo/PageSchema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "For Associations — Member Experience + AMS-aware AI | Zyos Group",
  description:
    "Zyos Group for non-profit and member organizations. AMS-aware architecture, member content operations, regulated multi-stakeholder reality.",
  alternates: { canonical: "/who-we-serve/associations" },
};

export default function AssociationsPage() {
  return (
    <>
      <PageSchema
        path="/who-we-serve/associations"
        name="Zyos Group for Associations"
        description="Member experience, content operations, and AMS-aware architectures for non-profit and member organizations."
        breadcrumbTrail={[
          { name: "Home", url: SITE.url },
          { name: "Who we serve", url: `${SITE.url}/who-we-serve` },
          { name: "Associations", url: `${SITE.url}/who-we-serve/associations` },
        ]}
      />
      <StubPage
        eyebrow="Who we serve · Associations"
        title="Built for the multi-stakeholder, regulated reality associations live in."
        quickAnswer="Zyos Group serves non-profit and member organizations. Member experience, content operations, and AMS-aware architectures (iMIS, NetForum, Personify in scoping context). Architecture is conservative where regulation demands — audit trails, human-in-loop defaults, clear ownership matrices. Engagement models: Fixed Price for defined builds, Retainer (including Build & Operate) for evolving programs, or As-A-Service for ongoing growth operations."
        notes={[
          "AMS adapter skills in the library cover iMIS / NetForum / Personify in scoping context.",
          "Architecture briefs explicitly address member privacy, audit trails, and ownership.",
        ]}
      />
    </>
  );
}

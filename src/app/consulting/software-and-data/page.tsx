import type { Metadata } from "next";
import { StubPage } from "@/components/sections/StubPage";
import { PageSchema } from "@/components/seo/PageSchema";
import { SITE } from "@/lib/site";

// Primary KW: "software development services" (KD 24) per research §6.2.
export const metadata: Metadata = {
  title: "Software & Data — Custom Builds + BI | Zyos Group",
  description:
    "Custom software development, data platforms, integrations, BI dashboards. Built when off-the-shelf can't. Two decades of IT, software, and BI lineage.",
  alternates: { canonical: "/consulting/software-and-data" },
};

export default function SoftwareDataPage() {
  return (
    <>
      <PageSchema
        path="/consulting/software-and-data"
        name="Software & Data — Zyos Group Consulting"
        description="Custom application development, data platforms, BI dashboards, and integrations."
        service={{ type: "Software development" }}
        breadcrumbTrail={[
          { name: "Home", url: SITE.url },
          { name: "Consulting", url: `${SITE.url}/consulting` },
          { name: "Software & Data", url: `${SITE.url}/consulting/software-and-data` },
        ]}
      />
      <StubPage
        eyebrow="Consulting · Software & Data"
        title="We build software. We instrument data. We integrate the stack."
        quickAnswer="Zyos Group's Software & Data practice is the build practice. Custom application development, data platforms, integrations, BI dashboards — informed by two decades of IT managed services, software, and business intelligence lineage. ZyosApp itself is the working proof, shipped weekly. When off-the-shelf is the right answer, we say so and integrate cleanly. Engagement models: Fixed Price (defined builds) or Retainer (advisory)."
        notes={[
          "Pass 2 hosts the interactive system topology (Reactflow) above the fold.",
          "SystemBuildCard grid with Build / Implement / Both badges lands pass 2.",
          "Eight-dashboard gallery cross-linked from /consulting/operations-and-scaling.",
        ]}
      />
    </>
  );
}

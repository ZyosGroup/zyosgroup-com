import type { Metadata } from "next";
import { StubPage } from "@/components/sections/StubPage";
import { PageSchema } from "@/components/seo/PageSchema";
import { SITE } from "@/lib/site";

// Primary KW: "ai operating system" (vol 1,000, KD 26) per research §6.2.
export const metadata: Metadata = {
  title: "Platform — The Zyos Operating System | Zyos Group",
  description:
    "Zyos OS is the platform that runs every Zyos Group engagement end-to-end. Intake, scoring, proposal, Kanban, Customer Success cadence, QBR — one system.",
  alternates: { canonical: "/platform" },
};

export default function PlatformPage() {
  return (
    <>
      <PageSchema
        path="/platform"
        name="The Zyos Operating System — Zyos Group platform"
        description="The operating system that runs every Zyos Group customer engagement end-to-end."
        breadcrumbTrail={[
          { name: "Home", url: SITE.url },
          { name: "Platform", url: `${SITE.url}/platform` },
        ]}
      />
      <StubPage
        eyebrow="Platform"
        title="The marketing site is the product. The product is the operating system."
        quickAnswer="An AI Operating System is the platform that runs an enterprise's agent fleet, data pipelines, and operational measurements end-to-end. Zyos OS is the operating system Zyos Group built to run its own customer engagements — intake, scoring, proposal generation, engagement Kanban, OKR / KPI tracking, Customer Success cadence, and Quarterly Business Reviews — on one connected system. Built by Zyos Group. Powers customer engagements end-to-end."
        notes={[
          "Pass 2 ships the guided product tour: intake & scoring → proposal generation → engagement Kanban → CS cadence → QBR.",
          "Aggregate customer-growth stat bar wires to /api/public/aggregate-stats — pass 2.",
          "Want to license Zyos OS for your own services firm? Visit zyos.io — the one canonical Org → Product editorial link.",
        ]}
      />
    </>
  );
}

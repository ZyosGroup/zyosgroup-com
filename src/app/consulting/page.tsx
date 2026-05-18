import type { Metadata } from "next";
import { StubPage } from "@/components/sections/StubPage";
import { PageSchema } from "@/components/seo/PageSchema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Consulting — AI Consulting Services | Zyos Group",
  description:
    "Zyos Group Consulting: Software & Data, Digital Transformation, Operations & Scaling, Integrated Marketing. Fixed Price or Retainer. Delivered on Zyos OS.",
  alternates: { canonical: "/consulting" },
};

export default function ConsultingPage() {
  return (
    <>
      <PageSchema
        path="/consulting"
        name="Zyos Group Consulting"
        description="Human-led, scoped, expert work — delivered on Zyos OS so deliverables compound into reusable IP."
        service={{ type: "AI consulting services" }}
        breadcrumbTrail={[
          { name: "Home", url: SITE.url },
          { name: "Consulting", url: `${SITE.url}/consulting` },
        ]}
      />
      <StubPage
        eyebrow="Consulting arm"
        title="Human-led, scoped, expert work — delivered on the operating system."
        quickAnswer="Zyos Group Consulting is human-led, scoped, expert work across four practice areas: Software & Data, Digital Transformation, Operations & Scaling, and Integrated Marketing. Every engagement is delivered on Zyos OS so deliverables compound into reusable IP. Engagement models: Fixed Price (defined scope) or Retainer (evolving scope; includes Build & Operate). Process Intelligence Implementation is always the first delivery cycle of every Retainer."
        notes={[
          "Software & Data — custom builds, data platforms, integrations, BI dashboards.",
          "Digital Transformation — end-to-end programs from legacy to AI-augmented workflows.",
          "Operations & Scaling — OKR / KPI systems, CS cadences, operating-model productization.",
          "Integrated Marketing — SEO + GEO + content + paid + analytics; productized as GaaS.",
        ]}
      />
    </>
  );
}

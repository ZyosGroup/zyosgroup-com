import type { Metadata } from "next";
import { StubPage } from "@/components/sections/StubPage";
import { PageSchema } from "@/components/seo/PageSchema";
import { SITE } from "@/lib/site";

// Primary KW: "integrated marketing services" (KD 0) per research §6.2.
export const metadata: Metadata = {
  title: "Integrated Marketing — SEO, GEO, Content, Paid, Analytics | Zyos Group",
  description:
    "Integrated marketing consulting: SEO + GEO + content engine + paid + analytics + measurement. Productized version: Growth as a Service.",
  alternates: { canonical: "/consulting/integrated-marketing" },
};

export default function IntegratedMarketingPage() {
  return (
    <>
      <PageSchema
        path="/consulting/integrated-marketing"
        name="Integrated Marketing — Zyos Group Consulting"
        description="SEO + GEO + content + paid + analytics. The marketing layer that drives growth on top of operational and technical work."
        service={{ type: "Integrated marketing services" }}
        breadcrumbTrail={[
          { name: "Home", url: SITE.url },
          { name: "Consulting", url: `${SITE.url}/consulting` },
          { name: "Integrated Marketing", url: `${SITE.url}/consulting/integrated-marketing` },
        ]}
      />
      <StubPage
        eyebrow="Consulting · Integrated Marketing"
        title="SEO. GEO. Content. Paid. Analytics. Measured against business performance."
        quickAnswer="Zyos Group's Integrated Marketing practice delivers SEO, generative engine optimization (GEO), content engine, paid, and analytics on top of the operational and technical work. When productized for SMB customers, this becomes Growth as a Service. Engagement models: Fixed Price (audits + one-time builds) or Retainer (ongoing advisory). The content engine produces ~5 pieces / month across owned properties (paulruddy.com / zyosgroup.com / zyos.io) plus a quarterly case study."
        notes={[
          "SEO baseline module (DataForSEO-powered, quarterly persistence) inside Zyos OS.",
          "Content engine playbook + LinkedIn Newsletter (The Zyos Brief) cadence.",
          "Productized version → Growth as a Service in the Solutions arm.",
        ]}
      />
    </>
  );
}

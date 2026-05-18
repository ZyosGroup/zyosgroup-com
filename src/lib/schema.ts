// JSON-LD generators. Canonical @id URLs only — see cross-property-link-strategy §2.
import { SITE, ORG_LONG_DESCRIPTION } from "./site";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": SITE.orgId,
    name: SITE.name,
    url: SITE.url,
    description: ORG_LONG_DESCRIPTION,
    founder: { "@id": SITE.founderId },
    owns: { "@id": SITE.productId },
    sameAs: [SITE.linkedinCompany, SITE.facebook],
  };
}

export function webPageSchema(opts: {
  url: string;
  name: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: opts.url,
    name: opts.name,
    description: opts.description,
    isPartOf: { "@id": SITE.orgId },
    publisher: { "@id": SITE.orgId },
  };
}

export function aboutPageSchema(opts: {
  url: string;
  name: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    url: opts.url,
    name: opts.name,
    description: opts.description,
    mainEntity: { "@id": SITE.orgId },
    publisher: { "@id": SITE.orgId },
  };
}

export function serviceSchema(opts: {
  url: string;
  name: string;
  description: string;
  serviceType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    url: opts.url,
    name: opts.name,
    description: opts.description,
    serviceType: opts.serviceType,
    provider: { "@id": SITE.orgId },
  };
}

export function breadcrumb(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

export function jsonLdScript(data: unknown) {
  return {
    __html: JSON.stringify(data),
  };
}

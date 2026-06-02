// JSON-LD generators. Canonical @id URLs only — see cross-property-link-strategy §2.
import {
  SITE,
  ORG_LONG_DESCRIPTION,
  TAGLINE,
  KNOWS_ABOUT,
  SERVICE_CATALOG,
  PAUL_BIO_SHORT,
  PAUL_SAME_AS,
} from "./site";

// ─── Organization (enriched) ──────────────────────────────────────────────
// Dual @type so Zyos appears as both a generic Organization and a
// ProfessionalService — the entity class that LLM rankers prefer for
// services-firm citation eligibility.

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": SITE.orgId,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: SITE.logo,
    image: SITE.logo,
    description: ORG_LONG_DESCRIPTION,
    slogan: TAGLINE,
    foundingDate: SITE.foundingDate,
    founder: {
      "@type": "Person",
      "@id": SITE.founderId,
      name: "Paul Ruddy",
      url: SITE.paulruddy,
    },
    owns: {
      "@type": "SoftwareApplication",
      "@id": SITE.productId,
      name: "Zyos Operating System",
      url: SITE.zyosIo,
    },
    knowsAbout: [...KNOWS_ABOUT],
    areaServed: {
      "@type": "Country",
      name: SITE.areaServed,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.addressLocality,
      addressRegion: SITE.addressRegion,
      addressCountry: SITE.addressCountry,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: SITE.contactEmail,
        url: `${SITE.url}/start`,
        availableLanguage: ["English"],
      },
    ],
    sameAs: [
      SITE.linkedinCompany,
      SITE.facebook,
      SITE.zyosIo,
      SITE.paulruddy,
      SITE.newsletter,
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Zyos Group services",
      itemListElement: SERVICE_CATALOG.map((svc, idx) => ({
        "@type": "Offer",
        position: idx + 1,
        itemOffered: {
          "@type": "Service",
          name: svc.name,
          serviceType: svc.serviceType,
          description: svc.description,
          url: `${SITE.url}${svc.path}`,
          provider: { "@id": SITE.orgId },
        },
      })),
    },
  };
}

// ─── Person (founder) ─────────────────────────────────────────────────────
// Linked to Organization via @id. E-E-A-T anchor.

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": SITE.founderId,
    name: "Paul Ruddy",
    givenName: "Paul",
    familyName: "Ruddy",
    url: SITE.paulruddy,
    image: `${SITE.paulruddy}/paul.jpg`,
    jobTitle: "Founder & CEO",
    description: PAUL_BIO_SHORT,
    worksFor: { "@id": SITE.orgId },
    sameAs: [...PAUL_SAME_AS],
    knowsAbout: [...KNOWS_ABOUT],
    alumniOf: {
      "@type": "Organization",
      name: "Zyos Group",
    },
  };
}

// ─── SoftwareApplication (Zyos OS) ────────────────────────────────────────

export function softwareApplicationSchema(opts: {
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": SITE.productId,
    name: "Zyos Operating System",
    alternateName: "Zyos OS",
    url: SITE.zyosIo,
    description:
      "The operating system that runs every Zyos Group customer engagement end-to-end, intake, scoring, proposal generation, engagement Kanban, OKR + KPI tracking, Customer Success cadence, and Quarterly Business Reviews, on one connected system.",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "AI Operating System",
    operatingSystem: "Web",
    publisher: { "@id": SITE.orgId },
    mainEntityOfPage: opts.url,
    offers: {
      "@type": "Offer",
      url: SITE.zyosIo,
      category: "SaaS",
    },
  };
}

// ─── WebPage (enriched with freshness + entity signals) ───────────────────

export function webPageSchema(opts: {
  url: string;
  name: string;
  description: string;
  datePublished?: string;
  dateModified?: string;
}) {
  const now = new Date().toISOString();
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${opts.url}#webpage`,
    url: opts.url,
    name: opts.name,
    description: opts.description,
    inLanguage: "en-US",
    isPartOf: { "@id": SITE.orgId },
    publisher: { "@id": SITE.orgId },
    about: { "@id": SITE.orgId },
    datePublished: opts.datePublished ?? "2026-04-01",
    dateModified: opts.dateModified ?? now.slice(0, 10),
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${opts.url}/opengraph-image`,
    },
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
    "@id": `${opts.url}#webpage`,
    url: opts.url,
    name: opts.name,
    description: opts.description,
    inLanguage: "en-US",
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
    areaServed: SITE.areaServed,
    audience: {
      "@type": "BusinessAudience",
      audienceType:
        "High-Growth SMBs, Private Equity firms and portfolio companies, Associations",
    },
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

// ─── FAQPage ──────────────────────────────────────────────────────────────
// The cheapest entry to PAA + AI Overview citation. Pair with visible Q/A.

export type FaqEntry = { q: string; a: string };

export function faqSchema(faqs: FaqEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}

// ─── Article (for blog + case studies) ────────────────────────────────────

export function articleSchema(opts: {
  url: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${opts.url}#article`,
    headline: opts.headline,
    description: opts.description,
    mainEntityOfPage: opts.url,
    url: opts.url,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    image: opts.image ?? `${opts.url}/opengraph-image`,
    author: {
      "@type": "Person",
      "@id": SITE.founderId,
      name: opts.authorName ?? "Paul Ruddy",
    },
    publisher: { "@id": SITE.orgId },
    inLanguage: "en-US",
  };
}

export function jsonLdScript(data: unknown) {
  return {
    __html: JSON.stringify(data),
  };
}

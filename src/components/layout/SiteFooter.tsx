import Link from "next/link";
import { SITE, TAGLINE_SHORT } from "@/lib/site";

const FOOTER_COLS: Array<{ heading: string; links: { href: string; label: string }[] }> = [
  {
    heading: "Solutions",
    links: [
      { href: "/solutions/agent-as-a-service", label: "Agent as a Service" },
      { href: "/solutions/growth-as-a-service", label: "Growth as a Service" },
    ],
  },
  {
    heading: "Consulting",
    links: [
      { href: "/consulting/software-and-data", label: "Software & Data" },
      { href: "/consulting/digital-transformation", label: "Digital Transformation" },
      { href: "/consulting/operations-and-scaling", label: "Operations & Scaling" },
      { href: "/consulting/integrated-marketing", label: "Integrated Marketing" },
    ],
  },
  {
    heading: "Who we serve",
    links: [
      { href: "/who-we-serve/high-growth-smbs", label: "High-Growth SMBs" },
      { href: "/who-we-serve/private-equity", label: "Private Equity" },
      { href: "/who-we-serve/associations", label: "Associations" },
    ],
  },
  {
    heading: "By function",
    links: [
      { href: "/by-function/sales", label: "Sales" },
      { href: "/by-function/marketing", label: "Marketing" },
      { href: "/by-function/information-technology", label: "IT" },
      { href: "/by-function/hr", label: "HR" },
      { href: "/by-function/finance", label: "Finance" },
      { href: "/by-function/logistics", label: "Logistics" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/framework", label: "Framework" },
      { href: "/foundation", label: "Foundation" },
      { href: "/how-we-deliver", label: "How we deliver" },
      { href: "/platform", label: "Platform" },
      { href: "/case-studies", label: "Case studies" },
      { href: "/the-brief", label: "The Brief" },
      { href: "/start", label: "Start" },
    ],
  },
];

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-surface mt-24">
      <div className="container-content py-14">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 text-primary">
              <span aria-hidden className="inline-block h-2.5 w-2.5 rounded-full bg-accent" />
              <span className="font-semibold tracking-tightish">Zyos Group</span>
            </Link>
            <p className="mt-3 max-w-sm text-sm text-subtle leading-relaxed">
              {TAGLINE_SHORT} We assess maturity, architect the right solution, and infuse AI into your operations — measured against business performance.
            </p>
            <p className="mt-4 text-xs text-subtle">
              Engagement models: Fixed Price · Retainer · As-A-Service (AaaS / GaaS)
            </p>
          </div>
          {FOOTER_COLS.map((col) => (
            <div key={col.heading}>
              <h2 className="eyebrow mb-3">{col.heading}</h2>
              <ul className="space-y-2 text-sm">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-ink/80 hover:text-primary">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="hairline mt-12 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-subtle">
          <div>
            © {year} {SITE.name}. All rights reserved.
            <span className="mx-2 text-border">·</span>
            <a href={SITE.url} className="hover:text-primary">{SITE.domain}</a>
          </div>
          <div className="flex items-center gap-4">
            <a href={SITE.linkedinCompany} rel="noopener" className="hover:text-primary">LinkedIn</a>
            <a href={SITE.newsletter} rel="noopener" className="hover:text-primary">The Zyos Brief</a>
            <a href={SITE.paulruddy} rel="noopener" className="hover:text-primary">Founded by Paul Ruddy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

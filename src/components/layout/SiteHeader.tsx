import Link from "next/link";

const NAV = [
  { href: "/solutions", label: "Solutions" },
  { href: "/consulting", label: "Consulting" },
  { href: "/who-we-serve", label: "Who we serve" },
  { href: "/platform", label: "Platform" },
  { href: "/case-studies", label: "Case studies" },
  { href: "/about", label: "About" },
  { href: "/the-brief", label: "The Brief" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/85 backdrop-blur-sm">
      <div className="container-content flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-primary"
          aria-label="Zyos Group — home"
        >
          <span aria-hidden className="inline-block h-2.5 w-2.5 rounded-full bg-accent" />
          <span className="font-semibold tracking-tightish">Zyos Group</span>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm text-ink/80">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/start"
          className="inline-flex items-center rounded-md bg-primary px-3.5 py-2 text-sm font-medium text-white hover:bg-ink transition-colors"
        >
          Start
        </Link>
      </div>
    </header>
  );
}

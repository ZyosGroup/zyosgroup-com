import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/site";
import { MobileNav } from "@/components/layout/MobileNav";

const NAV = [
  { href: "/solutions", label: "Solutions" },
  { href: "/agents", label: "Agents" },
  { href: "/consulting", label: "Consulting" },
  { href: "/who-we-serve", label: "Who we serve" },
  { href: "/platform", label: "Platform" },
  { href: "/projects", label: "Projects" },
  { href: "/case-studies", label: "Case studies" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/90 backdrop-blur-md">
      <div className="container-content flex h-20 items-center justify-between gap-6">
        <Link
          href="/"
          className="flex items-center"
          aria-label="Zyos Group, home"
        >
          <Image
            src="/brand/logo-horizontal-color.svg"
            alt="Zyos Group"
            width={245}
            height={49}
            priority
            unoptimized
            className="h-9 w-auto md:h-10"
          />
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

        <div className="flex items-center gap-2">
          <a
            href={SITE.bookingUrl}
            target="_blank"
            rel="noopener"
            className="hidden sm:inline-flex items-center rounded-md border border-border px-3.5 py-2 text-sm font-medium text-ink/80 hover:border-primary/40 hover:text-primary transition-colors"
          >
            Book a meeting
          </a>
          <Link
            href="/start"
            className="inline-flex items-center rounded-md bg-primary px-3.5 py-2 text-sm font-medium text-white hover:bg-ink transition-colors"
          >
            Start
          </Link>
          <MobileNav nav={NAV} />
        </div>
      </div>
    </header>
  );
}

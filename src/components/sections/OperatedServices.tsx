import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// S5 — What we operate. The two productized, continuously-operated offerings,
// highlighted equally: Agent as a Service + Growth as a Service. Dark premium
// band. (Paul: GaaS / marketing must be highlighted alongside agents.)

const SERVICES = [
  {
    eyebrow: "Agent as a Service",
    title: "Agents, operated for you",
    blurb:
      "We design, deploy, and run AI agents across your operations, then keep them tuned. Agents pull your data signals, execute actions, and coordinate workflows function by function, with us administering and improving them every cycle.",
    bullets: ["Workflows", "Systems", "Middleware", "Lean", "Insights"],
    href: "/solutions/agent-as-a-service",
  },
  {
    eyebrow: "Growth as a Service",
    title: "Your marketing function, operated for you",
    blurb:
      "The full growth engine, run on the same foundation: website, SEO and GEO, content, Google Business Profile, paid and local service ads, reviews, and the analytics that prove what worked, measured against quarterly OKRs.",
    bullets: ["Website", "SEO + GEO", "Content engine", "Ads + LSA", "Analytics"],
    href: "/solutions/growth-as-a-service",
  },
];

export function OperatedServices() {
  return (
    <section className="relative overflow-hidden bg-primary-deep text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0"
        style={{
          background:
            "radial-gradient(40rem 28rem at 85% -10%, rgba(72,193,235,0.18), transparent 60%)",
        }}
      />
      <div className="container-content relative py-16 md:py-24">
        <p className="eyebrow mb-3 text-accent">What we operate</p>
        <h2 className="max-w-prose text-3xl md:text-4xl font-semibold tracking-tightish text-white">
          Two services we run continuously, on the foundation we build with you.
        </h2>
        <p className="mt-4 max-w-prose text-lg text-white/75 leading-relaxed">
          Once the foundation is ready, you do not have to operate it alone. Both
          are productized, senior-team-run, and measured against business
          performance, on the same operating platform we build with you.
        </p>
        <Link
          href="/platform"
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-white transition-colors"
        >
          See the platform underneath
          <ArrowUpRight aria-hidden className="h-4 w-4" />
        </Link>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {SERVICES.map((s) => (
            <Link
              key={s.eyebrow}
              href={s.href}
              className="group flex flex-col rounded-xl border border-white/12 bg-white/[0.05] p-7 md:p-8 transition-colors hover:border-accent/50 hover:bg-white/[0.08]"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                {s.eyebrow}
              </p>
              <h3 className="mt-2 flex items-center gap-2 text-2xl font-semibold tracking-tightish text-white">
                {s.title}
                <ArrowUpRight aria-hidden className="h-5 w-5 text-accent" />
              </h3>
              <p className="mt-3 flex-1 text-[15px] text-white/80 leading-relaxed">
                {s.blurb}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {s.bullets.map((b) => (
                  <li
                    key={b}
                    className="rounded-full border border-white/15 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.1em] text-white/70"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

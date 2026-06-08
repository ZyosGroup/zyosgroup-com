import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Wrench, Bot, FileText, LayoutGrid } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { PageSchema } from "@/components/seo/PageSchema";
import { SITE } from "@/lib/site";
import { PROJECTS, BLOCK_LABEL, type Project } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects: See the Work We Build & How It's Built",
  description:
    "A visual portfolio from Zyos Group: real customer websites, applications, and analytics platforms, and how we layer Skills, Agents, Artifacts, and Apps to build them.",
  alternates: { canonical: "/projects" },
};

// ─── The building blocks (Skills -> Agents -> Artifacts -> Apps) ───────────
const BUILDING_BLOCKS = [
  {
    icon: Wrench,
    name: "Skills",
    what: "Reusable, validated know-how",
    body: "A capability written down once and reused everywhere: run an SEO audit, score an opportunity, enforce row-level security. It gets sharper every time it runs.",
  },
  {
    icon: Bot,
    name: "Agents",
    what: "Skills, put to work",
    body: "Agents string validated Skills together to do real work: track rankings every morning, optimize an ad account, triage inbound. They only run on Skills proven first.",
  },
  {
    icon: FileText,
    name: "Artifacts",
    what: "The tangible output",
    body: "Every run produces something you can open: a dashboard, an audit, a roadmap, a report. The proof and the paper trail, not a status email.",
  },
  {
    icon: LayoutGrid,
    name: "Apps",
    what: "Where it all surfaces",
    body: "The interface your team actually uses: the website, the portal, the analytics app, the module. Many of these we can put your brand on and run inside your product.",
  },
];

function BlockChip({ block, label }: { block: Project["components"][number]["block"]; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded border border-border bg-surface px-2 py-1 text-[12px] text-ink/80">
      <span className="mono text-[10px] uppercase tracking-[0.1em] text-accent">
        {BLOCK_LABEL[block]}
      </span>
      <span className="text-subtle">·</span>
      {label}
    </span>
  );
}

function ProjectVisual({ project }: { project: Project }) {
  if (project.image) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={project.image}
        alt={`${project.customer} — built by Zyos Group`}
        loading="lazy"
        className="h-full w-full rounded-lg border border-border object-cover object-top"
      />
    );
  }
  return (
    <div className="flex aspect-[16/10] w-full items-center justify-center rounded-lg border border-border bg-gradient-to-br from-primary via-primary to-accent/40">
      <span className="px-6 text-center text-2xl font-semibold tracking-tightish text-white/90">
        {project.customer}
      </span>
    </div>
  );
}

function FeaturedRow({ project, flip }: { project: Project; flip: boolean }) {
  return (
    <div className="grid items-center gap-8 lg:grid-cols-2">
      <div className={flip ? "lg:order-2" : ""}>
        <ProjectVisual project={project} />
      </div>
      <div className={flip ? "lg:order-1" : ""}>
        <p className="mono text-[11px] uppercase tracking-[0.16em] text-subtle">
          {project.category}
          {project.status ? (
            <span className="ml-2 text-accent">· {project.status}</span>
          ) : null}
        </p>
        <h3 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tightish text-primary">
          {project.customer}
        </h3>
        <p className="mt-2 text-lg font-medium text-accent">{project.headline}</p>
        <p className="mt-3 text-[15px] leading-relaxed text-ink/80">
          {project.blurb}
        </p>

        <p className="mt-5 mono text-[11px] uppercase tracking-[0.16em] text-subtle">
          How it&apos;s built
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          {project.components.map((c) => (
            <BlockChip key={c.block + c.label} block={c.block} label={c.label} />
          ))}
        </div>

        {project.impact?.length ? (
          <ul className="mt-4 space-y-1.5">
            {project.impact.map((i) => (
              <li key={i} className="flex gap-2 text-[14px] text-ink/80">
                <span aria-hidden className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {i}
              </li>
            ))}
          </ul>
        ) : null}

        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener"
            className="group mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-ink transition-colors"
          >
            Visit {project.customer}
            <ArrowUpRight
              aria-hidden
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        ) : null}
      </div>
    </div>
  );
}

function CompactCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-border bg-bg">
      <div className="p-1">
        <ProjectVisual project={project} />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="mono text-[11px] uppercase tracking-[0.16em] text-subtle">
          {project.category}
        </p>
        <h3 className="mt-1.5 text-lg font-semibold tracking-tightish text-primary">
          {project.customer}
        </h3>
        <p className="mt-1 text-[13px] font-medium text-accent">
          {project.headline}
        </p>
        <p className="mt-2 text-[14px] leading-relaxed text-ink/80">
          {project.blurb}
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.components.map((c) => (
            <BlockChip key={c.block + c.label} block={c.block} label={c.label} />
          ))}
        </div>
      </div>
    </article>
  );
}

export default function ProjectsPage() {
  const featured = PROJECTS.filter((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <>
      <PageSchema
        path="/projects"
        name="Projects by Zyos Group: Websites, Apps & Analytics Platforms"
        description="A visual portfolio of Zyos Group's work, with how we layer Skills, Agents, Artifacts, and Apps into each engagement."
        breadcrumbTrail={[
          { name: "Home", url: SITE.url },
          { name: "Projects", url: `${SITE.url}/projects` },
        ]}
      />

      {/* Intro */}
      <Section>
        <p className="eyebrow mb-4">Projects</p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tightish text-primary leading-[1.05] max-w-4xl">
          See the work, and how we build it.
        </h1>
        <div className="mt-10 max-w-3xl">
          <QuickAnswer>
            Agentic AI is easier to see than to explain. So here is the actual
            work: real customer websites, applications, and analytics
            platforms, each one assembled from the same building blocks, Skills,
            Agents, Artifacts, and Apps. We build on whatever technology stack
            fits the customer, and layer it into the engagement so it keeps
            compounding.
          </QuickAnswer>
          <p className="mt-6 text-[15px] leading-relaxed text-ink/75">
            Most of our biggest wins start the same way: an organization with
            silos and systems that cannot talk to each other, software they are
            barely using, and no way to orchestrate AI agents across any of it.
            We are technology-agnostic, so we meet you on the stack you have. And
            where it cannot carry the work, we build new, and connect it, fast.
          </p>
        </div>
      </Section>

      {/* How we build */}
      <Section className="bg-surface border-y border-border">
        <SectionHeading
          eyebrow="How we build"
          title="Four building blocks behind every project."
          description="We don't hand you a tool and leave. We assemble Skills, Agents, Artifacts, and Apps into a system that fits how your business runs, and you'll see these same blocks tagged on every project below."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {BUILDING_BLOCKS.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={b.name}
                className="flex flex-col rounded-lg border border-border bg-bg p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/5 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="mono text-[11px] uppercase tracking-[0.16em] text-subtle">
                    Layer {i + 1}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold tracking-tightish text-primary">
                  {b.name}
                </h3>
                <p className="text-[13px] font-medium text-accent">{b.what}</p>
                <p className="mt-2 text-[14px] leading-relaxed text-ink/80">
                  {b.body}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Featured projects — large visual rows */}
      <Section>
        <SectionHeading
          eyebrow="Selected work"
          title="Projects, end to end."
          description="Each project brings the whole engagement together: what we built, and how the building blocks layered to get there."
        />
        <div className="mt-14 space-y-20">
          {featured.map((project, idx) => (
            <FeaturedRow key={project.slug} project={project} flip={idx % 2 === 1} />
          ))}
        </div>
      </Section>

      {/* More projects — compact grid (incl. visuals-pending) */}
      {rest.length ? (
        <Section className="bg-surface border-y border-border">
          <SectionHeading eyebrow="More work" title="Across industries and stacks." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((project) => (
              <CompactCard key={project.slug} project={project} />
            ))}
          </div>
        </Section>
      ) : null}

      {/* CTA */}
      <Section className="bg-primary text-white">
        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr] items-end">
          <div>
            <p className="mono text-[11px] uppercase tracking-[0.18em] text-accent">
              From showcase to your roadmap
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tightish text-white">
              Want something like this built for you?
            </h2>
            <p className="mt-4 text-white/80 max-w-prose">
              Whether it&apos;s a site, an application, an analytics platform, or a
              white-label module inside your own product, the fastest path is a
              measurement. We assess where you are, then architect the right mix
              for your context.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link
              href="/start"
              className="inline-flex items-center rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-ink hover:bg-white transition-colors"
            >
              Start with a measurement
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center rounded-md border border-white/30 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition-colors"
            >
              See quantified outcomes
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { PageSchema } from "@/components/seo/PageSchema";
import { SITE } from "@/lib/site";
import { BLOG_POSTS } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — AI Operating Model & Agentic Transformation | Zyos Group",
  description:
    "Field notes on the AI operating model, agentic transformation, and putting AI into how mid-market companies actually operate. Written by Paul Ruddy.",
  alternates: { canonical: "/blog" },
};

const posts = [...BLOG_POSTS].sort((a, b) =>
  b.datePublished.localeCompare(a.datePublished)
);

export default function BlogIndexPage() {
  return (
    <>
      <PageSchema
        path="/blog"
        name="Zyos Group Blog — AI Operating Model & Agentic Transformation"
        description="On-site long-form on the AI operating model, agentic transformation, and operations + technology + data + software under one roof."
        breadcrumbTrail={[
          { name: "Home", url: SITE.url },
          { name: "Blog", url: `${SITE.url}/blog` },
        ]}
      />

      <Section>
        <p className="eyebrow mb-4">Blog</p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tightish text-primary leading-[1.05] max-w-4xl">
          The AI operating model, in practice.
        </h1>
        <div className="mt-10 max-w-3xl">
          <QuickAnswer>
            Long-form field notes from Zyos Group on building a governed AI
            operating model — the foundation that makes agentic AI safe,
            measurable, and worth deploying. Written for operators at
            High-Growth SMBs, PE portfolio companies, and associations who want
            structure, not another pile of tools.
          </QuickAnswer>
        </div>
      </Section>

      <Section className="bg-surface border-y border-border">
        <SectionHeading
          eyebrow="Latest"
          title="Reads for operators who want structure, not tools."
        />
        <div className="mt-10 grid gap-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-lg border border-border bg-bg p-6 transition-colors hover:border-accent"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="max-w-3xl">
                  <p className="mono text-[11px] uppercase tracking-[0.16em] text-subtle">
                    {post.category} · {post.readingMinutes} min read
                  </p>
                  <h2 className="mt-2 text-xl md:text-2xl font-semibold tracking-tightish text-primary">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink/80">
                    {post.description}
                  </p>
                </div>
                <ArrowUpRight
                  className="mt-1 h-5 w-5 shrink-0 text-subtle transition-colors group-hover:text-accent"
                  aria-hidden
                />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-primary text-white">
        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr] items-end">
          <div>
            <p className="mono text-[11px] uppercase tracking-[0.18em] text-accent">
              From reading to roadmap
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tightish text-white">
              The operating model isn&apos;t a theory. It&apos;s a 20-week rollout.
            </h2>
            <p className="mt-4 text-white/80 max-w-prose">
              One vendor across operations, technology, data, and software.
              Start with a measurement — interview every department, score
              every gap, and get a ranked roadmap.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link
              href="/start"
              className="inline-flex items-center rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-ink hover:bg-white transition-colors"
            >
              Start with a measurement
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}

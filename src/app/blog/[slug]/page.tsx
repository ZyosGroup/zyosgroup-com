import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { Faq } from "@/components/seo/Faq";
import { CtaButton } from "@/components/ui/Button";
import { Prose } from "@/components/content/Prose";
import { articleSchema, breadcrumb, jsonLdScript } from "@/lib/schema";
import { SITE } from "@/lib/site";
import { BLOG_POSTS, getPost, allPostSlugs } from "@/lib/blog";

export function generateStaticParams() {
  return allPostSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: post.seoTitle ?? `${post.title} | Zyos Group`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.seoTitle ?? post.title,
      description: post.description,
      type: "article",
      url: `${SITE.url}/blog/${post.slug}`,
    },
  };
}

const fmt = (iso: string) =>
  new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const url = `${SITE.url}/blog/${post.slug}`;
  const related =
    post.related ??
    BLOG_POSTS.filter((p) => p.slug !== post.slug)
      .slice(0, 3)
      .map((p) => ({ label: p.title, href: `/blog/${p.slug}` }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          articleSchema({
            url,
            headline: post.title,
            description: post.description,
            datePublished: post.datePublished,
            dateModified: post.dateModified,
            authorName: post.author,
          })
        )}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumb([
            { name: "Home", url: SITE.url },
            { name: "Blog", url: `${SITE.url}/blog` },
            { name: post.title, url },
          ])
        )}
      />

      <Section>
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-subtle hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden /> All posts
        </Link>

        <p className="eyebrow mt-8 mb-3">
          {post.category} · {post.readingMinutes} min read
        </p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tightish text-primary leading-[1.05] max-w-4xl">
          {post.title}
        </h1>
        <p className="mono mt-5 text-[12px] text-subtle">
          By {post.author} · {fmt(post.datePublished)}
        </p>

        <div className="mt-10 max-w-3xl">
          <QuickAnswer>{post.quickAnswer}</QuickAnswer>
        </div>

        <div className="mt-12">
          <Prose sections={post.body} />
        </div>
      </Section>

      {post.faqs.length > 0 ? (
        <Faq
          eyebrow={`${post.category} FAQ`}
          title="Questions operators ask."
          description="Published as FAQPage schema for AI Overview + People Also Ask citation."
          faqs={post.faqs}
        />
      ) : null}

      {related.length > 0 ? (
        <Section>
          <p className="eyebrow mb-6">Keep reading</p>
          <div className="grid gap-3 md:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="rounded-lg border border-border bg-surface p-5 text-[15px] font-medium text-primary transition-colors hover:border-accent"
              >
                {r.label}
              </Link>
            ))}
          </div>
        </Section>
      ) : null}

      <Section className="bg-primary text-white">
        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr] items-end">
          <div>
            <p className="mono text-[11px] uppercase tracking-[0.18em] text-accent">
              One vendor. Operations, technology, data, software.
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tightish text-white">
              Start with a measurement.
            </h2>
            <p className="mt-4 text-white/80 max-w-prose">
              We interview every department, score every gap, and hand you a
              ranked roadmap, foundation first, agents second, measured always.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <CtaButton href="/start">Start your intake</CtaButton>
          </div>
        </div>
      </Section>
    </>
  );
}

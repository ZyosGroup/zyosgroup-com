import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { Faq } from "@/components/seo/Faq";
import { CtaButton } from "@/components/ui/Button";
import { articleSchema, breadcrumb, jsonLdScript } from "@/lib/schema";
import { SITE } from "@/lib/site";
import {
  getCaseStudy,
  allCaseSlugs,
  METRIC_TYPE_LABEL,
} from "@/lib/case-studies";

export function generateStaticParams() {
  return allCaseSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const c = getCaseStudy(params.slug);
  if (!c) return {};
  return {
    title: c.seoTitle ?? c.title,
    description: c.description,
    alternates: { canonical: `/case-studies/${c.slug}` },
    openGraph: {
      title: c.seoTitle ?? c.title,
      description: c.description,
      type: "article",
      url: `${SITE.url}/case-studies/${c.slug}`,
    },
  };
}

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const c = getCaseStudy(params.slug);
  if (!c) notFound();
  const url = `${SITE.url}/case-studies/${c.slug}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          articleSchema({
            url,
            headline: c.title,
            description: c.description,
            datePublished: c.datePublished,
            dateModified: c.dateModified,
          })
        )}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumb([
            { name: "Home", url: SITE.url },
            { name: "Case studies", url: `${SITE.url}/case-studies` },
            { name: c.title, url },
          ])
        )}
      />

      {/* HERO, distinct from blog: meta chips + KPI band on dark primary */}
      <Section className="bg-primary text-white">
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-white transition-colors"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden /> All case studies
        </Link>

        <div className="mt-8 flex flex-wrap gap-2">
          {[c.industry, c.serviceLine, `${c.engagementModel} engagement`].map(
            (chip) => (
              <span
                key={chip}
                className="mono rounded-full border border-white/20 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-white/80"
              >
                {chip}
              </span>
            )
          )}
        </div>

        <h1 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tightish text-white leading-[1.05] max-w-4xl">
          {c.title}
        </h1>
        {c.anonymized ? (
          <p className="mono mt-4 text-[12px] text-accent">
            {c.client} · named when customer permission clears
          </p>
        ) : (
          <p className="mono mt-4 text-[12px] text-accent">{c.client}</p>
        )}

        {c.relatedProject ? (
          <Link
            href="/projects"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-white/80 hover:text-white transition-colors"
          >
            See the full project <ArrowLeft className="h-4 w-4 rotate-180" aria-hidden />
          </Link>
        ) : null}

        {/* KPI band */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3 max-w-4xl">
          {c.metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-lg border border-white/15 bg-white/5 p-6 min-h-[140px]"
            >
              <p className="mono text-[11px] uppercase tracking-[0.16em] text-accent">
                {METRIC_TYPE_LABEL[m.type]}
              </p>
              <p className="mt-2 text-3xl md:text-4xl font-semibold tracking-tightish text-white">
                {m.value}
              </p>
              <p className="mt-1 text-sm text-white/75">{m.label}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl">
          <QuickAnswer>{c.quickAnswer}</QuickAnswer>
        </div>
      </Section>

      {/* Situation / Work / Outcome arc, three columns (distinct from blog prose) */}
      <Section className="bg-surface border-y border-border">
        <SectionHeading
          eyebrow="The arc"
          title="Situation, work, outcome."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { k: "Situation", v: c.situation },
            { k: "Work", v: c.work },
            { k: "Outcome", v: c.outcome },
          ].map((col) => (
            <article key={col.k} className="rounded-lg border border-border bg-bg p-6">
              <p className="mono text-[11px] uppercase tracking-[0.16em] text-subtle">
                {col.k}
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink/85">
                {col.v}
              </p>
            </article>
          ))}
        </div>
      </Section>

      {/* PI-phase timeline */}
      <Section>
        <SectionHeading
          eyebrow="The operating-model arc"
          title="What discovery surfaced, what we built, what the QBR recalibrated."
          description="Every engagement runs the same three-phase shape, foundation before automation, measured every cycle."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {c.phases.map((ph) => (
            <article
              key={ph.name}
              className="rounded-lg border border-border bg-surface p-6"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-lg font-semibold tracking-tightish text-primary">
                  {ph.name}
                </h3>
                {ph.window ? (
                  <span className="mono text-[11px] text-subtle">{ph.window}</span>
                ) : null}
              </div>
              <ul className="mt-4 space-y-2 text-[14px] leading-relaxed text-ink/80">
                {ph.points.map((p, i) => (
                  <li key={i} className="flex gap-2">
                    <span aria-hidden className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      {c.testimonial ? (
        <Section className="bg-surface border-y border-border">
          <blockquote className="mx-auto max-w-3xl text-center">
            <p className="text-2xl md:text-3xl font-semibold tracking-tightish text-primary leading-snug">
              &ldquo;{c.testimonial.quote}&rdquo;
            </p>
            <cite className="mono mt-5 block text-[12px] not-italic text-subtle">
              {c.testimonial.attribution}
            </cite>
          </blockquote>
        </Section>
      ) : null}

      {c.faqs.length > 0 ? (
        <Faq
          eyebrow="Case study, FAQ"
          title="Questions about this engagement."
          description="Straight answers to common questions about this engagement."
          faqs={c.faqs}
        />
      ) : null}

      <Section className="bg-primary text-white">
        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr] items-end">
          <div>
            <p className="mono text-[11px] uppercase tracking-[0.18em] text-accent">
              Want yours on the list?
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tightish text-white">
              Start with a measurement.
            </h2>
            <p className="mt-4 text-white/80 max-w-prose">
              The value-impact OKRs we set together at kickoff become the case
              study when the engagement closes. One vendor, one roadmap,
              measured every quarter.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <CtaButton href="/start">Take the assessment</CtaButton>
          </div>
        </div>
      </Section>
    </>
  );
}

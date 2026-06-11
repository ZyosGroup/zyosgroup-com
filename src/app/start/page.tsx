import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { IntakeForm } from "./IntakeForm";
import { AssessmentChooser } from "./AssessmentChooser";
import { jsonLdScript, webPageSchema, breadcrumb } from "@/lib/schema";
import { SITE } from "@/lib/site";

// Target: "ai opportunity assessment" / "ai readiness assessment" (research §6.2).
export const metadata: Metadata = {
  title: "Start, The Zyos Opportunity Engine Assessment",
  description:
    "Take the Opportunity Engine assessment: a scored readiness diagnostic across five dimensions, then a roadmap. Or just reach out. Zyos Group.",
  alternates: { canonical: "/start" },
};

const DIMENSIONS = [
  "Process Maturity",
  "Tech + Integration",
  "Data Quality",
  "Automation + AI Readiness",
  "People + Knowledge Risk",
];

export default function StartPage() {
  const url = `${SITE.url}/start`;
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          webPageSchema({
            url,
            name: "The Zyos Opportunity Engine Assessment",
            description:
              "A scored readiness diagnostic across five dimensions, then a roadmap. Or reach out directly.",
          })
        )}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumb([
            { name: "Home", url: SITE.url },
            { name: "Start", url },
          ])
        )}
      />

      {/* Hero + the assessment (primary path) */}
      <Section>
        <p className="eyebrow mb-4">The Opportunity Engine</p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tightish text-primary leading-[1.05] max-w-3xl">
          Start with a real assessment.
        </h1>
        <div className="mt-8 max-w-3xl">
          <QuickAnswer label="What this is">
            The Opportunity Engine is a focused assessment that scores how ready
            your business is to put AI to work, then returns a real diagnostic and
            a roadmap. It takes about 12 to 18 minutes. Pick your situation below and
            we will route you to the right version, full transformation or growth
            and marketing.
          </QuickAnswer>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_1fr] items-start">
          <AssessmentChooser />

          <aside className="rounded-lg border border-border bg-surface p-6 md:p-8">
            <p className="mono text-[11px] uppercase tracking-[0.16em] text-subtle">
              What you get back
            </p>
            <p className="mt-3 text-[15px] text-ink/80 leading-relaxed">
              A scored snapshot across five dimensions:
            </p>
            <ul className="mt-3 grid gap-1.5">
              {DIMENSIONS.map((d) => (
                <li key={d} className="flex items-center gap-2 text-sm text-ink/85">
                  <span aria-hidden className="h-1 w-1 rounded-full bg-accent" />
                  {d}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[14px] text-ink/80 leading-relaxed">
              Then an honest routing decision:
            </p>
            <ul className="mt-2 space-y-1.5 text-[14px] text-ink/80">
              <li>
                <span className="font-semibold text-primary">Engagement recommended</span>, ready to start.
              </li>
              <li>
                <span className="font-semibold text-primary">Conditions to address</span>, a few things first.
              </li>
              <li>
                <span className="font-semibold text-primary">Not yet, revisit</span>, wrong fit today, and why.
              </li>
            </ul>
            <p className="mt-5 text-xs text-subtle">
              We disqualify when we should. Saying not yet is a trust signal, not a
              lost sale.
            </p>
          </aside>
        </div>
      </Section>

      {/* Contact form (secondary path) */}
      <Section className="bg-surface border-t border-border">
        <div className="max-w-2xl">
          <p className="eyebrow mb-3">Or just reach out</p>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tightish text-primary">
            Prefer to talk first? Send us a note.
          </h2>
          <p className="mt-3 text-[15px] text-ink/80 leading-relaxed">
            Not ready for the assessment, or have a specific question? Tell us a
            little about your business and we will reply within one business day.
          </p>
          <div className="mt-8 rounded-lg border border-border bg-white p-6 md:p-8">
            <IntakeForm />
          </div>
        </div>
      </Section>
    </>
  );
}

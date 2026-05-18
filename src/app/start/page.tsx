import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { IntakeForm } from "./IntakeForm";
import { jsonLdScript, webPageSchema, breadcrumb } from "@/lib/schema";
import { SITE } from "@/lib/site";

// Target: "ai opportunity assessment" / "ai readiness assessment" (research §6.2).
export const metadata: Metadata = {
  title: "Start — The Zyos Opportunity Engine intake",
  description:
    "Four questions. Ninety seconds. Diagnostic in your inbox within 60 minutes. Scoped proposal by next business day. The Zyos Group Opportunity Engine.",
  alternates: { canonical: "/start" },
};

export default function StartPage() {
  const url = `${SITE.url}/start`;
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          webPageSchema({
            url,
            name: "The Zyos Opportunity Engine intake",
            description:
              "Four-question intake. Diagnostic in 60 minutes. Scoped proposal by next business day.",
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

      <Section>
        <p className="eyebrow mb-4">The Opportunity Engine</p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tightish text-primary leading-[1.05] max-w-3xl">
          Four questions. Ninety seconds. A real diagnostic.
        </h1>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <QuickAnswer label="What happens next">
              You answer four questions about your industry, size, and current
              bottleneck. Within 60 minutes you receive a scored diagnostic
              snapshot — Process Maturity, Tech + Integration, Data Quality,
              Automation + AI Readiness, People + Knowledge Risk. By next
              business day, a real-human-reviewed scoped proposal lands. The
              routing decision is honest: Engagement recommended, Conditions to
              address, or Not yet — revisit.
            </QuickAnswer>
            <div className="mt-10 rounded-lg border border-border bg-surface p-6 md:p-8">
              <IntakeForm />
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-lg border border-border bg-surface p-6">
              <p className="mono text-[11px] uppercase tracking-[0.16em] text-subtle">
                What this is not
              </p>
              <ul className="mt-3 space-y-2 text-sm text-ink/80">
                <li>· Not a contact form. We don&apos;t do generic &ldquo;contact us&rdquo;.</li>
                <li>· Not a newsletter sign-up. The Zyos Brief is on LinkedIn.</li>
                <li>· Not a sales call request. The diagnostic comes first.</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border bg-primary text-white p-6">
              <p className="mono text-[11px] uppercase tracking-[0.16em] text-accent">
                Routing decision · examples
              </p>
              <ul className="mt-3 space-y-2 text-sm text-white/85">
                <li>
                  <span className="text-accent">Engagement recommended</span> —
                  ready for PI Implementation + the first delivery cycle.
                </li>
                <li>
                  <span className="text-accent">Conditions to address</span> —
                  one or two pre-conditions before we&apos;d take the engagement;
                  we tell you which.
                </li>
                <li>
                  <span className="text-accent">Not yet — revisit</span> — wrong
                  fit today, here&apos;s what would change that. Disqualification is
                  itself a trust signal.
                </li>
              </ul>
            </div>
            <p className="text-xs text-subtle">
              Note · in this first release the intake is captured and reviewed
              manually within 60 minutes. The fully automated diagnostic email
              wires through ZyosApp&apos;s prospect-scoring pipeline in the next
              pass.
            </p>
          </aside>
        </div>
      </Section>
    </>
  );
}

"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { OE_SURVEYS, OE_SURVEY_DEFAULT } from "@/lib/site";
import { trackEvent } from "@/lib/analytics";

// Assessment-first router. The prospect picks who they are and what they are
// here for, and we send them to the matching live Opportunity Engine survey
// (survey.zyos.io). GaaS / marketing intent routes to the GaaS-tailored variant;
// everything else routes to their segment's survey. No fake diagnostic in front.

const SEGMENTS = [
  { value: "growth-smb", label: "Growth-stage SMB" },
  { value: "pe-backed", label: "PE-backed company" },
  { value: "associations", label: "Association or nonprofit" },
] as const;

const FOCUS = [
  {
    value: "transformation",
    label: "Full transformation",
    hint: "Operations, technology, data, software, and agents.",
  },
  {
    value: "gaas",
    label: "Growth & marketing",
    hint: "Website, SEO, ads, and content, operated for you.",
  },
] as const;

function Choice({
  active,
  label,
  hint,
  onClick,
}: {
  active: boolean;
  label: string;
  hint?: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`flex flex-col rounded-lg border px-4 py-3 text-left transition-colors ${
        active
          ? "border-accent bg-accent/10 ring-1 ring-accent"
          : "border-border bg-white hover:border-primary/40"
      }`}
    >
      <span className="text-sm font-semibold text-primary">{label}</span>
      {hint ? <span className="mt-0.5 text-[12px] text-ink/70">{hint}</span> : null}
    </button>
  );
}

export function AssessmentChooser() {
  const [segment, setSegment] = useState<string>("growth-smb");
  const [focus, setFocus] = useState<string>("transformation");

  const surveyUrl =
    focus === "gaas"
      ? OE_SURVEYS.gaas ?? OE_SURVEY_DEFAULT
      : OE_SURVEYS[segment] ?? OE_SURVEY_DEFAULT;

  return (
    <div className="rounded-xl border border-border bg-surface p-6 md:p-8">
      <div className="space-y-6">
        <div>
          <p className="text-sm font-medium text-primary">
            Which best describes you?
          </p>
          <div className="mt-3 grid gap-2 sm:grid-cols-3">
            {SEGMENTS.map((s) => (
              <Choice
                key={s.value}
                active={segment === s.value}
                label={s.label}
                onClick={() => setSegment(s.value)}
              />
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-medium text-primary">
            What are you here for?
          </p>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {FOCUS.map((f) => (
              <Choice
                key={f.value}
                active={focus === f.value}
                label={f.label}
                hint={f.hint}
                onClick={() => setFocus(f.value)}
              />
            ))}
          </div>
        </div>
      </div>

      <a
        href={surveyUrl}
        target="_blank"
        rel="noopener"
        onClick={() =>
          trackEvent("begin_assessment", {
            form: "opportunity_engine",
            segment: focus === "gaas" ? "gaas" : segment,
            source: "zyosgroup.com-start",
          })
        }
        className="mt-7 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink"
      >
        Start your Opportunity Engine assessment
        <ArrowRight aria-hidden className="h-4 w-4" />
      </a>
      <p className="mt-3 text-xs text-subtle">
        About ten minutes. You get a scored readiness diagnostic back, then we map
        the roadmap together. No sales call required first.
      </p>
    </div>
  );
}

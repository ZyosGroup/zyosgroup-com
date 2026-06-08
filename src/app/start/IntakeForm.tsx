"use client";

import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { submitIntakeAction, type IntakeState } from "./actions";
import { INDUSTRIES, COMPANY_SIZES, SEGMENTS } from "./intake-schema";
import { trackEvent } from "@/lib/analytics";
import { SITE, OE_SURVEYS, OE_SURVEY_DEFAULT } from "@/lib/site";
import { CheckCircle2, Loader2, ArrowRight } from "lucide-react";

const initial: IntakeState = { status: "idle" };

function field(label: string, error?: string) {
  return (
    <div className="flex items-baseline justify-between gap-3">
      <span className="text-sm font-medium text-primary">{label}</span>
      {error ? (
        <span className="text-xs text-red-600" role="alert">
          {error}
        </span>
      ) : null}
    </div>
  );
}

export function IntakeForm() {
  const [state, formAction] = useFormState(submitIntakeAction, initial);

  // Conversion: fire once when the intake succeeds. Pushes to the GTM
  // dataLayer; GTM forwards to GA4 as the `generate_lead` key event.
  useEffect(() => {
    if (state.status === "ok") {
      trackEvent("generate_lead", {
        form: "contact",
        source: "zyosgroup.com-contact",
        segment: state.segment,
        opted_in: state.optIn,
      });
    }
  }, [state.status]);

  if (state.status === "ok") {
    const surveyUrl = OE_SURVEYS[state.segment] ?? OE_SURVEY_DEFAULT;
    return (
      <div className="rounded-lg border border-accent/30 bg-white p-8">
        <CheckCircle2 className="h-7 w-7 text-accent" aria-hidden />
        <h2 className="mt-4 text-2xl font-semibold text-primary tracking-tightish">
          Thanks, your note is in.
        </h2>
        <p className="mt-3 text-[15px] text-ink/80 leading-relaxed">
          We read every one of these and reply within one business day. If it is
          time-sensitive, grab a slot and we will talk sooner.
        </p>
        <a
          href={SITE.bookingUrl}
          target="_blank"
          rel="noopener"
          className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink"
        >
          Book a time now <ArrowRight aria-hidden className="h-4 w-4" />
        </a>
        <div className="mt-7 border-t border-border pt-5">
          <p className="text-[14px] text-ink/80 leading-relaxed">
            Want to skip ahead? Take the Opportunity Engine assessment and we will
            have your scored diagnostic ready when we talk.
          </p>
          <a
            href={surveyUrl}
            target="_blank"
            rel="noopener"
            className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-ink transition-colors"
          >
            Take the assessment <ArrowRight aria-hidden className="h-4 w-4" />
          </a>
        </div>
      </div>
    );
  }

  const errors = state.status === "error" ? state.errors : {};
  const values = state.status === "error" ? state.values ?? {} : {};

  return (
    <form action={formAction} className="space-y-6" noValidate>
      {/* Honeypot */}
      <input
        type="text"
        name="website"
        autoComplete="off"
        tabIndex={-1}
        aria-hidden
        className="hidden"
      />

      <div>
        {field("Which best describes you?", errors.segment)}
        <select
          name="segment"
          defaultValue={(values.segment as string) ?? ""}
          required
          className="mt-2 w-full rounded-md border border-border bg-white px-3 py-2.5 text-[15px] text-ink focus:border-primary"
        >
          <option value="" disabled>
            Pick the closest fit
          </option>
          {SEGMENTS.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        {field("Industry", errors.industry)}
        <select
          name="industry"
          defaultValue={(values.industry as string) ?? ""}
          required
          className="mt-2 w-full rounded-md border border-border bg-white px-3 py-2.5 text-[15px] text-ink focus:border-primary"
        >
          <option value="" disabled>
            Pick the closest match
          </option>
          {INDUSTRIES.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      </div>

      <div>
        {field("Company size", errors.companySize)}
        <select
          name="companySize"
          defaultValue={(values.companySize as string) ?? ""}
          required
          className="mt-2 w-full rounded-md border border-border bg-white px-3 py-2.5 text-[15px] text-ink focus:border-primary"
        >
          <option value="" disabled>
            Pick the closest range
          </option>
          {COMPANY_SIZES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        {field("Current bottleneck", errors.bottleneck)}
        <textarea
          name="bottleneck"
          defaultValue={values.bottleneck ?? ""}
          required
          rows={5}
          placeholder="Where revenue leaks, where labor compounds, where data sits idle, where decisions are slow. A few sentences is plenty."
          className="mt-2 w-full rounded-md border border-border bg-white px-3 py-2.5 text-[15px] text-ink focus:border-primary"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          {field("Your name", errors.name)}
          <input
            type="text"
            name="name"
            defaultValue={values.name ?? ""}
            required
            autoComplete="name"
            className="mt-2 w-full rounded-md border border-border bg-white px-3 py-2.5 text-[15px] text-ink focus:border-primary"
          />
        </div>
        <div>
          {field("Company", errors.company)}
          <input
            type="text"
            name="company"
            defaultValue={values.company ?? ""}
            required
            autoComplete="organization"
            className="mt-2 w-full rounded-md border border-border bg-white px-3 py-2.5 text-[15px] text-ink focus:border-primary"
          />
        </div>
      </div>

      <div>
        {field("Work email", errors.email)}
        <input
          type="email"
          name="email"
          defaultValue={values.email ?? ""}
          required
          autoComplete="email"
          className="mt-2 w-full rounded-md border border-border bg-white px-3 py-2.5 text-[15px] text-ink focus:border-primary"
        />
      </div>

      <label className="flex items-start gap-3 rounded-md border border-border bg-surface p-4 cursor-pointer">
        <input
          type="checkbox"
          name="optIn"
          defaultChecked
          className="mt-0.5 h-4 w-4 rounded border-border text-primary focus:ring-primary"
        />
        <span className="text-[14px] text-ink/85 leading-relaxed">
          Also send me a link to the Opportunity Engine assessment for my segment,
          so I can get a scored diagnostic ahead of our conversation.
        </span>
      </label>

      <SubmitButton />
      <p className="text-xs text-subtle">
        We&apos;ll only use this to reply to you. No newsletter sign-up, no shared
        lists.
      </p>
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-white hover:bg-ink transition-colors disabled:opacity-60"
    >
      {pending ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
          Sending…
        </>
      ) : (
        <>Send message</>
      )}
    </button>
  );
}

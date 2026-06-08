// Client-side analytics: push custom events to the GTM dataLayer. GTM is the
// single tag manager (container GTM-5KJRM3S, loaded in TrackingScripts). GA4
// is configured INSIDE the container, so we do not add a second gtag here
// (that would double-count page_views). To turn a dataLayer event into a GA4
// conversion: in GTM, add a GA4 Event tag triggered by the custom event name
// (e.g. `generate_lead`) and mark it as a key event in GA4.

type DataLayerObject = Record<string, unknown>;

declare global {
  interface Window {
    dataLayer?: DataLayerObject[];
    fbq?: (...args: unknown[]) => void;
  }
}

// Map our internal event names to Meta Pixel events so the same conversion
// points feed both GA4 (via GTM dataLayer) and Meta ads optimization.
const META_EVENTS: Record<string, { type: "track" | "trackCustom"; name: string }> = {
  generate_lead: { type: "track", name: "Lead" },
  begin_assessment: { type: "trackCustom", name: "BeginAssessment" },
};

export function trackEvent(event: string, params: DataLayerObject = {}): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });

  // Forward key conversions to the Meta Pixel (if loaded).
  const meta = META_EVENTS[event];
  if (meta && typeof window.fbq === "function") {
    window.fbq(meta.type, meta.name, params);
  }
}

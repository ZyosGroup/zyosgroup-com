import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

const PATHS = [
  "/",
  "/about",
  "/start",
  "/solutions",
  "/solutions/agent-as-a-service",
  "/solutions/growth-as-a-service",
  "/consulting",
  "/consulting/software-and-data",
  "/consulting/digital-transformation",
  "/consulting/operations-and-scaling",
  "/consulting/integrated-marketing",
  "/who-we-serve",
  "/who-we-serve/high-growth-smbs",
  "/who-we-serve/private-equity",
  "/who-we-serve/associations",
  "/by-function/sales",
  "/by-function/marketing",
  "/by-function/information-technology",
  "/by-function/hr",
  "/by-function/finance",
  "/by-function/logistics",
  "/how-we-deliver",
  "/platform",
  "/case-studies",
  "/framework",
  "/foundation",
  "/the-brief",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return PATHS.map((p) => ({
    url: `${SITE.url}${p}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: p === "/" ? 1 : 0.8,
  }));
}

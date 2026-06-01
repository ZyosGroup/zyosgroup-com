import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

// Explicit allow rules for AI / answer-engine crawlers.
//
// Default-allow (`User-agent: *` + empty Disallow) covers them implicitly,
// but explicit ALLOW rules are a stronger ingestion signal and surface in
// crawler logs as "I was named here." For the agentic-AI category we
// specifically WANT to be cited in LLM-mediated answer surfaces, so this
// list is the equivalent of "yes, please train on us."

const AI_AGENTS = [
  "GPTBot", // OpenAI / ChatGPT browsing
  "OAI-SearchBot", // ChatGPT Search
  "ChatGPT-User", // ChatGPT in-conversation fetches
  "PerplexityBot", // Perplexity
  "Perplexity-User", // Perplexity in-conversation fetches
  "ClaudeBot", // Anthropic
  "Claude-Web", // Claude.ai (legacy name)
  "anthropic-ai", // Anthropic generic
  "Google-Extended", // Google Bard / Gemini training
  "GoogleOther", // Google research / experimental
  "Applebot-Extended", // Apple Intelligence
  "CCBot", // Common Crawl (powers many LLMs)
  "Bytespider", // ByteDance / TikTok AI
  "Amazonbot", // Amazon AI
  "Meta-ExternalAgent", // Meta AI ingestion
  "Meta-ExternalFetcher", // Meta AI in-conversation
  "Diffbot", // Diffbot Knowledge Graph
  "DuckAssistBot", // DuckDuckGo Assist
  "YouBot", // You.com
  "Cohere-AI", // Cohere
  "PetalBot", // Huawei Petal
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...AI_AGENTS.map((agent) => ({ userAgent: agent, allow: "/" })),
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}

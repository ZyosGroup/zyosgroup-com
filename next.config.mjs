/** @type {import('next').NextConfig} */

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  // 301 map: legacy S3/Gatsby zyosgroup.com URLs → redesign IA. Preserves any
  // link equity + avoids 404s at cutover. Old site ranked for ~0, so risk is
  // low, but the named paths below are the full prior sitemap.
  async redirects() {
    const R = (source, destination) => ({ source, destination, permanent: true });
    return [
      // Innovation-as-Service → Consulting
      R("/services/innovation-as-service", "/consulting"),
      R("/services/innovation-as-service/digital-transformation-strategy", "/consulting/digital-transformation"),
      R("/services/innovation-as-service/managed-it-service", "/consulting/software-and-data"),
      R("/services/innovation-as-service/cloud-services", "/consulting/software-and-data"),
      R("/services/innovation-as-service/cybersecurity-services", "/consulting/software-and-data"),
      R("/services/innovation-as-service/bpm-and-okr-services", "/consulting/operations-and-scaling"),
      R("/services/innovation-as-service/process-optimization-services", "/consulting/operations-and-scaling"),
      // Customer-Growth-as-Service → Solutions (GaaS) + Integrated Marketing
      R("/services/customer-growth-as-service", "/solutions/growth-as-a-service"),
      R("/services/customer-growth-as-service/web-development-services", "/consulting/software-and-data"),
      R("/services/customer-growth-as-service/seo-services", "/consulting/integrated-marketing"),
      R("/services/customer-growth-as-service/paid-marketing-services", "/consulting/integrated-marketing"),
      R("/services/customer-growth-as-service/content-marketing-services", "/consulting/integrated-marketing"),
      R("/services/customer-growth-as-service/ecommerce-solution-services", "/consulting/software-and-data"),
      // Industries → Who we serve
      R("/industries", "/who-we-serve"),
      R("/industries/general-Services", "/who-we-serve/high-growth-smbs"),
      R("/industries/manufacturing", "/who-we-serve/high-growth-smbs"),
      R("/industries/legal", "/who-we-serve/associations"),
      R("/industries/healthcare", "/who-we-serve/associations"),
      // Portfolio + Case study → Case studies
      R("/portfolio", "/case-studies"),
      R("/portfolio/:slug", "/case-studies"),
      R("/case-study", "/case-studies"),
      // Misc
      R("/about-us", "/about"),
      R("/contact-us", "/start"),
    ];
  },
};

export default nextConfig;

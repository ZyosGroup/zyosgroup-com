import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{ts,tsx,mdx}",
    "./src/lib/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Aligned to canonical zyos-brand skill (navy #1569ac + cyan #48c1eb)
        // so the site matches the logo wordmark + icon exactly.
        bg: "#FFFFFF",       // page base (white)
        surface: "#F1F6FB",  // tinted band — perceptible cool/brand wash for section rhythm
        "surface-deep": "#E8F1F9", // stronger tint for cards nested on surface
        ink: "#0F1729",      // body text (dark, not pure black)
        primary: "#1569ac",  // brand navy — headings, CTAs, logo "ZYOS"
        "primary-deep": "#0d4a7a", // darker navy for hero/footer fills + hover
        accent: "#48c1eb",   // brand cyan — accents, logo nodes, "GROUP"
        "accent-vivid": "#31c6f6", // hover/focus/active only
        subtle: "#676869",   // brand neutral gray for muted text
        border: "#E2E8F0",
      },
      fontFamily: {
        sans: ["var(--font-inter-tight)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      maxWidth: {
        prose: "70ch",
        container: "1200px",
      },
      letterSpacing: {
        tightish: "-0.015em",
      },
    },
  },
  plugins: [],
};

export default config;

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
        // Locked design tokens — research §8
        bg: "#FAFAF9",       // off-white cream
        surface: "#FFFFFF",
        ink: "#0A0E1F",
        primary: "#0F1B3F",  // Zyos navy
        accent: "#22D3EE",   // Zyos cyan (single-token use)
        subtle: "#64748B",
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

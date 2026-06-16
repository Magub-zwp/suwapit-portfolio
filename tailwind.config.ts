import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Coffee Palette — ผูกกับ CSS variables
        bg: "var(--bg)",
        surface: "var(--bg-surface)",
        dark: "var(--bg-dark)",
        "dark-2": "var(--bg-dark-2)",
        text: {
          DEFAULT: "var(--text)",
          muted: "var(--text-muted)",
          light: "var(--text-light)",
          subtle: "var(--text-subtle)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          dark: "var(--accent-dark)",
          gold: "var(--accent-gold)",
        },
        border: {
          DEFAULT: "var(--border)",
          dark: "var(--border-dark)",
        },
      },
      fontFamily: {
        serif:  ["Cormorant Garamond", "Georgia", "serif"],
        sans:   ["DM Sans", "system-ui", "sans-serif"],
        mono:   ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        "display": ["6rem", { lineHeight: "1.0", letterSpacing: "-0.02em" }],
        "hero":    ["4rem", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        "title":   ["2.5rem", { lineHeight: "1.15" }],
        "heading": ["1.75rem", { lineHeight: "1.2" }],
      },
      spacing: {
        "section": "var(--space-16)",
      },
      
      animation: {
        "marquee-left":  "marquee-left 30s linear infinite",
        "marquee-right": "marquee-right 30s linear infinite",
        "fade-up":       "fade-up 0.6s ease-out forwards",
        "smoke":         "smoke 3s linear infinite",
        "liquid":        "liquid 5000ms linear 3500ms infinite normal both",
      },
      keyframes: {
        "marquee-left": {
          "0%":   { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-right": {
          "0%":   { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

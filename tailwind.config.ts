/**
 * Tailwind v4 — content paths only.
 * Theme tokens (colors, fonts, animations) live in:
 *   src/app/globals.css -> @theme { ... }
 *
 * In Tailwind v4, configuration is CSS-first.
 * @see https://tailwindcss.com/docs/theme
 */
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};

export default config;

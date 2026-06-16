import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Fonts — next/font injects CSS vars that @theme in globals.css references
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Suwapit Ponkul — Fullstack Developer",
    template: "%s | Suwapit Ponkul",
  },
  description:
    "Portfolio of Suwapit Ponkul — Fullstack Developer with experience in React, Next.js, and modern web technologies.",
  keywords: ["fullstack developer", "react", "next.js", "typescript", "portfolio"],
  authors: [{ name: "Suwapit Ponkul" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Suwapit Ponkul — Fullstack Developer",
    description: "Portfolio of Suwapit Ponkul — Fullstack Developer",
    siteName: "Suwapit Ponkul",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suwapit Ponkul — Fullstack Developer",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fontVars = [cormorant.variable, dmSans.variable, jetbrains.variable].join(" ");
  return (
    <html lang="en" className={`${fontVars} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

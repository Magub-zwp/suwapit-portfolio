import type { Metadata } from "next";
import { Nunito, JetBrains_Mono, Prompt } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/i18n/LanguageContext";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

const prompt = Prompt({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-prompt",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Suwapit Ponkul - Junior Developer",
    template: "%s | Suwapit Ponkul",
  },
  description:
    "Portfolio of Suwapit Ponkul - Junior Developer with experience in React, Next.js, and modern web technologies.",
  keywords: ["junior developer", "react", "next.js", "typescript", "portfolio"],
  authors: [{ name: "Suwapit Ponkul" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Suwapit Ponkul - Junior Developer",
    description: "Portfolio of Suwapit Ponkul - Junior Developer",
    siteName: "Suwapit Ponkul",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suwapit Ponkul - Junior Developer",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fonts = [nunito.variable, jetbrains.variable, prompt.variable].join(" ");
  return (
    <html lang="en" className={fonts + " antialiased"}>
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}

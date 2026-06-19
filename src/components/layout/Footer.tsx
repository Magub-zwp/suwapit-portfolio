"use client";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-warm">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-3">
        <span className="font-serif text-dark text-sm tracking-wide">
          Suwapit Ponkul
        </span>
        <span className="text-subtle text-xs tracking-wide">
          {new Date().getFullYear()} &mdash; {t.footer.builtWith}
        </span>
      </div>
    </footer>
  );
}

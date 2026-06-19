"use client";
import { useLanguage } from "@/i18n/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  const facts = t.about.facts;

  return (
    <section id="about" className="py-20 md:py-32 bg-surface">
      <div className="max-w-5xl mx-auto px-6">
        <p className="font-sans text-xs tracking-widest uppercase text-muted mb-4">{t.about.label}</p>
        <h2
          className="font-serif text-dark leading-tight mb-12 md:mb-16"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
        >
          {t.about.headingLine1}
          <br />
          {t.about.headingLine2}
        </h2>
        <div className="grid grid-cols-1 gap-10 md:gap-12 md:grid-cols-2">
          <div className="space-y-5 font-sans text-muted leading-relaxed">
            {t.about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-px bg-border">
            {facts.map((f) => (
              <div key={f.label} className="bg-surface p-5 md:p-6 flex flex-col gap-2">
                <span className="font-sans text-xs tracking-widest uppercase text-subtle">
                  {f.label}
                </span>
                <span className="font-sans text-dark text-base leading-snug whitespace-pre-line">
                  {f.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Experience() {
  const { t } = useLanguage();
  const experiences = t.experience.items;

  return (
    <section id="experience" className="py-20 md:py-32 bg-surface">
      <div className="max-w-5xl mx-auto px-6">
        <p className="font-sans text-xs tracking-widest uppercase text-muted mb-4">{t.experience.label}</p>
        <h2
          className="font-serif text-dark leading-tight mb-12 md:mb-16"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
        >
          {t.experience.heading}
        </h2>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border md:left-[180px]" />
          <div className="flex flex-col gap-10 md:gap-12">
            {experiences.map((exp) => (
              <div key={exp.id} className="flex flex-col gap-3 md:flex-row md:gap-12">
                <div className="md:w-[180px] md:text-right flex-shrink-0 pl-6 md:pl-0">
                  <span className="font-sans text-sm text-subtle">{exp.period}</span>
                </div>
                <div className="relative pl-6 md:pl-8 flex-1">
                  <div className="absolute left-[-4.5px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent" />
                  <h3 className="font-serif text-dark text-xl mb-1">{exp.role}</h3>
                  <p className="font-sans text-sm text-accent mb-3">{exp.company}</p>
                  <p className="font-sans text-sm text-muted leading-relaxed mb-4">{exp.description}</p>
                  <ul className="flex flex-col gap-2">
                    {exp.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 font-sans text-sm text-muted">
                        <span className="text-accent mt-1 flex-shrink-0">-</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

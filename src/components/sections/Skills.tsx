"use client";
import { skills } from "@/data/skills";
import { useLanguage } from "@/i18n/LanguageContext";

const CATEGORY_KEYS = ["frontend", "backend", "tools"] as const;
type CategoryKey = typeof CATEGORY_KEYS[number];

export default function Skills() {
  const { t } = useLanguage();
  const CATEGORIES = CATEGORY_KEYS.map((key) => ({
    key,
    label: t.skills.categories[key],
  }));
  const track = [...skills, ...skills, ...skills, ...skills];
  const row1 = track.filter((_, i) => i % 2 === 0);
  const row2 = track.filter((_, i) => i % 2 === 1);

  const grouped = CATEGORY_KEYS.reduce<Record<CategoryKey, typeof skills>>(
    (acc, key) => {
      acc[key] = skills.filter((s) => s.category === key);
      return acc;
    },
    { frontend: [], backend: [], tools: [] }
  );

  return (
    <section id="skills" className="py-20 md:py-32 bg-dark overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 mb-12 md:mb-16">
        <p className="font-sans text-xs tracking-widest uppercase text-subtle mb-4">{t.skills.label}</p>
        <h2
          className="font-serif text-cream leading-tight"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
        >
          {t.skills.heading}
        </h2>
      </div>
      <div className="mb-6 overflow-hidden">
        <div
          className="flex gap-4 w-max"
          style={{ animation: "marquee-left 40s linear infinite" }}
        >
          {row1.map((s, i) => (
            <span
              key={i}
              className="flex-shrink-0 px-5 py-2 border border-dark-2 text-subtle font-sans text-sm tracking-wide"
            >
              {s.name}
            </span>
          ))}
        </div>
      </div>
      <div className="mb-12 md:mb-16 overflow-hidden">
        <div
          className="flex gap-4 w-max"
          style={{ animation: "marquee-right 36s linear infinite" }}
        >
          {row2.map((s, i) => (
            <span
              key={i}
              className="flex-shrink-0 px-5 py-2 border border-dark-2 text-subtle font-sans text-sm tracking-wide"
            >
              {s.name}
            </span>
          ))}
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 gap-10 md:gap-12 md:grid-cols-3">
        {CATEGORIES.map(({ key, label }) => (
          <div key={key}>
            <p className="font-sans text-xs tracking-widest uppercase text-subtle mb-5 pb-3 border-b border-dark-2">
              {label}
            </p>
            <div className="flex flex-wrap gap-2">
              {grouped[key].map((s) => (
                <span
                  key={s.name}
                  className="px-3 py-1.5 bg-dark-2 text-muted font-sans text-sm"
                >
                  {s.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

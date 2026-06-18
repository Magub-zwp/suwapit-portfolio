import { skills } from "@/data/skills";

const CATEGORIES = [
  { key: "frontend", label: "Frontend" },
  { key: "backend",  label: "Backend"  },
  { key: "tools",    label: "Tools"    },
] as const;

export default function Skills() {
  const track = [...skills, ...skills, ...skills, ...skills];

  const row1 = track.filter((_, i) => i % 2 === 0);
  const row2 = track.filter((_, i) => i % 2 === 1);

  return (
    <section id="skills" className="py-32 bg-dark overflow-hidden">

      {/* Heading */}
      <div className="max-w-5xl mx-auto px-6 mb-16">
        <p className="font-sans text-xs tracking-widest uppercase text-subtle mb-4">
          Skills
        </p>
        <h2
          className="font-serif text-cream leading-tight"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
        >
          Technologies I work with
        </h2>
      </div>

      {/* Marquee row 1 - left */}
      <div className="mb-4">
        <div
          className="flex gap-4 animate-marquee-left"
          style={{ width: "max-content" }}
        >
          {row1.map((s, i) => (
            <span
              key={i}
              className="px-5 py-2 border border-border-dark font-sans text-sm text-subtle tracking-wide whitespace-nowrap"
            >
              {s.name}
            </span>
          ))}
        </div>
      </div>

      {/* Marquee row 2 - right */}
      <div className="mb-16">
        <div
          className="flex gap-4 animate-marquee-right"
          style={{ width: "max-content" }}
        >
          {row2.map((s, i) => (
            <span
              key={i}
              className="px-5 py-2 border border-border-dark font-sans text-sm text-gold tracking-wide whitespace-nowrap"
            >
              {s.name}
            </span>
          ))}
        </div>
      </div>

      {/* Category grid */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {CATEGORIES.map(({ key, label }) => (
            <div key={key}>
              <p className="font-sans text-xs tracking-widest uppercase text-subtle mb-4">
                {label}
              </p>
              <div className="flex flex-wrap gap-2">
                {skills
                  .filter((s) => s.category === key)
                  .map((s) => (
                    <span
                      key={s.name}
                      className="px-3 py-1 bg-dark-2 font-sans text-sm text-cream"
                    >
                      {s.name}
                    </span>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

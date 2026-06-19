import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-32 bg-surface">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <p className="font-sans text-xs tracking-widest uppercase text-muted mb-4">
          Experience
        </p>
        <h2
          className="font-serif text-dark leading-tight mb-16"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
        >
          Where I have worked.
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-16 pl-10">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative">
                {/* Dot */}
                <div className="absolute -left-10 top-1 w-2 h-2 rounded-full bg-accent mt-1" style={{ marginLeft: "-4.5px" }} />

                {/* Period */}
                <p className="font-sans text-xs tracking-widest uppercase text-subtle mb-2">
                  {exp.period}
                </p>

                {/* Role + Company */}
                <h3 className="font-serif text-dark text-2xl mb-1">
                  {exp.role}
                </h3>
                <p className="font-sans text-sm text-accent tracking-wide mb-4">
                  {exp.company}
                </p>

                {/* Description */}
                <p className="font-sans text-muted leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2">
                  {exp.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 font-sans text-sm text-muted">
                      <span className="text-accent mt-0.5">-</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

import { projects } from "@/data/projects";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-32">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <p className="font-sans text-xs tracking-widest uppercase text-muted mb-4">
          Projects
        </p>
        <h2
          className="font-serif text-dark leading-tight mb-16"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
        >
          Things I have built.
        </h2>

        {/* Featured — 2 col */}
        <div className="grid grid-cols-1 gap-px bg-border mb-px md:grid-cols-2">
          {featured.map((p) => (
            <div key={p.id} className="bg-warm p-8 flex flex-col gap-4">
              <h3 className="font-serif text-dark text-2xl">{p.title}</h3>
              <p className="font-sans text-muted text-sm leading-relaxed flex-1">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="font-sans text-xs text-subtle border border-border px-2 py-0.5">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 pt-2">
                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-xs tracking-widest uppercase text-accent hover:text-accent-dark transition-colors"
                  >
                    Live
                  </a>
                )}
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-xs tracking-widest uppercase text-muted hover:text-dark transition-colors"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Rest — full width rows */}
        <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-2">
          {rest.map((p) => (
            <div key={p.id} className="bg-warm p-8 flex flex-col gap-3">
              <h3 className="font-serif text-dark text-xl">{p.title}</h3>
              <p className="font-sans text-muted text-sm leading-relaxed flex-1">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="font-sans text-xs text-subtle border border-border px-2 py-0.5">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 pt-1">
                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-xs tracking-widest uppercase text-accent hover:text-accent-dark transition-colors"
                  >
                    Live
                  </a>
                )}
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-xs tracking-widest uppercase text-muted hover:text-dark transition-colors"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

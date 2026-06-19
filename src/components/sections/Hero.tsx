import StatusBadge from "@/components/ui/StatusBadge";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center">
      <div className="max-w-5xl mx-auto px-6 w-full py-16 md:py-24">
        <div className="mb-8 md:mb-10">
          <StatusBadge label="Open to work" />
        </div>
        <h1
          className="font-serif text-dark leading-none mb-6 md:mb-8"
          style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
        >
          Suwapit<br />Ponkul
        </h1>
        <div className="flex items-center gap-4 mb-6 md:mb-8">
          <div className="h-px w-12 bg-accent flex-shrink-0" />
          <span className="font-sans text-sm tracking-widest uppercase text-muted">
            Junior Developer
          </span>
        </div>
        <p className="font-sans text-muted text-base md:text-lg max-w-md leading-relaxed mb-10 md:mb-12">
          A 4th-year Computer Science student with real-world IT experience, who genuinely enjoys turning code into working web applications.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="px-8 py-3 bg-dark text-cream font-sans text-sm tracking-widest uppercase transition-colors hover:bg-dark-2"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-border text-muted font-sans text-sm tracking-widest uppercase transition-colors hover:border-accent hover:text-accent"
          >
            Contact
          </a>
        </div>
      </div>
      <div className="flex justify-center pb-8 md:pb-10">
        <div className="flex flex-col items-center gap-2 text-subtle">
          <span className="font-sans text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 md:h-10 bg-border" />
        </div>
      </div>
    </section>
  );
}

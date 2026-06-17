export default function About() {
  const facts = [
    { label: "Current Role", value: "IT Officer, BaanTonpao Subdistrict Hospital" },
    { label: "Education", value: "2022-Present\nB.Sc. Computer Science\nRajabhat University, \nGPA 3.22 | Weekend Program (Sat-Sun)" },
    { label: "Focus", value: "Junior Web Developer" },
    { label: "Based in", value: "Chiang Mai, Thailand" },
  ];

  return (
    <section id="about" className="py-32 bg-surface">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <p className="font-sans text-xs tracking-widest uppercase text-muted mb-4">
          About
        </p>
        <h2
          className="font-serif text-dark leading-tight mb-16"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
        >
          A developer who builds
          <br />
          <em>for the real world.</em>
        </h2>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">

          {/* Story */}
          <div className="space-y-5 font-sans text-muted leading-relaxed">
            <p>
              I started in IT supporting the day-to-day operations of a
              subdistrict hospital - managing patient data systems, MySQL
              databases, and FreeBSD servers. That ground-level experience
              taught me to build things that actually work under pressure.
            </p>
            <p>
              While working, I picked up web development on the side - first
              PHP, then JavaScript, then the modern React and Next.js
              ecosystem. My thesis project, GaragePlus, is a full PWA with
              Firebase and real-time sync. My Queue Management System runs
              live in a hospital environment.
            </p>
            <p>
              Still studying and still learning - but the projects are real,
              the code is shipped, and I am ready to grow as a junior
              developer on a team that builds things that matter.
            </p>
          </div>

          {/* Quick facts - 2x2 stacked grid */}
          <div className="grid grid-cols-2 gap-px bg-border">
            {facts.map((f) => (
              <div key={f.label} className="bg-surface p-6 flex flex-col gap-2">
                <span className="font-sans text-xs tracking-widest uppercase text-subtle">
                  {f.label}
                </span>
                <span className="font-serif text-dark text-lg leading-snug whitespace-pre-line">
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
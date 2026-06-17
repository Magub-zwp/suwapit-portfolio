export default function Footer() {
  return (
    <footer className="border-t border-border bg-warm">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-3">
        <span className="font-serif text-dark text-sm tracking-wide">
          Suwapit Ponkul
        </span>
        <span className="text-subtle text-xs tracking-wide">
          {new Date().getFullYear()} &mdash; Built with Next.js &amp; Tailwind CSS
        </span>
      </div>
    </footer>
  );
}

"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import StatusBadge from "@/components/ui/StatusBadge";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useLanguage } from "@/i18n/LanguageContext";

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 72;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, t, toggleLang } = useLanguage();

  const LINKS = [
    { href: "about",      label: t.nav.links.about      },
    { href: "skills",     label: t.nav.links.skills     },
    { href: "experience", label: t.nav.links.experience },
    { href: "projects",   label: t.nav.links.projects   },
    { href: "contact",    label: t.nav.links.contact    },
  ];

  const activeId = useActiveSection(LINKS.map((l) => l.href));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = (id: string) =>
    "text-sm tracking-wide transition-colors cursor-pointer " +
    (activeId === id ? "text-accent" : "text-muted hover:text-dark");

  return (
    <header
      className={
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 " +
        (scrolled
          ? "bg-warm/[0.96] backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent")
      }
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        <Link
          href="/"
          className="font-serif text-dark text-[1.1rem] tracking-wide hover:text-accent transition-colors"
        >
          Suwapit Ponkul
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-7">
          {LINKS.map(({ href, label }) => (
            <button
              key={href}
              onClick={() => scrollTo(href)}
              className={linkClass(href)}
            >
              {label}
            </button>
          ))}
          <StatusBadge label={t.nav.status} />
          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            className="text-xs tracking-widest uppercase text-muted hover:text-accent transition-colors border border-border px-3 py-1.5"
          >
            {lang === "th" ? "EN" : "TH"}
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 flex flex-col gap-[5px]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className={"block w-5 h-px bg-dark origin-center transition-transform duration-200 " + (open ? "rotate-45 translate-y-[6px]" : "")} />
          <span className={"block w-5 h-px bg-dark transition-opacity duration-200 " + (open ? "opacity-0" : "")} />
          <span className={"block w-5 h-px bg-dark origin-center transition-transform duration-200 " + (open ? "-rotate-45 -translate-y-[6px]" : "")} />
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div className={"md:hidden overflow-hidden transition-all duration-300 bg-warm " + (open ? "max-h-80 border-t border-border" : "max-h-0")}>
        <div className="px-6 py-5 flex flex-col gap-5">
          {LINKS.map(({ href, label }) => (
            <button
              key={href}
              onClick={() => { scrollTo(href); setOpen(false); }}
              className={linkClass(href)}
            >
              {label}
            </button>
          ))}
          <StatusBadge label={t.nav.status} />
          <button
            onClick={() => { toggleLang(); setOpen(false); }}
            aria-label="Toggle language"
            className="self-start text-xs tracking-widest uppercase text-muted hover:text-accent transition-colors border border-border px-3 py-1.5"
          >
            {lang === "th" ? "EN" : "TH"}
          </button>
        </div>
      </div>
    </header>
  );
}

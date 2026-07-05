"use client";
import Image from "next/image";
import StatusBadge from "@/components/ui/StatusBadge";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="lg:min-h-screen flex flex-col">
      <div className="flex-1 max-w-6xl mx-auto px-6 w-full py-16 lg:py-0">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="md:col-start-1 md:row-start-1 z-0 md:mt-14 lg:mt-20">
            <div className="mb-8 md:mb-10">
              <StatusBadge label={t.nav.status} />
            </div>
            <h1
              className="font-serif text-dark leading-none mb-6 md:mb-8"
              style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}
            >
              {t.hero.nameLine1}<br />{t.hero.nameLine2}
            </h1>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-8 py-3 bg-dark text-cream font-sans text-sm tracking-widest uppercase transition-colors hover:bg-dark-2"
              >
                {t.hero.ctaProjects}
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border border-border text-muted font-sans text-sm tracking-widest uppercase transition-colors hover:border-accent hover:text-accent"
              >
                {t.hero.ctaContact}
              </a>
            </div>
          </div>

          <div className="md:col-start-2 md:row-start-1 z-10 md:mt-36 lg:mt-44 lg:ml-12">
            <div className="lg:hidden relative w-40 sm:w-48 md:w-56 aspect-[513/1171] mb-6 md:ml-5">
              <Image
                src="/images/me.png"
                alt="Suwapit Ponkul"
                fill
                priority
                sizes="224px"
                className="object-contain object-bottom"
              />
            </div>

            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <div className="h-px w-12 bg-accent flex-shrink-0" />
              <span className="font-sans text-sm tracking-widest uppercase text-muted">
                {t.hero.role}
              </span>
            </div>
            <p className="font-sans text-muted text-base md:text-lg max-w-lg leading-relaxed mb-10 md:mb-12">
              {t.hero.bio}
            </p>
          </div>

          <div className="hidden lg:block lg:col-start-1 lg:col-span-2 lg:row-start-1 z-10 justify-self-start relative w-[27%] aspect-[513/1171] ml-[30%] lg:mt-[13px]">
            <Image
              src="/images/me.png"
              alt="Suwapit Ponkul"
              fill
              priority
              sizes="384px"
              className="object-contain object-bottom"
              id="image-me"
            />
          </div>
        </div>

      </div>
      <div className="flex justify-center pb-8 md:pb-10">
        <div className="flex flex-col items-center gap-2 text-subtle">
          <span className="font-sans text-xs tracking-widest uppercase">{t.hero.scroll}</span>
          <div className="w-px h-8 md:h-10 bg-border" />
        </div>
      </div>
    </section>
  );
}

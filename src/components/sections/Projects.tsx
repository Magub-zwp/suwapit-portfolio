"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageContext";
import type { ProjectItem } from "@/i18n/types";


const PROJECT_IMAGES: Record<string, string[]> = {
  "queue-system": ["/images/projects/queue/opd.jpg","/images/projects/queue/dis.jpg","/images/projects/queue/doc.jpg","/images/projects/queue/nurse.jpg","/images/projects/queue/arc.jpg"],
  "garage-plus": ["/images/projects/179/login.png","/images/projects/179/home.png","/images/projects/179/book.png","/images/projects/179/L_admac.png","/images/projects/179/L_adpro.png"],
  "firstproject": ["/images/projects/task/tm-index1 .png","/images/projects/task/nav-2.png","/images/projects/task/login-3.png","/images/projects/task/dash-4.png","/images/projects/task/task5.png","/images/projects/task/project-5.png"],
  "jorddeepeekhum": ["/images/projects/jorddee/mainpage.png","/images/projects/jorddee/loginpage.png","/images/projects/jorddee/addcarpage.png","/images/projects/jorddee/bookingpage.png","/images/projects/jorddee/pay.png","/images/projects/jorddee/receipt.png"],
  "zwpweb-trainai": ["/images/projects/zwpweb-trainai/pubpage1.png","/images/projects/zwpweb-trainai/login.png","/images/projects/zwpweb-trainai/admin dashboard.png","/images/projects/zwpweb-trainai/category.png"],
};

/* ============================================================
   [ส่วนที่ 2] การ์ดโปรเจค (สไตล์ Porsche: รูปใหญ่ + ชื่อลอยบนรูป)
   ============================================================ */
function ProjectCard({
  p,
  liveLabel,
  githubLabel,
}: {
  p: ProjectItem;
  liveLabel: string;
  githubLabel: string;
}) {
  const images = PROJECT_IMAGES[p.id] ?? [];
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const [live, setLive] = useState(false); // true = แสดง live iframe แทนรูป (เฉพาะตอน hover และมี p.url)
  const primaryLink = p.url ?? p.github; // ลูกศร Live ก่อน ไม่มีใช้ GitHub

  useEffect(() => {
    if (images.length <= 1 || paused) return;
    const timer = setInterval(() => {
      setIdx((i) => (i + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [images.length, paused]);

  return (
    <div className="group rounded-2xl overflow-hidden bg-dark flex flex-col">
      {/* ----------  พื้นที่รูปภาพ / live preview (ปรับความสูงที่ aspect-[16/10]) ---------- */}
      <div
        className="relative aspect-[16/10] overflow-hidden"
        onMouseEnter={() => {
          setPaused(true);
          if (p.url) setLive(true);
        }}
        onMouseLeave={() => {
          setPaused(false);
          setLive(false);
        }}
      >
        {live && p.url ? (
          /* ---------- Live iframe preview — โหลดเฉพาะตอน hover เพื่อไม่ให้หน้าหนักตอนแรก ---------- */
          <iframe
            src={p.url}
            title={`${p.title} live preview`}
            loading="lazy"
            className="absolute inset-0 w-full h-full border-0 pointer-events-none bg-cream"
            style={{ transform: "scale(1.15)", transformOrigin: "top left" }}
          />
        ) : images.length > 0 ? (
          <Image
            src={images[idx]}
            alt={p.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          /* placeholder ตอนยังไม่มีรูป — ลบ block นี้ทิ้งได้เมื่อใส่รูปครบ */
          <div className="absolute inset-0 bg-gradient-to-br from-dark-2 to-dark flex items-center justify-center">
            <span className="font-serif text-cream/15" style={{ fontSize: "5rem" }}>
              {p.title.charAt(0)}
            </span>
          </div>
        )}

        {/* เงาไล่ดำด้านบน-ล่าง ให้ตัวหนังสือบนรูปอ่านง่าย (ปิดตอนโชว์ live iframe จะได้เห็นชัด) */}
        {!live && (
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 pointer-events-none" />
        )}

        {/* ---------- [2.3] badge มุมล่างซ้าย (ตอนนี้โชว์ tag ตัวแรก หรือ "LIVE" ตอน hover) ---------- */}
        <span className="absolute bottom-4 left-4 font-sans text-xs text-cream bg-dark border border-accent/40 rounded-full px-3 py-1">
          {live ? "● LIVE" : p.tags[0]}
        </span>

        {/* ---------- [2.4] จุดสลับรูป (โผล่เฉพาะตอนมีมากกว่า 1 รูป และไม่ได้โชว์ live) ---------- */}
        {!live && images.length > 1 && (
          <div className="absolute bottom-4 inset-x-0 flex justify-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`image ${i + 1}`}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === idx ? "bg-cream" : "bg-cream/30 hover:bg-cream/60"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* ---------- [2.5] แถบล่าง: ชื่อ + คำอธิบาย + ปุ่มลูกศร ---------- */}
      <div className="flex items-center justify-between gap-4 p-6">
        <div className="flex-1">
          {/* ---------- [2.2] ชื่อโปรเจค (ย้ายลงมาอยู่แถบล่าง) ---------- */}
          <h3 className="font-serif text-cream text-xl md:text-2xl tracking-wide mb-2 uppercase">
            {p.title}
          </h3>
          <p className="font-sans text-cream/70 text-sm leading-relaxed">{p.description}</p>
          {/* ลิงก์ Live / GitHub ตัวเล็ก — ไม่อยากได้ลบ block นี้ได้ */}
          <div className="flex gap-4 pt-4">
            {p.url && (
              <a href={p.url} target="_blank" rel="noopener noreferrer"
                className="font-sans text-xs tracking-widest uppercase text-accent hover:text-cream transition-colors">
                {liveLabel}
              </a>
            )}
            {p.github && (
              <a href={p.github} target="_blank" rel="noopener noreferrer"
                className="font-sans text-xs tracking-widest uppercase text-cream/50 hover:text-cream transition-colors">
                {githubLabel}
              </a>
            )}
          </div>
        </div>

        {/* ปุ่มวงกลมลูกศร → ไปลิงก์หลักของโปรเจค */}
        {primaryLink && (
          <a
            href={primaryLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={p.title}
            className="shrink-0 w-10 h-10 rounded-full border border-accent/40 flex items-center justify-center text-cream hover:bg-accent hover:border-accent transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}

/* ============================================================
   [ส่วนที่ 3] Section หลัก — หัวข้อ + grid การ์ด
   ============================================================ */
export default function Projects() {
  const { t } = useLanguage();
  const projects = t.projects.items;
  const featuredItems = projects.filter((p) => p.featured);
  const moreItems = projects.filter((p) => !p.featured);
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="projects" className="py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* ---------- [3.1] หัวข้อ section (เหมือนเดิม) ---------- */}
        <p className="font-sans text-xs tracking-widest uppercase text-muted mb-4">{t.projects.label}</p>
        <h2
          className="font-serif text-dark leading-tight mb-12 md:mb-16"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
        >
          {t.projects.heading}
        </h2>

        {/* ---------- [3.2] grid การ์ด featured (ปรับจำนวนคอลัมน์ที่ md:grid-cols-2) ---------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredItems.map((p) => (
            <ProjectCard key={p.id} p={p} liveLabel={t.projects.live} githubLabel={t.projects.github} />
          ))}
        </div>

        {/* ---------- [3.3] ผลงานที่ไม่ได้โชว์เป็นหลัก — ซ่อนไว้หลังปุ่ม "ดูผลงานเพิ่มเติม" ---------- */}
        {moreItems.length > 0 && (
          <>
            {showMore && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {moreItems.map((p) => (
                  <ProjectCard key={p.id} p={p} liveLabel={t.projects.live} githubLabel={t.projects.github} />
                ))}
              </div>
            )}

            <div className="flex justify-center mt-10">
              <button
                onClick={() => setShowMore((v) => !v)}
                className="font-sans text-xs tracking-widest uppercase text-accent border border-accent/40 rounded-full px-6 py-3 hover:bg-accent hover:text-dark hover:border-accent transition-colors"
              >
                {showMore ? t.projects.seeLess : t.projects.seeMore}
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

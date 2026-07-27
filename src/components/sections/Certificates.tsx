"use client";
import { useLanguage } from "@/i18n/LanguageContext";

/* ============================================================
   Certificates — รายการเรียบๆ สไตล์ editorial (ไม่ใช่กำแพงรูป)
   แถวละใบ: ชื่อ + ผู้ออก + ปี + ลิงก์ดูใบจริง (เปิดแท็บใหม่)
   เพิ่มใบใหม่: เพิ่ม item ใน i18n (en.ts / th.ts) แล้ววางไฟล์รูปใน
   public/images/certificates/
   ============================================================ */
export default function Certificates() {
  const { t } = useLanguage();
  const items = t.certificates.items;

  if (items.length === 0) return null;

  return (
    <section id="certificates" className="py-8 md:py-12">
      <div className="max-w-5xl mx-auto px-6">
        <p className="font-sans text-xs tracking-widest uppercase text-muted mb-3">
          {t.certificates.label}
        </p>
        <h2
          className="font-serif text-dark leading-tight mb-6 md:mb-10"
          style={{ fontSize: "clamp(1.375rem, 3vw, 2rem)" }}
        >
          {t.certificates.heading}
        </h2>

        <ul className="border-t border-dark/10">
          {items.map((c) => (
            <li
              key={c.id}
              className="flex flex-col md:flex-row md:items-center gap-1.5 md:gap-6 py-4 border-b border-dark/10"
            >
              <span className="font-sans text-xs text-muted md:w-16 shrink-0">{c.year}</span>
              <span className="font-serif text-dark text-base md:text-lg flex-1">{c.title}</span>
              <span className="font-sans text-sm text-muted">{c.issuer}</span>
              {c.images && c.images.length > 0 && (
                <span className="flex gap-3 shrink-0">
                  {c.images.map((img, i) => (
                    <a
                      key={img}
                      href={img}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-xs tracking-widest uppercase text-accent hover:text-dark transition-colors"
                    >
                      {c.images!.length > 1 ? `${t.certificates.view} ${i + 1}` : t.certificates.view} ↗
                    </a>
                  ))}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

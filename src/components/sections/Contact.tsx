"use client";
import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-dark">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 gap-12 md:gap-16 md:grid-cols-2">
          <div>
            <p className="font-sans text-xs tracking-widest uppercase text-subtle mb-4">{t.contact.label}</p>
            <h2
              className="font-serif text-cream leading-tight mb-6"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              {t.contact.heading}
            </h2>
            <p className="font-sans text-muted leading-relaxed mb-8">
              {t.contact.blurb}
            </p>
            <a
              href="mailto:zuwapit.pon@gmail.com"
              className="font-sans text-sm text-accent hover:text-cream transition-colors"
            >
              zuwapit.pon@gmail.com
            </a>
          </div>
          <div>
            {status === "sent" ? (
              <div className="flex items-center justify-center h-full">
                <p className="font-serif text-cream text-xl">{t.contact.sentText}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  name="name"
                  placeholder={t.contact.namePlaceholder}
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="bg-dark-2 border border-dark-2 text-cream font-sans text-sm px-4 py-3 outline-none focus:border-accent transition-colors placeholder:text-subtle"
                />
                <input
                  name="email"
                  type="email"
                  placeholder={t.contact.emailPlaceholder}
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="bg-dark-2 border border-dark-2 text-cream font-sans text-sm px-4 py-3 outline-none focus:border-accent transition-colors placeholder:text-subtle"
                />
                <textarea
                  name="message"
                  placeholder={t.contact.messagePlaceholder}
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="bg-dark-2 border border-dark-2 text-cream font-sans text-sm px-4 py-3 outline-none focus:border-accent transition-colors placeholder:text-subtle resize-none"
                />
                {status === "error" && (
                  <p className="font-sans text-xs text-red-400">{t.contact.errorText}</p>
                )}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="px-8 py-3 bg-accent text-dark font-sans text-sm tracking-widest uppercase transition-colors hover:bg-gold disabled:opacity-50"
                >
                  {status === "sending" ? t.contact.sendingText : t.contact.sendText}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

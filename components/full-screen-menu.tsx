"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { content } from "@/lib/content";
import type { Locale } from "@/lib/site";
import { ThemeToggle } from "./theme-toggle";

export function FullScreenMenu({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const t = content[locale];
  const otherLocale = locale === "fa" ? "en" : "fa";

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onEscape = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onEscape);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onEscape); };
  }, [open]);

  const links = [
    { href: "#works", label: t.nav.works },
    { href: "#about", label: t.nav.about },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} aria-expanded={open} aria-label={t.menu.open} className="group grid size-12 place-items-center rounded-full border border-current/25 transition hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">
        <span className="flex w-5 flex-col gap-1.5" aria-hidden="true"><i className="h-px w-full bg-current" /><i className="h-px w-full bg-current" /><i className="h-px w-full bg-current" /></span>
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] flex min-h-screen flex-col bg-[#565656] px-6 py-5 text-white md:px-10" role="dialog" aria-modal="true" aria-label={t.menu.open}>
          <div className="flex items-center justify-between border-b border-white/20 pb-5"><p className="text-lg font-bold tracking-[-.04em]">{t.artist}</p><button type="button" autoFocus onClick={() => setOpen(false)} aria-label={t.menu.close} className="grid size-12 place-items-center rounded-full border border-white/40 text-2xl font-light transition hover:bg-white hover:text-black">×</button></div>
          <nav className="m-auto flex flex-col items-center gap-5 py-12 text-center" aria-label={t.menu.open}>
            {links.map((link) => <a key={link.href} onClick={() => setOpen(false)} className="text-2xl font-light uppercase tracking-[.17em] transition hover:text-white/55 md:text-3xl" href={link.href}>{link.label}</a>)}
          </nav>
          <div className="mx-auto flex items-center gap-4 border-t border-white/20 px-8 pt-5 text-sm uppercase tracking-[.15em]">
            <Link href={`/${otherLocale}/`} hrefLang={otherLocale} className="transition hover:text-white/55">{t.language}</Link><span className="text-white/25">/</span><ThemeToggle label={t.theme} />
          </div>
        </div>
      )}
    </>
  );
}

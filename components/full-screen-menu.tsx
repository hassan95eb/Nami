"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
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

  const overlay = open ? createPortal(
    <div className="fixed inset-0 z-[9999] flex h-[100dvh] w-screen overflow-hidden bg-[#565656] text-white" role="dialog" aria-modal="true" aria-label={t.menu.open}>
      <button type="button" autoFocus onClick={() => setOpen(false)} aria-label={t.menu.close} className="absolute right-5 top-5 z-10 grid size-13 place-items-center rounded-full border border-white/50 text-3xl font-extralight leading-none transition hover:bg-white hover:text-black md:right-8 md:top-8">×</button>

      <div className="m-auto flex -translate-y-2 flex-col items-center text-center">
        <nav className="flex flex-col items-center gap-5" aria-label={t.menu.open}>
          {links.map((link) => <a key={link.href} onClick={() => setOpen(false)} className="text-xl font-light uppercase tracking-[.2em] transition hover:text-white/55 md:text-2xl" href={link.href}>{link.label}</a>)}
        </nav>

        <div className="mt-9 h-px w-20 bg-white/15" />
        <p className="mt-6 text-xs uppercase tracking-[.16em] text-white/50">{t.menu.instagram}</p>
        <div className="mt-5 flex items-center gap-3 text-xs uppercase tracking-[.16em]">
          <span className="font-bold">{locale.toUpperCase()}</span><span className="text-white/30">/</span><Link href={`/${otherLocale}/`} hrefLang={otherLocale} className="text-white/45 transition hover:text-white">{otherLocale.toUpperCase()}</Link><span className="ms-2"><ThemeToggle label={t.theme} /></span>
        </div>
      </div>
    </div>,
    document.body,
  ) : null;

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} aria-expanded={open} aria-label={t.menu.open} className="group grid size-12 place-items-center rounded-full border border-current/25 transition hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">
        <span className="flex w-5 flex-col gap-1.5" aria-hidden="true"><i className="h-px w-full bg-current" /><i className="h-px w-full bg-current" /><i className="h-px w-full bg-current" /></span>
      </button>

      {overlay}
    </>
  );
}

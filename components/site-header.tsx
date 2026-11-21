import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { content } from "@/lib/content";
import type { Locale } from "@/lib/site";

export function SiteHeader({ locale }: { locale: Locale }) {
  const t = content[locale];
  const otherLocale = locale === "fa" ? "en" : "fa";
  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-paper/85 backdrop-blur-xl dark:border-white/10 dark:bg-night/85">
      <div className="mx-auto flex h-20 w-[min(94%,1440px)] items-center justify-between gap-6">
        <Link href={`/${locale}/`} className="text-base font-bold tracking-tight">{t.artist}</Link>
        <nav aria-label={locale === "fa" ? "ناوبری اصلی" : "Primary navigation"} className="hidden items-center gap-8 text-sm text-black/60 md:flex dark:text-white/60">
          <a className="transition hover:text-accent" href="#works">{t.nav.works}</a><a className="transition hover:text-accent" href="#about">{t.nav.about}</a><a className="transition hover:text-accent" href="#contact">{t.nav.contact}</a>
        </nav>
        <div className="flex items-center gap-2"><Link className="rounded-full border border-black/15 px-4 py-2 text-sm transition hover:border-accent hover:text-accent dark:border-white/20" href={`/${otherLocale}/`} hrefLang={otherLocale}>{t.language}</Link><ThemeToggle label={t.theme} /></div>
      </div>
    </header>
  );
}

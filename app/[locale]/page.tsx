import { ArtworkGallery } from "@/components/artwork-gallery";
import { SiteHeader } from "@/components/site-header";
import Image from "next/image";
import { artworks, content } from "@/lib/content";
import { isLocale, localeUrl, locales, type Locale } from "@/lib/site";

export function generateStaticParams() { return locales.map((locale) => ({ locale })); }

export default async function PortfolioPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: value } = await params;
  const locale: Locale = isLocale(value) ? value : "fa";
  const t = content[locale];
  const jsonLd = { "@context": "https://schema.org", "@type": "Person", name: t.artist, url: localeUrl(locale, "/"), mainEntityOfPage: localeUrl(locale, "/") };

  return (
    <main className="min-h-screen overflow-hidden bg-paper dark:bg-night">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <section className="relative min-h-[100svh] overflow-hidden bg-[#292a27] text-white">
        <Image src="/artworks/study-04.svg" alt={t.hero.preview} fill priority sizes="100vw" className="object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/5 to-black/55" />
        <SiteHeader locale={locale} />
        <div className="relative z-10 mx-auto flex min-h-[100svh] w-[min(96%,1800px)] flex-col justify-center px-2 pb-28 pt-36">
          <div className="mx-auto w-full max-w-5xl text-center">
            <p className="mb-5 text-sm uppercase tracking-[.24em] text-white/75">{t.hero.eyebrow}</p>
            <h1 className="display-title text-[clamp(4rem,10vw,10rem)] font-light leading-[.88] tracking-[-.055em]">{t.hero.title}</h1>
            <p className="display-title mt-3 text-[clamp(1.6rem,3.3vw,4rem)] font-light text-white/80">{t.hero.subtitle}</p>
            <a className="mt-9 inline-flex border-b border-white/65 pb-1 text-sm font-bold uppercase tracking-[.18em] transition hover:border-white/30 hover:text-white/65" href="#works">{t.hero.cta}</a>
          </div>
          <div className="absolute inset-x-2 bottom-8 flex flex-col gap-3 border-t border-white/30 pt-5 text-sm uppercase tracking-[.12em] text-white/80 sm:flex-row sm:justify-between"><p>{t.hero.metaPrimary}</p><p>{t.hero.metaSecondary}</p></div>
        </div>
      </section>

      <section id="works" className="art-surface border-t border-black/10 py-24 md:py-32 dark:border-white/10">
        <div className="mx-auto w-[min(94%,1440px)]"><div className="mb-14 grid gap-7 lg:grid-cols-2"><div><p className="mb-4 text-sm font-bold tracking-[.18em] text-accent uppercase">{t.gallery.eyebrow}</p><h2 className="display-title text-4xl sm:text-6xl">{t.gallery.title}</h2></div><p className="max-w-xl self-end leading-8 text-black/55 lg:justify-self-end dark:text-white/55">{t.gallery.body}</p></div><ArtworkGallery locale={locale} artworks={artworks} /></div>
      </section>

      <section id="about" className="border-y border-black/10 bg-ink py-28 text-white dark:border-white/10 dark:bg-white dark:text-night">
        <div className="mx-auto grid w-[min(94%,1200px)] gap-10 lg:grid-cols-[.55fr_1.45fr]"><p className="text-sm font-bold tracking-[.18em] text-[#d89cab] uppercase">{t.about.eyebrow}</p><div><h2 className="display-title max-w-4xl text-4xl leading-tight sm:text-6xl">{t.about.title}</h2><p className="mt-8 max-w-2xl text-lg leading-9 text-white/60 dark:text-black/60">{t.about.body}</p></div></div>
      </section>

      <section id="contact" className="mx-auto w-[min(94%,1200px)] py-28 text-center"><p className="mb-5 text-sm font-bold tracking-[.18em] text-accent uppercase">{t.contact.eyebrow}</p><h2 className="display-title text-4xl sm:text-6xl">{t.contact.title}</h2><p className="mx-auto mt-6 max-w-2xl leading-8 text-black/55 dark:text-white/55">{t.contact.body}</p></section>
      <footer className="border-t border-black/10 py-8 text-sm text-black/45 dark:border-white/10 dark:text-white/45"><div className="mx-auto flex w-[min(94%,1440px)] flex-col justify-between gap-3 sm:flex-row"><p>© {new Date().getFullYear()} {t.artist}</p><p>{t.footer}</p></div></footer>
    </main>
  );
}

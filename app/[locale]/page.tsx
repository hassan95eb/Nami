import { ArtworkGallery } from "@/components/artwork-gallery";
import { SiteHeader } from "@/components/site-header";
import { artworks, content } from "@/lib/content";
import { isLocale, localeUrl, locales, type Locale } from "@/lib/site";

export function generateStaticParams() { return locales.map((locale) => ({ locale })); }

export default async function PortfolioPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: value } = await params;
  const locale: Locale = isLocale(value) ? value : "fa";
  const t = content[locale];
  const jsonLd = { "@context": "https://schema.org", "@type": "Person", name: t.artist, url: localeUrl(locale, "/"), mainEntityOfPage: localeUrl(locale, "/") };

  return (
    <main className="art-surface min-h-screen overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <SiteHeader locale={locale} />
      <section className="mx-auto grid min-h-[78vh] w-[min(94%,1440px)] items-center gap-12 py-20 lg:grid-cols-[1.2fr_.8fr] lg:py-28">
        <div><p className="mb-7 text-sm font-bold tracking-[.18em] text-accent uppercase">{t.hero.eyebrow}</p><h1 className="display-title max-w-5xl text-[clamp(3.4rem,8vw,8.5rem)] leading-[1.02] tracking-[-.055em]">{t.hero.title}</h1></div>
        <div className="lg:self-end lg:pb-7"><p className="max-w-xl text-lg leading-9 text-black/60 dark:text-white/60">{t.hero.body}</p><a className="mt-8 inline-flex rounded-full bg-ink px-7 py-3 font-bold text-white transition hover:bg-accent dark:bg-white dark:text-night dark:hover:bg-accent dark:hover:text-white" href="#works">{t.hero.cta}</a></div>
      </section>

      <section id="works" className="border-t border-black/10 py-24 dark:border-white/10">
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

import Image from "next/image";
import Link from "next/link";
import { HeroSlideshow } from "@/components/hero-slideshow";
import { SiteHeader } from "@/components/site-header";
import { collections, content } from "@/lib/content";
import { isLocale, localeUrl, locales, type Locale } from "@/lib/site";

export function generateStaticParams() { return locales.map((locale) => ({ locale })); }

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: value } = await params;
  const locale: Locale = isLocale(value) ? value : "fa";
  const t = content[locale];
  const jsonLd = { "@context": "https://schema.org", "@type": "Person", name: t.artist, url: localeUrl(locale, "/"), mainEntityOfPage: localeUrl(locale, "/") };

  return (
    <main className="min-h-screen bg-paper text-ink dark:bg-night dark:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <div className="relative">
        <SiteHeader locale={locale} overlay />
        <HeroSlideshow locale={locale} />
      </div>

      <section className="py-24 md:py-36">
        <div className="mx-auto w-[min(92%,1440px)]">
          <div className="mb-14 grid gap-6 lg:grid-cols-2 lg:items-end">
            <div><p className="section-label">{t.home.collectionsLabel}</p><h2 className="display-title mt-4 text-5xl font-light tracking-tight sm:text-7xl">{t.home.collectionsTitle}</h2></div>
            <p className="max-w-xl text-lg leading-8 text-black/55 lg:justify-self-end dark:text-white/55">{t.home.collectionsBody}</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {collections.map((collection, index) => (
              <Link key={collection.slug} href={`/${locale}/portfolio/${collection.slug}/`} className="group block">
                <div className={`relative overflow-hidden bg-black/5 ${index === 1 ? "aspect-[4/5] md:mt-16" : "aspect-[4/5]"}`}>
                  <Image src={collection.image} alt={collection.title} fill sizes="(max-width: 768px) 92vw, 31vw" className="object-cover transition duration-700 ease-out group-hover:scale-[1.025]" />
                </div>
                <div className="mt-5 flex items-center justify-between gap-4 border-b border-black/15 pb-4 dark:border-white/15"><h3 className="text-xl tracking-wide">{collection.title}</h3><span className="text-xs text-black/35 dark:text-white/35">0{index + 1}</span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-white py-24 dark:border-white/10 dark:bg-white/[.03] md:py-32">
        <div className="mx-auto grid w-[min(92%,1200px)] gap-12 md:grid-cols-[.65fr_1.35fr]">
          <p className="section-label">{t.home.archiveLabel}</p>
          <div><h2 className="display-title text-5xl font-light leading-[1.05] sm:text-7xl">{t.home.archiveTitle}</h2><p className="mt-8 max-w-2xl text-lg leading-9 text-black/55 dark:text-white/55">{t.home.archiveBody}</p><Link href={`/${locale}/portfolio/`} className="mt-9 inline-block border-b border-current pb-1 text-sm uppercase tracking-[.16em]">Portfolio</Link></div>
        </div>
      </section>

      <footer className="border-t border-black/10 py-8 text-sm text-black/45 dark:border-white/10 dark:text-white/45"><div className="mx-auto flex w-[min(92%,1440px)] flex-col justify-between gap-3 sm:flex-row"><p>© {new Date().getFullYear()} {t.artist}</p><p>{t.footer}</p></div></footer>
    </main>
  );
}

import type { Locale } from "./site";

export type Artwork = {
  id: string;
  image: string;
  title: Record<Locale, string>;
  category: Record<Locale, string>;
  medium: Record<Locale, string>;
  dimensions: string;
  featured?: boolean;
};

export const artworks: Artwork[] = [
  { id: "01", image: "/artworks/study-01.svg", title: { fa: "جایگاه اثر ۰۱", en: "Artwork Slot 01" }, category: { fa: "نقاشی", en: "Painting" }, medium: { fa: "اطلاعات اثر پس از دریافت محتوا", en: "Artwork details to be supplied" }, dimensions: "—", featured: true },
  { id: "02", image: "/artworks/study-02.svg", title: { fa: "جایگاه اثر ۰۲", en: "Artwork Slot 02" }, category: { fa: "طراحی", en: "Drawing" }, medium: { fa: "اطلاعات اثر پس از دریافت محتوا", en: "Artwork details to be supplied" }, dimensions: "—" },
  { id: "03", image: "/artworks/study-03.svg", title: { fa: "جایگاه اثر ۰۳", en: "Artwork Slot 03" }, category: { fa: "ترکیب مواد", en: "Mixed Media" }, medium: { fa: "اطلاعات اثر پس از دریافت محتوا", en: "Artwork details to be supplied" }, dimensions: "—" },
  { id: "04", image: "/artworks/study-04.svg", title: { fa: "جایگاه اثر ۰۴", en: "Artwork Slot 04" }, category: { fa: "نقاشی", en: "Painting" }, medium: { fa: "اطلاعات اثر پس از دریافت محتوا", en: "Artwork details to be supplied" }, dimensions: "—", featured: true },
  { id: "05", image: "/artworks/study-05.svg", title: { fa: "جایگاه اثر ۰۵", en: "Artwork Slot 05" }, category: { fa: "طراحی", en: "Drawing" }, medium: { fa: "اطلاعات اثر پس از دریافت محتوا", en: "Artwork details to be supplied" }, dimensions: "—" },
  { id: "06", image: "/artworks/study-06.svg", title: { fa: "جایگاه اثر ۰۶", en: "Artwork Slot 06" }, category: { fa: "ترکیب مواد", en: "Mixed Media" }, medium: { fa: "اطلاعات اثر پس از دریافت محتوا", en: "Artwork details to be supplied" }, dimensions: "—" },
];

export const content = {
  fa: {
    artist: "پریسا نامی",
    siteTitle: "پریسا نامی | پرتفولیوی هنری",
    description: "پرتفولیوی هنری پریسا نامی؛ نمایش آثار، مجموعه‌ها و جزئیات هر اثر در یک تجربهٔ دو زبانه.",
    nav: { works: "آثار", about: "درباره", contact: "ارتباط" },
    menu: { open: "منو", close: "بستن منو", instagram: "اینستاگرام" },
    hero: { eyebrow: "نمایش ویژه", title: "پریسا نامی", subtitle: "فضایی برای تماشای هنر", cta: "مشاهدهٔ مجموعه", metaPrimary: "مجموعهٔ منتخب", metaSecondary: "پرتفولیوی هنری · ۲۰۲۶", preview: "نمونهٔ ساختار صفحهٔ اصلی" },
    gallery: { eyebrow: "منتخب آثار", title: "آثار در مرکز روایت", body: "چیدمان زیر نمونهٔ ساختاری است و با دریافت تصاویر و اطلاعات واقعی آثار جایگزین می‌شود.", all: "همه", preview: "نمونهٔ چیدمان", open: "نمایش بزرگ", close: "بستن", medium: "تکنیک و مواد", dimensions: "ابعاد" },
    about: { eyebrow: "دربارهٔ هنرمند", title: "روایت هنرمند در کنار اثر، نه پیش از آن.", body: "زندگی‌نامه، بیانیهٔ هنرمند و مسیر نمایشگاه‌ها پس از دریافت اطلاعات نهایی در این بخش قرار می‌گیرد. ساختار صفحه برای متن کوتاه و خوانا طراحی شده تا تمرکز اصلی همچنان بر آثار باقی بماند." },
    contact: { eyebrow: "ارتباط", title: "برای همکاری، نمایشگاه یا گفت‌وگو", body: "راه‌های ارتباطی رسمی هنرمند در نسخهٔ نهایی این بخش قرار می‌گیرند." },
    theme: "تغییر پوسته", language: "English", footer: "تمامی حقوق آثار متعلق به هنرمند است.",
  },
  en: {
    artist: "Parisa Nami",
    siteTitle: "Parisa Nami | Art Portfolio",
    description: "The art portfolio of Parisa Nami — works, collections and artwork details in a bilingual viewing experience.",
    nav: { works: "Works", about: "About", contact: "Contact" },
    menu: { open: "Menu", close: "Close menu", instagram: "Instagram" },
    hero: { eyebrow: "Featured presentation", title: "Parisa Nami", subtitle: "A space for looking at art", cta: "View the collection", metaPrimary: "Selected works", metaSecondary: "Artist portfolio · 2026", preview: "Homepage structure preview" },
    gallery: { eyebrow: "Selected Works", title: "The work leads the story", body: "This is a structural preview. The studies below will be replaced with the artist’s final images and artwork details.", all: "All", preview: "Layout preview", open: "View large", close: "Close", medium: "Medium", dimensions: "Dimensions" },
    about: { eyebrow: "About the artist", title: "The artist’s story sits beside the work, never in front of it.", body: "The final biography, artist statement and exhibition history will live here once supplied. The section is intentionally concise, keeping the artwork as the primary focus." },
    contact: { eyebrow: "Contact", title: "For collaborations, exhibitions or conversation", body: "The artist’s official contact details will be added here in the final content pass." },
    theme: "Change theme", language: "فارسی", footer: "All artwork rights belong to the artist.",
  },
} as const;

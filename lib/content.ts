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

export type Collection = {
  slug: "birds-of-dream" | "flow" | "characters";
  title: string;
  image: string;
  description: Record<Locale, string>;
};

export const navItems = [
  { slug: "", label: { fa: "خانه", en: "Home" } },
  { slug: "portfolio", label: { fa: "آثار", en: "Portfolio" } },
  { slug: "exhibitions-recognition", label: { fa: "نمایشگاه‌ها و دستاوردها", en: "Exhibitions & Recognition" } },
  { slug: "cv", label: { fa: "رزومه", en: "CV" } },
  { slug: "press", label: { fa: "مطبوعات", en: "Press" } },
  { slug: "about", label: { fa: "درباره", en: "About" } },
  { slug: "contact", label: { fa: "ارتباط", en: "Contact" } },
] as const;

export const sitePaths = [
  "", "portfolio", "portfolio/birds-of-dream", "portfolio/flow", "portfolio/characters",
  "portfolio/installation", "portfolio/painting", "portfolio/public-art", "portfolio/projects-archive",
  "exhibitions-recognition", "cv", "press", "about", "contact",
] as const;

export const collections: Collection[] = [
  { slug: "birds-of-dream", title: "Birds of Dream", image: "/artworks/study-01.svg", description: { fa: "مجموعه‌ای از مجسمه‌ها؛ تصاویر و متن نهایی هنرمند در این صفحه جایگزین می‌شود.", en: "A sculpture collection. Final artwork images and the artist’s statement will be added here." } },
  { slug: "flow", title: "Flow", image: "/artworks/study-04.svg", description: { fa: "صفحه اختصاصی مجموعه Flow برای نمایش آثار، جزئیات و روایت مجموعه.", en: "A dedicated space for the works, details and narrative of the Flow collection." } },
  { slug: "characters", title: "Characters", image: "/artworks/study-06.svg", description: { fa: "آرشیو تصویری مجموعه Characters با قابلیت توسعه برای آثار آینده.", en: "A visual archive for Characters, designed to grow with future works." } },
];

export const artworks: Artwork[] = [
  { id: "01", image: "/artworks/study-01.svg", title: { fa: "جایگاه اثر ۰۱", en: "Artwork 01" }, category: { fa: "مجسمه", en: "Sculpture" }, medium: { fa: "متریال و تکنیک پس از دریافت اطلاعات هنرمند", en: "Material and technique to be supplied by the artist" }, dimensions: "—", featured: true },
  { id: "02", image: "/artworks/study-02.svg", title: { fa: "جایگاه اثر ۰۲", en: "Artwork 02" }, category: { fa: "چیدمان", en: "Installation" }, medium: { fa: "اطلاعات اثر در انتظار محتوای نهایی", en: "Artwork details awaiting final content" }, dimensions: "—" },
  { id: "03", image: "/artworks/study-03.svg", title: { fa: "جایگاه اثر ۰۳", en: "Artwork 03" }, category: { fa: "نقاشی", en: "Painting" }, medium: { fa: "اطلاعات اثر در انتظار محتوای نهایی", en: "Artwork details awaiting final content" }, dimensions: "—" },
  { id: "04", image: "/artworks/study-04.svg", title: { fa: "جایگاه اثر ۰۴", en: "Artwork 04" }, category: { fa: "مجسمه", en: "Sculpture" }, medium: { fa: "متریال و تکنیک پس از دریافت اطلاعات هنرمند", en: "Material and technique to be supplied by the artist" }, dimensions: "—", featured: true },
  { id: "05", image: "/artworks/study-05.svg", title: { fa: "جایگاه اثر ۰۵", en: "Artwork 05" }, category: { fa: "هنر عمومی", en: "Public Art" }, medium: { fa: "اطلاعات اثر در انتظار محتوای نهایی", en: "Artwork details awaiting final content" }, dimensions: "—" },
  { id: "06", image: "/artworks/study-06.svg", title: { fa: "جایگاه اثر ۰۶", en: "Artwork 06" }, category: { fa: "مجسمه", en: "Sculpture" }, medium: { fa: "متریال و تکنیک پس از دریافت اطلاعات هنرمند", en: "Material and technique to be supplied by the artist" }, dimensions: "—" },
];

export const content = {
  fa: {
    artist: "پریسا نامی", artistLatin: "PARISA NAMI",
    siteTitle: "پریسا نامی | هنرمند و مجسمه‌ساز",
    description: "وب‌سایت رسمی پریسا نامی؛ آرشیو آثار، مجموعه‌ها، پروژه‌ها، نمایشگاه‌ها و سوابق حرفه‌ای.",
    menu: { open: "منو", close: "بستن منو", instagram: "Instagram" },
    home: {
      heroLabel: "Selected Works", heroTitle: "آثار منتخب", heroCta: "مشاهده مجموعه",
      collectionsLabel: "Sculpture Collections", collectionsTitle: "مجموعه‌های منتخب",
      collectionsBody: "سه مسیر مستقل در مجسمه‌سازی؛ هر مجموعه دارای صفحه‌ای اختصاصی برای تصاویر، اطلاعات آثار و روایت هنرمند است.",
      archiveLabel: "Professional Archive", archiveTitle: "فراتر از یک گالری تصویر",
      archiveBody: "این وب‌سایت آرشیوی توسعه‌پذیر از آثار، پروژه‌های اجرایی، نمایشگاه‌ها، دستاوردها و مسیر حرفه‌ای هنرمند است.",
    },
    gallery: { eyebrow: "منتخب آثار", title: "آرشیو تصویری", body: "تصاویر فعلی جایگاه ساختاری هستند و با دریافت فایل‌های اصلی آثار جایگزین می‌شوند.", all: "همه", preview: "تصویر موقت", open: "مشاهده اثر", close: "بستن", medium: "متریال و تکنیک", dimensions: "ابعاد" },
    theme: "تغییر پوسته", language: "English", footer: "تمامی حقوق آثار متعلق به هنرمند است.",
    pending: "محتوای مستند این بخش پس از دریافت اطلاعات نهایی هنرمند تکمیل می‌شود.",
  },
  en: {
    artist: "Parisa Nami", artistLatin: "PARISA NAMI",
    siteTitle: "Parisa Nami | Artist & Sculptor",
    description: "The official website of Parisa Nami — an evolving archive of works, collections, projects, exhibitions and professional practice.",
    menu: { open: "Menu", close: "Close menu", instagram: "Instagram" },
    home: {
      heroLabel: "Selected Works", heroTitle: "Selected Works", heroCta: "View collection",
      collectionsLabel: "Sculpture Collections", collectionsTitle: "Featured Collections",
      collectionsBody: "Three distinct paths through sculpture. Each collection has a dedicated home for images, artwork details and the artist’s narrative.",
      archiveLabel: "Professional Archive", archiveTitle: "More than an image gallery",
      archiveBody: "An extensible archive of artworks, public projects, exhibitions, recognition and the artist’s evolving professional practice.",
    },
    gallery: { eyebrow: "Selected Works", title: "Visual Archive", body: "Current images are structural placeholders and will be replaced by the artist’s final high-resolution files.", all: "All", preview: "Placeholder", open: "View work", close: "Close", medium: "Material & technique", dimensions: "Dimensions" },
    theme: "Change theme", language: "فارسی", footer: "All artwork rights belong to the artist.",
    pending: "Documented content will be completed when the artist’s final information is supplied.",
  },
} as const;

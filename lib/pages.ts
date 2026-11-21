import type { Locale } from "./site";

type Bilingual = Record<Locale, string>;
export type PageSection = { title: Bilingual; body: Bilingual; href?: string };
export type PageContent = { eyebrow: string; title: Bilingual; intro: Bilingual; sections: PageSection[]; image?: string };

export const pages: Record<string, PageContent> = {
  portfolio: {
    eyebrow: "Portfolio", title: { fa: "آثار و پروژه‌ها", en: "Works & Projects" },
    intro: { fa: "آرشیو اصلی آثار هنرمند، سازمان‌دهی‌شده بر اساس مجموعه، مدیوم و پروژه‌های اجرایی.", en: "The primary archive of the artist’s work, organised by collection, medium and realised projects." },
    sections: [
      { title: { fa: "مجسمه‌سازی", en: "Sculpture" }, body: { fa: "Birds of Dream، Flow و Characters", en: "Birds of Dream, Flow and Characters" }, href: "portfolio/birds-of-dream" },
      { title: { fa: "چیدمان", en: "Installation" }, body: { fa: "آثار چیدمان و پروژه‌های فضامحور", en: "Installation and spatial practices" }, href: "portfolio/installation" },
      { title: { fa: "نقاشی", en: "Painting" }, body: { fa: "آرشیو آثار نقاشی", en: "Archive of painting works" }, href: "portfolio/painting" },
      { title: { fa: "هنر عمومی", en: "Public Art" }, body: { fa: "مجسمه‌های شهری، نقش‌برجسته‌ها و پروژه‌های محیطی", en: "Urban sculpture, relief works and environmental projects" }, href: "portfolio/public-art" },
      { title: { fa: "آرشیو پروژه‌ها", en: "Projects Archive" }, body: { fa: "پروژه‌های اجرایی گذشته با اطلاعات فنی و مستندات", en: "Past realised projects with technical information and documentation" }, href: "portfolio/projects-archive" },
    ], image: "/artworks/study-03.svg",
  },
  "exhibitions-recognition": {
    eyebrow: "Exhibitions & Recognition", title: { fa: "نمایشگاه‌ها و دستاوردها", en: "Exhibitions & Recognition" },
    intro: { fa: "بخشی مستقل برای مرور حضور نمایشگاهی، رویدادهای بین‌المللی و اعتبار حرفه‌ای هنرمند.", en: "A dedicated record of exhibitions, international art events and professional recognition." },
    sections: [
      { title: { fa: "نمایشگاه‌های منتخب", en: "Selected Exhibitions" }, body: { fa: "نمایشگاه‌های انفرادی، گروهی و رویدادهای منتخب داخلی و بین‌المللی.", en: "Selected solo, group, national and international exhibitions." } },
      { title: { fa: "بینال‌ها و رویدادهای هنری", en: "Biennales & Art Events" }, body: { fa: "بینال‌ها، آرت‌فرها و برنامه‌های هنری بین‌المللی.", en: "Biennales, art fairs and international art programmes." } },
      { title: { fa: "جوایز و افتخارات", en: "Awards & Recognition" }, body: { fa: "جوایز، انتخاب‌ها و دستاوردهای حرفه‌ای مستند.", en: "Documented awards, selections and professional achievements." } },
    ], image: "/artworks/study-05.svg",
  },
  cv: {
    eyebrow: "Curriculum Vitae", title: { fa: "رزومه حرفه‌ای", en: "Curriculum Vitae" },
    intro: { fa: "نمایی منظم از تحصیلات، تجربه حرفه‌ای، نمایشگاه‌ها، پروژه‌ها و فعالیت‌های پژوهشی.", en: "A structured overview of education, professional practice, exhibitions, projects and research." },
    sections: [
      { title: { fa: "تحصیلات", en: "Education" }, body: { fa: "اطلاعات تحصیلی هنرمند", en: "Academic background" } },
      { title: { fa: "تجربه حرفه‌ای", en: "Professional Experience" }, body: { fa: "سوابق و همکاری‌های حرفه‌ای", en: "Professional roles and collaborations" } },
      { title: { fa: "نمایشگاه‌ها و جوایز", en: "Exhibitions & Awards" }, body: { fa: "فهرست زمانی نمایشگاه‌ها و دستاوردها", en: "Chronological record of exhibitions and recognition" } },
      { title: { fa: "پروژه‌ها، تدریس و پژوهش", en: "Projects, Teaching & Research" }, body: { fa: "پروژه‌های منتخب، سوابق تدریس و انتشارات", en: "Selected projects, teaching, publications and research" } },
    ],
  },
  press: {
    eyebrow: "Press", title: { fa: "مطبوعات و رسانه", en: "Press & Media" },
    intro: { fa: "آرشیو مصاحبه‌ها، نقدها، مطالب کیوریتورها و پوشش رسانه‌ای فعالیت‌های هنرمند.", en: "An archive of interviews, criticism, curatorial writing and media coverage." },
    sections: [
      { title: { fa: "مصاحبه‌ها", en: "Interviews" }, body: { fa: "گفت‌وگوهای منتشرشده با هنرمند", en: "Published conversations with the artist" } },
      { title: { fa: "مقالات و نقدها", en: "Articles & Criticism" }, body: { fa: "مقالات، نقدهای هنری و متن‌های کیوریتورها", en: "Essays, reviews and curatorial texts" } },
      { title: { fa: "اخبار و پوشش رسانه‌ای", en: "News & Media Coverage" }, body: { fa: "معرفی نمایشگاه‌ها و مطالب رسانه‌ای", en: "Exhibition features and media reports" } },
    ], image: "/artworks/study-02.svg",
  },
  about: {
    eyebrow: "About", title: { fa: "درباره پریسا نامی", en: "About Parisa Nami" },
    intro: { fa: "زندگی‌نامه حرفه‌ای، پیشینه تحصیلی، مسیر هنری و رویکرد مفهومی آثار در این صفحه ارائه می‌شود.", en: "A professional biography, educational background, artistic trajectory and conceptual approach to the work." },
    sections: [
      { title: { fa: "زندگی‌نامه", en: "Biography" }, body: { fa: "متن نهایی زندگی‌نامه پس از تأیید هنرمند در این بخش قرار می‌گیرد.", en: "The artist-approved biography will be presented here." } },
      { title: { fa: "بیانیه هنرمند", en: "Artist Statement" }, body: { fa: "رویکرد مفهومی، دغدغه‌ها و زمینه‌های اصلی فعالیت هنری.", en: "Conceptual approach, key concerns and areas of artistic practice." } },
    ], image: "/artworks/study-06.svg",
  },
  contact: {
    eyebrow: "Contact", title: { fa: "ارتباط و همکاری", en: "Contact & Collaboration" },
    intro: { fa: "برای نمایشگاه‌ها، پروژه‌های هنری، همکاری‌های حرفه‌ای و درخواست‌های رسانه‌ای.", en: "For exhibitions, artistic projects, professional collaborations and press enquiries." },
    sections: [
      { title: { fa: "ایمیل", en: "Email" }, body: { fa: "نشانی ایمیل حرفه‌ای پس از دریافت اطلاعات نهایی افزوده می‌شود.", en: "Professional email address will be added with the final contact details." } },
      { title: { fa: "شبکه‌های حرفه‌ای", en: "Professional Networks" }, body: { fa: "Instagram · LinkedIn", en: "Instagram · LinkedIn" } },
    ],
  },
};

const portfolioChildren: Record<string, { title: string; description: Bilingual; image: string }> = {
  "birds-of-dream": { title: "Birds of Dream", description: { fa: "صفحه اختصاصی مجموعه مجسمه‌سازی Birds of Dream.", en: "The dedicated archive for the Birds of Dream sculpture collection." }, image: "/artworks/study-01.svg" },
  flow: { title: "Flow", description: { fa: "صفحه اختصاصی مجموعه مجسمه‌سازی Flow.", en: "The dedicated archive for the Flow sculpture collection." }, image: "/artworks/study-04.svg" },
  characters: { title: "Characters", description: { fa: "صفحه اختصاصی مجموعه مجسمه‌سازی Characters.", en: "The dedicated archive for the Characters sculpture collection." }, image: "/artworks/study-06.svg" },
  installation: { title: "Installation", description: { fa: "آرشیو آثار چیدمان و پروژه‌های فضامحور.", en: "An archive of installation and spatial works." }, image: "/artworks/study-02.svg" },
  painting: { title: "Painting", description: { fa: "آرشیو آثار نقاشی هنرمند.", en: "An archive of the artist’s painting practice." }, image: "/artworks/study-03.svg" },
  "public-art": { title: "Public Art", description: { fa: "مجسمه‌های شهری، نقش‌برجسته‌های عمومی و پروژه‌های محیطی.", en: "Urban sculpture, public relief works and environmental projects." }, image: "/artworks/study-05.svg" },
  "projects-archive": { title: "Projects Archive", description: { fa: "آرشیو پروژه‌های اجرایی با جایگاه اطلاعات سال، مکان، مفهوم، متریال، ابعاد و مستندات اجرا.", en: "Realised projects with space for year, location, concept, materials, dimensions and process documentation." }, image: "/artworks/study-05.svg" },
};

export function getPage(path: string): PageContent | undefined {
  if (pages[path]) return pages[path];
  const child = path.startsWith("portfolio/") ? portfolioChildren[path.slice("portfolio/".length)] : undefined;
  if (!child) return undefined;
  return {
    eyebrow: "Portfolio / Archive", title: { fa: child.title, en: child.title }, intro: child.description, image: child.image,
    sections: [
      { title: { fa: "درباره مجموعه", en: "About the Collection" }, body: { fa: "متن مفهومی و بیانیه مجموعه پس از دریافت محتوای تأییدشده افزوده می‌شود.", en: "The conceptual text and collection statement will be added once approved content is supplied." } },
      { title: { fa: "اطلاعات آثار", en: "Artwork Details" }, body: { fa: "عنوان، سال، متریال، تکنیک، ابعاد و تصاویر هر اثر در ساختار آماده‌شده ثبت خواهد شد.", en: "Title, year, materials, technique, dimensions and multiple images will be recorded for every work." } },
    ],
  };
}

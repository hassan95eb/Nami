# Nami

پرتفولیوی هنری دو زبانهٔ پریسا نامی، پیاده‌سازی‌شده با Next.js، Tailwind CSS و خروجی کاملاً استاتیک.

## اجرا

```bash
npm install
npm run dev
```

## ساخت خروجی استاتیک

```bash
npm run build
```

فایل‌های نهایی در پوشهٔ `out/` ساخته می‌شوند.

مسیرهای قابل ایندکس سایت:

- `/fa/` نسخهٔ فارسی
- `/en/` نسخهٔ انگلیسی

برای canonical، sitemap و `hreflang` صحیح روی دامنهٔ نهایی، متغیر زیر را در Vercel تنظیم کنید. اگر تنظیم نشود، آدرس Production پروژهٔ Vercel به‌صورت خودکار استفاده می‌شود:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

اطلاعات متنی و آثار نمونه در `lib/content.ts` قرار دارند. تصاویر نهایی آثار باید جایگزین فایل‌های نمونهٔ `public/artworks/` شوند.

## استقرار روی Vercel

مخزن را در Vercel وارد کنید. Vercel پروژه را به‌عنوان Next.js تشخیص می‌دهد و با اجرای `npm run build` خروجی استاتیک را منتشر می‌کند. تنظیم `output: "export"` در `next.config.ts` فعال است.

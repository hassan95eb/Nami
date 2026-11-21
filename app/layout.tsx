import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "پریسا نامی | وب‌سایت شخصی",
    template: "%s | پریسا نامی",
  },
  description: "وب‌سایت شخصی پریسا نامی؛ فضایی برای معرفی، روایت مسیر و نمایش پروژه‌ها.",
  applicationName: "پریسا نامی",
  keywords: ["پریسا نامی", "وب‌سایت شخصی", "نمونه‌کار"],
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#fffaf4",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}

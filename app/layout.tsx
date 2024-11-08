import type { Metadata } from "next";
import "./globals.css";
import { ShabnamFont } from "@/utils/shabnamFont";

export const metadata: Metadata = {
  title: "دیوار | عباس اجلالی",
  description: "ساخته شده توسط عباس اجلالی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${ShabnamFont.className} antialiased`}>{children}</body>
    </html>
  );
}

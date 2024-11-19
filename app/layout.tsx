import type { Metadata } from "next";
import "./globals.css";
import { ShabnamFont } from "@/utils/shabnamFont";
import LayoutPage from "@/app/components/layout/LayoutPage";
import ToastProvider from "@/utils/ToastProvider";

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
      <body className={`${ShabnamFont.className} antialiased`}>
        <LayoutPage>
          <ToastProvider>{children}</ToastProvider>
        </LayoutPage>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { ShabnamFont } from "@/utils/shabnamFont";
import ToastProvider from "@/utils/ToastProvider";
import ReactQueryProvider from "@/libs/ReactQueryProvider";

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
        <ReactQueryProvider>
          <ToastProvider>{children}</ToastProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}

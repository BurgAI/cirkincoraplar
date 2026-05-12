import type { Metadata } from "next";
import "./globals.css";
import { dictionary } from "@/data/i18n";

export const metadata: Metadata = {
  title: dictionary.tr.meta.title,
  description: dictionary.tr.meta.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}

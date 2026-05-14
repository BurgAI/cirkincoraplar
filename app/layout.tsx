import type { Metadata } from "next";
import { StructuredData } from "@/components/StructuredData";
import { siteConfig } from "@/data/siteConfig";
import "./globals.css";
import { dictionary } from "@/data/i18n";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  applicationName: siteConfig.name,
  title: dictionary.tr.meta.title,
  description: dictionary.tr.meta.description,
  keywords: [...dictionary.tr.meta.keywords, ...siteConfig.futureKeywords],
  alternates: {
    canonical: `${siteConfig.siteUrl}/tr`,
  },
  openGraph: {
    title: dictionary.tr.meta.title,
    description: dictionary.tr.meta.description,
    siteName: siteConfig.name,
    type: "website",
    url: `${siteConfig.siteUrl}/tr`,
    images: [
      {
        url: siteConfig.logo,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: dictionary.tr.meta.title,
    description: dictionary.tr.meta.description,
    images: [siteConfig.logo],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.siteUrl,
      logo: `${siteConfig.siteUrl}${siteConfig.logo}`,
      email: siteConfig.email,
      sameAs: [siteConfig.instagramUrl],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: siteConfig.whatsappNumber,
          contactType: "sales",
          areaServed: "TR",
          availableLanguage: ["tr", "en", "de"],
        },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address,
        addressCountry: siteConfig.location,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.siteUrl,
      inLanguage: ["tr", "en", "de"],
    },
  ];

  return (
    <html lang="tr">
      <body>
        <StructuredData data={structuredData} />
        {children}
      </body>
    </html>
  );
}

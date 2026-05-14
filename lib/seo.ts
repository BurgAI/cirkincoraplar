import type { Metadata } from "next";
import { defaultLocale, locales, type Locale } from "@/data/i18n";
import { siteConfig } from "@/data/siteConfig";

const localeMap: Record<Locale, string> = {
  tr: "tr_TR",
  en: "en_US",
  de: "de_DE",
};

function trimSlashes(value: string) {
  return value.replace(/^\/+|\/+$/g, "");
}

export function withLeadingSlash(value = "") {
  if (!value) return "/";
  return value.startsWith("/") ? value : `/${value}`;
}

export function buildLocalizedPath(locale: Locale, path = "") {
  const cleanPath = trimSlashes(path);
  return cleanPath ? `/${locale}/${cleanPath}` : `/${locale}`;
}

export function absoluteUrl(path = "/") {
  return new URL(withLeadingSlash(path), `${siteConfig.siteUrl}/`).toString();
}

export function buildLocaleAlternates(path = "") {
  const languages = Object.fromEntries(
    locales.map((locale) => [locale, absoluteUrl(buildLocalizedPath(locale, path))]),
  ) as Record<Locale, string>;

  return {
    canonical: languages[defaultLocale],
    languages,
  };
}

type BuildPageMetadataInput = {
  locale: Locale;
  path?: string;
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  type?: "website" | "article";
};

export function buildPageMetadata({
  locale,
  path = "",
  title,
  description,
  keywords = [],
  image = siteConfig.logo,
  type = "website",
}: BuildPageMetadataInput): Metadata {
  const pagePath = buildLocalizedPath(locale, path);
  const alternates = buildLocaleAlternates(path);
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: absoluteUrl(pagePath),
      languages: alternates.languages,
    },
    openGraph: {
      type,
      locale: localeMap[locale],
      url: absoluteUrl(pagePath),
      title,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: imageUrl,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

type BreadcrumbItem = {
  name: string;
  path: string;
};

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}


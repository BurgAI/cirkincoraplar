export const categoryCatalog = {
  women: {
    dir: "kadin",
    order: [
      "bamboo",
      "bamboo-parmak-corap",
      "diz-alti",
      "diz-ustu",
      "en-yeniler",
      "ince-corap",
      "nakisli-corap",
      "patik",
      "pilates-corap",
      "renkli-corap",
      "sneaker-ve-babet",
      "soket",
    ],
    labels: {
      bamboo: { tr: "Bamboo", en: "Bamboo", de: "Bambus" },
      "bamboo-parmak-corap": { tr: "Bamboo Parmak Çorap", en: "Bamboo Toe Socks", de: "Bambus-Zehensocken" },
      "diz-alti": { tr: "Diz Altı", en: "Ankle", de: "Knöchelsocken" },
      "diz-ustu": { tr: "Diz Üstü", en: "Knee High", de: "Kniestrümpfe" },
      "en-yeniler": { tr: "En Yeniler", en: "New Arrivals", de: "Neuheiten" },
      "ince-corap": { tr: "İnce Çorap", en: "Sheer Socks", de: "Feine Socken" },
      "nakisli-corap": { tr: "Nakışlı Çorap", en: "Embroidered", de: "Bestickt" },
      patik: { tr: "Patik", en: "Slipper Socks", de: "Hüttensocken" },
      "pilates-corap": { tr: "Pilates Çorap", en: "Pilates Socks", de: "Pilates-Socken" },
      "renkli-corap": { tr: "Renkli Çorap", en: "Colorful", de: "Bunte Socken" },
      "sneaker-ve-babet": { tr: "Sneaker ve Babet", en: "Sneaker & Ballet", de: "Sneaker & Ballerina" },
      soket: { tr: "Soket", en: "No-Show", de: "Unsichtbare Socken" },
    },
  },
  men: {
    dir: "erkek",
    order: [
      "bambu-corap",
      "desenli-corap",
      "diyabetik-corap",
      "kislik-corap",
      "patik-corap",
      "sneaker-corap",
    ],
    labels: {
      "bambu-corap": { tr: "Bambu Çorap", en: "Bamboo", de: "Bambus" },
      "desenli-corap": { tr: "Desenli Çorap", en: "Patterned", de: "Gemustert" },
      "diyabetik-corap": { tr: "Diyabetik Çorap", en: "Diabetic", de: "Diabetiker" },
      "kislik-corap": { tr: "Kışlık Çorap", en: "Thermal", de: "Thermosocken" },
      "patik-corap": { tr: "Patik Çorap", en: "Slipper Socks", de: "Hüttensocken" },
      "sneaker-corap": { tr: "Sneaker Çorap", en: "Sneaker", de: "Sneaker" },
    },
  },
  kids: {
    dir: "cocuk",
    order: ["erkek-cocuk", "kiz-cocuk", "taraftar"],
    labels: {
      "erkek-cocuk": { tr: "Erkek Çocuk", en: "Boys", de: "Jungen" },
      "kiz-cocuk": { tr: "Kız Çocuk", en: "Girls", de: "Mädchen" },
      taraftar: { tr: "Taraftar", en: "Fan Socks", de: "Fan-Socken" },
    },
  },
} as const;

export type CatalogPageSlug = keyof typeof categoryCatalog;
export type CatalogLocale = "tr" | "en" | "de";

export function getCategoryDir(pageSlug: CatalogPageSlug) {
  return categoryCatalog[pageSlug].dir;
}

export function getCategoryOrder(pageSlug: CatalogPageSlug) {
  return categoryCatalog[pageSlug].order;
}

export function getSubcategoryLabel(
  locale: CatalogLocale,
  pageSlug: CatalogPageSlug,
  slug: string,
) {
  const labels = categoryCatalog[pageSlug].labels as Record<
    string,
    Record<CatalogLocale, string>
  >;
  return labels[slug]?.[locale] ?? slug.replace(/-/g, " ");
}

export function getLocalizedSubcategories(
  locale: CatalogLocale,
  pageSlug: CatalogPageSlug,
  availableSlugs: string[],
) {
  return availableSlugs.map((slug) => ({
    slug,
    label: getSubcategoryLabel(locale, pageSlug, slug),
  }));
}

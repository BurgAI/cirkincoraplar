export type LocalizedText = {
  tr: string;
  en: string;
};

const b = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export type Category = {
  title: LocalizedText;
  description: LocalizedText;
  href: string;
  image: string;
  imageAlt: string;
  note: string;
};

export const categories: Category[] = [
  {
    title: { tr: "Çorap Üretimi", en: "Sock Production" },
    description: {
      tr: "Günlük, renkli, desenli ve markaya özel çorap seçenekleri.",
      en: "Daily, colorful, patterned, and brand-ready sock options.",
    },
    href: "/socks",
    image: `${b}/images/placeholder-socks.svg`,
    imageAlt: "Gerçek çorap ürün fotoğrafı ile değiştirilecek alan",
    note: "Gerçek çorap ürün fotoğrafı ile değiştirilecek.",
  },
  {
    title: { tr: "Bez Çanta", en: "Tote Bags" },
    description: {
      tr: "Promosyon, mağaza, etkinlik ve marka kullanımı için bez çanta.",
      en: "Tote bags for promotions, stores, events, and brand use.",
    },
    href: "/tote-bags",
    image: `${b}/images/placeholder-tote.svg`,
    imageAlt: "Gerçek bez çanta fotoğrafı ile değiştirilecek alan",
    note: "Gerçek bez çanta fotoğrafı ile değiştirilecek.",
  },
  {
    title: { tr: "Özel Üretim", en: "Custom Production" },
    description: {
      tr: "Logo, renk, desen ve adet ihtiyacına göre üretim planı.",
      en: "Production planning by logo, color, pattern, and quantity.",
    },
    href: "/custom-production",
    image: `${b}/images/placeholder-custom.svg`,
    imageAlt: "Özel üretim numune fotoğrafı ile değiştirilecek alan",
    note: "Özel üretim numune fotoğrafı ile değiştirilecek.",
  },
  {
    title: { tr: "Toptan Satış", en: "Wholesale" },
    description: {
      tr: "Stoklu ürünler ve düzenli alımlar için üreticiden teklif.",
      en: "Manufacturer quotes for stock products and recurring orders.",
    },
    href: "/wholesale",
    image: `${b}/images/placeholder-wholesale.svg`,
    imageAlt: "Toptan ürün koli veya raf fotoğrafı ile değiştirilecek alan",
    note: "Toptan ürün koli veya raf fotoğrafı ile değiştirilecek.",
  },
];

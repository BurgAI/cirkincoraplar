const b = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const siteConfig = {
  name: "Çirkin Çoraplar",
  logo: `${b}/images/logo-instagram.jpg`,
  exportBrand: "Milotreading",
  title: "Çirkin Çoraplar | Çorap ve Bez Çanta Üretimi",
  description:
    "Çorap, bez çanta, özel üretim ve toptan siparişler için üretici firma.",
  whatsappNumber: "+90 531 571 92 18",
  whatsappMessage:
    "Merhaba, Çirkin Çoraplar ürünleri ve toptan üretim hakkında bilgi almak istiyorum.",
  instagramUrl: "https://www.instagram.com/cirkin_coraplar/",
  email: "info@cirkincoraplar.com",
  location: "Türkiye",
  address: "Terazidere Mahallesi, Cengiz Topel Sokak No:22, Bayrampaşa, İstanbul, Türkiye 34440",
  futureKeywords: ["Milotreading", "socks manufacturer", "custom tote bags"],
} as const;

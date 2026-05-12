const b = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const siteConfig = {
  name: "Çirkin Çoraplar",
  logo: `${b}/images/logo-instagram.jpg`,
  exportBrand: "Milotreading",
  title: "Çirkin Çoraplar | Çorap ve Bez Çanta Üretimi",
  description:
    "Çorap, bez çanta, özel üretim ve toptan siparişler için üretici firma.",
  whatsappNumber: "+90XXXXXXXXXX",
  whatsappMessage:
    "Merhaba, Çirkin Çoraplar ürünleri ve toptan üretim hakkında bilgi almak istiyorum.",
  instagramUrl: "https://www.instagram.com/cirkin_coraplar?igsh=YmVsYjlja3l0eDBi",
  email: "info@cirkincoraplar.com",
  location: "Türkiye",
  futureKeywords: ["Milotreading", "socks manufacturer", "custom tote bags"],
} as const;

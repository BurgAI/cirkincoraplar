import { instagramMedia } from "@/data/media";

export const pageContent = {
  socks: {
    title: "Çorap Üretimi",
    eyebrow: "Üreticiden çorap çözümleri",
    description:
      "Stoklu ürünler, desenli koleksiyonlar ve markaya özel çorap çalışmaları için üretici firma ile doğrudan iletişime geçin.",
    bullets: ["Desenli çorap", "Logo çorap", "Toptan stok ürün", "Numune odaklı özel üretim"],
    image: instagramMedia.socks.hero,
  },
  toteBags: {
    title: "Bez Çanta Üretimi",
    eyebrow: "Promosyon ve marka kullanımı",
    description:
      "Mağaza, etkinlik, fuar ve kurumsal promosyon ihtiyaçları için baskıya uygun bez çanta üretimi.",
    bullets: ["Promosyon çanta", "Markalı bez çanta", "Farklı ebat seçenekleri", "Toplu sipariş"],
    image: instagramMedia.tote.custom,
  },
  customProduction: {
    title: "Özel Üretim",
    eyebrow: "Logo, renk ve adet ihtiyacına göre",
    description:
      "Ürününüzü hedef kullanım, marka dili, adet ve teslim planına göre birlikte netleştiririz.",
    bullets: ["İhtiyaç analizi", "Logo ve desen uyarlama", "Numune değerlendirme", "Üretim planı"],
    image: instagramMedia.socks.bamboo,
  },
  wholesale: {
    title: "Toptan Satış",
    eyebrow: "Stoklu ve düzenli alımlar",
    description:
      "Mağazalar, kurumsal müşteriler ve promosyon firmaları için çorap ve bez çanta toptan teklifleri.",
    bullets: ["Üreticiden teklif", "Stoklu ürün alternatifi", "Düzenli sipariş desteği", "WhatsApp ile hızlı dönüş"],
    image: instagramMedia.socks.wholesale,
  },
} as const;

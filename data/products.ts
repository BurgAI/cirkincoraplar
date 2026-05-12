export type Product = {
  name: string;
  category: "socks" | "tote-bags";
  description: string;
  image: string;
  specs: string[];
};

export const products: Product[] = [
  {
    name: "Desenli Çorap",
    category: "socks",
    description: "Renkli koleksiyonlar, stoklu modeller ve marka uyarlamaları.",
    image: "/images/placeholder-socks.svg",
    specs: ["Stok veya özel desen", "Farklı beden seçenekleri", "Toptan sipariş"],
  },
  {
    name: "Logo Çorap",
    category: "socks",
    description: "Kurumsal hediye, etkinlik ve marka projeleri için logo uygulama.",
    image: "/images/placeholder-custom.svg",
    specs: ["Logo uyarlama", "Renk planı", "Numune süreci"],
  },
  {
    name: "Promosyon Bez Çanta",
    category: "tote-bags",
    description: "Mağaza, fuar, etkinlik ve kampanyalar için sade bez çanta.",
    image: "/images/placeholder-tote.svg",
    specs: ["Baskıya uygun yüzey", "Farklı ebatlar", "Toplu üretim"],
  },
  {
    name: "Markalı Bez Çanta",
    category: "tote-bags",
    description: "Marka kimliğine göre renk, baskı ve kullanım kurgusu.",
    image: "/images/placeholder-tote.svg",
    specs: ["Logo baskı", "Ebat seçimi", "Üretici fiyatı"],
  },
];

export const capabilities = [
  "Çorap ve bez çanta üretimi",
  "Stoklu ürün tedariği",
  "Logo ve desene göre özel çalışma",
  "Toptan ve düzenli sipariş planlama",
  "İhracat markası Milotreading için büyümeye hazır yapı",
];

export const trustPoints = [
  "Üretici firma ile doğrudan iletişim",
  "WhatsApp üzerinden hızlı teklif süreci",
  "Stoklu ve özel üretim seçenekleri",
  "Sade, anlaşılır ve proje odaklı çalışma",
];

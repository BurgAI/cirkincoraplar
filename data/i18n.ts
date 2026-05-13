import { instagramMedia } from "@/data/media";

export const locales = ["tr", "en", "de"] as const;

export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = {
  tr: "TR",
  en: "EN",
  de: "DE",
};

export const defaultLocale: Locale = "tr";

export const pageSlugs = [
  "socks",
  "tote-bags",
  "custom-production",
  "wholesale",
  "about",
  "contact",
] as const;

export type PageSlug = (typeof pageSlugs)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function isPageSlug(value: string): value is PageSlug {
  return pageSlugs.includes(value as PageSlug);
}

export const dictionary = {
  tr: {
    meta: {
      title: "Çirkin Çoraplar | Çorap ve Bez Çanta Üretimi",
      description:
        "Çorap, bez çanta, özel üretim ve toptan siparişler için üretici firma.",
      keywords: [
        "Çirkin Çoraplar",
        "çorap üretimi",
        "bez çanta üretimi",
        "özel üretim çorap",
        "toptan çorap",
        "Milotreading",
      ],
    },
    common: {
      manufacturer: "Üretici firma",
      brandLine: "Premium günlük ürünler",
      quote: "Teklif",
      whatsappCta: "WhatsApp ile teklif al",
      whatsappShort: "WhatsApp'tan yaz",
      instagram: "Instagram'a git",
      photoNote: "Instagram urun fotografi",
      menuLabel: "Ana menü",
      footerMenuLabel: "Alt menü",
    },
    nav: {
      home: "Ana Sayfa",
      women: "Kadın",
      men: "Erkek",
      kids: "Çocuk",
      socks: "Çorap",
      toteBags: "Bez Çanta",
      customProduction: "Özel Üretim",
      wholesale: "Toptan",
      about: "Hakkımızda",
      contact: "İletişim",
    },
    home: {
      heroTitle: "Renkli çoraplar. Temiz çantalar. Günlük stil.",
      heroDescription:
        "Instagram ruhunu taşıyan çorap ve bez çanta koleksiyonları. Hazır ürün, özel baskı ve toplu sipariş için sade bir teklif deneyimi.",
      heroSecondary: "Özel üretim",
      categoriesEyebrow: "Ürün grupları",
      categoriesTitle: "İhtiyacınıza göre üretim ve tedarik",
      categoriesDescription:
        "Çorap, bez çanta, özel üretim ve toptan alımlar için ana ürün gruplarını buradan inceleyebilirsiniz.",
      marketEyebrow: "Kategori sistemi",
      marketTitle: "Sadece çorap markası değil, üretim yapan profesyonel yapı",
      marketDescription:
        "Online satışta güçlü olan çorap markalarındaki düzenli kategori ve ürün sunumu mantığını koruyoruz. Farkımız, çorap tarafının yanında bez çanta üretimini de ciddi bir iş kolu olarak konumlandırmak.",
      whyEyebrow: "Neden bizimle çalışmalı?",
      whyTitle: "Satıcıdan değil, üreticiden teklif alın",
      whyDescription:
        "Ürün bilgisi, adet, stok durumu ve özel üretim ihtiyacı aynı kanalda netleşir. Bu yapı özellikle toptan ve kurumsal siparişlerde süreci hızlandırır.",
      capabilitiesEyebrow: "Üretim kabiliyetleri",
      capabilitiesTitle: "Stok, toptan ve özel üretim için esnek yapı",
      capabilitiesDescription:
        "İlk MVP içerikleri kısa tutuldu. Gerçek üretim kapasitesi, minimum adetler, teslim süreleri ve kumaş detayları sonraki aşamada buraya eklenebilir.",
      socialEyebrow: "Sosyal kanıt",
      socialTitle: "Instagram kanalından gelen gerçek talep",
      socialDescription:
        "Mevcut satış ve müşteri iletişimi Instagram üzerinden ilerliyor. Web sitesi bu güveni üretici kimliği ve daha düzenli teklif akışıyla destekler.",
      socialCard:
        "Secilen urun gorselleri Instagram paylasimlarindan alindi ve siteye mantikli bolumlerde yerlestirildi.",
      exportNote:
        "ihracat markası için İngilizce ve Almanca içerik yapısı hazırlanmıştır.",
    },
    cta: {
      label: "WhatsApp teklif",
      title: "Ürün, baskı veya toplu sipariş için konuşalım.",
      description:
        "Model, adet ve kullanım amacını yazın. Size sade ve hızlı bir teklif akışıyla dönelim.",
    },
    categories: [
      {
        title: "Kadın",
        description: "Renkli, rahat ve dikkat çeken günlük çoraplar.",
        href: "socks#women",
        image: instagramMedia.socks.hero,
        imageAlt: "Gerçek çorap ürün fotoğrafı ile değiştirilecek alan",
        note: "Gerçek çorap ürün fotoğrafı ile değiştirilecek.",
      },
      {
        title: "Erkek",
        description: "Minimal, konforlu ve kolay kombinlenen modeller.",
        href: "socks#men",
        image: instagramMedia.socks.wholesale,
        imageAlt: "Gerçek bez çanta fotoğrafı ile değiştirilecek alan",
        note: "Gerçek bez çanta fotoğrafı ile değiştirilecek.",
      },
      {
        title: "Çocuk",
        description: "Canlı renkler, yumuşak his ve eğlenceli desenler.",
        href: "socks#kids",
        image: instagramMedia.socks.bamboo,
        imageAlt: "Özel üretim numune fotoğrafı ile değiştirilecek alan",
        note: "Özel üretim numune fotoğrafı ile değiştirilecek.",
      },
      {
        title: "Bez Çanta",
        description: "Butik, kafe ve marka kullanımı için temiz tote stilleri.",
        href: "tote-bags",
        image: instagramMedia.tote.school,
        imageAlt: "Toptan ürün koli veya raf fotoğrafı ile değiştirilecek alan",
        note: "Toptan ürün fotoğrafı ile değiştirilecek.",
      },
    ],
    trustPoints: [
      "Üretici firma ile doğrudan iletişim",
      "WhatsApp üzerinden hızlı teklif süreci",
      "Stoklu ve özel üretim seçenekleri",
      "Sade, anlaşılır ve proje odaklı çalışma",
    ],
    capabilities: [
      "Çorap ve bez çanta üretimi",
      "Stoklu ürün tedariği",
      "Logo ve desene göre özel çalışma",
      "Toptan ve düzenli sipariş planlama",
      "İhracat markası Milotreading için büyümeye hazır yapı",
    ],
    marketCategories: [
      {
        title: "Çorap kategorileri",
        items: ["Desenli çorap", "Renkli soket çorap", "Set ürünler", "Logo ve özel üretim çorap"],
      },
      {
        title: "Bez çanta talep alanları",
        items: [
          "Baskılı bez çantalar",
          "Kurumsal ve promosyon çantaları",
          "Kafe/restoran çantaları",
          "Butik mağaza, fuar ve organizasyon çantaları",
        ],
      },
    ],
    pages: {
      socks: {
        title: "Çorap Üretimi",
        eyebrow: "Üreticiden çorap çözümleri",
        description:
          "Stoklu ürünler, desenli koleksiyonlar ve markaya özel çorap çalışmaları için üretici firma ile doğrudan iletişime geçin.",
        bullets: ["Desenli çorap", "Logo çorap", "Toptan stok ürün", "Numune odaklı özel üretim"],
        image: instagramMedia.socks.hero,
        sectionEyebrow: "Çorap seçenekleri",
        sectionTitle: "Stoklu ve özel üretime uygun modeller",
        sectionDescription:
          "Gerçek ürün fotoğrafları, renk kartelası ve teknik bilgiler sonraki aşamada bu listeye eklenebilir.",
        ctaTitle: "Çorap üretimi için WhatsApp'tan bilgi alın",
      },
      toteBags: {
        title: "Premium Bez Çanta Koleksiyonları",
        eyebrow: "Tote bag studio",
        description:
          "Sanat, şehir, stok ve özel baskı koleksiyonlarıyla modern markalar için premium tote bag deneyimi.",
        bullets: ["Stock Products", "Custom Printed Bags", "Private Label", "Low MOQ"],
        image: instagramMedia.tote.custom,
        sectionEyebrow: "Koleksiyonlar",
        sectionTitle: "Premium tote bag koleksiyonları",
        sectionDescription:
          "Stok modeller 1 adetten alınabilir. Özel baskı ve özel üretimlerde model/tasarım başına minimum 50 adet gerekir.",
        collectionEyebrow: "Premium tote bags",
        collectionTitle: "Koleksiyon bazlı bez çanta vitrini",
        collectionDescription:
          "Ucuz promosyon dili yerine, butik, kafe, lifestyle marka ve Avrupa toptan müşterilerine uygun koleksiyon mantığı.",
        collections: [
          {
            title: "Art Collection",
            description: "İllüstrasyon, desen ve sınırlı seri hissi taşıyan görsel tote modelleri.",
            image: instagramMedia.tote.custom,
            imageAlt: "Art Collection premium bez çanta fotoğrafı",
            tags: ["Stock Products", "1+ adet"],
            rule: "Stok ürünlerde minimum adet yok.",
            note: "Hazır koleksiyon modelleri tekli siparişten toptan alıma kadar uygundur.",
          },
          {
            title: "Amsterdam Collection",
            description: "Şehir, bisiklet, kahve ve günlük kullanım estetiğine yakın modern tote seçkisi.",
            image: instagramMedia.tote.school,
            imageAlt: "Amsterdam Collection lifestyle bez çanta fotoğrafı",
            tags: ["Lifestyle", "Wholesale"],
            rule: "Stok modeller 1 adetten başlayabilir.",
            note: "Butik ve konsept mağazalar için düşük adetli başlangıç yapılabilir.",
          },
          {
            title: "Stock Models",
            description: "Hazır renk, kumaş ve baskı seçenekleriyle hızlı satın alma ve tekrar sipariş.",
            image: instagramMedia.tote.school,
            imageAlt: "Stock Models bez çanta katalog fotoğrafı",
            tags: ["Low MOQ", "Ready to buy"],
            rule: "Minimum adet yok.",
            note: "Stok ürünlerde 1 adet veya toptan sipariş mümkündür.",
          },
          {
            title: "Custom Printed Bags",
            description: "Logo, artwork veya kampanya görseliyle markaya özel premium baskılı tote bag.",
            image: instagramMedia.tote.custom,
            imageAlt: "Custom Printed Bags baskılı bez çanta fotoğrafı",
            tags: ["Custom Production", "50+ / design"],
            rule: "Tasarım başına minimum 50 adet.",
            note: "Özel baskı, renk ve tasarım talepleri 50 adet ve üzeri planlanır.",
          },
          {
            title: "Business / Cafe Bags",
            description: "Kafe, restoran, butik mağaza ve kurumsal kullanım için rafine marka çantaları.",
            image: instagramMedia.tote.custom,
            imageAlt: "Business Cafe Bags premium tote bag fotoğrafı",
            tags: ["Private Label", "Wholesale"],
            rule: "Özel üretimde model başına minimum 50 adet.",
            note: "Private label ve wholesale projelerde marka dili, adet ve teslim planı birlikte netleşir.",
          },
        ],
        purchaseRules: [
          {
            label: "Stock Products",
            title: "Stok ürünlerde 1 adetten başlayın",
            description: "Hazır koleksiyon ve stok modeller için minimum adet yoktur. Tekli alım veya toptan sipariş yapılabilir.",
          },
          {
            label: "Custom Production",
            title: "Özel üretimde 50 adet / tasarım",
            description: "Özel baskı, özel renk, private label veya yeni model taleplerinde minimum adet model/tasarım başına 50 adettir.",
          },
        ],
        faqEyebrow: "FAQ",
        faqTitle: "Bez çanta sipariş bilgileri",
        faq: [
          {
            question: "Stok bez çantaları 1 adet alabilir miyim?",
            answer: "Evet. Stok ürünlerde minimum adet yoktur; 1 adet veya toptan sipariş verebilirsiniz.",
          },
          {
            question: "Özel baskılı bez çantada minimum adet nedir?",
            answer: "Özel baskı ve özel üretimlerde minimum adet tasarım/model başına 50 adettir.",
          },
          {
            question: "Private Label veya wholesale çalışma mümkün mü?",
            answer: "Evet. Avrupa toptan müşterileri, kafe, butik ve kurumsal markalar için private label ve wholesale süreçleri planlanabilir.",
          },
        ],
        ctaTitle: "Premium tote bag koleksiyonu için teklif alın",
      },
      customProduction: {
        title: "Özel Üretim",
        eyebrow: "Logo, renk ve adet ihtiyacına göre",
        description:
          "Ürününüzü hedef kullanım, marka dili, adet ve teslim planına göre birlikte netleştiririz.",
        bullets: ["İhtiyaç analizi", "Logo ve desen uyarlama", "Numune değerlendirme", "Üretim planı"],
        image: instagramMedia.socks.bamboo,
        sectionEyebrow: "Süreç",
        sectionTitle: "Özel üretimde sade ve net ilerleme",
        sectionDescription:
          "İlk görüşmede ihtiyacı sade şekilde anlarız. Özel üretim ve özel baskıda minimum adet model/tasarım başına 50 adettir.",
        productionRules: [
          {
            label: "Stock Products",
            title: "Stok ürünlerde minimum adet yok",
            description: "Hazır ürünler 1 adetten başlayarak alınabilir; toptan alımlarda ayrıca fiyatlandırma yapılır.",
          },
          {
            label: "Custom Production",
            title: "Özel üretimde 50 adet / tasarım",
            description: "Logo, özel baskı, private label veya yeni model üretimlerinde minimum adet model/tasarım başına 50 adettir.",
          },
        ],
        steps: [
          "Ürün tipi, adet ve kullanım amacı netleştirilir.",
          "Logo, renk, desen veya baskı beklentisi değerlendirilir.",
          "Uygun üretim yöntemi ve numune süreci konuşulur.",
          "Onay sonrası termin ve üretim planı paylaşılır.",
        ],
        faqEyebrow: "FAQ",
        faqTitle: "Özel üretim minimumları",
        faq: [
          {
            question: "Özel üretimde minimum adet kaçtır?",
            answer: "Özel baskı, private label ve yeni model üretimlerinde minimum adet model/tasarım başına 50 adettir.",
          },
          {
            question: "Stok ürünleri özel üretim olmadan alabilir miyim?",
            answer: "Evet. Stok ürünlerde minimum adet yoktur; 1 adetten başlayarak satın alınabilir.",
          },
        ],
        ctaTitle: "Logo veya desenli üretim için görüşelim",
      },
      wholesale: {
        title: "Toptan Satış",
        eyebrow: "Stoklu ve düzenli alımlar",
        description:
          "Mağazalar, kurumsal müşteriler ve promosyon firmaları için çorap ve bez çanta toptan teklifleri.",
        bullets: ["Üreticiden teklif", "Stoklu ürün alternatifi", "Düzenli sipariş desteği", "WhatsApp ile hızlı dönüş"],
        image: instagramMedia.socks.wholesale,
        sectionEyebrow: "Toptan çalışma",
        sectionTitle: "Instagram dışındaki profesyonel teklif akışı",
        sectionDescription:
          "Toptan taleplerde adet, ürün tipi, teslim beklentisi ve özel üretim ihtiyacı tek kanalda toplanır.",
        items: [
          "Stoklu çorap ve bez çanta alternatifleri",
          "Mağaza ve kurumsal müşteri siparişleri",
          "Promosyon firmaları için düzenli üretim",
          "Adet ve teslim planına göre teklif",
        ],
        ctaTitle: "Toptan fiyat ve stok bilgisi alın",
      },
      about: {
        eyebrow: "Hakkımızda",
        title: "Çirkin Çoraplar, üretici kimliğiyle büyüyen bir tekstil markasıdır",
        description:
          "Firma bugün çorap ve bez çanta üretimi yapar. Satış ve müşteri iletişimi ağırlıklı olarak Instagram üzerinden ilerler. Bu web sitesi, mevcut güveni daha profesyonel bir üretici sunumuna ve WhatsApp odaklı teklif sürecine taşımak için hazırlanmıştır.",
        sectionEyebrow: "Marka yapısı",
        sectionTitle: "Türkiye pazarı ve ihracat için hazır temel",
        sectionDescription:
          "Çirkin Çoraplar Türkiye'deki mevcut marka iletişimini taşır. Milotreading ise gelecekte Avrupa ve global pazarlara açılmak için ayrılmış marka alanıdır.",
        exportText:
          "İngilizce ve Almanca içerikler artık temel yapıda hazırdır. İhracat hedefleri netleştiğinde ayrı katalog dili ve teklif formları eklenebilir.",
        ctaTitle: "Üretici firma ile doğrudan iletişime geçin",
      },
      contact: {
        eyebrow: "İletişim",
        title: "Teklif ve ürün bilgisi için WhatsApp'tan yazın",
        description:
          "Ürün tipi, adet, özel üretim ihtiyacı ve varsa logo veya desen bilgisini paylaşmanız yeterli.",
        whatsapp: "WhatsApp",
        instagram: "Instagram",
        location: "Konum",
        locationText: "Terazidere Mah. Cengiz Topel Sok. No:22, Bayrampaşa, İstanbul",
        locationNote: "Türkiye 34440",
      },
    },
    products: [
      {
        name: "Desenli Çorap",
        category: "socks",
        description: "Renkli koleksiyonlar, stoklu modeller ve marka uyarlamaları.",
        image: instagramMedia.socks.hero,
        specs: ["Stok veya özel desen", "Farklı beden seçenekleri", "Toptan sipariş"],
      },
      {
        name: "Logo Çorap",
        category: "socks",
        description: "Kurumsal hediye, etkinlik ve marka projeleri için logo uygulama.",
        image: instagramMedia.socks.bamboo,
        specs: ["Logo uyarlama", "Renk planı", "Numune süreci"],
      },
      {
        name: "Promosyon Bez Çanta",
        category: "tote-bags",
        description: "Mağaza, fuar, etkinlik ve kampanyalar için sade bez çanta.",
        image: instagramMedia.tote.custom,
        specs: ["Baskıya uygun yüzey", "Farklı ebatlar", "Toplu üretim"],
      },
      {
        name: "Markalı Bez Çanta",
        category: "tote-bags",
        description: "Marka kimliğine göre renk, baskı ve kullanım kurgusu.",
        image: instagramMedia.tote.school,
        specs: ["Logo baskı", "Ebat seçimi", "Üretici fiyatı"],
      },
    ],
  },
  en: {
    meta: {
      title: "Çirkin Çoraplar | Socks and Tote Bag Manufacturing",
      description:
        "Manufacturer for socks, tote bags, custom production, and wholesale orders.",
      keywords: ["socks manufacturer", "custom socks", "tote bag manufacturer", "wholesale socks", "Milotreading"],
    },
    common: {
      manufacturer: "Manufacturer",
      brandLine: "Premium everyday goods",
      quote: "Quote",
      whatsappCta: "Get a WhatsApp quote",
      whatsappShort: "Message on WhatsApp",
      instagram: "Open Instagram",
      photoNote: "Instagram product photo",
      menuLabel: "Main navigation",
      footerMenuLabel: "Footer navigation",
    },
    nav: {
      home: "Home",
      women: "Women",
      men: "Men",
      kids: "Kids",
      socks: "Socks",
      toteBags: "Tote Bags",
      customProduction: "Custom Production",
      wholesale: "Wholesale",
      about: "About",
      contact: "Contact",
    },
    home: {
      heroTitle: "Colorful socks. Clean totes. Everyday style.",
      heroDescription:
        "Instagram-native socks and tote bags for daily looks, brand moments, and custom orders.",
      heroSecondary: "Custom production",
      categoriesEyebrow: "Product groups",
      categoriesTitle: "Production and supply for your needs",
      categoriesDescription:
        "Explore the main product groups for socks, tote bags, custom production, and wholesale orders.",
      marketEyebrow: "Category system",
      marketTitle: "Not only a sock brand, but a professional production structure",
      marketDescription:
        "We keep the clear category and product presentation logic of strong online sock brands. The difference is that tote bag production is positioned as a serious second business line alongside socks.",
      whyEyebrow: "Why work with us?",
      whyTitle: "Get a quote from the manufacturer, not only a reseller",
      whyDescription:
        "Product details, quantities, stock options, and custom production needs are clarified in one channel. This speeds up wholesale and corporate orders.",
      capabilitiesEyebrow: "Production capabilities",
      capabilitiesTitle: "Flexible structure for stock, wholesale, and custom production",
      capabilitiesDescription:
        "MVP content is intentionally concise. Real capacity, minimum order quantities, lead times, and fabric details can be added later.",
      socialEyebrow: "Social proof",
      socialTitle: "Real demand from the Instagram channel",
      socialDescription:
        "Current sales and customer communication happen mainly through Instagram. This website supports that trust with a manufacturer-focused presentation.",
      socialCard:
        "Selected Instagram product photos are now placed across the site to support product discovery and quotation flow.",
      exportNote:
        "English and German content structure is ready for the export brand.",
    },
    cta: {
      label: "WhatsApp quote",
      title: "Let’s talk products, prints, or bulk orders.",
      description:
        "Share model, quantity, and use case. We will respond with a clear quote flow.",
    },
    categories: [
      {
        title: "Women",
        description: "Colorful everyday socks with a soft premium feel.",
        href: "socks#women",
        image: instagramMedia.socks.hero,
        imageAlt: "Area to replace with a real sock product photo",
        note: "Replace with a real sock product photo.",
      },
      {
        title: "Men",
        description: "Minimal, comfortable styles for easy daily outfits.",
        href: "socks#men",
        image: instagramMedia.socks.wholesale,
        imageAlt: "Area to replace with a real tote bag photo",
        note: "Replace with a real tote bag photo.",
      },
      {
        title: "Kids",
        description: "Soft textures, bright colors, playful patterns.",
        href: "socks#kids",
        image: instagramMedia.socks.bamboo,
        imageAlt: "Area to replace with a real custom sample photo",
        note: "Replace with a real custom sample photo.",
      },
      {
        title: "Tote Bags",
        description: "Clean tote styles for shops, cafes, and brands.",
        href: "tote-bags",
        image: instagramMedia.tote.school,
        imageAlt: "Area to replace with a real wholesale product photo",
        note: "Replace with a real wholesale product photo.",
      },
    ],
    trustPoints: [
      "Direct communication with the manufacturer",
      "Fast quote flow through WhatsApp",
      "Stock and custom production options",
      "Simple, clear, project-focused process",
    ],
    capabilities: [
      "Sock and tote bag manufacturing",
      "Stock product supply",
      "Custom work by logo and pattern",
      "Wholesale and recurring order planning",
      "Ready to grow under the export brand Milotreading",
    ],
    marketCategories: [
      {
        title: "Sock categories",
        items: ["Patterned socks", "Colorful crew socks", "Set products", "Logo and custom socks"],
      },
      {
        title: "Tote bag demand areas",
        items: [
          "Printed tote bags",
          "Corporate and promotional bags",
          "Cafe and restaurant bags",
          "Boutique store, fair, and event bags",
        ],
      },
    ],
    pages: {
      socks: {
        title: "Sock Production",
        eyebrow: "Sock solutions from the manufacturer",
        description:
          "Contact the manufacturer directly for stock products, patterned collections, and brand-specific sock projects.",
        bullets: ["Patterned socks", "Logo socks", "Wholesale stock products", "Sample-led custom production"],
        image: instagramMedia.socks.hero,
        sectionEyebrow: "Sock options",
        sectionTitle: "Models suitable for stock and custom production",
        sectionDescription:
          "Real product photos, color cards, and technical details can be added in the next phase.",
        ctaTitle: "Ask about sock production on WhatsApp",
      },
      toteBags: {
        title: "Premium Tote Bag Collections",
        eyebrow: "Tote bag studio",
        description:
          "A collection-led tote bag range for lifestyle brands, cafes, concept stores, and European wholesale customers.",
        bullets: ["Premium Tote Bags", "Stock Products", "Custom Production", "Private Label"],
        image: instagramMedia.tote.custom,
        sectionEyebrow: "Collections",
        sectionTitle: "Premium tote bag collections",
        sectionDescription:
          "Stock products can be ordered from 1 piece. Custom production and custom printing require a minimum of 50 pieces per design.",
        collectionEyebrow: "Premium tote bags",
        collectionTitle: "A collection-based tote bag catalogue",
        collectionDescription:
          "Designed to feel like a lifestyle and fashion catalogue, with clear buying paths for stock products, wholesale, and private label projects.",
        collections: [
          {
            title: "Art Collection",
            description: "Graphic and illustration-led tote bags with a limited-edition gallery feel.",
            image: instagramMedia.tote.custom,
            imageAlt: "Art Collection premium tote bag photography",
            tags: ["Stock Products", "1+ piece"],
            rule: "No minimum order for stock products.",
            note: "Ready-made collection styles are suitable for single-piece orders and wholesale replenishment.",
          },
          {
            title: "Amsterdam Collection",
            description: "A city-inspired edit with coffee, cycling, concept-store, and everyday carry aesthetics.",
            image: instagramMedia.tote.school,
            imageAlt: "Amsterdam Collection lifestyle tote bag photography",
            tags: ["Lifestyle", "Wholesale"],
            rule: "Stock models start from 1 piece.",
            note: "Ideal for boutiques and concept stores that want to test a premium tote bag range with low MOQ.",
          },
          {
            title: "Stock Models",
            description: "Ready-to-buy tote bags with existing fabrics, colours, and print directions.",
            image: instagramMedia.tote.school,
            imageAlt: "Stock Models premium tote bag catalogue photography",
            tags: ["Low MOQ", "Ready to buy"],
            rule: "No minimum order quantity.",
            note: "Stock products can be purchased as single items or ordered in wholesale quantities.",
          },
          {
            title: "Custom Printed Bags",
            description: "Premium printed tote bags for brand artwork, campaign graphics, and event collections.",
            image: instagramMedia.tote.custom,
            imageAlt: "Custom Printed Bags premium tote bag photography",
            tags: ["Custom Production", "50+ / design"],
            rule: "Minimum 50 pieces per design.",
            note: "Custom printing, colour direction, and artwork placement are planned from 50 pieces per design.",
          },
          {
            title: "Business / Cafe Bags",
            description: "Refined tote bags for cafes, restaurants, boutique retail, and corporate lifestyle brands.",
            image: instagramMedia.tote.custom,
            imageAlt: "Business Cafe Bags premium tote bag photography",
            tags: ["Private Label", "Wholesale"],
            rule: "Custom production starts from 50 pieces per model.",
            note: "Private label and wholesale projects are planned around brand use, quantity, and delivery timing.",
          },
        ],
        purchaseRules: [
          {
            label: "Stock Products",
            title: "Order stock products from 1 piece",
            description: "Ready-made stock products have no minimum order quantity. They can be purchased as single items or in wholesale quantities.",
          },
          {
            label: "Custom Production",
            title: "50 pieces per design for custom work",
            description: "Custom printing, private label work, custom colours, and new model production require a minimum of 50 pieces per design or model.",
          },
        ],
        faqEyebrow: "FAQ",
        faqTitle: "Tote bag order details",
        faq: [
          {
            question: "Can I order stock tote bags from 1 piece?",
            answer: "Yes. Stock products have no minimum order quantity, so you can buy a single item or place a wholesale order.",
          },
          {
            question: "What is the MOQ for custom printed tote bags?",
            answer: "Custom production and custom printing require a minimum of 50 pieces per design or model.",
          },
          {
            question: "Do you support private label and wholesale projects?",
            answer: "Yes. We support private label, wholesale, and custom production requests for European textile buyers, cafes, boutiques, and lifestyle brands.",
          },
        ],
        ctaTitle: "Request a quote for premium tote bags",
      },
      customProduction: {
        title: "Custom Production",
        eyebrow: "By logo, color, and quantity",
        description:
          "We clarify your product according to use case, brand language, quantity, and delivery plan.",
        bullets: ["Need analysis", "Logo and pattern adaptation", "Sample review", "Production plan"],
        image: instagramMedia.socks.bamboo,
        sectionEyebrow: "Process",
        sectionTitle: "A clear custom production process",
        sectionDescription:
          "We clarify the request first, then plan the right production path. Custom production and custom printing require a minimum of 50 pieces per design.",
        productionRules: [
          {
            label: "Stock Products",
            title: "No MOQ for stock products",
            description: "Ready-made stock products can be purchased from 1 piece. Wholesale pricing can be discussed for larger quantities.",
          },
          {
            label: "Custom Production",
            title: "50 pieces per design or model",
            description: "Custom printing, private label production, custom colours, and new model requests start from 50 pieces per design or model.",
          },
        ],
        steps: [
          "Product type, quantity, and use case are clarified.",
          "Logo, color, pattern, or print expectations are reviewed.",
          "Suitable production method and sample process are discussed.",
          "Timing and production plan are shared after approval.",
        ],
        faqEyebrow: "FAQ",
        faqTitle: "Custom production minimums",
        faq: [
          {
            question: "What is the MOQ for custom production?",
            answer: "Custom printing, private label production, and new model requests require a minimum of 50 pieces per design or model.",
          },
          {
            question: "Can I buy stock products without custom production?",
            answer: "Yes. Stock products have no MOQ and can be purchased from 1 piece.",
          },
        ],
        ctaTitle: "Let's discuss logo or patterned production",
      },
      wholesale: {
        title: "Wholesale",
        eyebrow: "Stock and recurring orders",
        description:
          "Wholesale quotes for socks and tote bags for stores, corporate customers, and promotional product companies.",
        bullets: ["Manufacturer quote", "Stock product alternatives", "Recurring order support", "Fast WhatsApp response"],
        image: instagramMedia.socks.wholesale,
        sectionEyebrow: "Wholesale process",
        sectionTitle: "A professional quote flow beyond Instagram",
        sectionDescription:
          "Wholesale requests collect quantity, product type, delivery expectations, and custom production needs in one channel.",
        items: [
          "Stock sock and tote bag alternatives",
          "Store and corporate customer orders",
          "Recurring production for promotion companies",
          "Quote by quantity and delivery plan",
        ],
        ctaTitle: "Ask for wholesale price and stock info",
      },
      about: {
        eyebrow: "About",
        title: "Çirkin Çoraplar is a textile brand growing with manufacturer strength",
        description:
          "The company currently manufactures socks and tote bags. Sales and customer communication mainly happen through Instagram. This website is prepared to turn that trust into a professional manufacturer presentation and WhatsApp-first quote flow.",
        sectionEyebrow: "Brand structure",
        sectionTitle: "A foundation for Turkey and export markets",
        sectionDescription:
          "Çirkin Çoraplar carries the current Turkish brand communication. Milotreading is reserved for future European and global market positioning.",
        exportText:
          "English and German content are now available in the base structure. Catalog language and quote forms can be added when export goals become clearer.",
        ctaTitle: "Contact the manufacturer directly",
      },
      contact: {
        eyebrow: "Contact",
        title: "Message us on WhatsApp for quotes and product information",
        description:
          "Share the product type, quantity, custom production need, and any logo or pattern details.",
        whatsapp: "WhatsApp",
        instagram: "Instagram",
        location: "Location",
        locationText: "Terazidere Mah. Cengiz Topel Sok. No:22, Bayrampaşa, Istanbul",
        locationNote: "Turkey 34440",
      },
    },
    products: [
      {
        name: "Patterned Socks",
        category: "socks",
        description: "Colorful collections, stock models, and brand adaptations.",
        image: instagramMedia.socks.hero,
        specs: ["Stock or custom pattern", "Different size options", "Wholesale order"],
      },
      {
        name: "Logo Socks",
        category: "socks",
        description: "Logo application for corporate gifts, events, and brand projects.",
        image: instagramMedia.socks.bamboo,
        specs: ["Logo adaptation", "Color planning", "Sample process"],
      },
      {
        name: "Promotional Tote Bag",
        category: "tote-bags",
        description: "Simple tote bags for stores, fairs, events, and campaigns.",
        image: instagramMedia.tote.custom,
        specs: ["Printable surface", "Different sizes", "Bulk production"],
      },
      {
        name: "Branded Tote Bag",
        category: "tote-bags",
        description: "Color, print, and use-case planning according to brand identity.",
        image: instagramMedia.tote.school,
        specs: ["Logo print", "Size selection", "Manufacturer price"],
      },
    ],
  },
  de: {
    meta: {
      title: "Çirkin Çoraplar | Socken- und Baumwolltaschen-Produktion",
      description:
        "Hersteller für Socken, Baumwolltaschen, Sonderproduktion und Großhandelsbestellungen.",
      keywords: ["Socken Hersteller", "Socken Produktion", "Baumwolltaschen Hersteller", "Großhandel Socken", "Milotreading"],
    },
    common: {
      manufacturer: "Hersteller",
      brandLine: "Premium Alltagsprodukte",
      quote: "Angebot",
      whatsappCta: "Angebot per WhatsApp",
      whatsappShort: "WhatsApp schreiben",
      instagram: "Instagram öffnen",
      photoNote: "Instagram-Produktfoto",
      menuLabel: "Hauptnavigation",
      footerMenuLabel: "Footer-Navigation",
    },
    nav: {
      home: "Start",
      women: "Damen",
      men: "Herren",
      kids: "Kinder",
      socks: "Socken",
      toteBags: "Baumwolltaschen",
      customProduction: "Sonderproduktion",
      wholesale: "Großhandel",
      about: "Über uns",
      contact: "Kontakt",
    },
    home: {
      heroTitle: "Farbige Socken. Klare Taschen. Stil für jeden Tag.",
      heroDescription:
        "Instagram-nahe Socken und Baumwolltaschen für Alltag, Markenmomente und Sonderbestellungen.",
      heroSecondary: "Sonderproduktion",
      categoriesEyebrow: "Produktgruppen",
      categoriesTitle: "Produktion und Lieferung nach Bedarf",
      categoriesDescription:
        "Entdecken Sie die Hauptbereiche für Socken, Baumwolltaschen, Sonderproduktion und Großhandel.",
      marketEyebrow: "Kategoriesystem",
      marketTitle: "Nicht nur eine Sockenmarke, sondern eine professionelle Produktionsstruktur",
      marketDescription:
        "Wir übernehmen die klare Kategorie- und Produktpräsentationslogik starker Online-Sockenmarken. Der Unterschied: Baumwolltaschen werden neben Socken als ernsthafter zweiter Geschäftsbereich positioniert.",
      whyEyebrow: "Warum mit uns arbeiten?",
      whyTitle: "Angebot direkt vom Hersteller erhalten",
      whyDescription:
        "Produktdetails, Mengen, Lageroptionen und Sonderwünsche werden in einem Kanal geklärt. Das beschleunigt Großhandels- und Firmenbestellungen.",
      capabilitiesEyebrow: "Produktionsmöglichkeiten",
      capabilitiesTitle: "Flexible Struktur für Lagerware, Großhandel und Sonderproduktion",
      capabilitiesDescription:
        "Die MVP-Inhalte sind bewusst kurz gehalten. Echte Kapazitäten, Mindestmengen, Lieferzeiten und Materialdetails können später ergänzt werden.",
      socialEyebrow: "Social Proof",
      socialTitle: "Echte Nachfrage über Instagram",
      socialDescription:
        "Aktuelle Verkäufe und Kundenkommunikation laufen vor allem über Instagram. Die Website unterstützt dieses Vertrauen mit einem klaren Herstellerauftritt.",
      socialCard:
        "Ausgewaehlte Instagram-Produktfotos sind jetzt an passenden Stellen der Website integriert.",
      exportNote:
        "Englische und deutsche Inhalte sind für die Exportmarke vorbereitet.",
    },
    cta: {
      label: "WhatsApp Angebot",
      title: "Sprechen wir über Produkte, Drucke oder Mengen.",
      description:
        "Senden Sie Modell, Menge und Einsatzbereich. Wir antworten mit einem klaren Angebotsablauf.",
    },
    categories: [
      {
        title: "Damen",
        description: "Farbige Alltagssocken mit weichem Premium-Gefühl.",
        href: "socks#women",
        image: instagramMedia.socks.hero,
        imageAlt: "Bereich für echtes Socken-Produktfoto",
        note: "Durch echtes Sockenfoto ersetzen.",
      },
      {
        title: "Herren",
        description: "Minimale, komfortable Styles für den Alltag.",
        href: "socks#men",
        image: instagramMedia.socks.wholesale,
        imageAlt: "Bereich für echtes Baumwolltaschenfoto",
        note: "Durch echtes Taschenfoto ersetzen.",
      },
      {
        title: "Kinder",
        description: "Weiche Strukturen, helle Farben, spielerische Muster.",
        href: "socks#kids",
        image: instagramMedia.socks.bamboo,
        imageAlt: "Bereich für echtes Musterfoto",
        note: "Durch echtes Musterfoto ersetzen.",
      },
      {
        title: "Baumwolltaschen",
        description: "Klare Tote Styles für Shops, Cafes und Marken.",
        href: "tote-bags",
        image: instagramMedia.tote.school,
        imageAlt: "Bereich für echtes Großhandelsfoto",
        note: "Durch echtes Großhandelsfoto ersetzen.",
      },
    ],
    trustPoints: [
      "Direkte Kommunikation mit dem Hersteller",
      "Schneller Angebotsprozess über WhatsApp",
      "Lagerware und Sonderproduktion möglich",
      "Einfacher, klarer und projektorientierter Ablauf",
    ],
    capabilities: [
      "Herstellung von Socken und Baumwolltaschen",
      "Lieferung von Lagerprodukten",
      "Sonderanfertigung nach Logo und Muster",
      "Planung von Großhandel und regelmäßigen Bestellungen",
      "Bereit für Wachstum unter der Exportmarke Milotreading",
    ],
    marketCategories: [
      {
        title: "Sockenkategorien",
        items: ["Gemusterte Socken", "Farbige Socken", "Set-Produkte", "Logo- und Sondersocken"],
      },
      {
        title: "Nachfragebereiche für Baumwolltaschen",
        items: [
          "Bedruckte Baumwolltaschen",
          "Firmen- und Promotiontaschen",
          "Cafe- und Restauranttaschen",
          "Boutique-, Messe- und Eventtaschen",
        ],
      },
    ],
    pages: {
      socks: {
        title: "Sockenproduktion",
        eyebrow: "Sockenlösungen vom Hersteller",
        description:
          "Kontaktieren Sie den Hersteller direkt für Lagerware, gemusterte Kollektionen und markenspezifische Sockenprojekte.",
        bullets: ["Gemusterte Socken", "Logo-Socken", "Großhandels-Lagerware", "Sonderproduktion mit Musterprozess"],
        image: instagramMedia.socks.hero,
        sectionEyebrow: "Sockenoptionen",
        sectionTitle: "Modelle für Lagerware und Sonderproduktion",
        sectionDescription:
          "Echte Produktfotos, Farbkarten und technische Details können in der nächsten Phase ergänzt werden.",
        ctaTitle: "Informationen zur Sockenproduktion per WhatsApp anfragen",
      },
      toteBags: {
        title: "Premium Baumwolltaschen-Kollektionen",
        eyebrow: "Tote Bag Studio",
        description:
          "Kollektionorientierte Taschen für Lifestyle-Marken, Cafes, Concept Stores und europäische Wholesale-Kunden.",
        bullets: ["Premium Tote Bags", "Stock Products", "Custom Production", "Private Label"],
        image: instagramMedia.tote.custom,
        sectionEyebrow: "Kollektionen",
        sectionTitle: "Premium Tote Bag Kollektionen",
        sectionDescription:
          "Stock Products können ab 1 Stück bestellt werden. Custom Production und Custom Printing starten ab 50 Stück pro Design.",
        collectionEyebrow: "Premium tote bags",
        collectionTitle: "Ein kollektionsbasierter Tote-Bag-Katalog",
        collectionDescription:
          "Lifestyle- und Fashion-orientiert präsentiert, mit klaren Wegen für Stock Products, Wholesale und Private Label.",
        collections: [
          {
            title: "Art Collection",
            description: "Grafische und illustrative Tote Bags mit Galerie- und Limited-Edition-Gefühl.",
            image: instagramMedia.tote.custom,
            imageAlt: "Art Collection Premium Tote Bag Fotografie",
            tags: ["Stock Products", "1+ Stück"],
            rule: "Keine Mindestmenge für Stock Products.",
            note: "Fertige Kollektionen eignen sich für Einzelbestellungen und Wholesale-Nachbestellungen.",
          },
          {
            title: "Amsterdam Collection",
            description: "City-inspirierte Auswahl mit Kaffee-, Fahrrad-, Concept-Store- und Alltagsästhetik.",
            image: instagramMedia.tote.school,
            imageAlt: "Amsterdam Collection Lifestyle Tote Bag Fotografie",
            tags: ["Lifestyle", "Wholesale"],
            rule: "Stock Models starten ab 1 Stück.",
            note: "Geeignet für Boutiquen und Concept Stores mit niedrigem Startvolumen.",
          },
          {
            title: "Stock Models",
            description: "Fertige Tote Bags mit bestehenden Stoffen, Farben und Druckrichtungen.",
            image: instagramMedia.tote.school,
            imageAlt: "Stock Models Premium Tote Bag Katalogfoto",
            tags: ["Low MOQ", "Ready to buy"],
            rule: "Keine Mindestbestellmenge.",
            note: "Stock Products können einzeln oder in Wholesale-Mengen bestellt werden.",
          },
          {
            title: "Custom Printed Bags",
            description: "Premium bedruckte Tote Bags für Artwork, Kampagnen und Event-Kollektionen.",
            image: instagramMedia.tote.custom,
            imageAlt: "Custom Printed Bags Premium Tote Bag Fotografie",
            tags: ["Custom Production", "50+ / Design"],
            rule: "Minimum 50 Stück pro Design.",
            note: "Druck, Farbe und Artwork-Platzierung werden ab 50 Stück pro Design geplant.",
          },
          {
            title: "Business / Cafe Bags",
            description: "Raffinierte Taschen für Cafes, Restaurants, Boutique Retail und Corporate Lifestyle Brands.",
            image: instagramMedia.tote.custom,
            imageAlt: "Business Cafe Bags Premium Tote Bag Fotografie",
            tags: ["Private Label", "Wholesale"],
            rule: "Custom Production startet ab 50 Stück pro Modell.",
            note: "Private Label und Wholesale-Projekte werden nach Marke, Menge und Timing geplant.",
          },
        ],
        purchaseRules: [
          {
            label: "Stock Products",
            title: "Stock Products ab 1 Stück bestellen",
            description: "Fertige Stock Products haben keine Mindestbestellmenge und können einzeln oder in Wholesale-Mengen bestellt werden.",
          },
          {
            label: "Custom Production",
            title: "50 Stück pro Design für Custom Work",
            description: "Custom Printing, Private Label, Sonderfarben und neue Modelle starten ab 50 Stück pro Design oder Modell.",
          },
        ],
        faqEyebrow: "FAQ",
        faqTitle: "Tote Bag Bestellinformationen",
        faq: [
          {
            question: "Kann ich Stock Tote Bags ab 1 Stück bestellen?",
            answer: "Ja. Stock Products haben keine Mindestbestellmenge und können einzeln oder in Wholesale-Mengen bestellt werden.",
          },
          {
            question: "Welche MOQ gilt für Custom Printed Bags?",
            answer: "Custom Production und Custom Printing starten ab 50 Stück pro Design oder Modell.",
          },
          {
            question: "Sind Private Label und Wholesale möglich?",
            answer: "Ja. Private Label, Wholesale und Custom Production sind für europäische Textileinkäufer, Cafes, Boutiquen und Lifestyle-Marken möglich.",
          },
        ],
        ctaTitle: "Angebot für Premium Tote Bags anfragen",
      },
      customProduction: {
        title: "Sonderproduktion",
        eyebrow: "Nach Logo, Farbe und Menge",
        description:
          "Wir klären Ihr Produkt nach Einsatzzweck, Markenauftritt, Menge und Lieferplan.",
        bullets: ["Bedarfsanalyse", "Logo- und Musteranpassung", "Musterprüfung", "Produktionsplan"],
        image: instagramMedia.socks.bamboo,
        sectionEyebrow: "Prozess",
        sectionTitle: "Klarer Ablauf für Sonderproduktion",
        sectionDescription:
          "Zuerst klären wir den Bedarf, dann den passenden Produktionsweg. Custom Production und Custom Printing starten ab 50 Stück pro Design.",
        productionRules: [
          {
            label: "Stock Products",
            title: "Keine MOQ für Stock Products",
            description: "Fertige Stock Products können ab 1 Stück gekauft werden. Für größere Mengen kann Wholesale-Preis besprochen werden.",
          },
          {
            label: "Custom Production",
            title: "50 Stück pro Design oder Modell",
            description: "Custom Printing, Private Label, Sonderfarben und neue Modelle starten ab 50 Stück pro Design oder Modell.",
          },
        ],
        steps: [
          "Produkttyp, Menge und Einsatzbereich werden geklärt.",
          "Logo, Farbe, Muster oder Druckwunsch werden geprüft.",
          "Geeignete Produktionsmethode und Musterprozess werden besprochen.",
          "Nach Freigabe werden Zeitplan und Produktion abgestimmt.",
        ],
        faqEyebrow: "FAQ",
        faqTitle: "Mindestmengen für Custom Production",
        faq: [
          {
            question: "Welche MOQ gilt für Custom Production?",
            answer: "Custom Printing, Private Label und neue Modelle starten ab 50 Stück pro Design oder Modell.",
          },
          {
            question: "Kann ich Stock Products ohne Custom Production kaufen?",
            answer: "Ja. Stock Products haben keine MOQ und können ab 1 Stück gekauft werden.",
          },
        ],
        ctaTitle: "Logo- oder Musterproduktion besprechen",
      },
      wholesale: {
        title: "Großhandel",
        eyebrow: "Lagerware und regelmäßige Bestellungen",
        description:
          "Großhandelsangebote für Socken und Baumwolltaschen für Shops, Firmenkunden und Promotionsanbieter.",
        bullets: ["Herstellerangebot", "Lagerware-Alternativen", "Unterstützung für regelmäßige Bestellungen", "Schnelle Antwort per WhatsApp"],
        image: instagramMedia.socks.wholesale,
        sectionEyebrow: "Großhandelsprozess",
        sectionTitle: "Professioneller Angebotsprozess außerhalb von Instagram",
        sectionDescription:
          "Großhandelsanfragen bündeln Menge, Produkttyp, Liefererwartung und Sonderwünsche in einem Kanal.",
        items: [
          "Socken- und Taschenalternativen ab Lager",
          "Bestellungen für Shops und Firmenkunden",
          "Regelmäßige Produktion für Promotionsfirmen",
          "Angebot nach Menge und Lieferplan",
        ],
        ctaTitle: "Großhandelspreis und Lagerinfo anfragen",
      },
      about: {
        eyebrow: "Über uns",
        title: "Çirkin Çoraplar ist eine Textilmarke mit Herstellerbasis",
        description:
          "Das Unternehmen produziert derzeit Socken und Baumwolltaschen. Vertrieb und Kundenkontakt laufen vor allem über Instagram. Diese Website überführt das bestehende Vertrauen in einen professionellen Herstellerauftritt mit WhatsApp-first Angebotsprozess.",
        sectionEyebrow: "Markenstruktur",
        sectionTitle: "Basis für Türkei und Exportmärkte",
        sectionDescription:
          "Çirkin Çoraplar trägt die aktuelle Markenkommunikation in der Türkei. Milotreading ist für eine spätere Positionierung in Europa und globalen Märkten vorgesehen.",
        exportText:
          "Englische und deutsche Inhalte sind jetzt in der Grundstruktur vorhanden. Katalogsprache und Angebotsformulare können ergänzt werden, wenn die Exportziele konkreter sind.",
        ctaTitle: "Direkt mit dem Hersteller Kontakt aufnehmen",
      },
      contact: {
        eyebrow: "Kontakt",
        title: "Für Angebot und Produktinfos per WhatsApp schreiben",
        description:
          "Teilen Sie Produkttyp, Menge, Sonderwunsch und vorhandene Logo- oder Musterdetails.",
        whatsapp: "WhatsApp",
        instagram: "Instagram",
        location: "Standort",
        locationText: "Terazidere Mah. Cengiz Topel Sok. No:22, Bayrampaşa, Istanbul",
        locationNote: "Türkei 34440",
      },
    },
    products: [
      {
        name: "Gemusterte Socken",
        category: "socks",
        description: "Farbige Kollektionen, Lagermodelle und Markenanpassungen.",
        image: instagramMedia.socks.hero,
        specs: ["Lager- oder Sondermuster", "Verschiedene Größen", "Großhandelsbestellung"],
      },
      {
        name: "Logo-Socken",
        category: "socks",
        description: "Logo-Anwendung für Firmengeschenke, Events und Markenprojekte.",
        image: instagramMedia.socks.bamboo,
        specs: ["Logo-Anpassung", "Farbplanung", "Musterprozess"],
      },
      {
        name: "Promotion-Baumwolltasche",
        category: "tote-bags",
        description: "Einfache Baumwolltaschen für Shops, Messen, Events und Kampagnen.",
        image: instagramMedia.tote.custom,
        specs: ["Bedruckbare Fläche", "Verschiedene Größen", "Mengenproduktion"],
      },
      {
        name: "Marken-Baumwolltasche",
        category: "tote-bags",
        description: "Farbe, Druck und Nutzung nach Markenidentität geplant.",
        image: instagramMedia.tote.school,
        specs: ["Logo-Druck", "Größenauswahl", "Herstellerpreis"],
      },
    ],
  },
} as const;

export type Dictionary = (typeof dictionary)[Locale];

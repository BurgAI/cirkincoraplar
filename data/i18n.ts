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
      socks: "Çorap",
      toteBags: "Bez Çanta",
      customProduction: "Özel Üretim",
      wholesale: "Toptan",
      about: "Hakkımızda",
      contact: "İletişim",
    },
    home: {
      heroTitle: "Çorap ve bez çantada online satışa hazır üretici yapı",
      heroDescription:
        "Çirkin Çoraplar; renkli çorap kategorileri, baskılı bez çanta talepleri, özel üretim ve toptan siparişler için güvenilir üretici iletişimi sunar. Instagram satış kanalını daha düzenli ve profesyonel bir teklif sistemine taşıyoruz.",
      heroSecondary: "Özel üretimi incele",
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
      label: "WhatsApp teklif hattı",
      title: "Ürün ve toptan üretim için hızlı teklif alın",
      description:
        "İhtiyacınızı WhatsApp üzerinden paylaşın. Ürün tipi, adet, baskı veya desen bilgisine göre dönüş yapalım.",
    },
    categories: [
      {
        title: "Çorap Üretimi",
        description: "Günlük, renkli, desenli ve markaya özel çorap seçenekleri.",
        href: "socks",
        image: instagramMedia.socks.hero,
        imageAlt: "Gerçek çorap ürün fotoğrafı ile değiştirilecek alan",
        note: "Gerçek çorap ürün fotoğrafı ile değiştirilecek.",
      },
      {
        title: "Bez Çanta",
        description: "Promosyon, mağaza, etkinlik ve marka kullanımı için bez çanta.",
        href: "tote-bags",
        image: instagramMedia.tote.custom,
        imageAlt: "Gerçek bez çanta fotoğrafı ile değiştirilecek alan",
        note: "Gerçek bez çanta fotoğrafı ile değiştirilecek.",
      },
      {
        title: "Özel Üretim",
        description: "Logo, renk, desen ve adet ihtiyacına göre üretim planı.",
        href: "custom-production",
        image: instagramMedia.socks.bamboo,
        imageAlt: "Özel üretim numune fotoğrafı ile değiştirilecek alan",
        note: "Özel üretim numune fotoğrafı ile değiştirilecek.",
      },
      {
        title: "Toptan Satış",
        description: "Stoklu ürünler ve düzenli alımlar için üreticiden teklif.",
        href: "wholesale",
        image: instagramMedia.socks.wholesale,
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
        title: "Bez Çanta Üretimi",
        eyebrow: "Promosyon ve marka kullanımı",
        description:
          "Mağaza, etkinlik, fuar ve kurumsal promosyon ihtiyaçları için baskıya uygun bez çanta üretimi.",
        bullets: ["Promosyon çanta", "Markalı bez çanta", "Farklı ebat seçenekleri", "Toplu sipariş"],
        image: instagramMedia.tote.custom,
        sectionEyebrow: "Bez çanta seçenekleri",
        sectionTitle: "Promosyon ve marka kullanımı için üretim",
        sectionDescription:
          "Ebat, kumaş, baskı ve adet bilgileri netleştikçe bu sayfa daha detaylı ürün kataloğuna dönüşebilir.",
        ctaTitle: "Bez çanta üretimi için teklif alın",
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
          "İlk görüşmede fazla teknik detayla boğmadan ihtiyacı anlarız. Gerekli bilgiler geldikçe üretim planı netleşir.",
        steps: [
          "Ürün tipi, adet ve kullanım amacı netleştirilir.",
          "Logo, renk, desen veya baskı beklentisi değerlendirilir.",
          "Uygun üretim yöntemi ve numune süreci konuşulur.",
          "Onay sonrası termin ve üretim planı paylaşılır.",
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
        locationText: "Türkiye",
        locationNote:
          "Atölye, üretim kapasitesi ve teslimat bilgileri gerçek verilerle güncellenecek.",
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
      socks: "Socks",
      toteBags: "Tote Bags",
      customProduction: "Custom Production",
      wholesale: "Wholesale",
      about: "About",
      contact: "Contact",
    },
    home: {
      heroTitle: "A manufacturer structure ready for online sock and tote bag sales",
      heroDescription:
        "Çirkin Çoraplar provides reliable manufacturer communication for colorful sock categories, printed tote bag requests, custom production, and wholesale orders. The existing Instagram sales channel is being shaped into a clearer professional quote system.",
      heroSecondary: "View custom production",
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
      label: "WhatsApp quote line",
      title: "Get a quick quote for products and wholesale production",
      description:
        "Share your need via WhatsApp. We can respond based on product type, quantity, print, or pattern details.",
    },
    categories: [
      {
        title: "Sock Production",
        description: "Daily, colorful, patterned, and brand-specific sock options.",
        href: "socks",
        image: instagramMedia.socks.hero,
        imageAlt: "Area to replace with a real sock product photo",
        note: "Replace with a real sock product photo.",
      },
      {
        title: "Tote Bags",
        description: "Tote bags for promotions, stores, events, and brand use.",
        href: "tote-bags",
        image: instagramMedia.tote.custom,
        imageAlt: "Area to replace with a real tote bag photo",
        note: "Replace with a real tote bag photo.",
      },
      {
        title: "Custom Production",
        description: "Production planning by logo, color, pattern, and quantity.",
        href: "custom-production",
        image: instagramMedia.socks.bamboo,
        imageAlt: "Area to replace with a real custom sample photo",
        note: "Replace with a real custom sample photo.",
      },
      {
        title: "Wholesale",
        description: "Manufacturer quotes for stock products and recurring orders.",
        href: "wholesale",
        image: instagramMedia.socks.wholesale,
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
        title: "Tote Bag Production",
        eyebrow: "Promotion and brand use",
        description:
          "Printable tote bag production for stores, events, fairs, and corporate promotion needs.",
        bullets: ["Promotional bags", "Branded tote bags", "Different size options", "Bulk orders"],
        image: instagramMedia.tote.custom,
        sectionEyebrow: "Tote bag options",
        sectionTitle: "Production for promotion and brand use",
        sectionDescription:
          "As sizes, fabric, print, and quantity details become clear, this page can become a richer catalog.",
        ctaTitle: "Get a quote for tote bag production",
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
          "We first understand the need without overcomplicating the discussion. The production plan becomes clearer as details arrive.",
        steps: [
          "Product type, quantity, and use case are clarified.",
          "Logo, color, pattern, or print expectations are reviewed.",
          "Suitable production method and sample process are discussed.",
          "Timing and production plan are shared after approval.",
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
        locationText: "Turkey",
        locationNote:
          "Workshop, production capacity, and delivery details will be updated with real information.",
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
      socks: "Socken",
      toteBags: "Baumwolltaschen",
      customProduction: "Sonderproduktion",
      wholesale: "Großhandel",
      about: "Über uns",
      contact: "Kontakt",
    },
    home: {
      heroTitle: "Herstellerstruktur für Online-Vertrieb von Socken und Baumwolltaschen",
      heroDescription:
        "Çirkin Çoraplar bietet zuverlässige Herstellerkommunikation für farbige Sockenkategorien, bedruckte Baumwolltaschen, Sonderproduktion und Großhandel. Der bestehende Instagram-Kanal wird zu einem klareren professionellen Angebotsprozess ausgebaut.",
      heroSecondary: "Sonderproduktion ansehen",
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
      label: "WhatsApp-Angebotskanal",
      title: "Schnelles Angebot für Produkte und Großhandelsproduktion",
      description:
        "Teilen Sie Ihren Bedarf per WhatsApp. Wir antworten anhand von Produkttyp, Menge, Druck- oder Musterdetails.",
    },
    categories: [
      {
        title: "Sockenproduktion",
        description: "Alltags-, farbige, gemusterte und markenspezifische Socken.",
        href: "socks",
        image: instagramMedia.socks.hero,
        imageAlt: "Bereich für echtes Socken-Produktfoto",
        note: "Durch echtes Sockenfoto ersetzen.",
      },
      {
        title: "Baumwolltaschen",
        description: "Taschen für Promotion, Handel, Events und Markenkommunikation.",
        href: "tote-bags",
        image: instagramMedia.tote.custom,
        imageAlt: "Bereich für echtes Baumwolltaschenfoto",
        note: "Durch echtes Taschenfoto ersetzen.",
      },
      {
        title: "Sonderproduktion",
        description: "Produktionsplanung nach Logo, Farbe, Muster und Menge.",
        href: "custom-production",
        image: instagramMedia.socks.bamboo,
        imageAlt: "Bereich für echtes Musterfoto",
        note: "Durch echtes Musterfoto ersetzen.",
      },
      {
        title: "Großhandel",
        description: "Herstellerangebote für Lagerware und wiederkehrende Bestellungen.",
        href: "wholesale",
        image: instagramMedia.socks.wholesale,
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
        title: "Baumwolltaschen-Produktion",
        eyebrow: "Promotion und Markeneinsatz",
        description:
          "Bedruckbare Baumwolltaschen für Shops, Events, Messen und Firmenpromotion.",
        bullets: ["Promotiontaschen", "Markentaschen", "Verschiedene Größen", "Mengenbestellungen"],
        image: instagramMedia.tote.custom,
        sectionEyebrow: "Taschenoptionen",
        sectionTitle: "Produktion für Promotion und Markenauftritt",
        sectionDescription:
          "Wenn Größen, Stoff, Druck und Menge klar sind, kann diese Seite zu einem ausführlicheren Katalog erweitert werden.",
        ctaTitle: "Angebot für Baumwolltaschen anfragen",
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
          "Zuerst verstehen wir den Bedarf ohne unnötige Komplexität. Der Produktionsplan wird mit den Details konkreter.",
        steps: [
          "Produkttyp, Menge und Einsatzbereich werden geklärt.",
          "Logo, Farbe, Muster oder Druckwunsch werden geprüft.",
          "Geeignete Produktionsmethode und Musterprozess werden besprochen.",
          "Nach Freigabe werden Zeitplan und Produktion abgestimmt.",
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
        locationText: "Türkei",
        locationNote:
          "Werkstatt, Produktionskapazität und Lieferdetails werden mit echten Daten aktualisiert.",
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

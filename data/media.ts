const b = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const instagramMedia = {
  socks: {
    hero: `${b}/images/kadin/bamboo/IMG-20260429-WA0207.jpg`,
    bamboo: `${b}/images/kadin/bamboo/IMG-20260429-WA0210.jpg`,
    pilates: `${b}/images/kadin/bamboo/IMG-20260429-WA0214.jpg`,
    wholesale: `${b}/images/kadin/bamboo/IMG-20260429-WA0221.jpg`,
  },
  tote: {
    custom: `${b}/images/placeholder-tote.svg`,
    school: `${b}/images/placeholder-tote.svg`,
  },
} as const;

export const galleryImages = [
  { src: instagramMedia.socks.hero, alt: "Desenli çorap ürün fotoğrafı" },
  { src: instagramMedia.tote.custom, alt: "Özel baskılı bez çanta" },
  { src: instagramMedia.socks.bamboo, alt: "Bambu çorap ürün fotoğrafı" },
  { src: instagramMedia.tote.school, alt: "Dijital baskılı bez çanta" },
  { src: instagramMedia.socks.pilates, alt: "Pilates çorap ürün fotoğrafı" },
  { src: instagramMedia.socks.wholesale, alt: "Toptan çorap ürün fotoğrafı" },
];

export const instagramPreviewImages = galleryImages.slice(0, 4) as {
  src: string;
  alt: string;
}[];

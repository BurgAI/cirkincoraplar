const b = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const instagramMedia = {
  socks: {
    hero: `${b}/images/instagram/socks-hero.webp`,
    bamboo: `${b}/images/instagram/socks-bamboo.jpg`,
    pilates: `${b}/images/instagram/socks-pilates.webp`,
    wholesale: `${b}/images/instagram/socks-wholesale.jpg`,
  },
  tote: {
    custom: `${b}/images/instagram/tote-custom.webp`,
    school: `${b}/images/instagram/tote-school.jpg`,
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

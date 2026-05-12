export const instagramMedia = {
  socks: {
    hero: "/images/instagram/socks-hero.webp",
    bamboo: "/images/instagram/socks-bamboo.jpg",
    pilates: "/images/instagram/socks-pilates.webp",
    wholesale: "/images/instagram/socks-wholesale.jpg",
  },
  tote: {
    custom: "/images/instagram/tote-custom.webp",
    school: "/images/instagram/tote-school.jpg",
  },
} as const;

export const instagramPreviewImages = [
  {
    src: instagramMedia.socks.hero,
    alt: "Instagram'dan desenli corap urun fotografi",
  },
  {
    src: instagramMedia.socks.bamboo,
    alt: "Instagram'dan bambu corap urun fotografi",
  },
  {
    src: instagramMedia.tote.custom,
    alt: "Instagram'dan ozel baskili bez canta urun fotografi",
  },
  {
    src: instagramMedia.tote.school,
    alt: "Instagram'dan dijital baskili bez canta urun fotografi",
  },
] as const;

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

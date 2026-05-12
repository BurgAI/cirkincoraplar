# Çirkin Çoraplar Website MVP

Mobile-first Next.js landing website for Çirkin Çoraplar, prepared for a future bilingual/export structure under Milotreading.

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- File-based content in `/data`

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Language routes:

- Turkish: `http://localhost:3000/tr`
- English: `http://localhost:3000/en`
- German: `http://localhost:3000/de`

Old single-language routes such as `/socks` redirect to the Turkish version.

## Useful Commands

```bash
npm run lint
npm run build
```

## Content Editing

- `data/siteConfig.ts`: brand, WhatsApp number, Instagram URL, SEO basics
- `data/i18n.ts`: Turkish, English, and German website copy
- `data/navigation.ts`: menu links
- `data/categories.ts`: homepage category cards
- `data/products.ts`: product cards and capabilities
- `data/pageContent.ts`: page hero content

## Image Placeholders

Placeholder images live in `public/images`. Replace them with real product, production, tote bag, wholesale, and workshop photos when available.

## WhatsApp

The WhatsApp number is configured in `data/siteConfig.ts`.

Current placeholder:

```ts
whatsappNumber: "+90XXXXXXXXXX"
```

Default message:

```txt
Merhaba, Çirkin Çoraplar ürünleri ve toptan üretim hakkında bilgi almak istiyorum.
```

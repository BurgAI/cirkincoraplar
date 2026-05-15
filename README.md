# Çirkin Çoraplar Website MVP

Mobile-first Next.js landing website for Çirkin Çoraplar, prepared for a future bilingual/export structure under Milo Trading.

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

## Google Drive Gallery Sync

Gallery images are expected to come from a shared Google Drive root folder and then be synced into `public/images`.

- Sync script: `scripts/sync_gallery.py`
- Default root folder: `1vcmJJ62lldNR1crfeiLj0utbt08x6SKy`
- Expected top-level category folders inside Drive: `kadin`, `erkek`, `cocuk`, `bez-canta`

The sync script:

- downloads the shared root folder with `gdown`
- finds category folders by name or alias
- refreshes `public/images/kadin`, `public/images/erkek`, `public/images/cocuk`, and `public/images/bez-canta`
- normalizes folder names to slug format

Manual run:

```bash
python3 scripts/sync_gallery.py
```

Optional overrides:

```bash
GOOGLE_DRIVE_ROOT_FOLDER_ID=your_folder_id python3 scripts/sync_gallery.py
USE_LEGACY_DRIVE_IDS=1 python3 scripts/sync_gallery.py
```

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

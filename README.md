# Çirkin Çoraplar Website MVP

Mobile-first Next.js landing website for Çirkin Çoraplar, prepared for a future bilingual/export structure under Milo Trading.

Live site: `https://milo-trading.com`

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

Build for GitHub Pages:

```bash
npm run build:pages
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
- Expected top-level category groups inside Drive: `Bayan`, `Erkek`, `Çocuk`, `Bez Çanta`
- Local target folders: `public/images/kadin`, `public/images/erkek`, `public/images/cocuk`, `public/images/bez-canta`

The sync script:

- downloads the shared root folder with `gdown`
- finds category folders by name or alias
- tries the shared root folder first
- falls back to category-specific Drive folders if the root import is incomplete
- merges downloaded files into the existing local gallery instead of wiping everything first
- normalizes folder names to slug format
- keeps working even if some individual Drive files fail to resolve through `gdown`

Manual run:

```bash
python3 scripts/sync_gallery.py
```

Optional overrides:

```bash
GOOGLE_DRIVE_ROOT_FOLDER_ID=your_folder_id python3 scripts/sync_gallery.py
USE_LEGACY_DRIVE_IDS=1 python3 scripts/sync_gallery.py
```

Notes:

- `USE_LEGACY_DRIVE_IDS=1` forces category-by-category sync instead of using the shared root folder.
- Some Google Drive files may still be publicly visible in the browser but fail in `gdown`. The script now continues with the files it can fetch.
- If a sync only partially works, do not manually delete `public/images`. Re-run the script; it is designed to merge safely.
- If you want to verify a specific Drive file from the terminal, this is the quickest check:

```bash
curl -I -L 'https://drive.google.com/uc?id=FILE_ID'
```

Known gallery root used in this project:

```txt
https://drive.google.com/drive/u/3/folders/1vcmJJ62lldNR1crfeiLj0utbt08x6SKy
```

Legacy category folder IDs used as fallback:

```txt
kadin: 1SFaVwLPwOkvtnVuPBFMzi_MK1Pxu4V5Z
erkek: 1MM0sziX_FbG4AVlO_BMip6t36S14zaux
cocuk: 1qWes76sjFVjoT9ZbieRIuEsgu7BYfA5f
bez-canta: 1KZeJxzm6cSoY3JhQTdCyCrdRX14w5DVB
```

## Deploy

GitHub Pages deploy is automatic on every push to `main`.

- Workflow: `.github/workflows/pages.yml`
- Domain: `https://milo-trading.com`
- Build command in CI: `npm run build:pages`

Gallery sync also has its own workflow:

- Workflow: `.github/workflows/sync-gallery.yml`
- Trigger: daily schedule + manual dispatch
- Behavior: sync Google Drive images, commit changed gallery files, then trigger the Pages deploy workflow if images changed

Recommended release flow:

```bash
npm run build
git push origin main
```

After pushing:

- GitHub Pages deploy should start automatically from `pages.yml`
- if the gallery changed in CI, `sync-gallery.yml` will commit the new images and trigger deploy again

## Working Rules

- Do not rename the Google Drive folder structure unless the website routing/content model also changes.
- Do not manually clear `public/images` before testing sync.
- If Drive sync behaves strangely, trust the repository state first and verify with `npm run build` before pushing.
- If a single file fails in Drive sync, the current script should continue with the rest of the gallery.

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

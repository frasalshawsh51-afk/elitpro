# Elite Pro — إيليت برو

The Arabic and English Elite Pro website built with Astro and TypeScript. This is the version with the original eight-second hero video, six service sections, portfolio video dialogs, and the silent logo opening.

Live site: https://elitpro.vercel.app/. Both language routes include localized Open Graph and large-image social sharing metadata, with the branded 1200×630 JPEG at `public/media/elite-pro-share.jpg`. The canonical production origin is configured in `astro.config.mjs`; update it if the production domain changes.

## Run locally

Use Node.js 26 (`nvm use` if nvm is installed) and npm. Astro requires Node.js 22.23.4 or newer.

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:4321/ for Arabic or http://127.0.0.1:4321/en/ for English. The local URL stays the same across changes.

The opening appears once per tab session. Use `?intro=replay` to replay it or `?intro=off` to open the page directly. The hero video starts muted and respects reduced-motion and data-saving preferences.

Astro may start its development server in the background. Inspect or stop it with:

```sh
npx astro dev status
npx astro dev logs
npx astro dev stop
```

## Validate and build

```sh
npm run check
npm test
npm run build
```

The static site is generated in `dist/`. Serve the contents of that directory from the site root on a static host. Use `npm run preview` to inspect the build locally after stopping the development server.

## Project structure

- `src/pages/`: Arabic (`/`) and English (`/en/`) routes.
- `src/components/`: page, introduction, icons, and service interactions.
- `src/data/`: bilingual copy, services, and portfolio metadata.
- `src/lib/`: browser interactions and project enquiry preparation.
- `src/styles/`: responsive layout and motion styles.
- `public/media/`: local logos, images, hero video, and portfolio videos.
- `tests/`: Arabic and English enquiry encoding and recipient-safety checks.
- `docs/`: media provenance and font/icon licence notices.

## Enquiries and media

The project form prepares an email to `info@eliteproksa.com` in the visitor's email application. The visitor reviews and sends it there; the site has no email delivery backend and requires no API keys.

Supplied media, generated service illustrations, and the generated sharing card retain their documented provenance in `docs/`. The project does not grant a new licence to those assets. The existing `noindex,nofollow` metadata is retained.

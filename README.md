# Byte Genie Technologies – Landing Page

Marketing site for Byte Genie Technologies built with Vite + React + TypeScript + Tailwind + shadcn/ui. Includes animated hero, product highlights, process/why-us sections, and a contact form that posts to Google Sheets via Apps Script.

## Live site
https://byte-genie-landing.vercel.app/

## Tech stack
- Vite + React + TypeScript
- Tailwind CSS + shadcn/ui components
- Framer Motion animations

## Getting started
1) Install deps
```sh
npm install
```
2) Environment
```env
VITE_GOOGLE_SHEET_WEBAPP_URL="https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec"
```
Use `.env.local` locally and set the same key in Vercel Project Settings → Environment Variables. Only `VITE_`-prefixed vars are exposed to the client.
3) Run dev server
```sh
npm run dev
```
4) Build for production
```sh
npm run build
```
5) Preview production build
```sh
npm run preview
```

## Project structure
- `src/pages` – entry pages (Index, NotFound)
- `src/components` – sections/layout (Hero, Products, Process, WhyUs, Contact, Header, Footer)
- `src/components/ui` – shadcn/ui primitives
- `public/` – static assets (logos, OG/favicons)

## Branding and navigation
- Header and footer logos use `/images/logos/logo-transparent.png` and link to `#home`.
- Added Home link to both header and footer navs; hero carries `id="home"` for scroll targets.
- Favicons and social images in `index.html` point to `/images/logos/logo-transparent.png`.

## Contact form → Google Sheets
- Frontend posts to `VITE_GOOGLE_SHEET_WEBAPP_URL` with a JSON payload (including `source` and `submittedAt`).
- Apps Script must be deployed as a Web App with “Execute as: Me” and “Who has access: Anyone”. Use the `/exec` URL in your env var.
- Success toasts use the green `success` variant with glow styling.

## Deployment
- Vercel: set `VITE_GOOGLE_SHEET_WEBAPP_URL` in Environment Variables, then redeploy. Vite reads env vars at build time.
- Static hosts: run `npm run build` and serve `dist/`.

## Troubleshooting
- If the form shows “failed to fetch”, ensure the Apps Script Web App is public (Anyone) and you are using the latest `/exec` URL.
- Test the endpoint directly with a POST to confirm 200 OK before checking the UI.

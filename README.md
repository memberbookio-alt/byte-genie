# Byte Genie Technologies – Landing Page

Marketing site for Byte Genie Technologies, built with Vite + React + TypeScript + Tailwind + shadcn/ui. The site highlights Byte Genie products, client work, and contact flows with animated hero sections and a horizontal product carousel.

## Tech Stack
- Vite + React + TypeScript
- Tailwind CSS + shadcn/ui components
- Framer Motion for interactions
- React Router + React Query

## Getting Started
1) Install deps
```sh
npm install
```
2) Run dev server
```sh
npm run dev
```
3) Build for production
```sh
npm run build
```
4) Preview production build
```sh
npm run preview
```

## Project Structure
- `src/pages` – route-level pages (Index, NotFound)
- `src/components` – layout + sections (Hero, Products, Process, WhyUs, Contact, Header/Footer)
- `src/components/ui` – shadcn/ui primitives
- `public/brand-BGT.svg` & `public/brand-BGT.png` – branding assets used for favicon/OG images

## Branding
- Favicon/OG/Twitter images point to `brand-BGT.svg` / `brand-BGT.png`
- Header logo references `brand-BGT.png`

## Deployment
Run `npm run build` and serve the `dist/` output (any static host or CDN works). Add your domain/DNS at your hosting provider. If you need meta images or brand colors updated, adjust `index.html` head tags and the assets in `public/`.

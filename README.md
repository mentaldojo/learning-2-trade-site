# Learning2Trade Site

## Introduction
This is the official site for Learning2Trade, built with Next.js and Tailwind CSS. It provides information about the PAT Indicator, professional trading mentorship, and educational resources. The site is optimized for performance, accessibility, and SEO, achieving near-perfect Lighthouse scores.

## Features
- Modern, responsive design with Tailwind CSS
- Unified Inter font for performance and consistency
- Accessibility-first: semantic HTML, keyboard navigation, high contrast, and screen reader support
- Optimized images and critical CSS
- SEO and social sharing metadata (Open Graph, Twitter, JSON-LD)
- Dynamic imports for above-the-fold performance
- Google Analytics loaded only after user interaction
- Rich documentation and design system

## Tech Stack
- [Next.js 14](https://nextjs.org/)
- [React 18](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) for font optimization

## Getting Started
1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
2. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the site.

3. **Build for production:**
   ```bash
   npm run build && npm start
   ```

## Project Structure
- `src/app/` — Main app directory (pages, layouts, styles)
- `src/components/` — Reusable UI components
- `public/` — Static assets (images, favicon, etc.)
- `docs/` — Documentation (Design System, Site Overview)

## Performance & Accessibility
- All fonts are loaded with `display: swap` and preloaded for speed
- Images are optimized and use modern formats (WebP)
- No above-the-fold animations or heavy dependencies
- Accessibility features include skip links, focus rings, and ARIA labels
- JSON-LD structured data for rich results

## Deployment
The site is designed for seamless deployment on [Vercel](https://vercel.com/) or any Node.js-compatible host. See Next.js deployment docs for details.

## Further Documentation
- [docs/DESIGN_SYSTEM.md](docs/DESIGN_SYSTEM.md): Design, branding, and UI guidelines
- [docs/SITE_OVERVIEW.md](docs/SITE_OVERVIEW.md): Site architecture and logic (see below)

---
For questions or contributions, please open an issue or pull request.

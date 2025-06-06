# Learning2Trade Site Overview

## Overview
This document provides a high-level summary of the Learning2Trade site's architecture, routing, data flow, and unique implementation details. It is intended for developers and maintainers who want to quickly understand how the site works and how to extend it.

## Routing & Pages
- Built with Next.js App Router (`src/app/` directory)
- Key pages:
  - `/` (Home)
  - `/pat-indicator` (PAT Indicator product page)
  - `/mentoring` (Mentoring product page)
  - `/contact`, `/privacy-policy`, `/terms-and-conditions`, `/cookie-policy`, `/gdpr-policy`, `/disclaimer`, `/accessibility` (Legal & info pages)
- Dynamic imports are used for non-critical components to optimize above-the-fold performance.

## Data Flow
- The site is primarily static and content-driven.
- No client-side data fetching for product or legal pages; all content is statically rendered for speed and SEO.
- Google Analytics is loaded only after user interaction (deferred via custom script in `layout.tsx`).

## Key Components
- **TopNav**: Main navigation bar, accessible and keyboard-friendly.
- **Footer**: Site-wide footer with legal and policy links.
- **AccessibilityWrapper**: Handles skip links, focus management, and high-contrast mode.
- **FeatureCards, Testimonials, etc.**: Modular, reusable UI components for content sections.

## SEO & Structured Data
- Each key page includes:
  - Open Graph and Twitter meta tags for social sharing
  - JSON-LD structured data for Product pages (`/pat-indicator`, `/mentoring`) to enable Google rich results
  - Descriptive titles and meta descriptions
- Sitemap and robots.txt are present for search engine indexing.

## Accessibility
- Semantic HTML throughout (landmarks, headings, lists, etc.)
- Keyboard navigation and visible focus rings
- High-contrast mode and screen reader support
- ARIA labels and skip-to-main-content link

## Performance Strategies
- All fonts loaded with `display: swap` and preloaded
- Images optimized and served in modern formats (WebP)
- No above-the-fold animations or heavy dependencies
- CSS and JS bundles are minimized and split for fast loading
- Production builds use Next.js and SWC minification

## Deployment
- Designed for seamless deployment on Vercel or any Node.js-compatible host
- Static export possible for most pages

---
For more details, see [README.md](../README.md) and [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md). 
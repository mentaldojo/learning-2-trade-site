# Learning2Trade Design System

## Table of Contents
1. [Color Palette](#color-palette)
2. [Typography](#typography)
3. [Spacing System](#spacing-system)
4. [Component Library](#component-library)
5. [Layout Patterns](#layout-patterns)
6. [Animation Guidelines](#animation-guidelines)
7. [Responsive Design](#responsive-design)
8. [Iconography](#iconography)

## Color Palette

### Primary Colors
- Gold Gradient: `linear-gradient(to bottom, #fffbe6 0%, #ffe066 25%, #FFD700 50%, #bfa14a 75%, #fffbe6 100%)`
- Gold Accent: `#FFD700`
- Gold Dark: `#bfa14a`
- Gold Light: `#fffbe6`

### Background Colors
- Black: `#000000`
- White: `#FFFFFF`
- Off-White: `#faf9f6`
- Light Cream: `#fcfbf7`

### Text Colors
- Black: `#000000`
- White: `#FFFFFF`
- Gray 700: `#374151`
- Gray 300: `#D1D5DB`
- Gray 400: `#9CA3AF`

## Typography

### Primary Font
- **Font Family:** Inter
- **Weights Used:** 400, 500, 600, 700
- **Usage:** All headings, body text, UI elements, and buttons
- **Fallbacks:** system-ui, Arial
- **Font Display:** swap

### Rationale
- Inter is chosen for its high readability, modern professional appearance, and excellent performance on web and mobile.
- Using a single font family ensures brand consistency and reduces page load times.
- No other font families (e.g., Montserrat, Georgia, Times New Roman) are to be used anywhere on the site.

### Font Sizes
```css
/* Mobile First Approach */
text-sm: 0.875rem    /* 14px */
text-base: 1rem      /* 16px */
text-lg: 1.125rem    /* 18px */
text-xl: 1.25rem     /* 20px */
text-2xl: 1.5rem     /* 24px */
text-3xl: 1.875rem   /* 30px */
text-4xl: 2.25rem    /* 36px */
text-5xl: 3rem       /* 48px */
text-6xl: 3.75rem    /* 60px */
```

### Font Weights
- Light: `font-light`
- Normal: `font-normal`
- Bold: `font-bold`
- Extra Bold: `font-extrabold`

## Spacing System

### Padding
```css
/* Mobile */
px-4: 1rem          /* 16px */
py-8: 2rem          /* 32px */
py-12: 3rem         /* 48px */

/* Desktop */
sm:px-8: 2rem       /* 32px */
sm:py-16: 4rem      /* 64px */
sm:py-24: 6rem      /* 96px */
```

### Margins
```css
/* Mobile */
mb-4: 1rem          /* 16px */
mb-8: 2rem          /* 32px */
mb-12: 3rem         /* 48px */

/* Desktop */
sm:mb-8: 2rem       /* 32px */
sm:mb-12: 3rem      /* 48px */
sm:mb-16: 4rem      /* 64px */
```

## Component Library

### Buttons
```jsx
// Primary Button
<button className="bg-[#FFD700] text-black font-bold px-6 sm:px-8 py-3 sm:py-4 shadow-lg text-base sm:text-lg transition-all duration-200 uppercase font-sans rounded-full hover:-translate-y-1 hover:shadow-[0_8px_32px_0_rgba(255,215,0,0.5)] focus:outline-none">
  Button Text
</button>

// Gradient Button
<button className="bg-gradient-to-r from-[#ffe066] via-[#FFD700] to-[#bfa14a] text-black font-bold py-4 sm:py-5 shadow-lg text-lg sm:text-xl transition-all duration-200 uppercase font-sans rounded-full hover:-translate-y-1 hover:shadow-[0_8px_32px_0_rgba(255,215,0,0.5)] focus:outline-none">
  Button Text
</button>
```

### Cards
```jsx
// Feature Card
<div className="bg-white rounded-2xl shadow-xl flex-1 px-10 py-12 border-t-4" style={{ borderTopColor: '#FFD700' }}>
  <h3 className="text-2xl font-bold mb-4 text-black font-sans">Title</h3>
  <p className="text-lg text-gray-700 font-light leading-relaxed font-sans">
    Content
  </p>
</div>

// Testimonial Card
<div className="relative bg-white rounded-3xl shadow-2xl p-10 text-center mb-4 border-l-4" style={{ borderLeftColor: '#FFD700' }}>
  <span className="absolute left-8 top-6 text-4xl" style={{ color: '#FFD700' }}>&ldquo;</span>
  <p className="italic text-lg font-light font-serif leading-relaxed mb-8">
    Content
  </p>
</div>
```

### Section Headers
```jsx
// Primary Header
<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-gray-900 font-serif px-4">
  Section Title
</h2>

// Gradient Header
<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 font-serif text-center px-4" style={{
  background: 'linear-gradient(to bottom, #fffbe6 0%, #ffe066 25%, #FFD700 50%, #bfa14a 75%, #fffbe6 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  color: 'transparent',
  textShadow: '0 1px 1px rgba(191,161,74,0.08)'
}}>
  Section Title
</h2>
```

## Layout Patterns

### Section Structure
```jsx
<section className="bg-[color] text-[color] py-12 sm:py-24 px-4 text-center">
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 font-serif px-4">
    Section Title
  </h2>
  <div className="max-w-[size] mx-auto">
    {/* Content */}
  </div>
</section>
```

### Container Widths
- Small: `max-w-xl` (36rem / 576px)
- Medium: `max-w-3xl` (48rem / 768px)
- Large: `max-w-5xl` (64rem / 1024px)
- Extra Large: `max-w-7xl` (80rem / 1280px)

## Animation Guidelines

### Animation Best Practices
1. **Immediate Content Visibility**
   - Always show critical content (headers, first section) immediately
   - Use animations for subsequent content that appears on scroll
   - Never hide essential information behind animations

2. **Performance Considerations**
   - Use `viewport={{ once: true }}` to prevent re-animations
   - Keep animations simple and subtle
   - Avoid animating large sections of content simultaneously

3. **Animation Configuration**
   - Create reusable animation configurations
   - Use consistent timing and easing functions
   - Maintain accessibility by not relying solely on animations

### Hover Effects
```css
/* Button Hover */
hover:-translate-y-1
hover:shadow-[0_8px_32px_0_rgba(255,215,0,0.5)]

/* Transition */
transition: all 0.2s cubic-bezier(.4,0,.2,1)
```

## Component Architecture

### Server vs Client Components
1. **Server Components (Default)**
   - Use for static content and layout
   - Better performance and smaller bundle size
   - Can't use hooks or browser APIs
   - Can't use event listeners

2. **Client Components**
   - Mark with `'use client'` directive
   - Use for interactive elements and animations
   - Can use hooks, browser APIs, and event listeners
   - Keep client components as small as possible

### Best Practices
1. **Component Structure**
   ```jsx
   // page.tsx (Server Component)
   export default function Page() {
     return (
       <main>
         <AnimatedContent /> {/* Client Component */}
       </main>
     );
   }

   // AnimatedContent.tsx (Client Component)
   'use client';
   export default function AnimatedContent() {
     return (
       <motion.div>
         {/* Animated content */}
       </motion.div>
     );
   }
   ```

2. **Animation Component Pattern**
   - Create separate client components for animated content
   - Keep animations isolated in client components
   - Use server components for layout and static content
   - Pass data through props when needed

3. **Performance Optimization**
   - Minimize client-side JavaScript
   - Use server components by default
   - Only mark components as client when necessary
   - Keep client components focused and small

## Responsive Design

### Breakpoints
```css
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
```

### Mobile-First Approach
- Base styles for mobile
- `sm:` prefix for tablet and up
- `md:` prefix for desktop and up
- `lg:` prefix for large screens

### Responsive Typography
```jsx
className="text-3xl sm:text-4xl md:text-6xl"
className="text-sm sm:text-base md:text-lg"
```

## Iconography

### SVG Icons
- Use inline SVG for custom icons
- Maintain consistent stroke width (1.5-2.5)
- Use gold gradient or solid colors
- Responsive sizing with `sm:w-8 sm:h-8`

### Icon Colors
- Primary: `#FFD700`
- Secondary: `#bfa14a`
- Background: `#fffbe6`

## Best Practices

1. **Component Structure**
   - Use semantic HTML elements
   - Maintain consistent spacing
   - Follow mobile-first approach
   - Use appropriate heading hierarchy

2. **Accessibility**
   - Maintain proper contrast ratios
   - Use semantic HTML
   - Include proper ARIA labels
   - Ensure keyboard navigation

3. **Performance**
   - Optimize images
   - Use appropriate font loading
   - Minimize CSS bundle size
   - Implement lazy loading

4. **Code Organization**
   - Use consistent naming conventions
   - Maintain component separation
   - Follow DRY principles
   - Document complex logic

## Usage Guidelines

1. **New Pages**
   - Follow the established section structure
   - Use the defined color palette
   - Maintain consistent typography
   - Implement responsive design patterns

2. **New Components**
   - Follow the component library patterns
   - Use the defined spacing system
   - Implement consistent animations
   - Maintain accessibility standards

3. **Content Updates**
   - Follow the typography hierarchy
   - Use appropriate spacing
   - Maintain consistent styling
   - Implement responsive patterns

## Accessibility
- Maintain high color contrast
- Use semantic HTML and ARIA where appropriate
- Ensure all text uses Inter for maximum readability

## Performance
- Only Inter is loaded from Google Fonts, minimizing font payload
- Font weights are limited to those actually used in the design

## UI/UX Philosophy (2024 Update)
- **Performance-first:** All above-the-fold animations and heavy dependencies have been removed. Only Inter font is used for all text, loaded with `display: swap` and preloaded for speed.
- **Accessibility:** Semantic HTML, skip links, focus rings, ARIA labels, and high-contrast support are implemented throughout. All content is keyboard navigable and screen reader friendly.
- **Consistency:** Unified color palette, spacing, and component patterns. No font overrides or alternative font families are permitted.
- **Simplicity:** Animations are minimal and only used for non-critical content. No Framer Motion or similar libraries are present in the codebase.
- **SEO & Rich Results:** All key pages include Open Graph, Twitter, and JSON-LD structured data for best-in-class SEO and sharing.

- **Note:** As of 2024, Framer Motion and all above-the-fold animations have been removed for performance. Only minimal, CSS-based transitions are permitted for non-critical content.

---

**Note:** If you reference this document for future design or development, always use Inter for all text. Do not reintroduce Montserrat, serif, or other font families. 
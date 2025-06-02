# 🎨 Learning2Trade Design Specification for Cursor Development

This document defines the design principles and visual standards for creating new pages aligned with the current Learning2Trade.com aesthetic. All future development in Cursor should adhere to this unified style guide.

---

## ⚙️ Color Palette

**Primary Colors**
- `#000000` — Black (header/footer, main text)
- `#FFD700` — Gold (accent elements, buttons, icons)

**Secondary Colors**
- `#FFFFFF` — White (contrast background, input fields, text)
- `#F5F5F5` — Light Gray (testimonial backgrounds, section breaks)
- `#D1D5DB` — Mid Gray (borders, placeholder text)
- `#4B5563` — Dark Gray (secondary text)

---

## 🔠 Typography

**Primary Font:** Montserrat, sans-serif  
**Usage**
- Headings: Bold (`font-weight: 700`)
- Subheadings: Semi-bold (`font-weight: 600`)
- Body text: Regular (`font-weight: 400–500`)

*Maintain generous line spacing and consistent sizing to preserve visual hierarchy.*

---

## 🎭 Imagery & Texture

- **Marble Texture:** Use subtle black/gold marble backgrounds to elevate hero sections and callout blocks.
- **Photography Style:** Professional, aspirational, financial industry relevant. Use overlays where needed for readability.

---

## 🧱 Layout & Structure

**Container:**  
- Max-width: `1200px`, centered  
- Grid: 12 columns with 24px gutter  
- Section padding: `60px 0`  
- Element spacing: `24px` between elements

---

## 🧩 UI Components

### Buttons

**Primary Button**
- Background: `#FFD700` (Gold)
- Text: `#000000` (Black)
- Hover: Slightly darker gold
- Radius: 4px
- Padding: `12px 24px`
- Font: Montserrat Bold

**Secondary Button**
- Background: Transparent
- Border: `2px solid #FFD700`
- Text: `#FFD700`
- Hover: Gold background with black text

### Inputs

- Background: White
- Border: 1px solid gray (`#D1D5DB`)
- Focus: `#FFD700`
- Placeholder: `#6B7280` (light gray)
- Font: Montserrat Medium

### Forms

- Label above input, bold
- Required fields marked with asterisk
- Clear validation/error state messaging

---

## 🧭 Navigation

**Header**
- Background: Black
- Logo on the left
- Nav links right-aligned, white
- Hover: `#FFD700`
- Font: Montserrat Semibold

**Mobile Nav**
- Collapsible with hamburger icon
- Full screen overlay, gold-highlighted active link

---

## 🖥 Responsive Breakpoints

- Mobile: `≤ 640px`
- Tablet: `641px – 1024px`
- Desktop: `≥ 1025px`

*Ensure all components are fully responsive using mobile-first development.*

---

## 📈 SEO & Accessibility

- Semantic HTML (`<header>`, `<main>`, `<footer>`)
- Descriptive `alt` attributes on all images
- Clear heading hierarchy (H1–H3)
- Keyboard navigation support
- Minimum contrast ratio: 4.5:1

---

## 🛠 Tailwind CSS Configuration (Montserrat Font)

```ts
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        black: '#000000',
        gold: '#FFD700',
        gray: {
          light: '#F5F5F5',
          DEFAULT: '#D1D5DB',
          dark: '#4B5563',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
``` 
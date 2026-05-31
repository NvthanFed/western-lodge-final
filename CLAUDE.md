# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server (uses Turbopack)
npm run build        # Production build + type-check
npm run lint         # ESLint via next lint
npm run typecheck    # tsc --noEmit only (no emit, fast check)
```

There are no tests. Type-check with `npm run typecheck` before committing; the build runs the full lint + type pass automatically.

## Stack

- **Next.js 15** (App Router, static export) + **React 19**
- **Tailwind CSS v4** — configured entirely in `src/app/globals.css` via `@theme {}`, no `tailwind.config.js`
- **Framer Motion 11** for all animations
- **React Hook Form + Zod** for the booking inquiry and contact forms
- **yet-another-react-lightbox** for the gallery lightbox
- **Lucide React** for all icons

## Tailwind v4 Design System

All design tokens live in `src/app/globals.css` inside `@theme {}`. Token names become Tailwind utility classes directly:

- `--color-ivory: #F5EFE0` → `bg-ivory`, `text-ivory`, etc.
- `--color-teal-500: #1F6F7A` → `bg-teal-500`, `text-teal-500`, etc.
- `--text-fluid-hero: clamp(...)` → `text-fluid-hero`
- `--shadow-card: ...` → `shadow-card`

Custom utilities (not auto-generated from tokens) are defined in `@utility` blocks in `globals.css`:

| Class | Purpose |
|---|---|
| `font-heading` | `font-family: var(--font-display)` (League Spartan) |
| `font-500` … `font-800` | `font-weight` shorthands (old components use these instead of Tailwind's semantic names) |
| `gpu-accelerated` | `will-change: transform, opacity` + `backface-visibility: hidden` |
| `section-x` / `section-y` | Responsive horizontal / vertical padding via CSS vars |
| `eyebrow` | Small-caps eyebrow text style |
| `shadow-card` / `shadow-luxury` | Explicit box-shadow shorthands |

**When adding new colors or tokens, always add them to `@theme {}` in `globals.css` — not via arbitrary Tailwind values.** The font CSS variables (`--font-league-spartan`, `--font-montserrat`) are injected by `next/font` via `layout.tsx` and referenced in `@theme`.

## Architecture

### Page assembly

`src/app/page.tsx` is the single route. It wraps everything in `BookingModalProvider` and renders sections in order:

```
BookingModalProvider
  Navbar (fixed, z-50)
  main
    HeroSection
    AboutSection
    RoomsSection
    AmenitiesSection
    GallerySection
    ContactSection
  Footer
  BookingModal   ← portal-style, conditionally rendered via context
```

### Booking modal flow

`src/context/BookingModalContext.tsx` provides `openModal` / `closeModal` / `open` state. Any component that needs to trigger the modal imports `useBookingModal()`. `BookingModal` renders `BookingForm` (react-hook-form + Zod against `BookingInquirySchema`) or `BookingSuccess` on submit.

### Animation patterns

All reusable Framer Motion variants are centralized in `src/lib/animations.ts`. Sections use:
- `FadeInUp` / `StaggerContainer` wrapper components (`src/components/ui/`) for scroll-triggered entry
- `heroTextContainer` / `heroText` variants for staggered hero entrance
- `fadeInLeft` / `fadeInRight` for two-column reveals

Always use `gpu-accelerated` class on motion containers to avoid paint layers.

### Content / data

Static content (rooms, amenities, gallery items, nav links, contact info) lives in `src/data/content.ts`. `NAV_LINKS` drives both the Navbar and Footer link lists. `ROOMS` and `GALLERY` are passed as props into their respective sections from `page.tsx`.

The `RoomsSection` currently uses hardcoded `FEATURED_ROOMS` (3 cards) rather than `ROOMS` from content — this is intentional for the "cinematic" design that shows only 3 featured rooms.

### Forms and validation

Both form schemas are in `src/types/index.ts`:
- `BookingInquirySchema` — full booking inquiry (name, email, phone, dates, room type, guests)
- `ContactSchema` — simple contact (name, email, subject, message)

### Image assets

Only `/western-lodge.png` exists in `public/`. All gallery items, room images, and placeholders reference this file. `next.config.ts` allows remote images from Unsplash for future use.

### Scroll behavior

`src/hooks/useScrolled.ts` returns a boolean once `window.scrollY` exceeds a threshold (default 80px). The Navbar uses this to swap from transparent/white-text to cream/dark-text. `html { scroll-behavior: smooth; }` in globals.css handles anchor scroll.

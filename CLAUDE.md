# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**sosyal-stages** is a music event/artist platform with a Next.js frontend and an Express.js backend (not yet implemented). The frontend is actively developed; the backend is scaffolded but empty.

## Commands

All frontend commands run from the `frontend/` directory:

```bash
cd frontend
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

No test commands are configured yet in either package.

## Architecture

### Structure

```
sosyal-stages/
├── frontend/src/
│   ├── app/              # Next.js App Router pages
│   ├── components/       # Feature-organized React components
│   │   ├── home/         # HeroSection, FeaturedArtists, UpcomingEvents
│   │   ├── artists/      # ArtistGrid, ArtistCard
│   │   ├── events/       # EventGrid, EventCard, EventHero
│   │   ├── merch/        # MerchGrid, MerchCard, MerchHero
│   │   ├── layout/       # MenuBar, Footer
│   │   └── ui/           # Button, Badge (shared primitives)
│   ├── types/            # TypeScript interfaces: Artist, Event, Merch
│   ├── hooks/            # useMediaQuery.ts
│   ├── lib/              # utils.ts (cn helper)
│   └── services/         # Empty — placeholder for future API layer
└── backend/src/          # Express.js scaffold, entirely unimplemented
```

### Key Patterns

- **App Router**: Next.js 16 with the App Router. Pages live in `frontend/src/app/`.
- **Client components**: Mark with `'use client'` when using hooks or browser APIs.
- **Styling**: TailwindCSS 4 with custom brand tokens defined in `globals.css` as CSS variables:
  - `--color-sosyal-red`, `--color-bass-blue`, `--color-rave-black`, `--color-ara-white`, `--color-afters-yellow`
- **Component variants**: Use `class-variance-authority` (CVA) for intent/size variants (see `ui/Button`).
- **Type aliases**: `@/*` resolves to the root directory (configured in `tsconfig.json`).
- **Mock data**: Components currently use hardcoded mock arrays. A `services/` layer is intended to replace this when the backend is ready.

### Known Issues

- **Backend**: `backend/src/server.js` is empty. No API endpoints exist yet.
- **TypeScript strictness**: The frontend `tsconfig.json` has `strict: false`, while the root config has `strict: true`.

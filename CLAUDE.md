# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
npm run dev          # Start dev server at localhost:3000
npm run build        # Build production site to ./dist/
npm run preview      # Preview production build locally

# Astro CLI
npm run astro ...    # Run Astro CLI commands
```

## Architecture Overview

This is an interactive portfolio website built with **Astro**, **TailwindCSS v4**, and **Nanostores** for state management. The site features a unique sliding interface where different content sections are navigated horizontally.

### Core Concepts

**Sliding Navigation System**

- Pages are defined as sections in `src/pages/index.astro` (Welcome, Me, Built, Currently, Random, Projects)
- Each section has an ID (0-5) and visibility is toggled via the `pageIndex` store
- Navigation is controlled via keyboard (ArrowLeft/Right), slider UI buttons, and dots navigation
- The `Slider.astro` component provides the navigation UI (arrows, dots, maximize/minimize, page counter)

**State Management (Nanostores)**

- `pageIndex`: Current page/section index (0-based)
- `sectionCount`: Total number of sections
- `isMaximized`: Fullscreen toggle state
- `gameOn`: Pacman game state
- `modalContentId`: Modal content identifier

All state lives in `src/store.ts` and is subscribed to throughout components for reactivity.

**Layout Structure**

- `src/layouts/Layout.astro`: Main layout with frame, padding toggle, keyboard shortcuts
- `src/layouts/Slide.astro`: Individual slide wrapper (if used)
- Main frame has black background with white rounded content area
- Maximize mode (key: 'f' or buttons) removes padding and border radius

**Custom Styling**

- TailwindCSS v4 with custom theme in `src/styles/global.css`
- Custom cursors defined via CSS variables (`--cursor-custom`, `--cursor-custom-pointer`, `--cursor-custom-text`)
- Custom font families: DM Sans (body), Epilogue (headings), VT323 (retro text)
- Viewport-based text sizing for responsive headings (6vw, 4vw, 8vw mobile)

**Keyboard Controls**
Defined in `src/layouts/Layout.astro`:

- `f`: Toggle fullscreen/maximize
- `Escape`: Exit fullscreen or stop Pacman game
- `ArrowLeft`/`ArrowRight`: Navigate between sections
- `w`/`a`/`s`/`d`: Control Pacman during game

**Interactive Pacman Game**

- Lives in `src/components/atoms/Pacman.astro`
- Click Pacman to start game, use WASD to move
- Collision detection with `.explosion-letter` elements
- Sprite changes based on movement direction (8 directional sprites)
- Game resets when `gameOn` is set to false

### Component Structure

**Atomic Design Pattern**

- `src/components/atoms/`: Small reusable components (Button, Divider, Controls, Toast, etc.)
- `src/components/views/`: Full page views (Welcome, Me, Built, Currently, Projects, Random)
- `src/components/`: Top-level components (Slider, Footer)

**Key Components**

- `Slider.astro`: Main navigation UI with dots, arrows, and page counter
- `Pacman.astro`: Interactive game with collision detection
- `Modal.astro`: Modal overlay for displaying content
- `Contact.astro`: Contact UI elements
- `Toast.astro`: Toast notification system

### Deployment

The site deploys to GitHub Pages with a base path configured in `astro.config.mjs`:

- Production: `https://0xThales.github.io/portfolio/`
- Base path is automatically applied when `NODE_ENV === "production"` or `GITHUB_ACTIONS === "true"`
- Dev server runs on port 3000

### Important Notes

- All sections in `index.astro` must have sequential IDs starting from 0
- Custom cursors use SVG assets from `src/assets/`
- Images are optimized as `.webp` format
- Icons use Lucide Astro package
- TypeScript is enabled for enhanced developer experience
- No test suite or linting is configured in package.json

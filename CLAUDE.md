# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

This is Cauan Martins' personal portfolio website (single page, in Portuguese). It exists to present his professional experience, projects, qualifications, certifications, media coverage, and contact info. There is no backend — it is a purely static, client-rendered site.

**Stack**: React 19 + Vite, plain JavaScript (no TypeScript). This was migrated from a vanilla HTML/CSS/JS static site — when working in this repo, keep new code in React/JS, do not introduce TypeScript or reach for another framework.

## Commands

```bash
npm install       # install dependencies
npm run dev       # start the Vite dev server (hot reload)
npm run build     # production build into dist/
npm run preview   # serve the production build locally, for smoke-testing dist/
npm run lint       # oxlint (fast ESLint-compatible linter configured in .oxlintrc.json)
```

There is no test suite/framework set up in this project.

## Architecture

- `index.html` — Vite entry HTML. Loads `/src/main.jsx` as a module and preloads the two `Vanity` font weights used for headings. Also loads the Phosphor Icons web component script from a CDN (`<i className="ph-fill ph-...">` icons in `About.jsx` depend on this — there is no npm icon package installed).
- `src/main.jsx` — mounts `<App />` into `#root` and imports the single global stylesheet `src/index.css`.
- `src/App.jsx` — composes the page: renders `ColorblindFilters`, `AccessibilityPanel`, `Header`, then one `<section>` component per page section inside `<main>`, then `Footer`. This is the map of the whole page — start here to find where a section lives.
- `src/components/` — one component per section/UI concern (`Hero`, `Projects`, `Qualifications`, `Certifications`, `Media`, `About`, `Header`, `Footer`, `AccessibilityPanel`, `ColorblindFilters`). Section IDs (`#home`, `#projetos`, `#qualificacoes`, `#certificacoes`, `#midia`, `#sobre`) are preserved from the original site and used as scroll anchors (e.g. the hero's "Conheça mais" button links to `#sobre`).
- `src/data/` — plain JS arrays/objects (`projects.js`, `qualifications.js`, `certifications.js`, `media.js`) that the list-like sections (`Projects`, `Qualifications`, `Certifications`, `Media`) map over. To add/edit a project, certification, qualification group, or media mention, edit the corresponding data file — not the component.
- `src/hooks/` — all interactive/stateful behavior lives here, kept separate from markup:
  - `useTheme` — light/dark theme, toggles the `dark-theme` class on `document.body`, persists to `localStorage` (`site-theme`), defaults to the OS `prefers-color-scheme`.
  - `useAccessibilitySettings` — high-contrast mode and colorblindness filter (protanopia/deuteranopia/tritanopia/achromatopsia), toggles classes on `document.body`, persists to `localStorage`, and tracks whether the accessibility panel has been dismissed (it opens by default on first visit).
  - `useScrollReveal` — a single `IntersectionObserver` (set up once in `App`) that adds a `visible` class to every element with class `reveal` as it enters the viewport; the fade/slide-up itself is pure CSS (`.reveal` / `.reveal.visible` in `index.css`).
  - `useTilt` — attaches the mouse-driven 3D tilt effect to a project card via a ref (used per-card in `Projects.jsx`).
  - `useTypewriter` — types out the hero headline character by character with a blinking cursor.
  - `useSafeStorage` — `localStorage` wrapper that swallows errors (private browsing / storage disabled), used by the hooks above.
- `src/index.css` — one global stylesheet imported once in `main.jsx` (no CSS Modules/styled-components). Theming and accessibility modes work by toggling classes (`dark-theme`, `high-contrast`, `protanopia`, etc.) on `document.body` and letting CSS custom properties (defined in `:root` and overridden per class) cascade — the hooks above only ever touch `classList` and `localStorage`, all visual behavior stays in this file.
- `public/static/` — static assets (images, the `Vanity` OTF font files) served as-is at `/static/...`. This is intentionally **not** named `public/assets` — Vite's default production `assetsDir` is `assets`, and a `public/assets` folder collides with it (both get flattened into `dist/assets`). Keep new static files under `public/static/` and reference them with an absolute `/static/...` path.

## Conventions to follow

- New sections/components follow the same shape as the existing ones: a small presentational component in `src/components/`, its content in `src/data/` if it's list-like, and any interactivity in a hook in `src/hooks/` rather than inline in the component.
- Section anchor IDs (`#home`, `#projetos`, etc.) are part of the public API of this page (used for in-page navigation) — don't rename them without updating every link.
- Keep everything in Portuguese (pt-BR) — all copy, alt text, and aria-labels on the site are in Portuguese.

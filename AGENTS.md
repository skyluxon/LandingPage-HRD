# Repository Guidelines

## Project Structure & Module Organization

This is a Korean-language enterprise AX training landing page built with React, TypeScript, Tailwind CSS, Vite, and Express.

- `src/main.tsx` mounts the app; `src/App.tsx` coordinates sections, navigation, and modals.
- `src/components/` contains landing-page sections and dialogs. `src/data/` holds curriculum, workshop, and dashboard fixtures; shared interfaces live in `src/types.ts`.
- `src/index.css` imports Tailwind. Images live in `src/assets/` and `public/`.
- `server.ts` hosts the diagnostic, inquiry, and health APIs, Vite middleware during development, and built assets in production.
- `dist/` is generated output. No automated test directory currently exists.

## Build, Test, and Development Commands

- `npm install`: install dependencies; no lockfile is currently tracked.
- `npm run dev`: start Express with Vite middleware at `http://localhost:3000`.
- `npm run lint`: run TypeScript checking (`tsc --noEmit`); this is not ESLint.
- `npm run build`: build the frontend and bundle the backend into `dist/server.cjs`.
- `npm start`: run the bundled server after building. Set `NODE_ENV=production` to serve built assets; in PowerShell, use `$env:NODE_ENV='production'; npm start`.

## Coding Style & Naming Conventions

Use two-space indentation, semicolons, and functional React components. Follow each file's existing quote style. Name component files and interfaces in PascalCase, functions and variables in camelCase, and exported fixture constants in UPPER_SNAKE_CASE. Keep shared data shapes in `src/types.ts` and reusable content in `src/data/`. Prefer Tailwind utilities for styling. Preserve Korean copy and UTF-8 encoding. No dedicated formatter or ESLint configuration is present.

## Testing Guidelines

No test runner, test script, or coverage threshold is configured. Run `npm run lint` and `npm run build` before submitting changes. Manually check desktop/mobile navigation, curriculum expansion, syllabus dialogs, and consultation submission. For API changes, check `/api/health` and affected endpoints. If adding automated tests, document the runner and commands and use descriptive `*.test.ts` or `*.test.tsx` names.

## Commit & Pull Request Guidelines

History is limited to initial commits, including `feat: initial project scaffold`. Prefer concise imperative messages with prefixes such as `feat:`, `fix:`, or `docs:`. PRs should explain the change, link relevant issues, list validation performed, and include screenshots for visual changes.

## Configuration & Data

Use `.env.example` as the configuration reference; keep secrets in ignored `.env` files. `GEMINI_API_KEY` enables AI diagnostics. Inquiry storage is in memory and resets on restart; use synthetic contact data for development.

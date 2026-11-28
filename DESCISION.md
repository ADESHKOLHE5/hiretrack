# Decisions

## 1. Framework: Next.js (App Router)
- Why: One project for frontend and backend, good performance, widely used in jobs.
- Instead of: Plain React, because it needs a separate backend and extra setup for routing and SEO.

## 2. Language: TypeScript
- Why: Catches mistakes before running the code, and makes the code easier to understand.
- Instead of: JavaScript, because it has no type checking.

## 3. Package manager: pnpm
- Why: Fast, and saves disk space.
- Instead of: npm, which works but is slower.

## 4. Styling: Tailwind CSS
- Why: Quick to build UI without writing separate CSS files.
- Instead of: Material UI, which I used before. I want to learn a second approach.

## 10. Navigation links in config
- Why: One place to change menu items, and the navbar stays clean.
- Instead of: Writing links directly in the navbar, which means editing several files later.

## 11. Navbar and footer are Server Components
- Why: They need no state, so they send less JavaScript to the browser.
- Instead of: Adding "use client" everywhere, which I will only do when needed.

## 12. Route groups: (marketing) and (app)
- Why: Public pages and logged-in pages need different layouts, and groups do this without changing URLs.
- Instead of: One layout for everything, with conditions to hide the navbar.

## 13. Landing page sections live in features/marketing
- Why: page.tsx stays short, and each section is a reusable component.
- Instead of: Writing the whole page inside page.tsx.



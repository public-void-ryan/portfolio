# Portfolio — Ryan Fransen-Pruden

Personal portfolio and resume site built with [Astro](https://astro.build) and TypeScript. Statically generated and deployed via Forgejo Actions.

**Live:** https://ryanfp.dev

## 🚀 Project Structure

```text
/
├── public/
│   ├── favicon.ico
│   ├── favicon.svg
│   └── thumbnails/
├── src/
│   ├── components/
│   │   ├── Education.astro
│   │   ├── Experience.astro
│   │   └── Skills.astro
│   ├── data/
│   │   ├── resume.ts
│   │   └── resume.test.ts
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── contact.astro
│       ├── index.astro
│       └── portfolio.astro
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Resume data lives in `src/data/resume.ts` and is imported by page and component files. Pages are under `src/pages/` and map to routes by file name (`/`, `/portfolio`, `/contact`).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                  | Action                                        |
| :----------------------- | :-------------------------------------------- |
| `npm install`            | Installs dependencies                         |
| `npm run dev`            | Starts local dev server at `localhost:4321`   |
| `npm run build`          | Build your production site to `./dist/`       |
| `npm run preview`        | Preview your build locally, before deploying  |
| `npm run test`           | Run tests with Vitest                         |
| `npm run test:watch`     | Run tests in watch mode                       |
| `npm run test:coverage`  | Run tests with coverage report                |

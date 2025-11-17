# TH8.AI Website (Vue 3 + Vite + Tailwind)

Company website for **TH8.AI** with:

- Main landing page: Thailand-first Agentic AI & Workflow Automation (Thai + EN flavor)
- Demo page: **Logistics & Fulfillment Agent Suite (Thai Light Theme Mockup)**

Built with:

- [Vite](https://vitejs.dev/) + [Vue 3](https://vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vue Router](https://router.vuejs.org/)

## 1. Project structure

```bash
th8-ai-vue-site/
├─ index.html
├─ package.json
├─ vite.config.js
├─ tailwind.config.js
├─ postcss.config.js
├─ .gitignore
├─ README.md
└─ src/
   ├─ main.js
   ├─ App.vue
   ├─ assets/
   │  └─ main.css
   └─ pages/
      ├─ Home.vue              # Company landing (TH8.AI main)
      └─ LogisticsSuite.vue    # Logistics & Fulfillment Agent Suite mockup
```

## 2. Getting started (local dev)

### 2.1 Install dependencies

Make sure you have **Node.js 18+** installed.

```bash
cd th8-ai-vue-site
npm install
```

### 2.2 Run dev server

```bash
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`).

- `/` → TH8.AI main landing page
- `/logistics-suite` → Logistics & Fulfillment Agent Suite mockup

## 3. Build for production

```bash
npm run build
```

The production-ready files will be generated in the `dist/` folder.

To preview the production build locally:

```bash
npm run preview
```

## 4. Deploy as public website

You can deploy the `dist/` folder to any static hosting provider, for example:

### 4.1 Vercel

1. Push this repo to GitHub.
2. Go to Vercel, **Import Project** from GitHub.
3. Use defaults:
   - Framework: `Vite`
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy.

### 4.2 Netlify

1. Push this repo to GitHub.
2. Go to Netlify, create a **New site from Git**.
3. Set:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy.

### 4.3 GitHub Pages (via `npm run build`)

1. Run:

   ```bash
   npm run build
   ```

2. Deploy the contents of `dist/` using:
   - GitHub Pages (e.g. `gh-pages` branch), or
   - Any static file hosting service.

> If you use GitHub Pages with a subpath (like `/th8-ai-vue-site/`), you may need to set `base` in `vite.config.js`.

## 5. Editing content

- Main landing: edit `src/pages/Home.vue`
  - Hero, brand story, "What we do", industries, contact section.
- Logistics demo: edit `src/pages/LogisticsSuite.vue`
  - Text and layout for Logistics & Fulfillment Agent Suite mockup.

The **header and footer** are shared and defined in `src/App.vue`.

## 6. Tailwind & fonts

- Tailwind is configured in `tailwind.config.js` and imported in `src/assets/main.css`.
- Font **Prompt** is loaded via Google Fonts in `index.html` and applied globally via Tailwind (`font-prompt`).

You can further adjust colors and spacing using Tailwind utility classes in each component.

---

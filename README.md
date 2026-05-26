# Solmars Pharma Hub 🏥

A modern, highly optimized, dynamic pharmaceutical website built for **Solmars Pharma** — a trusted pharmaceutical company based in Ahmedabad, Gujarat. 

This website utilizes a **Static YAML Content System** where the layout, page copywriting, and product catalog are loaded directly from YAML configuration files. This results in incredibly fast rendering times, clean code structure, and zero database dependencies!

---

## 🗂️ Project Structure

All content configurations are stored within the `src/content/` directory, allowing simple and clear management of text, metadata, and lists:

```
solmars-pharma-hub/
├── src/
│   ├── routes/               # File-based routing (TanStack Router)
│   │   ├── index.tsx         #   Home Page
│   │   ├── about.tsx         #   About Page
│   │   ├── quality.tsx       #   Quality Page
│   │   ├── services.tsx      #   Services Page
│   │   ├── careers.tsx       #   Careers Page
│   │   ├── downloads.tsx     #   Downloads Page
│   │   ├── contact.tsx       #   Contact Page
│   │   ├── products.index.tsx#   Catalog Listing Page
│   │   └── products.$slug.tsx#   Product Detail Page
│   │
│   ├── content/              # ← All Content & Catalog Files
│   │   ├── home.yaml         #   Homepage sections and metadata
│   │   ├── about.yaml        #   About page story, mission, and pillars
│   │   ├── services.yaml     #   Services listings and marketing cards
│   │   ├── quality.yaml      #   Manufacturing commitments & certifications
│   │   ├── careers.yaml      #   Culture descriptions & job section settings
│   │   ├── contact.yaml      #   Corporate address, email, and phone info
│   │   ├── downloads.yaml    #   Brochures, catalog sheets, and doc grids
│   │   ├── products.yaml     #   Full products portfolio & molecular composition
│   │   └── media-config.yaml #   Nav brand logo, hero image, and social links
│   │
│   ├── data/                 # Data mappers, schemas & loader entries
│   ├── components/           # Modular React components & Layouts
│   ├── styles.css            # Styling (Tailwind CSS v4)
│   └── start.ts              # TanStack Start server handler
```

---

## ⚙️ Content & Catalog Files Reference

Editing your site content is simple. Just modify the appropriate YAML file inside `src/content/`:

| File Path | What it controls |
|---|---|
| `src/content/products.yaml` | Categorized formulations, dosages, composition, usage, and safety |
| `src/content/media-config.yaml` | Brand logo, hero banner background artwork, gallery pictures, and social media handles |
| `src/content/home.yaml` | Homepage copywriting, hero text, and section configurations |
| `src/content/about.yaml` | Corporate history, values, and organizational pillars |
| `src/content/services.yaml` | Specialized B2B and distribution service cards |
| `src/content/quality.yaml` | Quality assurance protocols, GMP compliance, and certifications |
| `src/content/careers.yaml` | Core culture, values, and application instructions |
| `src/content/contact.yaml` | Contact addresses, departments, email IDs, and phone numbers |
| `src/content/downloads.yaml` | Corporate brochures, dossiers, and product brochures lists |

---

## 🚀 Getting Started (Development)

### Prerequisites
* [Node.js](https://nodejs.org/) v18 or higher
* npm (preinstalled with Node)

### Installation & Run

```bash
# 1. Install local dependencies
npm install

# 2. Start the hot-reloading development server
npm run dev

# 3. Build & compile check for production
npm run build
```

Local development server will spin up at **http://localhost:5173** (or next available port).

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [React](https://react.dev/) | Declarative UI framework |
| [TanStack Start](https://tanstack.com/start) | SSR Full-stack framework |
| [TanStack Router](https://tanstack.com/router) | Type-safe file-based router |
| [Tailwind CSS v4](https://tailwindcss.com/) | Premium utility styling |
| [js-yaml](https://github.com/nodeca/js-yaml) | High-performance YAML loader & parser |
| [Zod](https://zod.dev/) | Data schema validation |

---

> **Solmars Pharma** — *For Humanity*

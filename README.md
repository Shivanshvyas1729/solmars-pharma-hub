# Solmars Pharma Hub 🏥

A modern, content-driven pharmaceutical website built for **Solmars Pharma** — a trusted pharmaceutical company based in Ahmedabad, Gujarat. The site is powered by a lightweight YAML-based CMS, making all content fully editable without touching any code.

---

## 🌐 Live Features

- **Dynamic product catalog** with category filters and search
- **Individual product detail pages** with tabbed sections (Overview, Composition, Usage, Safety)
- **Full CMS** — every page, product and media asset is controlled via YAML files
- **Logo and media management** via `media-config.yaml`
- **SEO-optimized** with meta tags, structured data and sitemap

---

## 🗂️ Project Structure

```
solmars-pharma-hub/
├── data/
│   └── control/              # ← All CMS content lives here (edit these!)
│       ├── media-config.yaml #   Logo, hero image, videos, gallery
│       ├── pages.yaml        #   All page content (hero, sections, text)
│       ├── products.yaml     #   Product catalog (name, description, details)
│       └── settings.yaml     #   Site name, SEO, contact info, navigation
│
├── src/
│   ├── routes/               # Page routes (one file per page)
│   │   ├── index.tsx         #   Home page
│   │   ├── products.index.tsx#   Products listing/catalog
│   │   ├── products.$slug.tsx#   Individual product detail page
│   │   ├── about.tsx
│   │   ├── quality.tsx
│   │   ├── services.tsx
│   │   ├── careers.tsx
│   │   ├── downloads.tsx
│   │   └── contact.tsx
│   │
│   ├── components/           # Reusable UI components
│   │   ├── SiteHeader.tsx    #   Navigation header with logo
│   │   ├── SiteFooter.tsx    #   Footer
│   │   ├── ProductCard.tsx   #   Product card on the catalog page
│   │   └── PageHero.tsx      #   Hero banner used on all pages
│   │
│   ├── data/                 # Data loaders — read and validate YAML files
│   │   ├── products.ts       #   Loads products.yaml
│   │   ├── pages.ts          #   Loads pages.yaml
│   │   ├── media.ts          #   Loads media-config.yaml
│   │   └── schemas.ts        #   Zod validation schemas for all YAML files
│   │
│   ├── api/                  # API helpers
│   │   └── cms.ts            #   Core file reader for YAML data
│   │
│   └── styles.css            # Global CSS (Tailwind CSS v4)
│
├── public/                   # Static assets (images, icons)
├── package.json
└── README.md
```

---

## ✏️ How to Edit Content (No Code Required)

All website content is controlled through the YAML files in `data/control/`. Just edit the values and save — the website updates automatically (in development) or on the next build.

### 📦 Add / Edit Products → `data/control/products.yaml`

```yaml
categories:
  - categoryName: Pain Management     # Group name shown on the website
    products:
      - slug: my-product              # URL-friendly ID (no spaces, use hyphens)
        name: My Product Tablets      # Full product name
        shortName: My Product         # Short name shown on cards
        image: ""                     # Leave empty for placeholder, or add URL/path
        description: Brief description of the product.

        # Optional detailed fields (shown on the product detail page):
        composition: "Active ingredient 500mg"
        dosageForm: Tablet
        packaging: "10 tablets per strip"
        segment: Pain Management
        therapeuticUse: "Used for the treatment of..."
        benefits:
          - Fast-acting formula
          - Clinically proven
        usage: "Take one tablet twice daily after meals."
        storage: "Store below 25°C in a dry place."
        safety: "Not recommended for children under 12."
```

**To add a new category**, copy the `- categoryName:` block and add it under `categories:`.

---

### 🖼️ Change Logo or Hero Image → `data/control/media-config.yaml`

```yaml
logo: "https://your-image-url.com/logo.jpg"    # Site logo (shown in header)
hero_image: "https://your-image-url.com/hero.jpg"  # Home page hero image
```

---

### 📄 Edit Page Text → `data/control/pages.yaml`

Every page's text — headings, descriptions, section content — is in `pages.yaml`. Find the page you want to edit and change the text values.

---

### ⚙️ Change Site Settings → `data/control/settings.yaml`

```yaml
siteName: "Solmars Pharma Hub"
contact:
  email: "info@solmarspharma.com"
  phone: "+91 98765 43210"
  address: "SG Highway, Ahmedabad, Gujarat"
```

---

## 🚀 Getting Started (Development)

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)

### Install & Run

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
```

The site will be available at **http://localhost:8080** (or the port shown in your terminal).

### Build for Production

```bash
npm run build
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [React](https://react.dev/) | UI framework |
| [TanStack Start](https://tanstack.com/start) | Full-stack React framework (SSR) |
| [TanStack Router](https://tanstack.com/router) | File-based routing |
| [Tailwind CSS v4](https://tailwindcss.com/) | Styling |
| [Zod](https://zod.dev/) | YAML schema validation |
| [Lucide React](https://lucide.dev/) | Icons |
| [js-yaml](https://github.com/nodeca/js-yaml) | YAML parsing |

---

## 📋 YAML Files Quick Reference

| File | What it controls |
|---|---|
| `media-config.yaml` | Logo, hero image, videos, banners, gallery, social links |
| `products.yaml` | All products — names, descriptions, composition, usage, safety |
| `pages.yaml` | All page content — headings, subheadings, body text |
| `settings.yaml` | Site name, SEO tags, contact details, navigation links |

---

## 🔗 Key Routes

| URL | Page |
|---|---|
| `/` | Home |
| `/products` | Product catalog (filterable + searchable) |
| `/products/{slug}` | Individual product detail page |
| `/about` | About Solmars Pharma |
| `/quality` | Quality & Research |
| `/services` | Services |
| `/careers` | Careers |
| `/downloads` | Downloads & Literature |
| `/contact` | Contact |

---

## 📞 Support

For questions about the codebase or content updates, contact the development team.

> **Solmars Pharma** — *For Humanity*

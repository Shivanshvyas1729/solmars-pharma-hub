import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Pill,
  ShieldAlert,
  Thermometer,
  ClipboardList,
  Mail,
  Phone,
  Handshake,
} from "lucide-react";
import { getProductBySlug, getRelatedProducts, type Product } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { resolveAppUrl } from "@/lib/utils";

export const Route = createFileRoute("/products/$slug")({
  loader: async ({ params }): Promise<{ product: Product; related: Product[] }> => {
    const product = await getProductBySlug(params.slug);
    if (!product) throw notFound();
    const related = await getRelatedProducts(params.slug);
    return { product, related };
  },
  head: ({ loaderData, params }) => {
    const p = loaderData?.product;
    if (!p) return { meta: [{ title: "Product — Solmars Pharma" }] };
    const url = resolveAppUrl(`/products/${params.slug}`);
    return {
      meta: [
        { title: `${p.name} — Solmars Pharma` },
        { name: "description", content: p.description },
        { property: "og:title", content: `${p.name} — Solmars Pharma` },
        { property: "og:description", content: p.description },
        { property: "og:type", content: "product" },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: p.name,
            description: p.description,
            category: p.category,
            brand: { "@type": "Brand", name: "Solmars Pharma" },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: resolveAppUrl("/") },
              {
                "@type": "ListItem",
                position: 2,
                name: "Products",
                item: resolveAppUrl("/products"),
              },
              { "@type": "ListItem", position: 3, name: p.name, item: url },
            ],
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="container-pharma py-24 text-center">
      <h1 className="text-2xl font-bold text-navy">Product not found</h1>
      <p className="mt-2 text-muted-foreground">The product you are looking for may have moved.</p>
      <Link
        to="/products"
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
      >
        <ArrowLeft className="h-4 w-4" /> Back to products
      </Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="container-pharma py-24 text-center">
      <h1 className="text-xl font-semibold text-navy">Unable to load product</h1>
      <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: ProductDetail,
});

const tabs = ["Overview", "Composition", "Usage", "Safety"] as const;
type Tab = (typeof tabs)[number];

function ProductDetail() {
  const { product, related } = Route.useLoaderData();
  const [tab, setTab] = useState<Tab>("Overview");

  return (
    <>
      {/* Breadcrumb */}
      <div className="border-b border-border bg-gradient-soft">
        <div className="container-pharma py-4 text-sm">
          <nav className="flex flex-wrap items-center gap-2 text-muted-foreground">
            <Link to="/" className="hover:text-primary">
              Home
            </Link>
            <span>/</span>
            <Link to="/products" className="hover:text-primary">
              Products
            </Link>
            <span>/</span>
            <span className="font-medium text-navy">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="container-pharma py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <ProductGallery product={product} />

          <div className="flex flex-col">
            <span className="inline-flex w-fit rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
              {product.category}
            </span>
            <h1 className="mt-4 text-3xl font-bold md:text-4xl">{product.name}</h1>
            <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {product.segment}
            </p>
            <p className="mt-5 text-base text-muted-foreground">{product.description}</p>

            <dl className="mt-7 grid grid-cols-2 gap-4 rounded-xl border border-border bg-card p-5 shadow-card">
              <InfoItem label="Dosage Form" value={product.dosageForm} />
              <InfoItem label="Packaging" value={product.packaging} />
              <InfoItem label="Therapeutic Segment" value={product.segment} />
              <InfoItem label="Category" value={product.category ?? ""} />
            </dl>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="btn-premium inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-card"
              >
                <Mail className="h-4 w-4" /> Request Information
              </Link>
              <Link
                to="/contact"
                className="btn-premium inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-semibold text-navy hover:bg-secondary"
              >
                <Handshake className="h-4 w-4" /> Distributor Inquiry
              </Link>
              <Link
                to="/contact"
                className="btn-premium inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-semibold text-navy hover:bg-secondary"
              >
                <Phone className="h-4 w-4" /> Contact Us
              </Link>
            </div>

            <p className="mt-6 flex items-start gap-2 rounded-md border border-border bg-secondary/50 p-3 text-xs text-muted-foreground">
              <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>
                <strong className="text-navy">Prescription only.</strong> To be sold by retail on
                the prescription of a registered medical practitioner. Read the package insert
                before use.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="border-y border-border bg-secondary/30">
        <div className="container-pharma">
          <div className="flex gap-1 overflow-x-auto py-3">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={[
                  "rounded-md px-4 py-2 text-sm font-semibold whitespace-nowrap transition",
                  tab === t
                    ? "bg-primary text-primary-foreground shadow-card"
                    : "text-foreground/70 hover:bg-card hover:text-navy",
                ].join(" ")}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="container-pharma py-14">
        <div className="mx-auto max-w-4xl">
          <div className="min-h-[260px] animate-in fade-in duration-300" key={tab}>
            {tab === "Overview" && (
              <div className="space-y-8">
                <Block icon={ClipboardList} title="Therapeutic Use">
                  <p>{product.therapeuticUse}</p>
                </Block>
                <Block icon={CheckCircle2} title="Key Benefits">
                  <ul className="space-y-2.5">
                    {product.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </Block>
              </div>
            )}
            {tab === "Composition" && (
              <Block icon={Pill} title="Composition">
                <p className="rounded-md border border-border bg-card p-4 font-mono text-sm text-navy">
                  {product.composition}
                </p>
                <p className="mt-4 text-sm">
                  Manufactured under stringent quality controls aligned with current Good
                  Manufacturing Practices (cGMP).
                </p>
              </Block>
            )}
            {tab === "Usage" && (
              <div className="space-y-8">
                <Block icon={ClipboardList} title="Usage Information">
                  <p>{product.usage}</p>
                </Block>
                <Block icon={Thermometer} title="Storage Instructions">
                  <p>{product.storage}</p>
                </Block>
              </div>
            )}
            {tab === "Safety" && (
              <Block icon={ShieldAlert} title="Safety Information">
                <p>{product.safety}</p>
                <p className="mt-4 text-xs text-muted-foreground">
                  This information is intended for healthcare professionals. Please refer to the
                  complete prescribing information before recommending or dispensing this product.
                </p>
              </Block>
            )}
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-secondary/40 py-16">
          <div className="container-pharma">
            <div className="mb-8 flex items-end justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                  Related Products
                </p>
                <h2 className="mt-2 text-2xl font-bold md:text-3xl">
                  Other formulations in {product.category}
                </h2>
              </div>
              <Link
                to="/products"
                className="hidden text-sm font-semibold text-primary hover:underline md:inline-flex"
              >
                View all products
              </Link>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <ProductCard key={r.slug} product={r} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </dt>
      <dd className="mt-1 text-sm font-medium text-navy">{value}</dd>
    </div>
  );
}

function Block({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="grid h-9 w-9 place-items-center rounded-md bg-primary/10 text-primary">
          <Icon className="h-4.5 w-4.5" />
        </span>
        <h3 className="font-display text-xl font-semibold text-navy">{title}</h3>
      </div>
      <div className="mt-4 text-sm leading-relaxed text-foreground/85">{children}</div>
    </div>
  );
}

function ProductGallery({ product }: { product: Product }) {
  const thumbs = [0, 1, 2];
  const [active, setActive] = useState(0);
  const initials = (product.shortName ?? product.name)
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
  const labels = ["Packaging", "Tablet View", "Strip"];

  return (
    <div>
      <div className="relative aspect-square overflow-hidden rounded-xl border border-border bg-gradient-soft shadow-card">
        <div className="absolute inset-0 grid place-items-center">
          {product.image ? (
            <img src={product.image} alt={product.name} className="object-cover w-full h-full" />
          ) : (
            <div className="flex flex-col items-center gap-5">
              <span className="grid h-24 w-24 place-items-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/15">
                <Pill className="h-12 w-12" />
              </span>
              <div className="text-center">
                <div className="font-display text-3xl font-bold text-navy">{initials}</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {labels[active]}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="absolute right-4 top-4 rounded-full bg-white/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary shadow-card backdrop-blur">
          {product.dosageForm}
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3">
        {thumbs.map((i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={[
              "aspect-square overflow-hidden rounded-md border bg-gradient-soft transition",
              active === i ? "border-primary shadow-card" : "border-border hover:border-primary/40",
            ].join(" ")}
          >
            <div className="grid h-full w-full place-items-center text-primary/70">
              <Pill className="h-6 w-6" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

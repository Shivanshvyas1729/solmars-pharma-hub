import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ProductCard } from "@/components/ProductCard";
import { products, productCategories } from "@/data/products";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Solmars Pharma Therapeutic Portfolio" },
      { name: "description", content: "Browse Solmars Pharma's pharmaceutical product catalog across antibiotics, pain management, orthopedic care, neurology and nutritional segments." },
      { property: "og:title", content: "Solmars Pharma Product Catalog" },
      { property: "og:description", content: "A trusted portfolio of quality pharmaceutical formulations for modern clinical practice." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const [active, setActive] = useState<string>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const inCat = active === "All" || p.category === active;
      const inQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.composition.toLowerCase().includes(q) ||
        p.segment.toLowerCase().includes(q);
      return inCat && inQuery;
    });
  }, [active, query]);

  const filters = ["All", ...productCategories];

  return (
    <>
      <PageHero
        eyebrow="Product Catalog"
        title="A therapeutic portfolio engineered for modern clinical practice"
        description="Browse our formulations across major therapeutic segments — built to meet the daily needs of doctors, hospitals and pharmacies."
      />

      {/* Filter + Search */}
      <section className="border-b border-border bg-background/80">
        <div className="container-pharma flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between">
          <div className="-mx-1 flex flex-1 flex-wrap gap-1.5">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={[
                  "rounded-full border px-3.5 py-1.5 text-xs font-semibold transition",
                  active === f
                    ? "border-primary bg-primary text-primary-foreground shadow-card"
                    : "border-border bg-card text-foreground/75 hover:border-primary/40 hover:text-navy",
                ].join(" ")}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="relative md:w-72">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search products or molecules"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-md border border-border bg-card py-2 pl-9 pr-3 text-sm placeholder:text-muted-foreground"
            />
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="container-pharma py-16">
        {filtered.length === 0 ? (
          <div className="rounded-xl border border-dashed border-border bg-secondary/40 p-16 text-center">
            <p className="font-semibold text-navy">No products found</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Try a different search term or category.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6 flex items-end justify-between">
              <p className="text-sm text-muted-foreground">
                Showing <span className="font-semibold text-navy">{filtered.length}</span> of{" "}
                {products.length} products
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </>
        )}
      </section>

      {/* CTA */}
      <section className="container-pharma pb-20">
        <div className="rounded-2xl border border-border bg-gradient-soft p-10 shadow-card md:p-14">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">
                Looking for a specific product or distribution opportunity?
              </h2>
              <p className="mt-3 text-muted-foreground">
                Our team can share detailed product information, dossiers and partnership terms on request.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link to="/contact" className="btn-premium rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-card">
                Request product list
              </Link>
              <Link to="/downloads" className="btn-premium rounded-md border border-border bg-card px-5 py-3 text-sm font-semibold text-navy hover:bg-secondary">
                Download brochure
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

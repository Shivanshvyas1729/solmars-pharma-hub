import { Link } from "@tanstack/react-router";
import { ArrowRight, Pill } from "lucide-react";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  const initials = (product.shortName ?? product.name)
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <Link
      to="/products/$slug"
      params={{ slug: product.slug }}
      className="card-lift group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card"
    >
      {/* Image placeholder */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-soft">
        <div className="absolute inset-0 grid place-items-center">
          {product.image ? (
            <img src={product.image} alt={product.name} className="h-full w-full object-cover object-center" />
          ) : (
            <div className="flex flex-col items-center gap-3">
              <span className="grid h-14 w-14 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                <Pill className="h-7 w-7" />
              </span>
              <span className="font-display text-lg font-bold tracking-wide text-navy">
                {initials}
              </span>
            </div>
          )}
        </div>
        <div className="absolute left-4 top-4">
          <span className="rounded-full bg-white/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary shadow-card backdrop-blur">
            {product.category}
          </span>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-base font-semibold text-navy">{product.name}</h3>
        <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {product.segment}
        </p>
        <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">{product.description}</p>

        <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-foreground/60">
            {product.dosageForm}
          </span>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-transform group-hover:translate-x-0.5">
            View Details <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}

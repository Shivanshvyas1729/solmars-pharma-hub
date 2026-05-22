import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Pill } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/quality", label: "Quality & Research" },
  { to: "/services", label: "Services" },
  { to: "/careers", label: "Careers" },
  { to: "/downloads", label: "Downloads" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-border bg-background/95 shadow-card backdrop-blur"
          : "border-transparent bg-background/70 backdrop-blur",
      ].join(" ")}
    >
      <div className={`container-pharma flex items-center justify-between transition-all duration-300 ${scrolled ? "h-14" : "h-16"}`}>
        <Link to="/" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-gradient-hero text-primary-foreground">
            <Pill className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-base font-bold text-navy">Solmars Pharma</span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">For Humanity</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="nav-underline rounded-md px-3 py-2 text-sm font-medium text-foreground/75 hover:text-navy"
              activeProps={{ className: "nav-underline rounded-md px-3 py-2 text-sm font-semibold text-primary" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="btn-premium hidden rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-card lg:inline-flex"
        >
          Partner with us
        </Link>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="lg:hidden rounded-md p-2 text-navy hover:bg-secondary"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-border bg-background lg:hidden">
          <div className="container-pharma flex flex-col py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary"
                activeProps={{ className: "rounded-md px-3 py-2.5 text-sm font-semibold text-primary bg-secondary" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

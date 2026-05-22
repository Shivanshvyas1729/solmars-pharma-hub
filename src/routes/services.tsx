import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Megaphone, Truck, Handshake, Factory, PackageCheck, Building2 } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Pharma Marketing, Distribution & Manufacturing" },
      { name: "description", content: "Solmars Pharma offers pharma marketing, distribution support, healthcare partnerships, third-party manufacturing and medical supply chain services." },
      { property: "og:title", content: "Solmars Pharma Services" },
      { property: "og:description", content: "End-to-end pharma services for distributors, hospitals and B2B partners." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Megaphone, title: "Pharma Marketing", body: "Brand-building, field promotion and clinician engagement across therapeutic segments." },
  { icon: Truck, title: "Distribution Support", body: "Reliable supply, logistics planning and partner enablement across regions." },
  { icon: Handshake, title: "Healthcare Partnerships", body: "Long-term relationships with hospitals, clinics and institutional buyers." },
  { icon: Factory, title: "Third-party Manufacturing", body: "Contract manufacturing of formulations under strict quality protocols." },
  { icon: PackageCheck, title: "Medical Supply Chain", body: "Optimized inventory, packaging and last-mile coordination for healthcare networks." },
  { icon: Building2, title: "B2B Pharma Solutions", body: "Tailored programs for institutions, government tenders and bulk supply needs." },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="End-to-end pharmaceutical services for partners and institutions"
        description="From marketing and distribution to third-party manufacturing, we support healthcare partners with reliable, scalable services."
      />

      <section className="container-pharma py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article key={s.title} className="rounded-xl border border-border bg-card p-7 shadow-card card-lift">
              <span className="grid h-12 w-12 place-items-center rounded-lg bg-primary/10 text-primary">
                <s.icon className="h-6 w-6" />
              </span>
              <h2 className="mt-5 text-xl font-semibold">{s.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-pharma pb-20">
        <div className="rounded-2xl border border-border bg-gradient-soft p-10 shadow-card md:p-14">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">Explore a partnership with Solmars Pharma</h2>
              <p className="mt-3 text-muted-foreground">Share your requirements and our business team will respond with a structured proposal.</p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link to="/contact" className="rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-card hover:opacity-90">
                Start a conversation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

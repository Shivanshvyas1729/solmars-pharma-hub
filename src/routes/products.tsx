import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Pill, ShieldCheck, FlaskConical, HeartPulse, Microscope, Activity, Stethoscope, Leaf } from "lucide-react";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Solmars Pharma Therapeutic Portfolio" },
      { name: "description", content: "Explore Solmars Pharma's therapeutic portfolio: antibiotics, pain management, nutritional, neurology, orthopedic and general healthcare products." },
      { property: "og:title", content: "Solmars Pharma Product Categories" },
      { property: "og:description", content: "Quality pharmaceutical formulations across major therapeutic segments." },
    ],
  }),
  component: ProductsPage,
});

const categories = [
  { icon: HeartPulse, title: "Antibiotics", desc: "Broad and narrow-spectrum antibacterials, supporting evidence-based clinical protocols.", count: "30+ formulations" },
  { icon: ShieldCheck, title: "Pain Management", desc: "Analgesics and NSAIDs for acute, post-operative and chronic pain.", count: "25+ formulations" },
  { icon: Activity, title: "Orthopedic Care", desc: "Therapies supporting bone, joint and musculoskeletal recovery.", count: "20+ formulations" },
  { icon: Leaf, title: "Nutritional Supplements", desc: "Multivitamins, minerals and wellness essentials for daily care.", count: "35+ formulations" },
  { icon: Stethoscope, title: "General Healthcare", desc: "Everyday prescription and OTC essentials for outpatient care.", count: "40+ formulations" },
  { icon: Microscope, title: "Neurology", desc: "Therapies supporting neurological wellness and recovery.", count: "15+ formulations" },
];

const forms = [
  { title: "Tablets", desc: "Coated, uncoated and modified-release oral tablets." },
  { title: "Capsules", desc: "Hard and soft gelatin capsule formulations." },
  { title: "Syrups & Suspensions", desc: "Pediatric and adult oral liquid preparations." },
  { title: "Sachets & Powders", desc: "Dispersible formats for convenient dosing." },
];

function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="A therapeutic portfolio engineered for modern clinical practice"
        description="Our formulations span major therapeutic segments and dosage forms — built to meet the daily needs of doctors, hospitals and pharmacies."
      />

      <section className="container-pharma py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <article key={c.title} className="group rounded-xl border border-border bg-card p-7 shadow-card card-lift">
              <span className="grid h-12 w-12 place-items-center rounded-lg bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                <c.icon className="h-6 w-6" />
              </span>
              <h2 className="mt-5 text-xl font-semibold">{c.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
              <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-primary">{c.count}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary/50 py-20">
        <div className="container-pharma">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">Dosage forms</p>
              <h2 className="text-3xl font-bold md:text-4xl">Manufacturing across multiple formats</h2>
              <p className="mt-5 text-muted-foreground">
                From solid orals to liquid preparations, our manufacturing capability is designed for consistency, stability and patient compliance.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {forms.map((f) => (
                <div key={f.title} className="flex gap-4 rounded-xl border border-border bg-card p-5 shadow-card">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                    <Pill className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-navy">{f.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-pharma py-20">
        <div className="rounded-2xl border border-border bg-gradient-soft p-10 shadow-card md:p-14">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">Looking for a specific product or distribution opportunity?</h2>
              <p className="mt-3 text-muted-foreground">Our team can share detailed product information, dossiers and partnership terms on request.</p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link to="/contact" className="rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-card hover:opacity-90">
                Request product list
              </Link>
              <Link to="/downloads" className="rounded-md border border-border bg-card px-5 py-3 text-sm font-semibold text-navy hover:bg-secondary">
                Download brochure
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

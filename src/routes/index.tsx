import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, FlaskConical, Truck, Award, HeartPulse, Microscope, ArrowRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/hooks/use-reveal";
import heroImg from "@/assets/hero-lab.jpg";
import researchImg from "@/assets/research.jpg";
import productsImg from "@/assets/products.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Solmars Pharma — Trusted Healthcare Solutions for Humanity" },
      { name: "description", content: "Quality generic medicines, formulations and healthcare products from Ahmedabad, India. Built on trust, science and care." },
      { property: "og:title", content: "Solmars Pharma — For Humanity" },
      { property: "og:description", content: "Delivering trusted healthcare solutions and quality medicines for a healthier tomorrow." },
    ],
  }),
  component: Home,
});

const categories = [
  { icon: HeartPulse, title: "Antibiotics", desc: "Broad and targeted spectrum formulations." },
  { icon: ShieldCheck, title: "Pain Management", desc: "Reliable analgesic and anti-inflammatory range." },
  { icon: FlaskConical, title: "Nutritional Supplements", desc: "Vitamins, minerals and wellness essentials." },
  { icon: Microscope, title: "Neurology", desc: "Therapies for neurological care and recovery." },
  { icon: Award, title: "Orthopedic Care", desc: "Bone, joint and musculoskeletal health." },
  { icon: Truck, title: "General Healthcare", desc: "Everyday OTC and prescription essentials." },
];

const stats = [
  { value: "150+", label: "Formulations" },
  { value: "20+", label: "Therapeutic Segments" },
  { value: "500+", label: "Distribution Partners" },
  { value: "1M+", label: "Patients Served" },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero text-white">
        <div className="container-pharma grid items-center gap-12 py-20 md:py-28 lg:grid-cols-2">
          <div className="reveal">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]">
              <span className="h-1.5 w-1.5 rounded-full bg-white" /> For Humanity
            </p>
            <h1 className="text-4xl font-bold leading-[1.05] text-white md:text-6xl">
              Delivering Trusted Healthcare Solutions
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80">
              Solmars Pharma develops affordable, quality medicines and pharmaceutical formulations — built on rigorous science, ethical practice and a commitment to global wellbeing.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/products" className="btn-premium inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-navy shadow-elevated">
                Explore Products <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="btn-premium inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">
                Partner with us
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-xl shadow-elevated ring-1 ring-white/10">
              <img src={heroImg} alt="Solmars Pharma manufacturing laboratory" width={1920} height={1080} className="h-auto w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-background">
        <div className="container-pharma grid grid-cols-2 gap-8 py-12 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <div className="font-display text-3xl font-bold text-navy md:text-4xl">{s.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About snapshot */}
      <section className="container-pharma py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">About Solmars</p>
            <h2 className="text-3xl font-bold md:text-4xl">A pharmaceutical company built on science and trust</h2>
            <p className="mt-5 text-muted-foreground">
              Headquartered in Ahmedabad, Gujarat, Solmars Pharma develops generic medicines, formulations and wellness products that meet rigorous quality standards. We partner with doctors, distributors and hospitals to make dependable healthcare accessible to communities across India and beyond.
            </p>
            <ul className="mt-6 space-y-3">
              {["GMP-aligned manufacturing practices", "Therapeutic breadth across 20+ segments", "Distributor network spanning India", "Patient-first formulation philosophy"].map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-foreground/85">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" /> {p}
                </li>
              ))}
            </ul>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
              Learn more about us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="overflow-hidden rounded-xl shadow-card">
            <img src={researchImg} alt="Quality research at Solmars Pharma" loading="lazy" width={1600} height={1000} className="h-auto w-full" />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-secondary/50 py-20">
        <div className="container-pharma">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">Therapeutic Portfolio</p>
            <h2 className="text-3xl font-bold md:text-4xl">Product categories</h2>
            <p className="mt-4 text-muted-foreground">A diversified portfolio engineered to support modern clinical practice.</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <div key={c.title} className="group rounded-xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-0.5 hover:shadow-elevated">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <c.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{c.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/products" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-card hover:opacity-90">
              View all products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="container-pharma py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="overflow-hidden rounded-xl shadow-card">
            <img src={productsImg} alt="Pharmaceutical products" loading="lazy" width={1600} height={1000} className="h-auto w-full" />
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">Why Solmars Pharma</p>
            <h2 className="text-3xl font-bold md:text-4xl">Healthcare made accessible, without compromise</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {[
                { t: "Stringent Quality", d: "Multi-stage QA from raw material to finished product." },
                { t: "Affordable Access", d: "Pricing that supports doctors and patients alike." },
                { t: "Reliable Supply", d: "Pan-India distribution and partner network." },
                { t: "Ethical Practice", d: "Compliance-first culture across every operation." },
              ].map((b) => (
                <div key={b.t}>
                  <h3 className="text-base font-semibold text-navy">{b.t}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{b.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-navy py-20 text-white">
        <div className="container-pharma grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/70">Our Mission</p>
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Quality medicines for a healthier tomorrow.
            </h2>
            <p className="mt-5 max-w-2xl text-white/75">
              We exist to make dependable healthcare available to every community we serve — guided by science, anchored in integrity, and inspired by the people who depend on us every day.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link to="/quality" className="rounded-md border border-white/25 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">
              Our quality systems
            </Link>
            <Link to="/contact" className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-navy hover:bg-white/90">
              Talk to our team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

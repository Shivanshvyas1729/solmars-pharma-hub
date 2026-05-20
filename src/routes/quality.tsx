import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { ShieldCheck, FlaskConical, ClipboardCheck, Award, Microscope, BadgeCheck } from "lucide-react";
import researchImg from "@/assets/research.jpg";

export const Route = createFileRoute("/quality")({
  head: () => ({
    meta: [
      { title: "Quality & Research — Solmars Pharma" },
      { name: "description", content: "Solmars Pharma's quality assurance, manufacturing standards, compliance and research philosophy across every formulation." },
      { property: "og:title", content: "Quality & Research at Solmars Pharma" },
      { property: "og:description", content: "Rigorous quality systems and scientific discipline at every stage." },
    ],
  }),
  component: QualityPage,
});

const pillars = [
  { icon: ShieldCheck, title: "Quality Assurance", body: "Multi-stage QA framework covering raw material qualification, in-process checks and finished-product release." },
  { icon: FlaskConical, title: "Manufacturing Standards", body: "GMP-aligned facilities and processes designed for consistency, safety and traceability." },
  { icon: ClipboardCheck, title: "Compliance", body: "Documentation, batch records and regulatory alignment built into every operation." },
  { icon: Microscope, title: "Research Philosophy", body: "Evidence-led formulation work centered on patient outcomes and clinical relevance." },
  { icon: Award, title: "Safety Commitment", body: "Stability, bioequivalence and pharmacovigilance practices that put patient safety first." },
  { icon: BadgeCheck, title: "Continuous Improvement", body: "Investment in technology, training and audits to raise our standards every year." },
];

function QualityPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality & Research"
        title="Science, discipline and safety at every stage"
        description="Quality is not a stage in our process — it is the foundation of every product we manufacture and every relationship we hold."
      />

      <section className="container-pharma grid gap-12 py-20 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="text-3xl font-bold md:text-4xl">A quality-first manufacturing culture</h2>
          <p className="mt-5 text-muted-foreground">
            From raw material sourcing to finished-goods release, our processes are designed for repeatable quality. We maintain rigorous documentation, controlled environments and a compliance-first mindset across every formulation.
          </p>
          <p className="mt-4 text-muted-foreground">
            Our research approach focuses on clinically relevant formulations — built to meet real-world patient needs and prescribing realities for healthcare professionals.
          </p>
        </div>
        <div className="overflow-hidden rounded-xl shadow-card">
          <img src={researchImg} alt="Quality control laboratory" loading="lazy" width={1600} height={1000} className="h-auto w-full" />
        </div>
      </section>

      <section className="bg-secondary/50 py-20">
        <div className="container-pharma">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">Our pillars</p>
            <h2 className="text-3xl font-bold md:text-4xl">Six commitments behind every product</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-xl border border-border bg-card p-7 shadow-card">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-primary/10 text-primary">
                  <p.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-pharma py-20">
        <div className="rounded-2xl bg-navy p-10 text-white shadow-elevated md:p-14">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">Certifications</p>
          <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl">Building toward globally recognized standards</h2>
          <p className="mt-4 max-w-2xl text-white/80">
            We continuously invest in audits, accreditations and certifications to strengthen confidence for our partners, regulators and patients.
          </p>
        </div>
      </section>
    </>
  );
}

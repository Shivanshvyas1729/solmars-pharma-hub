import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Target, Eye, Heart, Compass } from "lucide-react";
import teamImg from "@/assets/team.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Solmars Pharma — Our Story, Mission & Vision" },
      { name: "description", content: "Learn about Solmars Pharma — an Ahmedabad-based pharmaceutical company committed to affordable, high-quality medicines for humanity." },
      { property: "og:title", content: "About Solmars Pharma" },
      { property: "og:description", content: "Affordable, high-quality medicines built on science, ethics and care." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Target, title: "Mission", body: "To deliver high-quality, affordable pharmaceutical solutions that improve patient outcomes and strengthen healthcare access." },
  { icon: Eye, title: "Vision", body: "To be a trusted pharmaceutical partner advancing healthcare for communities across India and the world." },
  { icon: Heart, title: "Values", body: "Integrity, scientific rigor, patient-first thinking, and an unwavering commitment to quality and compliance." },
  { icon: Compass, title: "Commitment", body: "We honor our responsibility to doctors, distributors, hospitals and patients with consistent, ethical practice." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A pharmaceutical company anchored in trust and science"
        description="Headquartered in Ahmedabad, Gujarat, Solmars Pharma is dedicated to building a healthier tomorrow through reliable formulations, ethical practice, and partnerships with healthcare professionals."
      />

      <section className="container-pharma grid gap-12 py-20 lg:grid-cols-2 lg:items-center">
        <div className="overflow-hidden rounded-xl shadow-card">
          <img src={teamImg} alt="Solmars Pharma team" loading="lazy" width={1600} height={1000} className="h-auto w-full" />
        </div>
        <div>
          <h2 className="text-3xl font-bold md:text-4xl">Our story</h2>
          <p className="mt-5 text-muted-foreground">
            Founded with a singular purpose — to make quality medicines accessible to all — Solmars Pharma has grown into a trusted name in pharmaceutical formulations, generic medicines and healthcare products. Our work is guided by science, sharpened by experience, and inspired by the patients we serve.
          </p>
          <p className="mt-4 text-muted-foreground">
            We collaborate with doctors, distributors and institutions to bring dependable therapies to communities across India and beyond, while building a scalable foundation for the next chapter of our growth.
          </p>
        </div>
      </section>

      <section className="bg-secondary/50 py-20">
        <div className="container-pharma">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">What guides us</p>
            <h2 className="text-3xl font-bold md:text-4xl">Mission, vision and values</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="rounded-xl border border-border bg-card p-7 shadow-card">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-primary/10 text-primary">
                  <v.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-xl font-semibold">{v.title}</h3>
                <p className="mt-2 text-muted-foreground">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-pharma py-20">
        <div className="grid gap-10 lg:grid-cols-3">
          {[
            { t: "Market presence", d: "Active distribution and partnerships across major Indian states with a growing international footprint." },
            { t: "Leadership philosophy", d: "Disciplined operations, ethical decision-making and an open culture of accountability." },
            { t: "Future growth", d: "Expanding therapeutic depth, manufacturing capability and digital infrastructure for tomorrow." },
          ].map((b) => (
            <div key={b.t}>
              <h3 className="text-xl font-semibold text-navy">{b.t}</h3>
              <p className="mt-3 text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

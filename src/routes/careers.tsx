import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Users, GraduationCap, Sparkles, Heart } from "lucide-react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers at Solmars Pharma — Build Your Future in Healthcare" },
      { name: "description", content: "Join Solmars Pharma. Explore roles, our people-first culture and opportunities to make a difference in pharmaceutical healthcare." },
      { property: "og:title", content: "Careers at Solmars Pharma" },
      { property: "og:description", content: "Grow your career with a purpose-driven pharma company." },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

const culture = [
  { icon: Users, title: "People-first culture", body: "Respect, collaboration and continuous learning shape how we work." },
  { icon: GraduationCap, title: "Growth & training", body: "Ongoing development and exposure across pharmaceutical functions." },
  { icon: Sparkles, title: "Purpose-driven work", body: "Every role contributes to better healthcare outcomes." },
  { icon: Heart, title: "Wellbeing", body: "Programs and policies designed to support employee wellness." },
];

function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build a meaningful career in pharmaceutical healthcare"
        description="At Solmars Pharma, your work directly impacts the lives of patients and the practice of medicine. We are building a team that shares our commitment to quality and humanity."
      />

      <section className="container-pharma py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {culture.map((c) => (
            <div key={c.title} className="rounded-xl border border-border bg-card p-6 shadow-card">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                <c.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/50 py-20">
        <div className="container-pharma">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">Open opportunities</p>
            <h2 className="text-3xl font-bold md:text-4xl">We are growing across functions</h2>
            <p className="mt-4 text-muted-foreground">
              We hire across manufacturing, quality, R&D, sales, marketing, supply chain and corporate functions. New openings are posted as our teams expand.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-border bg-card p-8 text-center shadow-card">
            <h3 className="text-xl font-semibold">Send us your profile</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Share your CV and area of interest — we&apos;ll reach out when a relevant role opens.
            </p>
            <Link to="/contact" className="mt-6 inline-flex rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-card hover:opacity-90">
              Apply via contact form
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

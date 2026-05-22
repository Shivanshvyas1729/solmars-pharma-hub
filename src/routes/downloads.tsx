import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { FileText, Download } from "lucide-react";

export const Route = createFileRoute("/downloads")({
  head: () => ({
    meta: [
      { title: "Downloads — Solmars Pharma Brochures & Catalogs" },
      { name: "description", content: "Download Solmars Pharma corporate brochures, product catalogs and informational PDFs for healthcare professionals and partners." },
      { property: "og:title", content: "Solmars Pharma Downloads" },
      { property: "og:description", content: "Corporate brochures, catalogs and product documents." },
      { property: "og:url", content: "/downloads" },
    ],
    links: [{ rel: "canonical", href: "/downloads" }],
  }),
  component: DownloadsPage,
});

const docs = [
  { title: "Corporate Brochure", desc: "An overview of Solmars Pharma, our portfolio and our capabilities.", size: "PDF · 2.1 MB" },
  { title: "Product Catalog", desc: "Complete therapeutic segment listings and dosage formats.", size: "PDF · 4.6 MB" },
  { title: "Distributor Onboarding Kit", desc: "Information and documentation for new distribution partners.", size: "PDF · 1.4 MB" },
  { title: "Third-party Manufacturing", desc: "Capabilities, processes and quality systems overview.", size: "PDF · 1.8 MB" },
  { title: "Quality Systems Summary", desc: "An introduction to our QA framework and compliance practices.", size: "PDF · 0.9 MB" },
  { title: "Therapeutic Segments Guide", desc: "Reference deck for healthcare professionals and partners.", size: "PDF · 3.2 MB" },
];

function DownloadsPage() {
  return (
    <>
      <PageHero
        eyebrow="Downloads"
        title="Brochures, catalogs and documents"
        description="Access curated information for healthcare professionals, distributors and partners."
      />

      <section className="container-pharma py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {docs.map((d) => (
            <article key={d.title} className="flex flex-col rounded-xl border border-border bg-card p-7 shadow-card card-lift">
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-primary/10 text-primary">
                <FileText className="h-5 w-5" />
              </span>
              <h2 className="mt-5 text-lg font-semibold">{d.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{d.desc}</p>
              <p className="mt-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">{d.size}</p>
              <button
                type="button"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-4 py-2.5 text-sm font-semibold text-navy hover:bg-secondary"
              >
                <Download className="h-4 w-4" /> Download
              </button>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

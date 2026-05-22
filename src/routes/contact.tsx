import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Solmars Pharma — Business & Distributor Inquiries" },
      { name: "description", content: "Reach Solmars Pharma for business, distributor and partnership inquiries. Headquartered in Ahmedabad, Gujarat, India." },
      { property: "og:title", content: "Contact Solmars Pharma" },
      { property: "og:description", content: "Get in touch with our team for products, partnerships and careers." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about healthcare, partnership and growth"
        description="Our team is available for business inquiries, distributor onboarding and product information."
      />

      <section className="container-pharma py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-semibold text-navy">Head Office</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Ahmedabad, Gujarat, India</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-semibold text-navy">Email</h3>
                  <p className="mt-1 text-sm text-muted-foreground">info@solmarspharma.com</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-semibold text-navy">Phone</h3>
                  <p className="mt-1 text-sm text-muted-foreground">+91 00000 00000</p>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl border border-border shadow-card">
              <div className="grid aspect-video place-items-center bg-secondary text-sm text-muted-foreground">
                Google Maps placeholder
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="rounded-2xl border border-border bg-card p-8 shadow-card"
          >
            <h2 className="text-2xl font-bold">Send us an inquiry</h2>
            <p className="mt-2 text-sm text-muted-foreground">We typically respond within 1–2 business days.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="text-sm">
                <span className="font-medium text-navy">Full name</span>
                <input required maxLength={100} className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring" />
              </label>
              <label className="text-sm">
                <span className="font-medium text-navy">Email</span>
                <input required type="email" maxLength={255} className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring" />
              </label>
              <label className="text-sm">
                <span className="font-medium text-navy">Phone</span>
                <input maxLength={20} className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring" />
              </label>
              <label className="text-sm">
                <span className="font-medium text-navy">Inquiry type</span>
                <select className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring">
                  <option>General inquiry</option>
                  <option>Distributor / partnership</option>
                  <option>Third-party manufacturing</option>
                  <option>Career opportunity</option>
                </select>
              </label>
            </div>
            <label className="mt-4 block text-sm">
              <span className="font-medium text-navy">Message</span>
              <textarea required maxLength={1000} rows={5} className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring" />
            </label>
            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-card hover:opacity-90"
            >
              <Send className="h-4 w-4" /> Send inquiry
            </button>
            {sent && (
              <p className="mt-4 rounded-md bg-secondary px-4 py-3 text-sm text-navy">
                Thank you. Your inquiry has been recorded — our team will be in touch shortly.
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

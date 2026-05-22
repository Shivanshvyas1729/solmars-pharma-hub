import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { PageHero } from "@/components/PageHero";
import { Mail, Phone, MapPin, Send, AlertCircle } from "lucide-react";

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

const inquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Please enter your full name." })
    .max(100, { message: "Name must be under 100 characters." }),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address." })
    .max(255, { message: "Email must be under 255 characters." }),
  phone: z
    .string()
    .trim()
    .max(20, { message: "Phone must be under 20 characters." })
    .regex(/^[0-9+\-\s().]*$/, { message: "Phone contains invalid characters." })
    .optional()
    .or(z.literal("")),
  inquiryType: z.enum([
    "General inquiry",
    "Distributor / partnership",
    "Third-party manufacturing",
    "Career opportunity",
  ]),
  message: z
    .string()
    .trim()
    .min(10, { message: "Please share at least 10 characters so we can help." })
    .max(1000, { message: "Message must be under 1000 characters." }),
});

type FieldErrors = Partial<Record<keyof z.infer<typeof inquirySchema>, string>>;

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = inquirySchema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone") ?? "",
      inquiryType: fd.get("inquiryType"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof FieldErrors;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      setSent(false);
      return;
    }
    setErrors({});
    setSent(true);
  };

  const fieldClass = (hasError: boolean) =>
    [
      "mt-1.5 w-full rounded-md border bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring",
      hasError ? "border-destructive" : "border-input",
    ].join(" ");

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
                <MapPin className="mt-0.5 h-5 w-5 text-primary" aria-hidden="true" />
                <div>
                  <h2 className="font-semibold text-navy">Head Office</h2>
                  <p className="mt-1 text-sm text-muted-foreground">Ahmedabad, Gujarat, India</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-primary" aria-hidden="true" />
                <div>
                  <h2 className="font-semibold text-navy">Email</h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    <a href="mailto:info@solmarspharma.com" className="hover:text-primary">info@solmarspharma.com</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-primary" aria-hidden="true" />
                <div>
                  <h2 className="font-semibold text-navy">Phone</h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    <a href="tel:+910000000000" className="hover:text-primary">+91 00000 00000</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl border border-border shadow-card">
              <div className="grid aspect-video place-items-center bg-secondary text-sm text-muted-foreground" aria-label="Map placeholder">
                Google Maps placeholder
              </div>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            noValidate
            aria-labelledby="contact-form-title"
            className="rounded-2xl border border-border bg-card p-8 shadow-card"
          >
            <h2 id="contact-form-title" className="text-2xl font-bold">Send us an inquiry</h2>
            <p className="mt-2 text-sm text-muted-foreground">We typically respond within 1–2 business days.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="text-sm">
                <label htmlFor="contact-name" className="font-medium text-navy">Full name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  maxLength={100}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "contact-name-error" : undefined}
                  className={fieldClass(!!errors.name)}
                />
                {errors.name && (
                  <p id="contact-name-error" className="mt-1.5 flex items-center gap-1 text-xs text-destructive">
                    <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" /> {errors.name}
                  </p>
                )}
              </div>
              <div className="text-sm">
                <label htmlFor="contact-email" className="font-medium text-navy">Email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  maxLength={255}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "contact-email-error" : undefined}
                  className={fieldClass(!!errors.email)}
                />
                {errors.email && (
                  <p id="contact-email-error" className="mt-1.5 flex items-center gap-1 text-xs text-destructive">
                    <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" /> {errors.email}
                  </p>
                )}
              </div>
              <div className="text-sm">
                <label htmlFor="contact-phone" className="font-medium text-navy">Phone <span className="text-muted-foreground">(optional)</span></label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  maxLength={20}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "contact-phone-error" : undefined}
                  className={fieldClass(!!errors.phone)}
                />
                {errors.phone && (
                  <p id="contact-phone-error" className="mt-1.5 flex items-center gap-1 text-xs text-destructive">
                    <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" /> {errors.phone}
                  </p>
                )}
              </div>
              <div className="text-sm">
                <label htmlFor="contact-type" className="font-medium text-navy">Inquiry type</label>
                <select
                  id="contact-type"
                  name="inquiryType"
                  defaultValue="General inquiry"
                  className={fieldClass(false)}
                >
                  <option>General inquiry</option>
                  <option>Distributor / partnership</option>
                  <option>Third-party manufacturing</option>
                  <option>Career opportunity</option>
                </select>
              </div>
            </div>
            <div className="mt-4 text-sm">
              <label htmlFor="contact-message" className="font-medium text-navy">Message</label>
              <textarea
                id="contact-message"
                name="message"
                required
                maxLength={1000}
                rows={5}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "contact-message-error" : undefined}
                className={fieldClass(!!errors.message)}
              />
              {errors.message && (
                <p id="contact-message-error" className="mt-1.5 flex items-center gap-1 text-xs text-destructive">
                  <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" /> {errors.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="btn-premium mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-card"
            >
              <Send className="h-4 w-4" aria-hidden="true" /> Send inquiry
            </button>
            {sent && (
              <p role="status" className="mt-4 rounded-md bg-secondary px-4 py-3 text-sm text-navy">
                Thank you. Your inquiry has been recorded — our team will be in touch shortly.
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

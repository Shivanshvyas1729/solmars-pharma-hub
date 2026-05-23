import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { z } from "zod";
import { ArrowRight, CheckCircle2, Download, AlertCircle, Send } from "lucide-react";
import { Reveal } from "@/hooks/use-reveal";
import { resolveAsset } from "@/lib/content/assets";
import { resolveIcon } from "@/lib/content/icons";

type Action = {
  label: string;
  to: string;
  variant?: "primary" | "ghost" | "light" | "ghost-light" | "outline";
};

function ActionButton({ action }: { action: Action }) {
  const base = "btn-premium inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold";
  const styles: Record<NonNullable<Action["variant"]>, string> = {
    primary: "bg-primary text-primary-foreground shadow-card hover:opacity-90",
    ghost: "border border-white/25 bg-white/5 text-white hover:bg-white/10",
    light: "bg-white text-navy hover:bg-white/90 shadow-elevated",
    "ghost-light": "border border-white/25 text-white hover:bg-white/10",
    outline: "border border-border bg-card text-navy hover:bg-secondary",
  };
  return (
    <Link to={action.to} className={`${base} ${styles[action.variant ?? "primary"]}`}>
      {action.label}
      {action.variant === "primary" && <ArrowRight className="h-4 w-4" />}
    </Link>
  );
}

/* ============== PAGE HERO (interior pages) ============== */
export function DynamicPageHero(props: Record<string, any>) {
  return (
    <section className="border-b border-border bg-gradient-soft">
      <div className="container-pharma py-20 md:py-24">
        {props.eyebrow && (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">{props.eyebrow}</p>
        )}
        {props.title && (
          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl">{props.title}</h1>
        )}
        {props.description && (
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{props.description}</p>
        )}
      </div>
    </section>
  );
}

/* ============== HERO (full-bleed) ============== */
export function DynamicHero(props: Record<string, any>) {
  const img = resolveAsset(props.image);
  return (
    <section className="relative overflow-hidden bg-gradient-hero text-white">
      <div className="container-pharma grid items-center gap-12 py-20 md:py-28 lg:grid-cols-2">
        <div className="reveal">
          {props.eyebrow && (
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]">
              <span className="h-1.5 w-1.5 rounded-full bg-white" /> {props.eyebrow}
            </p>
          )}
          {props.title && (
            <h1 className="text-4xl font-bold leading-[1.05] text-white md:text-6xl">{props.title}</h1>
          )}
          {props.description && (
            <p className="mt-6 max-w-xl text-lg text-white/80">{props.description}</p>
          )}
          {Array.isArray(props.actions) && props.actions.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-3">
              {(props.actions as Action[]).map((a) => {
                const variant = a.variant === "primary" ? "light" : a.variant ?? "ghost";
                return <ActionButton key={a.label} action={{ ...a, variant }} />;
              })}
            </div>
          )}
        </div>
        {img && (
          <div className="relative">
            <div className="overflow-hidden rounded-xl shadow-elevated ring-1 ring-white/10">
              <img src={img} alt={props.imageAlt ?? ""} width={1920} height={1080} fetchPriority="high" decoding="async" className="h-auto w-full" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/* ============== STATS ============== */
export function DynamicStats(props: Record<string, any>) {
  const items = (props.items ?? []) as Array<{ value: string; label: string }>;
  return (
    <section className="border-b border-border bg-background">
      <div
        className="container-pharma grid gap-8 py-14"
        style={{ gridTemplateColumns: `repeat(auto-fit, minmax(160px, 1fr))` }}
      >
        {items.map((s, i) => (
          <Reveal key={`${s.label}-${i}`} delay={i * 80} className="text-center md:text-left">
            <div className="font-display text-3xl font-bold text-navy md:text-4xl">{s.value}</div>
            <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ============== SPLIT (image + content, bullets/features/paragraphs) ============== */
export function DynamicSplit(props: Record<string, any>) {
  const img = resolveAsset(props.image);
  const imageRight = (props.imagePosition ?? "right") === "right";
  const bullets = (props.bullets ?? []) as string[];
  const features = (props.features ?? []) as Array<{ title: string; description: string }>;
  const paragraphs = (props.paragraphs ?? []) as string[];

  const content = (
    <div>
      {props.eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">{props.eyebrow}</p>
      )}
      {props.title && <h2 className="text-3xl font-bold md:text-4xl">{props.title}</h2>}
      {props.description && <p className="mt-5 text-muted-foreground">{props.description}</p>}
      {paragraphs.map((p, i) => (
        <p key={i} className="mt-4 text-muted-foreground">{p}</p>
      ))}
      {bullets.length > 0 && (
        <ul className="mt-6 space-y-3">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-3 text-sm text-foreground/85">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" /> {b}
            </li>
          ))}
        </ul>
      )}
      {features.length > 0 && (
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {features.map((f) => (
            <div key={f.title}>
              <h3 className="text-base font-semibold text-navy">{f.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{f.description}</p>
            </div>
          ))}
        </div>
      )}
      {props.link?.to && (
        <Link to={props.link.to} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
          {props.link.label} <ArrowRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  );

  const image = img ? (
    <div className="overflow-hidden rounded-xl shadow-card">
      <img src={img} alt={props.imageAlt ?? ""} loading="lazy" width={1600} height={1000} className="h-auto w-full" />
    </div>
  ) : null;

  return (
    <section className="container-pharma py-20">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        {imageRight ? (<>{content}{image}</>) : (<>{image}{content}</>)}
      </div>
    </section>
  );
}

/* ============== CARD GRID ============== */
export function DynamicCardGrid(props: Record<string, any>) {
  const items = (props.items ?? []) as Array<{ icon?: string; title: string; description?: string }>;
  const bg = props.background === "muted" ? "bg-secondary/50" : "bg-background";
  const cols = Number(props.columns) || 3;
  const colClass =
    cols === 2 ? "sm:grid-cols-2"
    : cols === 4 ? "sm:grid-cols-2 lg:grid-cols-4"
    : "sm:grid-cols-2 lg:grid-cols-3";
  const centered = props.centered !== false;

  return (
    <section className={`${bg} py-20`}>
      <div className="container-pharma">
        {(props.title || props.eyebrow || props.description) && (
          <div className={centered ? "mx-auto max-w-2xl text-center" : ""}>
            {props.eyebrow && (
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">{props.eyebrow}</p>
            )}
            {props.title && <h2 className="text-3xl font-bold md:text-4xl">{props.title}</h2>}
            {props.description && <p className="mt-4 text-muted-foreground">{props.description}</p>}
          </div>
        )}
        <div className={`mt-12 grid gap-5 ${colClass}`}>
          {items.map((c, i) => {
            const Icon = resolveIcon(c.icon);
            return (
              <Reveal key={`${c.title}-${i}`} delay={i * 60}>
                <article className="card-lift group h-full rounded-xl border border-border bg-card p-7 shadow-card">
                  {Icon && (
                    <span className="grid h-11 w-11 place-items-center rounded-lg bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-5 w-5" />
                    </span>
                  )}
                  <h3 className="mt-4 text-lg font-semibold">{c.title}</h3>
                  {c.description && <p className="mt-2 text-sm text-muted-foreground">{c.description}</p>}
                </article>
              </Reveal>
            );
          })}
        </div>
        {props.cta?.to && (
          <div className="mt-10 text-center">
            <ActionButton action={props.cta as Action} />
          </div>
        )}
      </div>
    </section>
  );
}

/* ============== COLUMN TEXT (no icons, plain text columns) ============== */
export function DynamicColumns(props: Record<string, any>) {
  const items = (props.items ?? []) as Array<{ title: string; description: string }>;
  const cols = Number(props.columns) || 3;
  const colClass = cols === 2 ? "lg:grid-cols-2" : cols === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3";
  return (
    <section className="container-pharma py-20">
      <div className={`grid gap-10 ${colClass}`}>
        {items.map((b) => (
          <div key={b.title}>
            <h3 className="text-xl font-semibold text-navy">{b.title}</h3>
            <p className="mt-3 text-muted-foreground">{b.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============== BANNER ============== */
export function DynamicBanner(props: Record<string, any>) {
  const isNavy = props.background === "navy";
  const wrap = isNavy ? "bg-navy text-white" : "bg-secondary";
  const eyebrowClass = isNavy ? "text-white/70" : "text-primary";
  const titleClass = isNavy ? "text-white" : "text-navy";
  const descClass = isNavy ? "text-white/75" : "text-muted-foreground";

  return (
    <section className={`${wrap} py-20`}>
      <div className="container-pharma grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-end">
        <div>
          {props.eyebrow && (
            <p className={`mb-3 text-xs font-semibold uppercase tracking-[0.22em] ${eyebrowClass}`}>{props.eyebrow}</p>
          )}
          {props.title && <h2 className={`text-3xl font-bold md:text-4xl ${titleClass}`}>{props.title}</h2>}
          {props.description && <p className={`mt-5 max-w-2xl ${descClass}`}>{props.description}</p>}
        </div>
        {Array.isArray(props.actions) && (
          <div className="flex flex-wrap gap-3 lg:justify-end">
            {(props.actions as Action[]).map((a) => (
              <ActionButton key={a.label} action={a} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* ============== CTA CARD (soft gradient box, often near page end) ============== */
export function DynamicCtaCard(props: Record<string, any>) {
  return (
    <section className="container-pharma pb-20">
      <div className="rounded-2xl border border-border bg-gradient-soft p-10 shadow-card md:p-14">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            {props.title && <h2 className="text-2xl font-bold md:text-3xl">{props.title}</h2>}
            {props.description && <p className="mt-3 text-muted-foreground">{props.description}</p>}
          </div>
          {Array.isArray(props.actions) && (
            <div className="flex flex-wrap gap-3 lg:justify-end">
              {(props.actions as Action[]).map((a) => (
                <ActionButton key={a.label} action={a} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ============== CENTERED CTA CARD (services/careers style) ============== */
export function DynamicCenteredCta(props: Record<string, any>) {
  const bg = props.background === "muted" ? "bg-secondary/50" : "bg-background";
  return (
    <section className={`${bg} py-20`}>
      <div className="container-pharma">
        {(props.title || props.eyebrow || props.description) && (
          <div className="mx-auto max-w-2xl text-center">
            {props.eyebrow && (
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">{props.eyebrow}</p>
            )}
            {props.title && <h2 className="text-3xl font-bold md:text-4xl">{props.title}</h2>}
            {props.description && <p className="mt-4 text-muted-foreground">{props.description}</p>}
          </div>
        )}
        {(props.cardTitle || props.cardDescription) && (
          <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-border bg-card p-8 text-center shadow-card">
            {props.cardTitle && <h3 className="text-xl font-semibold">{props.cardTitle}</h3>}
            {props.cardDescription && <p className="mt-2 text-sm text-muted-foreground">{props.cardDescription}</p>}
            {props.cta?.to && (
              <div className="mt-6 inline-flex">
                <ActionButton action={props.cta as Action} />
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

/* ============== ACCENT PANEL (dark inline panel) ============== */
export function DynamicAccentPanel(props: Record<string, any>) {
  return (
    <section className="container-pharma py-20">
      <div className="rounded-2xl bg-navy p-10 text-white shadow-elevated md:p-14">
        {props.eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">{props.eyebrow}</p>
        )}
        {props.title && <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl">{props.title}</h2>}
        {props.description && <p className="mt-4 max-w-2xl text-white/80">{props.description}</p>}
      </div>
    </section>
  );
}

/* ============== DOCUMENT GRID (downloads page) ============== */
export function DynamicDocumentGrid(props: Record<string, any>) {
  const items = (props.items ?? []) as Array<{ title: string; description: string; size?: string; href?: string; icon?: string }>;
  return (
    <section className="container-pharma py-20">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((d, i) => {
          const Icon = resolveIcon(d.icon);
          return (
            <article key={`${d.title}-${i}`} className="flex flex-col rounded-xl border border-border bg-card p-7 shadow-card card-lift">
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-primary/10 text-primary">
                {Icon ? <Icon className="h-5 w-5" /> : <Download className="h-5 w-5" />}
              </span>
              <h2 className="mt-5 text-lg font-semibold">{d.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{d.description}</p>
              {d.size && (
                <p className="mt-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">{d.size}</p>
              )}
              {d.href ? (
                <a
                  href={d.href}
                  download
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-4 py-2.5 text-sm font-semibold text-navy hover:bg-secondary"
                >
                  <Download className="h-4 w-4" /> Download
                </a>
              ) : (
                <button
                  type="button"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-4 py-2.5 text-sm font-semibold text-navy hover:bg-secondary"
                >
                  <Download className="h-4 w-4" /> Download
                </button>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}

/* ============== CONTACT (info cards + form) ============== */
const inquirySchema = z.object({
  name: z.string().trim().min(2, { message: "Please enter your full name." }).max(100),
  email: z.string().trim().email({ message: "Please enter a valid email address." }).max(255),
  phone: z.string().trim().max(20).regex(/^[0-9+\-\s().]*$/, { message: "Phone contains invalid characters." }).optional().or(z.literal("")),
  inquiryType: z.string(),
  message: z.string().trim().min(10, { message: "Please share at least 10 characters so we can help." }).max(1000),
});
type FieldErrors = Partial<Record<keyof z.infer<typeof inquirySchema>, string>>;

export function DynamicContact(props: Record<string, any>) {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});

  const infoBlocks = (props.info ?? []) as Array<{ icon?: string; title: string; lines: Array<string | { text: string; href?: string }> }>;
  const inquiryTypes = (props.inquiryTypes ?? [
    "General inquiry", "Distributor / partnership", "Third-party manufacturing", "Career opportunity",
  ]) as string[];
  const showMap = props.showMap !== false;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = inquirySchema.safeParse({
      name: fd.get("name"), email: fd.get("email"),
      phone: fd.get("phone") ?? "", inquiryType: fd.get("inquiryType"), message: fd.get("message"),
    });
    if (!parsed.success) {
      const fe: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof FieldErrors;
        if (!fe[key]) fe[key] = issue.message;
      }
      setErrors(fe); setSent(false); return;
    }
    setErrors({}); setSent(true);
  };

  const fieldClass = (hasError: boolean) =>
    ["mt-1.5 w-full rounded-md border bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring",
     hasError ? "border-destructive" : "border-input"].join(" ");

  return (
    <section className="container-pharma py-20">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
        <div className="space-y-6">
          {infoBlocks.map((b, i) => {
            const Icon = resolveIcon(b.icon);
            return (
              <div key={i} className="rounded-xl border border-border bg-card p-6 shadow-card">
                <div className="flex items-start gap-3">
                  {Icon && <Icon className="mt-0.5 h-5 w-5 text-primary" aria-hidden="true" />}
                  <div>
                    <h2 className="font-semibold text-navy">{b.title}</h2>
                    {b.lines?.map((ln, li) => {
                      const obj = typeof ln === "string" ? { text: ln } : ln;
                      return (
                        <p key={li} className="mt-1 text-sm text-muted-foreground">
                          {obj.href ? <a href={obj.href} className="hover:text-primary">{obj.text}</a> : obj.text}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
          {showMap && (
            <div className="overflow-hidden rounded-xl border border-border shadow-card">
              <div className="grid aspect-video place-items-center bg-secondary text-sm text-muted-foreground" aria-label="Map placeholder">
                {props.mapPlaceholder ?? "Google Maps placeholder"}
              </div>
            </div>
          )}
        </div>

        <form onSubmit={onSubmit} noValidate aria-labelledby="contact-form-title" className="rounded-2xl border border-border bg-card p-8 shadow-card">
          <h2 id="contact-form-title" className="text-2xl font-bold">{props.formTitle ?? "Send us an inquiry"}</h2>
          {props.formDescription && <p className="mt-2 text-sm text-muted-foreground">{props.formDescription}</p>}
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="text-sm">
              <label htmlFor="contact-name" className="font-medium text-navy">Full name</label>
              <input id="contact-name" name="name" type="text" required autoComplete="name" maxLength={100}
                aria-invalid={!!errors.name} aria-describedby={errors.name ? "contact-name-error" : undefined}
                className={fieldClass(!!errors.name)} />
              {errors.name && <p id="contact-name-error" className="mt-1.5 flex items-center gap-1 text-xs text-destructive"><AlertCircle className="h-3.5 w-3.5" aria-hidden="true" /> {errors.name}</p>}
            </div>
            <div className="text-sm">
              <label htmlFor="contact-email" className="font-medium text-navy">Email</label>
              <input id="contact-email" name="email" type="email" required autoComplete="email" maxLength={255}
                aria-invalid={!!errors.email} aria-describedby={errors.email ? "contact-email-error" : undefined}
                className={fieldClass(!!errors.email)} />
              {errors.email && <p id="contact-email-error" className="mt-1.5 flex items-center gap-1 text-xs text-destructive"><AlertCircle className="h-3.5 w-3.5" aria-hidden="true" /> {errors.email}</p>}
            </div>
            <div className="text-sm">
              <label htmlFor="contact-phone" className="font-medium text-navy">Phone <span className="text-muted-foreground">(optional)</span></label>
              <input id="contact-phone" name="phone" type="tel" autoComplete="tel" maxLength={20}
                aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "contact-phone-error" : undefined}
                className={fieldClass(!!errors.phone)} />
              {errors.phone && <p id="contact-phone-error" className="mt-1.5 flex items-center gap-1 text-xs text-destructive"><AlertCircle className="h-3.5 w-3.5" aria-hidden="true" /> {errors.phone}</p>}
            </div>
            <div className="text-sm">
              <label htmlFor="contact-type" className="font-medium text-navy">Inquiry type</label>
              <select id="contact-type" name="inquiryType" defaultValue={inquiryTypes[0]} className={fieldClass(false)}>
                {inquiryTypes.map((t) => <option key={t}>{t}</option>)}
              </select>
            </div>
          </div>
          <div className="mt-4 text-sm">
            <label htmlFor="contact-message" className="font-medium text-navy">Message</label>
            <textarea id="contact-message" name="message" required maxLength={1000} rows={5}
              aria-invalid={!!errors.message} aria-describedby={errors.message ? "contact-message-error" : undefined}
              className={fieldClass(!!errors.message)} />
            {errors.message && <p id="contact-message-error" className="mt-1.5 flex items-center gap-1 text-xs text-destructive"><AlertCircle className="h-3.5 w-3.5" aria-hidden="true" /> {errors.message}</p>}
          </div>
          <button type="submit" className="btn-premium mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-card">
            <Send className="h-4 w-4" aria-hidden="true" /> {props.submitLabel ?? "Send inquiry"}
          </button>
          {sent && (
            <p role="status" className="mt-4 rounded-md bg-secondary px-4 py-3 text-sm text-navy">
              {props.successMessage ?? "Thank you. Your inquiry has been recorded — our team will be in touch shortly."}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

/* ============== TEXT / IMAGE basic blocks ============== */
export function DynamicText(props: Record<string, any>) {
  return (
    <section className="container-pharma py-12">
      {props.title && <h2 className="text-2xl font-bold md:text-3xl">{props.title}</h2>}
      {props.body && <p className="mt-4 max-w-3xl text-muted-foreground">{props.body}</p>}
    </section>
  );
}

export function DynamicImage(props: Record<string, any>) {
  const src = resolveAsset(props.src);
  if (!src) return null;
  return (
    <section className="container-pharma py-12">
      <div className="overflow-hidden rounded-xl shadow-card">
        <img src={src} alt={props.alt ?? ""} loading="lazy" className="h-auto w-full" />
      </div>
    </section>
  );
}

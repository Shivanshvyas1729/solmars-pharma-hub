import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/hooks/use-reveal";
import { resolveAsset } from "@/lib/content/assets";
import { resolveIcon } from "@/lib/content/icons";

type Action = {
  label: string;
  to: string;
  variant?: "primary" | "ghost" | "light" | "ghost-light";
};

function ActionButton({ action }: { action: Action }) {
  const base = "btn-premium inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold";
  const styles: Record<NonNullable<Action["variant"]>, string> = {
    primary: "bg-primary text-primary-foreground shadow-card",
    ghost: "border border-white/25 bg-white/5 text-white hover:bg-white/10",
    light: "bg-white text-navy hover:bg-white/90 shadow-elevated",
    "ghost-light": "border border-white/25 text-white hover:bg-white/10",
  };
  return (
    <Link to={action.to} className={`${base} ${styles[action.variant ?? "primary"]}`}>
      {action.label}
      {action.variant === "primary" && <ArrowRight className="h-4 w-4" />}
    </Link>
  );
}

/* ============== HERO ============== */
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
              <img
                src={img}
                alt={props.imageAlt ?? ""}
                width={1920}
                height={1080}
                fetchPriority="high"
                decoding="async"
                className="h-auto w-full"
              />
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

/* ============== SPLIT (image + content, optional bullets/features) ============== */
export function DynamicSplit(props: Record<string, any>) {
  const img = resolveAsset(props.image);
  const imageRight = (props.imagePosition ?? "right") === "right";
  const bullets = (props.bullets ?? []) as string[];
  const features = (props.features ?? []) as Array<{ title: string; description: string }>;

  const content = (
    <div>
      {props.eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">{props.eyebrow}</p>
      )}
      {props.title && <h2 className="text-3xl font-bold md:text-4xl">{props.title}</h2>}
      {props.description && <p className="mt-5 text-muted-foreground">{props.description}</p>}
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
        <div className={`mt-12 grid gap-5 ${colClass}`}>
          {items.map((c, i) => {
            const Icon = resolveIcon(c.icon);
            return (
              <Reveal key={`${c.title}-${i}`} delay={i * 60}>
                <div className="card-lift group h-full rounded-xl border border-border bg-card p-6 shadow-card">
                  {Icon && (
                    <span className="grid h-11 w-11 place-items-center rounded-lg bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-5 w-5" />
                    </span>
                  )}
                  <h3 className="mt-4 text-lg font-semibold">{c.title}</h3>
                  {c.description && <p className="mt-1.5 text-sm text-muted-foreground">{c.description}</p>}
                </div>
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

/* ============== TEXT ============== */
export function DynamicText(props: Record<string, any>) {
  return (
    <section className="container-pharma py-12">
      {props.title && <h2 className="text-2xl font-bold md:text-3xl">{props.title}</h2>}
      {props.body && <p className="mt-4 max-w-3xl text-muted-foreground">{props.body}</p>}
    </section>
  );
}

/* ============== IMAGE ============== */
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

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="border-b border-border bg-gradient-soft">
      <div className="container-pharma py-20 md:py-24">
        {eyebrow && (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">{eyebrow}</p>
        )}
        <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl">{title}</h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{description}</p>
        )}
      </div>
    </section>
  );
}

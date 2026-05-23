import type { ComponentType } from "react";
import {
  DynamicHero,
  DynamicStats,
  DynamicSplit,
  DynamicCardGrid,
  DynamicBanner,
  DynamicText,
  DynamicImage,
} from "@/components/dynamic/sections";

export const componentMap: Record<string, ComponentType<Record<string, unknown>>> = {
  hero: DynamicHero,
  stats: DynamicStats,
  split: DynamicSplit,
  cardGrid: DynamicCardGrid,
  banner: DynamicBanner,
  text: DynamicText,
  image: DynamicImage,
};

export function DynamicSection({
  section,
  index,
}: {
  section: Record<string, unknown> & { type: string };
  index: number;
}) {
  const Comp = componentMap[section.type];
  if (!Comp) {
    if (import.meta.env.DEV) {
      console.warn(`[content] Unknown section type "${section.type}". Skipping.`);
      return (
        <div className="container-pharma py-6">
          <div className="rounded-md border border-dashed border-destructive/40 bg-destructive/5 p-4 text-sm text-destructive">
            Unknown section type: <code className="font-mono">{section.type}</code>
          </div>
        </div>
      );
    }
    return null;
  }
  return <Comp key={index} {...(section as Record<string, unknown>)} />;
}

export function DynamicPage({
  sections,
}: {
  sections?: Array<Record<string, unknown> & { type: string }>;
}) {
  if (!sections || sections.length === 0) return null;
  return (
    <>
      {sections.map((s, i) => (
        <DynamicSection key={`${s.type}-${i}`} section={s} index={i} />
      ))}
    </>
  );
}

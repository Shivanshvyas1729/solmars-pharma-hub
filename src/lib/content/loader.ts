import yaml from "js-yaml";
import homeYaml from "@/content/home.yaml?raw";

const sources: Record<string, string> = {
  home: homeYaml,
};

export interface PageMeta {
  title?: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  canonical?: string;
  preloadImage?: string;
}

export interface PageContent {
  meta?: PageMeta;
  sections?: Array<Record<string, unknown> & { type: string }>;
}

const cache = new Map<string, PageContent>();

export function loadPage(name: string): PageContent {
  if (cache.has(name)) return cache.get(name)!;
  const raw = sources[name];
  if (!raw) {
    console.warn(`[content] No YAML found for "${name}"`);
    const empty: PageContent = { sections: [] };
    cache.set(name, empty);
    return empty;
  }
  try {
    const parsed = (yaml.load(raw) ?? {}) as PageContent;
    if (!parsed.sections) parsed.sections = [];
    cache.set(name, parsed);
    return parsed;
  } catch (err) {
    console.error(`[content] Failed to parse YAML "${name}":`, err);
    return { sections: [] };
  }
}

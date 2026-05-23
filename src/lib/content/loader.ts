import yaml from "js-yaml";
import homeYaml from "@/content/home.yaml?raw";
import aboutYaml from "@/content/about.yaml?raw";
import servicesYaml from "@/content/services.yaml?raw";
import qualityYaml from "@/content/quality.yaml?raw";
import careersYaml from "@/content/careers.yaml?raw";
import contactYaml from "@/content/contact.yaml?raw";
import downloadsYaml from "@/content/downloads.yaml?raw";

const sources: Record<string, string> = {
  home: homeYaml,
  about: aboutYaml,
  services: servicesYaml,
  quality: qualityYaml,
  careers: careersYaml,
  contact: contactYaml,
  downloads: downloadsYaml,
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

/** Build TanStack head() meta + links from page meta. */
export function buildHead(name: string) {
  const { meta } = loadPage(name);
  const m = meta ?? {};
  return {
    meta: [
      m.title && { title: m.title },
      m.description && { name: "description", content: m.description },
      m.ogTitle && { property: "og:title", content: m.ogTitle },
      m.ogDescription && { property: "og:description", content: m.ogDescription },
      m.canonical && { property: "og:url", content: m.canonical },
    ].filter(Boolean) as any,
    links: [
      m.canonical && { rel: "canonical", href: m.canonical },
    ].filter(Boolean) as any,
  };
}

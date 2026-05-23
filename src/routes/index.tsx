import { createFileRoute } from "@tanstack/react-router";
import { DynamicPage } from "@/components/dynamic/DynamicPage";
import { loadPage } from "@/lib/content/loader";
import { resolveAsset } from "@/lib/content/assets";

const page = loadPage("home");
const meta = page.meta ?? {};
const preloadHref = resolveAsset(meta.preloadImage);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: ([
      meta.title ? { title: meta.title } : null,
      meta.description ? { name: "description", content: meta.description } : null,
      meta.ogTitle ? { property: "og:title", content: meta.ogTitle } : null,
      meta.ogDescription ? { property: "og:description", content: meta.ogDescription } : null,
      meta.canonical ? { property: "og:url", content: meta.canonical } : null,
    ].filter(Boolean) as Array<Record<string, string>>),
    links: ([
      meta.canonical ? { rel: "canonical", href: meta.canonical } : null,
      preloadHref ? { rel: "preload", as: "image", href: preloadHref, fetchpriority: "high" } : null,
    ].filter(Boolean) as Array<Record<string, string>>),
  }),
  component: Home,
});

function Home() {
  return <DynamicPage sections={page.sections} />;
}

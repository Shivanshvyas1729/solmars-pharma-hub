import { createFileRoute } from "@tanstack/react-router";
import { DynamicPage } from "@/components/dynamic/DynamicPage";
import { loadPage } from "@/lib/content/loader";
import { resolveAsset } from "@/lib/content/assets";

const page = loadPage("home");
const meta = page.meta ?? {};
const preloadHref = resolveAsset(meta.preloadImage);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      meta.title ? { title: meta.title } : undefined,
      meta.description ? { name: "description", content: meta.description } : undefined,
      meta.ogTitle ? { property: "og:title", content: meta.ogTitle } : undefined,
      meta.ogDescription ? { property: "og:description", content: meta.ogDescription } : undefined,
      meta.canonical ? { property: "og:url", content: meta.canonical } : undefined,
    ].filter(Boolean) as Array<Record<string, string>>,
    links: [
      meta.canonical ? { rel: "canonical", href: meta.canonical } : undefined,
      preloadHref ? { rel: "preload", as: "image", href: preloadHref, fetchpriority: "high" } : undefined,
    ].filter(Boolean) as Array<Record<string, string>>,
  }),
  component: Home,
});

function Home() {
  return <DynamicPage sections={page.sections} />;
}

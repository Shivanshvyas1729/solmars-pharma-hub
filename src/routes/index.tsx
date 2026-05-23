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
      meta.title && { title: meta.title },
      meta.description && { name: "description", content: meta.description },
      meta.ogTitle && { property: "og:title", content: meta.ogTitle },
      meta.ogDescription && { property: "og:description", content: meta.ogDescription },
      meta.canonical && { property: "og:url", content: meta.canonical },
    ].filter(Boolean) as any,
    links: [
      meta.canonical && { rel: "canonical", href: meta.canonical },
      preloadHref && { rel: "preload", as: "image", href: preloadHref, fetchpriority: "high" },
    ].filter(Boolean) as any,
  }),
  component: Home,
});

function Home() {
  return <DynamicPage sections={page.sections} />;
}

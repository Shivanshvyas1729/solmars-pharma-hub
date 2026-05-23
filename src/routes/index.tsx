import { createFileRoute } from "@tanstack/react-router";
import { DynamicPage } from "@/components/dynamic/DynamicPage";
import { loadPage, buildHead } from "@/lib/content/loader";
import { resolveAsset } from "@/lib/content/assets";

const page = loadPage("home");
const preloadHref = resolveAsset(page.meta?.preloadImage);

export const Route = createFileRoute("/")({
  head: () => {
    const h = buildHead("home");
    if (preloadHref) {
      h.links.push({ rel: "preload", as: "image", href: preloadHref, fetchpriority: "high" });
    }
    return h;
  },
  component: Home,
});

function Home() {
  return <DynamicPage sections={page.sections} />;
}

import { createFileRoute } from "@tanstack/react-router";
import { DynamicPage } from "@/components/dynamic/DynamicPage";
import { getDownloadsPageData } from "@/data/pages";

export const Route = createFileRoute("/downloads")({
  loader: async () => {
    return await getDownloadsPageData();
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData?.meta?.title || "Brochures, Catalogs & Documents — Solmars Pharma" },
      { name: "description", content: loaderData?.meta?.description || "" },
      { property: "og:title", content: loaderData?.meta?.ogTitle || "" },
      { property: "og:description", content: loaderData?.meta?.ogDescription || "" },
      { property: "og:url", content: "/downloads" },
    ],
    links: [{ rel: "canonical", href: "/downloads" }],
  }),
  component: Downloads,
});

function Downloads() {
  const page = Route.useLoaderData();
  return <DynamicPage sections={page.sections} />;
}

import { createFileRoute } from "@tanstack/react-router";
import { DynamicPage } from "@/components/dynamic/DynamicPage";
import { getQualityPageData } from "@/data/pages";

export const Route = createFileRoute("/quality")({
  loader: async () => {
    return await getQualityPageData();
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData?.meta?.title || "Quality Assurance & Research — Solmars Pharma" },
      { name: "description", content: loaderData?.meta?.description || "" },
      { property: "og:title", content: loaderData?.meta?.ogTitle || "" },
      { property: "og:description", content: loaderData?.meta?.ogDescription || "" },
      { property: "og:url", content: "/quality" },
    ],
    links: [{ rel: "canonical", href: "/quality" }],
  }),
  component: Quality,
});

function Quality() {
  const page = Route.useLoaderData();
  return <DynamicPage sections={page.sections} />;
}

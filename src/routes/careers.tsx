import { createFileRoute } from "@tanstack/react-router";
import { DynamicPage } from "@/components/dynamic/DynamicPage";
import { getCareersPageData } from "@/data/pages";

export const Route = createFileRoute("/careers")({
  loader: async () => {
    return await getCareersPageData();
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData?.meta?.title || "Careers & Opportunities — Solmars Pharma" },
      { name: "description", content: loaderData?.meta?.description || "" },
      { property: "og:title", content: loaderData?.meta?.ogTitle || "" },
      { property: "og:description", content: loaderData?.meta?.ogDescription || "" },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: Careers,
});

function Careers() {
  const page = Route.useLoaderData();
  return <DynamicPage sections={page.sections} />;
}

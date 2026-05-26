import { createFileRoute } from "@tanstack/react-router";
import { DynamicPage } from "@/components/dynamic/DynamicPage";
import { getServicesPageData } from "@/data/pages";

export const Route = createFileRoute("/services")({
  loader: async () => {
    return await getServicesPageData();
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData?.meta?.title || "Contract Manufacturing & Partnerships — Solmars Pharma" },
      { name: "description", content: loaderData?.meta?.description || "" },
      { property: "og:title", content: loaderData?.meta?.ogTitle || "" },
      { property: "og:description", content: loaderData?.meta?.ogDescription || "" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

function Services() {
  const page = Route.useLoaderData();
  return <DynamicPage sections={page.sections} />;
}

import { createFileRoute } from "@tanstack/react-router";
import { DynamicPage } from "@/components/dynamic/DynamicPage";
import { getAboutPageData } from "@/data/pages";

export const Route = createFileRoute("/about")({
  loader: async () => {
    return await getAboutPageData();
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData?.meta?.title || "About Solmars Pharma — Our Story, Mission & Vision" },
      { name: "description", content: loaderData?.meta?.description || "" },
      { property: "og:title", content: loaderData?.meta?.ogTitle || "" },
      { property: "og:description", content: loaderData?.meta?.ogDescription || "" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  const page = Route.useLoaderData();
  return <DynamicPage sections={page.sections} />;
}

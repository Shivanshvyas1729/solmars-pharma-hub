import { createFileRoute } from "@tanstack/react-router";
import { DynamicPage } from "@/components/dynamic/DynamicPage";
import { getContactPageData } from "@/data/pages";

export const Route = createFileRoute("/contact")({
  loader: async () => {
    return await getContactPageData();
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData?.meta?.title || "Contact Us & Business Inquiries — Solmars Pharma" },
      { name: "description", content: loaderData?.meta?.description || "" },
      { property: "og:title", content: loaderData?.meta?.ogTitle || "" },
      { property: "og:description", content: loaderData?.meta?.ogDescription || "" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const page = Route.useLoaderData();
  return <DynamicPage sections={page.sections} />;
}

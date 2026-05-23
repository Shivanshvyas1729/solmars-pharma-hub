import { createFileRoute } from "@tanstack/react-router";
import { DynamicPage } from "@/components/dynamic/DynamicPage";
import { loadPage, buildHead } from "@/lib/content/loader";

const page = loadPage("contact");

export const Route = createFileRoute("/contact")({
  head: () => buildHead("contact"),
  component: () => <DynamicPage sections={page.sections} />,
});

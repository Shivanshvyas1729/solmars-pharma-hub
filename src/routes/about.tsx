import { createFileRoute } from "@tanstack/react-router";
import { DynamicPage } from "@/components/dynamic/DynamicPage";
import { loadPage, buildHead } from "@/lib/content/loader";

const page = loadPage("about");

export const Route = createFileRoute("/about")({
  head: () => buildHead("about"),
  component: () => <DynamicPage sections={page.sections} />,
});

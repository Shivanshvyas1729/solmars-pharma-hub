import { createFileRoute } from "@tanstack/react-router";
import { DynamicPage } from "@/components/dynamic/DynamicPage";
import { loadPage, buildHead } from "@/lib/content/loader";

const page = loadPage("services");

export const Route = createFileRoute("/services")({
  head: () => buildHead("services"),
  component: () => <DynamicPage sections={page.sections} />,
});

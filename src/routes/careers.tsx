import { createFileRoute } from "@tanstack/react-router";
import { DynamicPage } from "@/components/dynamic/DynamicPage";
import { loadPage, buildHead } from "@/lib/content/loader";

const page = loadPage("careers");

export const Route = createFileRoute("/careers")({
  head: () => buildHead("careers"),
  component: () => <DynamicPage sections={page.sections} />,
});

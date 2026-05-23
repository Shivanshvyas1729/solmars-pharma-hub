import { createFileRoute } from "@tanstack/react-router";
import { DynamicPage } from "@/components/dynamic/DynamicPage";
import { loadPage, buildHead } from "@/lib/content/loader";

const page = loadPage("downloads");

export const Route = createFileRoute("/downloads")({
  head: () => buildHead("downloads"),
  component: () => <DynamicPage sections={page.sections} />,
});

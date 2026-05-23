import { createFileRoute } from "@tanstack/react-router";
import { DynamicPage } from "@/components/dynamic/DynamicPage";
import { loadPage, buildHead } from "@/lib/content/loader";

const page = loadPage("quality");

export const Route = createFileRoute("/quality")({
  head: () => buildHead("quality"),
  component: () => <DynamicPage sections={page.sections} />,
});

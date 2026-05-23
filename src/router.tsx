import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { createBrowserHistory, createHashHistory } from "@tanstack/history";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();
  const isGitHubPages = import.meta.env.VITE_GITHUB_PAGES === "true";
  const history = isGitHubPages ? createHashHistory() : createBrowserHistory();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    history,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  if (typeof window !== "undefined") {
    router.subscribe("onRendered", ({ fromLocation, toLocation }) => {
      if (
        !fromLocation ||
        fromLocation.pathname !== toLocation.pathname ||
        fromLocation.search !== toLocation.search
      ) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  }

  return router;
};

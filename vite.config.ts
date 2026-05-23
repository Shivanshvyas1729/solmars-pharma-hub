import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { cloudflare } from "@cloudflare/vite-plugin";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

const isGitHubPages = process.env.VITE_GITHUB_PAGES === "true";
const githubRepoName = "solmars-pharma-hub";
const base = isGitHubPages ? `/${githubRepoName}/` : "/";

export default defineConfig({
  base,
  build: {
    rollupOptions: {
      external: ["yaml", "fs-extra"],
    },
  },
  plugins: [
    tanstackStart({
      server: { entry: "server" },
    }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
    cloudflare(),
  ],
});

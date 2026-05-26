import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

const isGitHubPages = process.env.VITE_GITHUB_PAGES === "true";
const githubRepoName = "solmars-pharma-hub";
const base = isGitHubPages ? `/${githubRepoName}/` : "/";

export default defineConfig({
  build: {
    rollupOptions: {
      external: ["yaml", "fs-extra"],
    },
  },
  plugins: [
    tsconfigPaths(),
    tanstackStart(),
    react(),
    tailwindcss(),
  ],
});

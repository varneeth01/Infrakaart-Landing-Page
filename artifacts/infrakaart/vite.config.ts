import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig(async ({ mode }) => {
  const isDev = mode === "development";

  // ✅ Safe defaults (no crashing build)
  const port = Number(process.env.PORT) || 5173;
  const basePath = process.env.BASE_PATH || "/";

  return {
    base: basePath,

    plugins: [
      react(),
      tailwindcss(),
      runtimeErrorOverlay(),

      ...(isDev && process.env.REPL_ID !== undefined
        ? [
            (await import("@replit/vite-plugin-cartographer")).cartographer({
              root: path.resolve(__dirname, ".."),
            }),
            (await import("@replit/vite-plugin-dev-banner")).devBanner(),
          ]
        : []),
    ],

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@assets": path.resolve(__dirname, "..", "..", "attached_assets"),
      },
      dedupe: ["react", "react-dom"],
    },

    root: path.resolve(__dirname),

    build: {
      outDir: path.resolve(__dirname, "dist"),
      emptyOutDir: true,
    },

    // ✅ ONLY matters in dev
    server: {
      port,
      host: "0.0.0.0",
    },

    preview: {
      port,
      host: "0.0.0.0",
    },
  };
});

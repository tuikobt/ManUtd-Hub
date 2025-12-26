import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    server: {
      proxy: {
        "/api/matches": {
          target: "https://serpapi.com",
          changeOrigin: true,
          rewrite: (path) => {
            const params = new URLSearchParams({
              engine: "google",
              q: "Manchester United F.C.",
              location: "austin, texas, united states",
              api_key: env.VITE_SERPAPI_KEY,
            });
            return `/search.json?${params.toString()}`;
          },
        },
      },
    },
  };
});

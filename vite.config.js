import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: "/recipe-database/",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico"],
      manifest: {
        name: "Recipe Database",
        short_name: "Recipe-DB",
        start_url: "/recipe-database/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#000000",
        icons: [
          // TODO: Add real icon files under public/ and reference them here
          // { src: "icon-192.png", sizes: "192x192", type: "image/png" },
          // { src: "icon-512.png", sizes: "512x512", type: "image/png" },
        ],
      },
      workbox: {
        // Cache app shell aggressively; Firestore handles its own offline cache.
        globPatterns: ["**/*.{js,css,html,svg,png,ico}"],
      },
    }),
  ],
});

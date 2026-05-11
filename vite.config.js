import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            if (id.includes("react-dom") || id.includes("react/"))
              return "react";
            if (id.includes("react-router-dom")) return "router";
            if (id.includes("bootstrap")) return "bootstrap";
            if (id.includes("swiper")) return "swiper";
            if (id.includes("react-icons")) return "icons";
          }
        },
      },
    },
  },
});

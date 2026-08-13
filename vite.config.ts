import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  build: {
    // Compatibilidade com navegadores antigos (iOS 12+, Android 7+, Edge legado)
    target: ["es2015", "safari12", "chrome64", "firefox67", "edge79"],
    cssTarget: ["safari12", "chrome64"],
    modulePreload: { polyfill: true },
  },
  esbuild: {
    legalComments: "none",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

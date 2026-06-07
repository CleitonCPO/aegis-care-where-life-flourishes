import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initScrollReveal } from "./lib/scroll-reveal";

createRoot(document.getElementById("root")!).render(<App />);

// Initialise gentle, premium scroll-reveal once the app mounts.
if (typeof window !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => initScrollReveal());
  } else {
    initScrollReveal();
  }
}


import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Suspense, lazy } from "react";
import PageLoader from "./components/PageLoader";

import { useEffect, useState } from "react";

const Index = lazy(() => import("./pages/Index"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogArticle = lazy(() => import("./pages/BlogArticle"));
const QuemSomos = lazy(() => import("./pages/QuemSomos"));
const Servicos = lazy(() => import("./pages/Servicos"));
const Fundador = lazy(() => import("./pages/Fundador"));
const PoliticaPrivacidade = lazy(() => import("./pages/PoliticaPrivacidade"));
const NotFound = lazy(() => import("./pages/NotFound"));
const WhatsAppButton = lazy(() => import("./components/WhatsAppButton"));

const DeferredWhatsApp = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onReady = () => setShow(true);
    const events = ["scroll", "mousemove", "touchstart", "keydown"];
    events.forEach((e) => window.addEventListener(e, onReady, { once: true, passive: true }));
    const t = window.setTimeout(onReady, 2500);
    return () => {
      events.forEach((e) => window.removeEventListener(e, onReady));
      window.clearTimeout(t);
    };
  }, []);
  if (!show) return null;
  return (
    <Suspense fallback={null}>
      <WhatsAppButton />
    </Suspense>
  );
};

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/quem-somos" element={<QuemSomos />} />
              <Route path="/servicos" element={<Servicos />} />
              <Route path="/fundador" element={<Fundador />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogArticle />} />
              <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <DeferredWhatsApp />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;

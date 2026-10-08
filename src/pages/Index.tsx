import { lazy, Suspense, useEffect, memo } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustStrip from "@/components/TrustStrip";
import LazySection from "@/components/LazySection";

// Lazy load below-the-fold sections
const FounderSection = lazy(() => import("@/components/FounderSection"));
const AboutSection = lazy(() => import("@/components/AboutSection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const WhyUsSection = lazy(() => import("@/components/WhyUsSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));

const SectionFallback = memo(() => (
  <div data-section-loading className="min-h-[200px] flex items-center justify-center">
    <div className="w-6 h-6 border-2 border-secondary border-t-transparent rounded-full animate-spin" />
  </div>
));

SectionFallback.displayName = 'SectionFallback';

const Index = memo(() => {
  const location = useLocation();
  const state = location.state as { scrollTo?: string } | null;
  const targetId = location.hash.slice(1) || state?.scrollTo;
  const forceSections = Boolean(targetId);

  useEffect(() => {
    if (!targetId) return;
    let frame = 0;
    const scrollWhenReady = () => {
      const element = document.getElementById(targetId);
      if (!element || document.querySelector("main [data-section-loading]")) return;
      observer.disconnect();
      frame = requestAnimationFrame(() => {
        const headerHeight = document.querySelector("header")?.getBoundingClientRect().height ?? 80;
        const top = element.getBoundingClientRect().top + window.scrollY - headerHeight - 16;
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: Math.max(0, top), behavior: reducedMotion ? "auto" : "smooth" });
      });
    };
    const observer = new MutationObserver(scrollWhenReady);
    observer.observe(document.body, { childList: true, subtree: true });
    scrollWhenReady();
    return () => { observer.disconnect(); cancelAnimationFrame(frame); };
  }, [targetId, location.key]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <TrustStrip />
        
        <LazySection forceVisible={forceSections} rootMargin="500px" placeholderClassName="min-h-[1000px] md:min-h-[800px]">
          <Suspense fallback={<SectionFallback />}>
            <AboutSection />
          </Suspense>
        </LazySection>
        
        <LazySection forceVisible={forceSections}>
          <Suspense fallback={<SectionFallback />}>
            <WhyUsSection />
          </Suspense>
        </LazySection>

        <LazySection forceVisible={forceSections}>
          <Suspense fallback={<SectionFallback />}>
            <ServicesSection />
          </Suspense>
        </LazySection>

        <LazySection forceVisible={forceSections}>
          <Suspense fallback={<SectionFallback />}>
            <FounderSection />
          </Suspense>
        </LazySection>

        <LazySection forceVisible={forceSections}>
          <Suspense fallback={<SectionFallback />}>
            <TestimonialsSection />
          </Suspense>
        </LazySection>
        
        <LazySection forceVisible={forceSections}>
          <Suspense fallback={<SectionFallback />}>
            <FAQSection />
          </Suspense>
        </LazySection>
        
        <LazySection forceVisible={forceSections}>
          <Suspense fallback={<SectionFallback />}>
            <ContactSection />
          </Suspense>
        </LazySection>
      </main>
      
      <LazySection>
        <Suspense fallback={<SectionFallback />}>
          <Footer />
        </Suspense>
      </LazySection>
    </div>
  );
});

Index.displayName = 'Index';

export default Index;
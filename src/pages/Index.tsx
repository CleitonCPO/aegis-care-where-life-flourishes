import { lazy, Suspense, useEffect, memo } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FounderSection from "@/components/FounderSection";
import AboutSection from "@/components/AboutSection";
import LazySection from "@/components/LazySection";

// Lazy load below-the-fold sections
const MissionSection = lazy(() => import("@/components/MissionSection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const WhyUsSection = lazy(() => import("@/components/WhyUsSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));

const SectionFallback = memo(() => (
  <div className="min-h-[200px] flex items-center justify-center">
    <div className="w-6 h-6 border-2 border-secondary border-t-transparent rounded-full animate-spin" />
  </div>
));

SectionFallback.displayName = 'SectionFallback';

const Index = memo(() => {
  const location = useLocation();

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    if (state?.scrollTo) {
      requestAnimationFrame(() => {
        const element = document.getElementById(state.scrollTo!);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      });
      // Clear the state
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FounderSection />
        <AboutSection />
        
        <LazySection>
          <Suspense fallback={<SectionFallback />}>
            <MissionSection />
          </Suspense>
        </LazySection>
        
        <LazySection>
          <Suspense fallback={<SectionFallback />}>
            <ServicesSection />
          </Suspense>
        </LazySection>
        
        <LazySection>
          <Suspense fallback={<SectionFallback />}>
            <WhyUsSection />
          </Suspense>
        </LazySection>
        
        <LazySection>
          <Suspense fallback={<SectionFallback />}>
            <TestimonialsSection />
          </Suspense>
        </LazySection>
        
        <LazySection>
          <Suspense fallback={<SectionFallback />}>
            <FAQSection />
          </Suspense>
        </LazySection>
        
        <LazySection>
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
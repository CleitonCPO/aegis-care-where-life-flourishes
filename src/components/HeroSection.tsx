import { Button } from "@/components/ui/button";
import { Phone, ArrowDown } from "lucide-react";
import { memo, useEffect, useState } from "react";
import heroImage from "@/assets/hero-elderly-care-optimized.webp";
import heroImageMobile from "@/assets/hero-elderly-care-mobile.webp";

const HeroSection = memo(() => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay - Optimized for LCP */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source media="(max-width: 768px)" srcSet={heroImageMobile} type="image/webp" />
          <source media="(min-width: 769px)" srcSet={heroImage} type="image/webp" />
          <img
            src={heroImage}
            alt="Cuidado acolhedor no lar"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width={1920}
            height={1080}
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/92 via-primary/75 to-primary/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/55 via-transparent to-transparent" />
      </div>

      {/* Content - CSS animations instead of framer-motion for initial load */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-2xl">
          <span 
            className={`inline-block px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full text-primary-foreground text-sm font-medium mb-6 transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            style={{ transitionDelay: '100ms' }}
          >
            Cuidado Domiciliar Especializado
          </span>
          
          <span 
            className={`eyebrow !text-primary-foreground/80 mb-6 inline-block transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            style={{ transitionDelay: '100ms' }}
          >
            Assistência Domiciliar Premium
          </span>
          
          <h1 
            className={`font-display text-4xl md:text-5xl lg:text-[4.25rem] text-primary-foreground font-normal leading-[1.05] mb-8 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '200ms' }}
          >
            Cuidar onde a vida<br />foi construída.
          </h1>

          <div
            className={`h-px w-20 bg-[hsl(var(--gold-bright))] mb-8 transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: '300ms' }}
          />
          
          <p 
            className={`text-base md:text-lg text-primary-foreground/85 mb-10 max-w-xl leading-relaxed transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '400ms' }}
          >
            Acreditamos que envelhecer é um privilégio. Sinal de história vivida, de caminhos percorridos, de vínculos criados e de um legado que merece ser respeitado.
          </p>

          <div 
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '500ms' }}
          >
            <a
              href="https://api.whatsapp.com/send/?phone=5511920067183&text=Ol%C3%A1%20Aegis%20Care%2C%20eu%20gostaria%20de%20um%20or%C3%A7amento%20de%20cuidador%20para%20meu%20familiar.&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hero" size="xl" className="gap-2 w-full sm:w-auto">
                <Phone className="w-5 h-5" />
                Fale Conosco
              </Button>
            </a>
            <a href="#sobre">
              <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                Conheça Nossa História
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#sobre"
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ transitionDelay: '800ms' }}
        aria-label="Ver mais sobre a Aegis Care"
      >
        <div className="flex flex-col items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors animate-bounce">
          <ArrowDown className="w-5 h-5" />
        </div>
      </a>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;
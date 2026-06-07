import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { memo, useEffect, useState } from "react";
import heroImage from "@/assets/hero-aegis-premium.jpg";

const HeroSection = memo(() => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-[hsl(var(--navy-deep))]">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Cuidado domiciliar humanizado para idosos — Aegis Care"
          className={`w-full h-full object-cover transition-[opacity] duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${isLoaded ? "opacity-100 ken-burns" : "opacity-0"}`}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--navy-deep))]/95 via-[hsl(var(--navy-deep))]/70 to-[hsl(var(--navy-deep))]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--navy-deep))]/60 via-transparent to-transparent" />
      </div>

      <div className="container-editorial relative z-10 pt-32 pb-24">
        <div className="max-w-2xl">
          <div
            className={`flex items-center gap-4 mb-10 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
          >
            <span className="h-px w-12 bg-[hsl(var(--gold))]" />
            <span className="text-[hsl(var(--gold))] text-[0.7rem] tracking-[0.32em] uppercase font-medium">
              Assistência Domiciliar Premium
            </span>
          </div>

          <h1
            className={`font-display text-[2.25rem] md:text-5xl lg:text-[3.75rem] text-white font-normal leading-[1.08] mb-8 transition-all duration-[1100ms] ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: "150ms", letterSpacing: "-0.035em" }}
          >
            O envelhecimento não deve afastar ninguém daquilo que dá sentido à sua vida.
          </h1>

          <p
            className={`text-base md:text-lg text-white/85 mb-12 leading-[1.7] font-light max-w-xl transition-all duration-[1100ms] ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: "320ms" }}
          >
            Cuidado domiciliar pensado para preservar dignidade, autonomia e a continuidade
            de uma história construída ao longo de uma vida inteira.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-[1100ms] ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: "480ms" }}
          >
            <a href="#sobre">
              <Button variant="hero" size="xl" className="w-full sm:w-auto bg-white text-[hsl(var(--navy-deep))] hover:bg-[hsl(var(--turquoise))] hover:text-[hsl(var(--navy-deep))]">
                Conheça a Aegis Care
              </Button>
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=5511920067183&text=Ol%C3%A1%20Aegis%20Care%2C%20eu%20gostaria%20de%20conhecer%20a%20assist%C3%AAncia%20domiciliar%20para%20meu%20familiar.&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                Falar com a equipe
              </Button>
            </a>
          </div>
        </div>
      </div>

      <a
        href="#sobre"
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 z-10 transition-opacity duration-1000 ${isLoaded ? "opacity-60" : "opacity-0"}`}
        style={{ transitionDelay: "1000ms" }}
        aria-label="Descer"
      >
        <ArrowDown className="w-4 h-4 text-white animate-bounce" />
      </a>
    </section>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;

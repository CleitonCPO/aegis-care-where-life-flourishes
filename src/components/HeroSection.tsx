import { Button } from "@/components/ui/button";
import { Phone, ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-elderly-care.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Cuidado acolhedor no lar"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full text-primary-foreground text-sm font-medium mb-6 animate-fade-in">
            Cuidado Domiciliar Especializado
          </span>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-bold leading-tight mb-6 animate-slide-up" style={{ animationDelay: "100ms" }}>
            Cuidar onde a vida foi construída.
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-4 animate-slide-up font-light" style={{ animationDelay: "200ms" }}>
            Um cuidado que acolhe a vida
          </p>
          
          <p className="text-base md:text-lg text-primary-foreground/80 mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: "300ms" }}>
            Na Aegis Care, acreditamos que envelhecer é um privilégio. 
            É sinal de história vivida, de caminhos percorridos, de vínculos criados 
            e de um legado que merece ser respeitado.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "400ms" }}>
            <a
              href="https://wa.me/5511920067183"
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float"
        aria-label="Ver mais sobre a Aegis Care"
      >
        <div className="flex flex-col items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
          <ArrowDown className="w-5 h-5" />
        </div>
      </a>
    </section>
  );
};

export default HeroSection;

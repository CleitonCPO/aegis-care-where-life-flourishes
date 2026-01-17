import { Button } from "@/components/ui/button";
import { Phone, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-elderly-care.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0"
      >
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
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-2xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full text-primary-foreground text-sm font-medium mb-6"
          >
            Cuidado Domiciliar Especializado
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-bold leading-tight mb-6"
          >
            Cuidar onde a vida foi construída.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg md:text-xl text-primary-foreground/90 mb-4 font-light"
          >
            Um cuidado que acolhe a vida
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-base md:text-lg text-primary-foreground/80 mb-8 leading-relaxed"
          >
            Na Aegis Care, acreditamos que envelhecer é um privilégio. 
            É sinal de história vivida, de caminhos percorridos, de vínculos criados 
            e de um legado que merece ser respeitado.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
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
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        href="#sobre"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        aria-label="Ver mais sobre a Aegis Care"
      >
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
        >
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default HeroSection;

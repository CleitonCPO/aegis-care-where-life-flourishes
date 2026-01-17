import { Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { memo } from "react";
import founderImage from "@/assets/cleiton-oliveira.png";

const FounderSection = memo(() => {
  return (
    <section className="py-20 lg:py-28 gradient-soft">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card overflow-hidden">
            <div className="grid md:grid-cols-[auto_1fr] gap-8 items-center">
              <div className="relative mx-auto md:mx-0">
                <div className="w-48 h-56 rounded-2xl overflow-hidden shadow-elevated">
                  <img
                    src={founderImage}
                    alt="Cleiton Oliveira - Fundador da Aegis Care"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                    width={192}
                    height={224}
                    decoding="async"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 w-16 h-16 gradient-cta rounded-xl flex items-center justify-center shadow-soft">
                  <Heart className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
              <div>
                <span className="inline-block px-4 py-1.5 bg-teal-light rounded-full text-secondary text-sm font-semibold mb-4">
                  Fundador
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Cleiton Oliveira
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Enfermeiro e empreendedor, movido pela convicção de que o cuidado 
                  precisa ser humano, elegante e respeitoso. Com experiência clínica, 
                  gestão de pessoas e atuação direta no cuidado domiciliar, Cleiton 
                  construiu a empresa com um olhar sensível para o idoso e estratégico 
                  para as famílias, unindo ciência, empatia e visão de futuro.
                </p>
                <Link 
                  to="/fundador"
                  className="inline-flex items-center gap-2 text-secondary font-semibold hover:text-secondary/80 transition-colors group"
                >
                  Conheça a história do Cleiton
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

FounderSection.displayName = 'FounderSection';

export default FounderSection;
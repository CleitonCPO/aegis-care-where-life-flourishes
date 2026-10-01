import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { memo } from "react";
import founderImageSrc from "@/assets/cleiton-oliveira-consultorio.jpg";

const founderImage = founderImageSrc;

const FounderSection = memo(() => {
  return (
    <section className="py-28 md:py-40 bg-[hsl(var(--cream))]">
      <div className="container-editorial">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-card">
                <img
                  src={founderImage}
                  alt="Cleiton Oliveira — fundador da Aegis Care"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                  width={480}
                  height={600}
                  decoding="async"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 px-5 py-2 bg-[hsl(var(--navy-deep))] text-[hsl(var(--turquoise))] text-[0.65rem] tracking-[0.32em] uppercase">
                Fundador
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <span className="eyebrow-gold eyebrow mb-6 block">A pessoa por trás da Aegis</span>
            <h2 className="font-display text-3xl md:text-[2.5rem] lg:text-[3rem] leading-[1.12] text-foreground mb-8">
              Quem conduz o cuidado
            </h2>
            <p className="text-base text-[hsl(var(--teal-deep))] uppercase tracking-[0.25em] mb-8 font-semibold text-xs">
              Enfermeiro · Gerontólogo · Fundador
            </p>
            <p className="text-muted-foreground leading-[1.85] prose-justified">
              Cleiton Oliveira, enfermeiro e gerontólogo, fundou a Aegis para fazer diferente: cuidado com critério clínico e coração.
            </p>
            <Link
              to="/fundador"
              className="inline-flex items-center gap-3 mt-10 text-[hsl(var(--navy-deep))] font-medium text-xs tracking-[0.25em] uppercase border-b border-[hsl(var(--gold))] pb-1 hover:text-[hsl(var(--teal-deep))] transition-colors group"
            >
              Conheça a história
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
});

FounderSection.displayName = "FounderSection";

export default FounderSection;

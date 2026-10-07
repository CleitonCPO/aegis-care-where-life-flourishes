import { memo } from "react";
import aboutImage from "@/assets/about-aegis-premium.jpg";
import aboutMobile from "@/assets/about-aegis-premium-mobile.webp";
import aboutOptimized from "@/assets/about-aegis-premium-optimized.webp";
import { Link } from "react-router-dom";

const AboutSection = memo(() => {
  const isVisible = true;

  return (
    <section id="sobre" className="py-16 md:py-24 bg-background">
      <div className="container-editorial">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-20 items-center max-w-6xl mx-auto">
          <div className="order-2 md:order-1 transition-all duration-[1100ms]">
            <div className="relative overflow-hidden rounded-sm shadow-card">
              <picture>
              <source type="image/webp" srcSet={`${aboutMobile} 768w, ${aboutOptimized} 1080w`} sizes="(min-width: 768px) 45vw, 100vw" />
              <img
                src={aboutImage}
                alt="Cuidado domiciliar humanizado em ambiente residencial"
                className="w-full aspect-[4/5] object-cover"
                loading="lazy"
                decoding="async"
                width={1400}
                height={1600}
              />
              </picture>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <span className="h-px w-10 bg-[hsl(var(--gold))]" />
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Cuidado dentro do lar
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2">
          <span className={`eyebrow mb-5 block transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}>
            A Aegis Care
          </span>
          <h2
            className={`font-display text-3xl md:text-[2.5rem] lg:text-[2.75rem] leading-[1.15] text-foreground mb-6 transition-all duration-[900ms] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "120ms" }}
          >
            Uma forma de cuidar pensada para preservar tudo o que construiu uma vida inteira.
          </h2>
          <p
            className={`text-lg text-muted-foreground leading-[1.7] transition-all duration-[900ms] prose-justified ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "240ms" }}
          >
            A Aegis Care é assistência domiciliar humana. Cuidamos de idosos e pessoas com dependência
            no próprio lar com transparência, participação da família e valorização real de quem cuida.
          </p>
          <Link to="/quem-somos" className="inline-flex mt-8 border-b border-[hsl(var(--gold))] pb-1 text-foreground font-medium hover:text-[hsl(var(--teal-deep))] transition-colors">Quem somos</Link>
          </div>
        </div>
      </div>
    </section>
  );
});

AboutSection.displayName = "AboutSection";

export default AboutSection;

import { memo, useEffect, useRef, useState } from "react";
import aboutImage from "@/assets/about-aegis-premium.jpg";
import { Link } from "react-router-dom";

const AboutSection = memo(() => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "-80px" }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobre" ref={sectionRef} className="py-28 md:py-40 bg-background">
      <div className="container-editorial">
        <div className="max-w-3xl mb-20 md:mb-28">
          <span className={`eyebrow mb-6 block transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}>
            A Aegis Care
          </span>
          <h2
            className={`font-display text-3xl md:text-[2.75rem] lg:text-5xl leading-[1.1] text-foreground mb-8 transition-all duration-[900ms] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "120ms" }}
          >
            Uma forma de cuidar pensada para preservar tudo o que construiu uma vida inteira.
          </h2>
          <p
            className={`text-lg text-muted-foreground leading-[1.8] transition-all duration-[900ms] prose-justified ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "240ms" }}
          >
            A Aegis Care é assistência domiciliar humana. Cuidamos de idosos e pessoas com dependência
            no próprio lar com transparência, participação da família e valorização real de quem cuida.
          </p>
          <Link to="/quem-somos" className="inline-flex mt-8 border-b border-[hsl(var(--gold))] pb-1 text-foreground font-medium hover:text-[hsl(var(--teal-deep))] transition-colors">Quem somos →</Link>
        </div>

        <div className="max-w-4xl transition-all duration-[1100ms]">
            <div className="relative overflow-hidden rounded-sm shadow-card">
              <img
                src={aboutImage}
                alt="Cuidado domiciliar humanizado em ambiente residencial"
                className="w-full h-[520px] md:h-[640px] object-cover"
                loading="lazy"
                width={1400}
                height={1600}
              />
            </div>
            <div className="mt-6 flex items-center gap-4">
              <span className="h-px w-10 bg-[hsl(var(--gold))]" />
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Cuidado dentro do lar
              </p>
            </div>
        </div>
      </div>
    </section>
  );
});

AboutSection.displayName = "AboutSection";

export default AboutSection;

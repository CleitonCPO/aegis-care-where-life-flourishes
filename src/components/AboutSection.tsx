import { memo, useEffect, useRef, useState } from "react";
import aboutImage from "@/assets/about-aegis-premium.jpg";

const pillars = [
  {
    title: "Dignidade",
    description:
      "Cada decisão de cuidado começa pelo respeito à história, aos hábitos e à individualidade de quem cuidamos.",
  },
  {
    title: "Autonomia",
    description:
      "Preservamos a liberdade do cotidiano. O cuidado existe para sustentar a vida que já é vivida, não para substituí-la.",
  },
  {
    title: "Permanência",
    description:
      "O lar é o lugar onde a identidade se preserva. Levamos até ele a estrutura assistencial que protege e acolhe.",
  },
];

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
            A Aegis Care é uma estrutura privada de assistência domiciliar dedicada a famílias
            que entendem o cuidado como continuidade da história, e não como interrupção dela.
            Atuamos com discrição, coordenação clínica de enfermagem e profissionais selecionados
            para garantir presença humana, segurança e organização dentro do lar.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div
            className={`lg:col-span-6 transition-all duration-[1100ms] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: "360ms" }}
          >
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

          <div className="lg:col-span-6 lg:pt-8">
            <div className="space-y-12">
              {pillars.map((p, i) => (
                <div
                  key={p.title}
                  className={`transition-all duration-[900ms] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                  style={{ transitionDelay: `${480 + i * 140}ms` }}
                >
                  <div className="flex items-baseline gap-6 mb-3">
                    <span className="font-display text-[hsl(var(--teal-deep))] text-2xl tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-2xl md:text-[1.7rem] text-foreground">
                      {p.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-[1.85] pl-12 prose-justified">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

AboutSection.displayName = "AboutSection";

export default AboutSection;

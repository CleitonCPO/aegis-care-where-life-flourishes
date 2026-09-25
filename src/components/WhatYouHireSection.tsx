import { memo } from "react";

const pillars = [
  { title: "Gestão de profissionais", description: "Seleção, compatibilização, escala e substituições." },
  { title: "Gestão do cuidado", description: "Plano individualizado e acompanhamento da rotina." },
  { title: "Supervisão de Enfermagem", description: "Orientação técnica e acompanhamento assistencial." },
  { title: "Gestão operacional", description: "Registros, comunicação e suporte à família." },
  {
    title: "Gestão de riscos",
    description: "Processos, orientação e supervisão para reduzir riscos na prestação do serviço.",
  },
];

const WhatYouHireSection = memo(() => (
  <section id="o-que-voce-contrata" className="py-28 md:py-40 bg-background">
    <div className="container-editorial grid lg:grid-cols-12 gap-16 lg:gap-24">
      <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
        <span className="eyebrow mb-8 block">O que você está contratando</span>
        <h2 className="font-display text-3xl md:text-[2.75rem] text-foreground leading-[1.12] mb-8">
          Mais do que um cuidador.
        </h2>
        <p className="text-lg text-muted-foreground leading-[1.8] text-justify">
          Você está contratando uma estrutura completa de gestão do cuidado, para que a
          sua família volte a ter tempo, tranquilidade e confiança.
        </p>
        <span className="block h-px w-16 bg-[hsl(var(--gold))] mt-10" />
      </div>

      <ol className="lg:col-span-7 border-t border-border">
        {pillars.map((pillar, i) => (
          <li
            key={pillar.title}
            className="grid grid-cols-[3.5rem_1fr] gap-6 py-9 border-b border-border"
          >
            <span className="font-display text-lg text-[hsl(var(--gold))] pt-1">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="font-display text-xl md:text-2xl text-foreground leading-snug mb-2">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground leading-[1.8]">{pillar.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
));

WhatYouHireSection.displayName = "WhatYouHireSection";

export default WhatYouHireSection;

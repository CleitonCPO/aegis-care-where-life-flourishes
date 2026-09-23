import { memo } from "react";
import { Users, ClipboardList, Stethoscope, FileText, ShieldCheck } from "lucide-react";

const pillars = [
  {
    icon: Users,
    title: "Gestão de profissionais",
    description: "Seleção, compatibilização, escala e substituições.",
  },
  {
    icon: ClipboardList,
    title: "Gestão do cuidado",
    description: "Plano individualizado e acompanhamento da rotina.",
  },
  {
    icon: Stethoscope,
    title: "Supervisão de Enfermagem",
    description: "Orientação técnica e acompanhamento assistencial.",
  },
  {
    icon: FileText,
    title: "Gestão operacional",
    description: "Registros, comunicação e suporte à família.",
  },
  {
    icon: ShieldCheck,
    title: "Gestão de riscos",
    description:
      "Processos, orientação e supervisão para reduzir riscos na prestação do serviço.",
  },
];

const WhatYouHireSection = memo(() => (
  <section id="o-que-voce-contrata" className="py-28 md:py-40 bg-muted/40">
    <div className="container-editorial">
      <div className="max-w-3xl">
        <div className="flex items-center gap-4 mb-8">
          <span className="h-px w-12 bg-[hsl(var(--gold))]" />
          <span className="eyebrow">Estrutura de cuidado</span>
        </div>
        <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] text-foreground leading-[1.15] mb-6">
          O que você está contratando?
        </h2>
        <p className="text-base md:text-lg text-muted-foreground leading-[1.8] text-justify">
          Mais do que um cuidador. Você está contratando uma estrutura completa de
          gestão do cuidado.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px mt-16 bg-border">
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="bg-background p-8 md:p-10 flex flex-col gap-5 transition-colors duration-300 hover:bg-card"
          >
            <pillar.icon
              className="w-6 h-6 text-[hsl(var(--teal-deep))]"
              aria-hidden="true"
            />
            <h3 className="font-display text-xl text-foreground leading-snug">
              {pillar.title}
            </h3>
            <p className="text-muted-foreground leading-[1.8] text-justify">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
));

WhatYouHireSection.displayName = "WhatYouHireSection";

export default WhatYouHireSection;

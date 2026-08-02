const specialties = [
  {
    title: "Cuidado Especializado em Alzheimer e Demências",
    text: "Plano de cuidado desenhado para preservação da identidade e autonomia do idoso em cada estágio da doença. Cuidadores treinados em comunicação terapêutica, manejo de agitação, prevenção de quedas e rotina estruturada, com supervisão de enfermagem e registros clínicos diários no prontuário eletrônico.",
    points: [
      "Estimulação cognitiva e rotinas de orientação temporal dentro do lar",
      "Manejo não farmacológico de agitação, perambulação e sundowning",
      "Adequação ambiental para reduzir risco de queda e desorientação",
      "Orientação continuada à família sobre evolução e expectativas",
    ],
  },
  {
    title: "Reabilitação Pós-Operatória e Convalescença",
    text: "Atendimento home care particular especializado para o retorno seguro do hospital para casa. A gestão de enfermagem domiciliar premium organiza medicação, mobilização progressiva, cuidados com curativos e a integração com fisioterapia e equipe médica assistente.",
    points: [
      "Transição hospital para casa com plano assistencial documentado",
      "Controle de dor, sinais vitais e adesão à prescrição médica",
      "Mobilização precoce e prevenção de lesões por pressão",
      "Retaguarda e plantão de enfermagem 24h para intercorrências",
    ],
  },
];

const SpecialtiesSection = () => {
  return (
    <section id="especialidades" className="py-24 md:py-32 bg-[hsl(var(--cream))]">
      <div className="container-editorial">
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="eyebrow mb-5 block">Patologias e especialidades</span>
          <h2 className="font-display text-3xl md:text-[2.5rem] lg:text-[2.75rem] leading-[1.12] text-foreground mb-6">
            Cuidado de idosos de alto padrão em São Paulo para condições que exigem método clínico.
          </h2>
          <p className="text-muted-foreground leading-[1.85] prose-justified">
            Cada quadro clínico exige um protocolo próprio. A Aegis Care estrutura o cuidado
            domiciliar a partir do diagnóstico, do grau de dependência e da rotina da família,
            com supervisão de enfermagem e revisão periódica do plano assistencial.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {specialties.map((item) => (
            <article key={item.title} className="border-t border-border pt-8">
              <h3 className="font-display text-2xl md:text-[1.75rem] leading-[1.2] text-foreground mb-5">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-[1.85] prose-justified mb-7">
                {item.text}
              </p>
              <ul className="space-y-4">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-4 text-muted-foreground leading-[1.8]">
                    <span className="mt-[0.7em] h-px w-5 flex-shrink-0 bg-[hsl(var(--teal-deep))]" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;

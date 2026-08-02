const models = [
  {
    name: "Plantão de 12 horas",
    subtitle: "Diurno ou noturno",
    text: "Indicado quando a família consegue cobrir parte do dia e precisa de presença profissional no período de maior risco, como a noite ou o intervalo comercial. O plantão de 12 horas costuma ser o melhor custo benefício em quadros de dependência parcial.",
  },
  {
    name: "Plantão de 24 horas",
    subtitle: "Cobertura integral",
    text: "Escala contínua com revezamento de profissionais, sem sobreposição de jornada e sem risco trabalhista para a família. Recomendado em dependência total, pós-operatório recente, demência avançada ou risco elevado de queda.",
  },
  {
    name: "Escalas personalizadas",
    subtitle: "Sob medida",
    text: "Períodos de 4, 6 ou 8 horas, folgas do cuidador da família, acompanhamento hospitalar pontual ou reforço em finais de semana. A escala é desenhada a partir da rotina real da casa e revisada conforme a evolução do assistido.",
  },
];

const CareModelsSection = () => {
  return (
    <section id="modelos-de-atendimento" className="py-24 md:py-32 bg-[hsl(var(--cream))]">
      <div className="container-editorial">
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="eyebrow mb-5 block">Modelos de atendimento</span>
          <h2 className="font-display text-3xl md:text-[2.5rem] leading-[1.12] text-foreground mb-6">
            Transparência sobre plantões, escalas e custo benefício.
          </h2>
          <p className="text-muted-foreground leading-[1.85] prose-justified">
            No atendimento home care particular especializado, o valor investido depende de três
            variáveis objetivas: o grau de dependência do assistido, a carga horária contratada e a
            qualificação exigida do profissional. Explicamos cada uma delas antes de qualquer proposta.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-12 mb-16">
          {models.map((model) => (
            <article key={model.name} className="border-t border-border pt-7">
              <span className="text-[0.7rem] tracking-[0.28em] uppercase text-[hsl(var(--teal-deep))] block mb-4">
                {model.subtitle}
              </span>
              <h3 className="font-display text-2xl text-foreground mb-4">{model.name}</h3>
              <p className="text-muted-foreground leading-[1.8] text-[0.95rem] prose-justified">
                {model.text}
              </p>
            </article>
          ))}
        </div>

        <div className="max-w-3xl border-t border-border pt-8">
          <h3 className="font-display text-xl md:text-2xl text-foreground mb-4">
            Como o investimento é calculado
          </h3>
          <p className="text-muted-foreground leading-[1.85] prose-justified">
            A avaliação inicial é conduzida por enfermeiro, sem custo e sem compromisso. A partir dela,
            a família recebe a escala sugerida, o perfil do profissional indicado e o valor fechado do
            mês, com retaguarda e plantão de enfermagem 24h, cobertura de faltas e registro no
            prontuário eletrônico já incluídos. O investimento começa em R$ 3.180.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CareModelsSection;

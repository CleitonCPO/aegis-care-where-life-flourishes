const services = [
  {
    number: "01",
    title: "Cuidadores selecionados",
    description:
      "Profissionais avaliados sob critérios técnicos, comportamentais e relacionais, escolhidos para o perfil de cada família.",
  },
  {
    number: "02",
    title: "Acompanhamento residencial",
    description:
      "Presença contínua ou por períodos definidos, sempre conduzida com discrição dentro da rotina do lar.",
  },
  {
    number: "03",
    title: "Apoio às atividades diárias",
    description:
      "Suporte sensível à mobilidade, higiene, alimentação e convivência, preservando autonomia e dignidade.",
  },
  {
    number: "04",
    title: "Recuperação pós-hospitalar",
    description:
      "Acompanhamento estruturado após internações, com coordenação de enfermagem e atenção integral à evolução.",
  },
  {
    number: "05",
    title: "Coordenação clínica 24h",
    description:
      "Supervisão de enfermagem disponível em tempo integral, com registros, comunicação e visitas técnicas regulares.",
  },
  {
    number: "06",
    title: "Plano individualizado",
    description:
      "Cada assistência é desenhada a partir da história, do diagnóstico e dos desejos de quem é cuidado.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-28 md:py-40 bg-background">
      <div className="container-editorial">
        <div className="max-w-3xl mb-20 md:mb-28">
          <span className="eyebrow mb-6 block">Assistência</span>
          <h2 className="font-display text-3xl md:text-[2.75rem] lg:text-5xl leading-[1.1] text-foreground mb-8">
            Cuidado privado, organizado em torno de uma única vida.
          </h2>
          <p className="text-lg text-muted-foreground leading-[1.8] prose-justified">
            Cada plano é construído com a família e coordenado clinicamente para garantir
            segurança, conforto e a presença certa em cada momento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((s) => (
            <div
              key={s.number}
              className="group bg-background p-10 lg:p-12 transition-colors duration-500 hover:bg-[hsl(var(--cream))]"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="font-display text-[hsl(var(--teal-deep))] text-lg tabular-nums tracking-wider">
                  {s.number}
                </span>
                <span className="h-px w-10 bg-[hsl(var(--gold))] mt-3 transition-all duration-500 group-hover:w-16" />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-4 leading-tight">
                {s.title}
              </h3>
              <p className="text-muted-foreground leading-[1.8] text-[15px]">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

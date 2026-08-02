const pillars = [
  {
    title: "Supervisão por enfermeiros habilitados",
    text: "Todo caso é conduzido por enfermeiro com registro ativo no COREN-SP e especialização em Gerontologia, responsável pelo plano assistencial, pela escala e pela avaliação periódica do assistido.",
  },
  {
    title: "Agência de cuidadores com prontuário eletrônico",
    text: "Os registros de cada plantão são lançados no aplicativo Aegis Care em tempo real: sinais vitais, medicação, alimentação, humor e intercorrências ficam auditáveis para a família e para a equipe clínica.",
  },
  {
    title: "Retaguarda e plantão de enfermagem 24h",
    text: "Canal direto com a coordenação de enfermagem a qualquer hora, com protocolo definido de intercorrência, acionamento de serviço médico e comunicação imediata à família.",
  },
  {
    title: "Auditoria clínica e visitas técnicas",
    text: "Visitas técnicas presenciais, checagem documental dos profissionais e revisão do plano de cuidado sustentam uma gestão de enfermagem domiciliar premium do primeiro dia ao último.",
  },
];

const ClinicalGovernanceSection = () => {
  return (
    <section id="governanca-clinica" className="py-24 md:py-32">
      <div className="container-editorial">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="eyebrow eyebrow-gold mb-5 block">Governança clínica</span>
            <h2 className="font-display text-3xl md:text-[2.5rem] leading-[1.12] text-foreground mb-6">
              Gestão de enfermagem domiciliar premium, com responsabilidade técnica declarada.
            </h2>
            <p className="text-muted-foreground leading-[1.85] prose-justified">
              Cuidado de alto padrão não se sustenta apenas em boa vontade. Sustenta-se em
              responsabilidade técnica, registro clínico e supervisão contínua de enfermeiros
              habilitados junto ao COREN-SP, com formação em Gerontologia.
            </p>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-x-12 gap-y-10">
            {pillars.map((pillar, i) => (
              <div key={pillar.title} className="border-t border-border pt-6">
                <span className="font-display text-[hsl(var(--teal-deep))] text-sm tabular-nums tracking-wider block mb-3">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl text-foreground mb-3 leading-[1.3]">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground leading-[1.8] text-[0.95rem] prose-justified">
                  {pillar.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicalGovernanceSection;

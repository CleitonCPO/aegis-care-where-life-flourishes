const differentials = [
  {
    title: "Coordenação de enfermagem",
    text: "Cada caso é acompanhado clinicamente por um enfermeiro responsável, com supervisão contínua da equipe em campo.",
  },
  {
    title: "Seleção criteriosa de profissionais",
    text: "Processo seletivo com avaliação técnica, comportamental e validação documental antes de qualquer indicação.",
  },
  {
    title: "Cuidado dentro do lar",
    text: "Toda a estrutura assistencial é desenhada para que a vida continue acontecendo onde sempre aconteceu.",
  },
  {
    title: "Comunicação próxima à família",
    text: "Registros diários em prontuário eletrônico e canais diretos com a coordenação para decisões compartilhadas.",
  },
  {
    title: "Discrição e presença",
    text: "Profissionais formados para acompanhar com sensibilidade, sem ocupar o espaço afetivo da família.",
  },
  {
    title: "Excelência assistencial",
    text: "Protocolos clínicos, visitas técnicas e revisão constante do plano de cuidado conforme a evolução do assistido.",
  },
];

const WhyUsSection = () => {
  return (
    <section id="diferenciais" className="py-28 md:py-40 relative overflow-hidden gradient-deep">
      <div className="container-editorial relative z-10">
        <div className="max-w-3xl mb-20 md:mb-28">
          <span className="text-[hsl(var(--turquoise))] text-[0.7rem] tracking-[0.32em] uppercase font-medium mb-6 block">
            Por que a Aegis Care
          </span>
          <h2 className="font-display text-3xl md:text-[2.75rem] lg:text-5xl leading-[1.1] text-white mb-8 font-light">
            Sofisticação assistencial não é luxo. É o cuidado certo, executado com método.
          </h2>
          <p className="text-lg text-white/75 leading-[1.8] prose-justified">
            Uma estrutura privada construída para famílias que esperam excelência, presença
            humana e coordenação clínica em cada detalhe do cotidiano do lar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-14">
          {differentials.map((item, i) => (
            <div key={item.title} className="border-t border-white/15 pt-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="font-display text-[hsl(var(--turquoise))] text-sm tabular-nums tracking-wider">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl md:text-2xl text-white font-normal">
                  {item.title}
                </h3>
              </div>
              <p className="text-white/70 leading-[1.85] pl-9 text-[15px]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;

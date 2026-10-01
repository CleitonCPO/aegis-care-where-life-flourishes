import { Link } from "react-router-dom";

const differentials = [
  { title: "Transparência em cada etapa", text: "A família por dentro de tudo." },
  { title: "Participação da família", text: "A família participa de cada decisão de cuidado." },
  { title: "Cuidadores valorizados", text: "Cuidadores ouvidos, orientados e valorizados não são números." },
  { title: "Fundador presente", text: "Conduz pessoalmente a coordenação." },
];

const WhyUsSection = () => {
  return (
    <section id="diferenciais" className="py-28 md:py-40 relative overflow-hidden gradient-deep">
      <div className="container-editorial relative z-10">
        <div className="max-w-3xl mb-20 md:mb-28">
          <span className="text-[hsl(var(--turquoise))] text-[0.7rem] tracking-[0.32em] uppercase font-medium mb-6 block">
            Aegis Care
          </span>
          <h2 className="font-display text-3xl md:text-[2.75rem] lg:text-5xl leading-[1.1] text-white mb-8 font-light">
            O que nos diferencia
          </h2>
          <p className="text-lg text-white/75 leading-[1.8] prose-justified">
            Não somos os maiores. Buscamos ser os mais verdadeiros.
          </p>
        </div>
        <Link to="/diferenciais" className="inline-flex mt-12 border-b border-[hsl(var(--gold))] pb-1 text-primary-foreground font-medium hover:text-[hsl(var(--turquoise))] transition-colors">Nosso diferencial →</Link>

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

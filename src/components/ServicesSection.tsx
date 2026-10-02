import { Link } from "react-router-dom";

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-16 md:py-24 bg-background">
      <div className="container-editorial">
        <div className="max-w-3xl">
          <span className="eyebrow mb-6 block">Nossos serviços</span>
          <h2 className="font-display text-3xl md:text-[2.75rem] lg:text-5xl leading-[1.1] text-foreground mb-8">
            Cuidado que se adapta à sua família
          </h2>
          <p className="text-lg text-muted-foreground leading-[1.8] prose-justified">
            Do acompanhamento diário à enfermagem especializada um plano de cuidado feito para a sua realidade.
          </p>
          <Link to="/servicos" className="inline-flex mt-8 border-b border-[hsl(var(--gold))] pb-1 text-foreground font-medium hover:text-[hsl(var(--teal-deep))] transition-colors">Ver serviços</Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

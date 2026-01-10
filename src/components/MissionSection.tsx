import { Target, Eye } from "lucide-react";

const MissionSection = () => {
  return (
    <section className="py-20 lg:py-28 gradient-soft">
      <div className="container mx-auto px-4">

        {/* Mission, Vision, Values */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-teal-light rounded-full text-secondary text-sm font-semibold mb-4">
            Nossa Essência
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground font-bold">
            O que nos move
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Mission */}
          <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Target className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">
              Missão
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Cuidar de pessoas no lugar onde suas histórias foram construídas, 
              promovendo bem-estar, segurança e alegria em cada fase da vida.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl gradient-cta flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Eye className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">
              Visão
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Ser referência em cuidado domiciliar de alto padrão, reconhecida 
              pela excelência humana e técnica.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;

import { Heart, Shield, Home } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-teal-light rounded-full text-secondary text-sm font-semibold mb-4">
            Quem Somos
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground font-bold mb-6">
            Mais do que assistência, oferecemos{" "}
            <span className="text-gradient">tranquilidade</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A Aegis Care é uma empresa de cuidado domiciliar especializada no atendimento 
            a idosos, criada para famílias que valorizam qualidade de vida, acolhimento e excelência.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Shield,
              title: "Proteção",
              description:
                "Somos o novo capítulo da Vital Senior Cuidadores, agora com uma marca ainda mais alinhada à nossa essência: proteger, cuidar e respeitar.",
            },
            {
              icon: Heart,
              title: "Acolhimento",
              description:
                "Nosso cuidado acontece onde a vida floresceu: no lar. É ali que estão as memórias, os afetos, as conquistas e a identidade de cada pessoa.",
            },
            {
              icon: Home,
              title: "Conforto",
              description:
                "Cuidamos para que a vida continue sendo vivida com alegria, dignidade, segurança e presença no ambiente mais confortável.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* History */}
        <div className="bg-cream rounded-3xl p-8 md:p-12 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-secondary/20 rounded-full text-secondary text-sm font-semibold mb-4">
                Nossa História
              </span>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                Uma trajetória construída com{" "}
                <span className="text-secondary">sensibilidade</span>
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Nossa história começou dentro de lares reais, acompanhando vidas reais.
                </p>
                <p>
                  Ao longo dos anos, aprendemos que o cuidado verdadeiro não se limita 
                  a técnicas — ele se constrói com escuta, presença, sensibilidade 
                  e respeito ao tempo de cada pessoa.
                </p>
                <p>
                  A evolução natural desse caminho nos levou à Aegis Care: uma marca 
                  que traduz maturidade, solidez e a certeza de que o melhor cuidado 
                  é aquele que preserva a alegria de viver.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-card rounded-2xl p-8 shadow-card">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-3 h-3 rounded-full bg-secondary animate-pulse-soft" />
                  <span className="text-sm font-medium text-muted-foreground">
                    Valores que nos guiam
                  </span>
                </div>
                <ul className="space-y-4">
                  {[
                    "Respeito à história de vida",
                    "Amor pelo cuidado",
                    "Excelência e responsabilidade",
                    "Humanização em cada detalhe",
                    "Confiança e transparência",
                  ].map((value, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                      <span className="text-foreground font-medium">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Decorative element */}
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-teal-light rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

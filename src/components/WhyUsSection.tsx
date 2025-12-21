import { Home, User, Award, MessageCircle, Heart, Check } from "lucide-react";

const differentials = [
  { icon: Home, text: "Cuidado dentro do lar" },
  { icon: User, text: "Atendimento personalizado" },
  { icon: Award, text: "Profissionais qualificados e supervisionados" },
  { icon: MessageCircle, text: "Comunicação próxima com a família" },
  { icon: Heart, text: "Respeito, leveza e humanidade" },
];

const WhyUsSection = () => {
  return (
    <section id="diferenciais" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDYwIEwgNjAgMCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary-foreground/20 backdrop-blur-sm rounded-full text-primary-foreground text-sm font-semibold mb-4">
              Por que a Aegis Care
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary-foreground font-bold mb-6">
              Aqui, o cuidado não invade —{" "}
              <span className="text-teal-glow">ele acolhe.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {differentials.map((item, index) => (
              <div
                key={index}
                className="group bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-5 border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-foreground/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="text-primary-foreground font-medium">
                    {item.text}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Extra highlight */}
          <div className="mt-12 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20">
            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <div className="w-16 h-16 rounded-2xl bg-teal-glow/30 flex items-center justify-center flex-shrink-0">
                <Check className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-primary-foreground mb-2">
                  Compromisso com a excelência
                </h3>
                <p className="text-primary-foreground/80">
                  Mais do que assistência, oferecemos tranquilidade, confiança e bem-estar. 
                  O cuidado verdadeiro acontece com respeito, presença e humanidade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;

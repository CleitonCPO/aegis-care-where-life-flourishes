import { 
  Users, 
  Home, 
  Activity, 
  Stethoscope, 
  ClipboardList, 
  Heart 
} from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Cuidadores de Idosos",
    description: "Profissionais cuidadosamente selecionados e treinados para oferecer o melhor cuidado.",
  },
  {
    icon: Home,
    title: "Acompanhamento Domiciliar",
    description: "Assistência contínua ou pontual, conforme a necessidade da família.",
  },
  {
    icon: Activity,
    title: "Atividades do Dia a Dia",
    description: "Apoio nas atividades diárias, preservando autonomia e qualidade de vida.",
  },
  {
    icon: Stethoscope,
    title: "Cuidados Pós-operatórios",
    description: "Acompanhamento especializado durante a recuperação cirúrgica.",
  },
  {
    icon: ClipboardList,
    title: "Supervisão de Enfermagem",
    description: "Supervisão técnica constante para garantir a qualidade do cuidado.",
  },
  {
    icon: Heart,
    title: "Planos Personalizados",
    description: "Serviços adaptados ao estilo de vida e necessidades de cada paciente.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-teal-light rounded-full text-secondary text-sm font-semibold mb-4">
            Nossos Serviços
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground font-bold mb-6">
            Cada pessoa é única.{" "}
            <span className="text-gradient">Cada cuidado também.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Tudo é pensado para preservar autonomia, conforto e alegria.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 gradient-cta opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity" />
              
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-teal-light flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Stethoscope, 
  Heart, 
  Plane, 
  Building2, 
  Activity,
  Brain,
  UserCheck,
  Bandage,
  Syringe,
  Phone,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Home,
    title: "Cuidado Domiciliar",
    subtitle: "Conforto e segurança no lar",
    description: "Atendimento humanizado no ambiente mais importante: a casa do paciente. Oferecemos cuidadores altamente capacitados que garantem conforto, segurança e qualidade de vida, preservando a autonomia e a dignidade de cada pessoa.",
    features: [
      "Acompanhamento integral 24 horas",
      "Cuidadores certificados e treinados",
      "Supervisão de enfermagem",
      "Planos personalizados"
    ]
  },
  {
    icon: Stethoscope,
    title: "Serviços de Enfermagem",
    subtitle: "Cuidado técnico especializado",
    description: "Equipe de enfermagem altamente qualificada para procedimentos técnicos e monitoramento contínuo da saúde. Realizamos avaliações, administração de medicamentos e acompanhamento de sinais vitais com toda a expertise necessária.",
    features: [
      "Administração de medicamentos",
      "Monitoramento de sinais vitais",
      "Avaliação clínica periódica",
      "Relatórios detalhados para a família"
    ]
  },
  {
    icon: Bandage,
    title: "Cuidados de Feridas",
    subtitle: "Tratamento especializado",
    description: "Tratamento profissional de lesões cutâneas, úlceras de pressão e feridas cirúrgicas. Nossa equipe utiliza técnicas avançadas e materiais de alta qualidade para promover a cicatrização eficaz e prevenir complicações.",
    features: [
      "Curativos especializados",
      "Prevenção de úlceras de pressão",
      "Tratamento de feridas complexas",
      "Acompanhamento da evolução"
    ]
  },
  {
    icon: Syringe,
    title: "Dispositivos Médicos",
    subtitle: "Gestão e manutenção",
    description: "Gerenciamento completo de dispositivos médicos como sondas, cateteres, traqueostomias e ostomias. Cuidamos da manutenção, higienização e troca, garantindo segurança e bem-estar ao paciente.",
    features: [
      "Sondas e cateteres",
      "Traqueostomias",
      "Ostomias",
      "Orientação familiar"
    ]
  },
  {
    icon: Building2,
    title: "Acompanhante Hospitalar",
    subtitle: "Suporte durante a internação",
    description: "Presença constante e qualificada durante períodos de internação hospitalar. Nossos acompanhantes oferecem suporte emocional, auxiliam na comunicação com a equipe médica e garantem que o paciente receba toda atenção necessária.",
    features: [
      "Acompanhamento diurno e noturno",
      "Suporte emocional ao paciente",
      "Comunicação com equipe médica",
      "Relatórios para a família"
    ]
  },
  {
    icon: Plane,
    title: "Acompanhante em Viagens",
    subtitle: "Mobilidade com segurança",
    description: "Viaje com tranquilidade. Oferecemos acompanhantes especializados para viagens nacionais e internacionais, garantindo que todas as necessidades de saúde sejam atendidas durante o deslocamento.",
    features: [
      "Viagens nacionais e internacionais",
      "Gestão de medicamentos",
      "Assistência em aeroportos",
      "Cuidados durante todo o trajeto"
    ]
  },
  {
    icon: UserCheck,
    title: "Cuidador para Adultos",
    subtitle: "Apoio às limitações físicas",
    description: "Assistência especializada para adultos com limitações físicas ou cognitivas temporárias ou permanentes. Auxiliamos na mobilidade, higiene pessoal, alimentação e atividades diárias, sempre respeitando a individualidade.",
    features: [
      "Auxílio à mobilidade",
      "Higiene e cuidados pessoais",
      "Acompanhamento de rotina",
      "Estímulo à independência"
    ]
  },
  {
    icon: Brain,
    title: "Cuidados Especializados",
    subtitle: "Alzheimer, Parkinson e AVC",
    description: "Atendimento especializado para pacientes com doenças neurodegenerativas e sequelas de AVC. Nossa equipe é treinada para lidar com as particularidades de cada condição, oferecendo suporte terapêutico e emocional.",
    features: [
      "Protocolos específicos por condição",
      "Estimulação cognitiva",
      "Prevenção de quedas",
      "Suporte à família e cuidadores"
    ]
  },
];

const Servicos = () => {
  return (
    <>
      <Helmet>
        <title>Serviços | Aegis Care - Cuidado Domiciliar Premium</title>
        <meta 
          name="description" 
          content="Conheça nossos serviços de cuidado domiciliar: enfermagem, cuidado de feridas, acompanhante hospitalar, cuidados para Alzheimer, Parkinson e AVC. Atendemos Zona Leste SP." 
        />
        <meta name="keywords" content="cuidado domiciliar, home care, enfermagem domiciliar, cuidador de idosos, Alzheimer, Parkinson, AVC, acompanhante hospitalar, zona leste SP" />
        <link rel="canonical" href="https://aegiscare.com.br/servicos" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary opacity-95" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-semibold mb-6">
                Excelência em Cuidados
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Serviços Premium de{" "}
                <span className="text-teal-light">Cuidado Domiciliar</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                Cada pessoa merece um cuidado único. Oferecemos soluções completas e personalizadas para proporcionar qualidade de vida, conforto e dignidade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://wa.me/5511920067183" target="_blank" rel="noopener noreferrer">
                  <Button variant="cta" size="xl" className="gap-2 w-full sm:w-auto">
                    <Phone className="w-5 h-5" />
                    Solicitar Orçamento
                  </Button>
                </a>
                <Link to="/quem-somos">
                  <Button 
                    variant="outline" 
                    size="xl" 
                    className="gap-2 w-full sm:w-auto border-white/30 text-white hover:bg-white/10"
                  >
                    Conheça Nossa História
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Decorative wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0 120L60 105C120 90 240 60 360 52.5C480 45 600 60 720 67.5C840 75 960 75 1080 67.5C1200 60 1320 45 1380 37.5L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
            </svg>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-teal-light rounded-full text-secondary text-sm font-semibold mb-4">
                O Que Oferecemos
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground font-bold mb-6">
                Soluções Completas para{" "}
                <span className="text-gradient">Cada Necessidade</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Da assistência diária aos cuidados mais especializados, nossa equipe está preparada para oferecer o melhor atendimento.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <article
                  key={index}
                  className="group relative bg-card rounded-3xl p-8 shadow-soft hover:shadow-elevated transition-all duration-500 overflow-hidden"
                >
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-40 h-40 gradient-cta opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity duration-500" />

                  <div className="relative">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl gradient-hero flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <div className="mb-6">
                      <p className="text-secondary text-sm font-medium mb-1">{service.subtitle}</p>
                      <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Features */}
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm text-foreground">
                          <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full mb-6">
                <Heart className="w-5 h-5 text-secondary" />
                <span className="text-secondary font-medium">Cuidado Personalizado</span>
              </div>
              
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Cada Família é Única.{" "}
                <span className="text-gradient">Cada Plano Também.</span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Entre em contato para uma avaliação gratuita. Nossa equipe irá entender suas necessidades e criar um plano de cuidados sob medida.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://wa.me/5511920067183" target="_blank" rel="noopener noreferrer">
                  <Button variant="cta" size="xl" className="gap-2 w-full sm:w-auto">
                    <Phone className="w-5 h-5" />
                    Fale com Nossa Equipe
                  </Button>
                </a>
              </div>

              <div className="mt-12 flex flex-wrap justify-center gap-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-card shadow-soft flex items-center justify-center">
                    <Activity className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="text-left">
                    <p className="text-2xl font-bold text-foreground">24/7</p>
                    <p className="text-sm text-muted-foreground">Atendimento</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-card shadow-soft flex items-center justify-center">
                    <UserCheck className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="text-left">
                    <p className="text-2xl font-bold text-foreground">100%</p>
                    <p className="text-sm text-muted-foreground">Profissionais Certificados</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-card shadow-soft flex items-center justify-center">
                    <Home className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="text-left">
                    <p className="text-2xl font-bold text-foreground">Zona Leste</p>
                    <p className="text-sm text-muted-foreground">São Paulo - SP</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Servicos;

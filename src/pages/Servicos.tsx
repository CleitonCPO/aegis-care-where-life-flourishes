import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion, type Variants, type Easing } from "framer-motion";
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

// Images
import heroImage from "@/assets/servicos/cuidado-domiciliar-hero.jpg";
import enfermagemImage from "@/assets/servicos/enfermagem-domiciliar.jpg";
import acompanhamentoImage from "@/assets/servicos/acompanhamento-diario.jpg";
import hospitalImage from "@/assets/servicos/acompanhante-hospitalar.jpg";

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
    ],
    image: heroImage
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
    ],
    image: enfermagemImage
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
    ],
    image: acompanhamentoImage
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
    ],
    image: hospitalImage
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
    ],
    image: hospitalImage
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
    ],
    image: acompanhamentoImage
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
    ],
    image: heroImage
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
    ],
    image: enfermagemImage
  },
];

// Animation variants with proper typing
const easeOut: Easing = [0.16, 1, 0.3, 1];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: easeOut } }
};

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
          {/* Background Image */}
          <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <img 
              src={heroImage} 
              alt="Cuidado domiciliar premium" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-secondary/80" />
          </motion.div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.span 
                variants={fadeInUp}
                className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-semibold mb-6"
              >
                Excelência em Cuidados
              </motion.span>
              <motion.h1 
                variants={fadeInUp}
                className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              >
                Serviços Premium de{" "}
                <span className="text-teal-light">Cuidado Domiciliar</span>
              </motion.h1>
              <motion.p 
                variants={fadeInUp}
                className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed"
              >
                Cada pessoa merece um cuidado único. Oferecemos soluções completas e personalizadas para proporcionar qualidade de vida, conforto e dignidade.
              </motion.p>
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
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
              </motion.div>
            </motion.div>
          </div>

          {/* Decorative wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0 120L60 105C120 90 240 60 360 52.5C480 45 600 60 720 67.5C840 75 960 75 1080 67.5C1200 60 1320 45 1380 37.5L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
            </svg>
          </div>
        </section>

        {/* Featured Images Section */}
        <section className="py-16 lg:py-20 overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-6"
            >
              {[
                { image: enfermagemImage, title: "Enfermagem Especializada", subtitle: "Cuidado técnico de excelência" },
                { image: acompanhamentoImage, title: "Acompanhamento Diário", subtitle: "Qualidade de vida no lar" },
                { image: hospitalImage, title: "Suporte Hospitalar", subtitle: "Companhia em todos os momentos" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group relative rounded-2xl overflow-hidden shadow-elevated"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-teal-light text-sm font-medium mb-1">{item.subtitle}</p>
                    <h3 className="text-white font-display text-xl font-bold">{item.title}</h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-center mb-16"
            >
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
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-8"
            >
              {services.map((service, index) => (
                <motion.article
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group relative bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-elevated transition-shadow duration-500"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                    
                    {/* Icon floating over image */}
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="absolute bottom-4 left-8 w-16 h-16 rounded-2xl gradient-hero flex items-center justify-center shadow-lg"
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="relative p-8 pt-4">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-40 h-40 gradient-cta opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity duration-500" />

                    <div className="relative">
                      <p className="text-secondary text-sm font-medium mb-1">{service.subtitle}</p>
                      <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Features */}
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <motion.li 
                            key={idx} 
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 text-sm text-foreground"
                          >
                            <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-muted relative overflow-hidden">
          {/* Animated background elements */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.05, 0.1, 0.05]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 -left-20 w-80 h-80 bg-primary rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.05, 0.1, 0.05]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 -right-20 w-96 h-96 bg-secondary rounded-full blur-3xl"
          />

          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.div 
                variants={fadeInUp}
                className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full mb-6"
              >
                <Heart className="w-5 h-5 text-secondary" />
                <span className="text-secondary font-medium">Cuidado Personalizado</span>
              </motion.div>
              
              <motion.h2 
                variants={fadeInUp}
                className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
              >
                Cada Família é Única.{" "}
                <span className="text-gradient">Cada Plano Também.</span>
              </motion.h2>
              
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
              >
                Entre em contato para uma avaliação gratuita. Nossa equipe irá entender suas necessidades e criar um plano de cuidados sob medida.
              </motion.p>

              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <a href="https://wa.me/5511920067183" target="_blank" rel="noopener noreferrer">
                  <Button variant="cta" size="xl" className="gap-2 w-full sm:w-auto">
                    <Phone className="w-5 h-5" />
                    Fale com Nossa Equipe
                  </Button>
                </a>
              </motion.div>

              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-12 flex flex-wrap justify-center gap-8"
              >
                {[
                  { icon: Activity, value: "24/7", label: "Atendimento" },
                  { icon: UserCheck, value: "100%", label: "Profissionais Certificados" },
                  { icon: Home, value: "Zona Leste", label: "São Paulo - SP" }
                ].map((stat, index) => (
                  <motion.div 
                    key={index}
                    variants={scaleIn}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-12 h-12 rounded-xl bg-card shadow-soft flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div className="text-left">
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Servicos;

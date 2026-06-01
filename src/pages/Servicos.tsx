import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion, type Variants, type Easing } from "framer-motion";
import { 
  Home, 
  Stethoscope,
  Activity,
  Heart, 
  Plane,
  UserCheck,
  Phone,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { Link } from "react-router-dom";

// Images
import heroImage from "@/assets/servicos/cuidado-domiciliar-hero.jpg";
import enfermagemImage from "@/assets/servicos/enfermagem-domiciliar.jpg";
import acompanhamentoImage from "@/assets/servicos/acompanhamento-diario.jpg";

const services = [
  {
    icon: Home,
    title: "Cuidado Domiciliar",
    subtitle: "Preservar a rotina, os vínculos e a sensação de estar em casa.",
    description:
      "Oferecemos acompanhamento domiciliar personalizado para pessoas que necessitam de apoio contínuo, respeitando sua individualidade, seus hábitos e a história construída ao longo de uma vida inteira. O objetivo não é apenas assistir. É permitir que o cuidado aconteça sem romper aquilo que faz um lar ser um lar.",
    features: [
      "Acompanhamento personalizado e contínuo",
      "Respeito à rotina e à individualidade",
      "Cuidadores cuidadosamente selecionados",
      "Comunicação próxima com a família",
    ],
    image: heroImage,
  },
  {
    icon: Stethoscope,
    title: "Enfermagem Domiciliar",
    subtitle: "Segurança clínica com a tranquilidade de permanecer em casa.",
    description:
      "Nossa equipe de enfermagem atua com excelência técnica e acompanhamento individualizado para que o processo de cuidado aconteça com conforto, estabilidade e confiança.",
    features: [
      "Excelência técnica em ambiente domiciliar",
      "Acompanhamento clínico individualizado",
      "Supervisão por enfermeiros experientes",
      "Conforto, estabilidade e previsibilidade",
    ],
    image: enfermagemImage,
  },
  {
    icon: UserCheck,
    title: "Acompanhamento Hospitalar",
    subtitle: "Presença quando a família não consegue estar.",
    description:
      "Sabemos que nem sempre é possível permanecer ao lado de quem amamos durante toda uma internação. Por isso, oferecemos acompanhamento profissional que garante atenção, suporte e comunicação contínua com a família.",
    features: [
      "Presença qualificada no hospital",
      "Atenção integral ao assistido",
      "Comunicação contínua com a família",
      "Suporte em todas as fases da internação",
    ],
    image: acompanhamentoImage,
  },
  {
    icon: Plane,
    title: "Pós-Alta Hospitalar",
    subtitle: "O retorno para casa exige mais do que cuidados. Exige adaptação.",
    description:
      "Auxiliamos famílias no processo de transição entre hospital e domicílio, promovendo segurança, orientação e continuidade assistencial.",
    features: [
      "Transição segura entre hospital e lar",
      "Orientação à família e ao assistido",
      "Continuidade assistencial cuidadosa",
      "Adaptação respeitosa à nova rotina",
    ],
    image: heroImage,
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
          content="Conheça nossos serviços de cuidado domiciliar: cuidadores de idosos, acompanhamento 24h, cuidador para adultos. Atendemos Zona Leste SP." 
        />
        <meta name="keywords" content="cuidado domiciliar, agência de cuidadores de idosos, serviços de cuidadores, cuidador de idosos, acompanhamento domiciliar, zona leste SP" />
        <link rel="canonical" href="https://www.aegiscare.com.br/servicos" />
        <meta property="og:title" content="Serviços | Aegis Care - Cuidado Domiciliar Premium" />
        <meta property="og:description" content="Cuidador de idosos, acompanhamento 24h, cuidador para adultos e acompanhamento em viagem na Zona Leste de SP." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.aegiscare.com.br/servicos" />
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
                className="eyebrow !text-white/70 mb-6 inline-block"
              >
                Como podemos ajudar sua família
              </motion.span>
              <motion.h1 
                variants={fadeInUp}
                className="font-display text-4xl md:text-5xl lg:text-[4.25rem] font-normal text-white mb-6 leading-[1.05]"
              >
                Atravessar essa etapa com mais{" "}
                <span className="italic text-teal-light">segurança e tranquilidade.</span>
              </motion.h1>
              <motion.div variants={fadeInUp} className="h-px w-24 bg-[hsl(var(--gold-bright))] mx-auto mb-8" />
              <motion.p 
                variants={fadeInUp}
                className="text-lg md:text-xl text-white/85 mb-10 max-w-2xl mx-auto leading-relaxed"
              >
                Cada plano de cuidado começa pela escuta. Porque cada vida carrega uma história única que merece ser respeitada.
              </motion.p>
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <a href="https://api.whatsapp.com/send/?phone=5511920067183&text=Ol%C3%A1%20Aegis%20Care%2C%20eu%20gostaria%20de%20um%20or%C3%A7amento%20de%20cuidador%20para%20meu%20familiar.&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
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
                { image: enfermagemImage, title: "Cuidadores Especializados", subtitle: "Profissionais capacitados" },
                { image: acompanhamentoImage, title: "Acompanhamento Diário", subtitle: "Qualidade de vida no lar" },
                { image: heroImage, title: "Cuidado no Lar", subtitle: "Companhia em todos os momentos" }
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
              <span className="eyebrow text-secondary">Nossos Serviços</span>
              <div className="divider-gold !mx-auto mt-3 mb-6" />
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-[1.1]">
                O cuidado começa pela compreensão da história de cada pessoa.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nenhum plano de cuidado é igual. Porque nenhuma vida é igual. Construímos soluções personalizadas que respeitam não apenas necessidades clínicas, mas também valores, vínculos, preferências e tudo aquilo que torna cada trajetória única.
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
                <a href="https://api.whatsapp.com/send/?phone=5511920067183&text=Ol%C3%A1%20Aegis%20Care%2C%20eu%20gostaria%20de%20um%20or%C3%A7amento%20de%20cuidador%20para%20meu%20familiar.&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
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

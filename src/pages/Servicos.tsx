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

import { services as serviceData } from "@/data/servicos";

const services = serviceData;

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

const SITE = "https://www.aegiscare.com.br";

const provider = {
  "@type": ["MedicalBusiness", "LocalBusiness"],
  "@id": `${SITE}/#organization`,
  name: "Aegis Care",
  url: SITE,
  telephone: "+55 11 92006-7183",
  address: {
    "@type": "PostalAddress",
    streetAddress: "R. Itapura, 254 - 290, Vila Gomes Cardim",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    postalCode: "03310-000",
    addressCountry: "BR",
  },
};

const servicosJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${SITE}/servicos#lista`,
    name: "Serviços de cuidado domiciliar e enfermagem sênior da Aegis Care",
    itemListElement: serviceData.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": ["HealthcareService", "Service"],
        "@id": `${SITE}/servicos/${service.slug}#service`,
        name: service.name,
        alternateName: service.shortName,
        serviceType: service.shortName,
        description: service.definition,
        url: `${SITE}/servicos/${service.slug}`,
        provider,
        areaServed: { "@type": "City", name: "São Paulo", addressRegion: "SP", addressCountry: "BR" },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          url: `${SITE}/servicos/${service.slug}`,
        },
      },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE}/servicos#faq`,
    url: `${SITE}/servicos`,
    name: "Perguntas frequentes sobre os serviços da Aegis Care",
    mainEntity: serviceData.flatMap((service) =>
      service.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${faq.answer} (${service.shortName})`,
        },
      })),
    ),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: SITE },
      { "@type": "ListItem", position: 2, name: "Serviços", item: `${SITE}/servicos` },
    ],
  },
];

const Servicos = () => {
  return (
    <>
      <Helmet>
        <title>Serviços de Cuidadores de Idosos em SP | Aegis Care</title>
        <meta 
          name="description" 
          content="Cuidador de idosos em domicílio em São Paulo com planos de 4h, 6h, 8h, 12h, 24h e flexíveis. Supervisão de enfermagem, cuidadores atualizados e prontuário eletrônico." 
        />
        <meta name="keywords" content="cuidador de idosos, cuidador de idosos em domicílio, planos de cuidador 4h 6h 8h 12h 24h, cuidador 24 horas, cuidador noturno, agência de cuidadores de idosos São Paulo, home care premium, gestão de enfermagem domiciliar, acompanhante hospitalar, cuidador para Alzheimer e Parkinson, zona leste SP" />
        <link rel="canonical" href="https://www.aegiscare.com.br/servicos" />
        <meta property="og:title" content="Serviços de Cuidadores de Idosos em SP | Aegis Care" />
        <meta property="og:description" content="Planos de cuidador de idosos de 4h, 6h, 8h, 12h, 24h e flexíveis, com supervisão de enfermagem em São Paulo." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.aegiscare.com.br/servicos" />
        <script type="application/ld+json">{JSON.stringify(servicosJsonLd)}</script>
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
                  key={service.slug}
                  variants={fadeInUp}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group relative bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-elevated transition-shadow duration-500"
                >
                  <Link to={`/servicos/${service.slug}`} className="block">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.imageAlt}
                        loading="lazy"
                        width={1280}
                        height={854}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="relative p-8 pt-6">
                      <p className="text-secondary text-sm font-medium mb-1">{service.eyebrow}</p>
                      <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                        {service.shortName}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {service.summary}
                      </p>

                      <ul className="space-y-2 mb-6">
                        {service.includes.slice(0, 4).map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-3 text-sm text-foreground"
                          >
                            <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <span className="inline-flex items-center gap-2 text-secondary font-medium">
                        Ver página do serviço
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </span>
                    </div>
                  </Link>
                </motion.article>
              ))}

            </motion.div>
          </div>
        </section>

        {/* Planos de Cuidadores */}
        <section id="planos" className="py-20 lg:py-28 bg-muted/40">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <span className="inline-block px-4 py-1.5 bg-teal-light rounded-full text-secondary text-sm font-semibold mb-4">
                Planos de cuidadores de idosos
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground font-bold mb-6">
                Planos de 4h, 6h, 8h, 12h, 24h e{" "}
                <span className="text-gradient">formatos flexíveis</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                O serviço de cuidador de idosos em domicílio da Aegis Care é organizado por carga
                horária. A escala ideal é definida na avaliação de enfermagem, sem custo, conforme a
                rotina da família e o grau de dependência do assistido em São Paulo.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  hours: "4h",
                  title: "Apoio pontual diário",
                  text: "Cuidador por 4 horas para banho, refeições, medicação e companhia em momentos críticos do dia.",
                },
                {
                  hours: "6h",
                  title: "Meio período",
                  text: "Seis horas de assistência domiciliar para manhãs ou tardes, com rotina organizada e registro diário.",
                },
                {
                  hours: "8h",
                  title: "Jornada completa",
                  text: "Oito horas de cuidado contínuo, indicado para famílias que trabalham fora e precisam de presença estável.",
                },
                {
                  hours: "12h",
                  title: "Plantão diurno ou noturno",
                  text: "Plantões de 12 horas, incluindo cuidador noturno para prevenção de quedas e monitoramento do sono.",
                },
                {
                  hours: "24h",
                  title: "Cuidado integral",
                  text: "Cobertura de 24 horas com revezamento de cuidadores e supervisão de enfermagem em tempo integral.",
                },
                {
                  hours: "Flex",
                  title: "Planos flexíveis",
                  text: "Diárias, finais de semana, feriados, pós-operatório e coberturas sob medida, ajustadas mês a mês.",
                },
              ].map((plan) => (
                <article
                  key={plan.hours}
                  className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-shadow duration-500"
                >
                  <p className="font-display text-4xl font-bold text-secondary mb-3">{plan.hours}</p>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">{plan.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-[15px]">{plan.text}</p>
                </article>
              ))}
            </div>

            <p className="text-center text-muted-foreground mt-10 max-w-2xl mx-auto">
              Todos os planos incluem avaliação de enfermagem, curadoria do cuidador, prontuário
              eletrônico com acompanhamento em tempo real e substituição imediata em caso de falta.
            </p>
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

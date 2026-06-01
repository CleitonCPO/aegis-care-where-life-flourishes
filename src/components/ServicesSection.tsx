import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import cuidadoImg from "@/assets/servicos/cuidado-domiciliar-hero.jpg";
import enfermagemImg from "@/assets/servicos/enfermagem-domiciliar.jpg";
import acompanhamentoImg from "@/assets/servicos/acompanhamento-diario.jpg";

const services = [
  {
    eyebrow: "01",
    title: "Cuidado Domiciliar",
    subtitle: "Preservar a rotina, os vínculos e a sensação de estar em casa.",
    description:
      "Acompanhamento domiciliar personalizado para pessoas que necessitam de apoio contínuo, respeitando sua individualidade, seus hábitos e a história construída ao longo de uma vida inteira.",
    image: cuidadoImg,
  },
  {
    eyebrow: "02",
    title: "Enfermagem Domiciliar",
    subtitle: "Segurança clínica com a tranquilidade de permanecer em casa.",
    description:
      "Nossa equipe de enfermagem atua com excelência técnica e acompanhamento individualizado para que o processo de cuidado aconteça com conforto, estabilidade e confiança.",
    image: enfermagemImg,
  },
  {
    eyebrow: "03",
    title: "Acompanhamento Hospitalar",
    subtitle: "Presença quando a família não consegue estar.",
    description:
      "Sabemos que nem sempre é possível permanecer ao lado de quem amamos durante toda uma internação. Oferecemos acompanhamento profissional que garante atenção, suporte e comunicação contínua com a família.",
    image: acompanhamentoImg,
  },
  {
    eyebrow: "04",
    title: "Pós-Alta Hospitalar",
    subtitle: "O retorno para casa exige mais do que cuidados. Exige adaptação.",
    description:
      "Auxiliamos famílias no processo de transição entre hospital e domicílio, promovendo segurança, orientação e continuidade assistencial.",
    image: cuidadoImg,
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 lg:py-36 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="max-w-2xl mb-20 lg:mb-28"
        >
          <span className="eyebrow mb-5">Como podemos ajudar</span>
          <div className="divider-gold !ml-0 !mr-0 mt-3 mb-6" />
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.05] mb-6">
            Atravessar essa etapa com mais segurança e tranquilidade.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Cada plano de cuidado nasce da escuta. Nenhuma vida é igual, por isso nenhum cuidado também é.
          </p>
        </motion.div>

        <div className="space-y-24 lg:space-y-32">
          {services.map((service, index) => {
            const reversed = index % 2 === 1;
            return (
              <motion.article
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${reversed ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                <div className="lg:col-span-6 relative">
                  <div className="relative aspect-[4/5] lg:aspect-[5/6] overflow-hidden rounded-sm">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <span className="absolute -top-4 -left-2 lg:-left-6 font-display text-7xl lg:text-8xl text-foreground/5 select-none">
                    {service.eyebrow}
                  </span>
                </div>
                <div className="lg:col-span-6 lg:px-6">
                  <span className="eyebrow text-secondary">Serviço {service.eyebrow}</span>
                  <div className="h-px w-16 bg-gold/60 my-5" />
                  <h3 className="font-display text-3xl md:text-4xl text-foreground mb-4 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-lg text-foreground/80 italic font-display mb-5 leading-snug">
                    {service.subtitle}
                  </p>
                  <p className="text-base text-muted-foreground leading-[1.85]">
                    {service.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Closing reflection */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mt-28 lg:mt-36 max-w-3xl mx-auto text-center"
        >
          <div className="divider-gold mb-8" />
          <p className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground leading-[1.3] mb-6">
            O cuidado começa pela compreensão da história de cada pessoa.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Nenhum plano de cuidado é igual. Porque nenhuma vida é igual. Construímos soluções personalizadas que respeitam não apenas necessidades clínicas, mas também valores, vínculos, preferências e tudo aquilo que torna cada trajetória única.
          </p>
          <Link
            to="/servicos"
            className="inline-flex items-center gap-2 mt-10 text-secondary font-medium hover:text-primary transition-colors group"
          >
            Conheça todos os nossos serviços
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;

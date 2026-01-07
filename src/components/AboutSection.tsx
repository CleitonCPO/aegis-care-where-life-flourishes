import { Heart, Shield, Home } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Intro */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.span 
            variants={itemVariants}
            className="inline-block px-4 py-1.5 bg-teal-light rounded-full text-secondary text-sm font-semibold mb-4"
          >
            Quem Somos
          </motion.span>
          <motion.h2 
            variants={itemVariants}
            className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground font-bold mb-6"
          >
            Mais do que assistência, oferecemos{" "}
            <span className="text-gradient">tranquilidade</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            A Aegis Care é uma empresa de cuidado domiciliar especializada no atendimento 
            a idosos, criada para famílias que valorizam qualidade de vida, acolhimento e excelência.
          </motion.p>
        </motion.div>

        {/* Features */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
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
                "Nosso cuidado acontece onde a vida floresceu, no lar. É ali que estão as memórias, os afetos, as conquistas e a identidade de cada pessoa.",
            },
            {
              icon: Home,
              title: "Conforto",
              description:
                "Cuidamos para que a vida continue sendo vivida com alegria, dignidade, segurança e presença no ambiente mais confortável.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center mb-6"
              >
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </motion.div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* History */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-cream rounded-3xl p-8 md:p-12 lg:p-16"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-block px-4 py-1.5 bg-secondary/20 rounded-full text-secondary text-sm font-semibold mb-4"
              >
                Nossa História
              </motion.span>
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6"
              >
                Uma trajetória construída com{" "}
                <span className="text-secondary">sensibilidade</span>
              </motion.h3>
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="space-y-4 text-muted-foreground leading-relaxed"
              >
                <p>
                  Nossa história começou dentro de lares reais, acompanhando vidas reais.
                </p>
                <p>
                  Ao longo dos anos, aprendemos que o cuidado verdadeiro não se limita 
                  a técnicas. Ele se constrói com escuta, presença, sensibilidade 
                  e respeito ao tempo de cada pessoa.
                </p>
                <p>
                  A evolução natural desse caminho nos levou à Aegis Care, uma marca 
                  que traduz maturidade, solidez e a certeza de que o melhor cuidado 
                  é aquele que preserva a alegria de viver.
                </p>
              </motion.div>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="relative"
            >
              <div className="bg-card rounded-2xl p-8 shadow-card">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-3 h-3 rounded-full bg-secondary"
                  />
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
                    <motion.li 
                      key={index} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                      <span className="text-foreground font-medium">{value}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              {/* Decorative element */}
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-teal-light rounded-2xl" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

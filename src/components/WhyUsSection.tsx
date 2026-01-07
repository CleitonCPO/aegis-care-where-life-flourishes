import { motion, type Variants } from "framer-motion";
import { Home, User, Award, MessageCircle, Heart, Check, Shield } from "lucide-react";

const differentials = [
  { icon: Home, text: "Cuidado dentro do lar" },
  { icon: User, text: "Atendimento personalizado" },
  { icon: Award, text: "Profissionais qualificados e supervisionados" },
  { icon: MessageCircle, text: "Comunicação próxima com a família" },
  { icon: Heart, text: "Respeito, leveza e humanidade" },
  { icon: Shield, text: "Segurança clínica e acompanhamento contínuo" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const WhyUsSection = () => {
  return (
    <section id="diferenciais" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDYwIEwgNjAgMCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="text-center mb-12"
          >
            <motion.span 
              variants={itemVariants}
              className="inline-block px-4 py-1.5 bg-primary-foreground/20 backdrop-blur-sm rounded-full text-primary-foreground text-sm font-semibold mb-4"
            >
              Por que a Aegis Care
            </motion.span>
            <motion.h2 
              variants={itemVariants}
              className="font-display text-3xl md:text-4xl lg:text-5xl text-primary-foreground font-bold mb-6"
            >
              Aqui, o cuidado não invade.{" "}
              <span className="text-teal-glow">Ele acolhe.</span>
            </motion.h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {differentials.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                className="group bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 rounded-xl bg-primary-foreground/20 flex items-center justify-center flex-shrink-0"
                  >
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </motion.div>
                  <span className="text-primary-foreground font-medium text-base leading-snug">
                    {item.text}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Extra highlight */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20"
          >
            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <motion.div 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="w-16 h-16 rounded-2xl bg-teal-glow/30 flex items-center justify-center flex-shrink-0"
              >
                <Check className="w-8 h-8 text-primary-foreground" />
              </motion.div>
              <div>
                <h3 className="font-display text-xl font-semibold text-primary-foreground mb-2">
                  Compromisso com a excelência
                </h3>
                <p className="text-primary-foreground/80 leading-relaxed">
                  Mais do que assistência, oferecemos tranquilidade, confiança e bem-estar. 
                  O cuidado verdadeiro acontece com respeito, presença e humanidade.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;

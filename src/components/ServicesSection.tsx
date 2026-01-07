import { motion, type Variants } from "framer-motion";
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

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
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
            Nossos Serviços
          </motion.span>
          <motion.h2 
            variants={itemVariants}
            className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground font-bold mb-6"
          >
            Cada pessoa é única.{" "}
            <span className="text-gradient">Cada cuidado também.</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-muted-foreground"
          >
            Tudo é pensado para preservar autonomia, conforto e alegria.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 overflow-hidden"
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 gradient-cta opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity" />
              
              <div className="relative">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="w-12 h-12 rounded-xl bg-teal-light flex items-center justify-center mb-5"
                >
                  <service.icon className="w-6 h-6 text-secondary" />
                </motion.div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;

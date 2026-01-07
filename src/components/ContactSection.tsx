import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageCircle, ArrowRight } from "lucide-react";

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

const ContactSection = () => {
  return (
    <section id="contato" className="py-20 lg:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              <motion.span 
                variants={itemVariants}
                className="inline-block px-4 py-1.5 bg-teal-light rounded-full text-secondary text-sm font-semibold mb-4"
              >
                Contato
              </motion.span>
              <motion.h2 
                variants={itemVariants}
                className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground font-bold mb-6"
              >
                Vamos conversar sobre{" "}
                <span className="text-gradient">cuidado</span>
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-lg text-muted-foreground mb-8 leading-relaxed"
              >
                Entre em contato e descubra como podemos cuidar com carinho, 
                presença e excelência, onde a vida foi construída.
              </motion.p>

              <motion.div 
                variants={containerVariants}
                className="space-y-4 mb-8"
              >
                <motion.a
                  variants={itemVariants}
                  whileHover={{ x: 8, transition: { duration: 0.2 } }}
                  href="tel:+5511920067183"
                  className="flex items-center gap-4 group p-3 -ml-3 rounded-xl hover:bg-muted transition-colors touch-manipulation"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 rounded-xl bg-teal-light flex items-center justify-center flex-shrink-0"
                  >
                    <Phone className="w-5 h-5 text-secondary" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-muted-foreground">Telefone / WhatsApp</p>
                    <p className="font-semibold text-foreground">(11) 92006-7183</p>
                  </div>
                </motion.a>

                <motion.a
                  variants={itemVariants}
                  whileHover={{ x: 8, transition: { duration: 0.2 } }}
                  href="mailto:contato@aegiscare.com.br"
                  className="flex items-center gap-4 group p-3 -ml-3 rounded-xl hover:bg-muted transition-colors touch-manipulation"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 rounded-xl bg-teal-light flex items-center justify-center flex-shrink-0"
                  >
                    <Mail className="w-5 h-5 text-secondary" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-muted-foreground">E-mail</p>
                    <p className="font-semibold text-foreground break-all">contato@aegiscare.com.br</p>
                  </div>
                </motion.a>
              </motion.div>

              <motion.div variants={itemVariants} className="flex">
                <a
                  href="https://wa.me/5511920067183"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button variant="cta" size="xl" className="gap-2 w-full min-h-[52px] touch-manipulation">
                    <MessageCircle className="w-5 h-5" />
                    Fale pelo WhatsApp
                  </Button>
                </a>
              </motion.div>
            </motion.div>

            {/* Right side - Card */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <motion.div 
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-card rounded-3xl p-8 shadow-card"
              >
                <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                  Trabalhe Conosco
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Se você acredita que cuidar é um privilégio e deseja fazer parte 
                  de um time que valoriza a vida, o afeto e o respeito, venha para a Aegis Care.
                </p>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-cream rounded-xl p-5 mb-6"
                >
                  <p className="text-secondary font-semibold text-center font-display text-lg">
                    Aqui, cuidamos de quem cuida.
                  </p>
                </motion.div>
                <a
                  href="mailto:contato@aegiscare.com.br?subject=Trabalhe%20Conosco"
                >
                  <Button variant="outline" size="lg" className="w-full gap-2">
                    Envie seu currículo
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
              </motion.div>
              {/* Decorative */}
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-teal-light rounded-3xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

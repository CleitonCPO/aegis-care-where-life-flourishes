import { motion, type Variants } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Como é o processo seletivo dos cuidadores?",
    answer: "Todos os profissionais passam por um processo seletivo criterioso, com análise de experiência, perfil comportamental, validação documental e alinhamento com os valores do cuidado domiciliar. Nosso objetivo é garantir profissionais preparados, humanizados e compatíveis com o perfil de cada família."
  },
  {
    question: "Em caso de não adaptação, podemos trocar de cuidador?",
    answer: "Sim. Caso não haja adaptação entre o cuidador e o assistido, realizamos a substituição do profissional. Entendemos que o cuidado envolve vínculo, confiança e presença, por isso esse alinhamento é essencial para a qualidade da assistência."
  },
  {
    question: "Podemos fazer um teste antes de iniciar o plano mensal?",
    answer: "Sim. É possível iniciar por diárias ou por um período reduzido, permitindo que a família avalie a adaptação do assistido e a dinâmica do cuidado antes de optar por um plano contínuo."
  },
  {
    question: "Em caso de ausência do cuidador, como a empresa age?",
    answer: "Na ausência do profissional, entramos em contato com a família para entender se desejam a substituição por um folguista. Quando o atendimento é integral, a reposição é acionada imediatamente. Para garantir o menor impacto possível na assistência, agilizamos o deslocamento do profissional, inclusive com envio de carro por aplicativo quando necessário, mantendo a continuidade do cuidado e a segurança do assistido."
  },
  {
    question: "Como acompanho a rotina do meu ente querido?",
    answer: "A família acompanha toda a assistência por meio do nosso prontuário eletrônico, onde registramos os cuidados realizados, rotina diária, observações importantes e evolução do assistido. Esse acompanhamento garante transparência, organização e segurança no cuidado."
  },
  {
    question: "Vocês fazem visitas na casa da minha família?",
    answer: "Sim. Realizamos visitas técnicas e acompanhamentos presenciais conforme a necessidade do atendimento, mensal, bimestral ou trimestral. Essas visitas permitem avaliar o ambiente, orientar a equipe, ajustar rotinas e garantir que o cuidado esteja alinhado com as necessidades do assistido e da família."
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const FAQSection = () => {
  // Schema.org FAQPage structured data for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-cream overflow-hidden">
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="container mx-auto px-4">
        <motion.header 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.span 
            variants={itemVariants}
            className="inline-block text-secondary font-medium tracking-wide uppercase text-sm mb-4"
          >
            Tire Suas Dúvidas
          </motion.span>
          <motion.h2 
            variants={itemVariants}
            className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6"
          >
            Perguntas Frequentes
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Respondemos às principais dúvidas sobre o cuidado domiciliar para idosos
          </motion.p>
        </motion.header>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-card rounded-lg shadow-soft border-none px-6 hover:shadow-card transition-shadow duration-300"
                >
                  <AccordionTrigger className="text-left font-display text-lg text-foreground hover:text-secondary py-6 hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;

import { motion, type Variants } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Como o cuidado domiciliar pode tornar o dia a dia mais leve e feliz?",
    answer: "Quando o cuidado acontece no lar, tudo flui melhor. A rotina permanece familiar, as memórias são preservadas e o bem-estar se manifesta nos pequenos detalhes do dia a dia."
  },
  {
    question: "É possível cuidar sem mudar a dinâmica da casa?",
    answer: "Sim. Nosso cuidado se integra naturalmente à rotina da família, respeitando hábitos, horários e preferências. Nada é imposto, tudo é harmonizado."
  },
  {
    question: "Como a Aegis Care ajuda a preservar a alegria de viver do idoso?",
    answer: "Valorizamos autonomia, estímulo, conversa, presença e afeto. O cuidado acontece com leveza, promovendo conforto, segurança e qualidade de vida."
  },
  {
    question: "O cuidador passa a fazer parte da casa?",
    answer: "Sim, de forma respeitosa e discreta. O profissional entra como apoio, presença tranquila e confiança no dia a dia."
  },
  {
    question: "O cuidado domiciliar permite que o idoso continue sendo quem sempre foi?",
    answer: "Exatamente. Nosso cuidado existe para apoiar, não para substituir. A identidade, as preferências e o ritmo de cada pessoa são preservados."
  },
  {
    question: "Como a família acompanha o cuidado?",
    answer: "Com proximidade e transparência. Mantemos diálogo constante, garantindo tranquilidade e confiança para todos."
  },
  {
    question: "O cuidado pode ser ajustado com o tempo?",
    answer: "Sim. O cuidado acompanha a vida, respeitando cada fase com sensibilidade e planejamento."
  },
  {
    question: "O cuidado domiciliar contribui para um envelhecimento ativo?",
    answer: "Sim. Estar em casa estimula autonomia, bem-estar emocional e conexão com a própria história."
  },
  {
    question: "O atendimento é personalizado?",
    answer: "Sempre. Cada cuidado é construído de forma única, respeitando o estilo de vida e as necessidades de cada pessoa."
  },
  {
    question: "Como a Aegis Care seleciona seus profissionais?",
    answer: "Com critérios rigorosos, formação adequada e supervisão contínua, garantindo um cuidado humano, técnico e confiável."
  },
  {
    question: "O cuidado domiciliar traz tranquilidade para a família?",
    answer: "Sim. Ele traz equilíbrio, segurança e a certeza de que tudo está sendo cuidado com carinho e atenção."
  },
  {
    question: "É possível começar o cuidado de forma gradual?",
    answer: "Sim. O cuidado pode ser introduzido aos poucos, respeitando o tempo e o conforto de cada família."
  },
  {
    question: "O cuidado interfere na liberdade do idoso?",
    answer: "Não. Pelo contrário, ele existe para preservar autonomia e ampliar o bem-estar."
  },
  {
    question: "O cuidado domiciliar substitui o convívio familiar?",
    answer: "Nunca. Ele fortalece o convívio, permitindo que os momentos juntos sejam mais leves e prazerosos."
  },
  {
    question: "Como saber se o cuidado domiciliar é a melhor escolha?",
    answer: "Quando a prioridade é conforto, alegria, segurança e permanência no lar, o cuidado domiciliar é um grande aliado."
  },
  {
    question: "Por que escolher a Aegis Care?",
    answer: "Porque cuidamos com presença, respeito e sensibilidade, onde a vida foi construída."
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

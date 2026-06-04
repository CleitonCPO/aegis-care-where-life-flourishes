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
    answer: "Na ausência do profissional, entramos em contato com a família para entender se desejam a substituição por um folguista. Quando o atendimento é integral, a reposição é acionada imediatamente. Para garantir o menor impacto possível na assistência, agilizamos o deslocamento do profissional, mantendo a continuidade do cuidado e a segurança do assistido."
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

const FAQSection = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": { "@type": "Answer", "text": item.answer }
    }))
  };

  return (
    <section id="faq" className="py-28 md:py-40 bg-[hsl(var(--cream))]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container-editorial">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4">
            <span className="eyebrow mb-6 block">Perguntas frequentes</span>
            <h2 className="font-display text-3xl md:text-[2.5rem] lg:text-[2.75rem] leading-[1.1] text-foreground mb-6">
              Esclarecimentos para decisões tranquilas.
            </h2>
            <p className="text-muted-foreground leading-[1.85] prose-justified">
              Reunimos as perguntas que escutamos com mais frequência das famílias.
              Se restar qualquer dúvida, fale diretamente com a nossa coordenação.
            </p>
          </div>

          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="space-y-0">
              {faqData.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-border first:border-t"
                >
                  <AccordionTrigger className="text-left font-display text-lg md:text-xl text-foreground hover:text-[hsl(var(--teal-deep))] py-7 hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base pb-7 leading-[1.85] prose-justified">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

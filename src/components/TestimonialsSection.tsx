import { Star, Quote } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Daniela Trivelli",
    text: "Desde o primeiro contato com a empresa até a contratação da Cuidadora não tive problemas. O enfermeiro Cleiton muito gentil e educado, selecionou uma cuidadora para a minha mãe auxiliá-la no dia do meu casamento. Que profissional maravilhosa que nos atendeu, foi carinhosa, atenciosa, educada, parecida com a família. Com certeza tivemos uma experiência agradável e claro que contratarei novamente quando precisar.",
    rating: 5,
  },
  {
    name: "Michele Valejo",
    text: "Empresa muito atenciosa. Demonstrou atenção com o paciente e familiares e superou nossas expectativas! Recomendo os serviços.",
    rating: 5,
  },
  {
    name: "Lorena Dias",
    text: "A Aegis Care trouxe leveza e tranquilidade para nossa casa. Meu pai voltou a sorrir.",
    rating: 5,
  },
  {
    name: "Ana Paula Martins",
    text: "Contratamos a Aegis Care para acompanhar meu pai em casa e a experiência foi muito positiva. O cuidado foi bem organizado, com atenção aos detalhes e boa comunicação com a família. Nos sentimos mais tranquilos durante todo o processo.",
    rating: 5,
  },
  {
    name: "Carlos Henrique Souza",
    text: "O que mais me chamou atenção na Aegis Care foi a seriedade com que o cuidado é conduzido. Sempre houve acompanhamento e orientação clara. Isso fez muita diferença para nós.",
    rating: 5,
  },
  {
    name: "Fernanda Lopes",
    text: "A equipe da Aegis Care demonstrou respeito e cuidado desde o primeiro contato. O atendimento em casa trouxe conforto para minha mãe e mais segurança para a família.",
    rating: 5,
  },
  {
    name: "Marcos Almeida",
    text: "Tivemos uma boa experiência com a Aegis Care. O cuidador foi atencioso, pontual e sempre alinhado com o que foi combinado. Sentimos profissionalismo e compromisso.",
    rating: 5,
  },
  {
    name: "Juliana Ribeiro",
    text: "A Aegis Care nos ajudou em um momento delicado. O cuidado foi feito com calma, respeito e orientação adequada. Isso trouxe mais tranquilidade para todos.",
    rating: 5,
  },
  {
    name: "Ricardo Nogueira",
    text: "Gostamos muito da forma como a Aegis Care trabalha. Não é apenas presença do cuidador, existe acompanhamento e preocupação real com o bem-estar do assistido.",
    rating: 5,
  },
  {
    name: "Patrícia Fonseca",
    text: "O atendimento da Aegis Care foi correto e humano. A sensação de ter alguém acompanhando o cuidado de perto nos deu mais confiança no dia a dia.",
    rating: 5,
  },
  {
    name: "Roberto Mendonça",
    text: "Quando a Bruna nos atendeu pela primeira vez, senti que estávamos em boas mãos. Ela ouviu tudo sobre a rotina da minha mãe, fez perguntas que nem a gente tinha pensado e transmitiu uma segurança enorme. O Cleiton acompanhou todo o processo e sempre ligava para saber se estava tudo bem. Nunca imaginei que uma empresa pudesse cuidar com tanto carinho.",
    rating: 5,
  },
  {
    name: "Sandra Regina Oliveira",
    text: "Meu sogro é bem difícil de lidar, mas a equipe da Aegis Care foi paciente desde o primeiro dia. O Cleiton foi pessoalmente na nossa casa para entender a situação e a Bruna encontrou uma cuidadora que conseguiu conquistar a confiança dele. Hoje ele até espera ansioso pelos dias de atendimento. Somos muito gratos.",
    rating: 5,
  },
  {
    name: "Eduardo Santana Lima",
    text: "Estava receoso em contratar cuidadores para minha avó, mas o acolhimento que recebemos foi surpreendente. Na primeira ligação, a Bruna já me passou tranquilidade explicando todo o processo. O Cleiton fez a visita de avaliação e foi super respeitoso com minha avó. Me senti amparado do início ao fim.",
    rating: 5,
  },
  {
    name: "Mariana Costa Ferreira",
    text: "O que diferencia a Aegis Care é o lado humano. Liguei chorando no primeiro contato, preocupada com meu pai que tinha acabado de receber um diagnóstico difícil. A Bruna me ouviu por quase uma hora, me acalmou e explicou como poderiam nos ajudar. O Cleiton foi incrível na coordenação do cuidado. Hoje meu pai tem qualidade de vida e nós, paz no coração.",
    rating: 5,
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

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-20 lg:py-28 bg-cream overflow-hidden">
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
            Depoimentos
          </motion.span>
          <motion.h2 
            variants={itemVariants}
            className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground font-bold mb-6"
          >
            O que dizem as{" "}
            <span className="text-gradient">famílias</span>
          </motion.h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-6xl mx-auto"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3">
                  <motion.div 
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="relative bg-card rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-card transition-all duration-300 group flex flex-col h-full min-h-[280px] md:min-h-[320px]"
                  >
                    {/* Quote icon */}
                    <div className="absolute -top-3 left-6 md:-top-4 md:left-8">
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        className="w-7 h-7 md:w-8 md:h-8 rounded-full gradient-cta flex items-center justify-center shadow-soft"
                      >
                        <Quote className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary-foreground" />
                      </motion.div>
                    </div>

                    <p className="font-body text-muted-foreground leading-relaxed mb-6 pt-3 md:pt-4 flex-grow text-sm">
                      "{testimonial.text}"
                    </p>

                    <div className="mt-auto">
                      {/* Stars */}
                      <div className="flex gap-1 mb-3">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 text-accent fill-accent"
                          />
                        ))}
                      </div>
                      
                      {/* Name */}
                      <p className="font-display font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation arrows */}
            <div className="flex justify-center gap-3 mt-6 md:mt-8">
              <CarouselPrevious className="static translate-y-0 bg-card hover:bg-secondary hover:text-primary-foreground border-border shadow-soft min-w-[48px] min-h-[48px] touch-manipulation" />
              <CarouselNext className="static translate-y-0 bg-card hover:bg-secondary hover:text-primary-foreground border-border shadow-soft min-w-[48px] min-h-[48px] touch-manipulation" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

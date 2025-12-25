import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
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
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-20 lg:py-28 bg-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-teal-light rounded-full text-secondary text-sm font-semibold mb-4">
            Depoimentos
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground font-bold mb-6">
            O que dizem as{" "}
            <span className="text-gradient">famílias</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 group flex flex-col h-full min-h-[320px]">
                    {/* Quote icon */}
                    <div className="absolute -top-4 left-8">
                      <div className="w-8 h-8 rounded-full gradient-cta flex items-center justify-center shadow-soft">
                        <Quote className="w-4 h-4 text-primary-foreground" />
                      </div>
                    </div>

                    <p className="font-body text-muted-foreground leading-relaxed mb-6 pt-4 flex-grow text-sm md:text-base">
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
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation arrows */}
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="static translate-y-0 bg-card hover:bg-secondary hover:text-primary-foreground border-border shadow-soft" />
              <CarouselNext className="static translate-y-0 bg-card hover:bg-secondary hover:text-primary-foreground border-border shadow-soft" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

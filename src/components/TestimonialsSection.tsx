import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Daniela Trivelli",
    text: "Desde o primeiro contato com a empresa até a contratação da Cuidadora não tive problemas. O enfermeiro Cleiton muito gentil e educado, selecionou uma cuidadora para a minha mãe auxiliá-la no dia do meu casamento. Que profissional maravilhosa que nos atendeu, foi carinhosa, atenciosa, educada, parecida com a família.",
  },
  {
    name: "Janete Bolgheroni",
    text: "Foi uma boa experiência, solicitei uma profissional e fui atendida prontamente. A cuidadora indicada foi ótima, educada, pontual e atenciosa.",
  },
  {
    name: "Michele Valejo",
    text: "Empresa muito atenciosa. Demonstrou atenção com o paciente e familiares e superou nossas expectativas. Recomendo os serviços.",
  },
  {
    name: "Lorena Dias",
    text: "A Aegis Care trouxe leveza e tranquilidade para nossa casa. Meu pai voltou a sorrir.",
  },
  {
    name: "Ana Paula Martins",
    text: "Contratamos a Aegis Care para acompanhar meu pai em casa e a experiência foi muito positiva. O cuidado foi bem organizado, com atenção aos detalhes e boa comunicação com a família.",
  },
  {
    name: "Mariana Costa Ferreira",
    text: "O que diferencia a Aegis Care é o lado humano. Liguei chorando no primeiro contato. A Bruna me ouviu, me acalmou e explicou como poderiam nos ajudar. Hoje meu pai tem qualidade de vida e nós, paz no coração.",
  },
  {
    name: "Sandra Regina Oliveira",
    text: "Meu sogro é bem difícil de lidar, mas a equipe da Aegis Care foi paciente desde o primeiro dia. Hoje ele até espera ansioso pelos dias de atendimento. Somos muito gratos.",
  },
  {
    name: "Eduardo Santana Lima",
    text: "Estava receoso em contratar cuidadores para minha avó, mas o acolhimento que recebemos foi surpreendente. Me senti amparado do início ao fim.",
  },
];

const TestimonialsSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);
  const [snapCount, setSnapCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    const update = () => {
      setSelected(api.selectedScrollSnap());
      setSnapCount(api.scrollSnapList().length);
    };
    update();
    api.on("select", update);
    api.on("reInit", update);
    return () => {
      api.off("select", update);
      api.off("reInit", update);
    };
  }, [api]);

  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container-editorial">
        <div className="max-w-3xl mb-12">
          <span className="eyebrow mb-6 block">Famílias atendidas</span>
          <h2 className="font-display text-3xl md:text-[2.75rem] lg:text-5xl leading-[1.1] text-foreground">
            Relatos das Famílias
          </h2>
        </div>

        <Carousel opts={{ align: "start", loop: true }} setApi={setApi} className="w-full">
          <CarouselContent className="-ml-6 md:-ml-10">
            {testimonials.map((t, index) => (
              <CarouselItem key={index} className="pl-6 md:pl-10 basis-[88%] sm:basis-1/2 lg:basis-1/3">
                <figure className="flex flex-col h-full border-t border-border pt-10">
                  <span className="font-display text-5xl text-[hsl(var(--gold))] leading-none mb-6">"</span>
                  <blockquote className="font-display text-lg md:text-xl text-foreground leading-[1.5] mb-8 flex-grow">
                    {t.text}
                  </blockquote>
                  <figcaption className="text-xs tracking-[0.25em] uppercase text-[hsl(var(--teal-deep))] font-semibold">
                    {t.name}
                  </figcaption>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex justify-center gap-1 mt-8" aria-label="Navegação dos relatos">
            {Array.from({ length: snapCount }, (_, index) => (
              <Button
                key={index}
                type="button"
                variant="ghost"
                size="icon"
                aria-label={`Ir para o relato ${index + 1}`}
                aria-current={selected === index ? "true" : undefined}
                onClick={() => api?.scrollTo(index)}
                className="h-11 w-8"
              >
                <span className={`block h-1.5 rounded-full transition-all ${selected === index ? "w-6 bg-primary" : "w-1.5 bg-muted-foreground"}`} />
              </Button>
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;

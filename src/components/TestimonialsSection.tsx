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
  return (
    <section id="depoimentos" className="py-28 md:py-40 bg-background overflow-hidden">
      <div className="container-editorial">
        <div className="max-w-3xl mb-20">
          <span className="eyebrow mb-6 block">Famílias atendidas</span>
          <h2 className="font-display text-3xl md:text-[2.75rem] lg:text-5xl leading-[1.1] text-foreground">
            Relatos que descrevem melhor do que palavras o que entregamos.
          </h2>
        </div>

        <Carousel opts={{ align: "start", loop: true }} className="w-full">
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

          <div className="flex justify-end gap-3 mt-12">
            <CarouselPrevious className="static translate-y-0 bg-background border border-border hover:bg-[hsl(var(--navy-deep))] hover:text-white hover:border-[hsl(var(--navy-deep))] rounded-sm min-w-[48px] min-h-[48px]" />
            <CarouselNext className="static translate-y-0 bg-background border border-border hover:bg-[hsl(var(--navy-deep))] hover:text-white hover:border-[hsl(var(--navy-deep))] rounded-sm min-w-[48px] min-h-[48px]" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;

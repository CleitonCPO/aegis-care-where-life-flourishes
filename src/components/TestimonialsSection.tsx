import { Star, Quote } from "lucide-react";

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
    name: "Família Atendida",
    text: "A Aegis Care trouxe leveza e tranquilidade para nossa casa. Meu pai voltou a sorrir.",
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

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 group flex flex-col"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 rounded-full gradient-cta flex items-center justify-center shadow-soft">
                  <Quote className="w-4 h-4 text-primary-foreground" />
                </div>
              </div>

              <p className="font-body text-muted-foreground leading-relaxed mb-6 pt-4 flex-grow">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    text: "A Aegis Care trouxe leveza e tranquilidade para nossa casa. Meu pai voltou a sorrir.",
    rating: 5,
  },
  {
    text: "Sentimos que cuidam da nossa história, não apenas da rotina.",
    rating: 5,
  },
  {
    text: "É cuidado com alma.",
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

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 group"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 rounded-full gradient-cta flex items-center justify-center shadow-soft">
                  <Quote className="w-4 h-4 text-primary-foreground" />
                </div>
              </div>

              <p className="font-display text-lg text-foreground italic leading-relaxed mb-6 pt-4">
                "{testimonial.text}"
              </p>

              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-accent fill-accent"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

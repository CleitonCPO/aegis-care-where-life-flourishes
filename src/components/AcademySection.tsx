import { Button } from "@/components/ui/button";
import academyLogo from "@/assets/logotipo-academy.svg.asset.json";
import academyPhoto from "@/assets/academy-profissional.jpg";

const AcademySection = () => (
  <section id="academy" aria-labelledby="academy-title" className="bg-academy-surface border-y border-academy-gold/30 py-12 md:py-16">
    <div className="container-editorial grid md:grid-cols-12 gap-8 lg:gap-14 items-center">
      <div className="md:col-span-5">
        <img src={academyLogo.url} alt="Academy Aegis Care" width={864} height={331} loading="lazy" decoding="async" className="w-64 max-w-full h-auto mb-7" />
        <span className="eyebrow block text-academy-gold mb-4">Curso gratuito</span>
        <h2 id="academy-title" className="font-display text-3xl md:text-4xl text-academy mb-5 tracking-normal">Faça parte da Academy</h2>
        <p className="text-muted-foreground leading-relaxed prose-justified mb-7">Conhecimento também é cuidado. Acesse o curso gratuito da Academy Aegis Care e dê o próximo passo na sua jornada como cuidador.</p>
        <Button asChild variant="academy" size="lg" className="w-full sm:w-auto"><a href="https://www.academy.aegiscare.com.br/" target="_blank" rel="noopener noreferrer">Acessar o curso gratuito<span className="sr-only"> (abre em nova aba)</span></a></Button>
      </div>
      <figure className="md:col-span-7 border-b-4 border-academy-gold">
        <picture className="block overflow-hidden rounded-sm">
          <img src={academyPhoto} alt="Imagem ilustrativa de uma cuidadora olhando para a câmera enquanto utiliza uma plataforma de cursos no notebook" width={1536} height={1024} loading="lazy" decoding="async" className="w-full aspect-[3/2] object-cover" />
        </picture>
      </figure>
    </div>
  </section>
);

export default AcademySection;
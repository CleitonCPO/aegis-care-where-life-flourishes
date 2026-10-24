import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import academyPhoto from "@/assets/academy-profissional.jpg";
import academyPhotoWebp from "@/assets/academy-profissional.webp";
import academyPhotoMobile from "@/assets/academy-profissional-mobile.webp";

const AcademySection = () => (
  <section id="academy" aria-labelledby="academy-title" className="academy-band bg-academy text-academy-foreground">
    <div className="academy-stage relative overflow-hidden">
      <picture className="academy-photo block overflow-hidden">
        <source type="image/webp" srcSet={`${academyPhotoMobile} 768w, ${academyPhotoWebp} 1536w`} sizes="100vw" />
        <img src={academyPhoto} alt="Imagem ilustrativa de uma cuidadora olhando para a câmera enquanto utiliza uma plataforma de cursos no notebook" width={1536} height={1024} loading="lazy" decoding="async" className="academy-photo-image" />
      </picture>
      <div className="academy-shade pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="container-editorial relative z-10">
        <div className="academy-copy pt-10 md:pt-16 pb-28 md:pb-32 max-w-md">
          <span className="eyebrow academy-kicker mb-5">Formação para cuidadores</span>
          <h2 id="academy-title" className="font-display text-4xl md:text-5xl text-academy-foreground mb-6 leading-tight">Faça parte<br />da Academy</h2>
          <p className="text-academy-foreground/85 text-base md:text-lg leading-relaxed text-justify mb-8 max-w-sm">Um novo passo na sua jornada de cuidado. Aprenda com a Academy Aegis Care e leve mais conhecimento para a vida de quem você cuida.</p>
          <div className="border-t border-academy-foreground/20 pt-6 max-w-sm">
            <span className="academy-kicker block text-sm mb-4">Seu próximo passo começa com um curso gratuito.</span>
            <Button asChild variant="academy" size="lg" className="academy-course-link w-full sm:w-auto gap-3 text-sm whitespace-normal h-auto min-h-12 py-3 px-6">
              <a href="https://academy.aegiscare.com.br/" target="_blank" rel="noopener noreferrer">Acessar o curso gratuito<ExternalLink aria-hidden="true" /><span className="sr-only"> (abre em nova aba)</span></a>
            </Button>
          </div>
        </div>
      </div>
      <img src="/logotipo-academy.svg" alt="Academy Aegis Care" width={864} height={331} loading="lazy" decoding="async" className="academy-watermark" />
    </div>
  </section>
);

export default AcademySection;

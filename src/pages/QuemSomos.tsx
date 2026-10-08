import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Heart, ShieldCheck, Sprout } from "lucide-react";
import { useWhatsAppLink } from "@/lib/region";
import aboutImage from "@/assets/about-aegis-premium.jpg";
import aboutMobile from "@/assets/about-aegis-premium-mobile.webp";
import aboutOptimized from "@/assets/about-aegis-premium-optimized.webp";
import cleitonImg from "@/assets/cleiton-oliveira-consultorio.jpg";
import cleitonMobile from "@/assets/cleiton-oliveira-consultorio-mobile.webp";
import cleitonOptimized from "@/assets/cleiton-oliveira-consultorio-optimized.webp";

const commitments = [
  "Nunca mentiremos para parecer melhores.",
  "Nunca cobraremos fora da realidade ou exploraremos a dor de quem confia.",
  "Nunca trataremos quem cuida como descartável, nem quem é cuidado.",
  "Nunca deixaremos a família no escuro.",
  "Nunca colocaremos o lucro acima do cuidado.",
];
const stories = [
  { icon: Sprout, text: "Uma senhora de 92 anos, com Alzheimer, segue caminhando e mantendo sua autonomia." },
  { icon: ShieldCheck, text: "Um senhor de 62 anos, com hemiplegia, voltou a andar e saiu da sonda." },
  { icon: Heart, text: "Uma mulher em depressão voltou a sorrir, e descobriu que cuidadora pode ser amiga para a vida." },
];
const values = ["Justiça", "Transparência", "Humanização", "Empatia", "Cuidado", "Afeto"];

const QuemSomos = () => {
  const whatsAppLink = useWhatsAppLink();
  return (
    <>
      <Helmet>
        <title>Quem somos | Aegis Care</title>
        <meta name="description" content="Uma empresa de humanos, para humanos. Conheça a origem da Aegis Care, nossa essência e os compromissos que tornam o cuidado em casa mais humano." />
        <link rel="canonical" href="https://www.aegiscare.com.br/quem-somos" />
        <meta property="og:title" content="Quem somos | Aegis Care" />
        <meta property="og:description" content="Uma empresa de humanos, para humanos. Nossa história, nossos valores e nosso compromisso com a vida no lar." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.aegiscare.com.br/quem-somos" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="care-page min-h-screen bg-background">
        <Header />
        <main>
          <section className="relative isolate overflow-hidden bg-petroleum text-petroleum-foreground">
            <picture className="absolute inset-0 -z-20">
              <source type="image/webp" srcSet={`${aboutMobile} 768w, ${aboutOptimized} 1080w`} sizes="100vw" />
              <img src={aboutImage} alt="Idoso lendo no próprio lar, acompanhado por uma cuidadora" className="h-full w-full object-cover object-[center_40%]" width={1400} height={1600} loading="eager" fetchPriority="high" />
            </picture>
            <div className="care-photo-overlay absolute inset-0 -z-10" />
            <div className="container-editorial pt-36 pb-20 md:pt-44 md:pb-24">
              <div className="max-w-2xl animate-fade-in">
                <span className="block text-care-accent text-xs uppercase tracking-[0.2em] mb-6">Aegis Care</span>
                <h1 className="font-display text-4xl md:text-6xl text-petroleum-foreground mb-6">Quem somos</h1>
                <p className="font-display text-2xl md:text-3xl leading-snug max-w-lg">Uma empresa de humanos, para humanos.</p>
                <span className="block h-px w-16 bg-care-accent mt-10" aria-hidden="true" />
              </div>
            </div>
          </section>

          <ScrollReveal>
            <section className="py-14 md:py-20 bg-background" aria-labelledby="origem-title">
              <div className="container-editorial grid md:grid-cols-12 gap-10 lg:gap-16 items-center">
                <div className="md:col-span-7">
                  <span className="eyebrow text-emerald block mb-4">Nossa história</span>
                  <h2 id="origem-title" className="font-display text-3xl md:text-4xl text-petroleum mb-7">A origem da Aegis Care</h2>
                  <div className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed prose-justified">
                    <p>Tudo começou depois de anos à frente de equipes de cuidado domiciliar. Vimos o lucro falando mais alto que as pessoas: cuidadores tratados como descartáveis, famílias deixadas no escuro, idosos perdendo autonomia por falta de um plano de cuidado de verdade.</p>
                    <p>Decidimos fazer diferente. Fundamos a Aegis Care para provar que é possível cuidar com critério clínico e coração, com transparência, justiça e afeto em cada etapa.</p>
                  </div>
                </div>
                <figure className="md:col-span-5 max-w-sm w-full mx-auto md:ml-auto">
                  <picture className="block overflow-hidden rounded-sm border-b-4 border-emerald">
                    <source type="image/webp" srcSet={`${cleitonMobile} 768w, ${cleitonOptimized} 1086w`} sizes="(min-width: 768px) 33vw, 90vw" />
                    <img src={cleitonImg} alt="Cleiton Oliveira, fundador da Aegis Care" className="w-full aspect-[4/5] object-cover object-top" loading="lazy" decoding="async" width={480} height={600} />
                  </picture>
                  <figcaption className="mt-4 text-sm text-muted-foreground"><span className="block text-petroleum font-medium">Cleiton Oliveira</span>Enfermeiro · Gerontólogo · Fundador</figcaption>
                </figure>
              </div>
            </section>

            <section className="py-14 md:py-20 bg-petroleum text-petroleum-foreground" aria-label="Nossa essência">
              <div className="container-editorial">
                <span className="eyebrow block text-care-accent mb-6">Nossa essência</span>
                <h2 className="font-display text-3xl md:text-4xl leading-snug text-petroleum-foreground max-w-4xl border-l-2 border-care-accent pl-6 md:pl-8">Cuidar é, antes de tudo, manter intacto aquilo que cada vida construiu.</h2>
                <div className="grid md:grid-cols-2 gap-9 md:gap-16 mt-12">
                  <div className="border-t border-petroleum-foreground/20 pt-6">
                    <h3 className="font-display text-2xl text-care-accent mb-4">Missão</h3>
                    <p className="text-petroleum-foreground/85 leading-relaxed prose-justified">Sustentar a continuidade da vida no lar, com presença humana, critério clínico e respeito profundo pela história de cada pessoa cuidada.</p>
                  </div>
                  <div className="border-t border-petroleum-foreground/20 pt-6">
                    <h3 className="font-display text-2xl text-care-accent mb-4">Visão</h3>
                    <p className="text-petroleum-foreground/85 leading-relaxed prose-justified">Ser referência em assistência domiciliar humana, reconhecida pela excelência clínica, pela transparência e pelo acolhimento que transforma o cuidado em tranquilidade para a família.</p>
                  </div>
                </div>
                <div className="mt-10 border-t border-petroleum-foreground/20 pt-7">
                  <h3 className="text-care-accent font-display text-xl mb-4">Valores</h3>
                  <p className="flex flex-wrap gap-x-3 gap-y-2 text-base md:text-lg">{values.map((value, index) => <span key={value}>{index > 0 && <span className="text-care-accent mr-3" aria-hidden="true">·</span>}{value}</span>)}</p>
                </div>
              </div>
            </section>

            <section className="py-14 md:py-20 bg-care-surface" aria-labelledby="compromissos-title">
              <div className="container-editorial grid md:grid-cols-12 gap-8 lg:gap-16">
                <div className="md:col-span-4">
                  <ShieldCheck className="w-9 h-9 text-emerald mb-5" strokeWidth={1.25} aria-hidden="true" />
                  <h2 id="compromissos-title" className="font-display text-3xl md:text-4xl text-petroleum">O que nunca faremos</h2>
                </div>
                <ol className="md:col-span-8 divide-y divide-emerald/20">
                  {commitments.map((text, index) => <li key={text} className="flex gap-5 py-5 first:pt-0"><span className="font-display text-emerald text-sm pt-1 tabular-nums" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><p className="text-petroleum text-lg leading-relaxed">{text}</p></li>)}
                </ol>
              </div>
            </section>

            <section className="py-14 md:py-20 bg-background" aria-labelledby="historias-title">
              <div className="container-editorial">
                <span className="eyebrow block text-emerald mb-4">Presença que transforma</span>
                <h2 id="historias-title" className="font-display text-3xl md:text-4xl text-petroleum mb-10">Histórias que nos orgulham</h2>
                <div className="grid md:grid-cols-3 gap-8 md:gap-10">
                  {stories.map(({ icon: Icon, text }) => <article key={text} className="border-t border-emerald/30 pt-6"><Icon className="w-7 h-7 text-emerald mb-5" strokeWidth={1.25} aria-hidden="true" /><p className="font-display text-xl text-petroleum leading-relaxed">{text}</p></article>)}
                </div>
              </div>
            </section>

            <section className="py-14 md:py-16 bg-petroleum text-petroleum-foreground">
              <div className="container-editorial flex flex-col md:flex-row md:items-center md:justify-between gap-7">
                <h2 className="font-display text-3xl md:text-4xl text-petroleum-foreground max-w-xl">Quer fazer parte dessa história?</h2>
                <Button variant="care" size="xl" asChild className="w-fit shrink-0">
                  <a href={whatsAppLink("https://api.whatsapp.com/send/?phone=5511920067183&text=Ol%C3%A1%20Aegis%20Care%2C%20eu%20gostaria%20de%20um%20or%C3%A7amento%20de%20cuidador%20para%20meu%20familiar.&type=phone_number&app_absent=0")} target="_blank" rel="noopener noreferrer">Falar com a equipe</a>
                </Button>
              </div>
            </section>
          </ScrollReveal>
        </main>
        <Footer />
      </div>
    </>
  );
};
export default QuemSomos;

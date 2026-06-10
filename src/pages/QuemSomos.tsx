import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import aboutImage from "@/assets/about-aegis-premium.webp";
import cleitonPhoto from "@/assets/cleiton-oliveira-optimized.webp";

const pillars = [
  {
    title: "Critério clínico",
    description:
      "Avaliação individual conduzida por enfermeiros antes de qualquer cuidador entrar em sua casa.",
  },
  {
    title: "Presença humana",
    description:
      "Profissionais selecionados a dedo para a história, o ritmo e a personalidade de cada família.",
  },
  {
    title: "Discrição absoluta",
    description:
      "Operação silenciosa, organizada e previsível. O lar permanece um lar, nunca um hospital.",
  },
];

const standards = [
  "Avaliação clínica individual",
  "Supervisão permanente de enfermagem",
  "Curadoria pessoal de cada profissional",
  "Comunicação direta com a família",
];

const QuemSomos = () => {
  return (
    <>
      <Helmet>
        <title>Quem Somos | Aegis Care</title>
        <meta
          name="description"
          content="Assistência domiciliar privada para famílias que valorizam discrição, critério clínico e continuidade da vida em casa."
        />
        <link rel="canonical" href="https://www.aegiscare.com.br/quem-somos" />
        <meta property="og:title" content="Quem Somos | Aegis Care" />
        <meta property="og:description" content="Assistência domiciliar privada com critério clínico, presença humana e discrição." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.aegiscare.com.br/quem-somos" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main>
          {/* HERO — quiet, editorial */}
          <section className="pt-40 pb-24 md:pt-48 md:pb-32 bg-background">
            <div className="container-editorial">
              <div className="max-w-3xl">
                <span className="eyebrow mb-6 block">A Aegis Care</span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-foreground mb-8">
                  Uma estrutura privada de cuidado, construída para preservar a vida em casa.
                </h1>
                <p className="text-lg text-muted-foreground leading-[1.85] prose-justified max-w-2xl">
                  Atendemos famílias que entendem o cuidado como continuidade da história, e não como interrupção dela. Discrição, coordenação clínica e profissionais selecionados, dentro do lar.
                </p>
              </div>
            </div>
          </section>

          {/* IMAGE + ESSENCE */}
          <section className="pb-28 md:pb-40">
            <div className="container-editorial">
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                <div className="lg:col-span-7">
                  <div className="relative overflow-hidden rounded-sm shadow-card">
                    <img
                      src={aboutImage}
                      alt="Cuidado domiciliar humanizado em ambiente residencial"
                      className="w-full h-[460px] md:h-[600px] object-cover"
                      loading="eager"
                      width={1400}
                      height={1600}
                    />
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <span className="eyebrow-gold eyebrow mb-5 block">Essência</span>
                  <h2 className="font-display text-3xl md:text-[2.25rem] leading-[1.15] text-foreground mb-6">
                    O lar é onde a identidade se preserva.
                  </h2>
                  <p className="text-muted-foreground leading-[1.85] prose-justified">
                    Levamos até ele a estrutura assistencial que protege, organiza e acolhe. Cuidamos para que a rotina continue, com segurança, sem perder o que ela tem de mais íntimo.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* PRINCÍPIOS */}
          <section className="py-28 md:py-36 bg-[hsl(var(--cream))]">
            <div className="container-editorial">
              <div className="max-w-2xl mb-16 md:mb-20">
                <span className="eyebrow mb-5 block">Princípios</span>
                <h2 className="font-display text-3xl md:text-[2.5rem] leading-[1.15] text-foreground">
                  Três compromissos que definem como cuidamos.
                </h2>
              </div>
              <div className="grid md:grid-cols-3 gap-10 md:gap-14">
                {pillars.map((p, i) => (
                  <div key={p.title}>
                    <div className="flex items-baseline gap-5 mb-4">
                      <span className="font-display text-[hsl(var(--teal-deep))] text-2xl tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display text-2xl text-foreground">{p.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-[1.85] pl-10 prose-justified">
                      {p.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* PADRÕES */}
          <section className="py-28 md:py-36 bg-background">
            <div className="container-editorial">
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
                <div className="lg:col-span-5">
                  <span className="eyebrow mb-5 block">Como operamos</span>
                  <h2 className="font-display text-3xl md:text-[2.25rem] leading-[1.15] text-foreground">
                    Um padrão único, aplicado em cada residência.
                  </h2>
                </div>
                <div className="lg:col-span-7">
                  <ul className="divide-y divide-border">
                    {standards.map((s) => (
                      <li
                        key={s}
                        className="py-5 flex items-baseline gap-5 text-foreground font-display text-lg md:text-xl"
                      >
                        <span className="h-px w-6 bg-[hsl(var(--gold))]" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* FUNDADOR — convite discreto */}
          <section className="py-28 md:py-36 bg-[hsl(var(--cream))]">
            <div className="container-editorial">
              <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
                <div className="lg:col-span-5">
                  <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-card">
                    <img
                      src={cleitonPhoto}
                      alt="Cleiton Oliveira — fundador da Aegis Care"
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                      width={480}
                      height={600}
                    />
                  </div>
                </div>
                <div className="lg:col-span-7">
                  <span className="eyebrow-gold eyebrow mb-5 block">Quem conduz</span>
                  <h2 className="font-display text-3xl md:text-[2.5rem] leading-[1.12] text-foreground mb-6">
                    Cleiton Oliveira
                  </h2>
                  <p className="text-xs tracking-[0.25em] uppercase text-[hsl(var(--teal-deep))] font-semibold mb-6">
                    Enfermeiro · Gerontólogo · Fundador
                  </p>
                  <p className="text-muted-foreground leading-[1.85] prose-justified mb-8">
                    Conduz pessoalmente a coordenação assistencial e a seleção de cada profissional que entra em uma casa atendida pela Aegis Care.
                  </p>
                  <Link
                    to="/fundador"
                    className="inline-flex items-center gap-3 text-[hsl(var(--navy-deep))] text-xs tracking-[0.25em] uppercase font-medium border-b border-[hsl(var(--gold))] pb-1 hover:text-[hsl(var(--teal-deep))] transition-colors group"
                  >
                    Conheça a trajetória
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* CTA — minimal */}
          <section className="py-28 md:py-36 gradient-deep">
            <div className="container-editorial text-center max-w-3xl mx-auto">
              <h2 className="font-display text-3xl md:text-[2.5rem] leading-[1.15] text-primary-foreground mb-6">
                Sob a égide da Aegis, a história continua em casa.
              </h2>
              <p className="text-primary-foreground/75 leading-[1.85] mb-10">
                Atendemos um número restrito de famílias por vez. Conversamos pessoalmente antes de qualquer proposta.
              </p>
              <a
                href="https://api.whatsapp.com/send/?phone=5511920067183&text=Ol%C3%A1%20Aegis%20Care%2C%20eu%20gostaria%20de%20um%20or%C3%A7amento%20de%20cuidador%20para%20meu%20familiar.&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-4 bg-[hsl(var(--turquoise))] text-[hsl(var(--navy-deep))] text-xs tracking-[0.3em] uppercase font-semibold rounded-sm hover:bg-[hsl(var(--turquoise))]/90 transition-colors"
              >
                Conversar com a Aegis
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default QuemSomos;

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import cleitonPhoto from "@/assets/cleiton-oliveira-optimized.webp";
import { useWhatsAppForm } from "@/context/WhatsAppFormContext";

const trajetoria = [
  {
    period: "2020",
    title: "Linha de frente, COVID-19",
    description:
      "Atuação em hospital de referência em São Paulo, ao lado de pacientes críticos em UTI.",
  },
  {
    period: "Especialização",
    title: "UTI · Gerontologia · Liderança",
    description:
      "Formação contínua para unir excelência clínica e cuidado individualizado à terceira idade.",
  },
  {
    period: "Hoje",
    title: "Coordenação da Aegis Care",
    description:
      "Conduz pessoalmente a curadoria de cada caso e a seleção dos profissionais que entram em cada lar.",
  },
];

const beliefs = [
  {
    title: "O lar como centro",
    description:
      "O cuidado deve acontecer onde a vida foi construída, cercado por memórias e pessoas amadas.",
  },
  {
    title: "Cada história é única",
    description:
      "Não existe cuidado padronizado. Existe escuta, leitura individual e ajuste fino.",
  },
  {
    title: "A família junto",
    description:
      "Quando cuidamos de alguém, cuidamos também da tranquilidade de quem o ama.",
  },
];

const Fundador = () => {
  const { open: openWhatsAppForm } = useWhatsAppForm();
  return (
    <>
      <Helmet>
        <title>Cleiton Oliveira — Fundador | Aegis Care</title>
        <meta
          name="description"
          content="Enfermeiro, gerontólogo e fundador da Aegis Care. Conduz pessoalmente cada caso atendido pela empresa."
        />
        <link rel="canonical" href="https://www.aegiscare.com.br/fundador" />
        <meta property="og:title" content="Cleiton Oliveira — Fundador | Aegis Care" />
        <meta property="og:description" content="Enfermeiro, gerontólogo e fundador da Aegis Care." />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://www.aegiscare.com.br/fundador" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main>
          {/* HERO */}
          <section className="pt-40 pb-28 md:pt-48 md:pb-36 bg-background">
            <div className="container-editorial">
              <Link
                to="/quem-somos"
                className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-muted-foreground hover:text-[hsl(var(--navy-deep))] transition-colors mb-12"
              >
                <ArrowLeft className="w-4 h-4" />
                Quem Somos
              </Link>

              <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                <div className="lg:col-span-5">
                  <div className="relative">
                    <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-card">
                      <img
                        src={cleitonPhoto}
                        alt="Cleiton Oliveira — fundador da Aegis Care"
                        className="w-full h-full object-cover object-top"
                        loading="eager"
                        width={480}
                        height={600}
                      />
                    </div>
                    <div className="absolute -bottom-4 -left-4 px-5 py-2 bg-[hsl(var(--navy-deep))] text-[hsl(var(--turquoise))] text-[0.65rem] tracking-[0.32em] uppercase">
                      Fundador
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <span className="eyebrow-gold eyebrow mb-6 block">Quem conduz</span>
                  <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-foreground mb-6">
                    Cleiton Oliveira
                  </h1>
                  <p className="text-xs tracking-[0.25em] uppercase text-[hsl(var(--teal-deep))] font-semibold mb-8">
                    Enfermeiro · Especialista em UTI · Gerontólogo
                  </p>
                  <p className="text-lg text-muted-foreground leading-[1.85] prose-justified">
                    Construiu a Aegis Care a partir de uma convicção: o cuidado domiciliar precisa unir critério clínico, sensibilidade humana e uma estrutura discreta capaz de sustentar famílias em momentos delicados.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* QUOTE */}
          <section className="py-28 md:py-36 gradient-deep">
            <div className="container-editorial max-w-4xl mx-auto text-center">
              <span className="block h-px w-12 bg-[hsl(var(--gold))] mx-auto mb-10" />
              <blockquote className="font-display text-2xl md:text-3xl lg:text-[2.25rem] leading-[1.35] text-primary-foreground italic">
                "O cuidado deve permanecer onde a vida foi construída — no lar, cercado pelas pessoas e memórias que formaram uma história."
              </blockquote>
              <p className="mt-10 text-xs tracking-[0.32em] uppercase text-primary-foreground/70">
                Cleiton Oliveira
              </p>
            </div>
          </section>

          {/* TRAJETÓRIA */}
          <section className="py-28 md:py-36 bg-background">
            <div className="container-editorial">
              <div className="max-w-2xl mb-16 md:mb-20">
                <span className="eyebrow mb-5 block">Trajetória</span>
                <h2 className="font-display text-3xl md:text-[2.25rem] leading-[1.15] text-foreground">
                  Uma carreira construída entre a UTI e a casa das famílias.
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-10 md:gap-14">
                {trajetoria.map((t) => (
                  <div key={t.title}>
                    <p className="eyebrow-gold eyebrow mb-4">{t.period}</p>
                    <h3 className="font-display text-xl md:text-2xl text-foreground mb-4">
                      {t.title}
                    </h3>
                    <p className="text-muted-foreground leading-[1.85] prose-justified">
                      {t.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CONVICÇÕES */}
          <section className="py-28 md:py-36 bg-[hsl(var(--cream))]">
            <div className="container-editorial">
              <div className="max-w-2xl mb-16 md:mb-20">
                <span className="eyebrow mb-5 block">Convicções</span>
                <h2 className="font-display text-3xl md:text-[2.25rem] leading-[1.15] text-foreground">
                  Princípios que orientam cada decisão da Aegis Care.
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-10 md:gap-14">
                {beliefs.map((b, i) => (
                  <div key={b.title}>
                    <div className="flex items-baseline gap-5 mb-4">
                      <span className="font-display text-[hsl(var(--teal-deep))] text-2xl tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display text-2xl text-foreground">{b.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-[1.85] pl-10 prose-justified">
                      {b.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-28 md:py-36 bg-background">
            <div className="container-editorial max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-[2.5rem] leading-[1.15] text-foreground mb-6">
                Conversemos pessoalmente.
              </h2>
              <p className="text-muted-foreground leading-[1.85] mb-10">
                Cada família é única. O primeiro passo é uma conversa, sem compromisso, para entender o contexto e o que pode fazer sentido.
              </p>
              <button
                type="button"
                onClick={openWhatsAppForm}
                className="inline-flex items-center gap-3 px-10 py-4 bg-[hsl(var(--navy-deep))] text-primary-foreground text-xs tracking-[0.3em] uppercase font-semibold rounded-sm hover:bg-[hsl(var(--teal-deep))] transition-colors"
              >
                Falar com Cleiton
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Fundador;

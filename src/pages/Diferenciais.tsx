import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const commitments = [
  { title: "Transparência em cada etapa", text: "A família fica por dentro da rotina, dos profissionais e das decisões que fazem parte do cuidado." },
  { title: "Participação da família", text: "Ouvimos quem conhece a história do assistido e construímos juntos as escolhas de cuidado." },
  { title: "Cuidadores valorizados", text: "Selecionamos, ouvimos e orientamos cada cuidador. Para nós, quem cuida nunca é apenas um número." },
  { title: "Fundador presente", text: "Cleiton Oliveira conduz pessoalmente a coordenação e acompanha de perto o cuidado oferecido às famílias." },
];

const Diferenciais = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>Nosso diferencial | Aegis Care</title>
      <meta name="description" content="Conheça o diferencial da Aegis Care: transparência, participação da família, cuidadores valorizados e presença do fundador." />
      <meta property="og:title" content="Nosso diferencial | Aegis Care" />
      <meta property="og:description" content="Transparência, cuidado compartilhado e presença humana em cada etapa." />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
    <Header />
    <main>
      <section className="pt-40 pb-24 md:pt-48 md:pb-32 bg-background">
        <div className="container-editorial max-w-4xl">
          <span className="eyebrow mb-6 block">Nosso diferencial</span>
          <h1 className="font-display text-4xl md:text-5xl leading-[1.1] text-foreground mb-8">Não somos os maiores. Buscamos ser os mais verdadeiros.</h1>
          <p className="text-lg text-muted-foreground leading-[1.8]">O que nos diferencia está nas relações que construímos com cada família e com cada profissional.</p>
        </div>
      </section>
      <section className="pb-28 md:pb-40">
        <div className="container-editorial grid md:grid-cols-2 gap-x-16 gap-y-14">
          {commitments.map((item, index) => (
            <article key={item.title} className="border-t border-border pt-8">
              <span className="font-display text-[hsl(var(--teal-deep))]">{String(index + 1).padStart(2, "0")}</span>
              <h2 className="font-display text-2xl text-foreground mt-5 mb-4">{item.title}</h2>
              <p className="text-muted-foreground leading-[1.8]">{item.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="py-20 bg-[hsl(var(--cream))]">
        <div className="container-editorial">
          <Link to="/#contato" className="inline-flex border-b border-[hsl(var(--gold))] pb-1 text-foreground font-medium">Falar com a equipe →</Link>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Diferenciais;
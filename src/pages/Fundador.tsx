import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Heart, ShieldCheck, Sprout } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import cleitonPhoto from "@/assets/cleiton-oliveira-consultorio.jpg";
import cleitonMobile from "@/assets/cleiton-oliveira-consultorio-mobile.webp";
import cleitonOptimized from "@/assets/cleiton-oliveira-consultorio-optimized.webp";

const siteUrl = "https://www.aegiscare.com.br";
const pageUrl = `${siteUrl}/fundador`;
// Reuse the sitewide entity identifiers so crawlers recognize one founder and organization.
const founderId = "https://www.aegiscare.com.br/#cleiton-oliveira";
const organizationId = "https://www.aegiscare.com.br/#organization";
const title = "Cleiton Oliveira | Enfermeiro e Gerontólogo | Aegis Care";
const description = "Conheça Cleiton Oliveira, enfermeiro, gerontólogo e fundador da Aegis Care, agência de cuidadores de idosos em SP e MG. Trajetória e compromisso com o cuidado no lar.";
const beliefs = [
  { icon: Sprout, text: "Acredito que ninguém deve perder a autonomia por falta de cuidado." },
  { icon: ShieldCheck, text: "Acredito em justiça, transparência e verdade." },
  { icon: Heart, text: "Acredito que cuidar é presença, afeto e respeito à história de cada um." },
];
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${pageUrl}#pagina`,
      url: pageUrl,
      name: title,
      description,
      inLanguage: "pt-BR",
      mainEntity: { "@id": founderId },
      breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
    },
    {
      "@type": "Person",
      "@id": founderId,
      name: "Cleiton Oliveira",
      url: pageUrl,
      jobTitle: "Enfermeiro, Gerontólogo e Fundador da Aegis Care",
      description: "Enfermeiro com especialização em UTI e gerontologia. Fundador da Aegis Care, conduz pessoalmente a coordenação assistencial e a seleção de cuidadores de idosos.",
      knowsAbout: ["Gerontologia", "Cuidado domiciliar", "Cuidadores de idosos", "Autonomia da pessoa idosa", "Coordenação assistencial"],
      worksFor: { "@id": organizationId },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Cleiton Oliveira", item: pageUrl },
      ],
    },
  ],
};

const Fundador = () => (
  <>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={pageUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="profile" />
      <meta property="og:url" content={pageUrl} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
    <div className="care-page min-h-screen bg-background">
      <Header />
      <main>
        <section className="pt-32 pb-14 md:pt-40 md:pb-20" aria-labelledby="founder-name">
          <div className="container-editorial">
            <nav aria-label="Navegação estrutural" className="mb-8 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-emerald transition-colors">Início</Link>
              <span className="mx-3 text-emerald" aria-hidden="true">/</span>
              <span aria-current="page">Fundador</span>
            </nav>
            <div className="grid md:grid-cols-12 gap-9 lg:gap-16 items-center">
              <figure className="md:col-span-5 max-w-sm w-full mx-auto md:mx-0">
                <picture className="block overflow-hidden rounded-sm border-b-4 border-emerald">
                  <source type="image/webp" srcSet={`${cleitonMobile} 768w, ${cleitonOptimized} 1086w`} sizes="(min-width: 768px) 35vw, 90vw" />
                  <img src={cleitonPhoto} alt="Cleiton Oliveira, enfermeiro, gerontólogo e fundador da Aegis Care" className="w-full aspect-[4/5] object-cover object-top" width={480} height={600} loading="eager" fetchPriority="high" decoding="async" />
                </picture>
              </figure>
              <div className="md:col-span-7">
                <span className="block text-sm text-emerald mb-5">O fundador</span>
                <h1 id="founder-name" className="font-display text-4xl md:text-5xl lg:text-6xl text-petroleum mb-6">Cleiton Oliveira</h1>
                <p className="text-base md:text-lg text-emerald font-medium mb-7">Enfermeiro · Gerontólogo · Fundador da Aegis Care</p>
                <span className="block h-px w-16 bg-gold mb-7" aria-hidden="true" />
                <p className="text-lg text-muted-foreground leading-relaxed">À frente da Aegis Care, agência de cuidadores de idosos em São Paulo e Minas Gerais, coordeno o cuidado domiciliar com critério clínico, presença e respeito à história de cada pessoa.</p>
              </div>
            </div>
          </div>
        </section>

        <ScrollReveal>
          <section className="py-14 md:py-20 bg-care-surface" aria-labelledby="trajetoria-title">
            <div className="container-editorial grid md:grid-cols-12 gap-7 lg:gap-16">
              <div className="md:col-span-4">
                <span className="block text-emerald text-sm mb-4">Da experiência ao propósito</span>
                <h2 id="trajetoria-title" className="font-display text-3xl md:text-4xl text-petroleum">Minha trajetória</h2>
              </div>
              <div className="md:col-span-8 space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed prose-justified">
                <p>Sou enfermeiro, com especialização em UTI e gerontologia. Passei anos à frente de equipes de cuidado domiciliar, sempre liderando, sempre tomando as dores das famílias e dos profissionais.</p>
                <p>Foi dentro desse dia a dia que vi o que não queria para ninguém: o lucro falando mais alto que as pessoas, cuidadores tratados como descartáveis e idosos perdendo autonomia por falta de um plano de cuidado de verdade. Decidi fazer diferente.</p>
                <p>Fundei a Aegis Care para provar que é possível cuidar com critério clínico e coração. Hoje, conduzo pessoalmente a coordenação assistencial e a seleção de cada profissional que entra em uma casa atendida pela Aegis.</p>
              </div>
            </div>
          </section>

          <section className="py-14 md:py-20 bg-petroleum text-petroleum-foreground" aria-labelledby="crencas-title">
            <div className="container-editorial">
              <h2 id="crencas-title" className="font-display text-3xl md:text-4xl text-petroleum-foreground mb-7">No que acredito</h2>
              <div className="max-w-3xl prose-justified">
                <p className="text-lg text-petroleum-foreground/90 leading-relaxed">Cuido por amor à vida, por conexão, por reconhecimento da história de cada pessoa. Quando cuido de alguém, também sou cuidado, porque cada encontro nos transforma.</p>
              </div>
              <ul className="grid md:grid-cols-3 gap-8 md:gap-10 mt-10">
                {beliefs.map(({ icon: Icon, text }) => (
                  <li key={text} className="border-t border-care-accent/40 pt-6">
                    <Icon className="w-7 h-7 text-care-accent mb-5" strokeWidth={1.25} aria-hidden="true" />
                    <p className="font-display text-xl text-petroleum-foreground leading-relaxed">{text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="py-14 md:py-20 bg-background" aria-labelledby="mensagem-title">
            <div className="container-editorial grid md:grid-cols-12 gap-7 lg:gap-16">
              <div className="md:col-span-4">
                <span className="block text-emerald text-sm mb-4">De pessoa para pessoa</span>
                <h2 id="mensagem-title" className="font-display text-3xl md:text-4xl text-petroleum">Minha mensagem para você</h2>
              </div>
              <div className="md:col-span-8">
                <blockquote className="border-l-2 border-emerald pl-6 md:pl-8">
                  <p className="font-display text-xl md:text-2xl text-petroleum leading-relaxed">Se você está aqui, é porque ama alguém e quer o melhor para essa pessoa. Eu entendo. É exatamente por isso que a Aegis existe. Pode contar com a minha palavra e com a minha equipe, cuidaremos de quem você ama como cuidaríamos da nossa própria família.</p>
                  <footer className="mt-6 text-sm text-emerald">Cleiton Oliveira</footer>
                </blockquote>
              </div>
            </div>
          </section>

          <section className="py-14 md:py-20 bg-care-surface" aria-labelledby="legado-title">
            <div className="container-editorial">
              <h2 id="legado-title" className="font-display text-3xl md:text-4xl text-petroleum mb-7">O legado que quero deixar</h2>
              <p className="font-display text-2xl md:text-3xl text-petroleum leading-relaxed max-w-3xl">Que fui humano. Que me importei. Que acolhi. Que dei o melhor de mim.</p>
              <div className="flex flex-wrap items-center gap-5 mt-9">
                <Button variant="care" size="lg" asChild><Link to="/#contato">Falar com a equipe</Link></Button>
                <Button variant="link" asChild className="normal-case tracking-normal text-emerald px-0"><Link to="/servicos">Conheça nossos serviços</Link></Button>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  </>
);

export default Fundador;

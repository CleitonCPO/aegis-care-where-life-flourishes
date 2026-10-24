import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ClipboardCheck, HeartHandshake, UserCheck, RefreshCw } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/servicos/cuidado-domiciliar-hero.jpg";
import { services } from "@/data/servicos";
import { serviceOverview, supervision } from "@/data/serviceOverview";

const siteUrl = "https://www.aegiscare.com.br";
const pageUrl = `${siteUrl}/servicos`;
const title = "Cuidadores de Idosos: Serviços e Acompanhamento | Aegis Care";
const description = "Cuidadores de idosos no lar, em internações, consultas e viagens, com supervisão de enfermagem. Conheça os serviços da Aegis Care em São Paulo e Minas Gerais.";
const steps = [
  { icon: ClipboardCheck, title: "Avaliação inicial", text: "Conhecemos a pessoa, o lar e as necessidades." },
  { icon: HeartHandshake, title: "Plano de cuidado", text: "Construído e aprovado junto com a família." },
  { icon: UserCheck, title: "Seleção do cuidador", text: "Profissional adequado ao perfil e à rotina." },
  { icon: RefreshCw, title: "Acompanhamento contínuo", text: "Ajustes sempre que necessário." },
];
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage", "@id": `${pageUrl}#pagina`, url: pageUrl,
      name: title, description, inLanguage: "pt-BR",
      mainEntity: { "@id": `${pageUrl}#servicos` },
      breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
    },
    {
      "@type": "ItemList", "@id": `${pageUrl}#servicos`, name: "Serviços de cuidadores de idosos da Aegis Care",
      itemListElement: serviceOverview.map((service, index) => ({
        "@type": "ListItem", position: index + 1,
        item: {
          "@type": "Service", "@id": `${pageUrl}#${service.id}`,
          name: service.title, serviceType: "Acompanhamento por cuidador de idosos",
          description: `${service.description} ${service.detail} Com ${supervision.scope}.`,
          url: `${pageUrl}#${service.id}`,
          provider: { "@id": "https://www.aegiscare.com.br/#organization" },
        },
      })),
    },
    {
      "@type": "BreadcrumbList", "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Serviços", item: pageUrl },
      ],
    },
  ],
};

const Servicos = () => (
  <>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={pageUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
    <div className="care-page min-h-screen bg-background">
      <Header />
      <main>
        <section className="relative isolate overflow-hidden bg-petroleum pt-36 pb-16 md:pt-44 md:pb-20" aria-labelledby="services-title">
          <img src={heroImage} alt="Cuidado e acolhimento no ambiente domiciliar" className="absolute inset-0 -z-20 w-full h-full object-cover" width={1280} height={854} loading="eager" fetchPriority="high" decoding="async" />
          <div className="absolute inset-0 -z-10 care-photo-overlay" aria-hidden="true" />
          <div className="container-editorial">
            <nav aria-label="Navegação estrutural" className="mb-9 text-sm text-petroleum-foreground/85">
              <Link to="/" className="hover:text-care-accent transition-colors">Início</Link>
              <span className="mx-3 text-care-accent" aria-hidden="true">/</span>
              <span aria-current="page">Serviços</span>
            </nav>
            <div className="max-w-2xl">
              <span className="block h-px w-16 bg-gold mb-7" aria-hidden="true" />
              <h1 id="services-title" className="font-display text-4xl md:text-5xl lg:text-6xl text-petroleum-foreground mb-6">Nossos serviços</h1>
              <p className="text-xl md:text-2xl font-display leading-relaxed text-petroleum-foreground">Cuidado que se adapta à sua família, no lar e fora dele.</p>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-petroleum-foreground/90 max-w-xl">A Aegis Care é uma agência de cuidadores de idosos com supervisão de enfermagem. Acompanhamos sua família em casa, durante internações, em consultas e em viagens, com presença humana e respeito à autonomia.</p>
            </div>
          </div>
        </section>
        <ScrollReveal>
          <section className="py-12 md:py-16 bg-care-surface" aria-labelledby="supervision-title">
            <div className="container-editorial grid md:grid-cols-12 gap-6 md:gap-12 items-start">
              <div className="md:col-span-4">
                <span className="eyebrow block text-emerald mb-4">O cuidado, acompanhado</span>
                <h2 id="supervision-title" className="font-display text-2xl md:text-3xl text-petroleum">Supervisão de enfermagem</h2>
              </div>
              <div className="md:col-span-8 border-l border-emerald/40 pl-6 md:pl-9">
                <p className="text-muted-foreground leading-relaxed prose-justified">O enfermeiro gerontólogo avalia as necessidades junto à família e orienta o plano de cuidado. A seleção dos cuidadores e o acompanhamento contínuo consideram a rotina, a segurança e a história de quem é cuidado, mantendo a família informada.</p>
                <Button asChild variant="link" className="px-0 mt-3 text-emerald"><Link to="/fundador">Conheça quem supervisiona o cuidado</Link></Button>
              </div>
            </div>
          </section>
          <div className="container-editorial">
            {serviceOverview.map((overview, index) => {
              const imageService = services.find((service) => service.slug === overview.imageSlug);
              if (!imageService) return null;
              return (
                <section key={overview.id} id={overview.id} className="scroll-mt-28 py-12 md:py-16 border-b border-border last:border-b-0" aria-labelledby={`${overview.id}-title`}>
                  <div className="grid md:grid-cols-12 gap-8 lg:gap-14 items-center">
                    <figure className={`md:col-span-5 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                      <picture className="block overflow-hidden rounded-sm">
                        <img src={imageService.image} alt={imageService.imageAlt} className="w-full aspect-[4/3] object-cover" width={1280} height={960} loading="lazy" decoding="async" />
                      </picture>
                    </figure>
                    <div className={`md:col-span-7 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                      <span className="eyebrow block text-emerald mb-4">{String(index + 1).padStart(2, "0")} · Presença e cuidado</span>
                      <h2 id={`${overview.id}-title`} className="font-display text-3xl md:text-4xl text-petroleum mb-5">{overview.title}</h2>
                      <p className="text-lg leading-relaxed text-foreground prose-justified">{overview.description}</p>
                      <p className="mt-4 text-muted-foreground leading-relaxed prose-justified">{overview.detail}</p>
                      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                        {overview.links.map((slug) => {
                          const service = services.find((item) => item.slug === slug);
                          if (!service) return null;
                          return <Button key={slug} asChild variant="link" className="px-0 text-emerald whitespace-normal text-left justify-start h-auto min-h-11"><Link to={`/servicos/${slug}`}>{service.shortName}</Link></Button>;
                        })}
                      </div>
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
          <section className="py-14 md:py-20 bg-petroleum text-petroleum-foreground" aria-labelledby="process-title">
            <div className="container-editorial">
              <span className="eyebrow block text-care-accent mb-4">Passo a passo</span>
              <h2 id="process-title" className="font-display text-3xl md:text-4xl text-petroleum-foreground mb-9">Como funciona</h2>
              <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
                {steps.map((step, index) => (
                  <li key={step.title} className="border-t border-petroleum-foreground/25 pt-5">
                    <div className="flex items-center justify-between mb-5 text-care-accent"><span className="font-display text-2xl">{String(index + 1).padStart(2, "0")}</span><step.icon className="w-5 h-5" strokeWidth={1.5} aria-hidden="true" /></div>
                    <h3 className="font-display text-xl text-petroleum-foreground mb-3">{step.title}</h3>
                    <p className="text-petroleum-foreground/85 leading-relaxed">{step.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>
          <section className="py-14 md:py-20 bg-care-surface" aria-labelledby="contact-title">
            <div className="container-editorial max-w-3xl text-center">
              <h2 id="contact-title" className="font-display text-3xl md:text-4xl text-petroleum mb-5">Não sabe qual serviço precisa?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-7">Fale com a gente. Ajudamos a encontrar o cuidado ideal.</p>
              <Button asChild variant="care" size="lg"><Link to="/#contato">Falar com a equipe</Link></Button>
            </div>
          </section>
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  </>
);
export default Servicos;

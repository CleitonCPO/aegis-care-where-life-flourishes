import { Helmet } from "react-helmet-async";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowRight, CheckCircle2, Phone, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  getServiceBySlug,
  getRelatedServices,
} from "@/data/servicesData";
import { useWhatsAppForm } from "@/context/WhatsAppFormContext";
import svc01 from "@/assets/servicos/servico-01.jpg.asset.json";
import svc02 from "@/assets/servicos/servico-02.jpg.asset.json";
import svc03 from "@/assets/servicos/servico-03.jpg.asset.json";
import svc04 from "@/assets/servicos/servico-04.jpg.asset.json";
import svc05 from "@/assets/servicos/servico-05.jpg.asset.json";
import svc06 from "@/assets/servicos/servico-06.jpg.asset.json";
import svc07 from "@/assets/servicos/servico-07.jpg.asset.json";
import svc08 from "@/assets/servicos/servico-08.jpg.asset.json";
import svc09 from "@/assets/servicos/servico-09.jpg.asset.json";
import svc10 from "@/assets/servicos/servico-10.jpg.asset.json";

const SERVICE_IMAGES: Record<string, string> = {
  "cuidador-de-idosos-em-sao-paulo": svc01.url,
  "cuidador-de-adultos-com-limitacoes": svc02.url,
  "cuidador-pos-avc": svc03.url,
  "cuidados-para-alzheimer-em-casa": svc04.url,
  "cuidados-para-parkinson": svc05.url,
  "cuidados-para-demencia": svc06.url,
  "acompanhamento-em-viagens": svc07.url,
  "acompanhamento-em-consultas": svc08.url,
  "cuidado-domiciliar": svc09.url,
  "acompanhamento-de-saude": svc10.url,
};

// Sophisticated brand gradient per category, blending image with site palette
const CATEGORY_GRADIENT: Record<string, string> = {
  assistencial:
    "linear-gradient(115deg, hsl(var(--navy-deep) / 0.92) 0%, hsl(var(--teal-deep) / 0.78) 55%, hsl(var(--turquoise) / 0.18) 100%)",
  clinico:
    "linear-gradient(115deg, hsl(var(--navy-deep) / 0.94) 0%, hsl(var(--navy) / 0.82) 55%, hsl(var(--teal-deep) / 0.35) 100%)",
  rotina:
    "linear-gradient(115deg, hsl(var(--navy-deep) / 0.90) 0%, hsl(var(--teal-deep) / 0.72) 50%, hsl(var(--gold) / 0.30) 100%)",
};


const BASE_URL = "https://www.aegiscare.com.br";

const ServicoDetalhe = () => {
  const { slug } = useParams();
  const { open: openWhatsAppForm } = useWhatsAppForm();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return <Navigate to="/servicos" replace />;
  }

  const canonical = `${BASE_URL}/servicos/${service.slug}`;
  const related = getRelatedServices(service.related);
  const Icon = service.icon;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    name: service.h1,
    description: service.metaDescription,
    provider: {
      "@type": "LocalBusiness",
      name: "Aegis Care",
      url: BASE_URL,
      areaServed: {
        "@type": "City",
        name: "São Paulo",
      },
    },
    areaServed: "São Paulo, SP",
    url: canonical,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Serviços",
        item: `${BASE_URL}/servicos`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: canonical,
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDescription} />
        <meta name="keywords" content={`${service.keyword}, cuidador de idosos, cuidado domiciliar São Paulo, Aegis Care`} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={service.metaTitle} />
        <meta property="og:description" content={service.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonical} />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main>
          {/* Hero */}
          <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-[hsl(var(--cream))] to-background">
            <div className="container-editorial">
              {/* Breadcrumb */}
              <nav aria-label="breadcrumb" className="mb-8 text-sm text-muted-foreground">
                <ol className="flex items-center gap-2 flex-wrap">
                  <li>
                    <Link to="/" className="hover:text-foreground">Home</Link>
                  </li>
                  <ChevronRight className="w-3 h-3" />
                  <li>
                    <Link to="/servicos" className="hover:text-foreground">Serviços</Link>
                  </li>
                  <ChevronRight className="w-3 h-3" />
                  <li className="text-foreground" aria-current="page">
                    {service.title}
                  </li>
                </ol>
              </nav>

              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[hsl(var(--teal-deep))] flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <span className="eyebrow">{service.categoryLabel}</span>
                </div>

                <h1 className="font-display text-3xl md:text-5xl leading-[1.1] text-foreground mb-6">
                  {service.h1}
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-[1.7] max-w-2xl">
                  {service.hero}
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Button
                    variant="cta"
                    size="xl"
                    className="gap-2 w-full sm:w-auto"
                    onClick={openWhatsAppForm}
                  >
                    <Phone className="w-5 h-5" />
                    Falar com a Aegis Care
                  </Button>
                  <Link to="/servicos">
                    <Button variant="outline" size="xl" className="gap-2 w-full sm:w-auto">
                      Ver todos os serviços
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* O que é */}
          <section className="py-20 md:py-28">
            <div className="container-editorial grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-16">
                <article>
                  <span className="eyebrow mb-4 block">O que é</span>
                  <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6 leading-tight">
                    O que é {service.title.toLowerCase()}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-[1.8] prose-justified">
                    {service.whatIs}
                  </p>
                </article>

                <article>
                  <span className="eyebrow mb-4 block">Para quem é indicado</span>
                  <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6 leading-tight">
                    Para quem esse serviço é indicado
                  </h2>
                  <ul className="space-y-3">
                    {service.indicatedFor.map((item) => (
                      <li key={item} className="flex gap-3 text-foreground leading-[1.7]">
                        <CheckCircle2 className="w-5 h-5 text-[hsl(var(--teal-deep))] flex-shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>

                <article>
                  <span className="eyebrow mb-4 block">Situações reais</span>
                  <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6 leading-tight">
                    Quando esse cuidado se torna necessário
                  </h2>
                  <ul className="space-y-3">
                    {service.realSituations.map((item) => (
                      <li key={item} className="flex gap-3 text-foreground leading-[1.7]">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[hsl(var(--gold))] flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>

                <article>
                  <span className="eyebrow mb-4 block">Como funciona</span>
                  <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6 leading-tight">
                    Como funciona na prática, no dia a dia
                  </h2>
                  <ol className="space-y-4">
                    {service.howItWorks.map((item, i) => (
                      <li key={item} className="flex gap-4 text-foreground leading-[1.7]">
                        <span className="font-display text-[hsl(var(--teal-deep))] tabular-nums text-lg">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ol>
                </article>

                <article>
                  <span className="eyebrow mb-4 block">Benefícios</span>
                  <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6 leading-tight">
                    Benefícios para o idoso e para a família
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.benefits.map((item) => (
                      <div
                        key={item}
                        className="p-6 bg-[hsl(var(--cream))] rounded-lg border border-border"
                      >
                        <p className="text-foreground leading-[1.7]">{item}</p>
                      </div>
                    ))}
                  </div>
                </article>

                <article>
                  <span className="eyebrow mb-4 block">Orientações</span>
                  <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6 leading-tight">
                    Orientações simples e humanas
                  </h2>
                  <p className="text-lg text-muted-foreground leading-[1.8] prose-justified">
                    {service.guidance}
                  </p>
                </article>

                <article>
                  <span className="eyebrow mb-4 block">Quando buscar ajuda</span>
                  <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6 leading-tight">
                    Quando buscar ajuda profissional
                  </h2>
                  <p className="text-lg text-muted-foreground leading-[1.8] prose-justified">
                    {service.whenToSeekHelp}
                  </p>
                </article>

                <article>
                  <span className="eyebrow mb-4 block">Perguntas frequentes</span>
                  <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6 leading-tight">
                    Perguntas frequentes sobre {service.title.toLowerCase()}
                  </h2>
                  <Accordion type="single" collapsible className="w-full">
                    {service.faqs.map((faq, i) => (
                      <AccordionItem value={`faq-${i}`} key={faq.question}>
                        <AccordionTrigger className="text-left text-foreground">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-[1.8]">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </article>
              </div>

              {/* Sidebar CTA */}
              <aside className="lg:sticky lg:top-32 lg:self-start space-y-6">
                <div className="p-8 rounded-2xl bg-[hsl(var(--teal-deep))] text-white">
                  <h3 className="font-display text-2xl mb-3 leading-tight">
                    Precisa de apoio agora?
                  </h3>
                  <p className="text-white/80 leading-[1.7] mb-6">
                    Fale com nossa equipe pelo WhatsApp. Fazemos uma avaliação
                    inicial gratuita e sem compromisso.
                  </p>
                  <Button
                    variant="cta"
                    size="lg"
                    className="w-full gap-2"
                    onClick={openWhatsAppForm}
                  >
                    <Phone className="w-4 h-4" />
                    Falar no WhatsApp
                  </Button>
                </div>

                {related.length > 0 && (
                  <div className="p-8 rounded-2xl bg-[hsl(var(--cream))] border border-border">
                    <h3 className="font-display text-xl mb-4 leading-tight text-foreground">
                      Serviços relacionados
                    </h3>
                    <ul className="space-y-3">
                      {related.map((r) => (
                        <li key={r.slug}>
                          <Link
                            to={`/servicos/${r.slug}`}
                            className="group flex items-start gap-2 text-foreground hover:text-[hsl(var(--teal-deep))] transition-colors"
                          >
                            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0 transition-transform group-hover:translate-x-1" />
                            <span className="leading-snug">{r.title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </aside>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ServicoDetalhe;

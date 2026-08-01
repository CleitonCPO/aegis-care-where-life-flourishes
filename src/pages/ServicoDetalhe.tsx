import { Helmet } from "react-helmet-async";
import { Link, Navigate, useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Phone } from "lucide-react";
import { getServiceBySlug, services } from "@/data/servicos";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=5511920067183&text=Ol%C3%A1%20Aegis%20Care%2C%20eu%20gostaria%20de%20um%20or%C3%A7amento%20de%20cuidador%20para%20meu%20familiar.&type=phone_number&app_absent=0";

const SITE = "https://www.aegiscare.com.br";

const ServicoDetalhe = () => {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) return <Navigate to="/servicos" replace />;

  const url = `${SITE}/servicos/${service.slug}`;
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.name,
      serviceType: service.shortName,
      description: service.definition,
      url,
      provider: {
        "@type": "LocalBusiness",
        name: "Aegis Care",
        url: SITE,
        telephone: "+55 11 92006-7183",
        address: {
          "@type": "PostalAddress",
          streetAddress: "R. Itapura, 254 - 290, Vila Gomes Cardim",
          addressLocality: "São Paulo",
          addressRegion: "SP",
          postalCode: "03310-000",
          addressCountry: "BR",
        },
      },
      areaServed: { "@type": "City", name: "São Paulo" },
      offers: {
        "@type": "Offer",
        priceCurrency: "BRL",
        price: "3180",
        availability: "https://schema.org/InStock",
        url,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: SITE },
        { "@type": "ListItem", position: 2, name: "Serviços", item: `${SITE}/servicos` },
        { "@type": "ListItem", position: 3, name: service.shortName, item: url },
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDescription} />
        <meta name="keywords" content={service.keywords} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={service.metaTitle} />
        <meta property="og:description" content={service.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main>
          {/* HERO */}
          <section className="pt-40 pb-16 md:pt-48 md:pb-20">
            <div className="container-editorial">
              <nav aria-label="Trilha de navegação" className="mb-8 text-sm text-muted-foreground">
                <Link to="/" className="link-quiet">Início</Link>
                <span className="mx-2">/</span>
                <Link to="/servicos" className="link-quiet">Serviços</Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">{service.shortName}</span>
              </nav>

              <div className="max-w-3xl">
                <span className="eyebrow mb-6 block">{service.eyebrow}</span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.08] text-foreground mb-8">
                  {service.headline}
                </h1>
                <p className="text-lg text-muted-foreground leading-[1.85] prose-justified max-w-2xl">
                  {service.summary}
                </p>
              </div>
            </div>
          </section>

          {/* IMAGE + DEFINITION */}
          <section className="pb-24 md:pb-32">
            <div className="container-editorial">
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                <div className="lg:col-span-7">
                  <div className="relative overflow-hidden rounded-sm shadow-card">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      className="w-full h-[380px] md:h-[520px] object-cover"
                      loading="eager"
                      width={1280}
                      height={854}
                    />
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <span className="eyebrow eyebrow-gold mb-5 block">O que é</span>
                  <h2 className="font-display text-3xl md:text-[2.25rem] leading-[1.15] text-foreground mb-6">
                    {service.name}
                  </h2>
                  <p className="text-muted-foreground leading-[1.85] prose-justified">
                    {service.definition}
                  </p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-8"
                  >
                    <Button variant="cta" size="lg" className="gap-2">
                      <Phone className="w-4 h-4" aria-hidden="true" />
                      Solicitar orçamento
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* PARA QUEM */}
          <section className="py-24 md:py-32 bg-[hsl(var(--cream))]">
            <div className="container-editorial">
              <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
                <div className="lg:col-span-4">
                  <span className="eyebrow mb-5 block">Indicação</span>
                  <h2 className="font-display text-3xl md:text-[2.25rem] leading-[1.15] text-foreground">
                    Para quem este cuidado foi pensado.
                  </h2>
                </div>
                <ul className="lg:col-span-8 grid sm:grid-cols-2 gap-x-10 gap-y-6">
                  {service.forWhom.map((item) => (
                    <li key={item} className="flex gap-4">
                      <Check className="w-5 h-5 mt-1 flex-shrink-0 text-[hsl(var(--teal-deep))]" aria-hidden="true" />
                      <span className="text-muted-foreground leading-[1.8]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* O QUE INCLUI */}
          <section className="py-24 md:py-32">
            <div className="container-editorial">
              <div className="max-w-2xl mb-14 md:mb-20">
                <span className="eyebrow mb-5 block">Escopo</span>
                <h2 className="font-display text-3xl md:text-[2.5rem] leading-[1.15] text-foreground">
                  O que está incluído no serviço.
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
                {service.includes.map((item, i) => (
                  <div key={item} className="flex items-baseline gap-5 border-t border-border pt-6">
                    <span className="font-display text-[hsl(var(--teal-deep))] text-xl tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-muted-foreground leading-[1.8]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* COMO FUNCIONA */}
          <section className="py-24 md:py-32 bg-[hsl(var(--cream))]">
            <div className="container-editorial">
              <div className="max-w-2xl mb-14 md:mb-20">
                <span className="eyebrow mb-5 block">Como funciona</span>
                <h2 className="font-display text-3xl md:text-[2.5rem] leading-[1.15] text-foreground">
                  Do primeiro contato ao cuidado em casa.
                </h2>
              </div>
              <ol className="grid md:grid-cols-4 gap-10 md:gap-12">
                {service.steps.map((step, i) => (
                  <li key={step.title}>
                    <span className="font-display text-[hsl(var(--teal-deep))] text-2xl tabular-nums block mb-3">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-xl text-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-[1.8] text-[0.95rem] prose-justified">
                      {step.description}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* DIFERENCIAIS */}
          <section className="py-24 md:py-32">
            <div className="container-editorial">
              <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
                <div className="lg:col-span-4">
                  <span className="eyebrow eyebrow-gold mb-5 block">Padrão Aegis</span>
                  <h2 className="font-display text-3xl md:text-[2.25rem] leading-[1.15] text-foreground">
                    O que nos diferencia.
                  </h2>
                </div>
                <ul className="lg:col-span-8 grid sm:grid-cols-2 gap-x-10 gap-y-6">
                  {service.differentials.map((item) => (
                    <li key={item} className="flex gap-4">
                      <Check className="w-5 h-5 mt-1 flex-shrink-0 text-[hsl(var(--teal-deep))]" aria-hidden="true" />
                      <span className="text-muted-foreground leading-[1.8]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-24 md:py-32 bg-[hsl(var(--cream))]">
            <div className="container-editorial">
              <div className="max-w-2xl mb-14 md:mb-20">
                <span className="eyebrow mb-5 block">Perguntas frequentes</span>
                <h2 className="font-display text-3xl md:text-[2.5rem] leading-[1.15] text-foreground">
                  Respostas diretas sobre {service.shortName.toLowerCase()}.
                </h2>
              </div>
              <div className="max-w-3xl space-y-10">
                {service.faqs.map((faq) => (
                  <article key={faq.question} className="border-t border-border pt-8">
                    <h3 className="font-display text-xl md:text-2xl text-foreground mb-4">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground leading-[1.85] prose-justified">
                      {faq.answer}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-24 md:py-32 gradient-hero">
            <div className="container-editorial text-center max-w-3xl mx-auto">
              <h2 className="font-display text-3xl md:text-[2.5rem] leading-[1.15] text-white mb-6">
                Vamos entender a necessidade da sua família.
              </h2>
              <p className="text-white/80 leading-[1.85] mb-10">
                A avaliação inicial é conduzida por enfermeiro, sem custo e sem compromisso. O investimento começa em R$ 3.180.
              </p>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="cta" size="xl" className="gap-2">
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  Solicitar orçamento
                </Button>
              </a>
            </div>
          </section>

          {/* OUTROS SERVIÇOS */}
          <section className="py-24 md:py-32">
            <div className="container-editorial">
              <span className="eyebrow mb-5 block">Outros serviços</span>
              <h2 className="font-display text-3xl md:text-[2.25rem] leading-[1.15] text-foreground mb-14">
                Cuidado para cada momento da vida.
              </h2>
              <div className="grid md:grid-cols-3 gap-10">
                {others.map((other) => (
                  <Link key={other.slug} to={`/servicos/${other.slug}`} className="group block">
                    <div className="overflow-hidden rounded-sm mb-5">
                      <img
                        src={other.image}
                        alt={other.imageAlt}
                        loading="lazy"
                        width={1280}
                        height={854}
                        className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="font-display text-xl text-foreground mb-2">{other.shortName}</h3>
                    <p className="text-muted-foreground text-[0.95rem] leading-[1.8] mb-3">
                      {other.summary}
                    </p>
                    <span className="inline-flex items-center gap-2 text-[hsl(var(--teal-deep))] text-sm">
                      Ver serviço
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ServicoDetalhe;

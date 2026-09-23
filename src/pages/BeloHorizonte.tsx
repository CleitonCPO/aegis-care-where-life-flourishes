import { lazy, Suspense, memo } from "react";
import { Helmet } from "react-helmet-async";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import Header from "@/components/Header";
import LazySection from "@/components/LazySection";
import { Button } from "@/components/ui/button";
import { MG_WHATSAPP_URL } from "@/lib/region";
import { trackWhatsAppClick } from "@/lib/gtag";
import heroImage from "@/assets/hero-aegis-premium.jpg";

const AboutSection = lazy(() => import("@/components/AboutSection"));
const WhatYouHireSection = lazy(() => import("@/components/WhatYouHireSection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const WhyUsSection = lazy(() => import("@/components/WhyUsSection"));
const SpecialtiesSection = lazy(() => import("@/components/SpecialtiesSection"));
const ClinicalGovernanceSection = lazy(() => import("@/components/ClinicalGovernanceSection"));
const CareModelsSection = lazy(() => import("@/components/CareModelsSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const Footer = lazy(() => import("@/components/Footer"));

const SectionFallback = memo(() => (
  <div className="min-h-[200px] flex items-center justify-center">
    <div className="w-6 h-6 border-2 border-secondary border-t-transparent rounded-full animate-spin" />
  </div>
));
SectionFallback.displayName = "SectionFallback";

const SITE = "https://www.aegiscare.com.br";

const bairros = [
  "Lourdes",
  "Funcionários",
  "Savassi",
  "Santo Agostinho",
  "Santo Antônio",
  "Serra",
  "Sion",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["HealthcareService", "Service"],
  "@id": `${SITE}/belo-horizonte#servico`,
  name: "Cuidador de idosos e enfermagem domiciliar em Belo Horizonte",
  serviceType: "Assistência domiciliar para idosos",
  url: `${SITE}/belo-horizonte`,
  provider: {
    "@type": ["MedicalBusiness", "LocalBusiness"],
    "@id": `${SITE}/#organization`,
    name: "Aegis Care",
    url: SITE,
    telephone: "+55 11 92006-7183",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Belo Horizonte",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Belo Horizonte",
        addressRegion: "MG",
        addressCountry: "BR",
      },
    },
    ...bairros.map((bairro) => ({
      "@type": "Place",
      name: `${bairro}, Belo Horizonte`,
    })),
  ],
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: MG_WHATSAPP_URL,
    availableLanguage: "pt-BR",
  },
};

const BeloHorizonte = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Cuidador de Idosos em Belo Horizonte | Aegis Care BH</title>
        <meta
          name="description"
          content="Cuidador de idosos e enfermagem domiciliar em Belo Horizonte, com atendimento em Lourdes, Funcionários, Savassi, Santo Agostinho, Santo Antônio, Serra e Sion. Coordenação de enfermagem e avaliação sem compromisso."
        />
        <link rel="canonical" href={`${SITE}/belo-horizonte`} />
        <meta property="og:title" content="Cuidador de Idosos em Belo Horizonte | Aegis Care BH" />
        <meta
          property="og:description"
          content="Assistência domiciliar para idosos em Belo Horizonte, com coordenação de enfermagem e cuidadores selecionados para a sua família."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE}/belo-horizonte`} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Header />

      <main>
        {/* Hero BH */}
        <section className="relative min-h-screen min-h-[100svh] flex items-center overflow-hidden bg-[hsl(var(--navy-deep))]">
          <div className="absolute inset-0 z-0">
            <img
              src={heroImage}
              alt="Cuidado domiciliar para idosos em Belo Horizonte — Aegis Care"
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              width={1920}
              height={1280}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--navy-deep))]/95 via-[hsl(var(--navy-deep))]/70 to-[hsl(var(--navy-deep))]/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--navy-deep))]/60 via-transparent to-transparent" />
          </div>

          <div className="container-editorial relative z-10 pt-32 pb-24">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-10">
                <span className="h-px w-12 bg-[hsl(var(--gold))]" />
                <span className="text-[hsl(var(--gold))] text-[0.7rem] tracking-[0.32em] uppercase font-medium">
                  Belo Horizonte · Minas Gerais
                </span>
              </div>

              <h1
                className="font-display text-[2.25rem] md:text-5xl lg:text-[3.75rem] text-white font-normal leading-[1.08] mb-8"
                style={{ letterSpacing: "-0.035em" }}
              >
                Envelhecer em casa é um direito. Em BH, escolha cuidar com excelência.
              </h1>

              <p className="text-base md:text-lg text-white/85 mb-12 leading-[1.7] font-light max-w-xl">
                Cuidador de idosos e enfermagem domiciliar em Belo Horizonte, com segurança,
                tranquilidade e cuidadores sempre atualizados.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={MG_WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={trackWhatsAppClick}
                >
                  <Button
                    variant="hero"
                    size="xl"
                    className="w-full sm:w-auto bg-white text-[hsl(var(--navy-deep))] hover:bg-[hsl(var(--turquoise))] hover:text-[hsl(var(--navy-deep))]"
                  >
                    Falar com a equipe de BH
                  </Button>
                </a>
                <a href="#bairros-bh">
                  <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                    Bairros atendidos
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Bairros atendidos */}
        <section id="bairros-bh" className="py-24 md:py-32 bg-background">
          <div className="container-editorial">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
              <div className="lg:col-span-5">
                <span className="eyebrow mb-6 block">Onde atendemos</span>
                <h2 className="font-display text-3xl md:text-[2.5rem] leading-[1.15] text-foreground mb-8">
                  Cuidado domiciliar na região centro sul de Belo Horizonte.
                </h2>
                <p className="text-muted-foreground leading-[1.8] prose-justified">
                  A equipe de Minas Gerais acompanha famílias nos bairros abaixo, com
                  coordenação de enfermagem, plantões de 4h, 6h, 8h, 12h e 24h e escalas
                  flexíveis conforme a rotina da casa.
                </p>
              </div>

              <div className="lg:col-span-7">
                <ul className="grid sm:grid-cols-2 gap-px bg-border border border-border">
                  {bairros.map((bairro) => (
                    <li
                      key={bairro}
                      className="flex items-center gap-4 bg-background p-6"
                    >
                      <MapPin className="w-4 h-4 text-[hsl(var(--teal-deep))] flex-shrink-0" aria-hidden="true" />
                      <span className="font-display text-lg text-foreground">{bairro}</span>
                    </li>
                  ))}
                  <li className="flex items-center gap-4 bg-[hsl(var(--cream))] p-6">
                    <span className="text-sm text-muted-foreground leading-[1.7]">
                      Atendemos também bairros vizinhos mediante avaliação. Consulte a equipe.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <LazySection rootMargin="400px">
          <Suspense fallback={<SectionFallback />}>
            <AboutSection />
          </Suspense>
        </LazySection>

        <LazySection>
          <Suspense fallback={<SectionFallback />}>
            <WhatYouHireSection />
          </Suspense>
        </LazySection>

        <LazySection>
          <Suspense fallback={<SectionFallback />}>
            <ServicesSection />
          </Suspense>
        </LazySection>

        <LazySection>
          <Suspense fallback={<SectionFallback />}>
            <WhyUsSection />
          </Suspense>
        </LazySection>

        <LazySection>
          <Suspense fallback={<SectionFallback />}>
            <SpecialtiesSection />
          </Suspense>
        </LazySection>

        <LazySection>
          <Suspense fallback={<SectionFallback />}>
            <ClinicalGovernanceSection />
          </Suspense>
        </LazySection>

        <LazySection>
          <Suspense fallback={<SectionFallback />}>
            <CareModelsSection />
          </Suspense>
        </LazySection>

        <LazySection>
          <Suspense fallback={<SectionFallback />}>
            <TestimonialsSection />
          </Suspense>
        </LazySection>

        <LazySection>
          <Suspense fallback={<SectionFallback />}>
            <FAQSection />
          </Suspense>
        </LazySection>

        {/* Contato BH */}
        <section id="contato" className="py-28 md:py-40 bg-background">
          <div className="container-editorial">
            <div className="max-w-3xl">
              <span className="eyebrow mb-6 block">Contato em Minas Gerais</span>
              <h2 className="font-display text-3xl md:text-[2.75rem] lg:text-5xl leading-[1.1] text-foreground mb-10">
                Estamos prontos para escutar a história da sua família em BH.
              </h2>
              <p className="text-lg text-muted-foreground leading-[1.8] mb-12 max-w-xl prose-justified">
                A conversa começa pelo WhatsApp da equipe de Minas Gerais. A partir dela,
                a coordenação de enfermagem agenda a avaliação e desenha o plano de cuidado.
              </p>

              <div className="space-y-px bg-border max-w-xl">
                <a
                  href={MG_WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={trackWhatsAppClick}
                  className="flex items-center gap-6 bg-background p-6 hover:bg-[hsl(var(--cream))] transition-colors duration-500"
                >
                  <Phone className="w-5 h-5 text-[hsl(var(--teal-deep))]" />
                  <div>
                    <p className="text-[0.7rem] tracking-[0.25em] uppercase text-muted-foreground mb-1">
                      WhatsApp · Minas Gerais
                    </p>
                    <p className="font-display text-xl text-foreground">(11) 92006-7183</p>
                  </div>
                </a>
                <a
                  href="mailto:contato@aegiscare.com.br"
                  className="flex items-center gap-6 bg-background p-6 hover:bg-[hsl(var(--cream))] transition-colors duration-500"
                >
                  <MessageCircle className="w-5 h-5 text-[hsl(var(--teal-deep))]" />
                  <div className="min-w-0">
                    <p className="text-[0.7rem] tracking-[0.25em] uppercase text-muted-foreground mb-1">
                      E-mail
                    </p>
                    <p className="font-display text-lg text-foreground break-all">
                      contato@aegiscare.com.br
                    </p>
                  </div>
                </a>
              </div>

              <a
                href={MG_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackWhatsAppClick}
                className="inline-block mt-12"
              >
                <Button variant="cta" size="xl" className="gap-3">
                  <MessageCircle className="w-5 h-5" />
                  Iniciar conversa
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <LazySection>
        <Suspense fallback={<SectionFallback />}>
          <Footer />
        </Suspense>
      </LazySection>
    </div>
  );
};

export default BeloHorizonte;

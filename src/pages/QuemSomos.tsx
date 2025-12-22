import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Heart, Home, Users, Target, CheckCircle } from "lucide-react";
import cuidadorCaminhando from "@/assets/quem-somos/cuidador-caminhando-idoso.jpg";
import atividadesRecreativas from "@/assets/quem-somos/atividades-recreativas.jpg";
import cuidadoAlimentacao from "@/assets/quem-somos/cuidado-alimentacao.jpg";

const QuemSomos = () => {
  return (
    <>
      <Helmet>
        <title>Quem Somos | Aegis Care - Cuidado Domiciliar Especializado</title>
        <meta 
          name="description" 
          content="Conheça a Aegis Care, empresa de cuidado domiciliar criada para proteger a permanência da pessoa em seu lar com segurança, dignidade e continuidade."
        />
        <meta 
          name="keywords" 
          content="quem somos aegis care, cuidado domiciliar, cuidador de idosos, enfermagem domiciliar, sobre a aegis care"
        />
        <link rel="canonical" href="https://aegiscare.com.br/quem-somos" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Quem Somos | Aegis Care" />
        <meta property="og:description" content="Conheça a Aegis Care, empresa de cuidado domiciliar criada para proteger a permanência da pessoa em seu lar." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aegiscare.com.br/quem-somos" />
        
        {/* Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Aegis Care",
            "description": "Empresa de cuidado domiciliar criada para proteger a permanência da pessoa em seu lar com segurança, dignidade e continuidade.",
            "url": "https://aegiscare.com.br",
            "logo": "https://aegiscare.com.br/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+55-11-92006-7183",
              "contactType": "customer service",
              "areaServed": "BR",
              "availableLanguage": "Portuguese"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="py-16 lg:py-24 gradient-hero relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDYwIEwgNjAgMCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <span className="inline-block px-4 py-2 bg-primary-foreground/20 backdrop-blur-sm rounded-full text-primary-foreground text-sm font-semibold mb-6">
                  Quem Somos
                </span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-bold mb-6">
                  Aegis Care
                </h1>
                <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
                  Proteção e cuidado para permanecer em casa
                </p>
              </div>
            </div>
          </section>

          {/* Intro Section with Image */}
          <section className="py-16 lg:py-24 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="rounded-2xl overflow-hidden shadow-elevated">
                    <img 
                      src={cuidadorCaminhando} 
                      alt="Cuidador caminhando com idoso feliz em jardim" 
                      className="w-full h-80 lg:h-96 object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                      A Aegis Care é uma empresa de cuidado domiciliar criada para proteger a permanência da pessoa em seu lar.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      Acreditamos que a casa não é apenas um espaço físico, mas o lugar onde a história, os vínculos e a identidade permanecem vivos.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Nosso trabalho existe para que o cuidado em saúde aconteça onde a vida acontece: em casa, com segurança, dignidade e continuidade.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Cuidado com Critério */}
          <section className="py-16 lg:py-24 bg-cream">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <span className="inline-block px-4 py-1.5 bg-teal-light rounded-full text-secondary text-sm font-semibold mb-4">
                      Nossa Abordagem
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                      Cuidado com critério, não com improviso
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Na Aegis Care, o cuidado não começa com a escala de um cuidador. Ele começa com avaliação, escuta e planejamento.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Cada assistência é estruturada a partir de uma análise clínica individual, considerando o histórico de saúde, a rotina familiar, o ambiente domiciliar e as necessidades reais do assistido. Nada é padronizado. Nada é genérico.
                    </p>
                  </div>
                  <div className="relative">
                    <div className="rounded-2xl overflow-hidden shadow-elevated">
                      <img 
                        src={atividadesRecreativas} 
                        alt="Idoso e cuidadora realizando atividades recreativas juntos" 
                        className="w-full h-80 object-cover"
                      />
                    </div>
                    <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-teal-light rounded-2xl" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Presença Profissional */}
          <section className="py-16 lg:py-24 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="order-2 lg:order-1 relative">
                    <div className="rounded-2xl overflow-hidden shadow-elevated">
                      <img 
                        src={cuidadoAlimentacao} 
                        alt="Cuidadora servindo refeição saudável para idosa feliz" 
                        className="w-full h-80 object-cover"
                      />
                    </div>
                    <div className="absolute -z-10 -bottom-4 -left-4 w-full h-full bg-secondary/20 rounded-2xl" />
                  </div>
                  <div className="order-1 lg:order-2">
                    <span className="inline-block px-4 py-1.5 bg-teal-light rounded-full text-secondary text-sm font-semibold mb-4">
                      Acompanhamento
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                      Presença profissional e acompanhamento contínuo
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Todos os cuidados são supervisionados por enfermeiros, com acompanhamento sistemático e comunicação clara com a família.
                    </p>
                    <div className="bg-card rounded-2xl p-6 shadow-soft">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center">
                          <Users className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <h3 className="font-display text-lg font-semibold text-foreground">
                          Supervisão contínua
                        </h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        A Aegis Care não delega o cuidado sem controle. Nós acompanhamos, orientamos e ajustamos continuamente. Isso garante segurança clínica, previsibilidade e tranquilidade para quem confia em nós.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Curadoria de Cuidado */}
          <section className="py-16 lg:py-24 gradient-soft">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <span className="inline-block px-4 py-1.5 bg-secondary/20 rounded-full text-secondary text-sm font-semibold mb-4">
                  Nosso Diferencial
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Mais do que cuidadores, uma curadoria de cuidado
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
                  Não somos uma agência comum de cuidadores. Somos uma estrutura de curadoria do cuidado domiciliar, onde cada decisão é tomada com responsabilidade técnica e sensibilidade humana.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  Nosso compromisso é proteger a autonomia do assistido, respeitar sua história e sustentar um cuidado que faça sentido para quem vive aquela casa.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
                {[
                  {
                    icon: Shield,
                    title: "Responsabilidade Técnica",
                    description: "Cada decisão é fundamentada em conhecimento clínico e experiência profissional."
                  },
                  {
                    icon: Heart,
                    title: "Sensibilidade Humana",
                    description: "O cuidado vai além da técnica, abraça a pessoa em sua totalidade."
                  },
                  {
                    icon: Home,
                    title: "Respeito à História",
                    description: "Preservamos a identidade e autonomia de quem cuidamos."
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 group">
                    <div className="w-14 h-14 rounded-xl gradient-cta flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* O que nos diferencia - Lista */}
          <section className="py-16 lg:py-24 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <span className="inline-block px-4 py-1.5 bg-teal-light rounded-full text-secondary text-sm font-semibold mb-4">
                    Nossa Estrutura
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                    O que nos diferencia
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Avaliação clínica individual",
                    "Escuta ativa e planejamento",
                    "Análise do ambiente domiciliar",
                    "Atendimento às necessidades reais",
                    "Supervisão por enfermeiros",
                    "Comunicação clara com a família",
                    "Acompanhamento sistemático",
                    "Ajustes contínuos no cuidado"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4 bg-card rounded-xl p-5 shadow-soft">
                      <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0" />
                      <span className="text-foreground font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Missão */}
          <section className="py-16 lg:py-24 gradient-hero relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDYwIEwgNjAgMCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary-foreground/20 flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-primary-foreground" />
                </div>
                <span className="inline-block px-4 py-1.5 bg-primary-foreground/20 backdrop-blur-sm rounded-full text-primary-foreground text-sm font-semibold mb-4">
                  Nossa Missão
                </span>
                <p className="text-xl md:text-2xl text-primary-foreground leading-relaxed">
                  Proteger a permanência da pessoa em casa, oferecendo cuidado domiciliar com segurança clínica, presença humana e acompanhamento profissional contínuo.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <section className="py-16 lg:py-24 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Aegis Care
                </h2>
                <p className="text-xl text-secondary font-display font-semibold mb-8">
                  Proteção e cuidado para permanecer em casa
                </p>
                <a
                  href="https://wa.me/5511920067183"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold rounded-xl transition-colors"
                >
                  Fale Conosco
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default QuemSomos;

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Award, Users, GraduationCap, Stethoscope, Home, ArrowLeft, Quote } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import cleitonPhoto from "@/assets/cleiton-oliveira.png";

const Fundador = () => {
  const formacoes = [
    {
      titulo: "Graduação em Enfermagem",
      instituicao: "Universidade Nove de Julho (UNINOVE)",
      ano: "2020",
      descricao: "Formação completa em Enfermagem, com ênfase em cuidados humanizados e assistência integral ao paciente."
    },
    {
      titulo: "Especialização em UTI",
      instituicao: "Unidade de Terapia Intensiva",
      descricao: "Capacitação avançada para atendimento de pacientes críticos, com foco em monitoramento e intervenções de alta complexidade."
    },
    {
      titulo: "Especialização em Gerontologia",
      instituicao: "Cuidado ao Idoso",
      descricao: "Dedicação ao estudo do envelhecimento saudável, com abordagem multidisciplinar para a saúde da terceira idade."
    },
    {
      titulo: "Gestão de Pessoas e Liderança",
      instituicao: "Formação em Liderança",
      descricao: "Desenvolvimento de competências para liderar equipes de saúde com empatia, eficiência e humanização."
    }
  ];

  const experiencias = [
    {
      icon: Stethoscope,
      titulo: "Linha de Frente - COVID-19",
      descricao: "Atuação heroica durante a pandemia em hospital de referência em São Paulo, cuidando de pacientes críticos e salvando vidas nos momentos mais desafiadores da saúde brasileira."
    },
    {
      icon: Heart,
      titulo: "UTI - Hospital Particular",
      descricao: "Experiência em Unidade de Terapia Intensiva, desenvolvendo expertise em cuidados críticos e monitoramento avançado de pacientes."
    },
    {
      icon: Home,
      titulo: "Atendimento Domiciliar",
      descricao: "Dois anos de dedicação em clínica de atendimento domiciliar, onde descobriu sua vocação: levar cuidado de qualidade para dentro do lar das famílias."
    },
    {
      icon: Users,
      titulo: "Cuidador Familiar",
      descricao: "A experiência mais significativa: cuidar pessoalmente dos avós e do pai, vivenciando na pele o que significa amar e cuidar de quem nos deu a vida."
    }
  ];

  const valores = [
    {
      titulo: "O Lar como Centro do Cuidado",
      descricao: "Acredito profundamente que o cuidado deve acontecer onde a vida foi construída: no lar, cercado por memórias, objetos queridos e pessoas amadas."
    },
    {
      titulo: "Cada Paciente é Único",
      descricao: "Não existe cuidado padronizado. Cada pessoa tem sua história, suas preferências, seus medos e seus sonhos. O cuidado precisa respeitar isso."
    },
    {
      titulo: "Família em Primeiro Lugar",
      descricao: "Quando cuidamos de um idoso, cuidamos de toda a família. A tranquilidade dos filhos e netos é parte essencial do nosso trabalho."
    },
    {
      titulo: "Humanização Acima de Tudo",
      descricao: "Antes de qualquer técnica ou procedimento, vem o olhar, o toque, a palavra de conforto. O cuidado é, antes de tudo, um ato de amor."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cleiton Oliveira - Fundador | Aegis Care</title>
        <meta 
          name="description" 
          content="Conheça Cleiton Oliveira, enfermeiro e fundador da Aegis Care. Com especialização em UTI e Gerontologia, ele dedica sua vida ao cuidado humanizado de idosos em seus lares." 
        />
        <meta name="keywords" content="Cleiton Oliveira, fundador Aegis Care, enfermeiro especialista, cuidado domiciliar, gerontologia, UTI" />
        <link rel="canonical" href="https://aegiscare.com.br/fundador" />
        <meta property="og:title" content="Cleiton Oliveira - Fundador | Aegis Care" />
        <meta property="og:description" content="Conheça a história de quem transformou a experiência pessoal de cuidar em uma missão de vida." />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://aegiscare.com.br/fundador" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-cream via-background to-cream-dark overflow-hidden">
          <div className="container mx-auto px-4">
            <Link
              to="/quem-somos"
              className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar para Quem Somos
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Photo */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative order-2 lg:order-1"
              >
                <div className="relative max-w-md mx-auto lg:max-w-none">
                  {/* Decorative elements */}
                  <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" />
                  <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
                  
                  {/* Main photo */}
                  <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                    <img
                      src={cleitonPhoto}
                      alt="Cleiton Oliveira - Fundador da Aegis Care"
                      className="w-full h-auto object-cover"
                      loading="eager"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                  </div>

                  {/* Badge */}
                  <div className="absolute -bottom-4 -right-4 md:bottom-8 md:right-8 bg-card p-4 rounded-xl shadow-card">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                        <Award className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <p className="font-display font-semibold text-foreground">Enfermeiro</p>
                        <p className="text-sm text-muted-foreground">Enfermeiro Gerontólogo</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="order-1 lg:order-2"
              >
                <span className="inline-block bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                  Fundador & CEO
                </span>
                
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
                  Cleiton Oliveira
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Enfermeiro, empreendedor e apaixonado pelo cuidado humanizado. 
                  <span className="text-foreground font-medium"> Transformei minha história pessoal de cuidar em uma missão de vida.</span>
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="px-4 py-2 bg-card rounded-lg text-sm font-medium text-foreground shadow-soft">
                    <GraduationCap className="w-4 h-4 inline mr-2 text-secondary" />
                    UNINOVE 2020
                  </span>
                  <span className="px-4 py-2 bg-card rounded-lg text-sm font-medium text-foreground shadow-soft">
                    <Stethoscope className="w-4 h-4 inline mr-2 text-secondary" />
                    Esp. UTI
                  </span>
                  <span className="px-4 py-2 bg-card rounded-lg text-sm font-medium text-foreground shadow-soft">
                    <Heart className="w-4 h-4 inline mr-2 text-secondary" />
                    Gerontologia
                  </span>
                </div>

                <a
                  href="https://wa.me/5511920067183"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="cta" size="lg" className="gap-2">
                    Converse comigo
                  </Button>
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <Quote className="w-16 h-16 mx-auto mb-8 opacity-30" />
              <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl leading-relaxed mb-8">
                "Acredito que o cuidado deve permanecer onde a vida foi construída: no lar, 
                cercado pelas pessoas que você ama, repleto de memórias e objetos que contam sua história."
              </blockquote>
              <p className="text-primary-foreground/70 text-lg">
                Cleiton Oliveira
              </p>
            </motion.div>
          </div>
        </section>

        {/* My Story Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-8 text-center">
                Minha História
              </h2>
              
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  Minha jornada no cuidado começou muito antes de eu me formar enfermeiro. 
                  Começou em casa, cuidando dos meus avós e do meu pai. Foi ali que entendi 
                  que <strong className="text-foreground">cuidar é mais do que técnica. É presença, é amor, é estar junto 
                  nos momentos difíceis</strong>.
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  Em 2020, me formei pela Universidade Nove de Julho e logo fui chamado para 
                  a linha de frente no combate ao COVID-19. Foram meses intensos em um hospital 
                  de referência em São Paulo, onde vi de perto a fragilidade da vida e a força 
                  do cuidado humano.
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  Busquei me especializar em <strong className="text-foreground">UTI, Gestão de Pessoas e Gerontologia</strong>, 
                  porque sabia que minha missão era unir a excelência técnica com o olhar 
                  humanizado para a terceira idade.
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  Durante dois anos em uma clínica de atendimento domiciliar, descobri minha 
                  vocação definitiva: <strong className="text-foreground">levar o cuidado de qualidade para dentro do lar</strong>. 
                  Vi famílias aliviadas por terem seus entes queridos em casa, vi idosos 
                  sorrindo por estarem cercados de suas memórias.
                </p>
                
                <p className="text-lg leading-relaxed">
                  A <strong className="text-foreground">Aegis Care</strong> nasceu dessa convicção. Cada paciente que cuidamos, 
                  cuido como se fosse da minha família. Cada colaborador que contratamos, 
                  escolho como se fosse cuidar dos meus avós. Porque sei o que significa 
                  confiar alguém que você ama aos cuidados de outra pessoa.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Formação Section */}
        <section className="py-16 md:py-24 bg-cream">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                Formação Acadêmica
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Uma trajetória de aprendizado contínuo, sempre buscando excelência 
                para oferecer o melhor cuidado.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {formacoes.map((formacao, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card p-6 rounded-xl shadow-soft hover:shadow-card transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                        {formacao.titulo}
                      </h3>
                      <p className="text-secondary text-sm font-medium mb-2">
                        {formacao.instituicao} {formacao.ano && `• ${formacao.ano}`}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {formacao.descricao}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experiências Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                Experiências que Me Formaram
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Cada experiência contribuiu para moldar minha visão sobre o cuidado humanizado.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {experiencias.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-5"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center flex-shrink-0 shadow-soft">
                    <exp.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {exp.titulo}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.descricao}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Valores Section */}
        <section className="py-16 md:py-24 bg-cream">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                O Que Eu Acredito
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Princípios que guiam cada decisão na Aegis Care.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {valores.map((valor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card p-6 rounded-xl shadow-soft border-l-4 border-secondary"
                >
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                    {valor.titulo}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {valor.descricao}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="font-display text-3xl md:text-4xl mb-6">
                Vamos Conversar?
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
                Se você está buscando cuidado para alguém que ama, eu gostaria de ouvir sua história. 
                Cada família é única, e juntos podemos encontrar a melhor solução.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/5511920067183"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    className="gap-2 bg-white text-primary hover:bg-white/90"
                  >
                    <Heart className="w-5 h-5" />
                    Fale Comigo no WhatsApp
                  </Button>
                </a>
                <Link to="/servicos">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    Conheça Nossos Serviços
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Fundador;

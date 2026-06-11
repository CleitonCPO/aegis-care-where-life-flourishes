import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Handshake, Users, GraduationCap, ShieldCheck, Heart, ArrowRight, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import aegisCareLogo from "@/assets/aegis-care-logo.png.asset.json";
import aegisAcademyLogo from "@/assets/aegis-academy-logo.png.asset.json";

const Footer = lazy(() => import("@/components/Footer"));

const pillars = [
  {
    Icon: Handshake,
    title: "Propósito que une",
    desc: "Cuidado e ensino trabalhando juntos por um futuro melhor.",
  },
  {
    Icon: Users,
    title: "Profissionais conectados",
    desc: "Uma rede que compartilha conhecimento e experiências.",
  },
  {
    Icon: GraduationCap,
    title: "Formação que gera impacto",
    desc: "Capacitação contínua para transformar vidas todos os dias.",
  },
  {
    Icon: ShieldCheck,
    title: "Excelência em cada etapa",
    desc: "Padrões elevados de qualidade no cuidado e no ensino.",
  },
];

const AegisEcosystem = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--navy-deep))] text-white relative overflow-hidden">
      <Helmet>
        <title>Aegis Ecosystem — Cuidado domiciliar e Academy</title>
        <meta
          name="description"
          content="Conheça o Aegis Ecosystem: cuidado domiciliar humanizado da Aegis Care e educação continuada em saúde da Aegis Academy. Do cuidado à formação dos profissionais que transformam vidas."
        />
        <link rel="canonical" href="https://aegis-home-haven.lovable.app/aegis-ecosystem" />
      </Helmet>

      {/* Gold glow ornamental lines */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <svg className="absolute -top-32 -left-40 w-[160%] h-[120%] opacity-[0.55]" viewBox="0 0 1600 1200" fill="none" preserveAspectRatio="none">
          <defs>
            <linearGradient id="goldLine" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#7a5a1c" stopOpacity="0" />
              <stop offset="35%" stopColor="#d4af6a" stopOpacity="0.9" />
              <stop offset="55%" stopColor="#f5e3a8" stopOpacity="1" />
              <stop offset="75%" stopColor="#c9a44c" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#7a5a1c" stopOpacity="0" />
            </linearGradient>
            <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <filter id="flashGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <linearGradient id="flashCore" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="50%" stopColor="#fff8e0" stopOpacity="1" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Base gold lines */}
          <path d="M -50 80 Q 600 -40 1650 320" stroke="url(#goldLine)" strokeWidth="1.6" filter="url(#goldGlow)" />
          <path d="M -60 200 Q 700 100 1700 460" stroke="url(#goldLine)" strokeWidth="1" opacity="0.6" />
          <path d="M -80 980 Q 700 1180 1700 820" stroke="url(#goldLine)" strokeWidth="1.6" filter="url(#goldGlow)" />
          <path d="M -60 1100 Q 700 1280 1700 940" stroke="url(#goldLine)" strokeWidth="1" opacity="0.6" />
          <line x1="800" y1="280" x2="800" y2="900" stroke="url(#goldLine)" strokeWidth="0.8" opacity="0.5" />

          {/* Light flashes traveling along the lines (sequential loop) */}
          <path className="gold-flash gold-flash-1" d="M -50 80 Q 600 -40 1650 320" stroke="url(#flashCore)" strokeWidth="2.4" strokeLinecap="round" filter="url(#flashGlow)" fill="none" />
          <path className="gold-flash gold-flash-2" d="M -60 200 Q 700 100 1700 460" stroke="url(#flashCore)" strokeWidth="2" strokeLinecap="round" filter="url(#flashGlow)" fill="none" />
          <path className="gold-flash gold-flash-3" d="M -80 980 Q 700 1180 1700 820" stroke="url(#flashCore)" strokeWidth="2.4" strokeLinecap="round" filter="url(#flashGlow)" fill="none" />
          <path className="gold-flash gold-flash-4" d="M -60 1100 Q 700 1280 1700 940" stroke="url(#flashCore)" strokeWidth="2" strokeLinecap="round" filter="url(#flashGlow)" fill="none" />
          <line className="gold-flash gold-flash-5" x1="800" y1="280" x2="800" y2="900" stroke="url(#flashCore)" strokeWidth="1.6" strokeLinecap="round" filter="url(#flashGlow)" />
        </svg>

        {/* sparkle dots */}
        <span className="absolute top-[18%] left-[42%] w-1 h-1 rounded-full bg-[#f5e3a8] shadow-[0_0_12px_4px_rgba(245,227,168,0.7)] animate-pulse" />
        <span className="absolute top-[34%] left-[58%] w-1.5 h-1.5 rounded-full bg-[#f5e3a8] shadow-[0_0_14px_5px_rgba(245,227,168,0.6)] animate-pulse [animation-delay:600ms]" />
        <span className="absolute top-[72%] left-[48%] w-1 h-1 rounded-full bg-[#f5e3a8] shadow-[0_0_12px_4px_rgba(245,227,168,0.7)] animate-pulse [animation-delay:1200ms]" />
        <span className="absolute top-[12%] right-[8%] w-1 h-1 rounded-full bg-[#f5e3a8] shadow-[0_0_10px_3px_rgba(245,227,168,0.6)] animate-pulse [animation-delay:1800ms]" />
      </div>

      <Header />

      <main className="relative">
        {/* Hero */}
        <section className="container-editorial pt-40 pb-20 md:pt-48 md:pb-28">
          <p className="text-[0.7rem] tracking-[0.4em] uppercase text-[#d4af6a] mb-6">Aegis Ecosystem</p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.1] max-w-5xl text-white">
            Do cuidado à formação dos profissionais{" "}
            <span className="text-[#e8c97a] italic">que transformam vidas.</span>
          </h1>
          <div className="mt-10 max-w-2xl text-white/80 text-lg leading-relaxed">
            <p>
              Conheça o <span className="text-[#e8c97a] font-semibold">Aegis Ecosystem</span>: um ecossistema completo que une
              cuidado domiciliar de <strong className="text-white">excelência</strong> e{" "}
              <strong className="text-white">educação continuada</strong> em saúde.
            </p>
          </div>
        </section>

        {/* Pillars */}
        <section className="container-editorial pb-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
            {pillars.map(({ Icon, title, desc }) => (
              <div key={title} className="text-center md:text-left">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-sm border border-[#d4af6a]/40 text-[#e8c97a] mb-5 shadow-[0_0_24px_-6px_rgba(212,175,106,0.6)]">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-[0.72rem] tracking-[0.28em] uppercase text-[#e8c97a] mb-3">
                  {title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Two brands */}
        <section className="container-editorial pb-24">
          <div className="grid lg:grid-cols-2 gap-px bg-[#d4af6a]/30 border border-[#d4af6a]/30">
            {/* Academy */}
            <div className="bg-[hsl(var(--navy-deep))] p-10 md:p-14 relative flex flex-col">
              <div className="flex items-center justify-center md:justify-start mb-8 min-h-[110px]">
                <img
                  src={aegisAcademyLogo.url}
                  alt="Aegis Academy"
                  width={280}
                  height={110}
                  loading="lazy"
                  className="h-24 md:h-28 w-auto object-contain drop-shadow-[0_0_24px_rgba(245,227,168,0.35)]"
                />
              </div>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Educação continuada em saúde que conecta{" "}
                <strong className="text-white">conhecimento à prática.</strong>
              </p>
              <a href="https://aegis-care-academy-forge.lovable.app/#top" target="_blank" rel="noopener noreferrer" className="mt-auto">
                <Button variant="outline" className="border-[#d4af6a] text-[#e8c97a] hover:bg-[#d4af6a] hover:text-[hsl(var(--navy-deep))] gap-2">
                  Conhecer a Academy <ExternalLink className="w-4 h-4" />
                </Button>
              </a>
            </div>

            {/* Care */}
            <div className="bg-[hsl(var(--navy-deep))] p-10 md:p-14 relative flex flex-col">
              <div className="flex items-center justify-center md:justify-start mb-8 min-h-[110px]">
                <img
                  src={aegisCareLogo.url}
                  alt="Aegis Care"
                  width={280}
                  height={110}
                  loading="lazy"
                  className="h-24 md:h-28 w-auto object-contain drop-shadow-[0_0_24px_hsl(var(--turquoise)/0.35)]"
                />
              </div>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Cuidado domiciliar humanizado e de excelência que{" "}
                <strong className="text-white">transforma experiências e gera bem-estar.</strong>
              </p>
              <Link to="/" className="mt-auto">
                <Button variant="outline" className="border-[hsl(var(--turquoise))] text-[hsl(var(--turquoise))] hover:bg-[hsl(var(--turquoise))] hover:text-[hsl(var(--navy-deep))] gap-2">
                  Conhecer o Care <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container-editorial pb-28">
          <div className="grid md:grid-cols-2 gap-6 border border-[#d4af6a]/40 rounded-sm p-8 md:p-12 bg-gradient-to-br from-[hsl(var(--navy-deep))] to-[hsl(var(--navy-deep))]/60 shadow-[0_0_60px_-20px_rgba(212,175,106,0.5)]">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 shrink-0 rounded-md bg-[#d4af6a] flex items-center justify-center">
                <Heart className="w-7 h-7 text-[hsl(var(--navy-deep))]" />
              </div>
              <div>
                <p className="text-[0.7rem] tracking-[0.3em] uppercase text-white/70 mb-2">Do cuidado à formação,</p>
                <p className="font-display text-xl md:text-2xl text-[#e8c97a] leading-tight">
                  um só propósito: transformar vidas.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center md:items-end gap-4">
              <p className="text-[0.7rem] tracking-[0.3em] uppercase text-white/70 md:text-right">
                Conheça mais sobre o Aegis Ecosystem
              </p>
              <a href="https://aegis-care-academy-forge.lovable.app/#top" target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#d4af6a] text-[hsl(var(--navy-deep))] hover:bg-[#e8c97a] gap-2">
                  Acessar Academy <ExternalLink className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default AegisEcosystem;

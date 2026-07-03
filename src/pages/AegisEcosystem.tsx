import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Handshake, Users, GraduationCap, ShieldCheck, Heart, ArrowRight, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import aegisAcademyLogo from "@/assets/aegis-academy-logo.png.asset.json";
import aegisCareLogo from "@/assets/logo-aegis-care-optimized.webp";

const Footer = lazy(() => import("@/components/Footer"));

const pillars = [
  { Icon: Handshake, title: "Propósito que une", desc: "Cuidado e ensino trabalhando juntos por um futuro melhor." },
  { Icon: Users, title: "Profissionais conectados", desc: "Uma rede que compartilha conhecimento e experiências." },
  { Icon: GraduationCap, title: "Formação que gera impacto", desc: "Capacitação contínua para transformar vidas todos os dias." },
  { Icon: ShieldCheck, title: "Excelência em cada etapa", desc: "Padrões elevados de qualidade no cuidado e no ensino." },
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

      <Header />

      <main className="relative">
        {/* ============ HERO — Ecosystem Splash ============ */}
        <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
          {/* Deep navy vignette */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, hsl(221 55% 14%) 0%, hsl(221 60% 9%) 60%, hsl(221 65% 6%) 100%)",
            }}
          />

          {/* Corner gold arcs (top-right & bottom-left) with shooting-star flashes */}
          <svg
            aria-hidden
            className="pointer-events-none absolute inset-0 w-full h-full"
            viewBox="0 0 1600 900"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="arcGold" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#7a5a1c" stopOpacity="0" />
                <stop offset="40%" stopColor="#d4af6a" stopOpacity="0.85" />
                <stop offset="60%" stopColor="#f5e3a8" stopOpacity="1" />
                <stop offset="100%" stopColor="#7a5a1c" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="flashCore2" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#d4af6a" stopOpacity="0" />
                <stop offset="70%" stopColor="#f5e3a8" stopOpacity="0.9" />
                <stop offset="92%" stopColor="#fff6d6" stopOpacity="1" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
              </linearGradient>
              <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3.2" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="flashBlur" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3.6" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Navy paneling — dark curved shapes suggesting depth */}
            <path d="M 1600 0 L 1600 520 Q 1350 300 1600 60 Z" fill="hsl(221 65% 8%)" opacity="0.85" />
            <path d="M 0 900 L 0 380 Q 250 600 0 840 Z" fill="hsl(221 65% 8%)" opacity="0.85" />

            {/* Top-right gold arcs */}
            <path d="M 1650 -20 Q 1200 250 1720 620" stroke="url(#arcGold)" strokeWidth="1.8" fill="none" filter="url(#softGlow)" />
            <path d="M 1680 40 Q 1280 320 1740 700" stroke="url(#arcGold)" strokeWidth="1.1" fill="none" opacity="0.7" />
            <path d="M 1700 120 Q 1360 380 1760 760" stroke="url(#arcGold)" strokeWidth="0.7" fill="none" opacity="0.45" />

            {/* Bottom-left gold arcs */}
            <path d="M -60 900 Q 380 640 -80 260" stroke="url(#arcGold)" strokeWidth="1.8" fill="none" filter="url(#softGlow)" />
            <path d="M -90 860 Q 320 580 -110 200" stroke="url(#arcGold)" strokeWidth="1.1" fill="none" opacity="0.7" />
            <path d="M -110 800 Q 260 520 -140 140" stroke="url(#arcGold)" strokeWidth="0.7" fill="none" opacity="0.45" />

            {/* Shooting-star flashes travelling along the main arcs */}
            <path
              className="gold-flash gold-flash-1"
              d="M 1650 -20 Q 1200 250 1720 620"
              stroke="url(#flashCore2)"
              strokeWidth="1.8"
              strokeLinecap="round"
              fill="none"
              filter="url(#flashBlur)"
            />
            <path
              className="gold-flash gold-flash-2"
              d="M 1680 40 Q 1280 320 1740 700"
              stroke="url(#flashCore2)"
              strokeWidth="1.4"
              strokeLinecap="round"
              fill="none"
              filter="url(#flashBlur)"
            />
            <path
              className="gold-flash gold-flash-3"
              d="M -60 900 Q 380 640 -80 260"
              stroke="url(#flashCore2)"
              strokeWidth="1.8"
              strokeLinecap="round"
              fill="none"
              filter="url(#flashBlur)"
            />
            <path
              className="gold-flash gold-flash-4"
              d="M -90 860 Q 320 580 -110 200"
              stroke="url(#flashCore2)"
              strokeWidth="1.4"
              strokeLinecap="round"
              fill="none"
              filter="url(#flashBlur)"
            />

            {/* Tiny sparkle at flash origin */}
            <circle cx="1655" cy="-15" r="2" fill="#fff6d6" opacity="0.9">
              <animate attributeName="opacity" values="0.2;1;0.2" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="-55" cy="895" r="2" fill="#fff6d6" opacity="0.9">
              <animate attributeName="opacity" values="0.2;1;0.2" dur="3.4s" repeatCount="indefinite" />
            </circle>
          </svg>

          {/* Center Composition: Care | ECOSYSTEM | Academy */}
          <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-28">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-12 md:gap-8">
              {/* CARE */}
              <div className="flex flex-col items-center text-center">
                <Link to="/" aria-label="Aegis Care" className="block">
                  <img
                    src={aegisCareLogo}
                    alt="Aegis Care — cuidado domiciliar de excelência"
                    width={360}
                    height={120}
                    className="h-[92px] md:h-[110px] w-auto object-contain drop-shadow-[0_0_28px_rgba(64,237,208,0.18)]"
                  />
                </Link>
                <div className="mt-6 w-full max-w-[320px] h-px bg-gradient-to-r from-transparent via-[#d4af6a]/70 to-transparent" />
                <p className="mt-5 text-[0.7rem] md:text-[0.75rem] tracking-[0.32em] uppercase text-white/85">
                  Cuidado domiciliar de excelência
                </p>
              </div>

              {/* CENTER DIVIDER */}
              <div className="flex flex-col items-center relative">
                {/* vertical gold line top */}
                <div className="hidden md:block relative w-px h-24 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#d4af6a]/80 to-[#e8c97a]" />
                  <span className="absolute left-1/2 -translate-x-1/2 top-0 w-[2px] h-8 bg-[#fff6d6] rounded-full blur-[1px] animate-[flashDown_4.5s_ease-in-out_infinite]" />
                </div>

                {/* Ecosystem label */}
                <div className="my-4 md:my-5 text-center px-6">
                  <p className="font-display text-[#e8c97a] text-xl md:text-2xl tracking-[0.28em] leading-tight">
                    AEGIS
                  </p>
                  <p className="font-display text-[#e8c97a] text-xl md:text-2xl tracking-[0.28em] leading-tight">
                    ECOSYSTEM
                  </p>
                </div>

                {/* vertical gold line bottom */}
                <div className="hidden md:block relative w-px h-24 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#d4af6a]/80 to-[#e8c97a]" />
                  <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[2px] h-8 bg-[#fff6d6] rounded-full blur-[1px] animate-[flashUp_4.5s_ease-in-out_infinite]" />
                </div>
              </div>

              {/* ACADEMY */}
              <div className="flex flex-col items-center text-center">
                <a
                  href="https://academy.aegiscare.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Aegis Academy"
                  className="block"
                >
                  <img
                    src={aegisAcademyLogo.url}
                    alt="Aegis Academy — educação continuada em saúde"
                    width={360}
                    height={120}
                    className="h-[92px] md:h-[110px] w-auto object-contain drop-shadow-[0_0_28px_rgba(245,227,168,0.22)]"
                  />
                </a>
                <div className="mt-6 w-full max-w-[320px] h-px bg-gradient-to-r from-transparent via-[#d4af6a]/70 to-transparent" />
                <p className="mt-5 text-[0.7rem] md:text-[0.75rem] tracking-[0.32em] uppercase text-white/85">
                  Educação continuada em saúde
                </p>
              </div>
            </div>

            {/* Tagline */}
            <div className="mt-16 md:mt-24 text-center">
              <div className="mx-auto mb-6 h-px w-24 bg-gradient-to-r from-transparent via-[#d4af6a] to-transparent" />
              <p className="text-[0.72rem] md:text-[0.82rem] tracking-[0.34em] uppercase text-[#d4af6a]">
                Do cuidado à formação dos profissionais{" "}
                <span className="text-[#f5e3a8] font-semibold">que transformam vidas.</span>
              </p>
            </div>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/">
                <Button
                  variant="outline"
                  className="border-[hsl(var(--turquoise))] text-[hsl(var(--turquoise))] hover:bg-[hsl(var(--turquoise))] hover:text-[hsl(var(--navy-deep))] gap-2 min-w-[220px]"
                >
                  Conhecer o Care <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <a href="https://academy.aegiscare.com.br/" target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#d4af6a] text-[hsl(var(--navy-deep))] hover:bg-[#e8c97a] gap-2 min-w-[220px]">
                  Acessar Academy <ExternalLink className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* ============ Pillars ============ */}
        <section className="container-editorial py-24 border-t border-[#d4af6a]/15">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {pillars.map(({ Icon, title, desc }) => (
              <div key={title} className="text-center md:text-left">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-sm border border-[#d4af6a]/40 text-[#e8c97a] mb-5 shadow-[0_0_24px_-6px_rgba(212,175,106,0.6)]">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-[0.72rem] tracking-[0.28em] uppercase text-[#e8c97a] mb-3">{title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ============ Closing CTA ============ */}
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
              <a href="https://academy.aegiscare.com.br/" target="_blank" rel="noopener noreferrer">
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

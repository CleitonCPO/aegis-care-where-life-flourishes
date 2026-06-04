import { Phone, Mail, Instagram, Linkedin, Facebook, Youtube, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-aegis-care-optimized.webp";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[hsl(var(--navy-deep))] text-white/85">
      <div className="container-editorial py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <img
              src={logo}
              alt="Aegis Care"
              className="h-12 w-auto mb-8 brightness-0 invert"
              width={140}
              height={56}
              loading="lazy"
            />
            <p className="leading-[1.85] mb-10 max-w-md text-white/70 prose-justified">
              Assistência domiciliar privada conduzida com coordenação clínica de enfermagem,
              presença humana e respeito profundo à história de cada família.
            </p>
            <div className="flex gap-3">
              {[
                { href: "https://www.instagram.com/aegis.care/", Icon: Instagram, label: "Instagram" },
                { href: "https://www.linkedin.com/company/aegis-care-br", Icon: Linkedin, label: "LinkedIn" },
                { href: "https://www.facebook.com/aegiscaree", Icon: Facebook, label: "Facebook" },
                { href: "https://www.youtube.com/channel/UC-hh7PeemPC5dhemafbwXxg", Icon: Youtube, label: "YouTube" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-[hsl(var(--turquoise))] hover:text-[hsl(var(--navy-deep))] hover:border-[hsl(var(--turquoise))] transition-colors"
                  aria-label={`${label} Aegis Care`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[0.7rem] tracking-[0.32em] uppercase font-semibold text-[hsl(var(--turquoise))] mb-6">
              Navegação
            </h4>
            <ul className="space-y-4">
              <li><Link to="/quem-somos" className="hover:text-white transition-colors">Quem Somos</Link></li>
              <li><Link to="/servicos" className="hover:text-white transition-colors">Serviços</Link></li>
              <li><Link to="/fundador" className="hover:text-white transition-colors">Fundador</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><a href="/#contato" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-[0.7rem] tracking-[0.32em] uppercase font-semibold text-[hsl(var(--turquoise))] mb-6">
              Contato
            </h4>
            <ul className="space-y-5">
              <li>
                <a href="tel:+5511920067183" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-[hsl(var(--turquoise))]" />
                  (11) 92006-7183
                </a>
              </li>
              <li>
                <a href="mailto:contato@aegiscare.com.br" className="flex items-center gap-3 hover:text-white transition-colors break-all">
                  <Mail className="w-4 h-4 text-[hsl(var(--turquoise))] flex-shrink-0" />
                  contato@aegiscare.com.br
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=R.+Itapura,+254+-+290+-+Vila+Gomes+Cardim,+São+Paulo+-+SP,+03310-000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-white transition-colors"
                >
                  <MapPin className="w-4 h-4 text-[hsl(var(--turquoise))] mt-1 flex-shrink-0" />
                  <span>R. Itapura, 254 — 290<br />Vila Gomes Cardim<br />São Paulo · SP</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-editorial py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-xs tracking-wider">
            © {currentYear} Aegis Care · Todos os direitos reservados
          </p>
          <Link
            to="/politica-privacidade"
            className="text-white/50 hover:text-white text-xs tracking-wider transition-colors"
          >
            Política de Privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

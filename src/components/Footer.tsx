import { Phone, Mail, Instagram, Linkedin, Heart, Facebook, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-aegis-care.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <img
              src={logo}
              alt="Aegis Care"
              className="h-14 w-auto mb-6 brightness-0 invert"
              width={140}
              height={56}
              loading="lazy"
            />
            <p className="text-primary-foreground/80 leading-relaxed mb-6 max-w-md">
              Cuidar onde a vida foi construída. Mais do que assistência, 
              oferecemos tranquilidade, confiança e bem-estar.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/aegis.care/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram Aegis Care"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/aegis-care-br"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="LinkedIn Aegis Care"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/aegiscaree"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook Aegis Care"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/channel/UC-hh7PeemPC5dhemafbwXxg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="YouTube Aegis Care"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-5">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/quem-somos"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link
                  to="/fundador"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Nosso Fundador
                </Link>
              </li>
              <li>
                <a
                  href="/#servicos"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="/#diferenciais"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Diferenciais
                </a>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <a
                  href="/#contato"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-5">Contato</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+5511920067183"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  (11) 92006-7183
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@aegiscare.com.br"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  contato@aegiscare.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <Link
                to="/politica-privacidade"
                className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
              >
                Política de Privacidade
              </Link>
              <p className="text-primary-foreground/60 text-sm flex items-center gap-1">
                Feito com <Heart className="w-4 h-4 text-accent fill-accent" /> para quem cuida
              </p>
            </div>
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Aegis Care. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

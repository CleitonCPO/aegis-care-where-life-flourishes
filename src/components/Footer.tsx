import { Phone, Mail, Instagram, Linkedin, Heart } from "lucide-react";
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
            />
            <p className="text-primary-foreground/80 leading-relaxed mb-6 max-w-md">
              Cuidar onde a vida foi construída. Mais do que assistência, 
              oferecemos tranquilidade, confiança e bem-estar.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
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
              {[
                { href: "#servicos", label: "Serviços" },
                { href: "#diferenciais", label: "Diferenciais" },
                { href: "#depoimentos", label: "Depoimentos" },
                { href: "#contato", label: "Contato" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
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

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm text-center md:text-left">
              © {currentYear} Aegis Care. Todos os direitos reservados.
            </p>
            <p className="text-primary-foreground/60 text-sm flex items-center gap-1">
              Feito com <Heart className="w-4 h-4 text-accent fill-accent" /> para quem cuida
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

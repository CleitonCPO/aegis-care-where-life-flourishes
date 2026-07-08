import { useState, useEffect, memo, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Phone, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWhatsAppForm } from "@/context/WhatsAppFormContext";
import AnimatedLogo from "./AnimatedLogo";

const navLinks = [
  { href: "/quem-somos", label: "Quem Somos", isRoute: true },
  { href: "/servicos", label: "Serviços", isRoute: true },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#faq", label: "FAQ" },
  { href: "/blog", label: "Blog", isRoute: true },
  { href: "#contato", label: "Contato" },
];

const Header = memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { open: openWhatsAppForm } = useWhatsAppForm();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAnchorClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: targetId } });
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  }, [location.pathname, navigate]);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[hsl(var(--teal-deep))]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.35)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-editorial flex items-center justify-between">
        <Link to="/" className="flex items-center" aria-label="Aegis Care - Início">
          <AnimatedLogo isScrolled={isScrolled} />
        </Link>


        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            link.isRoute ? (
              <Link
                key={link.href}
                to={link.href}
                className={`text-[0.72rem] tracking-[0.22em] uppercase font-medium transition-colors duration-300 ${isScrolled ? "text-foreground hover:text-[hsl(var(--teal-deep))]" : "text-white/90 hover:text-white"}`}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className={`text-[0.72rem] tracking-[0.22em] uppercase font-medium transition-colors duration-300 cursor-pointer ${isScrolled ? "text-foreground hover:text-[hsl(var(--teal-deep))]" : "text-white/90 hover:text-white"}`}
              >
                {link.label}
              </a>
            )
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button
            variant="cta"
            size="lg"
            className="gap-2"
            onClick={openWhatsAppForm}
          >
            <Phone className="w-4 h-4" />
            Fale Conosco
          </Button>
          <a
            href="https://app.aegiscare.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg" className="gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <ClipboardList className="w-4 h-4" />
              Prontuário
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-3 min-w-[48px] min-h-[48px] flex items-center justify-center text-foreground touch-manipulation"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div id="mobile-menu" className="lg:hidden absolute top-full left-0 right-0 bg-card shadow-elevated animate-fade-in max-h-[80vh] overflow-y-auto">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              link.isRoute ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className="font-medium text-foreground hover:text-secondary hover:bg-muted py-4 px-3 rounded-lg transition-colors touch-manipulation min-h-[48px] flex items-center"
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className="font-medium text-foreground hover:text-secondary hover:bg-muted py-4 px-3 rounded-lg transition-colors touch-manipulation min-h-[48px] flex items-center cursor-pointer"
                >
                  {link.label}
                </a>
              )
            ))}
            <div className="border-t border-border mt-2 pt-4 flex flex-col gap-3">

              <Button
                variant="cta"
                size="lg"
                className="w-full gap-2 min-h-[52px] text-base touch-manipulation"
                onClick={() => {
                  closeMobileMenu();
                  openWhatsAppForm();
                }}
              >
                <Phone className="w-5 h-5" />
                Fale Conosco
              </Button>
              <a
                href="https://app.aegiscare.com.br"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" className="w-full gap-2 min-h-[52px] text-base border-primary text-primary hover:bg-primary hover:text-primary-foreground touch-manipulation">
                  <ClipboardList className="w-5 h-5" />
                  Prontuário
                </Button>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
});

Header.displayName = 'Header';

export default Header;
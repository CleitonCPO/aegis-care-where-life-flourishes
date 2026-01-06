import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Phone, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-aegis-care.png";

const navLinks = [
  { href: "/quem-somos", label: "Quem Somos", isRoute: true },
  { href: "/servicos", label: "Serviços", isRoute: true },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#faq", label: "FAQ" },
  { href: "/blog", label: "Blog", isRoute: true },
  { href: "#contato", label: "Contato" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Aegis Care - Cuidado Domiciliar"
            className="h-12 md:h-14 w-auto"
            width={120}
            height={56}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            link.isRoute ? (
              <Link
                key={link.href}
                to={link.href}
                className={`font-medium transition-colors duration-200 hover:text-secondary ${
                  isScrolled ? "text-foreground" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className={`font-medium transition-colors duration-200 hover:text-secondary cursor-pointer ${
                  isScrolled ? "text-foreground" : "text-foreground"
                }`}
              >
                {link.label}
              </a>
            )
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://wa.me/5511920067183"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="cta" size="lg" className="gap-2">
              <Phone className="w-4 h-4" />
              Fale Conosco
            </Button>
          </a>
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
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-card shadow-elevated animate-fade-in max-h-[80vh] overflow-y-auto">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              link.isRoute ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className="font-medium text-foreground hover:text-secondary hover:bg-muted py-4 px-3 rounded-lg transition-colors touch-manipulation min-h-[48px] flex items-center"
                  onClick={() => setIsMobileMenuOpen(false)}
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
              <a
                href="https://wa.me/5511920067183"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="cta" size="lg" className="w-full gap-2 min-h-[52px] text-base touch-manipulation">
                  <Phone className="w-5 h-5" />
                  Fale Conosco
                </Button>
              </a>
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
};

export default Header;

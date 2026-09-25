import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  getStoredRegion,
  setStoredRegion,
  isCampaignVisit,
  MG_WHATSAPP_URL,
  MG_PATH,
  type Region,
} from "@/lib/region";

const RegionGate = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Pergunta a região a cada carregamento (exceto visitas de anúncio, tratadas como SP).
  useEffect(() => {
    if (isCampaignVisit()) {
      setStoredRegion("SP");
      return;
    }
    if (!getStoredRegion()) {
      const timer = setTimeout(() => setOpen(true), 400);
      return () => clearTimeout(timer);
    }
  }, []);

  // Redireciona todos os links de WhatsApp para o número de Minas Gerais
  useEffect(() => {
    const rewrite = () => {
      if (getStoredRegion() !== "MG") return;
      document
        .querySelectorAll<HTMLAnchorElement>("a[href*='wa.me'], a[href*='api.whatsapp.com']")
        .forEach((anchor) => {
          if (anchor.getAttribute("href") !== MG_WHATSAPP_URL) {
            anchor.setAttribute("href", MG_WHATSAPP_URL);
          }
        });
    };

    rewrite();
    const observer = new MutationObserver(() => rewrite());
    observer.observe(document.body, { childList: true, subtree: true });
    window.addEventListener("aegis-region-change", rewrite);
    return () => {
      observer.disconnect();
      window.removeEventListener("aegis-region-change", rewrite);
    };
  }, []);

  const handleChoose = (region: Region) => {
    setStoredRegion(region);
    setOpen(false);
    if (region === "MG" && location.pathname !== MG_PATH) {
      navigate(MG_PATH);
    } else if (region === "SP" && location.pathname === MG_PATH) {
      navigate("/");
    }
    window.scrollTo(0, 0);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-[hsl(var(--navy-deep))]/80 backdrop-blur-sm animate-fade-in p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="region-gate-title"
    >
      <div className="w-full max-w-lg bg-background border border-border shadow-elevated p-8 sm:p-12 text-center">
        <MapPin className="w-6 h-6 mx-auto text-[hsl(var(--teal-deep))] mb-6" aria-hidden="true" />
        <span className="eyebrow mb-4 block">Atendimento</span>
        <h2
          id="region-gate-title"
          className="font-display text-2xl sm:text-3xl text-foreground leading-tight mb-4"
        >
          Onde está a sua família?
        </h2>
        <p className="text-muted-foreground leading-[1.8] mb-8">
          Selecione a região para falar diretamente com a equipe responsável pelo
          cuidado domiciliar no seu estado.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="cta"
            size="xl"
            className="w-full min-h-[52px]"
            onClick={() => handleChoose("SP")}
          >
            São Paulo
          </Button>
          <Button
            variant="outline"
            size="xl"
            className="w-full min-h-[52px] border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => handleChoose("MG")}
          >
            Minas Gerais
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RegionGate;

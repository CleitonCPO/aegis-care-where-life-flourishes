import { MessageCircle, X, Send } from "lucide-react";
import { memo, useState, useEffect } from "react";
import { z } from "zod";
import { trackWhatsAppClick } from "@/lib/gtag";
import aegisLogo from "@/assets/aegis-care-logo-optimized.webp";

const WHATSAPP_PHONE = "5511920067183";

const formSchema = z.object({
  name: z
    .string()
    .trim()
    .nonempty({ message: "Por favor, informe seu nome" })
    .max(80, { message: "Nome muito longo" }),
  need: z
    .string()
    .trim()
    .nonempty({ message: "Conte-nos como podemos ajudar" })
    .max(500, { message: "Mensagem muito longa" }),
});

type ChatStep = "greeting" | "askName" | "askNeed" | "ready";

const WhatsAppButton = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [step, setStep] = useState<ChatStep>("greeting");
  const [name, setName] = useState("");
  const [need, setNeed] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowBubble(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleStart = () => {
    setStep("askName");
    setError(null);
  };

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = formSchema.shape.name.safeParse(name);
    if (!result.success) {
      setError(result.error.issues[0].message);
      return;
    }
    setName(result.data);
    setError(null);
    setStep("askNeed");
  };

  const handleNeedSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = formSchema.safeParse({ name, need });
    if (!result.success) {
      setError(result.error.issues[0].message);
      return;
    }
    setError(null);
    setStep("ready");
  };

  const handleSendToWhatsApp = () => {
    const message = `Olá! Meu nome é ${name}.\n\n${need}`;
    const url = `https://api.whatsapp.com/send/?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
    trackWhatsAppClick();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleClose = () => {
    setIsOpen(false);
    // Reset after closing animation
    setTimeout(() => {
      setStep("greeting");
      setName("");
      setNeed("");
      setError(null);
    }, 500);
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
      {/* Chat Preview Card */}
      <div
        className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-bottom-right ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-75 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="w-[320px] rounded-2xl shadow-2xl overflow-hidden border border-border/50 bg-white">
          {/* WhatsApp Header */}
          <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
            <img src={aegisLogo} alt="Aegis Care" className="w-10 h-10 rounded-full object-contain bg-white p-0.5 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-white font-semibold text-sm leading-tight">Cleiton Oliveira</p>
              <p className="text-white/70 text-xs">Enfermeiro Gerontólogo • Aegis Care</p>
            </div>
            <button
              onClick={handleClose}
              className="text-white/70 hover:text-white transition-colors p-1 touch-manipulation"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div
            className="px-4 py-5 min-h-[200px] flex flex-col justify-end gap-2"
            style={{
              backgroundColor: "#ECE5DD",
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c8c3ba' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          >
            {/* Greeting bubble - always visible */}
            <div className="bg-white rounded-xl rounded-tl-sm px-4 py-3 shadow-sm max-w-[85%] self-start">
              <p className="text-[#303030] text-sm leading-relaxed">
                Olá! 👋 Aqui é o Cleiton, enfermeiro da{" "}
                <span className="font-semibold">Aegis Care</span>.
              </p>
              <p className="text-[#303030] text-sm leading-relaxed mt-1">
                Como posso te ajudar hoje?
              </p>
              <p className="text-[#8a8a8a] text-[10px] text-right mt-1">agora</p>
            </div>

            {/* Step: askName - assistant message */}
            {step !== "greeting" && (
              <div className="bg-white rounded-xl rounded-tl-sm px-4 py-3 shadow-sm max-w-[85%] self-start animate-fade-in">
                <p className="text-[#303030] text-sm leading-relaxed">
                  Qual é o seu nome?
                </p>
              </div>
            )}

            {/* User reply: name */}
            {(step === "askNeed" || step === "ready") && name && (
              <div className="bg-[#DCF8C6] rounded-xl rounded-tr-sm px-4 py-2 shadow-sm max-w-[85%] self-end animate-fade-in">
                <p className="text-[#303030] text-sm leading-relaxed break-words">{name}</p>
              </div>
            )}

            {/* Step: askNeed - assistant */}
            {(step === "askNeed" || step === "ready") && (
              <div className="bg-white rounded-xl rounded-tl-sm px-4 py-3 shadow-sm max-w-[85%] self-start animate-fade-in">
                <p className="text-[#303030] text-sm leading-relaxed">
                  Prazer, {name.split(" ")[0]}! Como podemos te ajudar?
                </p>
              </div>
            )}

            {/* User reply: need */}
            {step === "ready" && need && (
              <div className="bg-[#DCF8C6] rounded-xl rounded-tr-sm px-4 py-2 shadow-sm max-w-[85%] self-end animate-fade-in">
                <p className="text-[#303030] text-sm leading-relaxed break-words whitespace-pre-wrap">{need}</p>
              </div>
            )}

            {/* Final assistant message */}
            {step === "ready" && (
              <div className="bg-white rounded-xl rounded-tl-sm px-4 py-3 shadow-sm max-w-[85%] self-start animate-fade-in">
                <p className="text-[#303030] text-sm leading-relaxed">
                  Obrigado! Clique abaixo para continuar a conversa no WhatsApp. 💚
                </p>
              </div>
            )}

            {error && (
              <p className="text-destructive text-xs px-1 self-start animate-fade-in">{error}</p>
            )}
          </div>

          {/* Footer / Input area */}
          <div className="bg-white border-t border-gray-100">
            {step === "greeting" && (
              <div className="px-4 py-3">
                <button
                  onClick={handleStart}
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20BA5C] text-white font-semibold py-3 rounded-xl transition-colors touch-manipulation"
                >
                  <MessageCircle className="w-5 h-5" />
                  Iniciar Conversa
                </button>
              </div>
            )}

            {step === "askName" && (
              <form onSubmit={handleNameSubmit} className="px-3 py-3 flex items-center gap-2">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Digite seu nome..."
                  maxLength={80}
                  autoFocus
                  className="flex-1 px-4 py-2.5 text-sm rounded-full border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#25D366]/30 focus:border-[#25D366] text-[#303030]"
                />
                <button
                  type="submit"
                  className="flex-shrink-0 w-10 h-10 rounded-full bg-[#25D366] hover:bg-[#20BA5C] text-white flex items-center justify-center transition-colors touch-manipulation"
                  aria-label="Enviar"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}

            {step === "askNeed" && (
              <form onSubmit={handleNeedSubmit} className="px-3 py-3 flex items-end gap-2">
                <textarea
                  value={need}
                  onChange={(e) => setNeed(e.target.value)}
                  placeholder="Conte-nos como podemos ajudar..."
                  maxLength={500}
                  rows={2}
                  autoFocus
                  className="flex-1 px-4 py-2.5 text-sm rounded-2xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#25D366]/30 focus:border-[#25D366] text-[#303030] resize-none"
                />
                <button
                  type="submit"
                  className="flex-shrink-0 w-10 h-10 rounded-full bg-[#25D366] hover:bg-[#20BA5C] text-white flex items-center justify-center transition-colors touch-manipulation"
                  aria-label="Enviar"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}

            {step === "ready" && (
              <div className="px-4 py-3">
                <button
                  onClick={handleSendToWhatsApp}
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20BA5C] text-white font-semibold py-3 rounded-xl transition-colors touch-manipulation"
                >
                  <MessageCircle className="w-5 h-5" />
                  Abrir WhatsApp
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Floating Button */}
      <div className="relative">
        {/* Text bubble hint */}
        {showBubble && !isOpen && (
          <div className="absolute bottom-full right-0 mb-2 animate-fade-in">
            <div className="bg-white text-foreground text-sm px-4 py-2 rounded-xl shadow-lg whitespace-nowrap border border-border/50">
              Fale Conosco 💬
              <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-r border-b border-border/50 rotate-45" />
            </div>
          </div>
        )}

        <button
          onClick={() => {
            if (isOpen) {
              handleClose();
            } else {
              setIsOpen(true);
              setShowBubble(false);
            }
          }}
          className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] hover:bg-[#20BA5C] text-white shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation animate-pulse-gentle"
          aria-label="Fale conosco pelo WhatsApp"
        >
          {isOpen ? (
            <X className="w-6 h-6 md:w-7 md:h-7" />
          ) : (
            <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
          )}
        </button>
      </div>
    </div>
  );
});

WhatsAppButton.displayName = "WhatsAppButton";

export default WhatsAppButton;

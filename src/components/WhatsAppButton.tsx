import { MessageCircle, X, Send, ArrowLeft } from "lucide-react";
import { memo, useState, useEffect } from "react";
import { z } from "zod";
import { trackWhatsAppClick } from "@/lib/gtag";
import aegisLogo from "@/assets/aegis-care-logo-optimized.webp";
import {
  WHATSAPP_QUESTIONS,
  buildWhatsAppMessage,
  buildWhatsAppUrl,
  type WhatsAppAnswers,
} from "@/lib/whatsapp";

type StepKey = "greeting" | "timing" | "condition" | "regime" | "investment" | "regionConcern" | "ready";

const flow: StepKey[] = [
  "greeting",
  "timing",
  "condition",
  "regime",
  "investment",
  "regionConcern",
  "ready",
];

const regionSchema = z
  .string()
  .trim()
  .min(3, "Descreva brevemente a região e a principal preocupação")
  .max(600, "Resposta muito longa");

const initialAnswers: WhatsAppAnswers = {
  timing: "",
  condition: "",
  regime: "",
  investment: "",
  regionConcern: "",
};

const WhatsAppButton = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [step, setStep] = useState<StepKey>("greeting");
  const [answers, setAnswers] = useState<WhatsAppAnswers>(initialAnswers);
  const [regionDraft, setRegionDraft] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowBubble(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const goTo = (s: StepKey) => {
    setError(null);
    setStep(s);
  };

  const currentIndex = flow.indexOf(step);
  const goBack = () => {
    if (currentIndex > 0) goTo(flow[currentIndex - 1]);
  };

  const chooseOption = (key: keyof WhatsAppAnswers, value: string, next: StepKey) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    setTimeout(() => goTo(next), 250);
  };

  const submitRegion = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = regionSchema.safeParse(regionDraft);
    if (!parsed.success) {
      setError(parsed.error.issues[0].message);
      return;
    }
    setAnswers((prev) => ({ ...prev, regionConcern: parsed.data }));
    goTo("ready");
  };

  const handleSendToWhatsApp = () => {
    const message = buildWhatsAppMessage(answers);
    const url = buildWhatsAppUrl(message);
    trackWhatsAppClick();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setStep("greeting");
      setAnswers(initialAnswers);
      setRegionDraft("");
      setError(null);
    }, 500);
  };

  const reachedOrPast = (s: StepKey) => flow.indexOf(step) >= flow.indexOf(s);

  const renderAssistantOptions = (
    key: keyof WhatsAppAnswers,
    next: StepKey,
    options: readonly string[],
  ) => (
    <div className="flex flex-col gap-1.5 self-start max-w-[90%] animate-fade-in">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => chooseOption(key, opt, next)}
          className="text-left text-xs bg-white border border-[#25D366]/40 text-[#075E54] hover:bg-[#25D366]/10 rounded-xl px-3 py-2 shadow-sm transition-colors touch-manipulation"
        >
          {opt}
        </button>
      ))}
    </div>
  );

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
        <div className="w-[340px] max-w-[calc(100vw-2rem)] rounded-2xl shadow-2xl overflow-hidden border border-border/50 bg-white">
          {/* WhatsApp Header */}
          <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
            {step !== "greeting" && step !== "ready" && (
              <button
                onClick={goBack}
                className="text-white/70 hover:text-white transition-colors p-1 touch-manipulation"
                aria-label="Voltar"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
            )}
            <img
              src={aegisLogo}
              alt="Aegis Care"
              className="w-10 h-10 rounded-full object-contain bg-white p-0.5 flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <p className="text-white font-semibold text-sm leading-tight">Cleiton Oliveira</p>
              <p className="text-white/70 text-xs">Enfermeiro Gerontólogo · Aegis Care</p>
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
            className="px-4 py-5 h-[360px] overflow-y-auto flex flex-col justify-end gap-2"
            style={{
              backgroundColor: "#ECE5DD",
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c8c3ba' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          >
            {/* Greeting */}
            <div className="bg-white rounded-xl rounded-tl-sm px-4 py-3 shadow-sm max-w-[85%] self-start">
              <p className="text-[#303030] text-sm leading-relaxed">
                Olá! 👋 Aqui é o Cleiton, enfermeiro da{" "}
                <span className="font-semibold">Aegis Care</span>.
              </p>
              <p className="text-[#303030] text-sm leading-relaxed mt-1">
                Vou fazer 5 perguntas rápidas para levar sua conversa ao WhatsApp já com contexto.
              </p>
              <p className="text-[#8a8a8a] text-[10px] text-right mt-1">agora</p>
            </div>

            {/* Q1: timing */}
            {reachedOrPast("timing") && (
              <div className="bg-white rounded-xl rounded-tl-sm px-4 py-3 shadow-sm max-w-[85%] self-start animate-fade-in">
                <p className="text-[#303030] text-sm leading-relaxed">
                  {WHATSAPP_QUESTIONS.timing.label}
                </p>
              </div>
            )}
            {answers.timing && (
              <div className="bg-[#DCF8C6] rounded-xl rounded-tr-sm px-4 py-2 shadow-sm max-w-[85%] self-end animate-fade-in">
                <p className="text-[#303030] text-sm leading-relaxed">{answers.timing}</p>
              </div>
            )}
            {step === "timing" &&
              renderAssistantOptions("timing", "condition", WHATSAPP_QUESTIONS.timing.options)}

            {/* Q2: condition */}
            {reachedOrPast("condition") && (
              <div className="bg-white rounded-xl rounded-tl-sm px-4 py-3 shadow-sm max-w-[85%] self-start animate-fade-in">
                <p className="text-[#303030] text-sm leading-relaxed">
                  {WHATSAPP_QUESTIONS.condition.label}
                </p>
              </div>
            )}
            {answers.condition && (
              <div className="bg-[#DCF8C6] rounded-xl rounded-tr-sm px-4 py-2 shadow-sm max-w-[85%] self-end animate-fade-in">
                <p className="text-[#303030] text-sm leading-relaxed">{answers.condition}</p>
              </div>
            )}
            {step === "condition" &&
              renderAssistantOptions("condition", "regime", WHATSAPP_QUESTIONS.condition.options)}

            {/* Q3: regime */}
            {reachedOrPast("regime") && (
              <div className="bg-white rounded-xl rounded-tl-sm px-4 py-3 shadow-sm max-w-[85%] self-start animate-fade-in">
                <p className="text-[#303030] text-sm leading-relaxed">
                  {WHATSAPP_QUESTIONS.regime.label}
                </p>
              </div>
            )}
            {answers.regime && (
              <div className="bg-[#DCF8C6] rounded-xl rounded-tr-sm px-4 py-2 shadow-sm max-w-[85%] self-end animate-fade-in">
                <p className="text-[#303030] text-sm leading-relaxed">{answers.regime}</p>
              </div>
            )}
            {step === "regime" &&
              renderAssistantOptions("regime", "investment", WHATSAPP_QUESTIONS.regime.options)}

            {/* Q4: investment */}
            {reachedOrPast("investment") && (
              <div className="bg-white rounded-xl rounded-tl-sm px-4 py-3 shadow-sm max-w-[85%] self-start animate-fade-in">
                <p className="text-[#303030] text-sm leading-relaxed">
                  {WHATSAPP_QUESTIONS.investment.label}
                </p>
              </div>
            )}
            {answers.investment && (
              <div className="bg-[#DCF8C6] rounded-xl rounded-tr-sm px-4 py-2 shadow-sm max-w-[85%] self-end animate-fade-in">
                <p className="text-[#303030] text-sm leading-relaxed">{answers.investment}</p>
              </div>
            )}
            {step === "investment" &&
              renderAssistantOptions(
                "investment",
                "regionConcern",
                WHATSAPP_QUESTIONS.investment.options,
              )}

            {/* Q5: region + concern */}
            {reachedOrPast("regionConcern") && (
              <div className="bg-white rounded-xl rounded-tl-sm px-4 py-3 shadow-sm max-w-[85%] self-start animate-fade-in">
                <p className="text-[#303030] text-sm leading-relaxed">
                  {WHATSAPP_QUESTIONS.regionConcern.label}
                </p>
              </div>
            )}
            {answers.regionConcern && (
              <div className="bg-[#DCF8C6] rounded-xl rounded-tr-sm px-4 py-2 shadow-sm max-w-[85%] self-end animate-fade-in">
                <p className="text-[#303030] text-sm leading-relaxed whitespace-pre-wrap break-words">
                  {answers.regionConcern}
                </p>
              </div>
            )}

            {/* Final assistant */}
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
                  onClick={() => goTo("timing")}
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20BA5C] text-white font-semibold py-3 rounded-xl transition-colors touch-manipulation"
                >
                  <MessageCircle className="w-5 h-5" />
                  Iniciar Conversa
                </button>
              </div>
            )}

            {step === "regionConcern" && (
              <form onSubmit={submitRegion} className="px-3 py-3 flex items-end gap-2">
                <textarea
                  value={regionDraft}
                  onChange={(e) => setRegionDraft(e.target.value)}
                  placeholder="Ex.: Zona Leste, Tatuapé. Nossa preocupação é a supervisão noturna."
                  maxLength={600}
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
      <div className="relative pointer-events-auto">
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

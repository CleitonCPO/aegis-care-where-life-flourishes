import { useState } from "react";
import { z } from "zod";
import { MessageCircle, ArrowRight, ArrowLeft } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { trackWhatsAppClick } from "@/lib/gtag";
import {
  WHATSAPP_QUESTIONS,
  buildWhatsAppMessage,
  buildWhatsAppUrl,
  type WhatsAppAnswers,
} from "@/lib/whatsapp";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const schema = z.object({
  timing: z.string().min(1, "Selecione uma opção"),
  condition: z.string().min(1, "Selecione uma opção"),
  regime: z.string().min(1, "Selecione uma opção"),
  investment: z.string().min(1, "Selecione uma opção"),
  regionConcern: z
    .string()
    .trim()
    .min(3, "Descreva brevemente a região e a principal preocupação")
    .max(600, "Resposta muito longa"),
});

const steps = [
  { key: "timing", type: "choice" as const, cfg: WHATSAPP_QUESTIONS.timing },
  { key: "condition", type: "choice" as const, cfg: WHATSAPP_QUESTIONS.condition },
  { key: "regime", type: "choice" as const, cfg: WHATSAPP_QUESTIONS.regime },
  { key: "investment", type: "choice" as const, cfg: WHATSAPP_QUESTIONS.investment },
  { key: "regionConcern", type: "text" as const, cfg: WHATSAPP_QUESTIONS.regionConcern },
];

const initialAnswers: WhatsAppAnswers = {
  timing: "",
  condition: "",
  regime: "",
  investment: "",
  regionConcern: "",
};

const WhatsAppFormDialog = ({ open, onOpenChange }: Props) => {
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<WhatsAppAnswers>(initialAnswers);
  const [error, setError] = useState<string | null>(null);

  const step = steps[stepIndex];
  const isLast = stepIndex === steps.length - 1;

  const reset = () => {
    setStepIndex(0);
    setAnswers(initialAnswers);
    setError(null);
  };

  const handleOpenChange = (v: boolean) => {
    onOpenChange(v);
    if (!v) setTimeout(reset, 300);
  };

  const setAnswer = (key: keyof WhatsAppAnswers, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    setError(null);
  };

  const goNext = () => {
    const value = answers[step.key as keyof WhatsAppAnswers];
    if (step.type === "choice" && !value) {
      setError("Selecione uma opção para continuar");
      return;
    }
    if (step.type === "text") {
      const parsed = schema.shape.regionConcern.safeParse(value);
      if (!parsed.success) {
        setError(parsed.error.issues[0].message);
        return;
      }
    }
    setError(null);
    setStepIndex((i) => Math.min(i + 1, steps.length - 1));
  };

  const goBack = () => {
    setError(null);
    setStepIndex((i) => Math.max(i - 1, 0));
  };

  const handleSubmit = () => {
    const parsed = schema.safeParse(answers);
    if (!parsed.success) {
      setError(parsed.error.issues[0].message);
      return;
    }
    const message = buildWhatsAppMessage(parsed.data as WhatsAppAnswers);
    const url = buildWhatsAppUrl(message);
    trackWhatsAppClick();
    window.open(url, "_blank", "noopener,noreferrer");
    handleOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl leading-tight">
            Vamos entender a necessidade da sua família
          </DialogTitle>
          <DialogDescription>
            Responda 5 perguntas rápidas para levarmos a conversa ao WhatsApp já com o contexto
            necessário.
          </DialogDescription>
        </DialogHeader>

        {/* Progress */}
        <div className="flex items-center gap-2 mt-2">
          {steps.map((_, i) => (
            <span
              key={i}
              className={`h-1 flex-1 rounded-full transition-colors ${
                i <= stepIndex ? "bg-[hsl(var(--teal-deep))]" : "bg-border"
              }`}
            />
          ))}
        </div>
        <p className="text-xs text-muted-foreground -mt-1">
          Etapa {stepIndex + 1} de {steps.length}
        </p>

        {/* Question */}
        <div className="mt-2">
          <p className="text-[0.7rem] tracking-[0.25em] uppercase text-muted-foreground mb-3">
            Pergunta {stepIndex + 1}
          </p>
          <h3 className="font-display text-lg md:text-xl leading-snug text-foreground mb-5">
            {step.cfg.label}
          </h3>

          {step.type === "choice" && "options" in step.cfg && (
            <div className="space-y-2">
              {step.cfg.options.map((opt) => {
                const selected = answers[step.key as keyof WhatsAppAnswers] === opt;
                return (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setAnswer(step.key as keyof WhatsAppAnswers, opt)}
                    className={`w-full text-left px-4 py-3 rounded-lg border transition-all text-sm leading-snug ${
                      selected
                        ? "border-[hsl(var(--teal-deep))] bg-[hsl(var(--teal-deep))]/5 text-foreground"
                        : "border-border bg-background hover:border-[hsl(var(--teal-deep))]/40 hover:bg-[hsl(var(--cream))]"
                    }`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          )}

          {step.type === "text" && (
            <Textarea
              value={answers.regionConcern}
              onChange={(e) => setAnswer("regionConcern", e.target.value)}
              placeholder="Ex.: Zona Leste, Tatuapé. Nossa maior preocupação é a segurança no banho e a supervisão noturna."
              rows={5}
              maxLength={600}
              autoFocus
            />
          )}

          {error && (
            <p className="text-sm font-medium text-destructive mt-3">{error}</p>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between gap-3 mt-4">
          <Button
            variant="ghost"
            onClick={goBack}
            disabled={stepIndex === 0}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Button>

          {isLast ? (
            <Button variant="cta" onClick={handleSubmit} className="gap-2">
              <MessageCircle className="w-4 h-4" />
              Enviar no WhatsApp
            </Button>
          ) : (
            <Button variant="cta" onClick={goNext} className="gap-2">
              Continuar
              <ArrowRight className="w-4 h-4" />
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WhatsAppFormDialog;

import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { trackWhatsAppClick } from "@/lib/gtag";

const ContactSection = () => {
  return (
    <section id="contato" className="py-28 md:py-40 bg-background">
      <div className="container-editorial">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-7">
            <span className="eyebrow mb-6 block">Conversar</span>
            <h2 className="font-display text-3xl md:text-[2.75rem] lg:text-5xl leading-[1.1] text-foreground mb-10">
              Estamos prontos para escutar a história da sua família.
            </h2>
            <p className="text-lg text-muted-foreground leading-[1.8] mb-12 max-w-xl prose-justified">
              Cada atendimento começa por uma conversa atenta. A coordenação da Aegis Care
              recebe seu contato pessoalmente, com a discrição que o momento exige.
            </p>

            <div className="space-y-px bg-border max-w-xl">
              <a
                href="tel:+5511920067183"
                className="group flex items-center gap-6 bg-background p-6 hover:bg-[hsl(var(--cream))] transition-colors duration-500"
              >
                <Phone className="w-5 h-5 text-[hsl(var(--teal-deep))]" />
                <div>
                  <p className="text-[0.7rem] tracking-[0.25em] uppercase text-muted-foreground mb-1">
                    Telefone · WhatsApp
                  </p>
                  <p className="font-display text-xl text-foreground">(11) 92006-7183</p>
                </div>
              </a>

              <a
                href="mailto:contato@aegiscare.com.br"
                className="group flex items-center gap-6 bg-background p-6 hover:bg-[hsl(var(--cream))] transition-colors duration-500"
              >
                <Mail className="w-5 h-5 text-[hsl(var(--teal-deep))]" />
                <div className="min-w-0">
                  <p className="text-[0.7rem] tracking-[0.25em] uppercase text-muted-foreground mb-1">
                    E-mail
                  </p>
                  <p className="font-display text-lg text-foreground break-all">
                    contato@aegiscare.com.br
                  </p>
                </div>
              </a>
            </div>

            <a
              href="https://api.whatsapp.com/send/?phone=5511920067183&text=Ol%C3%A1%20Aegis%20Care%2C%20gostaria%20de%20conversar%20sobre%20assist%C3%AAncia%20domiciliar%20para%20meu%20familiar.&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackWhatsAppClick}
              className="inline-block mt-12"
            >
              <Button variant="cta" size="xl" className="gap-3">
                <MessageCircle className="w-5 h-5" />
                Iniciar conversa
              </Button>
            </a>
          </div>

          <div className="lg:col-span-5">
            <div className="border border-border p-10 lg:p-12 bg-[hsl(var(--cream))]">
              <span className="eyebrow-gold eyebrow mb-6 block">Carreira</span>
              <h3 className="font-display text-2xl md:text-[1.7rem] text-foreground mb-6 leading-tight">
                Faça parte de uma equipe que entende cuidar como um ofício.
              </h3>
              <p className="text-muted-foreground leading-[1.8] mb-8 prose-justified">
                Buscamos profissionais sensíveis, técnicos e comprometidos com a excelência
                assistencial. Envie o seu currículo para conhecermos a sua trajetória.
              </p>
              <a
                href="mailto:contato@aegiscare.com.br?subject=Quero%20fazer%20parte%20da%20equipe%20Aegis%20Care&body=Ol%C3%A1%2C%20gostaria%20de%20fazer%20parte%20da%20equipe%20Aegis%20Care.%20Segue%20em%20anexo%20meu%20curr%C3%ADculo."
                className="inline-flex items-center gap-3 text-[hsl(var(--navy-deep))] font-medium text-xs tracking-[0.25em] uppercase border-b border-[hsl(var(--gold))] pb-1 hover:text-[hsl(var(--teal-deep))] transition-colors"
              >
                Enviar currículo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

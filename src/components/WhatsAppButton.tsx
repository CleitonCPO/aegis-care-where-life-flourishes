import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5511920067183"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5C] text-white min-w-[56px] min-h-[56px] md:min-w-0 md:min-h-0 md:px-5 md:py-4 rounded-full shadow-elevated hover:shadow-glow transition-all duration-300 touch-manipulation animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle className="w-6 h-6 md:w-5 md:h-5" />
      <span className="hidden md:inline font-medium text-sm">Fale Conosco</span>
    </a>
  );
};

export default WhatsAppButton;

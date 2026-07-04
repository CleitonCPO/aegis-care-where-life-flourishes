import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import WhatsAppFormDialog from "@/components/WhatsAppFormDialog";

type Ctx = {
  open: () => void;
};

const WhatsAppFormContext = createContext<Ctx | null>(null);

export const WhatsAppFormProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);

  return (
    <WhatsAppFormContext.Provider value={{ open }}>
      {children}
      <WhatsAppFormDialog open={isOpen} onOpenChange={setIsOpen} />
    </WhatsAppFormContext.Provider>
  );
};

export const useWhatsAppForm = () => {
  const ctx = useContext(WhatsAppFormContext);
  if (!ctx) {
    // Fallback no-op to avoid crashes if used outside provider during SSR/lazy load.
    return { open: () => {} };
  }
  return ctx;
};

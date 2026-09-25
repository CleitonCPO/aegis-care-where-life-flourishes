import { useEffect, useState, useCallback } from "react";

export type Region = "SP" | "MG";

const STORAGE_KEY = "aegis-region";
const EVENT = "aegis-region-change";

export const MG_WHATSAPP_URL =
  "https://wa.me/5511920067183?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Aegis%20Care%20e%20gostaria%20de%20conversar%20sobre%20cuidado%20domiciliar%20para%20um%20familiar%20em%20Minas%20Gerais.";

export const MG_PATH = "/belo-horizonte";

/** Visitas vindas de anúncios (Google Ads / campanhas) são tratadas como São Paulo. */
export const isCampaignVisit = (): boolean => {
  try {
    const params = new URLSearchParams(window.location.search);
    return ["gclid", "gbraid", "wbraid", "utm_source", "utm_medium", "utm_campaign"].some((key) =>
      params.has(key)
    );
  } catch {
    return false;
  }
};

// A escolha vale só enquanto a página está aberta: toda atualização pergunta de novo.
let currentRegion: Region | null = null;
try {
  localStorage.removeItem(STORAGE_KEY);
} catch {
  /* ignore */
}

export const getStoredRegion = (): Region | null => currentRegion;

export const setStoredRegion = (region: Region) => {
  currentRegion = region;
  window.dispatchEvent(new CustomEvent(EVENT, { detail: region }));
};

export const useRegion = () => {
  const [region, setRegionState] = useState<Region | null>(() =>
    typeof window === "undefined" ? null : getStoredRegion()
  );

  useEffect(() => {
    const handler = () => setRegionState(getStoredRegion());
    window.addEventListener(EVENT, handler);
    window.addEventListener("storage", handler);
    return () => {
      window.removeEventListener(EVENT, handler);
      window.removeEventListener("storage", handler);
    };
  }, []);

  const choose = useCallback((value: Region) => setStoredRegion(value), []);

  return { region, choose };
};

/**
 * Returns the WhatsApp link for the current region.
 * Minas Gerais users always get the MG link.
 */
export const useWhatsAppLink = () => {
  const { region } = useRegion();
  return useCallback(
    (defaultUrl: string) => (region === "MG" ? MG_WHATSAPP_URL : defaultUrl),
    [region]
  );
};

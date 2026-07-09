import { memo } from "react";
import logoWhite from "@/assets/aegis-care-logo-white.png.asset.json";

interface AnimatedLogoProps {
  isScrolled?: boolean;
}

const AnimatedLogo = memo((_props: AnimatedLogoProps) => {
  return (
    <div
      className="relative select-none animate-[logoReveal_1100ms_var(--ease-premium)_both]"
      aria-label="Aegis Care"
      style={{ height: "3.25rem" }}
    >
      <img
        src={logoWhite.url}
        alt="Aegis Care"
        width={220}
        height={80}
        loading="eager"
        fetchPriority="high"
        className="h-11 md:h-14 w-auto"
        style={{ background: "transparent" }}
      />
    </div>
  );
});

AnimatedLogo.displayName = "AnimatedLogo";

export default AnimatedLogo;

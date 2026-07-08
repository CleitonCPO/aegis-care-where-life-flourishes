import { memo } from "react";
import logoWhite from "@/assets/aegis-care-logo-white.png.asset.json";
import logoDark from "@/assets/aegis-care-logo.png.asset.json";

interface AnimatedLogoProps {
  isScrolled: boolean;
}

const AnimatedLogo = memo(({ isScrolled }: AnimatedLogoProps) => {
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
        className="h-11 md:h-14 w-auto transition-opacity duration-500"
        style={{ opacity: isScrolled ? 0 : 1 }}
      />
      <img
        src={logoDark.url}
        alt=""
        aria-hidden="true"
        width={220}
        height={80}
        loading="eager"
        className="absolute inset-0 h-11 md:h-14 w-auto transition-opacity duration-500"
        style={{ opacity: isScrolled ? 1 : 0 }}
      />
    </div>
  );
});

AnimatedLogo.displayName = "AnimatedLogo";

export default AnimatedLogo;

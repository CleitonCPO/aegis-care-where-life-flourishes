import { memo } from "react";
import logoAsset from "@/assets/logotipo-aegis-care.svg.asset.json";

interface AnimatedLogoProps {
  isScrolled: boolean;
}

const AnimatedLogo = memo(({ isScrolled }: AnimatedLogoProps) => {
  return (
    <div
      className="flex items-center select-none overflow-hidden"
      aria-label="Aegis Care"
    >
      <img
        src={logoAsset.url}
        alt="Aegis Care"
        width={212}
        height={84}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className="h-11 md:h-14 w-auto transition-[filter] duration-500"
        style={{
          animation: "logoReveal 1100ms var(--ease-premium) both",
          // Always render logo in white so it reads on both the dark hero and the petrol header
          filter: "brightness(0) invert(1)",
          opacity: isScrolled ? 0.98 : 1,
        }}
      />
      <span className="sr-only">Aegis Care</span>
    </div>
  );
});

AnimatedLogo.displayName = "AnimatedLogo";

export default AnimatedLogo;

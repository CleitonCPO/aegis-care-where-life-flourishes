import { memo } from "react";
import logo from "@/assets/aegis-care-logo.png.asset.json";

interface AnimatedLogoProps {
  isScrolled: boolean;
}

const AnimatedLogo = memo(({ isScrolled }: AnimatedLogoProps) => {
  return (
    <div className="flex items-center select-none overflow-hidden" aria-label="Aegis Care">
      <img
        src={logo.url}
        alt="Aegis Care"
        width={220}
        height={64}
        loading="eager"
        fetchPriority="high"
        className="h-11 md:h-14 w-auto animate-[logoShieldIn_900ms_var(--ease-premium)_both] transition-[filter] duration-500"
        style={{
          filter: isScrolled ? "none" : "brightness(0) invert(1)",
        }}
      />
    </div>
  );
});

AnimatedLogo.displayName = "AnimatedLogo";

export default AnimatedLogo;

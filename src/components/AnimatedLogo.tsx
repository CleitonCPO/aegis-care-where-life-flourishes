import { memo } from "react";
import AegisLogo from "./AegisLogo";

interface AnimatedLogoProps {
  isScrolled: boolean;
}

const AnimatedLogo = memo(({ isScrolled }: AnimatedLogoProps) => {
  return (
    <div
      className="flex items-center select-none overflow-hidden"
      aria-label="Aegis Care"
    >
      <AegisLogo
        className="h-11 md:h-14 w-auto transition-opacity duration-500"
        style={{
          animation: "logoReveal 1100ms var(--ease-premium) both",
          opacity: isScrolled ? 0.98 : 1,
        }}
      />
      <span className="sr-only">Aegis Care</span>
    </div>
  );
});

AnimatedLogo.displayName = "AnimatedLogo";

export default AnimatedLogo;

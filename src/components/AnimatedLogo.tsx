import { memo } from "react";
import shield from "@/assets/aegis-shield.webp";

interface AnimatedLogoProps {
  isScrolled: boolean;
}

const LETTERS = ["a", "e", "g", "i", "s"];

const AnimatedLogo = memo(({ isScrolled }: AnimatedLogoProps) => {
  return (
    <div className="flex items-center gap-2.5 select-none" aria-label="Aegis Care">
      <img
        src={shield}
        alt=""
        aria-hidden="true"
        width={52}
        height={52}
        loading="eager"
        fetchPriority="high"
        className="h-11 md:h-14 w-auto animate-[logoShieldIn_900ms_var(--ease-premium)_both]"
      />
      <div className="flex flex-col leading-none">
        <span className="flex overflow-hidden pb-1" aria-hidden="true">
          {LETTERS.map((l, i) => (
            <span
              key={i}
              className="inline-block font-display italic font-medium text-[2rem] md:text-[2.4rem] tracking-tight transition-colors duration-500"
              style={{
                animation: `logoLetterIn 700ms var(--ease-premium) both`,
                animationDelay: `${180 + i * 70}ms`,
                color: isScrolled ? "hsl(var(--navy-deep))" : "#ffffff",
              }}
            >
              {l}
            </span>
          ))}
        </span>
        <span
          className="text-[0.7rem] md:text-[0.8rem] tracking-[0.42em] uppercase font-semibold transition-colors duration-500"
          style={{
            color: "hsl(var(--teal-deep))",
            animation: "logoLetterIn 700ms var(--ease-premium) both",
            animationDelay: "620ms",
          }}
          aria-hidden="true"
        >
          Care
        </span>
      </div>
      <span className="sr-only">Aegis Care</span>
    </div>
  );
});

AnimatedLogo.displayName = "AnimatedLogo";

export default AnimatedLogo;

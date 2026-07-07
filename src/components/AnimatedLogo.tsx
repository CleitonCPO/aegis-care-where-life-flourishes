import { memo } from "react";
import shield from "@/assets/aegis-shield.webp";

interface AnimatedLogoProps {
  isScrolled: boolean;
}

const LETTERS = ["a", "e", "g", "i", "s"];

const AnimatedLogo = memo(({ isScrolled }: AnimatedLogoProps) => {
  return (
    <div className="flex items-center gap-2 select-none" aria-label="Aegis Care">
      <img
        src={shield}
        alt=""
        aria-hidden="true"
        width={52}
        height={48}
        loading="eager"
        fetchPriority="high"
        className="h-10 md:h-12 w-auto animate-[logoShieldIn_900ms_var(--ease-premium)_both]"
      />
      <div className="flex flex-col leading-none">
        <span className="flex overflow-hidden" aria-hidden="true">
          {LETTERS.map((l, i) => (
            <span
              key={i}
              className="inline-block font-serif italic font-medium text-[1.6rem] md:text-[1.85rem] tracking-tight transition-colors duration-500"
              style={{
                animation: `logoLetterIn 700ms var(--ease-premium) both`,
                animationDelay: `${180 + i * 70}ms`,
                color: isScrolled ? "hsl(var(--teal-deep))" : "#ffffff",
              }}
            >
              {l}
            </span>
          ))}
        </span>
        <span
          className="text-[0.6rem] md:text-[0.65rem] tracking-[0.35em] uppercase mt-0.5 font-semibold transition-colors duration-500"
          style={{
            color: isScrolled ? "hsl(var(--teal-deep) / 0.75)" : "rgba(255,255,255,0.8)",
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

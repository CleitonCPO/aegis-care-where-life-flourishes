import { useEffect, useRef, type ReactNode } from "react";

/** Load content early, but reveal each element only when it reaches the viewport. */
const ScrollReveal = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root || typeof IntersectionObserver === "undefined") return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches) return;
    const tracked = new Set<HTMLElement>();
    const reveal = (element: HTMLElement) => {
      element.classList.add("scroll-reveal-visible");
      observer.unobserve(element);
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target instanceof HTMLElement) reveal(entry.target);
      });
    }, { threshold: 0, rootMargin: "0px 0px -40px 0px" });

    const register = () => {
      root.querySelectorAll<HTMLElement>("h2, h3, p, picture, .eyebrow, a").forEach((element) => {
        if (tracked.has(element) || element.closest("[data-section-loading]")) return;
        // Avoid nested entrances, which compound opacity and movement.
        if (element.parentElement?.closest("[data-scroll-reveal]")) return;
        tracked.add(element);
        element.setAttribute("data-scroll-reveal", "");
        if (element.getBoundingClientRect().bottom < 0) reveal(element);
        else observer.observe(element);
      });
    };
    register();
    const mutations = new MutationObserver(register);
    mutations.observe(root, { childList: true, subtree: true });
    const showAll = () => {
      if (!motion.matches) return;
      tracked.forEach(reveal);
      observer.disconnect();
      mutations.disconnect();
    };
    motion.addEventListener?.("change", showAll);
    return () => {
      observer.disconnect();
      mutations.disconnect();
      motion.removeEventListener?.("change", showAll);
      tracked.forEach((element) => {
        element.removeAttribute("data-scroll-reveal");
        element.classList.remove("scroll-reveal-visible");
      });
    };
  }, []);

  return <div ref={ref} className="contents">{children}</div>;
};

export default ScrollReveal;
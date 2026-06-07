// Subtle, premium scroll-reveal — adds gentle fade/rise to section content as
// it enters the viewport. Designed to communicate calm sophistication without
// being showy. Respects prefers-reduced-motion via CSS.

const REVEAL_ATTR = "data-reveal";
const STATE_ATTR = "data-revealed";

// Sections / containers whose direct children should fade in delicately.
const AUTO_SELECTORS = [
  "section",
  "header.site-reveal",
  "footer",
  "[data-reveal-group]",
];

// Skip elements that handle their own motion or shouldn't be hidden initially.
const SKIP_SELECTORS = [
  "[data-no-reveal]",
  "script",
  "style",
  "noscript",
];

const skipMatcher = SKIP_SELECTORS.join(",");

let observer: IntersectionObserver | null = null;

function ensureObserver() {
  if (observer || typeof window === "undefined") return observer;
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          el.setAttribute(STATE_ATTR, "true");
          observer?.unobserve(el);
        }
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );
  return observer;
}

function tagChildren(root: ParentNode) {
  AUTO_SELECTORS.forEach((sel) => {
    root.querySelectorAll(sel).forEach((section) => {
      Array.from(section.children).forEach((child, i) => {
        const el = child as HTMLElement;
        if (el.matches(skipMatcher)) return;
        if (el.hasAttribute(REVEAL_ATTR)) return;
        // Skip absolutely / fixed positioned layers (background images, overlays).
        const pos = getComputedStyle(el).position;
        if (pos === "absolute" || pos === "fixed") return;
        el.setAttribute(REVEAL_ATTR, "");
        el.setAttribute(STATE_ATTR, "false");
        const delay = Math.min(i, 6) * 90;
        if (delay > 0) el.style.setProperty("--reveal-delay", `${delay}ms`);
        ensureObserver()?.observe(el);
      });
    });
  });
}

export function initScrollReveal() {
  if (typeof window === "undefined") return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  document.documentElement.classList.add("reveal-ready");

  const run = () => tagChildren(document.body);
  run();

  // Watch for SPA route changes / lazy-loaded sections.
  const mo = new MutationObserver(() => run());
  mo.observe(document.body, { childList: true, subtree: true });
}

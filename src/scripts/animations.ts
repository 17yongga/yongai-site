// Lightweight, CSS-first motion for public YongAI pages.
// IntersectionObserver only toggles state; transforms stay compositor-friendly.

export function initAnimations() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = window.matchMedia('(max-width: 640px)').matches;
  const revealElements = document.querySelectorAll<HTMLElement>('.reveal, [data-reveal]');

  if (revealElements.length === 0) return;

  document.documentElement.classList.add('motion-ready');

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealElements.forEach((element) => {
      element.classList.add('visible', 'is-visible');
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          const delay = Number.parseFloat(
            getComputedStyle(element).getPropertyValue('--reveal-delay')
          ) || 0;

          element.classList.add('visible', 'is-visible');
          element.animate(
            [
              { opacity: 0, translate: `0 ${isMobile ? 12 : 14}px` },
              { opacity: 1, translate: '0 0' },
            ],
            {
              duration: isMobile ? 900 : 680,
              delay: delay + (isMobile ? 40 : 0),
              easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
              fill: 'backwards',
            }
          );
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
  );

  revealElements.forEach((el) => observer.observe(el));
}

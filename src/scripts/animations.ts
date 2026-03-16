// Minimal animations — only what's actually needed
// No GSAP dependency for the main page; CSS handles most transitions

export function initAnimations() {
  // Lightweight reveal on scroll using IntersectionObserver
  // (Replaces the heavy GSAP ScrollTrigger approach)
  const revealElements = document.querySelectorAll('.reveal');

  if (revealElements.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  revealElements.forEach((el) => observer.observe(el));
}

// Initialize when DOM is ready
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', initAnimations);
  document.addEventListener('astro:page-load', initAnimations);
}

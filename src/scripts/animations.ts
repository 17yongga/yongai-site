import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Initialize GSAP animations
export function initAnimations() {
  // Reveal animations on scroll
  const revealElements = document.querySelectorAll('.reveal');
  
  revealElements.forEach((element, index) => {
    gsap.set(element, { 
      opacity: 0, 
      y: 30 
    });
    
    ScrollTrigger.create({
      trigger: element,
      start: 'top 85%',
      onEnter: () => {
        gsap.to(element, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          delay: index * 0.1
        });
      }
    });
  });

  // Staggered card animations
  const cardElements = document.querySelectorAll('.stagger-card');
  if (cardElements.length > 0) {
    gsap.set(cardElements, { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    });
    
    ScrollTrigger.create({
      trigger: cardElements[0],
      start: 'top 80%',
      onEnter: () => {
        gsap.to(cardElements, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.2
        });
      }
    });
  }

  // Parallax hero background effect
  const heroBackground = document.querySelector('.hero-bg');
  if (heroBackground) {
    gsap.to(heroBackground, {
      y: -100,
      ease: 'none',
      scrollTrigger: {
        trigger: heroBackground,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    });
  }

  // Counter animations
  const counters = document.querySelectorAll('[data-counter]');
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-counter') || '0');
    
    ScrollTrigger.create({
      trigger: counter,
      start: 'top 80%',
      onEnter: () => {
        gsap.fromTo(counter, 
          { innerHTML: 0 },
          {
            innerHTML: target,
            duration: 2,
            ease: 'power2.out',
            snap: { innerHTML: 1 },
            onUpdate: function() {
              counter.innerHTML = Math.ceil(counter.innerHTML);
            }
          }
        );
      }
    });
  });

  // Floating elements
  const floatingElements = document.querySelectorAll('.float-element');
  floatingElements.forEach((element, index) => {
    gsap.to(element, {
      y: -20,
      duration: 3 + index * 0.5,
      ease: 'power1.inOut',
      repeat: -1,
      yoyo: true,
      delay: index * 0.2
    });
  });

  // Progress bars
  const progressBars = document.querySelectorAll('.progress-bar');
  progressBars.forEach(bar => {
    const progress = bar.querySelector('.progress-fill');
    const percentage = bar.getAttribute('data-percentage') || '0';
    
    ScrollTrigger.create({
      trigger: bar,
      start: 'top 80%',
      onEnter: () => {
        gsap.to(progress, {
          width: `${percentage}%`,
          duration: 1.5,
          ease: 'power2.out'
        });
      }
    });
  });

  // Split text reveal
  const splitTextElements = document.querySelectorAll('.split-text');
  splitTextElements.forEach(element => {
    const text = element.textContent;
    element.innerHTML = text.split('').map(char => 
      `<span class="char">${char === ' ' ? '&nbsp;' : char}</span>`
    ).join('');
    
    const chars = element.querySelectorAll('.char');
    
    gsap.set(chars, { opacity: 0, y: 50 });
    
    ScrollTrigger.create({
      trigger: element,
      start: 'top 85%',
      onEnter: () => {
        gsap.to(chars, {
          opacity: 1,
          y: 0,
          duration: 0.1,
          ease: 'power3.out',
          stagger: 0.02
        });
      }
    });
  });

  // Morphing shapes
  const morphElements = document.querySelectorAll('.morph-shape');
  morphElements.forEach(element => {
    gsap.to(element, {
      rotation: 360,
      scale: 1.1,
      duration: 10,
      ease: 'none',
      repeat: -1
    });
  });

  // Smooth page transitions
  window.addEventListener('beforeunload', () => {
    gsap.to(document.body, {
      opacity: 0,
      duration: 0.3,
      ease: 'power2.out'
    });
  });

  // Navbar scroll behavior
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    ScrollTrigger.create({
      start: 'top -100',
      end: 'bottom top',
      onUpdate: (self) => {
        if (self.direction === -1) {
          // Scrolling up
          gsap.to(navbar, { y: 0, duration: 0.3 });
        } else {
          // Scrolling down
          gsap.to(navbar, { y: -100, duration: 0.3 });
        }
      }
    });
  }

  // Button hover effects
  const buttons = document.querySelectorAll('.btn-animate');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      gsap.to(button, {
        scale: 1.05,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
    
    button.addEventListener('mouseleave', () => {
      gsap.to(button, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
  });
}

// Utility function to create reveal timeline
export function createRevealTimeline(elements: NodeListOf<Element> | Element[], options: any = {}) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: elements[0] || elements,
      start: options.start || 'top 80%',
      ...options.scrollTrigger
    }
  });

  if (elements instanceof NodeList || Array.isArray(elements)) {
    elements.forEach((element, index) => {
      tl.from(element, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out'
      }, index * 0.1);
    });
  } else {
    tl.from(elements, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: 'power3.out'
    });
  }

  return tl;
}

// Utility function for custom entrance animations
export function animateIn(element: Element, options: any = {}) {
  return gsap.fromTo(element, 
    {
      opacity: 0,
      y: 30,
      scale: 0.95,
      ...options.from
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: 'power3.out',
      ...options.to
    }
  );
}

// Initialize animations when DOM is ready
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', initAnimations);
}
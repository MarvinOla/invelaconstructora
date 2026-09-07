/* ============================================================
   INVELA CONSTRUCTORA — main.js
   Orquestador de todos los módulos
   ============================================================ */

import { initNavbar }       from './components/navbar.js';
import { initScrollReveal, initProgressBar, initCursor,
         initParallax, initCounters, initTimeline,
         initValues, initCardTilt } from './components/animations.js';
import { initThreeRenders } from './components/three-render.js';
import { initProjectFilters } from './components/filters.js';

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initProgressBar();
  initScrollReveal();
  initCursor();
  initParallax();
  initCounters();
  initTimeline();
  initValues();
  initCardTilt();
  initProjectFilters();

  // Three.js después de que cargue la librería desde CDN
  if (window.THREE) {
    initThreeRenders();
  } else {
    const script = document.querySelector('script[data-three]');
    if (script) {
      script.addEventListener('load', initThreeRenders);
    }
  }
});

// Marcar hero como cargado (dispara animación de escala)
window.addEventListener('load', () => {
  document.querySelector('.hero')?.classList.add('loaded');
});

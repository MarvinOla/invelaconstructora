/* ============================================================
   INVELA — Animaciones de scroll: reveal, parallax,
   progress bar, timeline, cursor personalizado
   ============================================================ */

// ---- Progress bar ----
export function initProgressBar() {
  const bar = document.getElementById('progress-bar');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const max    = document.documentElement.scrollHeight - window.innerHeight;
    const pct    = (window.scrollY / max) * 100;
    bar.style.width = pct + '%';
  }, { passive: true });
}

// ---- Scroll reveal con IntersectionObserver ----
export function initScrollReveal() {
  const els = document.querySelectorAll('[data-reveal]');
  if (!els.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  els.forEach(el => io.observe(el));
}

// ---- Cursor personalizado ----
export function initCursor() {
  const dot  = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');
  if (!dot || !ring) return;

  let mouseX = 0, mouseY = 0;
  let ringX  = 0, ringY  = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + 'px';
    dot.style.top  = mouseY + 'px';
  });

  // Ring con lag suave
  function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    ring.style.left = ringX + 'px';
    ring.style.top  = ringY + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  // Hover en interactivos
  const interactives = 'a, button, .btn, .service-card, .feat-card, .project-card, .value-card, .sector-card';
  document.querySelectorAll(interactives).forEach(el => {
    el.addEventListener('mouseenter', () => {
      dot.classList.add('active');
      ring.classList.add('active');
    });
    el.addEventListener('mouseleave', () => {
      dot.classList.remove('active');
      ring.classList.remove('active');
    });
  });

  // Ocultar fuera de la ventana
  document.addEventListener('mouseleave', () => {
    dot.style.opacity  = '0';
    ring.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    dot.style.opacity  = '1';
    ring.style.opacity = '1';
  });
}

// ---- Parallax suave en el hero ----
export function initParallax() {
  const heroImg = document.querySelector('.hero-bg img');
  if (!heroImg) return;

  window.addEventListener('scroll', () => {
    const sy = window.scrollY;
    if (sy < window.innerHeight) {
      heroImg.style.transform = `scale(1.02) translateY(${sy * 0.3}px)`;
    }
  }, { passive: true });
}

// ---- Counter animado ----
export function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el     = e.target;
      const target = parseInt(el.dataset.count, 10);
      const suffix = el.dataset.suffix || '';
      const dur    = 1800;
      const start  = performance.now();

      function step(now) {
        const elapsed = now - start;
        const pct     = Math.min(elapsed / dur, 1);
        const ease    = 1 - Math.pow(1 - pct, 3); // ease-out-cubic
        el.textContent = Math.floor(ease * target) + suffix;
        if (pct < 1) requestAnimationFrame(step);
      }

      requestAnimationFrame(step);
      io.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(c => io.observe(c));
}

// ---- Timeline: línea que progresa + activar pasos ----
export function initTimeline() {
  const line  = document.querySelector('.timeline-line-fill');
  const steps = document.querySelectorAll('.timeline-step');
  if (!steps.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('step-visible');
      }
    });
  }, { threshold: 0.4 });

  steps.forEach(s => io.observe(s));

  // Progreso de la línea según scroll
  if (line) {
    const container = document.querySelector('.timeline');
    window.addEventListener('scroll', () => {
      if (!container) return;
      const rect   = container.getBoundingClientRect();
      const total  = container.offsetHeight;
      const visible = Math.max(0, window.innerHeight - rect.top);
      const pct    = Math.min(100, (visible / total) * 100);
      line.style.height = pct + '%';
    }, { passive: true });
  }
}

// ---- Valores CREOH: activar al aparecer ----
export function initValues() {
  const cards = document.querySelectorAll('.value-card');
  if (!cards.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in-view');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });

  cards.forEach(c => io.observe(c));
}

// ---- Efecto hover 3D en tarjetas ----
export function initCardTilt() {
  document.querySelectorAll('.service-card, .project-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r   = card.getBoundingClientRect();
      const x   = e.clientX - r.left - r.width  / 2;
      const y   = e.clientY - r.top  - r.height / 2;
      const rx  = (y / r.height) * -6;
      const ry  = (x / r.width)  *  6;
      card.style.transform = `translateY(-8px) perspective(600px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

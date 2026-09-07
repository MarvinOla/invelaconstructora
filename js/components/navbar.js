/* ============================================================
   INVELA — Navbar: scroll state + mobile menu + active links
   ============================================================ */

export function initNavbar() {
  const navbar   = document.querySelector('.navbar');
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileNav = document.querySelector('.nav-mobile');

  if (!navbar) return;

  // ---- Scroll: transparente → sólida ----
  const onScroll = () => {
    if (window.scrollY > 60) {
      navbar.classList.add('is-scrolled');
      navbar.classList.remove('is-top');
    } else {
      navbar.classList.remove('is-scrolled');
      navbar.classList.add('is-top');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // estado inicial

  // ---- Mobile menu ----
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      const open = hamburger.classList.toggle('is-open');
      mobileNav.classList.toggle('is-open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });

    // Cerrar al hacer clic en link
    mobileNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('is-open');
        mobileNav.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });
  }

  // ---- Marcar link activo según página actual ----
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-menu a, .nav-mobile a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
}

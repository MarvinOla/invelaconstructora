/* ============================================================
   INVELA CONSTRUCTORA — Script consolidado IIFE
   Sin módulos ES — compatible con file://
   ============================================================ */

(function () {
  'use strict';

  /* =========================================================
     INYECCIÓN DE COMPONENTES (navbar + footer)
     Cada página HTML solo necesita <div id="site-nav"> y
     <div id="site-footer"> — el resto se genera aquí.
     ========================================================= */
  var ARROW_SVG = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>';

  function injectComponents(b) {
    b = b || '';

    var nav = document.getElementById('site-nav');
    if (nav) {
      nav.innerHTML =
        '<div id="progress-bar"></div>' +
        '<div class="cursor-dot"></div>' +
        '<div class="cursor-ring"></div>' +
        '<header class="navbar is-top">' +
          '<nav class="nav-inner" aria-label="Navegación principal">' +
            '<a href="' + b + 'index.html" class="nav-logo" aria-label="INVELA — Inicio">' +
              '<img src="' + b + 'assets/logo/logo.gif" alt="INVELA Constructora" />' +
            '</a>' +
            '<ul class="nav-menu" role="list">' +
              '<li><a href="' + b + 'index.html">Inicio</a></li>' +
              '<li><a href="' + b + 'nosotros.html">Nosotros</a></li>' +
              '<li><a href="' + b + 'servicios.html">Servicios</a></li>' +
              '<li><a href="' + b + 'proyectos.html">Proyectos</a></li>' +
              '<li><a href="' + b + 'experiencia.html">Experiencia</a></li>' +
              '<li><a href="' + b + 'contacto.html">Contacto</a></li>' +
            '</ul>' +
            '<div class="nav-cta">' +
              '<a href="' + b + 'contacto.html" class="btn btn--primary">Cotiza tu proyecto ' + ARROW_SVG + '</a>' +
            '</div>' +
            '<button class="nav-hamburger" aria-label="Abrir menú" aria-expanded="false">' +
              '<span></span><span></span><span></span>' +
            '</button>' +
          '</nav>' +
          '<div class="nav-mobile" role="dialog" aria-label="Menú móvil">' +
            '<ul role="list">' +
              '<li><a href="' + b + 'index.html">Inicio</a></li>' +
              '<li><a href="' + b + 'nosotros.html">Nosotros</a></li>' +
              '<li><a href="' + b + 'servicios.html">Servicios</a></li>' +
              '<li><a href="' + b + 'proyectos.html">Proyectos</a></li>' +
              '<li><a href="' + b + 'experiencia.html">Experiencia</a></li>' +
              '<li><a href="' + b + 'contacto.html">Contacto</a></li>' +
            '</ul>' +
            '<a href="' + b + 'contacto.html" class="btn btn--primary">Cotiza tu proyecto →</a>' +
          '</div>' +
        '</header>';
    }

    var footerEl = document.getElementById('site-footer');
    if (footerEl) {
      footerEl.innerHTML =
        '<footer class="site-footer">' +
          '<div class="container">' +
            '<div class="footer-grid">' +
              '<div class="footer-brand">' +
                '<a href="' + b + 'index.html" class="footer-logo">' +
                  '<img src="' + b + 'assets/logo/logo.gif" alt="INVELA Constructora" />' +
                '</a>' +
                '<p>Constructora guatemalteca: urbanización, residencial, industrial, eléctrico y obra civil. Construimos con visión, ejecutamos con precisión.</p>' +
                '<div class="footer-socials">' +
                  '<a href="#" class="social-btn" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg></a>' +
                  '<a href="#" class="social-btn" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="18" height="18"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a>' +
                  '<a href="#" class="social-btn" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg></a>' +
                '</div>' +
              '</div>' +
              '<div class="footer-col"><h4>Empresa</h4><ul>' +
                '<li><a href="' + b + 'nosotros.html">Nosotros</a></li>' +
                '<li><a href="' + b + 'servicios.html">Servicios</a></li>' +
                '<li><a href="' + b + 'proyectos.html">Proyectos</a></li>' +
                '<li><a href="' + b + 'experiencia.html">Experiencia</a></li>' +
                '<li><a href="' + b + 'trabaja-con-nosotros.html">Trabaja con nosotros</a></li>' +
              '</ul></div>' +
              '<div class="footer-col"><h4>Proyectos</h4><ul>' +
                '<li><a href="' + b + 'proyectos/atria.html">Atria</a></li>' +
                '<li><a href="' + b + 'proyectos/altos-de-guayacan.html">Altos de Guayacán</a></li>' +
                '<li><a href="' + b + 'proyectos.html">Ver todos</a></li>' +
              '</ul></div>' +
              '<div class="footer-col"><h4>Contacto</h4><ul>' +
                '<li>Guatemala</li>' +
                '<li><a href="' + b + 'contacto.html">Escríbenos</a></li>' +
              '</ul></div>' +
            '</div>' +
            '<div class="footer-bottom">' +
              '<span>© 2026 INVELA Constructora · 16 años construyendo Guatemala.</span>' +
              '<span class="footer-bim-badge">✦ Guatemala · Centroamérica</span>' +
            '</div>' +
          '</div>' +
        '</footer>';
    }
  }

  /* =========================================================
     NAVBAR
     ========================================================= */
  function initNavbar() {
    var navbar    = document.querySelector('.navbar');
    var hamburger = document.querySelector('.nav-hamburger');
    var mobileNav = document.querySelector('.nav-mobile');
    if (!navbar) return;

    function onScroll() {
      if (window.scrollY > 60) {
        navbar.classList.add('is-scrolled');
        navbar.classList.remove('is-top');
      } else {
        navbar.classList.remove('is-scrolled');
        navbar.classList.add('is-top');
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    if (hamburger && mobileNav) {
      hamburger.addEventListener('click', function () {
        var open = hamburger.classList.toggle('is-open');
        hamburger.setAttribute('aria-expanded', open);
        mobileNav.classList.toggle('is-open', open);
        document.body.style.overflow = open ? 'hidden' : '';
      });
      mobileNav.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
          hamburger.classList.remove('is-open');
          mobileNav.classList.remove('is-open');
          document.body.style.overflow = '';
        });
      });
    }

    // Active link
    var path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-menu a, .nav-mobile a').forEach(function (a) {
      var href = a.getAttribute('href');
      if (href && href.split('/').pop().split('#')[0] === path) {
        a.classList.add('active');
      }
    });
  }

  /* =========================================================
     PROGRESS BAR
     ========================================================= */
  function initProgressBar() {
    var bar = document.getElementById('progress-bar');
    if (!bar) return;
    window.addEventListener('scroll', function () {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      if (max <= 0) return;
      bar.style.width = (window.scrollY / max * 100) + '%';
    }, { passive: true });
  }

  /* =========================================================
     CURSOR PERSONALIZADO
     ========================================================= */
  function initCursor() {
    var dot  = document.querySelector('.cursor-dot');
    var ring = document.querySelector('.cursor-ring');
    if (!dot || !ring) return;

    if (window.matchMedia('(pointer: coarse)').matches) {
      dot.style.display = ring.style.display = 'none';
      return;
    }

    var mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

    document.addEventListener('mousemove', function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = mouseX + 'px';
      dot.style.top  = mouseY + 'px';
    });

    (function animateRing() {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = ringX + 'px';
      ring.style.top  = ringY + 'px';
      requestAnimationFrame(animateRing);
    }());

    document.querySelectorAll('a, button, .btn, .service-card, .feat-card, .project-card, .value-card, .sector-card, .filter-btn').forEach(function (el) {
      el.addEventListener('mouseenter', function () { dot.classList.add('active'); ring.classList.add('active'); });
      el.addEventListener('mouseleave', function () { dot.classList.remove('active'); ring.classList.remove('active'); });
    });

    document.addEventListener('mouseleave', function () { dot.style.opacity = ring.style.opacity = '0'; });
    document.addEventListener('mouseenter', function () { dot.style.opacity = ring.style.opacity = '1'; });
  }

  /* =========================================================
     SCROLL REVEAL
     ========================================================= */
  function initScrollReveal() {
    var els = document.querySelectorAll('[data-reveal]');
    if (!els.length || !window.IntersectionObserver) {
      els.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -60px 0px' });

    els.forEach(function (el) { io.observe(el); });
  }

  /* =========================================================
     PARALLAX HERO
     ========================================================= */
  function initParallax() {
    var heroBg = document.querySelector('.hero-bg');
    if (!heroBg) return;
    window.addEventListener('scroll', function () {
      if (window.scrollY < window.innerHeight) {
        heroBg.style.transform = 'translateY(' + (window.scrollY * 0.3) + 'px)';
      }
    }, { passive: true });
  }

  /* =========================================================
     COUNTER ANIMADO
     ========================================================= */
  function initCounters() {
    var counters = document.querySelectorAll('[data-count]');
    if (!counters.length || !window.IntersectionObserver) return;

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el     = e.target;
        var target = parseInt(el.getAttribute('data-count'), 10);
        var suffix = el.getAttribute('data-suffix') || '';
        var start  = performance.now();

        (function step(now) {
          var pct  = Math.min((now - start) / 1800, 1);
          var ease = 1 - Math.pow(1 - pct, 3);
          el.textContent = Math.floor(ease * target) + suffix;
          if (pct < 1) requestAnimationFrame(step);
        }(start));
        io.unobserve(el);
      });
    }, { threshold: 0.5 });

    counters.forEach(function (c) { io.observe(c); });
  }

  /* =========================================================
     TIMELINE
     ========================================================= */
  function initTimeline() {
    var lineFill = document.querySelector('.timeline-line-fill');
    var steps    = document.querySelectorAll('.timeline-step');
    if (!steps.length) return;

    if (window.IntersectionObserver) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) e.target.classList.add('step-visible');
        });
      }, { threshold: 0.35 });
      steps.forEach(function (s) { io.observe(s); });
    }

    if (lineFill) {
      var container = document.querySelector('.timeline');
      window.addEventListener('scroll', function () {
        if (!container) return;
        var rect    = container.getBoundingClientRect();
        var total   = container.offsetHeight;
        var visible = Math.max(0, window.innerHeight - rect.top);
        lineFill.style.height = Math.min(100, (visible / total) * 100) + '%';
      }, { passive: true });
    }
  }

  /* =========================================================
     VALORES CREOH
     ========================================================= */
  function initValues() {
    var cards = document.querySelectorAll('.value-card');
    if (!cards.length || !window.IntersectionObserver) return;

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in-view'); io.unobserve(e.target); }
      });
    }, { threshold: 0.25 });

    cards.forEach(function (c) { io.observe(c); });
  }

  /* =========================================================
     FILTROS DE PROYECTOS
     ========================================================= */
  function initFilters() {
    var btns  = document.querySelectorAll('.filter-btn');
    var cards = document.querySelectorAll('.project-card');
    if (!btns.length) return;

    btns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var filter = btn.getAttribute('data-filter');
        btns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        cards.forEach(function (card) {
          var show = filter === 'all' || card.getAttribute('data-sector') === filter;
          card.style.display = show ? '' : 'none';
          if (show) card.style.animation = 'fadeInUp 0.35s ease both';
        });
      });
    });
  }

  /* =========================================================
     CARD TILT 3D
     ========================================================= */
  function initCardTilt() {
    document.querySelectorAll('.service-card, .feat-card').forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        var r = card.getBoundingClientRect();
        var x = e.clientX - r.left - r.width  / 2;
        var y = e.clientY - r.top  - r.height / 2;
        card.style.transform = 'translateY(-6px) perspective(600px) rotateX(' + (-y / r.height * 5) + 'deg) rotateY(' + (x / r.width * 5) + 'deg)';
      });
      card.addEventListener('mouseleave', function () { card.style.transform = ''; });
    });
  }

  /* =========================================================
     HERO LOADED
     ========================================================= */
  function initHero() {
    var hero = document.querySelector('.hero');
    if (hero) setTimeout(function () { hero.classList.add('loaded'); }, 80);
  }

  /* =========================================================
     STICKY SIDEBAR (Servicios)
     ========================================================= */
  function initStickySidebar() {
    var sidebar = document.querySelector('.svc-sidebar');
    var links   = document.querySelectorAll('.svc-nav-link');
    var sections = document.querySelectorAll('.svc-section');
    if (!sidebar || !sections.length) return;

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          links.forEach(function (l) { l.classList.remove('active'); });
          var id = e.target.getAttribute('id');
          var active = sidebar.querySelector('[href="#' + id + '"]');
          if (active) active.classList.add('active');
        }
      });
    }, { rootMargin: '-30% 0px -60% 0px', threshold: 0 });

    sections.forEach(function (s) { io.observe(s); });

    links.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        var target = document.querySelector(link.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  /* =========================================================
     GALERÍA HORIZONTAL (proyecto individual)
     ========================================================= */
  function initHorzGallery() {
    document.querySelectorAll('.horz-gallery').forEach(function (gallery) {
      var isDragging = false, startX = 0, scrollLeft = 0;
      gallery.addEventListener('mousedown', function (e) {
        isDragging = true;
        startX = e.pageX - gallery.offsetLeft;
        scrollLeft = gallery.scrollLeft;
        gallery.style.cursor = 'grabbing';
      });
      document.addEventListener('mouseup', function () { isDragging = false; gallery.style.cursor = 'grab'; });
      gallery.addEventListener('mousemove', function (e) {
        if (!isDragging) return;
        e.preventDefault();
        gallery.scrollLeft = scrollLeft - (e.pageX - gallery.offsetLeft - startX) * 1.5;
      });
    });
  }

  /* =========================================================
     VIDEO INTRO (scroll to reveal hero)
     ========================================================= */
  function initVideoIntro() {
    var intro = document.getElementById('video-intro');
    if (!intro) return;

    var video = intro.querySelector('video');
    var navbar = document.querySelector('.navbar');

    if (navbar) navbar.classList.add('nav-hidden');

    var soundBtn = document.createElement('button');
    soundBtn.className = 'vi-sound-btn';
    soundBtn.setAttribute('aria-label', 'Activar sonido');
    soundBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" width="22" height="22"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25M11.25 5.636l-4.5 3.364H3v6h3.75l4.5 3.364V5.636z"/></svg>';
    intro.appendChild(soundBtn);

    soundBtn.addEventListener('click', function () {
      if (video) {
        video.muted = !video.muted;
        soundBtn.innerHTML = video.muted
          ? '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" width="22" height="22"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25M11.25 5.636l-4.5 3.364H3v6h3.75l4.5 3.364V5.636z"/></svg>'
          : '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" width="22" height="22"><path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M11.25 5.636l-4.5 3.364H3v6h3.75l4.5 3.364V5.636z"/></svg>';
        soundBtn.setAttribute('aria-label', video.muted ? 'Activar sonido' : 'Silenciar');
      }
    });

    var dismissed = false;
    function dismissIntro() {
      if (dismissed) return;
      dismissed = true;
      intro.classList.add('vi-hidden');
      if (navbar) navbar.classList.remove('nav-hidden');
      if (video) { video.muted = true; }
      setTimeout(function () {
        intro.style.display = 'none';
        if (video) { video.pause(); }
      }, 1800);
    }

    window.addEventListener('scroll', function () {
      if (window.scrollY > 80) dismissIntro();
    }, { passive: true });

    window.addEventListener('wheel', function (e) {
      if (e.deltaY > 0) dismissIntro();
    }, { passive: true });

    var touchY = 0;
    intro.addEventListener('touchstart', function (e) { touchY = e.touches[0].clientY; }, { passive: true });
    intro.addEventListener('touchmove', function (e) {
      if (touchY - e.touches[0].clientY > 40) dismissIntro();
    }, { passive: true });
  }

  /* =========================================================
     THREE.JS RENDERS
     ========================================================= */
  function initThree() {
    var THREE = window.THREE;
    if (!THREE) return;

    var ACCENT = 0xF5C518;
    var DIM    = 0x2a2a2a;

    function matA() { return new THREE.LineBasicMaterial({ color: ACCENT }); }
    function matD() { return new THREE.LineBasicMaterial({ color: DIM   }); }

    var allBoxes = [];

    var COL_WALL  = 0xEEEEEE;
    var COL_GREEN = 0x4CAF50;
    var COL_POOL  = 0x4FC3F7;
    var COL_WOOD  = 0xBC8F5F;
    var COL_ROOF  = 0xC0A882;
    var COL_GLASS = 0x87CEEB;
    var COL_CONC  = 0x999999;

    function addBox(scene, mat, x, y, z, w, h, d, fillColor) {
      var geo   = new THREE.BoxGeometry(w, h, d);
      var edges = new THREE.EdgesGeometry(geo);
      var wire  = new THREE.LineSegments(edges, mat);
      wire.position.set(x, y + h / 2, z);
      scene.add(wire);

      var isAccent = (mat.color && mat.color.getHex() === ACCENT);
      var sColor = fillColor || (isAccent ? ACCENT : 0x222222);
      var solidMat = new THREE.MeshBasicMaterial({
        color: sColor,
        transparent: true, opacity: 0,
        side: THREE.DoubleSide, depthWrite: false
      });
      var solid = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), solidMat);
      solid.position.set(x, y + h / 2, z);
      scene.add(solid);

      var winColor = fillColor === COL_GLASS ? 0xBBDDFF : ACCENT;
      allBoxes.push({ wire: wire, solid: solid, w: w, h: h, d: d, x: x, y: y, isAccent: isAccent, hasColor: !!fillColor, windows: [] });

      if (h > 2 && w > 1 && d > 1) {
        var winRows = Math.max(1, Math.floor(h / 1.5));
        var winCols = Math.max(1, Math.floor(w / 1.2));
        for (var r = 0; r < winRows; r++) {
          for (var c = 0; c < winCols; c++) {
            var ww = 0.35, wh = 0.5;
            var wx = x - w/2 + (c + 0.5) * (w / winCols);
            var wy = y + 0.8 + r * (h / winRows);
            var wz = z + d/2 + 0.01;
            var winGeo = new THREE.PlaneGeometry(ww, wh);
            var winMat = new THREE.MeshBasicMaterial({
              color: winColor, transparent: true, opacity: 0,
              side: THREE.DoubleSide, depthWrite: false
            });
            var winMesh = new THREE.Mesh(winGeo, winMat);
            winMesh.position.set(wx, wy, wz);
            scene.add(winMesh);
            allBoxes[allBoxes.length - 1].windows.push(winMesh);

            var winMesh2 = new THREE.Mesh(winGeo.clone(), winMat.clone());
            winMesh2.position.set(wx, wy, z - d/2 - 0.01);
            scene.add(winMesh2);
            allBoxes[allBoxes.length - 1].windows.push(winMesh2);
          }
        }
      }
    }

    function addLine(scene, mat, pts) {
      scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(
        pts.map(function (p) { return new THREE.Vector3(p[0], p[1], p[2]); })
      ), mat));
    }

    var scenes = {
      urbanizacion: function (scene) {
        var layout = [
          [-5,-5,1.6,1.6,3.5],[-2.5,-5,1.6,1.6,3],[ 0,-5,1.6,1.6,3.8],
          [ 2.5,-5,1.6,1.6,3.2],[ 5,-5,1.6,1.6,3.5],
          [-5, 0,1.6,1.6,3],[ 5, 0,1.6,1.6,3.5],
          [-5, 5,1.6,1.6,3.8],[-2.5,5,1.6,1.6,3.2],
          [ 0, 5,1.6,1.6,3],[ 2.5,5,1.6,1.6,3.5],[ 5,5,1.6,1.6,3.8]
        ];
        layout.forEach(function (b) { addBox(scene, matD(), b[0], 0, b[1], b[2], b[4], b[3], COL_WALL); });
        addBox(scene, matA(), 0, 0, 0, 3, 10, 3, COL_GLASS);
        addBox(scene, matD(), -3, 0, -2, 4, 0.1, 4, COL_GREEN);
        addBox(scene, matD(), 4, 0, 2, 3, 0.1, 3, COL_GREEN);
        var rm = new THREE.LineBasicMaterial({ color: 0x333333 });
        [[-8,0.02,-1.2,8,0.02,-1.2],[-8,0.02,1.2,8,0.02,1.2],
         [-1.2,0.02,-8,-1.2,0.02,8],[1.2,0.02,-8,1.2,0.02,8]].forEach(function (p) {
          addLine(scene, rm, [[p[0],p[1],p[2]],[p[3],p[4],p[5]]]);
        });
      },
      estructura: function (scene) {
        var cols = 6, rows = 3, sp = 3;
        for (var i = 0; i <= cols; i++) {
          for (var j = 0; j <= rows; j++) {
            var edge = (i===0||i===cols||j===0||j===rows);
            addBox(scene, edge ? matA() : matD(), i*sp-(cols*sp)/2, 0, j*sp-(rows*sp)/2, 0.15, 6, 0.15, COL_CONC);
          }
        }
        for (var j2 = 0; j2 <= rows; j2++) {
          addLine(scene, matA(), [[-(cols*sp)/2,6,j2*sp-(rows*sp)/2],[(cols*sp)/2,6,j2*sp-(rows*sp)/2]]);
          addLine(scene, matA(), [[-(cols*sp)/2,6,j2*sp-(rows*sp)/2],[0,9,j2*sp-(rows*sp)/2],[(cols*sp)/2,6,j2*sp-(rows*sp)/2]]);
        }
      },
      parqueo: function (scene) {
        for (var f = 0; f < 4; f++) {
          var y = f * 3;
          addLine(scene, f%2===0 ? matA() : matD(), [[-6,y,-4],[6,y,-4],[6,y,4],[-6,y,4],[-6,y,-4]]);
          [[-6,-4],[6,-4],[6,4],[-6,4]].forEach(function (c) { addBox(scene, matD(), c[0], y, c[1], 0.3, 3, 0.3, COL_CONC); });
        }
      },
      residencial: function (scene) {
        addBox(scene, matD(), 0, 0, 0, 8, 3, 6, COL_WALL);
        addBox(scene, matD(), 0, 3, 0, 7, 3, 5, COL_WALL);
        addBox(scene, matD(), -5, 0, 0, 2, 0.1, 6, COL_GREEN);
        addBox(scene, matD(), 5, 0, 0, 2, 0.1, 3, COL_POOL);
        addBox(scene, matD(), 0, 0, -4, 8, 0.1, 2, COL_WOOD);
        addLine(scene, matA(), [[-3.5,6,-2.5],[0,8,-2.5],[3.5,6,-2.5],[3.5,6,2.5],[0,8,2.5],[-3.5,6,2.5],[-3.5,6,-2.5]]);
        addLine(scene, matA(), [[0,8,-2.5],[0,8,2.5]]);
      },
      industrial: function (scene) {
        addBox(scene, matD(), 0, 0, 0, 14, 5, 8, COL_CONC);
        addBox(scene, matA(), 0, 0, 0, 14, 7, 8, 0xDDDDDD);
        for (var i = 0; i < 3; i++) { addBox(scene, matD(), -5+i*5, 0, 6, 2, 4, 2, COL_WALL); }
        addBox(scene, matA(), 5, 0, 0, 0.5, 12, 0.5, COL_CONC);
      },
      civil: function (scene) {
        for (var i = 0; i < 2; i++) {
          var z = -2+i*4;
          addLine(scene, matA(), [[-8,0,z],[8,0,z]]);
          addLine(scene, matA(), [[-8,4,z],[8,4,z]]);
        }
        [-6,-2,2,6].forEach(function (x) { addBox(scene, matD(), x, 0, 0, 0.4, 4, 4, COL_CONC); });
        addBox(scene, matA(), 0, 4, 0, 16, 0.3, 4, 0xCCCCCC);
      },
      atria: function (scene) {
        addBox(scene, matA(), 0, 0, 0, 8, 2.5, 8, COL_WALL);
        addBox(scene, matD(), 0, 2.5, 0, 7, 2.5, 7, COL_GLASS);
        addBox(scene, matD(), 0, 5, 0, 6, 2.5, 6, COL_GLASS);
        addBox(scene, matA(), 0, 7.5, 0, 5, 10, 5, COL_GLASS);
        addBox(scene, matD(), -3, 0, 0, 2, 7.5, 8, COL_WALL);
        addBox(scene, matD(), 3, 0, 0, 2, 7.5, 8, COL_WALL);
        addBox(scene, matD(), -6, 0, -4, 3, 0.1, 3, COL_GREEN);
        addBox(scene, matD(), 6, 0, -4, 3, 0.1, 3, COL_GREEN);
        addLine(scene, matA(), [[-2.5,17.5,-2.5],[2.5,17.5,-2.5],[2.5,17.5,2.5],[-2.5,17.5,2.5],[-2.5,17.5,-2.5]]);
        addLine(scene, matA(), [[-2.5,17.5,-2.5],[-2.5,18.5,0],[2.5,17.5,-2.5],[2.5,18.5,0],[-2.5,17.5,2.5],[-2.5,18.5,0],[2.5,17.5,2.5],[2.5,18.5,0]]);
        var rm = new THREE.LineBasicMaterial({ color: 0x222222 });
        addLine(scene, rm, [[-8,0.01,-8],[8,0.01,-8],[8,0.01,8],[-8,0.01,8],[-8,0.01,-8]]);
      },
      guayacan: function (scene) {
        var roadMat = new THREE.LineBasicMaterial({ color: 0x303030 });
        addLine(scene, roadMat, [[-9,0.02,0],[9,0.02,0]]);
        addLine(scene, roadMat, [[0,0.02,-9],[0,0.02,9]]);
        addLine(scene, roadMat, [[-9,0.02,-3],[9,0.02,-3]]);
        addLine(scene, roadMat, [[-9,0.02,3],[9,0.02,3]]);
        var lotes = [
          [-7,0,-6],[-5,0,-6],[-3,0,-6],
          [-7,0, 6],[-5,0, 6],[-3,0, 6],
          [ 3,0,-6],[ 5,0,-6],[ 7,0,-6],
          [ 3,0, 6],[ 5,0, 6],[ 7,0, 6],
        ];
        lotes.forEach(function (l, i) {
          addBox(scene, i % 3 === 0 ? matA() : matD(), l[0], l[1], l[2], 1.5, 2.2, 2, COL_WALL);
        });
        addBox(scene, matA(), 0, 0, 0, 3, 0.1, 3, COL_GREEN);
        addLine(scene, matA(), [[-1.5,0.05,-1.5],[1.5,0.05,-1.5],[1.5,0.05,1.5],[-1.5,0.05,1.5],[-1.5,0.05,-1.5]]);
        addLine(scene, matA(), [[-1.5,0.05,-1.5],[1.5,0.05,1.5]]);
        addLine(scene, matA(), [[1.5,0.05,-1.5],[-1.5,0.05,1.5]]);
        [[-0.5,0.05,0.5],[0.5,0.05,-0.5],[0,0.05,0]].forEach(function (t) {
          addBox(scene, matA(), t[0], t[1], t[2], 0.2, 1.5, 0.2, COL_GREEN);
        });
      }
    };

    document.querySelectorAll('[data-three-render]').forEach(function (canvas) {
      var type   = canvas.getAttribute('data-three-render') || 'urbanizacion';
      var parent = canvas.parentElement;
      var w = parent.offsetWidth  || 400;
      var h = parent.offsetHeight || 300;
      if (w === 0) return;

      var renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      var scene  = new THREE.Scene();
      var camera = new THREE.PerspectiveCamera(42, w / h, 0.1, 200);
      camera.position.set(14, 9, 14);
      camera.lookAt(0, 2, 0);
      scene.add(new THREE.GridHelper(26, 26, DIM, 0x151515));

      if (scenes[type]) scenes[type](scene);

      var angle  = Math.random() * Math.PI * 2;
      var radius = type === 'atria' ? 22 : 16;
      var animId;
      var startTime = 0;
      var localBoxes = allBoxes.splice(0, allBoxes.length);

      function smoothstep(t) { return t * t * (3 - 2 * t); }

      function animate() {
        animId = requestAnimationFrame(animate);
        if (!startTime) startTime = performance.now();
        var elapsed = (performance.now() - startTime) / 1000;
        var cycle = elapsed % 22;

        angle += 0.002;
        camera.position.x = Math.sin(angle) * radius;
        camera.position.z = Math.cos(angle) * radius;
        camera.position.y = 8 + Math.sin(elapsed * 0.12) * 1.5;
        camera.lookAt(0, type === 'atria' ? 5 : 2, 0);

        var wireOp = 1, faceOp = 0, winOp = 0;
        if (cycle < 4) {
          wireOp = smoothstep(Math.min(cycle / 3, 1));
          faceOp = 0; winOp = 0;
        } else if (cycle < 8) {
          wireOp = 1;
          faceOp = smoothstep(Math.min((cycle - 4) / 3, 1)) * 0.45;
          winOp = 0;
        } else if (cycle < 12) {
          wireOp = 1;
          faceOp = 0.45;
          winOp = smoothstep(Math.min((cycle - 8) / 3, 1)) * 0.75;
        } else if (cycle < 17) {
          wireOp = 1;
          faceOp = 0.45 + smoothstep(Math.min((cycle - 12) / 3, 1)) * 0.35;
          winOp = 0.75;
        } else {
          var fadeOut = 1 - smoothstep(Math.min((cycle - 17) / 4, 1));
          wireOp = fadeOut;
          faceOp = 0.8 * fadeOut;
          winOp = 0.75 * fadeOut;
        }

        localBoxes.forEach(function (b) {
          b.wire.material.opacity = wireOp;
          b.wire.material.transparent = true;
          b.solid.material.opacity = b.hasColor ? Math.min(faceOp * 1.6, 0.85) : (b.isAccent ? faceOp * 0.6 : faceOp);
          b.windows.forEach(function (w) { w.material.opacity = winOp; });
        });

        renderer.render(scene, camera);
      }

      if (window.IntersectionObserver) {
        var io = new IntersectionObserver(function (entries) {
          entries.forEach(function (e) {
            if (e.isIntersecting) { startTime = 0; animate(); } else cancelAnimationFrame(animId);
          });
        }, { threshold: 0.01 });
        io.observe(canvas);
      } else { animate(); }

      window.addEventListener('resize', function () {
        var nw = parent.offsetWidth;
        var nh = parent.offsetHeight || h;
        if (!nw) return;
        renderer.setSize(nw, nh);
        camera.aspect = nw / nh;
        camera.updateProjectionMatrix();
      });
    });
  }

  /* =========================================================
     INIT
     ========================================================= */
  var style = document.createElement('style');
  style.textContent = '@keyframes fadeInUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}';
  document.head.appendChild(style);

  document.addEventListener('DOMContentLoaded', function () {
    var base = document.body.dataset.base || '';
    injectComponents(base);

    initNavbar();
    initProgressBar();
    initScrollReveal();
    initCursor();
    initParallax();
    initCounters();
    initTimeline();
    initValues();
    initFilters();
    initCardTilt();
    initHero();
    initStickySidebar();
    initHorzGallery();
    initVideoIntro();

    if (window.THREE) { initThree(); }
    else {
      var s = document.querySelector('script[data-three]');
      if (s) s.addEventListener('load', initThree);
    }
  });

}());

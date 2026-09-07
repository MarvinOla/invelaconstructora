/* ============================================================
   INVELA — Filtros de proyectos
   ============================================================ */

export function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      // Activar botón
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Filtrar cards con animación
      projectCards.forEach(card => {
        const sector = card.dataset.sector;
        const show = filter === 'all' || sector === filter;

        if (show) {
          card.classList.remove('hidden');
          card.style.animation = 'fadeInUp 0.4s ease both';
        } else {
          card.classList.add('hidden');
          card.style.animation = '';
        }
      });
    });
  });
}

// Inyectar keyframe si no existe
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(style);

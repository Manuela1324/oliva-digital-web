const header = document.getElementById('site-header');
const toggle = document.getElementById('menuToggle');
toggle.addEventListener('click', () => {
  const open = header.classList.toggle('nav-open');
  toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});
document.querySelectorAll('nav.main-nav a').forEach(a => {
  a.addEventListener('click', () => header.classList.remove('nav-open'));
});

// Animaciones al hacer scroll: los elementos con clase "reveal" aparecen
// suavemente cuando entran en pantalla.
(function () {
  var items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  if (!('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

  items.forEach(function (el) { io.observe(el); });
})();

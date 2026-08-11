(() => {
  const button = document.querySelector('.mobile-menu-btn');
  const sidebar = document.querySelector('.site-sidebar');
  const scrim = document.querySelector('.nav-scrim');
  if (!button || !sidebar) return;

  const setOpen = (open) => {
    sidebar.classList.toggle('open', open);
    document.body.classList.toggle('nav-open', open);
    if (scrim) scrim.classList.toggle('visible', open);
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    button.textContent = open ? 'Close' : 'Menu';
  };

  button.addEventListener('click', () => setOpen(!sidebar.classList.contains('open')));
  if (scrim) scrim.addEventListener('click', () => setOpen(false));
  sidebar.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') setOpen(false); });

  const desktop = window.matchMedia('(min-width: 1025px)');
  const resetForDesktop = () => { if (desktop.matches) setOpen(false); };
  if (desktop.addEventListener) desktop.addEventListener('change', resetForDesktop);
  else desktop.addListener(resetForDesktop);
})();

const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');

function setTheme(theme) {
  if (theme === 'dark') {
    root.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    themeToggle.setAttribute('aria-pressed', 'true');
  } else {
    root.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
    themeToggle.setAttribute('aria-pressed', 'false');
  }
}

setTheme(localStorage.getItem('theme') || 'light');

themeToggle.addEventListener('click', () => {
  const current = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
  setTheme(current);
});

document.addEventListener('click', (ev) => {
  const btn = ev.target.closest('[data-toggle]');
  if (!btn) return;
  const panel = document.querySelector(btn.getAttribute('data-toggle'));
  if (!panel) return;

  const isHidden = panel.hasAttribute('hidden');
  if (isHidden) {
    panel.removeAttribute('hidden');
    btn.setAttribute('aria-expanded', 'true');
    btn.textContent = 'Ver menos';
  } else {
    panel.setAttribute('hidden', '');
    btn.setAttribute('aria-expanded', 'false');
    btn.textContent = 'Ver más';
  }
});

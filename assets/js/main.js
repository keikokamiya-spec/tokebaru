/* main.js — pageTop button */
document.addEventListener('DOMContentLoaded', () => {
  const pageTop = document.getElementById('page-top');
  if (!pageTop) return;

  window.addEventListener('scroll', () => {
    pageTop.classList.toggle('is-visible', window.scrollY > 400);
  }, { passive: true });

  pageTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

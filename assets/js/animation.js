/* animation.js — Hero text fade-in */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.js-fade-in').forEach(el => {
    const delay = parseInt(el.dataset.delay ?? '0', 10);
    setTimeout(() => el?.classList.add('is-visible'), delay);
  });
});

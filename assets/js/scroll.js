/* scroll.js — IntersectionObserver reveal */
document.addEventListener('DOMContentLoaded', () => {
  const targets = document.querySelectorAll('.js-reveal');
  if (!targets.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  targets.forEach(el => observer.observe(el));
});

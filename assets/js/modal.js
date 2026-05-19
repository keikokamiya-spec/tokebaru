/* modal.js — Gallery slideshow + lightbox */
document.addEventListener('DOMContentLoaded', () => {

  /* ── Slideshow ── */
  const slides = Array.from(document.querySelectorAll('.slide'));
  const dotsWrap = document.querySelector('.slide-dots');

  if (slides.length && dotsWrap) {
    let current = 0;
    let timer;

    // ドット生成
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'dot';
      dot.setAttribute('aria-label', `スライド ${i + 1}`);
      dot.addEventListener('click', () => { goTo(i); resetTimer(); });
      dotsWrap.appendChild(dot);
    });

    const dots = Array.from(dotsWrap.querySelectorAll('.dot'));

    const goTo = (index) => {
      slides[current]?.classList.remove('is-active');
      dots[current]?.classList.remove('is-active');
      current = (index + slides.length) % slides.length;
      slides[current]?.classList.add('is-active');
      dots[current]?.classList.add('is-active');
    };

    const resetTimer = () => {
      clearInterval(timer);
      timer = setInterval(() => goTo(current + 1), 4500);
    };

    document.querySelector('.slide-prev')?.addEventListener('click', () => { goTo(current - 1); resetTimer(); });
    document.querySelector('.slide-next')?.addEventListener('click', () => { goTo(current + 1); resetTimer(); });

    goTo(0);
    resetTimer();
  }

  /* ── Modal (スライド画像クリックで拡大) ── */
  const modal    = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const closeBtn = document.getElementById('modal-close');
  if (!modal || !modalImg || !closeBtn) return;

  const open = (src, alt) => {
    modalImg.src = src;
    modalImg.alt = alt ?? '';
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
  };

  const close = () => {
    modal.hidden = true;
    modalImg.src = '';
    document.body.style.overflow = '';
  };

  slides.forEach(slide => {
    const img = slide.querySelector('img');
    if (!img) return;
    slide.style.cursor = 'pointer';
    slide.addEventListener('click', () => open(img.src, img.alt));
  });

  closeBtn.addEventListener('click', close);
  modal.addEventListener('click', e => { if (e.target === modal) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !modal.hidden) close(); });
});

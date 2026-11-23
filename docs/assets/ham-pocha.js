const carousel = document.querySelector('.gameplay-carousel');
if (carousel) {
  const viewport = carousel.querySelector('.gameplay-carousel-track');
  const cards = [...viewport.querySelectorAll('.gameplay-carousel-card')];
  const previous = carousel.querySelector('[data-gallery-previous]');
  const next = carousel.querySelector('[data-gallery-next]');
  const dialog = carousel.querySelector('dialog');
  const video = dialog.querySelector('video');
  const open = carousel.querySelector('[data-gallery-open]');
  let pointer;
  let cancelClick = false;

  function updateButtons() {
    previous.disabled = viewport.scrollLeft < 2;
    next.disabled = viewport.scrollLeft + viewport.clientWidth >= viewport.scrollWidth - 2;
  }

  function move(direction) {
    const cardStep = cards[1].offsetLeft - cards[0].offsetLeft;
    const current = Math.round(viewport.scrollLeft / cardStep);
    const target = Math.max(0, Math.min(cards.length - 1, current + direction));
    viewport.scrollTo({
      left: target * cardStep,
      behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
    });
  }

  previous.addEventListener('click', () => move(-1));
  next.addEventListener('click', () => move(1));
  viewport.addEventListener('scroll', updateButtons, { passive: true });
  viewport.addEventListener('keydown', event => {
    if (event.target !== viewport || !['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    event.preventDefault();
    move(event.key === 'ArrowLeft' ? -1 : 1);
  });
  new ResizeObserver(updateButtons).observe(viewport);
  viewport.addEventListener('dragstart', event => event.preventDefault());
  viewport.addEventListener('pointerdown', event => {
    if (event.pointerType !== 'mouse' || event.button !== 0) return;
    cancelClick = false;
    pointer = { id: event.pointerId, x: event.clientX, scroll: viewport.scrollLeft, dragging: false };
  });
  viewport.addEventListener('pointermove', event => {
    if (!pointer || pointer.id !== event.pointerId || event.buttons !== 1) return;
    const distance = event.clientX - pointer.x;
    if (!pointer.dragging && Math.abs(distance) < 6) return;
    if (!pointer.dragging) {
      viewport.setPointerCapture(event.pointerId);
      viewport.classList.add('is-dragging');
      pointer.dragging = true;
      cancelClick = true;
    }
    viewport.scrollLeft = pointer.scroll - distance;
  });

  function endDrag() {
    if (pointer?.dragging) viewport.classList.remove('is-dragging');
    pointer = null;
  }

  viewport.addEventListener('pointerup', endDrag);
  viewport.addEventListener('pointercancel', endDrag);
  viewport.addEventListener('lostpointercapture', endDrag);
  viewport.addEventListener('pointerleave', () => {
    if (!pointer?.dragging) endDrag();
  });
  viewport.addEventListener('click', event => {
    if (cancelClick && event.detail > 0) {
      event.preventDefault();
      event.stopPropagation();
    }
    cancelClick = false;
  }, true);

  open.addEventListener('click', () => {
    dialog.showModal();
    video.play().catch(() => {});
  });
  dialog.querySelector('[data-gallery-close]').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => {
    video.pause();
    open.focus();
  });
  updateButtons();
}

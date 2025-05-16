window.addEventListener('DOMContentLoaded', () => {
  const fadeElems = document.querySelectorAll('.fade-in');
  fadeElems.forEach(el => {
    setTimeout(() => {
      el.classList.add('visible');
    }, 100);
  });
});

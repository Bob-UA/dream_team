
(() => {
  const refs = {
    prev: document.querySelector('#slider-prev'),
    next: document.querySelector('#slider-next'),
    container: document.querySelector('#slider-container'),
  };

  refs.prev.addEventListener('click', prev);
  refs.next.addEventListener('click', next);

  function prev() {
    refs.container.scrollLeft -= 270;
  }

  function next() {
    refs.container.scrollLeft += 270;
  }
})();
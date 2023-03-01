// import './js/restourants-details-modal';

// import './js/slider-restaurant-page.js';


(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();


function prev() {
  document.getElementById('slider-container').scrollLeft -= 270;
}

function next() {
  document.getElementById('slider-container').scrollLeft += 270;
}

$('.restaurant-img-item img').on('click', function () {
  $(this).toggleClass('zoomed');
  $('.overlay').toggleClass('active');
});

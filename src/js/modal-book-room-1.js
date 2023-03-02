(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-room-open-first]'),
    openModalBtn1: document.querySelector('[data-modal-room-open-first1]'),
    closeModalBtn: document.querySelector('[data-modal-room-close-first]'),
    modal: document.querySelector('[data-modal-room-first]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtn1.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

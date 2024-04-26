import './js/header';
import './js/order';
import './js/modal';
import './js/scroll-up';

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    openModalBtn2: document.querySelector('[data-modal-open2]'),
    openModalBtn3: document.querySelector('[data-modal-open3]'),
    openModalBtn4: document.querySelector('[data-modal-open4]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtn2.addEventListener('click', toggleModal);
  refs.openModalBtn3.addEventListener('click', toggleModal);
  refs.openModalBtn4.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  refs.modal.addEventListener('click', onBackdropClose);

  document.body.addEventListener('keydown', onEscClose);

  function onBackdropClose(e) {
    if (e.currentTarget !== e.target) {
      return;
    }
    toggleModal();
  }

  function onEscClose(e) {
    if (refs.modal.classList.contains('is-hidden')) {
      return;
    }
    if (e.key !== 'Escape') {
      return;
    }
    toggleModal();
  }
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    if (refs.modal.classList.contains('is-hidden')) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }
})();

(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open]'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModalClose);
  
    function toggleModal() {
      refs.modal.classList.toggle('backdrop--is-hidden');
      document.body.classList.toggle('modal-open');
    }

    function toggleModalClose() {
      refs.modal.classList.toggle('backdrop--is-hidden');
      document.body.classList.toggle('modal-open');
    }
  })();
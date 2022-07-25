const openingModal = () => {
  const modal = document.querySelector('[data-modal]');
  const buttonClosed = modal.querySelector('[data-modal-closed]');
  const buttonOpened = document.querySelector('[data-modal-opened]');
  const nameInput = document.querySelector('[data-name-input]');

  if (modal !== null && buttonClosed !== null && buttonOpened !== null) {
    buttonOpened.addEventListener('click', ()=>{
      modal.classList.add('is-active');
      nameInput.focus();
      document.body.classList.add('is-stop-scrolling');

      modal.addEventListener('click', (e) => {
        if (!e.target.closest('.modal__container-desc')) {
          closed();
          buttonClosed.removeEventListener('click', ()=>{
            closed();
          });
        }
      });

      buttonClosed.addEventListener('click', ()=>{
        closed();
        modal.removeEventListener('click', (e) => {
          if (!e.target.closest('.modal__container-desc')) {
            closed();
          }
        });
      });
    });
  }

  function closed() {
    modal.classList.remove('is-active');
    document.body.classList.remove('is-stop-scrolling');
  }
};

export {openingModal};

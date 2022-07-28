const openingModal = () => {
  const modal = document.querySelector('[data-modal]');
  const buttonClosed = modal.querySelector('[data-modal-closed]');
  const buttonOpened = document.querySelector('[data-modal-opened]');
  const nameInput = document.querySelector('[data-name-input]');
  const modalContainer = document.querySelector('[data-modal-container]');

  if (modal !== null && buttonClosed !== null && buttonOpened !== null && modalContainer !== null) {
    buttonOpened.addEventListener('click', ()=>{
      modal.classList.add('is-active');
      nameInput.focus();
      document.body.classList.add('is-stop-scrolling');

      if (modalContainer.offsetHeight > modal.offsetHeight) {
        modal.style.overflow = 'scroll';
      }

      const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

      const focusableContent = modal.querySelectorAll(focusableElements);
      const firstFocusableElement = focusableContent[0];
      const lastFocusableElement = focusableContent[focusableContent.length - 1];


      document.addEventListener('keydown', function (e) {
        let isTabPressed = e.key.toUpperCase() === 'TAB';

        if (!isTabPressed) {
          return;
        }

        if (e.shiftKey) {
          if (document.activeElement === firstFocusableElement) {
            lastFocusableElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastFocusableElement) {
            firstFocusableElement.focus();
            e.preventDefault();
          }
        }
      });


      modal.addEventListener('click', (e) => {
        if (!e.target.closest('.modal__container-desc')) {
          closed();
          buttonClosed.removeEventListener('click', ()=>{
            closed();
          });
        }
      });

      if (modal.classList.contains('is-active')) {
        window.addEventListener('keydown', (e)=>{
          if (e.key.toUpperCase() === 'ESCAPE') {
            closed();
          }
        });
      }

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

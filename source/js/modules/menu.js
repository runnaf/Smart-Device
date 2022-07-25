const openingMenu = () => {
  const menuBtns = document.querySelectorAll('[data-footer-button]');
  const menuBtnsContainer = document.querySelectorAll('[data-footer-container]');
  const menuLinkFooter = document.querySelectorAll('[data-footer-link]');

  if (menuBtnsContainer.length > 0 && menuBtnsContainer !== null) {
    menuBtnsContainer.forEach((item)=>{
      item.classList.add('is-js');
    });
  }

  if (menuBtns.length > 0 && menuBtns !== null) {
    menuBtns.forEach((btn)=>{
      btn.addEventListener('click', function (e) {
        e.target.closest('button').classList.add('is-js');
        if (btn.classList.contains('is-js')) {
          if (btn.classList.contains('is-open')) {
            btn.classList.remove('is-open');
          } else {
            menuBtns.forEach((btnItem) => {
              btnItem.classList.remove('is-open');
            });
            btn.classList.add('is-open');
          }
          btn.classList.remove('is-js');
        }
      });
    });
  }

  if (menuLinkFooter.length > 0 && menuLinkFooter !== null) {
    menuLinkFooter.forEach((link) => {
      link.addEventListener('click', (evt)=>{
        evt.preventDefault();
        menuBtns.forEach((btn)=>{
          btn.classList.remove('is-open');
        });
      });
    });
  }
};

export {openingMenu};

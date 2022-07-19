const openingMenu = () => {
  const menuContainer = document.querySelector('[data-menu]');
  const menuButton = menuContainer.querySelector('[data-menu-button]');
  const menuLinks = menuContainer.querySelectorAll('[data-link-menu]');
  const visibilitys = document.querySelectorAll('[data-visibility]');

  if (menuContainer) {
    menuContainer.classList.add('is-js');
  }

  if (menuButton) {
    menuButton.addEventListener('click', ()=>{
      menuContainer.classList.toggle('is-active');
      document.body.classList.toggle('is-stop-scrolling');
      if (menuContainer.classList.contains('is-active')) {
        if (visibilitys.length > 0) {
          visibilitys.forEach((item) => {
            item.style.opacity = '0';
          });
        }

        document.addEventListener('click', (e) => {
          if (!e.target.closest('.page-header__wrapper-content')) {
            menuContainer.classList.remove('is-active');
            document.body.classList.remove('is-stop-scrolling');
            visibilitys.forEach((item) => {
              item.style.opacity = '1';
            });
          }
        });

      } else {
        if (visibilitys.length > 0) {
          visibilitys.forEach((item) => {
            item.style.opacity = '1';
          });
        }
        document.removeEventListener('click', (e) => {
          if (!e.target.closest('.page-header__wrapper-content')) {
            menuContainer.classList.remove('is-active');
            document.body.classList.remove('is-stop-scrolling');
            visibilitys.forEach((item) => {
              item.style.opacity = '1';
            });
          }
        });
      }
    });
  }

  if (menuLinks.length > 0) {
    menuLinks.forEach((link)=>{
      link.addEventListener('click', ()=>{
        menuContainer.classList.remove('is-active');
        document.body.classList.remove('is-stop-scrolling');
        visibilitys.forEach((item) => {
          item.style.opacity = '1';
        });
      });
    });
  }
};

export {openingMenu};

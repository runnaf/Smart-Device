const openingMenu = () => {
  const menuLinks = document.querySelectorAll('[data-footer-link-main]');
  const menuLinksContainer = document.querySelectorAll('[data-footer-container]');
  const menuLinkFooter = document.querySelectorAll('[data-footer-link]');

  if (menuLinksContainer.length > 0 && menuLinksContainer !== null) {
    menuLinksContainer.forEach((item)=>{
      item.classList.add('is-js');
    });
  }

  if (menuLinks.length > 0 && menuLinks !== null) {
    menuLinks.forEach((Link)=>{
      Link.addEventListener('click', function (e) {
        e.preventDefault();
        e.target.closest('a').classList.add('is-js');
        if (Link.classList.contains('is-js')) {
          if (Link.classList.contains('is-open')) {
            Link.classList.remove('is-open');
          } else {
            menuLinks.forEach((LinkItem) => {
              LinkItem.classList.remove('is-open');
            });
            Link.classList.add('is-open');
          }
          Link.classList.remove('is-js');
        }
      });
    });
  }

  if (menuLinkFooter.length > 0 && menuLinkFooter !== null) {
    menuLinkFooter.forEach((link) => {
      link.addEventListener('click', (evt)=>{
        evt.preventDefault();
        menuLinks.forEach((linkItem)=>{
          linkItem.classList.remove('is-open');
        });
      });
    });
  }
};

export {openingMenu};

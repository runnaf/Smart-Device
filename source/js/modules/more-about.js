const getMoreAbout = () => {
  const link = document.querySelector('[data-about-link]');
  const more = document.querySelector('[data-about]');
  const moreMobile = document.querySelector('[data-about-mobile]');
  const breakpoint = window.matchMedia('(min-width:767px)');

  if (link !== null) {
    link.addEventListener('click', (evt)=>{
      evt.preventDefault();
      if (more !== null) {
        link.classList.toggle('is-open');
        if (link.classList.contains('is-open')) {
          if (breakpoint.matches) {
            moreMobile.style.display = 'block';
          }
          link.textContent = 'Свернуть';
          more.style.display = 'block';
        } else {
          if (breakpoint.matches) {
            moreMobile.style.display = '';
          }

          link.textContent = 'Подробнее';
          more.style.display = '';
        }
      }
    });
  }
};

export {getMoreAbout};

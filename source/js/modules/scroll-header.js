const headerScrolling = () => {
  const header = document.querySelector('[data-header]');
  const headerHeigth = header.offsetHeight;
  const breakpoint = window.matchMedia('(min-width:1024px)');
  const prime = document.querySelector('[data-prime]');
  const primeContainer = document.querySelector('[data-prime-container]');

  if (header !== null && breakpoint.matches) {
    window.addEventListener('scroll', ()=>{
      let scrollDistance = window.scrollY;

      if (scrollDistance > 0) {
        header.classList.add('is-fixed');
        primeContainer.style.paddingTop = `${headerHeigth}px`;
        prime.classList.add('is-relative');
      } else if (scrollDistance === 0) {
        header.classList.remove('is-fixed');
        primeContainer.style.paddingTop = '0';
        prime.classList.remove('is-relative');
      }
    });
  } else {
    header.classList.remove('is-fixed');
    primeContainer.style.paddingTop = '0';
    prime.classList.remove('is-relative');
  }
};

export {headerScrolling};

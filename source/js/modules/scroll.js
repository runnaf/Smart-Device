import MoveTo from 'moveto';

function scrolling() {
  const moveTo = new MoveTo({
    tolerance: 0,
    duration: 1500,
    easing: 'easeOutQuart',
    container: window,
  });

  const trigger = document.querySelector('[data-link-form]');
  if (trigger !== null) {
    moveTo.registerTrigger(trigger);
  }
}


export {scrolling};

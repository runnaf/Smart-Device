import {openingMenu} from './modules/menu';
import {scrolling} from './modules/scroll';
import {storingFormData} from './modules/form-data';
import {openingModal} from './modules/opening-modal';
import {getMoreAbout} from './modules/more-about';
import {getMaskForPhone} from './modules/maskForPhone';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  // Menu

  openingMenu();

  // Scroll

  scrolling();

  // More about

  getMoreAbout();

  // Form Data

  storingFormData();

  // Mask for phone input
  getMaskForPhone();

  // Opening modal window

  openingModal();

  // Utils
  // ---------------------------------

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {

  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)

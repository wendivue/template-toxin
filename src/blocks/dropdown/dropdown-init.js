import Dropdown from './dropdown';

const dropdowns = document.querySelectorAll('.js-dropdown');

dropdowns.forEach((element) => {
  const dropdown = new Dropdown(element);
  dropdown.init();
});




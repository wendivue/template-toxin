import Dropdown from './dropdown';

const dropdowns = document.querySelectorAll('.js-dropdown');

dropdowns.forEach((element) => new Dropdown(element));

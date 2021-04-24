import Checkbox from './checkbox-list';

const checkboxes = document.querySelectorAll('.js-checkbox-list');

checkboxes.forEach((anchor) => new Checkbox(anchor));

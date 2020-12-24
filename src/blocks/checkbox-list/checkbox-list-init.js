import Checkbox from './checkbox-list';

const checkboxs = document.querySelectorAll('.js-checkbox-list');

checkboxs.forEach((anchor) => new Checkbox(anchor));

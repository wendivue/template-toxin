import Checkbox from './checkbox-list';

const checkboxs = document.querySelectorAll('.js-checkbox-list');

checkboxs.forEach((anchor) => {
  const checkbox = new Checkbox(anchor);
  checkbox.init();
});

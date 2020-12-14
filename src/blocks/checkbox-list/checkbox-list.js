class Checkbox {
  constructor(anchor) {
    this.anchor = anchor;
  }

  init() {
    this.getElement();
    this.bindEventClick(this.header);
  }

  getElement() {
    this.header = this.anchor.querySelector('.js-checkbox-list__wrapper-header');
    this.icon = this.header.querySelector('.js-checkbox-list__icon');
    this.menu = this.anchor.querySelector('.js-checkbox-list__items');
  }

  bindEventClick(element) {
    element.addEventListener('click', this.toggle.bind(this));
  }

  toggle() {
    this.icon.classList.toggle('checkbox-list__icon--open');
    this.menu.classList.toggle('checkbox-list__items--open');
  }
}

const checkboxs = document.querySelectorAll('.js-checkbox-list');

checkboxs.forEach((anchor) => {
  const checkbox = new Checkbox(anchor);
  checkbox.init();
});

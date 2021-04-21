class Checkbox {
  constructor(anchor) {
    this.anchor = anchor;

    this.init();
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
    this.icon.classList.toggle('checkbox-list__icon_open');
    this.menu.classList.toggle('checkbox-list__items_open');
  }
}

export default Checkbox;

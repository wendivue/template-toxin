class Checkbox {
  constructor(anchor) {
    this.anchor = anchor;

    this.init();
  }

  init() {
    this.defineElements();
    this.addEventHandlers();
  }

  defineElements() {
    this.header = this.anchor.querySelector('.js-checkbox-list__header-wrapper');
    this.icon = this.header.querySelector('.js-checkbox-list__icon');
    this.menu = this.anchor.querySelector('.js-checkbox-list__items');
  }

  addEventHandlers() {
    this.header.addEventListener('click', this.toggle.bind(this));
  }

  toggle() {
    this.icon.classList.toggle('checkbox-list__icon_open');
    this.menu.classList.toggle('checkbox-list__items_open');
  }
}

export default Checkbox;

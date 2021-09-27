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
  }

  addEventHandlers() {
    this.header.addEventListener('click', this.toggle.bind(this));
  }

  toggle() {
    this.anchor.classList.toggle('checkbox-list_open');
  }
}

export default Checkbox;

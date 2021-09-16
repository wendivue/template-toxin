import Inputmask from 'inputmask';

class TextField {
  constructor(anchor) {
    this.anchor = anchor;

    this.init();
  }

  init() {
    this.defineElements();
    this.addMask();
  }

  defineElements() {
    this.input = this.anchor.querySelector('.js-text-field__input');
  }

  addMask() {
    Inputmask().mask(this.input);
  }
}

export default TextField;

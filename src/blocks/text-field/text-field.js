import Inputmask from 'inputmask';

class TextField {
  constructor(anchor) {
    this.anchor = anchor;

    this.init();
  }

  init() {
    this.defineElements();
    this.defineAttributes();
    this.addMask();
  }

  defineElements() {
    this.input = this.anchor.querySelector('.js-text-field__input');
  }

  defineAttributes() {
    this.dataInputMask = this.input.getAttribute('data-inputmask');
  }

  addMask() {
    if (this.dataInputMask) Inputmask().mask(this.input);
  }
}

export default TextField;

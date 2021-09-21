import { getDeclension } from 'Helpers/getDeclension';

class Dropdown {
  constructor(anchor) {
    this.anchor = anchor;

    this.init();
  }

  init() {
    this.defineElements();
    this.defineAttributes();
    this.getValue();
    this.addEventHandlers();
  }

  defineElements() {
    this.input = this.anchor.querySelectorAll('.js-dropdown__input');
    this.dropdownInput = this.anchor.querySelectorAll('.js-text-field__input');
    this.items = this.anchor.querySelectorAll('.js-dropdown__item');
    this.button = this.anchor.querySelectorAll('.js-dropdown__button');
    this.buttonWrapper = this.anchor.querySelectorAll('.js-dropdown__button-menu');
    this.buttonIncrease = this.anchor.querySelectorAll('.js-dropdown__button_increase');
    this.buttonDecrease = this.anchor.querySelectorAll('.js-dropdown__button_decrease');
    [this.buttonCleans, this.buttonComplete] = this.anchor.querySelectorAll('.js-button');
  }

  defineAttributes() {
    this.defaultValue = this.anchor.getAttribute('data-default-value');
    this.commonWord = JSON.parse(this.anchor.getAttribute('data-common-word'));

    this.declension = [];

    this.items.forEach((item) => {
      if (item.getAttribute('data-declension')) {
        this.declension.push(JSON.parse(item.getAttribute('data-declension')));
      }
    });
  }

  addEventHandlers() {
    this.addEventHandlersDocument();
    this.addEventHandlersButton();
    this.addEventHandlersToggle();
    this.addEventHandlersClear();
  }

  addEventHandlersButton() {
    const elementIncrease = this.buttonIncrease;
    const elementDecrease = this.buttonDecrease;

    elementIncrease.forEach((element, index) => {
      element.addEventListener('click', this.changeValueIncrease.bind(this, index));
    });

    elementDecrease.forEach((element, index) => {
      element.addEventListener('click', this.changeValueDecrease.bind(this, index));
    });
  }

  addEventHandlersToggle() {
    const elements = this.dropdownInput;

    elements.forEach((element) => {
      element.addEventListener('click', this.toggle.bind(this));
    });

    if (this.buttonComplete) {
      this.buttonComplete.addEventListener('click', this.toggle.bind(this));
    }
  }

  addEventHandlersClear() {
    if (this.buttonCleans) {
      this.buttonCleans.addEventListener('click', this.clear.bind(this));
    }
  }

  addEventHandlersDocument() {
    document.addEventListener('click', this.handleDocumentClick);
  }

  changeValueIncrease(index) {
    this.removeDecrease(this.buttonDecrease, index);

    let value = this.getMenuValue(index);
    value = this.increase(value);
    value = this.validateValue(value);

    this.update(value, index);
  }

  changeValueDecrease(index) {
    let value = this.getMenuValue(index);
    value = this.decrease(value);
    value = this.validateValue(value);

    this.update(value, index);
  }

  update(value, index) {
    if (this.buttonCleans) this.buttonWrapper[0].classList.remove('dropdown__button-menu_hide');

    if (value === 0) this.addDecrease(this.buttonDecrease, index);
    this.setValue(index, value);
    if (index !== 2) this.setValueFullValue();

    this.input[index].value = value;
    this.updateValue();
  }

  getValue() {
    let val1 = parseFloat(this.input[1].value);
    let val2 = parseFloat(this.input[0].value);
    let val3 = parseFloat(this.input[2].value);

    if (Number.isNaN(val1) || Number.isNaN(val2) || Number.isNaN(val3)) {
      val1 = 0;
      val2 = 0;
      val3 = 0;
    }

    this.fullVal = val1 + val2;
    this.val1 = val1;
    this.val2 = val2;
    this.val3 = val3;
  }

  getString() {
    const arrayValue = [this.val2, this.val1, this.val3];
    const stringList = [];

    if (this.declension.length < 2) {
      stringList.push(getDeclension(this.fullVal, this.commonWord));
      stringList.push(getDeclension(arrayValue[2], this.declension[0]));
    } else {
      arrayValue.forEach((value, index) => {
        stringList.push(getDeclension(value, this.declension[index]));
      });
    }

    return stringList;
  }

  updateValue() {
    let string;
    const dropdownMenu = this.anchor.querySelector('.js-text-field__input');
    const arr = this.getString();

    string = arr.filter(Boolean).join(', ');
    string = this.validateEmptyString(string, this.defaultValue);

    dropdownMenu.value = string;
  }

  removeDecrease(element, index) {
    return element[index].classList.remove('dropdown__button_no-active');
  }

  addDecrease(element, index) {
    return element[index].classList.add('dropdown__button_no-active');
  }

  handleDocumentClick(event) {
    const dropdownMenu = document.querySelectorAll('.js-dropdown__menu');
    const textFields = document.querySelectorAll('.js-text-field__input');

    const target = event.target.closest('.dropdown');
    if (!target) {
      textFields.forEach((element) => {
        element.classList.remove('text-field__input_no-bottom-outlines');
      });
      dropdownMenu.forEach((element) => {
        element.classList.remove('dropdown__menu_active');
      });
    }
  }

  toggle(event) {
    const element = event.target;
    const dropdownMenu = this.anchor.querySelector('.js-dropdown__menu');
    element.classList.toggle('text-field__input_no-bottom-outlines');
    dropdownMenu.classList.toggle('dropdown__menu_active');
  }

  clear() {
    this.buttonWrapper[0].classList.add('dropdown__button-menu_hide');
    this.dropdownInput[0].value = this.defaultValue;

    this.input.forEach((element) => {
      const input = element;
      input.value = 0;
    });

    this.buttonDecrease.forEach((element) => {
      element.classList.add('dropdown__button_no-active');
    });

    this.val1 = 0;
    this.val2 = 0;
    this.val3 = 0;
    this.fullVal = 0;
  }

  increase(value) {
    let curValue = value;
    curValue += 1;

    return curValue;
  }

  decrease(value) {
    let curValue = value;
    curValue -= 1;

    return curValue;
  }

  setValueFullValue() {
    this.fullVal = this.val1 + this.val2;
  }

  setValue(index, value) {
    if (index === 0) this.val2 = value;
    if (index === 1) this.val1 = value;
    if (index === 2) this.val3 = value;
  }

  getMenuValue(index) {
    let value;
    if (index === 0) value = this.val2;
    if (index === 1) value = this.val1;
    if (index === 2) value = this.val3;

    return value;
  }

  validateValue(value) {
    let curValue = value;
    if (value > 9) curValue = 0;
    if (value < 0) curValue = 0;

    return curValue;
  }

  validateEmptyString(value, string) {
    let curValue = value;
    if (value === '') {
      curValue = string;
      if (this.buttonCleans) {
        this.buttonWrapper[0].classList.add('dropdown__button-menu_hide');
      }
    }

    return curValue;
  }
}

export default Dropdown;

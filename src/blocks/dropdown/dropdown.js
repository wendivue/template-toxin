import { getDeclension } from 'Helpers/getDeclension';

const ROOM = 'room';
const PEOPLE = 'people';
const guestDeclension = ['гость', 'гостя', 'гостей'];
const roomDeclension = ['спальня', 'спальни', 'спален'];
const bedDeclension = ['кровать', 'кровати', 'кроватей'];
const bathDeclension = ['ванная', 'ванные', 'ванных'];
const babyDeclension = ['младенец', 'младенца', 'младенцев'];

class Dropdown {
  constructor(anchor) {
    this.anchor = anchor;

    this.init();
  }

  init() {
    this.getElement();
    this.getAttribute();
    this.getValue();
    this.bindEventDocumentClick();
    this.bindEventClick(this.buttonIncrease, this.buttonDecrease);
    this.bindEventToggle(this.dropdownInput, this.buttonComplete);
    this.bindEventClear(this.buttonCleans);
  }

  getElement() {
    this.input = this.anchor.querySelectorAll('.js-dropdown__input');
    this.dropdownInput = this.anchor.querySelectorAll('.js-text-field__input');
    this.button = this.anchor.querySelectorAll('.js-dropdown__button');
    this.buttonIncrease = this.anchor.querySelectorAll('.js-dropdown__button_increase');
    this.buttonDecrease = this.anchor.querySelectorAll('.js-dropdown__button_decrease');
    this.buttonComplete = this.anchor.querySelectorAll('.js-dropdown__button-menu_complete');
    this.buttonCleans = this.anchor.querySelectorAll('.js-dropdown__button-menu_cleans');
  }

  getAttribute() {
    this.type = this.anchor.getAttribute('data-type');
  }

  bindEventClick(peopleIncrease, peopleDecrease) {
    if (this.type === 'people') {
      peopleIncrease[0].addEventListener('click', this.changeValuePeopleIncrease.bind(this, 0));
      peopleIncrease[1].addEventListener('click', this.changeValuePeopleIncrease.bind(this, 1));
      peopleIncrease[2].addEventListener('click', this.changeValueBabyIncrease.bind(this));
      peopleDecrease[0].addEventListener('click', this.changeValuePeopleDecrease.bind(this, 0));
      peopleDecrease[1].addEventListener('click', this.changeValuePeopleDecrease.bind(this, 1));
      peopleDecrease[2].addEventListener('click', this.changeValueBabyDecrease.bind(this));
    } else {
      peopleIncrease[0].addEventListener('click', this.changeValueRoomIncrease.bind(this, 0));
      peopleIncrease[1].addEventListener('click', this.changeValueRoomIncrease.bind(this, 1));
      peopleIncrease[2].addEventListener('click', this.changeValueRoomIncrease.bind(this, 2));
      peopleDecrease[0].addEventListener('click', this.changeValueRoomDecrease.bind(this, 0));
      peopleDecrease[1].addEventListener('click', this.changeValueRoomDecrease.bind(this, 1));
      peopleDecrease[2].addEventListener('click', this.changeValueRoomDecrease.bind(this, 2));
    }
  }

  bindEventToggle(elements, buttons) {
    elements.forEach((element) => {
      element.addEventListener('click', this.toggle.bind(this));
    });

    buttons.forEach((button) => {
      button.addEventListener('click', this.toggle.bind(this));
    });
  }

  bindEventClear(elements) {
    elements.forEach((element) => {
      element.addEventListener('click', this.clear.bind(this));
    });
  }

  bindEventDocumentClick() {
    document.addEventListener('click', this.handleDocumentClick);
  }

  changeValueRoomIncrease(index) {
    this.removeDecrease(this.buttonDecrease, index);

    let value = this.getMenuValue(index);
    value = this.increase(value);
    value = this.validateValue(value);
    if (value === 0) this.addDecrease(this.buttonDecrease, index);
    this.setValue(index, value);

    this.input[index].value = value;
    this.updateValue(ROOM);
  }

  changeValueRoomDecrease(index) {
    let value = this.getMenuValue(index);
    value = this.decrease(value);
    value = this.validateValue(value);
    if (value === 0) this.addDecrease(this.buttonDecrease, index);
    this.setValue(index, value);

    this.input[index].value = value;
    this.updateValue(ROOM);
  }

  changeValuePeopleIncrease(index) {
    this.buttonCleans[0].classList.remove('dropdown__button-menu_hide');
    this.removeDecrease(this.buttonDecrease, index);

    let value = this.getMenuValue(index);
    value = this.increase(value);
    value = this.validateValue(value);
    if (value === 0) this.addDecrease(this.buttonDecrease, index);
    this.setValue(index, value);
    this.setValueFullValue();

    this.input[index].value = value;
    this.updateValue(PEOPLE);
  }

  changeValuePeopleDecrease(index) {
    this.buttonCleans[0].classList.remove('dropdown__button-menu_hide');

    let value = this.getMenuValue(index);
    value = this.decrease(value);
    value = this.validateValue(value);
    if (value === 0) this.addDecrease(this.buttonDecrease, index);
    this.setValue(index, value);
    this.setValueFullValue();

    this.input[index].value = value;
    this.updateValue(PEOPLE);
  }

  changeValueBabyIncrease() {
    this.buttonCleans[0].classList.remove('dropdown__button-menu_hide');
    this.removeDecrease(this.buttonDecrease, 2);

    this.val3 = this.increase(this.val3);
    this.val3 = this.validateValue(this.val3);
    if (this.val3 === 0) this.addDecrease(this.buttonDecrease, 2);

    this.input[2].value = this.val3;
    this.updateValue(PEOPLE);
  }

  changeValueBabyDecrease() {
    this.buttonCleans[0].classList.remove('dropdown__button-menu_hide');

    this.val3 = this.decrease(this.val3);
    this.val3 = this.validateValue(this.val3);
    if (this.val3 === 0) this.addDecrease(this.buttonDecrease, 2);

    this.input[2].value = this.val3;
    this.updateValue(PEOPLE);
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
    const str1 = getDeclension(this.val2, roomDeclension);
    const str2 = getDeclension(this.val1, bedDeclension);
    const str3 = getDeclension(this.val3, bathDeclension);
    const str4 = getDeclension(this.fullVal, guestDeclension);
    const str5 = getDeclension(this.val3, babyDeclension);

    return { str1, str2, str3, str4, str5 };
  }

  updateValue(type) {
    let string;
    const { str1, str2, str3, str4, str5 } = this.getString();
    const dropdownMenu = this.anchor.querySelector('.js-text-field__input');
    const arrRoom = [str1, str2, str3];
    const arrPeople = [str4, str5];

    if (ROOM === type) string = arrRoom.filter(Boolean).join(', ');
    string = this.validateEmptyString(string, 'Сколько комнат');

    if (PEOPLE === type) string = arrPeople.filter(Boolean).join(', ');
    string = this.validateEmptyString(string, 'Сколько гостей');

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
        element.classList.remove('text-field__input_open');
      });
      dropdownMenu.forEach((element) => {
        element.classList.remove('dropdown__menu_active');
      });
    }
  }

  toggle(event) {
    const element = event.target;
    const dropdownMenu = this.anchor.querySelector('.js-dropdown__menu');
    element.classList.toggle('text-field__input_open');
    dropdownMenu.classList.toggle('dropdown__menu_active');
  }

  clear() {
    this.buttonCleans[0].classList.add('dropdown__button-menu_hide');
    this.dropdownInput[0].value = 'Сколько гостей';

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
      if (this.buttonCleans[0]) {
        this.buttonCleans[0].classList.add('dropdown__button-menu_hide');
      }
    }

    return curValue;
  }
}

export default Dropdown;

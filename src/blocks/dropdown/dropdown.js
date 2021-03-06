const ROOM = 'room';
const PEOPLE = 'people';

class Dropdown {
  constructor(anchor) {
    this.anchor = anchor;

    this.init();
  }

  init() {
    this.getElement();
    this.getValue();
    this.bindEventClick(
      this.buttonPeopleIncrease,
      this.buttonPeopleDecrease,
      this.buttonIncrease,
      this.buttonDecrease
    );
    this.bindEventToggle(this.dropdownInput, this.buttonComplete);
    this.bindEventClear(this.buttonCleans);
  }

  getElement() {
    this.input = this.anchor.querySelectorAll('.js-dropdown__input');
    this.dropdownInput = this.anchor.querySelectorAll('.js-text-field__input');
    this.button = this.anchor.querySelectorAll('.js-dropdown__button');
    this.buttonIncrease = this.anchor.querySelectorAll('.js-dropdown__button--increase');
    this.buttonDecrease = this.anchor.querySelectorAll('.js-dropdown__button--decrease');
    this.buttonPeopleIncrease = this.anchor.querySelectorAll(
      '.js-dropdown__button-people--increase'
    );
    this.buttonPeopleDecrease = this.anchor.querySelectorAll(
      '.js-dropdown__button-people--decrease'
    );
    this.buttonComplete = this.anchor.querySelectorAll('.js-dropdown__button-menu--complete');
    this.buttonCleans = this.anchor.querySelectorAll('.js-dropdown__button-menu--cleans');
  }

  bindEventClick(peopleIncrease, peopleDecrease, elementsIncrease, elementsDecrease) {
    if (elementsIncrease[0] === undefined) {
      peopleIncrease[0].addEventListener('click', this.changeValuePeopleIncrease.bind(this, 0));
      peopleIncrease[1].addEventListener('click', this.changeValuePeopleIncrease.bind(this, 1));
      peopleIncrease[2].addEventListener('click', this.changeValuePeopleIncrease.bind(this, 2));
      peopleDecrease[0].addEventListener('click', this.changeValuePeopleDecrease.bind(this, 0));
      peopleDecrease[1].addEventListener('click', this.changeValuePeopleDecrease.bind(this, 1));
      peopleDecrease[2].addEventListener('click', this.changeValuePeopleDecrease.bind(this, 2));
    } else {
      elementsIncrease[0].addEventListener('click', this.changeValueBedRoomIncrease.bind(this));
      elementsIncrease[1].addEventListener('click', this.changeValueBedIncrease.bind(this));
      elementsIncrease[2].addEventListener('click', this.changeValueBathRoomIncrease.bind(this));
      elementsDecrease[0].addEventListener('click', this.changeValueBedRoomDecrease.bind(this));
      elementsDecrease[1].addEventListener('click', this.changeValueBedDecrease.bind(this));
      elementsDecrease[2].addEventListener('click', this.changeValueBathRoomDecrease.bind(this));
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

  changeValueBedRoomIncrease() {
    this.removeDecrease(this.buttonDecrease, 0);

    this.val2 = this.increase(this.val2);
    this.val2 = this.validateValue(this.val2);

    this.input[0].value = this.val2;
    this.updateValue(ROOM);
  }

  changeValueBedRoomDecrease() {
    this.val2 = this.decrease(this.val2);
    this.val2 = this.validateValue(this.val2);

    this.input[0].value = this.val2;
    this.updateValue(ROOM);
  }

  changeValueBedIncrease() {
    this.removeDecrease(this.buttonDecrease, 1);

    this.val1 = this.increase(this.val1);
    this.val1 = this.validateValue(this.val1);

    this.input[1].value = this.val1;
    this.updateValue(ROOM);
  }

  changeValueBedDecrease() {
    this.val1 = this.decrease(this.val1);
    this.val1 = this.validateValue(this.val1);

    this.input[1].value = this.val1;
    this.updateValue(ROOM);
  }

  changeValueBathRoomIncrease() {
    this.removeDecrease(this.buttonDecrease, 2);
    this.val3 = parseFloat(this.input[2].value);

    this.val3 = this.increase(this.val3);
    this.val3 = this.validateValue(this.val3);

    this.input[2].value = this.val3;
  }

  changeValueBathRoomDecrease() {
    this.val3 = parseFloat(this.input[2].value);

    this.val3 = this.decrease(this.val3);
    this.val3 = this.validateValue(this.val3);

    this.input[2].value = this.val3;
  }

  changeValuePeopleIncrease(index) {
    this.buttonCleans[0].classList.remove('dropdown__button-menu--hide');
    this.removeDecrease(this.buttonPeopleDecrease, index);

    this.fullVal = parseFloat(this.increase(parseFloat(this.fullVal)));
    this.fullVal = this.validatePeopleValue(this.fullVal, index);
    let { value } = this.input[index];
    value = parseFloat(this.increase(parseFloat(value)));
    value = this.validateValue(value);

    this.input[index].value = value;
    this.updateValue(PEOPLE);
  }

  changeValuePeopleDecrease(index) {
    this.buttonCleans[0].classList.remove('dropdown__button-menu--hide');

    this.fullVal = parseFloat(this.decrease(parseFloat(this.fullVal)));
    this.fullVal = this.validatePeopleValue(this.fullVal, index);
    let { value } = this.input[index];
    value = parseFloat(this.decrease(parseFloat(value)));
    value = this.validateValue(value);
    if (value === 0) this.buttonPeopleDecrease[index].classList.add('dropdown__button--no-active');

    this.input[index].value = value;
    this.updateValue(PEOPLE);
  }

  getValue() {
    const dropdownMenu = this.anchor.querySelector('.js-text-field__input');

    let fullVal = parseFloat(dropdownMenu.value.replace(/[^0-9]/g, '')).toString();
    let val1 = parseFloat(fullVal.replace(/\d/, ''));
    let val2 = parseFloat(fullVal.replace(/\d$/, ''));

    if (Number.isNaN(val1) || Number.isNaN(val2) || Number.isNaN(fullVal)) {
      val1 = 0;
      val2 = 0;
      fullVal = 0;
    }

    this.fullVal = fullVal;
    this.val1 = val1;
    this.val2 = val2;
  }

  updateValue(type) {
    const dropdownMenu = this.anchor.querySelector('.js-text-field__input');
    let string;
    if (ROOM === type) string = `${this.val2} спальни ${this.val1} кровати...`;
    if (PEOPLE === type) string = `${this.fullVal} гостя`;

    dropdownMenu.value = string;
  }

  removeDecrease(element, index) {
    return element[index].classList.remove('dropdown__button--no-active');
  }

  toggle(event) {
    const element = event.target;
    const dropdownMenu = this.anchor.querySelector('.js-dropdown__menu');
    element.classList.toggle('text-field__input--open');
    dropdownMenu.classList.toggle('dropdown__menu--active');
  }

  clear() {
    this.buttonCleans[0].classList.add('dropdown__button-menu--hide');
    this.dropdownInput[0].value = 'Сколько гостей';

    this.input.forEach((element) => {
      const input = element;
      input.value = 0;
    });

    this.buttonPeopleDecrease.forEach((element) => {
      element.classList.add('dropdown__button--no-active');
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

  validateValue(value) {
    let curValue = value;
    if (value > 9) curValue = 0;
    if (value < 0) curValue = 0;

    return curValue;
  }

  validatePeopleValue(value, index) {
    let curValue = value;
    if (value > 9) {
      this.input[0].value = 0;
      this.input[1].value = 0;
      this.input[2].value = 0;
      this.input[index].value = -1;
      curValue = 0;
    }
    if (value < 0) {
      curValue = 0;
    }

    return curValue;
  }
}

export default Dropdown;

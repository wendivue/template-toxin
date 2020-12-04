class Checkbox {
  constructor(anchor) {
    this.anchor = anchor;

    this.getElement();
    this.bindEventClick(this.anchor);
  }

  getElement() {
    this.icon = this.anchor.querySelector('.checkbox-list__icon');
    this.menu = this.anchor.querySelector('.checkbox-list__items');
  }

  bindEventClick(element) {
    element.addEventListener('click', this.toggle.bind(this));
  }

  toggle() {
    this.icon.classList.toggle('checkbox-list__icon--open');
    this.menu.classList.toggle('checkbox-list__items--open');
  }
}

const checkbox = document.querySelectorAll('.checkbox-list');

checkbox.forEach((anchor) => {
  new Checkbox(anchor);
});

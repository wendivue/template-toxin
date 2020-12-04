class RadioButtons {
  constructor(anchor) {
    this.anchor = anchor;

    this.getElement();
    this.bindEventClick(this.anchor);
  }

  getElement() {
    this.label = document.querySelectorAll('.radio-buttons__label');
  }

  bindEventClick(element) {
    element.addEventListener('click', this.toggle.bind(this));
  }

  toggle() {
    this.label.forEach((element) => {
      element.classList.toggle('radio-buttons__label--active');
    });
  }
}

const radioButtons = document.querySelectorAll('.radio-buttons__radio');

radioButtons.forEach((anchor) => {
  new RadioButtons(anchor);
});

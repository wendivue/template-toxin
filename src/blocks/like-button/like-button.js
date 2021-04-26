class LikeButton {
  constructor(anchor) {
    this.anchor = anchor;
    this.init();
  }

  init() {
    this.getElement();
    this.bindEventClick(this.checkbox);
  }

  getElement() {
    this.checkbox = this.anchor.querySelector('.js-like-button__checkbox');
    this.label = this.anchor.querySelector('.js-like-button__number');
  }

  bindEventClick(element) {
    element.addEventListener('click', this.increase.bind(this));
  }

  increase() {
    let value = parseFloat(this.label.innerText);
    if (this.checkbox.checked) {
      value += 1;
    } else {
      value -= 1;
    }

    this.label.innerText = value;
  }
}

export default LikeButton;

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
    this.text = this.anchor.querySelector('.js-like-button__number');
    this.label = this.anchor.querySelector('.js-like-button__label');
  }

  bindEventClick(element) {
    element.addEventListener('click', this.increase.bind(this));
  }

  increase() {
    let value = parseFloat(this.text.innerText);
    if (this.checkbox.checked) {
      value += 1;
    } else {
      value -= 1;
    }

    this.text.innerText = value;
    this.label.classList.toggle('like-button__label_active');
  }
}

export default LikeButton;

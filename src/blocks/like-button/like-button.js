class LikeButton {
  constructor(anchor) {
    this.anchor = anchor;
    this.init();
  }

  init() {
    this.defineElements();
    this.addEventHandlers();
  }

  defineElements() {
    this.checkbox = this.anchor.querySelector('.js-like-button__checkbox');
    this.text = this.anchor.querySelector('.js-like-button__number');
    this.label = this.anchor.querySelector('.js-like-button__label');
  }

  addEventHandlers() {
    this.checkbox.addEventListener('click', this.increase.bind(this));
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

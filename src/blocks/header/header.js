class Header {
  constructor(anchor) {
    this.anchor = anchor;

    this.init();
  }

  init() {
    this.getElement();
    this.bindEventDocumentClick();
    this.bindEventClickBurder(this.burder);
  }

  getElement() {
    this.burder = this.anchor.querySelectorAll('.js-header__burder');
  }

  bindEventClickBurder(elements) {
    elements.forEach((element) => {
      element.addEventListener('click', this.toggleBurder.bind(this));
    });
  }

  bindEventDocumentClick() {
    document.addEventListener('click', this.handleDocumentClick);
  }

  toggleBurder() {
    const menu = this.anchor.querySelector('.js-header__menu');
    menu.classList.toggle('header__menu_active');
  }

  handleDocumentClick(event) {
    const targetBurger = event.target.closest('.js-header__burder');
    const targetMenu = event.target.closest('.js-header__menu');
    const menu = document.querySelectorAll('.js-header__menu');

    if (!targetBurger && !targetMenu) {
      menu.forEach((element) => {
        element.classList.remove('header__menu_active');
      });
    }
  }
}

export default Header;

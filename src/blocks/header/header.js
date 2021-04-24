class Header {
  constructor(anchor) {
    this.anchor = anchor;

    this.init();
  }

  init() {
    this.getElement();
    this.bindEventDocumentClick();
    this.bindEventClickBurger(this.burger);
  }

  getElement() {
    this.burger = this.anchor.querySelectorAll('.js-header__burger');
  }

  bindEventClickBurger(elements) {
    elements.forEach((element) => {
      element.addEventListener('click', this.toggleBurger.bind(this));
    });
  }

  bindEventDocumentClick() {
    document.addEventListener('click', this.handleDocumentClick);
  }

  toggleBurger() {
    const menu = this.anchor.querySelector('.js-header__menu');
    menu.classList.toggle('header__menu_active');
  }

  handleDocumentClick(event) {
    const targetBurger = event.target.closest('.js-header__burger');
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

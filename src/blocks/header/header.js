class Header {
  constructor(anchor) {
    this.anchor = anchor;

    this.init();
  }

  init() {
    this.defineElements();
    this.addEventHandlersDocument();
    this.addEventHandlersBurger();
  }

  defineElements() {
    this.burger = this.anchor.querySelectorAll('.js-header__burger');
  }

  addEventHandlersBurger() {
    const elements = this.burger;

    elements.forEach((element) => {
      element.addEventListener('click', this.toggleBurger.bind(this));
    });
  }

  addEventHandlersDocument() {
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

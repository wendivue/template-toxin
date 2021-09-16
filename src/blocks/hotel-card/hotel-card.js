import 'owl.carousel';

class HotelCard {
  constructor($anchor) {
    this.$anchor = $anchor;

    this.init();
  }

  init() {
    this.defineAttributes();
    this.createSlider();
  }

  defineAttributes() {
    this.dataNav = JSON.parse(this.$anchor.attr('data-nav'));
    this.dataItems = this.$anchor.attr('data-items');
    this.dataDots = JSON.parse(this.$anchor.attr('data-dots'));
  }

  createSlider() {
    this.$anchor.owlCarousel({
      nav: this.dataNav,
      items: this.dataItems,
      dots: this.dataDots,
      navText: [
        '<button class="hotel-card__icon">expand_more</button>',
        '<button class="hotel-card__icon">expand_more</button>',
      ],
    });
  }
}

export default HotelCard;

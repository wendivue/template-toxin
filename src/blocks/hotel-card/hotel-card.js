import 'owl.carousel';

function hotelCard(element) {
  $(element).owlCarousel({
    nav: true,
    items: 1,
    dots: true,
    navText: [
      '<button class="hotel-card__icon">expand_more</button>',
      '<button class="hotel-card__icon">expand_more</button>',
    ],
  });
}

export default hotelCard;

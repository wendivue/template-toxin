import 'ion-rangeslider/js/ion.rangeSlider';

$('.js-range-slider__input').ionRangeSlider({
  type: 'double',
  postfix: '₽',
  step: 100,
  values_separator: ' - ',
});

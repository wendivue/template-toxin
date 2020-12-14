import 'ion-rangeslider/js/ion.rangeSlider';

function rangeSlider(element) {
  $(element).ionRangeSlider({
    type: 'double',
    postfix: '₽',
    step: 100,
    values_separator: ' - ',
  });
}

export default rangeSlider;

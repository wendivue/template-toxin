import 'air-datepicker/dist/js/datepicker';

$('.text-field__datepicker, .datepicker-here').datepicker({
  navTitles: {
    days: 'MM yyyy',
  },
  prevHtml: '<button class="date-picker__icon">arrow_back</button>',
  nextHtml: '<button class="date-picker__icon">arrow_forward</button>',
});

$('.text-field__datepicker-start').datepicker({
  onSelect: (fd) => {
    $('.text-field__datepicker-start').val(fd.split('-')[0]);
    $('.text-field__datepicker-end').val(fd.split('-')[1]);
  },
});

$('.datepicker').append(
  `<div class='date-picker__wrapper-button'>
  <button class= 'datepicker--button date-picker__button date-picker__button--cleans ' data - action='clear' > очистить</button >
  <button class='date-picker__button'>применить</button></div >`
);

$('.date-picker__button').on('click', () => {
  $('.datepicker-here').blur();
});

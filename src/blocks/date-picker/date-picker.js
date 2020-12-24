import 'air-datepicker/dist/js/datepicker';

function datePicker(element) {
  $(element, '.datepicker-here').datepicker({
    navTitles: {
      days: 'MM yyyy',
    },
    prevHtml: '<button class="date-picker__icon">arrow_back</button>',
    nextHtml: '<button class="date-picker__icon">arrow_forward</button>',
  });

  $('.js-text-field__date-range').datepicker({
    range: true,
  });

  $('.js-text-field__datepicker-start').datepicker({
    range: true,
    onSelect: (fd) => {
      $('.js-text-field__datepicker-start').val(fd.split('-')[0]);
      $('.js-text-field__datepicker-end').val(fd.split('-')[1]);
    },
  });

  $('.datepicker').append(
    `<div class='date-picker__wrapper-button'>
    <button class= 'datepicker--button date-picker__button date-picker__button--cleans ' data-action='clear' > очистить</button >
    <button class='date-picker__button js-date-picker__button'>применить</button></div >`
  );

  $('.js-date-picker__button').on('click', () => {
    $('.datepicker-here').blur();
  });
}

export default datePicker;

import 'air-datepicker/dist/js/datepicker';

function datePicker(element) {
  $(`${element}, .datepicker-here`).datepicker({
    navTitles: {
      days: 'MM yyyy',
    },
    startDate: new Date(),
    prevHtml: '<button class="date-picker__icon">arrow_back</button>',
    nextHtml: '<button class="date-picker__icon">arrow_forward</button>',
  });

  $('.js-date-picker__input-range').datepicker({
    range: true,
    minDate: new Date(),
  });

  $('.js-date-picker__input-start, .js-date-picker__input-end').datepicker({
    range: true,
    minDate: new Date(),
    onSelect: (fd) => {
      $('.js-date-picker__input-start').val(fd.split('-')[0]);
      $('.js-date-picker__input-end').val(fd.split('-')[1]);
    },
  });

  $('.js-date-picker__input-single').datepicker({
    dateFormat: 'd M',
    onSelect: (fd) => {
      $('.js-date-picker__input-single').val(fd.toLowerCase());
    },
  });

  $('.datepicker').append(
    `<div class='date-picker__wrapper-button'>
    <button class= 'datepicker--button date-picker__button date-picker__button_cleans ' data-action='clear' > очистить</button >
    <button class='date-picker__button js-date-picker__button'>применить</button></div >`
  );

  $('.js-date-picker__button').on('click', () => {
    $('.datepicker-here').blur();
  });
}

export default datePicker;

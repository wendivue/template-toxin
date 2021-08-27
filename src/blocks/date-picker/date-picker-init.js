import DatePicker from './date-picker';

$('.js-date-picker').each(function datePicker() {
  return new DatePicker($(this));
});

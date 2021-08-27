import 'air-datepicker/dist/js/datepicker';

class DatePicker {
  constructor($anchor) {
    this.$anchor = $anchor;

    this.init();
  }

  init() {
    this.getElement();
    this.getAttribute();
    this.createDatePicker();
    this.bindEventButtonClick(this.$button);
    this.bindEventEndClick(this.$end);
  }

  getElement() {
    this.$input = this.$anchor.find('.js-date-picker__input');
    this.$start = this.$anchor.find('.js-date-picker__input-start');
    this.$end = this.$anchor.find('.js-date-picker__input-end');
    this.$single = this.$anchor.find('.js-date-picker__input-single');
  }

  getAttribute() {
    this.dateRangeType = this.$anchor.attr('data-type');
    this.dateFormat = this.$anchor.attr('data-date-format');
    this.dateNavTitles = this.$anchor.attr('data-date-nav-titles');
    this.inline = JSON.parse(this.$anchor.attr('data-inline'));
  }

  createDatePicker() {
    const onSelect = this.addOnSelect();
    if (this.inline) this.$input = this.$anchor;

    this.datepicker = this.$input
      .datepicker({
        navTitles: {
          days: this.dateNavTitles,
        },
        dateFormat: this.dateFormat,
        range: true,
        todayButton: true,
        clearButton: true,
        inline: this.inline,
        startDate: new Date(),
        minDate: new Date(),
        prevHtml: '<button class="date-picker__icon date-picker__icon_row">arrow_back</button>',
        nextHtml: '<button class="date-picker__icon date-picker__icon_row">arrow_forward</button>',
        onSelect,
      })
      .data('datepicker');

    this.$button = $('.datepicker--button');
  }

  addOnSelect() {
    let onSelect = this.dateRangeType;

    if (this.dateRangeType) {
      onSelect = (fd) => {
        this.$start.val(fd.split('-')[0]);
        this.$end.val(fd.split('-')[1]);
      };

      return onSelect;
    }

    onSelect = (fd) => {
      this.$single.val(fd.toLowerCase());
    };

    return onSelect;
  }

  bindEventButtonClick(element) {
    element.on('click', this.hide.bind(this));
  }

  bindEventEndClick(element) {
    element.on('click', this.show.bind(this));
  }

  hide() {
    this.datepicker.hide();
  }

  show() {
    this.datepicker.show();
  }
}

export default DatePicker;

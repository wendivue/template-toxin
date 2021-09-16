import 'air-datepicker/dist/js/datepicker';

class DatePicker {
  constructor($anchor) {
    this.$anchor = $anchor;

    this.init();
  }

  init() {
    this.defineElements();
    this.defineAttributes();
    this.createDatePicker();
    this.addEventHandlers();
  }

  defineElements() {
    this.$input = this.$anchor.find('.js-date-picker__input');
    this.$calendar = this.$anchor.find('.js-date-picker__calendar');
    this.$start = this.$anchor.find('.js-date-picker__input-start');
    this.$end = this.$anchor.find('.js-date-picker__input-end');
    this.$single = this.$anchor.find('.js-date-picker__input-single');
    this.$button = this.$anchor.find('.js-date-picker__button');
  }

  defineAttributes() {
    this.dateRangeType = this.$anchor.attr('data-type');
    this.dateFormat = this.$anchor.attr('data-date-format');
    this.dateNavTitles = this.$anchor.attr('data-date-nav-titles');
    this.isInline = JSON.parse(this.$anchor.attr('data-inline'));
    this.selected = JSON.parse(this.$anchor.attr('data-selected'));
  }

  createDatePicker() {
    this.todayButton = new Date();
    const onSelect = this.addOnSelect();
    const selectDates = this.createDates(this.selected);

    this.datepicker = this.$calendar
      .datepicker({
        navTitles: {
          days: this.dateNavTitles,
        },
        dateFormat: this.dateFormat,
        range: true,
        multipleDatesSeparator: ' - ',
        isInline: this.isInline,
        startDate: new Date(),
        minDate: new Date(),
        prevHtml: '<button class="date-picker__icon date-picker__icon_row">arrow_back</button>',
        nextHtml: '<button class="date-picker__icon date-picker__icon_row">arrow_forward</button>',
        onSelect,
      })
      .data('datepicker');

    this.datepicker.selectDate(selectDates);
  }

  addOnSelect() {
    let onSelect = this.dateRangeType;

    if (this.dateRangeType) {
      onSelect = (fd) => {
        this.$start.val(fd.split(' - ')[0]);
        this.$end.val(fd.split(' - ')[1]);
      };

      return onSelect;
    }

    onSelect = (fd) => {
      this.$single.val(fd.toLowerCase());
    };

    return onSelect;
  }

  addEventHandlers() {
    this.addEventHandlersDocument();
    this.addEventHandlersInput();
    this.addEventHandlersButton();
    this.addEventHandlersButtonClear();
  }

  addEventHandlersDocument() {
    document.addEventListener('click', this.handleDocumentClick.bind(this));
  }

  addEventHandlersInput() {
    const elements = [this.$start, this.$end, this.$single];

    elements.forEach((element) => element.on('click', this.show.bind(this)));
  }

  addEventHandlersButton() {
    const element = this.$button.last();

    element.on('click', this.hide.bind(this));
  }

  addEventHandlersButtonClear() {
    const element = this.$button.first();

    element.on('click', this.clear.bind(this));
  }

  handleDocumentClick(event) {
    const targetDatepicker = event.target.closest('.js-date-picker');
    const targetCell = event.target.closest('.datepicker--cell');
    const targetNavTitle = event.target.closest('.datepicker--nav-title');
    const targetNavAction = event.target.closest('.datepicker--nav-action');
    const isTarget = !targetDatepicker && !targetCell && !targetNavTitle && !targetNavAction;

    if (isTarget) this.hide();
  }

  hide() {
    this.$calendar.addClass('date-picker__calendar_hidden');
    if (this.datepicker.selectedDates.length === 0) this.setNowDate();
  }

  show() {
    this.$calendar.removeClass('date-picker__calendar_hidden');
  }

  clear() {
    this.datepicker.clear();
  }

  setNowDate() {
    this.datepicker.date = new Date();
  }

  createDates(dates) {
    const newDates = [];

    dates.forEach((date) => {
      const [year, month, day] = date;

      newDates.push(new Date(year, month, day));
    });

    return newDates;
  }
}

export default DatePicker;

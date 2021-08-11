import 'simple-pagination.js';

class Pagination {
  constructor(anchor) {
    this.anchor = anchor;

    this.init();
  }

  init() {
    this.getAttribute();
    this.addPagination();
  }

  getAttribute() {
    this.itemsOnPage = this.anchor.getAttribute('data-items-on-page');
    this.items = this.anchor.getAttribute('data-items');
    this.currentPage = this.anchor.getAttribute('data-current-page');
  }

  addPagination() {
    $('.js-pagination__pages').pagination({
      items: this.items,
      itemsOnPage: this.itemsOnPage,
      currentPage: this.currentPage,
      displayedPages: 3,
      prevText: '<div class="pagination__navigate">arrow_back</div>',
      nextText: '<div class="pagination__navigate">arrow_forward</div>',
      edges: 1,
    });
  }
}

export default Pagination;

import Pagination from './pagination';

const paginations = document.querySelectorAll('.js-pagination');

paginations.forEach((element) => new Pagination(element));

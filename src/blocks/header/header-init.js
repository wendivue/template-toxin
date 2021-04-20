import Header from './header';

const headers = document.querySelectorAll('.js-header');

headers.forEach((element) => new Header(element));

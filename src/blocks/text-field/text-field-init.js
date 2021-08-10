import TextField from './text-field';

const textFields = document.querySelectorAll('.js-text-field');

textFields.forEach((element) => new TextField(element));

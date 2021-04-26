import LikeButton from './like-button';

const likeButtons = document.querySelectorAll('.js-like-button');

likeButtons.forEach((element) => new LikeButton(element));

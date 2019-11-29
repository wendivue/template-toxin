$(document).ready(function() {
    $( function() {
    $(".checkbox-list__wrapper-header").on('click', function() {
        $(".checkbox-list__items").slideToggle();
        $(".checkbox-list__icon").toggleClass("checkbox-list__icon--open");
    });
});
});

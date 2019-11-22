$(document).ready(function() {

  $(document).on('click', "#increase", function () {
    $(".dropdown__button-menu--cleans").css("opacity", "1");
    var parent = $(this).parent();

    $("#dropdown-input", parent).val(function (i, val) {

      function increase() {
        return ++val;
      }
  
      if (!/9/.test(val)) {
        return increase();
      }
      else {
        val = 0;
        return increase();
      }
    });
  });

  $(document).on('click', "#decrease", function () {
    $(".dropdown__button-menu--cleans").css("opacity", "1");
    var parent = $(this).parent();
    
    $("#dropdown-input", parent).val(function (i, val) {
      function decrease() {
        return --val;
      }
  
      if (!/0/.test(val)) {
        return decrease();
      }
      else {
        val = 1;
        return decrease();
      }
    });
  });

  $(document).on('click', '#button-menu-cleans', function () {
    $(".dropdown__button-menu--cleans").css("opacity", "0");
    $('[id^="dropdown-input"]').val(function (i, val) {
      return 0;
    });
  });

  $("#dropdown, #button-menu-complete").on('click', function() {
    $(".dropdown__menu").slideToggle();
});

});





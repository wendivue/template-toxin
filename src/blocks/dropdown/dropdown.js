$(document).ready(function() {

  $(document).on('click', "#room-increase-1", function () {
    var parent = $(this).parent();
    $(".dropdown__button-menu--cleans").css("opacity", "1");
    $('[id^="room-decrease"]', parent).removeClass("dropdown__button--no-active");

    $(".text-field__dropdown").val(function (i, val) {
      var fullval = parseInt(val.replace(/[^0-9]/g, '')).toString();
      var val1 = parseInt(fullval.replace(/\d/, ''));
      var val2 = parseInt(fullval.replace(/\d$/, ''));

      if(val2 == "NaN" || val1 == "NaN" || fullval == "NaN") {
        val1 = 0;
        val2 = 0;
        fullval = 0;
      }

      function increase() {
        val2 = ++val2;
        val2 += " спальни " + val1 + " кровати...";
        return val2;
      }
  
      if (!/9/.test(fullval)) {
        return increase();
      }
      else {
        val2 = 0;
        return increase();
      }
    });

    $("#dropdown-room-input", parent).val(function (i, val) {

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

  $(document).on('click', "#room-increase-2", function () {
    var parent = $(this).parent();
    $(".dropdown__button-menu--cleans").css("opacity", "1");
    $('[id^="room-decrease"]', parent).removeClass("dropdown__button--no-active");

    $(".text-field__dropdown").val(function (i, val) {
      var fullval = parseInt(val.replace(/[^0-9]/g, '')).toString();
      var val1 = parseInt(fullval.replace(/\d/, ''));
      var val2 = parseInt(fullval.replace(/\d$/, ''));

      if(val2 == "NaN" || val1 == "NaN" || fullval == "NaN") {
        val1 = 0;
        val2 = 0;
        fullval = 0;
      }
      
      function increase() {
        val1 = ++val1;
        val1 = val2 + " спальни " + val1 + " кровати...";
        return val1;
      }
  
      if (!/9/.test(fullval)) {
        return increase();
      }
      else {
        val1 = 0;
        return increase();
      }
    });

    $("#dropdown-room-input", parent).val(function (i, val) {

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

  $(document).on('click', "#room-increase-3", function () {
    var parent = $(this).parent();
    $(".dropdown__button-menu--cleans").css("opacity", "1");
    $('[id^="room-decrease"]', parent).removeClass("dropdown__button--no-active");

    $("#dropdown-room-input", parent).val(function (i, val) {

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

  $(document).on('click', "#room-decrease-1", function () {
    $(".dropdown__button-menu--cleans").css("opacity", "1");
    var parent = $(this).parent();

    $(".text-field__dropdown").val(function (i, val) {
      var fullval = parseInt(val.replace(/[^0-9]/g, '')).toString();
      var val1 = parseInt(fullval.replace(/\d/, ''));
      var val2 = parseInt(fullval.replace(/\d$/, ''));

      if(val2 == "NaN" || val1 == "NaN" || fullval == "NaN") {
        val1 = 0;
        val2 = 0;
        fullval = 0;
      }

      function decrease() {
        val2 = --val2;
        val2 += " спальни " + val1 + " кровати...";
        return val2;
      }
  
      if (!/1/.test(fullval)) {
        return decrease();
      }
      else {
        val2 = 1;
        return decrease();
      }
    });

    $("#dropdown-room-input", parent).val(function (i, val) {

      function decrease() {
        return --val;
      }

      if (!/1/.test(val)) {
        return decrease();
      }
      else {
        $('[id^="room-decrease"]', parent).addClass("dropdown__button--no-active");
        val = 1;
        return decrease();
      }
    });
  });

  $(document).on('click', "#room-decrease-2", function () {
    $(".dropdown__button-menu--cleans").css("opacity", "1");
    var parent = $(this).parent();

    $(".text-field__dropdown").val(function (i, val) {
      var fullval = parseInt(val.replace(/[^0-9]/g, '')).toString();
      var val1 = parseInt(fullval.replace(/\d/, ''));
      var val2 = parseInt(fullval.replace(/\d$/, ''));

        if(val2 == "NaN" || val1 == "NaN" || fullval == "NaN") {
          val1 = 0;
          val2 = 0;
          fullval = 0;
        }

      function decrease() {
        val1 = --val1;
        val1 = val2 + " спальни " + val1 + " кровати...";
        return val1;
      }
  
      if (!/0/.test(fullval)) {
        return decrease();
      }
      else {
        val1 = 1;
        return decrease();
      }
    });

    $("#dropdown-room-input", parent).val(function (i, val) {

      function decrease() {
        return --val;
      }

      if (!/1/.test(val)) {
        return decrease();
      }
      else {
        $('[id^="room-decrease"]', parent).addClass("dropdown__button--no-active");
        val = 1;
        return decrease();
      }
    });
  });

  $(document).on('click', "#room-decrease-3", function () {
    $(".dropdown__button-menu--cleans").css("opacity", "1");
    var parent = $(this).parent();

    $("#dropdown-room-input", parent).val(function (i, val) {

      function decrease() {
        return --val;
      }

      if (!/1/.test(val)) {
        return decrease();
      }
      else {
        $('[id^="room-decrease"]', parent).addClass("dropdown__button--no-active");
        val = 1;
        return decrease();
      }
    });
  });

  $(document).on('click', "#increase", function () {
    var parent = $(this).parent();
    $(".dropdown__button-menu--cleans").css("opacity", "1");
    $('[id^="decrease"]', parent).removeClass("dropdown__button--no-active");

    $(".text-field__dropdown-people").val(function (i, val) {
      var fullval = parseInt(val.replace(/[^0-9]/g, '')).toString();

      if(fullval == "NaN") {
        fullval = 0;
      }
  
      function increase() {
        fullval = ++fullval;
        fullval += " гостя ";
        return fullval;
      }
  
      if (!/9/.test(fullval)) {
        return increase();
      }
      else {
        fullval = 0;
        return increase();
      }
    });

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

    $(".text-field__dropdown-people").val(function (i, val) {
      var fullval = parseInt(val.replace(/[^0-9]/g, '')).toString();
  
      function decrease() {
        fullval = --fullval;
        fullval += " гостя ";
        return fullval;
      }
  
      if (!/0/.test(fullval)) {
        return decrease();
      }
      else {
        fullval = 1;
        return decrease();
      }
    });

    $("#dropdown-input", parent).val(function (i, val) {
      function decrease() {
        return --val;
      }

      if (!/1/.test(val)) {
        return decrease();
      }
      else {
        $('[id^="decrease"]', parent).addClass("dropdown__button--no-active");
        val = 1;
        return decrease();
      }
    });
  });


  $(document).on('click', '#button-menu-cleans-people', function () {
    $(".dropdown__button-menu--cleans").css("opacity", "0");
    $('[id^="decrease"]').addClass("dropdown__button--no-active");

    $('[id^="dropdown-input"]').val(function (i, val) {
      return 0;
    });

    $(".text-field__dropdown-people").val(function (i, val) {
      return "Сколько гостей";
    });
  });

  $(document).on('click', '#button-menu-cleans', function () {
    $(".dropdown__button-menu--cleans").css("opacity", "0");
    $('[id^="room-decrease"]').addClass("dropdown__button--no-active");

    $('[id^="dropdown-room-input"]').val(function (i, val) {
      return 0;
    });
    п
    $(".text-field__dropdown").val(function (i, val) {
      return "Сколько спален и кроватей";
    });
  });

  $(".text-field__dropdown-people, #button-menu-complete-people").on('click', function() {
    var parent = $(this).parent();
    $(".text-field__input", parent).toggleClass("text-field__input--open");
    $("#dropdown-menu").slideToggle();
  });

  $(".text-field__dropdown, #button-menu-complete").on('click', function() {
    var parent = $(this).parent();
    $(".text-field__input", parent).toggleClass("text-field__input--open");
    $("#dropdown-room-menu").slideToggle();
  });

});





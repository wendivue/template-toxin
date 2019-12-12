$(document).ready(function() {

    $( function() {
        $( "#slider-range" ).slider({
            range: true,
            min: 0,
            max: 15700,
            values: [ "5000", "10000" ],
            slide: function( event, ui ) {
              $( "#amount" ).val(ui.values[0].toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + '\u{20BD}' + " - "+
               ui.values[1].toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + '\u{20BD}');
            }
          });
          $( "#amount" ).val($( "#slider-range" ).slider( "values", 0 ).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') +
          '\u{20BD}' + " - " + $( "#slider-range" ).slider( "values", 1 ).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + '\u{20BD}');
    });
});
$(document).ready(function() {
    var index = 2;
    $('#button-next').click(function() {
      $('#number'+index).addClass('active');
      if ( index < 4 ) {
        index = index + 1;
      }
    });
    $('#button-prev').click(function() {
      $('#number'+index).removeClass('active');
      if ( index > 2 ) {
        index = index - 1;
      }
    });
  });
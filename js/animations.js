$(document).ready(function() {
$('#tweet-controls').hide();



$('.tweet-compose').on('click', function() {
$(this).css('height','5em');
$('#tweet-controls').show();
$('#char-count').show();
$('tweet-submit').show();
});

$('.tweet-compose').keyup(function() {
  var max_Length = 140;
  var str_Length = $('.tweet-compose').val().length;
  var charsLeft = max_Length - str_Length;
  $('#char-count').html(max_Length - str_Length);
  if (charsLeft <= 10) {
    $('#char-count').css('color', 'red');

    }

  
});


});

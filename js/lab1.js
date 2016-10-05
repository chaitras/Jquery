$(function () {
    $('ul').children('li').css('color', 'red');
});

//$(function () {
  //  $('ol').children().filter(':even').css('background-color', 'pink');
//});

$(function () {
    $('ul').find('li').first().text('color');
});

$(function () {
    $('ul').find('li').first().nextAll().css('color','green');
});


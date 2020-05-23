console.log('js all');

$(function () {
  console.log('jquery run');
  $('.js-call-coverPanel').click( function (e) {
    e.preventDefault();
    // console.log('.js-call-coverPanel on click');
    $(".js-coverPanel-section").addClass('active');
  });
  $('.js-close-coverPanel').click( function (e) {
    e.preventDefault();
    $(".js-coverPanel-section").removeClass('active');
  });
})



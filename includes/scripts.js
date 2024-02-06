$('#story-link').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $('#story').offset().top
    }, 1000);
});

$('#details-link').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $('#details').offset().top
    }, 1000);
});

$('#rsvp-link').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $('#rsvp-section').offset().top
    }, 1000);
});


$(document).ready(function() {

  $('.parallax').parallax();
  $("a").on('click', function(event) {
      if (this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;
          $('html, body').animate({
              scrollTop: $(hash).offset().top
          }, 800, function() {
              window.location.hash = hash;
          });
      }
  });
});
window.onload = function() {
scrolly();
};

window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function () {
  // Toggle the mobile navbar burger, if a navbar is added later.
  $(".navbar-burger").click(function () {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  var options = {
    slidesToScroll: 1,
    slidesToShow: 3,
    loop: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  // Initialize all elements with the carousel class.
  bulmaCarousel.attach('.carousel', options);

  bulmaSlider.attach();
});

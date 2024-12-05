
jQuery(document).ready(function ($) {
    // menu bg add
    function checkScroll() {
      if ($(window).scrollTop() > 50) {
          $(".header-area").addClass("menu-bg");
      } else {
          $(".header-area").removeClass("menu-bg");
      }
    }
  
    $(window).on('scroll', function() {
      if ($(window).scrollTop() > 300) {
          $('header').addClass('menu-bg-fixed');
      } else {
          $('header').removeClass('menu-bg-fixed');
      }
    });
    // Run on page load
    $(document).ready(function () {
      checkScroll();
    });

    // Run on scroll
    $(window).on("scroll", function () {
      checkScroll();
    });
    $('.counter').counterUp({
      delay: 20,
      time: 1500
  });

  $('.nav-bar-icon').click(function(e) {
    e.stopPropagation(); // Prevent click event from bubbling up
    $('.navbar-nav').slideToggle();
  });
  $(document).click(function(e) {
    if (!$(e.target).closest('.navbar-nav').length) {
      $('.navbar-nav').slideUp();
    }
  });

})

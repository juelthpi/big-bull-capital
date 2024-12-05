
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

  $(document).ready(function () {
    function toggleNavBar() {
      if (window.innerWidth <= 768) { // Check if screen width is 768px or smaller
        $('.nav-bar-icon').off('click').on('click', function (e) {
          e.stopPropagation(); // Prevent click event from bubbling up
          $('.navbar-nav').slideToggle();
        });
  
        $(document).off('click').on('click', function (e) {
          if (!$(e.target).closest('.navbar-nav, .nav-bar-icon').length) {
            $('.navbar-nav').slideUp();
          }
        });
      } else {
        // Reset styles and events for larger screens
        $('.navbar-nav').removeAttr('style'); // Removes inline styles like display:none
        $('.nav-bar-icon').off('click');
        $(document).off('click');
      }
    }
  
    // Call function on page load and on window resize
    toggleNavBar();
    $(window).resize(toggleNavBar);
  });
  
})

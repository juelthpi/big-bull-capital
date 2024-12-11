
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

// loader
$(window).on("load", function () {
  $("#preloader").fadeOut();
  $("#preloader").delay(500).fadeOut("slow");
  $("body").delay(500).css({ opacity:1 });
 });
 // Smooth scroll with offset
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('data-target');
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      const offset = 100; // Adjust the gap size as needed
      const sectionPosition = targetSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: sectionPosition - offset,
        behavior: 'smooth'
      });
    }
  });
});

// ScrollSpy: Add active class to nav links
const sections = document.querySelectorAll('section[id]'); // Ensure each section has a unique ID
const navLinks = document.querySelectorAll('.nav-link');
// IntersectionObserver setup
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Highlight the corresponding nav link
        const targetId = entry.target.id;

        navLinks.forEach(link => {
          link.classList.remove('active'); // Remove active class from all links
          if (link.getAttribute('data-target') === targetId) {
            link.classList.add('active'); // Add active class to the current link
          }
        });
      }
    });
  },
  {
    threshold: 0.6, // At least 60% of the section is visible to activate it
    rootMargin: `-100px 0px 0px 0px` // Account for the offset
  }
);
// Observe all sections
sections.forEach(section => observer.observe(section));
// Activate "About" section on page load
window.addEventListener('DOMContentLoaded', () => {
  // Trigger the IntersectionObserver manually for the "About" section
  const aboutSection = document.getElementById('about');
  if (aboutSection) {
    const targetId = aboutSection.id;

    navLinks.forEach(link => {
      link.classList.remove('active'); // Remove active class from all links
      if (link.getAttribute('data-target') === targetId) {
        link.classList.add('active'); // Add active class to the "About" link
      }
    });
  }
});

 
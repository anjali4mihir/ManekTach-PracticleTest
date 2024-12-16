// Select all lines
const lines = document.querySelectorAll("rect");

// GSAP Timeline Animation
gsap.timeline({ repeat: -1, yoyo: true })
    .to(lines, {
        duration: 1,
        scaleY: (i) => 1 + Math.random() * 1.5, // Random height change
        transformOrigin: "center bottom",
        ease: "power1.inOut",
        stagger: 0.1,
    });

//Circle animation
gsap.fromTo("#Chart-2", {strokeDasharray: 1880, strokeDashoffset: 1880}, {
    strokeDashoffset: 0,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
});
gsap.fromTo("#Chart-3", {strokeDasharray: 600, strokeDashoffset: 600}, {
    strokeDashoffset: 0,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    delay: 0.5
});

gsap.fromTo("#Chart-4", {strokeDasharray: 1610, strokeDashoffset: 1610}, {
    strokeDashoffset: 0,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    delay: 1
});

gsap.fromTo("#Chart-5", {strokeDasharray: 900, strokeDashoffset: 900}, {
    strokeDashoffset: 0,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    delay: 1.5
});

gsap.fromTo("#Chart-6", {strokeDasharray: 1300, strokeDashoffset: 1300}, {
    strokeDashoffset: 0,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    delay: 2
});

gsap.fromTo("#Chart-7", {strokeDasharray: 550, strokeDashoffset: 550}, {
    strokeDashoffset: 0,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    delay: 2.5
});

gsap.fromTo("#Chart-8", {strokeDasharray: 1300, strokeDashoffset: 1300}, {
    strokeDashoffset: 0,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    delay: 3
});

gsap.fromTo("#Chart-9", {strokeDasharray: 600, strokeDashoffset: 600}, {
    strokeDashoffset: 0,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    delay: 3.5
});

gsap.fromTo("#Chart-10", {strokeDasharray: 1000, strokeDashoffset: 1000}, {
    strokeDashoffset: 0,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    delay: 4
});

gsap.fromTo("#Chart-11", {strokeDasharray: 700, strokeDashoffset: 700}, {
    strokeDashoffset: 0,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    delay: 4.5
});

gsap.fromTo("#Chart-12", {strokeDasharray: 850, strokeDashoffset: 850}, {
    strokeDashoffset: 0,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    delay: 5
});

gsap.fromTo("#Chart-13", {strokeDasharray: 550, strokeDashoffset: 550}, {
    strokeDashoffset: 0,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    delay: 5.5
});

gsap.fromTo("#Chart-14", {strokeDasharray: 500, strokeDashoffset: 500}, {
    strokeDashoffset: 0,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    delay: 6
});

gsap.fromTo("#Chart-15", {strokeDasharray: 400, strokeDashoffset: 400}, {
    strokeDashoffset: 0,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    delay: 6.5
});

gsap.fromTo("#Chart-16", {strokeDasharray: 200, strokeDashoffset: 200}, {
    strokeDashoffset: 0,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    delay: 7
});

gsap.fromTo("#Chart-17", {strokeDasharray: 100, strokeDashoffset: 100}, {
    strokeDashoffset: 0,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    delay: 7.5
});

//Banner animation
window.onload = () => {
    const pathChart = document.querySelector('#Chart');
    const pathEllipse = document.querySelectorAll('#Ellipse_195 path');
    const path1233 = document.querySelectorAll('#Path_1233 path');

    // Set initial stroke-dasharray and stroke-dashoffset for the elements
    const setDasharray = (path) => {
        const length = path.getTotalLength();
        path.style.strokeDasharray = length;
        path.style.strokeDashoffset = length;
    };

    // Apply dasharray to all paths
    [pathChart, ...pathEllipse, ...path1233].forEach(setDasharray);

    // Animate the paths infinitely
    gsap.to(pathChart, {
        duration: 2,
        strokeDashoffset: 0,
        ease: "power2.out",
        repeat: -1,  // Infinite repeat
        yoyo: true   // Reverse the animation
    });

    pathEllipse.forEach(path => {
        gsap.to(path, {
        duration: 2,
        strokeDashoffset: 0,
        ease: "power2.out",
        repeat: -1,  // Infinite repeat
        yoyo: true,  // Reverse the animation
        delay: 0.5   // Delay for other elements
        });
    });

    path1233.forEach(path => {
        gsap.to(path, {
        duration: 2,
        strokeDashoffset: 0,
        ease: "power2.out",
        repeat: -1,  // Infinite repeat
        yoyo: true,  // Reverse the animation
        delay: 1     // Delay for other elements
        });
    });
};


//For animation content
jQuery(document).ready(function () {
if (jQuery(window).width() >= 767) {
    var $animation_elements = jQuery('.animation-element');
    var $window = jQuery(window);
    
    function check_if_in_view() {
      var window_height = $window.height();
      var window_top_position = $window.scrollTop();
      var window_bottom_position = (window_top_position + window_height);
    
      jQuery.each($animation_elements, function() {
        var $element = jQuery(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);
    
        // Check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
          $element.addClass('in-view');
        }
      });
    }
    
    // Bind the function to scroll and resize events
    $window.on('scroll resize', check_if_in_view);
    // Initial check on page load
    $window.trigger('scroll');
  
    var $animation_story = $('.show-on-scroll');
    function story_if_in_view() {
      var window_height = $window.height() / 2;
      var window_heighthalf = window_height / 2;
      var window_top_position = $window.scrollTop();
      var window_bottom_position = (window_top_position + window_heighthalf);
    
      $.each($animation_story, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);
    
        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
          $element.addClass('is-visible');
        }// else{
        //   $element.removeClass('is-visible');
        //  }
      });
    }
    $window.on('scroll resize', story_if_in_view);
    $window.trigger('scroll');
}
});

//For slider pagination
document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector("#logo-carousel");
    const carouselItems = carousel.querySelectorAll(".carousel-item");
    const indicatorsContainer = document.querySelector("#dynamicIndicators");

    // Create bullets dynamically based on the number of carousel items
    carouselItems.forEach((item, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.setAttribute("data-bs-target", "#logo-carousel");
      button.setAttribute("data-bs-slide-to", index);
      if (index === 0) {
        button.classList.add("active");
      }
      indicatorsContainer.appendChild(button);
    });

    // Update active bullet as the carousel slides
    carousel.addEventListener("slid.bs.carousel", function () {
      const activeIndex = Array.from(carouselItems).findIndex((item) =>
        item.classList.contains("active")
      );
      const bullets = indicatorsContainer.querySelectorAll("button");
      bullets.forEach((bullet, index) => {
        bullet.classList.toggle("active", index === activeIndex);
      });
    });
  });

// JavaScript to handle bullet activation on scroll
const slider = document.getElementById('slider');
const bullets = document.querySelectorAll('.bullet');
const cards = document.querySelectorAll('.solution-block-inner');

slider.addEventListener('scroll', () => {
  const sliderWidth = slider.scrollWidth - slider.clientWidth;
  const scrollLeft = slider.scrollLeft;

  // Calculate active bullet index based on scroll position
  const activeIndex = Math.round((scrollLeft / sliderWidth) * (cards.length - 1));

  bullets.forEach((bullet, index) => {
    if (index === activeIndex) {
      bullet.classList.add('active');
    } else {
      bullet.classList.remove('active');
    }
  });
});

//For Fixed header
const header = document.getElementById("header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) { // Trigger fixed header after scrolling 50px
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
});

$(document).ready(function () {
    function toggleSlider() {
      if ($(window).width() < 768) {
        if (!$('.homegrown-technologies-right').hasClass('slick-initialized')) {
          $('.homegrown-technologies-right').slick({
            dots: true,             // Pagination bullets
            arrows: false,          // No arrows
            infinite: true,
            speed: 500,
            slidesToShow: 2.5,        // Show 2 slides at a time
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 480,    // For smaller screens
                settings: {
                  slidesToShow: 2.5   // Show 1 slide
                }
              }
            ]
          });
        }
      } else {
        if ($('.homegrown-technologies-right').hasClass('slick-initialized')) {
          $('.homegrown-technologies-right').slick('unslick'); // Destroy slider
        }
      }
    }
  
    toggleSlider(); // Run on page load
  
    $(window).resize(function () {
      toggleSlider(); // Run on window resize
    });
});


  
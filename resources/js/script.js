$(document).ready(function () {
   
    /* For the sticky navigation */
    $('.js--section-features').waypoint(function(direction) {
        var nav = $('.js__wp-nav');
        
        if (direction == "down") {
            $('nav').addClass('sticky');
            nav.addClass('animated fadeIn faster');
        }
        else {
            $('nav').removeClass('sticky');
            nav.removeClass('animated fadeIn faster');
        }
    }, {
        offset: '60px'
    });
    
    /* Scroll buttons */
    $('.js--scroll-to-plan').click(function() {
       $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000); 
    });
    
    $('.js--scroll-to-start').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });
    
    /* Navigation scroll */
    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
        // On-page links 
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
    });
    
    
    /* Animations on scroll */
    $('.js__wp-1').waypoint(function(direction) {
        $('.js__wp-1').addClass('animated fadeIn');
    }, {
        offset: '75%'
    });
    
    $('.js__wp-2').waypoint(function(direction) {
        $('.js__wp-2').addClass('animated fadeInUp');
    }, { 
        offset: '75%'
    });
    
     $('.js__wp-3').waypoint(function(direction) {
        $('.js__wp-3').addClass('animated fadeIn');
    }, { 
        offset: '75%'
    });
    
     $('.js__wp-4').waypoint(function(direction) {
        $('.js__wp-4').addClass('animated pulse');
    }, { 
        offset: '75%'
    });
    
    /* Mobile navigation menu */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200); 
        
        if (icon.hasClass('ion-ios-close')) {
            icon.addClass('ion-ios-menu');
            icon.removeClass('ion-ios-close');
        } else {
            icon.removeClass('ion-ios-menu');
            icon.addClass('ion-ios-close'); 
        }
    });
    
});
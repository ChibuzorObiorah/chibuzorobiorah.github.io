$(document).ready(function() {
    $(window).on("scroll", function() {
      if($(window).scrollTop() > 800) {
          $(".navlink").addClass("black-font");
          $(".bar").addClass("black-font")
      } else {
          //remove the background property so it comes transparent again (defined in your css)
         $(".navlink").removeClass("black-font");
      }
    });
    
  // On click show menu on small screen

  $('body').addClass('js');
  var $menu = $('#menu'),
    $menulink = $('.menu-link');

  $menulink.click(function() {
    $menulink.toggleClass('active');
    $menu.toggleClass('active');
    return false;
  });

  $menulink.click(function(){
    $menulink.toggleClass('open');
  });
  
});

// on scroll animation //
var scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

function loop() {
    Array.prototype.forEach.call(elementsToShow, function(element){
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');
      } 
    });

    scroll(loop);
}

// Call the loop for the first time
loop();


// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}



// HIDE NAV BAR ON SCROLL CODE:
   // $('html').on('DOMMouseScroll mousewheel', function (e) {
    //   if(e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0 && $(window).scrollTop() > 100 ) { //alternative options for wheelData: wheelDeltaX & wheelDeltaY
    //     //scroll down
    //     console.log('Down');
    //     $( "#header-nav" ).addClass( "hide-nav-bar" );
    //   } else {
    //     //scroll up
    //     console.log('Up');
    //     $( "#header-nav" ).removeClass( "hide-nav-bar" );
    //   }
    //   //prevent page fom scrolling
    //   //return false;
    // });
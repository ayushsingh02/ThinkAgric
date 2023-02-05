// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    $('header').addClass('active');
  } else {
    $('header').removeClass('active');
  }
}


$('.farm-slider .owl-carousel').owlCarousel({
    stagePadding: 250,
    loop:true,
    margin:20,
    nav:false,
    responsive:{
        0:{
            items:1,
            stagePadding:40
        },
        600:{
            items:2,
            stagePadding:100
        },
        1000:{
            items:2
        }
    }
})
$('.testi-slider .owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})

/*=============================================================================================*/
/*Player Slider Arrows*/

$('.left-arrow').click(function(e){
        e.preventDefault();
    $(".testi-slider .owl-carousel").trigger('prev.owl');
})
$('.right-arrow').click(function(e){
        e.preventDefault();
    $(".testi-slider .owl-carousel").trigger('next.owl');
})

//Tabs

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

$('.site-header__hamburger').click(function(e){
    $('#mobile-menu').addClass('is-shown');
});
$('.site-mobile-menu__close').click(function(e){
    $('#mobile-menu').removeClass('is-shown');
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top -110
        }, 1000);
        return false;
      }
    }
  });
});
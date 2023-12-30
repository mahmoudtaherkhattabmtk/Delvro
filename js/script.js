$(window).on("scroll", function() {
    if($(window).scrollTop() > 70) {
      $(".navbar").addClass("active");
    } else {
      //remove the background property so it comes transparent again (defined in your css)
      $(".navbar").removeClass("active");
    }
  });
  
  var $window = $(window);

  // :: 1.0 Preloader Active Code
  $window.on('load', function () {
      $('#preloader').fadeOut('slow', function () {
          $(this).remove();
      });
  });

  function reveal() {
    var bouncetop = document.querySelectorAll(".bouncetop");
  
    for (var i = 0; i < bouncetop.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = bouncetop[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        bouncetop[i].classList.add("active");
      } else {
        bouncetop[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
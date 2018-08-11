
$(document).ready(function () {
    $(".toggleOnLoad").toggle();
    
    // Checking if item is being hoverd on
    $(".dot").hover(function () {

        var isHovered = $('.dot').is(":hover");

        if (isHovered) {
            $(this).addClass("pulse");
            $(this).removeClass("bounceInDown");
        } else {
            $(this).removeClass("pulse");
        }
    });

    function fadeIn() {
        $(".portfolio__greetingText").toggle();
        $(".portfolio__header__animated").toggle();
        $(".portfolio__greetingText").addClass("fadeIn");
        $(".portfolio__header__animated").addClass("fadeIn");
    }

    setTimeout(fadeIn, 600);

    function slideInUp() {
        $("#portfolio__about").toggle();
        $(".divided").toggle();
        $("#circle").addClass("slideInUp");
        $(".portfolio__divider").addClass("slideInUp");
        $("#portfolio__about").addClass("slideInUp");
    }

    setTimeout(slideInUp, 1000);

    $(".portfolio__title").on('click', function(event) {

        if (this.hash !== "") {
          event.preventDefault();
    
          // Store hash
          var hash = this.hash;
    
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
       
            window.location.hash = hash;
          });
        }
    });

    function togglingContent(){
        $("#portfolio__bio").toggle();
        $(".logo").toggle();
    }

    setTimeout(togglingContent, 1000);

});

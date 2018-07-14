
$(document).ready(function () {
    $(".portfolio__greetingText").toggle();
    $(".portfolio__header__animated").toggle();

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
        $("..portfolio__header__animated").addClass("fadeIn");
    }

    setTimeout(fadeIn, 500);

});

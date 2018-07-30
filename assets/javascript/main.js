
$(document).ready(function () {
    $(".projects").hover(function () {
        var isHoveringWRY = $('#who_represents_you').is(":hover");
        var isHoveringFF = $('#friend_finder').is(":hover");
        var isHoveringDT = $('#disney_trivia').is(":hover");
        var isHoveringHM = $('#hangman').is(":hover");


        if (isHoveringWRY || isHoveringFF || isHoveringDT || isHoveringHM) {
            $(this).addClass("pulse");
        }else {
            $(this).removeClass("pulse");
        }
    });
});

$(document).ready(function () {
    $(".projects").hover(function () {
        var isHoveringWRY = $('#who_represents_you').is(":hover");
        var isHoveringFF = $('#friend_finder').is(":hover");
        var isHoveringDT = $('#disney_trivia').is(":hover");
        var isHoveringHM = $('#hangman').is(":hover");


        if (isHoveringWRY || isHoveringFF || isHoveringDT || isHoveringHM) {
            $(this).addClass("pulse");
        } else {
            $(this).removeClass("pulse");
        }
    });


    function clearInput() {
        var firstname = $('#first_name').val(''),
            lastname = $('#last_name').val(''),
            email = $('#exampleInputEmail1').val(''),
            phone = $('#phone').val('');
    };

    $('#form_button').on('click', function (event) {
        event.preventDefault(); // Prevent Page from Refreshing
        var firstname = $('#first_name').val(),
            lastname = $('#last_name').val(),
            email = $('#exampleInputEmail1').val(),
            phone = $('#phone').val();

        var visitor = {
            firstname,
            lastname,
            email,
            phone
        };

        console.log('Visitor: ', visitor);

        $.ajax({
            url: '/message',
            method: 'POST',
            data: visitor
        })
            .then(function (data) {
                clearInput();
            })
            .catch(function (data) {
                // TODO
            });
    });


    /*
        first_name
        last_name
        exampleInputEmail1
        phone
    */
});
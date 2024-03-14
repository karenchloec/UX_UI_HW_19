$(document).ready(function() {
    $('#linkedinlogo, #goodreadslogo, #emailmelogo').hide();

    $('#linkedinlogo').fadeIn(1000, function() {
        $('#goodreadslogo').fadeIn(1000, function() {
            $('#emailmelogo').fadeIn(1000);
        });
    });
});


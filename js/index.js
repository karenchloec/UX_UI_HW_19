$(document).ready(function() {
    $('#linkedinlogo, #goodreadslogo, #emailmelogo').hide();

    $('#linkedinlogo').fadeIn(1000, function() {
        $('#goodreadslogo').fadeIn(1000, function() {
            $('#emailmelogo').fadeIn(1000);
        });
    });
});



//this seems a lot more complicated than doing the css version of it
$(document).ready(function() {
    $('button').hover(
        function() { 
            $(this).css({
                'background-color': '#C3F0E8',
                'color': 'black'
            });
        },
        function() { 
            $(this).css({
                'background-color': 'transparent',
                'color': '#EDE7E2'
            });
        }
    );
});


$(document).ready(function() {

    var initialScale = 2.5;
 
    var maxScale = 2; 
    var minScale = 1; 

    var documentHeight = $(document).height();
    var viewportHeight = $(window).height();
    var maxScroll = documentHeight - viewportHeight;

    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();

     
        var newScale = initialScale - (scrollTop * 0.01); 
        newScale = Math.min(newScale, maxScale);
        newScale = Math.max(newScale, minScale);

        $('#logoImg img').css({
            'transform': 'scale(' + newScale + ')',
            'transform-origin': 'top left'
        });
    });
});




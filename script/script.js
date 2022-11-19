jQuery(document).ready(function($) {
    $(window).scroll(function(){
        if($(this).scrollTop()>871){
            $('#menu').addClass('fixed');
        }
        else if ($(this).scrollTop()<871){
            $('#menu').removeClass('fixed');
        }
    });
});

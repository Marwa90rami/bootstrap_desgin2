 /* global $ , window */
$(function () {
    'use strict';
   $(window).scroll(function () {
//        window.consol.log($('.navbar').height());
//        window.consol.log($(window).scrollTop());
        
        var navbar = $('.navbar');
          if ($(window).scrollTop() >= navbar.height()) {
           navbar.addClass('scrolled');
        } else {
           navbar.removeClass('scrolled'); 
        }
});
    
    // Deal With Tab 
    $('.tab-switch li').click(function () {
        // Add Selected Class To Active Link
       $(this).addClass('selected').siblings().removeClass('selected');
        // Hide All Divs
        $('.tab .tab-content > div').hide();
        //Show Div Connected With This Link
        $($(this).data('class')).show();
    });
});
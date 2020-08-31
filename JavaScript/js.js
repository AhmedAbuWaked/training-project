$(function () {
   
    'use strict';
    
    // Trigger Nice Scroll
    
    $('html').niceScroll({
        
        cursorcolor: '#add136',
        
        cursorwidth: '10px',
        
        cursorborder: '1px solid #add136',
        
        cursorborderradius: 0
        
    });
    
    //Scroll To Top Button
    
    $(window).scroll(function () {
       
        if ($(window).scrollTop() >= 800) {

            $('.scroll-to-top').fadeIn(); 

        } else {

            $('.scroll-to-top').fadeOut();

        }

        
    });
    
    $('.scroll-to-top').click(function (event) {
        
        event.preventDefault();
        
        $('html , body').animate({
            
            scrollTop : 0
            
        }, 1500)
    
    });
});




















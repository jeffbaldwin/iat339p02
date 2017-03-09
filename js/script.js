'use strict';



$("document").ready(function($){
    
    /* Stick nav to top when scrolling 

    JS code partly taken from: 

    http://stackoverflow.com/questions/13274592/leave-menu-bar-fixed-on-top-when-scrolled

    Answer March 4 2013 by Tomas Gonzalez */

    var nav = $('#nav');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            nav.addClass("fix_nav");
            console.log("scroll");
        } else {
            nav.removeClass("fix_nav");
        }
    });
    
    /* -------------------- */
    
    
    /* Product image hover zoom + pan 
    
    Code partially from: 
    
    https://codepen.io/ccrch/pen/yyaraz */
    
    $('.product_detail_image_inner_container')
        .on('mouseover', function(){
          $(this).children('.product_detail_image').css({'transform': 'scale(2)'});
        })
        .on('mouseout', function(){
          $(this).children('.product_detail_image').css({'transform': 'scale(1)'});
        })
        .on('mousemove', function(e){
          $(this).children('.product_detail_image').css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +'%'});
        })
    
    /* -------------------- */
    
    
    /* Show more text in updates */
    
    $('.update_show_more').on('click', function(){
        $('.update_copy').children('.update_show_more').addClass("update_hidden");
        $('.update_copy').children('.update_ellipses').addClass("update_hidden");
        $('.update_copy').children('.update_hidden_copy').removeClass("update_hidden");
    })
    
    /* -------------------- */
    
    
    /* Proceed to checkout link */
    
    $('#proceed_to_checkout').on('click', function(){
        window.location.href = "purchase.html";
    })
    
    /* -------------------- */
    
    
//    button.addEventListener('click', function() {
//        document.querySelector('ul').classList.toggle('hidden');
//    })

    
    
    
    
    
    /* Hide/show nav */
    
    /* If the window is smaller than 700px, hide that nav buttons and show the NAV button */
    if ($(window).width() < 700) {
        $('#nav_button').removeClass('nav_hidden');
        $('#nav_items').addClass('nav_hidden');
//        $('#logo_small').addClass('nav_hidden');
    } else {
        $('#nav_button').addClass('nav_hidden');
        $('#nav_items').removeClass('nav_hidden');
//        $('#logo_small').removeClass('nav_hidden');
    }
    
    /* When the NAV button is clicked */
    $('#nav_toggle').click( function() { 
        
        console.log('click');
        /* Show the other nav buttons */
        $('#nav_items').toggleClass('nav_hidden');
        $('#nav_toggle').toggleClass('close');
    
        if ($(this).hasClass("close")) {
            $(this).html("CLOSE");
        } else {
            $(this).html("NAV");
        }
        
    });
        
    /* -------------------- */
    
    
});





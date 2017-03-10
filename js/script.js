'use strict';



$("document").ready(function($) {

    /* Stick nav to top when scrolling

    Code partly taken from:

    http://stackoverflow.com/questions/13274592/leave-menu-bar-fixed-on-top-when-scrolled

    Answer March 4 2013 by Tomas Gonzalez */

    var nav = $('#nav');

    $(window).scroll(function() {
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
        .on('mouseover', function() {
            $(this).children('.product_detail_image').css({
                'transform': 'scale(2)'
            });
        })
        .on('mouseout', function() {
            $(this).children('.product_detail_image').css({
                'transform': 'scale(1)'
            });
        })
        .on('mousemove', function(e) {
            $(this).children('.product_detail_image').css({
                'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 + '%'
            });
        })

    /* -------------------- */


    /* Show more text in updates */

    $('.update_show_more').on('click', function() {
        $(this).addClass("update_hidden");
        $(this).siblings('.update_ellipses').addClass("update_hidden");
        $(this).siblings('.update_hidden_copy').removeClass("update_hidden");
    })

    /* -------------------- */


    /* Button links */

    $('#proceed_to_checkout').on('click', function() {
        window.location.href = "purchase.html";
    })
    
    $('#complete_purchase').on('click', function() {
        window.location.href = "purchase-complete.html";
    })
    
    $('#back_to_products').on('click', function() {
        window.location.href = "index.html";
    })

    /* -------------------- */


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
    $('#nav_toggle').click(function() {

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


    /* Quantity button

    Code by Jose Sayago from:

    http://jsfiddle.net/laelitenetwork/puJ6G/ */

    // This button will increment the value
    $('.qtyplus').click(function(e) {
        console.log('click');
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name=' + fieldName + ']').val());
        // If is not undefined
        if (!isNaN(currentVal)) {
            // Increment
            $('input[name=' + fieldName + ']').val(currentVal + 1);
        } else {
            // Otherwise put a 0 there
            $('input[name=' + fieldName + ']').val(0);
        }
    });

    // This button will decrement the value till 0
    $(".qtyminus").click(function(e) {
        console.log('click');
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name=' + fieldName + ']').val());
        // If it isn't undefined or its greater than 0
        if (!isNaN(currentVal) && currentVal > 0) {
            // Decrement one
            $('input[name=' + fieldName + ']').val(currentVal - 1);
        } else {
            // Otherwise put a 0 there
            $('input[name=' + fieldName + ']').val(0);
        }
    });
    
    /* -------------------- */

    
    /* Pop up modal 
    
    Javascript sourced from:
    
    https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal2 */
    
    
    // When the user clicks on 'cart,' open the modal
    
    $('#cart_nav_button').click(function() {
        console.log('click');
        $('#cart').removeClass('modal_hidden');
    });
    
    // When the user clicks on 'add to cart,' open the modal
    
    $('#add_to_cart').click(function() {
        console.log('click');
        $('#cart_modal').removeClass('modal_hidden');
    });

    // When the user clicks on 'close,' close the modal
    
    $('#cart_close').click(function() {
        console.log('click');
        $('#cart_modal').addClass('modal_hidden'); 
    });
    
    /* -------------------- */

    

});

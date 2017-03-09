

/* 

JS code partly taken from: 

http://stackoverflow.com/questions/13274592/leave-menu-bar-fixed-on-top-when-scrolled

Answer March 4 2013 by Tomas Gonzalez 

ORIGINAL CODE

$("document").ready(function($){
    var nav = $('#main-menu-container');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 125) {
            nav.addClass("f-nav");
        } else {
            nav.removeClass("f-nav");
        }
    });
});

*/



$("document").ready(function($){
    
    
    
    
    /* Stick nav to top when scrolling */
    var nav = $('#nav');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            nav.addClass("fix_nav");
            console.log("scroll");
        } else {
            nav.removeClass("fix_nav");
        }
    });
    /**/
    
    
    /* 
    Product image hover zoom + pan 
    Code partially from: https://codepen.io/ccrch/pen/yyaraz
    */
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
    
    
    $('.update_show_more').on('click', function(){
        $('.update_copy').children('.update_show_more').addClass("update_hidden");
        $('.update_copy').children('.update_ellipses').addClass("update_hidden");
        $('.update_copy').children('.update_hidden_copy').removeClass("update_hidden");
    })
    
    
    $('#proceed_to_checkout').on('click', function(){
        window.location.href = "purchase.html";
    })
    
    
//    button.addEventListener('click', function() {
//        document.querySelector('ul').classList.toggle('hidden');
//    })

});






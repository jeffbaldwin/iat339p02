

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
    var nav = $('#nav');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            nav.addClass("fix_nav");
            console.log("scroll");
        } else {
            nav.removeClass("fix_nav");
        }
    });
});
$(document).ready(function(){
    $(".hero-slider").owlCarousel({
        items: 1,
        nav: true,
        autoplay: true,
        loop: true
    });

    $(".testimonial-slider").owlCarousel({
        items: 3,
        nav: true,
        dots: false,
        autoplay: true,
        margin: 20,
        loop: true,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1
            },
            // breakpoint from 480 up
            480 : {
                items: 1
            },
            // breakpoint from 768 up
            768 : {
                items: 3
            },
            // breakpoint from 768 up
            1280 : {
                items: 3
            }
        }
    });

    $(".partner-slider").owlCarousel({
        items: 3,
        nav: false,
        autoplay: true,
        loop: true,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 2
            },
            // breakpoint from 480 up
            480 : {
                items: 3
            },
            // breakpoint from 768 up
            768 : {
                items: 3
            },
            // breakpoint from 768 up
            1280 : {
                items: 3
            }
        }
    });

    var docEl = $(document),
        headerEl = $('header'),
        navEl = $('nav'),
        linkScroll = $('nav a');
    
    linkScroll.click(function(e){
        e.preventDefault();

        linkScroll.removeClass("active");
        $(this).addClass("active");

        $('body, html').animate({
            scrollTop: $(this.hash).offset().top
        }, 500);
    });

    $(".burger button").click(function(b){
        b.preventDefault();
        $("nav").toggleClass("show");
        $(this).children("i").toggleClass("ri-menu-line ri-close-line");
    });

    $(".accordion-header").click(function(){
        $($(this).next()).slideToggle(500);
        $($(this).children("button").children("i")).toggleClass("ri-arrow-down-s-line ri-arrow-up-s-line");
    });
});
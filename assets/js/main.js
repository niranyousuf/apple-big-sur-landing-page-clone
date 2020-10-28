if ($(window).width() > 1025) {
    window.addEventListener('load', () => {

        var tl = new TimelineMax({ onUpdate: updatePercentage });
        var tl2 = new TimelineMax({ onUpdate: updatePercentage });
        const controller = new ScrollMagic.Controller();

        tl.from(".hero_banner", 1, {paddingTop: '100px' });
        tl.from(".hero", 1, {scale: 2.3 }, "=-1");
        tl.to(".hero_heading", .5, { opacity: 0 }, "=-1");
        tl.from(".hero_dock", 1, { scale: 1.1, opacity: 0 }, "=-.5");
        tl.from('.hero_map', 1, { scale: 1.3, x: -800, y: -400 }, '=-1');
        tl.from('.hero_control', 1, { scale: 1.3, x: 600, y: -400 }, "=-1");
        tl.from('.hero_safari', 1, { scale: 1.3, x: 800, y: 450 }, "=-1");
        tl.from('.hero_chat', 1, { scale: 1.3, x: -600, y: 400 }, "=-1");
        tl.from(".hero", 1, { y: 250 });


        const scene = new ScrollMagic.Scene({
            triggerElement: "#banner",
            triggerHook: "onLeave",
            duration: "200%"
        })
            .setPin("#banner")
            .setTween(tl)
            .addTo(controller);



        tl2.to(".experience_hero", 2, { x: 550, scale: 1 });
        tl2.from(".feature_one", .5, { opacity: 0 }, '=-1');
        tl2.to(".feature_one", .5, { opacity: 0, y: -100, }, '=1');
        tl2.from(".feature_two", .5, { opacity: 0, y: 100, });
        tl2.to(".ex_screen", .5, { opacity: 0 });
        tl2.to(".experience_hero", 2, { x: 900, y: -300, scale: 1.4 });
        tl2.from(".ex_dock", .5, { opacity: 0, y: 50 });
        tl2.to(".feature_two", .5, { opacity: 0, y: -100, }, "=1");
        tl2.to(".ex_dock", .5, { opacity: 0, y: 50 }, "=1");
        tl2.to(".experience_hero", 5, { x: -900, y: 300, scale: 1.4 }, '=1');

        tl2.from(".feature_three", .5, { opacity: 0 });
        tl2.from(".ex_control", .5, { opacity: 0 }, "=-1");
        tl2.to(".feature_three", .5, { opacity: 0, y: -100, }, "=1");
        tl2.to(".ex_control", .5, { opacity: 0 }, "=1");
        tl2.to(".experience_hero", 2, { x: -750, y: 200, scale: 1.1 }, '=1');
        tl2.from(".feature_four", .5, { opacity: 0, y: 100, }, "=-1");
        tl2.from(".ex_notification", .5, { opacity: 0 }, "=-1");


        const scene2 = new ScrollMagic.Scene({
            triggerElement: "#experience",
            triggerHook: "onLeave",
            duration: "300%"
        })
            .setPin("#experience")
            .setTween(tl2)
            .addTo(controller);

        function updatePercentage() {
            tl.progress();
            tl2.progress();
        }

    });

}




(function ($) {
    "use strict";

    $(document).ready(function () {
        // testimonial slider landing page
        $(".expand").on('click', function () {
            if ($('.expand').hasClass('close')) {
                $(this).removeClass('close')
                    .siblings('h3').removeClass('white-color')
                    .siblings(".main_content").css({
                        opacity: 0,
                        zIndex: -1
                    });
            } else {
                $(this).addClass('close')
                    .siblings('h3').addClass('white-color')
                    .siblings(".main_content").css({
                        opacity: 1,
                        zIndex: 1
                    });
            }
        });

        
    if($(window).width() < 768) {
        $('.top_bar').append($('.logo, .s_bag'));
    }

    });
    // sticky menu
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 44) {
            $('.sticky_bar').addClass('sticky');
        } else {
            $('.sticky_bar').removeClass('sticky');
        }
    });

})(jQuery)
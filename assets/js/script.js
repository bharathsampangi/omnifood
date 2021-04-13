$(document).ready(function () {
    $(".js--section-features").waypoint(
        function (direction) {
            if (direction == "down") {
                $("nav").addClass("sticky");
            } else {
                $("nav").removeClass("sticky");
            }
        },
        {
            offset: "10%",
        }
    );

    $(".js--scroll-to-plans").click(function () {
        $("html, body").animate({ scrollTop: $(".js--section-plans").offset().top }, 1000);
    });

    $(".js--scroll-to-features").click(function () {
        $("html, body").animate({ scrollTop: $(".js--section-features").offset().top }, 1000);
    });

    $('a[href*="#"]').on("click", function (e) {
        e.preventDefault();

        $("html, body").animate(
            {
                scrollTop: $($(this).attr("href")).offset().top,
            },
            1000,
            "linear"
        );
    });

    $(".js--wp-1").waypoint(
        function (direction) {
            $(".js--wp-1").addClass("animate__animated animate__fadeIn");
        },
        {
            offset: "50%",
        }
    );

    $(".js--wp-2").waypoint(
        function (direction) {
            $(".js--wp-2").addClass("animate__animated animate__fadeInUp");
        },
        {
            offset: "50%",
        }
    );

    $(".js--wp-3").waypoint(
        function (direction) {
            $(".js--wp-3").addClass("animate__animated animate__fadeIn");
        },
        {
            offset: "50%",
        }
    );

    $(".js--wp-4").waypoint(
        function (direction) {
            $(".js--wp-4").addClass("animate__animated animate__bounceIn");
        },
        {
            offset: "50%",
        }
    );


    $('.js--nav-icon').click(function() {

        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon ion-icon')
        nav.slideToggle(200);

        if(icon.attr("name") == 'menu-outline') {
            icon.attr('name', 'close-outline' )
        }else {
            icon.attr('name', 'menu-outline' )
        }

    })

});

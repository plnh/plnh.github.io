(function ($) {

    $(window).load(function () {
        $("#navigation").sticky({ topSpacing: 0 });
    });

    $('ul.nav li.dropdown').hover(function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
    }, function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
    });


    // jQuery to collapse the navbar on scroll
    $(window).scroll(function () {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function () {
        $('.navbar-nav li a').bind('click', function (event) {
            var $anchor = $(this);
            var nav = $($anchor.attr('href'));
            if (nav.length) {
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top
                }, 1500, 'easeInOutExpo');

                event.preventDefault();
            }

        });
        $('a.totop,a#btn-scroll,a.btn-scroll,.carousel-inner .item a.btn').bind('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });

        $('.nav a').on('click', function () {
            $(".navbar-toggle").click() //bootstrap 3.x by Richard
        });
    });

    

  $(function () {
    $("#typer").typed({
      strings: ['Welcome to my personal website.', "Want to know more about me?","Click below!"],
      typeSpeed: 50,
      loop: true,
      startDelay: 100
    });
  });

})(jQuery);

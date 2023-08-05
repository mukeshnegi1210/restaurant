


$(function () {

  handleFixedHeader();

  // handling on scroll (animation and header-bg)
  $(window).scroll(function () {
    handleFixedHeader();
  });
  // scroll top ===============================
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('.scrollToTop').addClass("d-none");
    } else {
      $('.scrollToTop').addClass("d-inline-block");
    }
  });

  // handle bg of header on scroll 
  function handleFixedHeader() {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
      $("header").addClass("fixed-header");
    } else {
      $("header").removeClass("fixed-header");
    }
  }

  $('.scrollToTop').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 100);
    return false;
  });

  // scroll top ends ===============================




  $('.menu-open').click(function () {

    $('.primary-menu-outer').addClass('active');
  })
  $('.menu-close').click(function () {

    $('.primary-menu-outer').removeClass('active');
  })
  // block scroll ===============================
  $('.primary-menu li a, resturant-menu li a ').click(function () {
    $('.primary-menu-outer').removeClass('active');
    var get_scroll_id = $(this).attr('data-scroll');
    $('.primary-menu li a').removeClass("active");
    $(this).addClass("active");
    $("html, body").animate({
      scrollTop: $(get_scroll_id).offset().top - 80
    }, 600);

  });

  if (window.location.hash) {
    $('resturant-menu li a').removeClass("active");
    $(`.resturant-menu li a[data-scroll="${window.location.hash}"]`).addClass("active")
    // $('html, body').animate({ scrollTop: 0 }, 100);
    $("html, body").delay(300).animate({
      scrollTop: $(window.location.hash).offset().top - 70
    }, 600);

  }

})

$(window).on('load', function () {
  $('#aa-preloader-area').delay(300).fadeOut('d-none');
});
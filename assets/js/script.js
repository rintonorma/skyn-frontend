$(document).ready(function () {
  $('.testimonials_carousel').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    fade: true,
    cssEase: 'linear',
    prevArrow: '<button class="slide-arrow prev-arrow"><img src="assets/img/icons/icon-arrow-left.svg" alt="" /></button>',
    nextArrow: '<button class="slide-arrow next-arrow"><img src="assets/img/icons/icon-arrow-right.svg" alt="" /></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true
        }
      }
    ]
  });

  $('.big_banner').slick({
    dots: true,
    infinite: true,
    arrows: true,
    speed: 300,
    slidesToShow: 1,
    prevArrow: '<button class="slide-arrow prev-arrow"><img src="assets/img/icons/icon-arrow-left.svg" alt="" /></button>',
    nextArrow: '<button class="slide-arrow next-arrow"><img src="assets/img/icons/icon-arrow-right.svg" alt="" /></button>',
  });

  $('.ticker-slider').slick({
    dots: false,
    autoplay: true,
    infinite: true,
    arrows: true,
    speed: 300,
    slidesToShow: 1,
    prevArrow: '<button class="slide-arrow prev-arrow"><img src="assets/img/icons/icon-arrow-left-white.svg" alt="" /></button>',
    nextArrow: '<button class="slide-arrow next-arrow"><img src="assets/img/icons/icon-arrow-right-white.svg" alt="" /></button>',
  });

  $('.treatment_slider').slick({
    dots: true,
    infinite: false,
    arrows: false,
    speed: 300,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  });

  $('.product_slider').slick({
    dots: true,
    infinite: true,
    arrows: true,
    speed: 300,
    slidesToShow: 4,
    prevArrow: $(".leftArrowProduct"),
    nextArrow: $(".rightArrowProduct"),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true
        }
      }
    ]
  });

  $('.product_slider2').slick({
    dots: true,
    infinite: true,
    arrows: true,
    speed: 300,
    slidesToShow: 4,
    prevArrow: $(".leftArrowProduct2"),
    nextArrow: $(".rightArrowProduct2"),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true
        }
      }
    ]
  });

  $('.doctor_slider').slick({
    dots: true,
    infinite: true,
    arrows: true,
    speed: 300,
    slidesToShow: 3,
    prevArrow: $(".leftArrowTop"),
    nextArrow: $(".rightArrowTop"),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  });

  $('.testi_slider').slick({
    dots: true,
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  });

  $('.dealsCarousel').slick({
    dots: true,
    infinite: true,
    arrows: true,
    speed: 300,
    slidesToShow: 3,
    prevArrow: $(".leftArrowDeals"),
    nextArrow: $(".rightArrowDeals"),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true
        }
      }
    ]
  });

  $('.myStory').slick({
    dots: true,
    infinite: true,
    arrows: true,
    speed: 300,
    slidesToShow: 4,
    prevArrow: $(".leftArrowStory"),
    nextArrow: $(".rightArrowStory"),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true
        }
      }
    ]
  });

  $('.myGallery').slick({
    dots: true,
    infinite: true,
    arrows: true,
    speed: 300,
    slidesToShow: 4,
    prevArrow: $(".leftArrowGallery"),
    nextArrow: $(".rightArrowGallery"),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true
        }
      }
    ]
  });

  $(document).scroll(function () {
    var $nav = $("header.fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });

  $(document).scroll(function () {
    var $gototop = $(".gototop");
    $gototop.toggleClass('scrolled', $(this).scrollTop() > $gototop.height());
  });

  $(".toggle-password").click(function() {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });

  // $('#verification-code').pincodeInput({
  //   inputs:6,
  //   hideDigits:true,
  //   keydown :function(e){},
  //   change:function(input,value,inputnumber){},
  //   complete :function(value, e, errorElement){}
  // });

  document.querySelector(".confirmPhone").addEventListener('click', function(){
    Swal.fire({
        iconHtml: '<img src="assets/img/icons/icon-success-alert.svg" alt="success">',
        title: 'Congratulations!',
        text: 'Your Phone Number has been changed!',
        confirmButtonText: 'OK!',
        confirmButtonColor: '#141721',
      })
  });

  document.querySelector(".confirmPassword").addEventListener('click', function(){
    Swal.fire({
        iconHtml: '<img src="assets/img/icons/icon-success-alert.svg" alt="success">',
        title: 'Congratulations!',
        text: 'Your password has been changed!',
        confirmButtonText: 'OK!',
        confirmButtonColor: '#141721',
      })
  });

});


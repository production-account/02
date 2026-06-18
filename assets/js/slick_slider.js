$(document).ready(() => {
  $(".slider").slick({
    autoplay: false,
    arrows: false,
    fade: true,
    asNavFor: ".thumbnail",
    adaptiveHeight: true,
  });
  $(".thumbnail").slick({
    slidesToShow: 12,
    asNavFor: ".slider",
    focusOnSelect: true,
    adaptiveHeight: true,
  });
});
$(document).ready(() => {
  $('.sec05-center').slick({
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 960,
        settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        adaptiveHeight: true,
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '40px',
      adaptiveHeight: true,
      slidesToShow: 1
    }
  }
]
});
});
$(document).ready(() => {
  $(".sec08-slider").not('.slick-initialized').slick({
    adaptiveHeight: true,
    centerMode: true,
      autoplay: true,
      dots: true,
  
      slidesToShow: 3,
      responsive: [{ 
          breakpoint: 768,
          settings: {
              dots: false,
              arrows: false,
              infinite: false,
              slidesToShow: 1,
              slidesToScroll: 1
          } 
      }]
  });
});
$(document).ready(() => {
  $('.sec06-slider').slick({			
    autoplay: false,
    autoplaySpeed: 2000,
    fade: false,
    speed: 1000,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor:'.sec06-thumbnail',
    adaptiveHeight: true,
		});
    $('.sec06-thumbnail').slick({
      arrows:false,
      asNavFor:'.sec06-slider',//.sliderと連携
      slidesToShow:11,
      centerMode: true,
      focusOnSelect: true,
      adaptiveHeight: true,
    });
});
$(document).ready(() => {
  $('.slider').slick()
  .on('setPosition', function(event, slick) {
    slick.$slides.css('height', slick.$slideTrack.height() + 'px');
  });
});

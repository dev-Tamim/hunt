$(document).ready(function(){
  

  $(".back_to_top").click(function(){
    $("html,body").animate({
      scrollTop:0,
    })
  })

    $('.banner_slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
       nextArrow:".next",
       prevArrow:".prev"

      });


      $('.service_slide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
   vertical: true,
   centerMode: true,
   centerPadding:"0px",
  nextArrow:".srnext",
  prevArrow:".srprev",
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: false,
      }},
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }},
      {
        breakpoint:992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode:true,
          centerPadding:"0px",
        }}
  ]
});



      $('.team_texts').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.team_images',
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }},
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }}


        ]
      });



      $('.team_images').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.team_texts',
        centerMode: true,
        focusOnSelect: true,
        vertical:true,
        centerMode:true,
        centerPadding:"0px",
        nextArrow:".tnext",
       prevArrow:".tprev",
       responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: false,
          }},
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: false,
          }}
      ]
    });


          
      $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    $(window).scroll(function(){
      var scrolling=$(this).scrollTop()
    if (scrolling > 20) {
      $(".nav_menu").addClass("nav_bg")
    } else{ $(".nav_menu").removeClass("nav_bg")}

    if (scrolling >20) {
      $(".back_to_top").fadeIn()
    }else{$(".back_to_top").fadeOut()}
    })



















    



  });
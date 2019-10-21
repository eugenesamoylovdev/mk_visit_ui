  $(document).ready(function()
  {
    $('.owl-carousel').owlCarousel({

      items:1,
      loop:true,
      margin:10,
      nav:true,
      navText:[
            '<i class="fa fa-angle-left fa-4x"></i>',
            '<i class="fa fa-angle-right fa-4x"></i>'
          ],
      autoplay:true,
      smartSpeed:3000, //Время движения слайда
              autoplayTimeout:5000,
              autoplayHoverPause:true,
              dots:true,
              dotsEach:true,
              lazyLoad:true,
      pagination:true,
      animateIn: 'fadeIn',
              animateOut: 'fadeOut'
       
          

    });
  });
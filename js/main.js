  $(document).ready(function()
  {
    $('.owl-one').owlCarousel({

      items:1,
      loop:true,
      margin:10,
      nav:true,
      navText:[
            '<i class="fa fa-angle-left fa-4x"></i>',
            '<i class="fa fa-angle-right fa-4x"></i>'
          ],
      autoplay:true,
      autoHeight:true,
      smartSpeed:3000, //Время движения слайда
              autoplayTimeout:5000,
              autoplayHoverPause:true,
              dots:true,
              dotsEach:true,
              lazyLoad:true,
      pagination:true,
      responsiveClass:true,
      animateIn: 'fadeIn',
              animateOut: 'fadeOut'


              
       
    });


    $('.owl-two').owlCarousel({

      items:6,
      loop:true,
      margin:20,
      nav:true,
      navText:[
            '<i class="fa fa-angle-left fa-4x"></i>',
            '<i class="fa fa-angle-right fa-4x"></i>'
          ],
      autoplay:true,
      smartSpeed:1000, //Время движения слайда
              autoplayTimeout:3000,
              autoplayHoverPause:true,
              dots:false,
              pagination:true,

              responsive:{
                  0:{
                      items:1,
                      nav:true,
                      loop:true
                  },
                  400:{
                      items:3,
                      nav:true,
                      loop:true
                  },
                  600:{
                      items:4,
                      nav:true,
                      loop:true
                  },
                  
                  1000:{
                      items:6,
                      nav:true,
                      loop:true
                  }
              }
          

    });

    $(document).on('click', '.burger', function(){
      $(this).toggleClass('is-active');
      $('.header__nav--wrap').toggleClass('is-active');
      $('.nav__item-respons').toggleClass('is-active');
      $('.header__respons').toggleClass('is-active');
  })
  });
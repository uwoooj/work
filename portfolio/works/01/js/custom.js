$(function(){



  

  $('.menu_btn').click(function(e){
    e.preventDefault();
    $('header .nav .menu').toggleClass('show');
   
  });
  



    var swiper = new Swiper(".slide01", {
      loop:true,
      // autoplay:true, //자동실행
      pauseOnHover:false, //마우스올렸을때 멈춤기능
      autoplaySpeed: 20000, //슬라이드간격(시간)
      speed:1500, //애니메이션 속도
      parallax: true,
       
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      })





      $(function(){
        
        $('.dep1').click(function(e){
            e.preventDefault();

            h=$(this).siblings('.sub').children('ul').outerHeight()
         
             $('.gnb .sub').stop().animate({height:0},500)
             $(this).siblings('.sub').stop().animate({height:h},500)
             $('.gnb .sub').stop().animate({height:0},500)



            if($(this).siblings('.sub').height() > 0){
                $('.item .sub').stop().animate({height:0},500)
            }else{
            $('.item .sub').stop().animate({height:0},500)
             $(this).siblings('.sub').stop().animate({height:h},500)
            }
        })






        
        

          $('.menu > li').hover(function(){
            //클래스로~!
            $(this).children('ul').stop().slideDown(); //메뉴보임 //slideDown디스플레이가 논이여야 사용가능
          },function(){ //마우스 뗐을때
            $(this).children('ul').stop().slideUp(); //메뉴사라짐
          
  
          })
  
         
  

    })



    $(window).scroll(function(){
      curr = $(window).scrollTop()

      if(curr > $('header').height() ){
          $('header').addClass('white')
      }else{
          $('header').removeClass('white')
          
      }
  })
    

  //마우스 올릴때 내릴때 이벤트


  
  $("body").on('mousewheel', function (e) {
    var wheel = e.originalEvent.wheelDelta;

    //스크롤값을 가져온다.
    if (wheel > 0) {
      //스크롤 올릴때
      $("header").addClass('show')
    } else {
      //스크롤 내릴때
      $("header").removeClass("show");
    }
  });


  

  
  
 


  
    




});
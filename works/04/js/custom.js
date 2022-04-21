$(function(){



  $('.gnb > li > a').click(function(e){
    e.preventDefault();

    // $('.gnb .sub').removeClass('on')
    // $(this).siblings().addClass('on');


    if( $(this).siblings().hasClass('on')    ){

      $('.gnb .sub').removeClass('on')

    }else{
      $('.gnb .sub').removeClass('on')
      $(this).siblings().addClass('on');

    }


  })


 


 $('.link_wrap > a').click(function(e){
    e.preventDefault();
    if($(this).siblings().hasClass('on')){
      $('.link_wrap > a').siblings().removeClass('on')
    }else{
      $('.link_wrap > a').siblings().removeClass('on')
      $(this).siblings().addClass('on')
    }

    // //닫히고 열리기~
    // $('.link_wrap > a').siblings().removeClass('on')
    // $(this).siblings().addClass('on')


    // if($(this).siblings().hasClass('on')){
    //   // 창이 열렸을때

    // }else{

    // }



  })




    var slide01 = new Swiper(".slide01", {
      loop:true,
      pagination: {
        el: ".information_list .swiper-pagination",
        type: "progressbar",
      },
      

      navigation: {
        nextEl: ".information_list .next",
        prevEl: ".information_list .prev",
      },
      });


      $('.curr').text(slide01.realIndex+1)
      $('.total').text(slide01.slides.length-2)

// 슬라이드 스와이퍼에 슬라이드 체인지 이벤트 실행하기(체인지 할때마다)//
      slide01.on('slideChange',function(){
        $('.curr').text(slide01.realIndex+1)

      })




      var swiper = new Swiper(".slide02", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        // 간격 //
        spaceBetween: 60,  
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: ".swiper-pagination",
        },


        pagination: {
          el: ".prod_list",
          clickable: true,
          renderBullet: function (index, className) { //인덱스(태그의 순서값) : 0부터 시작 총 0~4 근데 그걸 +1 1,2,3,4
            return '<li class="'+className+'"><img src="./images/so'+(index+1)+'.png"></li>';
          },
        },


        


        
      });


      $(function(){
        $('.top_scroll').on('click',function(e){
          e.preventDefault();
          $('html,body').animate({scrollTop:0},1000);
        });
      });



});
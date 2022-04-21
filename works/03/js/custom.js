$(function(){
  /*
    @
    @ 언어선택 사이트 이동!
    @
  */  


    $('#inp_citylang').click(function(){
        
        url = $('#citylang').val()
        window.open(url, "_blank");  


    })

   
 /*
    @
    @ 언어선택 사이트 이동!
    @
  */  


    // slide_01\
    var slide01 = new Swiper(".slide_01", {
        navigation: {
            nextEl: ".slide_01 .next",
            prevEl: ".slide_01 .prev",
          },

          pagination: {
            el: ".slide_01 .fraction",
            type: "fraction",
          },
          autoplay:{
            delay:1000,
          }


    });
    
    var slide02 = new Swiper(".slide_02", {
      // option
      loop:true,
      navigation: {
          nextEl: ".slide_02 .next",
          prevEl: ".slide_02 .prev",
        },

        pagination: {
          el: ".slide_02 .fraction",
          type: "fraction",
        },
        autoplay:{
          delay:1000,
        }


        
  });
   slide02.autoplay.stop();


   $('.slide_con h3').click(function(){

      $('.slide_con').removeClass('on') //초기화
      $(this).parents('.slide_con').addClass('on') //내가 선택한것

    if($(this).parents('.slide_con').hasClass('slide1')){
      //주요뉴스
      //1번누르면 2번은 막기
      slide02.autoplay.stop();
      

      if($(this).parents('.slide_con').find('.pause').hasClass('on')){
        slide01.autoplay.start();
      }else{ //정지인 상태
      slide01.autoplay.stop();
      }




    }else{ 
      //시민참여
      //2번누르면 1번은 막기
      slide01.autoplay.stop();

      if($(this).parents('.slide_con').find('.pause').hasClass('on')){
        slide02.autoplay.start();
      }else{
      slide02.autoplay.stop();
      }

    }

})




    $('.inner1 .btns').click(function(e){
      e.preventDefault();

      if($(this).find('.pause').hasClass('on')){ // 재생중일때
        $(this).find('.pause').removeClass('on');
        $(this).find('.play').addClass('on');

        if($(this).parents('.swiper').hasClass('slide_01')){
          slide01.autoplay.stop();
        }else{
          slide02.autoplay.stop();
        }



      }else{ //정지상태
        $(this).find('.pause').addClass('on');
        $(this).find('.play').removeClass('on');
     

        slide02.autoplay.start();

        if($(this).parents('.swiper').hasClass('slide_01')){
          slide01.autoplay.start();
        }else{
          slide02.autoplay.start();
        }


      }

    })


    $('.inner8 .btns').click(function(e){
    e.preventDefault();

    if($(this).find('.pause').hasClass('on')){ // 재생중일때
      $(this).find('.pause').removeClass('on');
      $(this).find('.play').addClass('on');

    banner.autoplay.stop();


    }else{ //정지상태
      $(this).find('.pause').addClass('on');
      $(this).find('.play').removeClass('on');
      banner.autoplay.start();
   
    }

  })




   

    // .banner_slide //

    var banner = new Swiper(".banner_slide", {
        slidesPerView: 3,   //갯수
        spaceBetween: 43,   //간격
        

        navigation: {
            nextEl: ".banner_slide .next",
            prevEl: ".banner_slide .prev",
          },

          pagination: {
            el: ".banner_slide .fraction",
            type: "fraction",
          },
          loop:true,
          autoplay:{
            delay:1000,
          }
      });


      $('.related-site button').click(function(){


        // $('.related-site button').removeClass('on')
        // $(this).addClass('on')


        // $('.related-site-list').stop().slideUp(); //전체 닫혀라
        // $(this).siblings('.related-site-list').stop().slideDown(); //내가 선택한것만 해당
     

        if( $(this).hasClass('on')){
            //있어요
            $('.related-site-list').stop().slideUp();
            $('.related-site button').removeClass('on')
        }else{
            //없어요 처음클릭
            $('.related-site button').removeClass('on')
            $(this).addClass('on')

            $('.related-site-list').stop().slideUp(); 
             $(this).siblings('.related-site-list').stop().slideDown();
        }





        
    })

    $(function(){
      $('.top_btn').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({scrollTop:0},1000);
      });
    });


    $(window).scroll(function(){
      var curr = $(this).scrollTop();

      if(curr > $(this).height()){
        $('.quick').fadeIn()
      }else{
        $('.quick').fadeOut()

      }
    })

    $(window).trigger('scroll')



    /*
    *  탭키로 접근하는 이벤트
    * 탭키 이벤트
    *
    * 탭키로 접근하는 이벤트를 주고싶었는데
    * keydown이라는 이벤트를 적용했습니다
    * last-child a 에서 tab 키를 눌렀을때
    * tab의 코드값이 9라는걸 알아냈습니다
    * tab을 했을때 닫혀야하는데 그게 shift tab을 했을때 뒤로 가야하기때문에
    * shift의 대한 조건이 추가가 되어야했습니다
    * e.shiftKey 이 코드가 shift를 눌렀는지 안눌렀는지 알수있기때문에
    * 이 조건으로 코드를 완성시켰습니다.
    * 
    * !e.shiftKey 안눌렀을때
    * e.shiftKey 눌렀을때를 의미합니다.
    * */



   $('.related-site-list li:last-child a').keydown(function (e) {
     var v_keyCode = event.keyCode || event.which;

     if (v_keyCode == 9) {
       if (!e.shiftKey) {
         $('.related-site-list').stop().slideUp();
         $('.related-site button').removeClass('on')
       }
     }
   })


   $('.related-site-list li:first-child a').keydown(function (e) {
     var v_keyCode = event.keyCode || event.which;

     if (v_keyCode == 9) {
       if (e.shiftKey) {
         $('.related-site-list').stop().slideUp();
         $('.related-site button').removeClass('on')
       }
     }
   })






});
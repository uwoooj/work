

$(function(){

  $('.link_contact').click(function (e) { 
    e.preventDefault();
    gsap.to(window, {duration: 2, scrollTo:".works"});
  });


  $('.arrow_btn').click(function (e) { 
    e.preventDefault();
    gsap.to(window, {duration: 2, scrollTo:".intro"});
  });

  $('.get_btn').click(function (e) { 
    e.preventDefault();
    gsap.to(window, {duration: 2, scrollTo:".works"});
  });
  



  $('body').mousemove(function(e){
    xVal = e.clientX; //보고있는 창기준좌표
    yVal = e.clientY; //보고있는 창기준좌표
    
    // console.log()
    gsap.to('.cursor',0.2,{
      x:xVal,
      y:yVal,
    stagger:0.02
  })
    
  })



  gsap.to('.main_vis .circle',{

    scrollTrigger:{
      trigger:".main_vis",  //시발점
      start:"top top",   //[시발점기준,윈도우기준ㄴ]
      // end:"bottom top",//[시발점기준,윈도우기준ㄴ]
      end:"+=3000",
      // markers:true,
      scrub:true,
      pin:true,
    },


    width:'130vw',
    height:'130vw',

  })

    header = gsap.timeline({});

    header.to('header .logo a',{color:'#fff'}) 
    .to('header .link_contact',{color:'#fff'}) 
    


    ScrollTrigger.create({
      animation:header,
      trigger:".intro",
      start:"top 100%",
      end:"bottom top",
      // markers:true,

      onLeaveBack:function(){
        header.reverse();
      }
    })



    gsap.to('.intro .circle',{

      scrollTrigger:{
        trigger:".intro",  //시발점
        start:"top 100%",   //[시발점기준,윈도우기준ㄴ]
        end:"bottom top",//[시발점기준,윈도우기준ㄴ]
        scrub:true,
  
      },
  
  
      // width:'130vw',
      // height:'130vw',

      yPercent:320,
      ease:'none',
  
    })
  









    // var swiper = new Swiper(".slide01", {
    //     direction: "vertical",
    //     slidesPerView: 1,
    //     spaceBetween: 30,
    //     mousewheel: true,
    //     pagination: {
    //       el: ".swiper-pagination",
    //       clickable: true,
    //     },
    //   })

    
        
     











})
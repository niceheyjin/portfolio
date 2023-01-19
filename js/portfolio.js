$(document).ready(function(){

  // $(window).scroll(function(){
  // let scrollTop  = $(window).scrollTop();
  // console.log(scrollTop);
  //
  // if(scrollTop>1000){
  //   $("header").addClass("on");
  // }else{
  //   $("header").removeClass("on");
  // }
  // });
  // ,#skillBG circle
  function setSvgViewBox(){
    let sBgHeight = $(".skillBG").height();
    let sBgWidth = $(".skillBG").width();
    $("#skillBG").attr("viewBox",`0 0 ${sBgWidth} ${sBgHeight}`)
  }
  setSvgViewBox();
  $(window).resize(function(){
    setSvgViewBox();
  })

  $("#skillBG path").each(function(){
    $(this).css("transition","all 0.1s ease 0s")
  })

  $("#skillBG circle").css("transform","translateY(13%)")
  $("#skillBG circle").css("transition","all 0.1s ease 0s")


    $(window).scroll(function(){
      let winScTop = $(window).scrollTop()
      let winHeight = window.innerHeight
      let bgTagTop = $(".skillCon").offset().top
      let bgTagHeight = $(".skillCon").height()

      $("#skillBG path").each(function(i){
        let pathTop = $(this).offset().top
        // if(winScTop+winHeight*0.5 > bgTagTop && winScTop+winHeight*0.5 < bgTagTop + bgTagHeight){
          if(winScTop+winHeight*0.5 > pathTop){
            $(this).css("transform","translateY("+((winScTop+winHeight*0.5-pathTop)*0.7)+"px)")
          }
        // }

      })

      $("#skillBG circle").each(function(i){
        let pathTop = $(this).offset().top
        // if(winScTop+winHeight*0.8 > bgTagTop && winScTop+winHeight*0.8 < bgTagTop + bgTagHeight){

          if(winScTop+winHeight*0.8 > pathTop){
            $(this).css("transform","translateY("+(((winScTop)+winHeight*0.8-pathTop)*0.5)+"px)")
          }
        // }

      })
    })

    $(window).scroll(function(){
      let windowHeight = $(window).height()*0.8;
      let scrollTop  = $(window).scrollTop();


      $(".a,.b,.story2").each(function(){
        if(scrollTop+windowHeight>$(this).offset().top){
          $(this).addClass("on");
        }else{
          $(this).removeClass("on");
        }
    });
  });


$(".btn_pro").click(function(){
  showProgress(".ko",94);
  showProgress(".en",93);
  showProgress(".math",96);
  showProgress(".comuni",98);
  showProgress(".web",94);
});
function showProgress(selector,inpurPercent){
  let num = 0;
  let percent = inpurPercent;
  let timer = setInterval(function(){
    if(num<percent){
      num++;
      $(selector).css("width",num+"%");
      $(selector+">span").text(num+"%")
    }else{
      clearInterval(timer);
    }
  },10)
};


$(".gototop").click(function(e){
  e.preventDefault(); //a태그의 기본 기능 제거
  $("html,body").animate({scrollTop:0},800);
});

  $(".navi>li").click(function(){
    $(".navi>li").removeClass("on1");
    $(this).addClass("on1");

    count = $(this).index();
    $(".train>li").removeClass("on");
    $(".train>li").eq(count).addClass("on");
  });


  $(".navi>li").click(function(){
    $(".navi>li").removeClass("on2");
    $(this).addClass("on2");

    count = $(this).index();
    $(".train1>li, ").removeClass("onn");
    $(".train1>li").eq(count).addClass("onn");
  });



$(".sliderTitle>li").click(function(){
  let idx = $(this).index();
  $(".train1").css("transform","translateX("+(-1000*idx)+"px)");
  count = idx*5;
});

let count = 0;
$(".trainWrap").on("mousewheel DOMMouseScroll",function(event){
  let E =event.originalEvent;
  let delta = 0;
  if(E.detail){
    delta = E.detail * -40;
  }else{
    delta = E.wheelDelta;
  }
  if(delta>0){
    //마우스 휠을 올렸을때
    count--;
    if(count<0){count=0;}
    $(".train1").css("transform","translateX("+(-360*count)+"px)");
    return false;
  }else{
    //마우스 휠을 내렸을 때
    count++;
    if(count>5){count=5;}
    $(".train1").css("transform","translateX("+(-360*count)+"px)");
    return false;
  }
});
//train안의 li 클릭헀을 때 활성화 스타일이 될 수 있도록
  $(".train1>li").click(function(){
    //클릭한 리스트가 활성화 된 스타일
    $(".train1>li").removeClass("on");
    $(this).addClass("on");


    //큰 이미지 보이는 기능
    let imgSrc = $(this).children("h2").attr("dataSrc");
    $(this).children(".bigPic").children("img").attr("src",imgSrc);

    //클릭할 때 마다 오른쪽으로 이동하게 하는 기능
    count = $(this).index();
      if(count>7){count=7;}
      $(".train1").css("transform","translateX("+(-360*count)+"px)");

    $(".hiddenInfo").addClass("on");
    $(".hiddenInfo>div").removeClass("on");
    $(".hiddenInfo>div").eq(count).addClass("on");

  });
  $(".btnEnd").click(function(){
    $(this).parent().removeClass("on");
    $(".train1>li").removeClass("on");
    $(".hiddenInfo").removeClass("on");
    return false;
  });


    $(document).mousemove(function(e){
      let posX = e.clientX;
      let posY = e.clientY;
      $(".cursor1").css("display","block");
      $(".cursor1").css("left",posX).css("top",posY);
    });

      $(".gnb>li").mouseover(function(){
        let idx = $(this).index();
        $(".cursor1").removeClass("on0")
        $(".cursor1").removeClass("on1")
        $(".cursor1").removeClass("on2")
        $(".cursor1").removeClass("on3")
        $(".cursor1").addClass("on"+idx);
      });

      $(".topMenu>li>a").click(function(e){
        e.preventDefault();
        let chref = $(this).attr("href")
        let targetTop = $(chref).offset().top-100;
        $("html,body").animate({scrollTop:targetTop},700);
      });


});

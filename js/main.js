/*global $*/

//ie判定
$(function(){
    var ua = navigator.userAgent; 
    if (ua.match("MSIE") || ua.match("Trident")) { 
      $(".ie").addClass("overlay");
    }
});

$(function(){
  $(window).scroll(function (){
    $(".effect").each(function(){
      var imgPos = $(this).offset().top;    
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/7){
        $(this).addClass("st2");
      } else {
        $(this).removeClass("st2");
      }
    });
  });
  $(window).scroll(function (){
    $(".effect2").each(function(){
      var imgPos = $(this).offset().top;    
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/7){
        $(this).addClass("fadeup");
      }
    });
  });
  $(window).scroll(function (){
    $(".effect3").each(function(){
      var imgPos = $(this).offset().top;    
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/7){
        $(this).addClass("st3");
      } else {
        $(this).removeClass("st3");
      }
    });
  });
  //メニュー移動
  $('a[href^="#"]').click(function() {
      // アンカーの値取得
      var href= $(this).attr("href");
      $("html,body").animate({scrollTop:$(href).offset().top+5}, 600);//5px下へ
      return false;
  });
  //現在位置のメニュー変わる
  var $win = $(window);
  $win.on('scroll' , function(){
  	$("#nav li a").each(function() {
  	     var linkTo =  $(this).attr('href'), //href=""取得,
  	         $target = $(linkTo),
  	         topLimit= $target.offset().top,
  	         bottomLimit = $target.offset().top + $target.outerHeight();
      	 if(topLimit <= $win.scrollTop() && $win.scrollTop() <= bottomLimit){
      	     $(this).addClass('now');
  	     }else{
  	         $(this).removeClass('now');
  	     }
      });
  });
});


$(function () {
  $('.popup-modal').magnificPopup({
    type: 'inline',
    preloader: false
  });
  //閉じるリンクの設定
  $(document).on('click', '.popup-modal-dismiss', function (e) { 
    e.preventDefault();
    $.magnificPopup.close();
  });
});
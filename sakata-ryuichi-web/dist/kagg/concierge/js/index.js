var pcFlg = true,tabletFlg = false,spFlg = false;
if( navigator.userAgent.indexOf('iPhone') != -1 || navigator.userAgent.indexOf('iPod') != -1 || navigator.userAgent.indexOf('iPad') != -1 || ( navigator.userAgent.indexOf('Android') != -1 ) ) {
  pcFlg = false;
  if( navigator.userAgent.indexOf('iPhone') != -1 || navigator.userAgent.indexOf('iPod') != -1 || ( navigator.userAgent.indexOf('Android') != -1 && navigator.userAgent.indexOf('Mobile') != -1 ) ) {
    spFlg = true;
  } else if(navigator.userAgent.indexOf('iPad') != -1 || ( navigator.userAgent.indexOf('Android') != -1 && navigator.userAgent.indexOf('Mobile') < 0 ) ) {
    tabletFlg = true;
  }
}

if(pcFlg || tabletFlg) {
  var windowHeight = $(window).height();
  $(".main_img").css("height",windowHeight+"px");
}

// スムーススクロール
$('a[href^="#"]').on("click", function() {
  var h = $(this).attr("href");
  var t = $(h == "#" || h == "" ? 'body' : h);
  var p = 0;
  if($(this).hasClass("anchor_link")) {
    if($(window).width() <= 767) {
      p = t.offset().top - 71;
    }else {
      p = t.offset().top;
    }
  }else {
    p = t.offset().top;
  }
  $('html,body').animate({
    scrollTop: p
  }, 500);
  return false;
});

$(function(){
  var pagetop = $('.pagetop');
  var timer;
  var delay = 300;
  $(window).on('scroll', function() {
    pagetop.fadeOut();
    clearTimeout(timer);
    if($(window).scrollTop() > 0) {
      timer = setTimeout(function(){
        pagetop.fadeIn();
      }, delay);
    }
  });
});

$(function(){
  $('.datepicker').datepicker({
    monthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
  });

  var radio = $('input:radio')

  radio.on('click', function(event) {
    var name = $(this).attr("name")
    $('input:radio[name='+ name +']').parent().removeClass('checked')

    if($(this).is(':checked')) {
      $(this).parent().addClass('checked')
    }else {
      $(this).parent().removeClass('checked')
    }
  });
})


$(function(){
  $('input#decidedss').keyup(function(){
      var c=$(this);
      if(/[^\d]/.test(c.val())){//替换非数字字符
        var temp_amount=c.val().replace(/[^\d]/g,'');
        $(this).val(temp_amount);
      }
   })


   $(window).scroll(function(){

         var scrollTop = $(this).scrollTop();
         var scrollHeight = $(document).height();
         var windowHeight = $(this).height();
         if(scrollTop + windowHeight == scrollHeight){
             arriveBottom();
        }else {
          leaveBottom();
        }
   });

   function arriveBottom(){
     if(!spFlg){
       $(".fix_button").addClass('bottom');
     }
   }

   function leaveBottom(){
     if(!spFlg){
       $(".fix_button").removeClass('bottom');
     }
   }
})

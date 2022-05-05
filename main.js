
$(function(){

  /*-------------------------------------------
  🍔メニュークリック時の処理
  -------------------------------------------*/
  $('.hamburger-btn').on('click', function() {
    if( $('#header').hasClass('open') ) {
      $('#header').removeClass('open');
    } else {
      $('#header').addClass('open');
    }
  });

  /*-------------------------------------------
  🍔メニューを押下後、クリックエリアでの閉じる処理
  -------------------------------------------*/
  $('#hamburger-btn-area').on('click', function() {
    $('#header').removeClass('open');
  }) ;

  // リンクをクリックした時にメニューを閉じる
  $('#hamburger-btn-area a').on('click', function() {
    $('#header').removeClass('open');
  });



  /*-------------------------------------------
　　スライダー処理
  -------------------------------------------*/
  // swiperオブジェクト呼び出し
  var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: true,
    // disableOnInteract  ion: true,
    autoplaySpeed: 2000,
    speed: 1000,
    fade: true,
    // transform:unset!important,
    // cssEase: 'linear',
  });


  /*-------------------------------------------
　　メニュー固定設定
  -------------------------------------------*/
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('fixed');
    } else {
      $('#header').removeClass('fixed');
    }
  });

});

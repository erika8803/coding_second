
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
    autoplaySpeed: 2000,
    speed: 1000,
    fade: true,
  });


  /*-------------------------------------------
　　メニュー固定設定
  -------------------------------------------*/
const observer = new IntersectionObserver((entries) => {
  // entriesは監視対象すべてが入っているリスト  
  for(const e of entries) {
     // isIntersecting プロパティは交差しているかどうかの真偽値
     // viewport に交差し、入ったときに isIntersecting === true、出たときに false になる
     if(e.isIntersecting) {
       document.getElementById('header').style.position = 'absolute';
     } else {
       document.getElementById('header').style.position = 'fixed';
     }
    }
 });

 // observe メソッドに監視対象要素を引数として渡すことで監視されるようになります
 observer.observe(document.getElementById('page-header'))
  
});

$(function () {
  $(window).scroll(function () {
    let trigger = $('.nav-trigger').offset().top;
    let scroll = $(window).scrollTop();
    if (scroll >= trigger) {
      $('nav').css('background-color', '#282F35');
    } else {
      $('nav').css('background-color', 'transparent');
    }
  });

  //トップビジュアルを変える
  setInterval(top_switcher, 4000);

  //メニューボタン
  $('.menu-trigger').click(function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $('#nav-menu').fadeOut();
    } else {
      $(this).addClass('active');
      $('#nav-menu').css('display', 'flex');
    }
  });
  $('.nav-menu-item').click(function () {
    $('.menu-trigger').removeClass('active');
    $('#nav-menu').fadeOut();
  });

});

//トップビジュアルを変える関数
let top_switcher = function () {
  switch (true) {
    case $('.top1').hasClass('active'):
      $('.top1').removeClass('active');
      $('.top2').addClass('active');
      break;
    case $('.top2').hasClass('active'):
      $('.top2').removeClass('active');
      $('.top3').addClass('active');
      break;
    case $('.top3').hasClass('active'):
      $('.top3').removeClass('active');
      $('.top1').addClass('active');
      break;
  }
}
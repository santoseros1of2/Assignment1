$(window).scroll(function(){
    $('.head').toggleClass('navbarHeader', $(this).scrollTop() > 50);
  });
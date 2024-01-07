var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });
$(document).ready(function(){
  $('.navigation-burger').click(function(event){
    $('.navigation-burger,.navigation').toggleClass('active');
  });
});
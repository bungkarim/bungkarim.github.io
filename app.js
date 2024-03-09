var swiper = new Swiper(".swiper", {
  effect: "cards",
  grabCursor: true,
  initialSlide: 2,
  loop: true,
  rotate: true,
  mousewheel: {
    invert: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

new Swiper ('.foto__slider', {
  // Optional parameters
  slidesPerView: 1,
  loop: true,

  // If we need pagination
  pagination: {
  el: '.swiper-pagination',
  clickable: true,
  },

  // Navigation arrows
  navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
  el: '.swiper-scrollbar',
  },

  spaceBetween: 10,
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
});





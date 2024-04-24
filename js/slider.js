const swiperNews = new Swiper('.news__item-swiper ', {
    speed: 600,
    slidesPerView: 2.5,
    spaceBetween: 40,
    grabCursor: true,
    breakpoints: {
      // // when window width is >= 320px
      // 320: {
      //     slidesPerView: 1,
      //     spaceBetween: 0,
      //     slideToClickedSlide: true,
      // },
      // // when window width is >= 480px
      // 480: {
      //     slidesPerView: 1,
      //     spaceBetween: 0,
      //     slideToClickedSlide: true,
      // },
      // // when window width is >= 640px
      0: {
          slidesPerView: 1,
          spaceBetween: 20,
          slideToClickedSlide: true,
      },
      600: {
          slidesPerView: 2.5,
          spaceBetween: 40,
      }
  }
  });

const swiperGallery = new Swiper('.gallery__content  ', {
    speed: 600,
    slidesPerView: 1,
    spaceBetween: 20,
    grabCursor: true,
    effect: "cards",
    navigation: {
      nextEl: ".gallery__arrow arrow-next",
      prevEl: ".gallery__arrow arrow-prev",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
});
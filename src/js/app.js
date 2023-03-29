import * as flsFunction from "./modules/functions.js";
import "./modules/swiper.js";
import "./modules/script.js";
import "./modules/dynamic_adapt.js";

// import "./modules/nouislider.js";

//---[SWIPER Sertifications]--------------------------------------------------------------//
//Инициализация Swiper
if (document.querySelector(".certifications__slider")) {
  new Swiper(".certifications__slider", {
    navigation: {
      nextEl: ".certifications__arrow-next",
      prevEl: ".certifications__arrow-prev",
    },
    observer: true,
    observerParents: true,
    slidesPerView: 3,
    spaceBetween: 75,
    watchOverflow: true,
    speed: 800,
    loop: true,
    initialSlide: 1,
    autoHeight: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    // autoplay: {
    //   enabled: true,
    //   delay: 3000,
    //   waitForTransition: true,
    //   disableOnInteraction: false,
    //   stopOnLastSlide: false,
    //   reverseDirection: false,
    //   pauseOnMouseEnter: true,
    // },
    // loopAdditionalSlides: 5,
    // preloadImages: false,
    // parallax: true,
    pagination: {
      el: ".certifications__dots",
      clickable: true,
      type: "bullets",
    },
    on: {},
  });
}
//---[SWIPER Power-Oils]--------------------------------------------------------------//
//Инициализация Swiper
if (document.querySelector(".power-oils__slider")) {
  new Swiper(".power-oils__slider", {
    navigation: {
      nextEl: ".power-oils__next",
      prevEl: ".power-oils__prev",
    },
    observer: true,
    observerParents: true,
    slidesPerView: "auto",
    spaceBetween: 30,
    watchOverflow: true,
    speed: 800,
    loop: true,
    initialSlide: 0,
    centeredSlides: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
        centeredSlides: false,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    pagination: {
      el: ".power-oils__dots",
      clickable: true,
      type: "bullets",
    },
    on: {},
  });
}

//---[SWIPER Testing-Formula]--------------------------------------------------------------//
//Инициализация Swiper
if (document.querySelector(".testing-formula__slider")) {
  new Swiper(".testing-formula__slider", {
    navigation: {
      nextEl: ".power-oils__next",
      prevEl: ".power-oils__prev",
    },
    observer: true,
    observerParents: true,
    slidesPerView: 2,
    spaceBetween: 50,
    speed: 800,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
        scrollbar: {
          hide: true,
        },
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 25,
        scrollbar: {
          hide: true,
        },
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 30,
        scrollbar: {
          hide: true,
        },
      },
      1400: {},
    },
    direction: "vertical",
    pagination: {
      el: ".testing-formula__dots",
      clickable: true,
      type: "bullets",
    },
    scrollbar: {
      el: ".testing-formula__scrollbar",
      //Возможность перетаскивать скролл
      draggable: true,
    },
    // mousewheel: {
    //   enabled: true,
    //   sensitivity: 1,
    //   eventsTarget: "container",
    // },
    freeMode: {
      enabled: true,
    },
    on: {},
  });
}

// flsFunction.isWebp();
// flsFunction.menuInit();
// flsFunction.spollers();
// flsFunction.tabs();
// flsFunction.formRating();
// flsFunction.rangeInit();
// flsFunction.formQuantity();

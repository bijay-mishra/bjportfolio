import SwiperCore from "swiper";
import {
  Autoplay,
  EffectFade,
  Grid,
  Navigation,
  Pagination,
  Parallax,
} from "swiper/modules";

SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay, Grid, Parallax]);

export interface SliderProps {
  testimonials: {
    slidesPerView: number;
    spaceBetween: number;
    parallax: boolean;
    autoplay: boolean;
    speed: number;
    navigation: {
      nextEl: string;
      prevEl: string;
    };
  };
  homeSlider: {
    slidesPerView: number;
    effect: string;
    parallax: boolean;
    autoplay: boolean;
    speed: number;
  };
}

export const sliderProps: SliderProps = {
  testimonials: {
    slidesPerView: 1,
    spaceBetween: 40,
    parallax: true,
    autoplay: false,
    speed: 1400,
    navigation: {
      nextEl: ".trm-testimonials-slider-next",
      prevEl: ".trm-testimonials-slider-prev",
    },
  },
  homeSlider: {
    slidesPerView: 1,
    effect: "fade",
    parallax: true,
    autoplay: true,
    speed: 1400,
  },
};

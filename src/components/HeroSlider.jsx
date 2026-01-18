import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../Styles/HeroSlider.css";
import Slide1 from "../assets/Slider 1.jpg";
import Slide2 from "../assets/Slider 2.jpg";
import Slide3 from "../assets/Slider 3.jpg";

const HeroSlider = () => {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      autoplay={{ delay: 3500, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      loop={true}
      className="hero-swiper"
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <div
          className="hero-slide"
          style={{ backgroundImage: `url(${Slide1})`, objectFit:"contain" }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1>Ride Safe. Ride Bold.</h1>
            <p>Premium helmets for every journey.</p>
            <button>Shop Now</button>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          className="hero-slide"
          style={{ backgroundImage: `url(${Slide2})`, objectFit:"contain" }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1>Built for Speed</h1>
            <p>Aerodynamic & lightweight designs.</p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          className="hero-slide"
          style={{ backgroundImage: `url(${Slide3})`, objectFit:"Contain" }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1>Built for Speed</h1>
            <p>Aerodynamic & lightweight designs.</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;

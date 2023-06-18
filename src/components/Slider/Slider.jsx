import React, { useState } from "react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
SwiperCore.use([Autoplay]);

function Slider() {
  const [slide, setSlide] = useState([
    { id: 1, img: "./assets/images/slider/slider-1.jpg" },
    { id: 2, img: "./assets/images/slider/slider-2.jpg" },
    { id: 3, img: "./assets/images/slider/slider-3.jpg" },
  ]);

  return (
    <section className="slider">
      <div className="container mt-10">
        <Swiper
          className="rounded-[20px] w-full"
          modules={[Pagination]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
          grabCursor={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
        >
          {slide.map((slider) => (
            <SwiperSlide key={slider.id} className="overflow-hidden">
              <img
                className="w-full object-cover h-[170px] sm:h-full"
                src={slider.img}
                alt="slider image"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Slider;

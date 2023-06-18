import React from "react";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

SwiperCore.use([Autoplay]);

function SwiperTemplate({ products, ProductItem, onAddProduct, swiperClass }) {
  return (
    <Swiper
      className="overflow-hidden"
      dir="ltr"
      spaceBetween={20}
      slidesPerView="auto"
      freeMode={false}
      loop={true}
      grabCursor={true}
      slidesPerGroup={1}
      loopedSlides={products.length}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        reverseDirection: true,
      }}
      breakpoints={{
        1250: {
          slidesPerView: 4,
        },
        992: {
          slidesPerView: 3,
        },
        576: {
          slidesPerView: 2,
        },
        500: {
          slidesPerView: 1.6,
        },
      }}
      threshold={10}
      touchRatio={0.5}
    >
      {products.map((product) => (
        <SwiperSlide
          className={swiperClass ? swiperClass : ""}
          key={product.id}
        >
          <ProductItem onAddProduct={onAddProduct} {...product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SwiperTemplate;

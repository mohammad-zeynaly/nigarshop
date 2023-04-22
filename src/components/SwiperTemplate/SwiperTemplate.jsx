import React from "react";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
SwiperCore.use([Autoplay]);


function SwiperTemplate({ products, ProductItem, onAddProduct,swiperClass }) {

  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      loop={true}
      grabCursor={true}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
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
    >
      {products.map((product) => (
        <SwiperSlide className={swiperClass ? swiperClass : ""} key={product.id}>
          <ProductItem onAddProduct={onAddProduct} {...product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );

}

export default SwiperTemplate;

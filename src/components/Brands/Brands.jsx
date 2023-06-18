import { useState, useEffect, useContext } from "react";
import { shopContext } from "../../contexts/shopContext";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
SwiperCore.use([Autoplay]);

function Brands() {
  const { productData } = useContext(shopContext);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    if (productData) {
      const filterBrands = productData.filter(
        (discount) => discount.categories === "brands"
      );
      setBrands(filterBrands);
    }
  }, [productData]);

  return (
    <section className="brands bg-white mt-10">
      <div className="container">
        <div className="">
          <Swiper
            spaceBetween={40}
            slidesPerView={2}
            loop={true}
            grabCursor={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              1250: {
                slidesPerView: 6,
              },

              992: {
                slidesPerView: 5,
              },
              576: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
              500: {
                slidesPerView: 3,
              },
            }}
          >
            {brands.map((brand) => (
              <SwiperSlide className="my-2  flex justify-center" key={brand.id}>
                <div className="w-28">
                  <img
                    className="w-full object-cover"
                    src={brand.img}
                    alt="brands image"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Brands;

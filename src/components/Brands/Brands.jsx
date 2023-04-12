import React,{useState,useEffect} from "react"
import useFetch from "../../hooks/useFetch";

import SwiperCore,{Autoplay} from "swiper";
import {Swiper,SwiperSlide} from "swiper/react";
import "swiper/css"
SwiperCore.use([Autoplay])

function Brands () {

    const [brands,setBrands] = useState([])
    const [allProduct] = useFetch("https://nigarshop-46e01-default-rtdb.firebaseio.com/allProduct.json")

    const filterBrands = allProduct.filter(discount=> (
        discount.categories === "brands"
    ))

    useEffect( () => {
        setBrands(filterBrands)
    },[allProduct])


    return(
        <section className="brands bg-white mt-10">
            <div className="container">
                <div className="">
                    <Swiper spaceBetween={40} slidesPerView={2} loop={true}
                         grabCursor={true} autoplay={{delay:3000,disableOnInteraction:false}} 
                         breakpoints={{
                            1250:{
                                slidesPerView: 6
                            },

                            992:{
                                slidesPerView: 5
                            },
                            576:{
                                slidesPerView: 4,
                                spaceBetween: 50
                            },
                            500:{
                                slidesPerView: 3  
                            }
                         }}
                         >

                        {brands.map(brand => (
                            <SwiperSlide className="my-2  flex justify-center" key={brand.id}>
                                <div className="w-28">
                                <img className="w-full object-cover" src={brand.img} alt="brands image"/>
                                </div>
                            </SwiperSlide>
                        ))}
                            
            </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Brands;
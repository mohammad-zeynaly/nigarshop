import React,{useState,useEffect} from "react";
import useFetch from "../../Hooks/useFetch";
import DiscountItem from "./DiscountItem";

import SwiperCore,{Autoplay} from "swiper";
import {Swiper,SwiperSlide} from "swiper/react";
import "swiper/css"
SwiperCore.use([Autoplay])


function Discount () {

    const [discountProduct,setDiscountProduct] = useState([])
    const [allProduct] = useFetch("https://nigarshop-46e01-default-rtdb.firebaseio.com/allProduct.json")


    const filterDiscountProduct = allProduct.filter(discount=> (
        discount.categories === "discountProduct"
    ))


    useEffect( () => {
        setDiscountProduct(filterDiscountProduct)
    },[allProduct])

    
    return(
        <>
        <section className="discount mt-10 bg-[#F22C4F]">
            <div className="container">
                <div className="py-3">
                    <h2 className="text-white text-center text-3xl my-5 font-iranSansBold"> زنگ تخفیفه! </h2>
                        <Swiper spaceBetween={20} slidesPerView={1.2} loop={true}
                         grabCursor={true} autoplay={{delay:5000,disableOnInteraction:false}} 
                         breakpoints={{
                            1250:{
                                slidesPerView: 4
                            },

                            992:{
                                slidesPerView: 3
                            },
                            576:{
                                slidesPerView: 2
                            },
                            500:{
                                slidesPerView: 1.6  
                            }
                         }}
                         >

                            {discountProduct.map(product => (
                                <SwiperSlide key={product.id} className="bg-white flex flex-col rounded-[20px] py-2 h-auto">
                                    <DiscountItem  {...product} />
                                </SwiperSlide>
                            ))}

                        </Swiper>
                </div>
            </div>
        </section>
        </>
    )
}

export default Discount;
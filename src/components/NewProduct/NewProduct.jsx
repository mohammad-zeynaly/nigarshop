import React,{useState,useEffect} from "react"
import Products from "../Products/Products"
import ProductItem from "../ProductItem/ProductItem";


import SwiperCore,{Autoplay} from "swiper";
import {Swiper,SwiperSlide} from "swiper/react";
import "swiper/css"
SwiperCore.use([Autoplay])


function NewProduct () {

    const [productsTemplate,setProductsTemplate] = useState([
        {id:1,name:'جدیدترین محصولات',link:'/'}
    ]);
    const [newProducts,setNewProducts] = useState([])

    // Request Get To Firebase 
    const fetchGetRequest = async () => {
    await fetch("https://nigarshop-46e01-default-rtdb.firebaseio.com/discountProduct.json")
    .then(response => response.json())
    .then((data) => {
            let newProduct = Object.entries(data)
            setNewProducts(newProduct[0][1])
        })
     }


    useEffect(() => {
        fetchGetRequest()
    },[])


    return(
        <Products {...productsTemplate[0]}>
            
            <Swiper spaceBetween={20} slidesPerView={1} loop={true}
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

                        {newProducts.map(product => (
                            <SwiperSlide key={product.id}>
                                <ProductItem {...product}/>
                            </SwiperSlide>
                        ))}
                            
            </Swiper>
        </Products>
    )
}


export default NewProduct;
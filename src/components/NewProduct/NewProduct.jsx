import React,{useState,useEffect} from "react"
import useFetch from "../../hooks/useFetch";
import Products from "../Products/Products"
import ProductItem from "../ProductItem/ProductItem";
import SwiperCore,{Autoplay} from "swiper";
import {Swiper,SwiperSlide} from "swiper/react";
import "swiper/css"
SwiperCore.use([Autoplay])



function NewProduct () {

    const [productsTemplate,setProductsTemplate] = useState([
        {id:1,name:'جدیدترین محصولات',link:'/'}
    ])

    const [newProducts,setNewProducts] = useState([])
    const [allProduct] = useFetch("https://nigarshop-46e01-default-rtdb.firebaseio.com/allProduct.json")
    const [cartProduct,setCartProduct] = useState([])


    // Filtering Product
    const filterNewProduct = allProduct.filter(discount=> (
        discount.categories === "discountProduct"
    ))


    const addProductToCart = (productId) => {

        const mainProduct = newProducts.find( product => (
            product.id === productId
        ))

        setCartProduct(prev => {
            return [...prev,mainProduct]
        })
        
        //  برای این که هر محصول کلیک شد با context ذخیره شود بعد یاد گیری میااییم و هر محصول را بعد کلیک در کانتکست ذخریه میکنیم
    }
    

    useEffect(() => {

        setNewProducts(filterNewProduct)

    },[allProduct,cartProduct])



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
                                <ProductItem onAddProduct={addProductToCart} {...product}/>
                            </SwiperSlide>
                        ))}
                            
            </Swiper>
        </Products>
    )
}


export default NewProduct;
import React from "react"
import Slider from "../../components/Slider/Slider";
import Introduction from "../../components/Introduction/Introduction";
import Discount from "../../components/Discount/Discount";
import NewProduct from "../../components/NewProduct/NewProduct"
import Ads from "../../components/Ads/Ads";
import CosmeticsProduct from "../../components/CosmeticsProduct/CosmeticsProduct";
import ClothesProduct from "../../components/ClothesProduct/ClothesProduct";
import Brands from "../../components/Brands/Brands"


function Home () {

    
    return(
        <>
        <main className="main">
        <Slider/>
        <Introduction/>
        <Discount/>
        <NewProduct/>
        <Ads/>
        <CosmeticsProduct/>
        <ClothesProduct/>
        <Brands></Brands>
        </main>
        </>
    )
}

export default Home;
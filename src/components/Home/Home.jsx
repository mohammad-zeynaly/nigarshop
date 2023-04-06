import React from "react"
import Header from "../Header/Header";
import Slider from "../Slider/Slider";
import Introduction from "../Introduction/Introduction";
import Discount from "../Discount/Discount";
import NewProduct from "../NewProduct/NewProduct"
import Ads from "../Ads/Ads";
import CosmeticsProduct from "../CosmeticsProduct/CosmeticsProduct";
import ClothesProduct from "../ClothesProduct/ClothesProduct";
import Brands from "../Brands/Brands"
import Footer from "../Footer/Footer";


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
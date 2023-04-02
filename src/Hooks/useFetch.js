import React,{useState,useEffect} from "react"

    

function useFetch () {

    const [allProduct,setAllProduct] = useState([])

    const fetchGetRequest= async () => {
        await fetch("https://nigarshop-46e01-default-rtdb.firebaseio.com/allProduct.json")
        .then(response => response.json())
        .then((data)  => {

            let allProducts = Object.entries(data)
        
            setAllProduct(Object.entries(data)[0][1])
        
            console.log('Request Get ', allProducts)
        })
    }

    useEffect(() => {
        fetchGetRequest()
    },[])

    useEffect(() => {
        console.log('state allProduct',allProduct)

    },[allProduct])

    console.log("return[allProduct]");
    return[allProduct]
}
    

export default useFetch;



/*

     // Filtering AllProducts
     discountProduct = allProduct.filter(discount=> (
        discount.categories === "discountProduct"
    ))
    
     adsItems = allProduct.filter(ads=> (
        ads.categories === "adsItems"
    ))
    
     cosmeticsProduct = allProduct.filter(cosmetics=> (
        cosmetics.categories === "cosmeticsProduct"
    ))
    
     clothesProduct = allProduct.filter(clothes=> (
        clothes.categories === "clothesProduct"
    ))
    
     brands = allProduct.filter(brand=> (
        brand.categories === "brands"
    ))


*/
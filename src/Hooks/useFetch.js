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

    return[allProduct]
}
    

export default useFetch;
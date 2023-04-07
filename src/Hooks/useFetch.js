import React,{useState,useEffect} from "react"

    

function useFetch (props) {

    const [allProduct,setAllProduct] = useState([])

    const fetchGetRequest= async () => {
        
        await fetch(props)
        .then(response => response.json())
        .then((data)  => {

            let allProducts = Object.entries(data)
        
            setAllProduct(Object.entries(data)[0][1])
        
            console.log('Request Get ', allProducts)
        })
        .catch(error => {
            console.warn("Failed In Request => ", error)
        })
    }

    useEffect(() => {
        fetchGetRequest()
    },[])

    return[allProduct]
}
    

export default useFetch;
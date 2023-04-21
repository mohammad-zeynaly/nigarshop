import React,{useState,useEffect} from "react"

function useFetch (url) {
    const [allProduct,setAllProduct] = useState([])
    const [isPending,setIsPending] = useState(true)
    const [error, setError] = useState("");

  
  
    useEffect(() => {
  
       fetch(url)
      .then(response => response.json())
  
      .then(data => {

        setAllProduct(Object.entries(data)[0][1])
        setIsPending(false)
        setError(null) 
        
      })

      .catch(err => setError(`Error fetching data: ${err.message}`));
      
    },[])

    return[allProduct,isPending,error];
}

export default useFetch;




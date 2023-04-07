import React,{useState,useEffect} from "react"
import useFetch from "../../Hooks/useFetch";

import AdsItem from "./AdsItem";


function Ads () {

    const [adsItems,setAdsItems] = useState([])
    const [allProduct] = useFetch("https://nigarshop-46e01-default-rtdb.firebaseio.com/allProduct.json")

    const filterAds = allProduct.filter(discount=> (
        discount.categories === "adsItems"
    ))

    useEffect( () => {
        setAdsItems(filterAds)
    },[allProduct])

    return( 
        <section className="ads mt-10">
            <div className="container">
                <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {adsItems.map(item => (
                        <AdsItem key={item.id} {...item}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Ads;
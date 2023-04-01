import React,{useState,useEffect} from "react"
import AdsItem from "./AdsItem";


function Ads () {

    const [adsItems,setAdsItems] = useState([])

    const fetchGetRequest  = async () => {
        await fetch("https://nigarshop-46e01-default-rtdb.firebaseio.com/adsItem.json")
            .then(response => response.json())
            .then(data => {
                let adsItem = Object.entries(data)
                setAdsItems(adsItem[0][1])
                // console.log(adsItem[0][1]);
            })
    }


    useEffect(() => {
        fetchGetRequest()
    },[])

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
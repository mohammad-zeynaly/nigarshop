import React,{useState} from "react";
import IntroductionItem from "./IntroductionItem";


function Introduction () {

    const [introductionItems,setIntroductionItems] = useState([
        {id:1,img:'./assets/images/Introduction/Introduction-1.jpg',title:'کالای دیجیتال',count:26},
        {id:2,img:'./assets/images/Introduction/Introduction-2.jpg',title:'اسباب بازی',count:4},
        {id:3,img:'./assets/images/Introduction/Introduction-3.jpg',title:'سویشرت و هودی',count:5},
        {id:4,img:'./assets/images/Introduction/Introduction-4.jpg',title:'کفش ورزشی',count:9},
        {id:5,img:'./assets/images/Introduction/Introduction-5.jpg',title:'لپ تاپ',count:3},
        {id:6,img:'./assets/images/Introduction/Introduction-6.jpg',title:'لوازم آرایشی',count:4},
    ])

    return(
        <>
        <section className="introduction mt-10 sm:mt-8">
            <div className="container">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">

                {introductionItems.map(item => (
                    <IntroductionItem key={item.id} {...item} />
                ))}
                
                </div>
            </div>
        </section>
        </>
    )
}

export default Introduction;
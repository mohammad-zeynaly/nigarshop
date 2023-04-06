import React,{useState,useEffect} from "react"
import ProductItem from "../ProductItem/ProductItem";
import { useParams } from "react-router";
import useFetch from "../../Hooks/useFetch";


function ProductCategory () {

    const params = useParams()
    const [allProducts] = useFetch()
    const [activeMenuItem,setActiveMenuItem] = useState(0)

    const [menus,setMenus] = useState([
        {id:1,name:'جدیدترین',type:"item1"},
        {id:2,name:'محبوب‌ترین',type:"item2"},
        {id:3,name:'رتبه بندی',type:"item3"},
        {id:4,name:'ارزان‌ترین',type:"item4"},
        {id:5,name:'گران‌ترین',type:"item5"},
    ])
    const [categoryProduct,setCategoryProduct] = useState([])

    // Filtering Products
   const mainProducts = allProducts.filter(product => (
        product.categories === params.productType
    ))

    useEffect(() =>{
        setCategoryProduct(mainProducts)
    },[allProducts,params])

    const menuIemHandler = (item) => {
        setActiveMenuItem(item)

    }

    return(
        <section className="product-category my-12">
            <div className="container">
                <div className="bg-white p-5 rounded-[20px] my-8">
                    <h4 className="text-[#666]">دسته بندی کالا</h4>
                    <h5 className="text-[15px] text-[#999] mt-2 sm:hidden">مرتب سازی بر اساس :</h5>
                    <ul className="whitespace-nowrap overflow-auto sm:overflow-visible py-3 sm:py-0 flex flex-col md:items-center md:flex-row text-sm mt-2 md:mt-4">
                        <h5 className="text-[15px] text-[#999] hidden sm:block">مرتب سازی بر اساس :</h5>
                        <div className="mt-5 md:mr-12 md:mt-0 flex items-center text-[#777] product-category">
                        {menus.map((item,index) => (                            
                            <li onClick={() => menuIemHandler(item.type)} className={`ml-5 sm:ml-6 ${activeMenuItem === item.type ? 'active' : ''}${activeMenuItem === index ? 'active' : ''}`}><button>{item.name}</button></li>
                        ))}
                        </div>
                    </ul>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 py-12">
                    {categoryProduct.map(product => (
                        <ProductItem {...product}></ProductItem>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProductCategory;
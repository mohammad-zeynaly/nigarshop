import React,{useState,useEffect} from "react"
import useFetch from "../../hooks/useFetch"
import App from "../../App"
import { Link,NavLink } from "react-router-dom"
import {AiFillHeart,AiOutlineMenu,AiOutlineClose} from "react-icons/ai"
import {MdOutlineShoppingBag} from "react-icons/md"


function Navbar () {

    const [statusMenu,setStatusMenu] = useState(false)    
    const cartData = JSON.parse(localStorage.getItem("cartProduct"))
    const [allProductCart,setAllProductCart] = useState([])


    const [menuItems,setMenuItems] = useState([
        {id:1, title:'صفحه اصلی', href:'/'},
        {id:2, title:'کالای دیجیتال', href:'productCategory/discountProduct'},
        {id:3, title:' کودک و نوزاد', href:'productCategory/toyProduct'},
        {id:4, title:'مد و پوشاک', href:'productCategory/clothesProduct'},
        {id:5, title:'لوازم ورزشی', href:'productCategory/sportProduct'},
        {id:6, title:'ابزار و اداری', href:'productCategory/laptopProduct'},
        {id:7, title:'لوازم آرایشی', href:'productCategory/cosmeticsProduct'},
    ])
    
    useEffect(() => {
        setAllProductCart(cartData)
    },[])

    return(
        <>
        <nav className="mt-6">
            <div className="container">
                <div className="flex flex-row-reverse lg:flex-row justify-between items-center">
                    <span className="lg:hidden cursor-pointer" onClick={prev => !prev}>
                        {statusMenu ? (
                        
                            <AiOutlineClose className="w-[1.3rem] h-[1.3rem]"/>
                        )
                        :(
                        
                           <AiOutlineMenu className="w-[1.3rem] h-[1.3rem]"/>
                            
                        )}
                    </span>
                <ul className="hidden lg:flex items-center bg-white p-4 rounded-[20px] text-sm w-[46rem] xl:w-[60rem] 2xl:w-[70rem]">
                    
                    {menuItems.map(item => (
                        <li key={item.id} className="mr-5 menu__item"><NavLink to={`${item.href}`} className="text-[#666] hover:text-primary">{item.title}</NavLink></li>
                    ))}

                </ul>
            
                <ul className={`flex flex-col lg:hidden bg-white fixed top-0 z-50 ${statusMenu ? 'right-0' : 'right-[-260px]'} w-[260px] bottom-0 py-5 transition-all duration-200`}>
                    <li className="mb-2 px-5 group hover:bg-[#f5f5f5] py-2"><a className="text-[#666]  group-hover:text-[#202124]" href="#">نحوه ثبت سفارش</a></li>
                    <li className="mb-2 px-5 group hover:bg-[#f5f5f5] py-2"><a className="text-[#666]  group-hover:text-[#202124]" href="#">رویه ارسال سفارش</a></li>
                    <li className="mb-2 px-5 group hover:bg-[#f5f5f5] py-2"><a className="text-[#666]  group-hover:text-[#202124]" href="#">شیوه‌های پرداخت</a></li>
                </ul>

                <div className="hidden lg:flex items-center">

                <div className="ml-4">
                    <button className="bg-[#999999] p-4 rounded-[20px] text-white">
                        <AiFillHeart className="w-[1.3rem] h-[1.3rem] "/>
                    </button>
                </div>

                <div className="">
                    <Link to="/shoppingCart" className="bg-[#60BD10] text-white flex items-center justify-center rounded-[20px] p-4">
                    <MdOutlineShoppingBag className="w-[1.3rem] h-[1.3rem]"/>
                    <span className="text-sm mx-3 font-iranSansDemiBold">سبد خرید</span>
                    {allProductCart !== null ? (
                    <span className="text-xs bg-white text-[#60BD10] rounded-full py-[3px] px-2">{allProductCart.length}</span>
                    ):(
                    <span className="text-xs bg-white text-[#60BD10] rounded-full py-[3px] px-2">0</span>
                    )
                    }
                    </Link>
                </div>

                </div>

                <Link to="/" className="w-32 lg:hidden">
                        <img className="w-full object-cover " src="./assets/images/negarshop-logo.png" />
                </Link>

                </div>
            </div>
        </nav>
        </>
        
        )
}

export default Navbar;




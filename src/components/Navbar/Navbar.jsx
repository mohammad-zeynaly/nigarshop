import React,{useState,useEffect} from "react"
import App from "../../App"
import { Link } from "react-router-dom"
import {AiFillHeart,AiOutlineMenu,AiOutlineClose} from "react-icons/ai"
import {MdOutlineShoppingBag} from "react-icons/md"


function Navbar () {

    const [statusMenu,setStatusMenu] = useState(false)
    
    const statusMenuHandler = () => {
        setStatusMenu(prev => !prev)
    }

    return(
        <>
        <nav className="mt-6">
            <div className="container">
                <div className="flex flex-row-reverse lg:flex-row justify-between items-center">
                    <span className="lg:hidden cursor-pointer" onClick={statusMenuHandler}>
                        {statusMenu ? (
                        
                            <AiOutlineClose className="w-[1.3rem] h-[1.3rem]"/>
                        )
                        :(
                        
                           <AiOutlineMenu className="w-[1.3rem] h-[1.3rem]"/>
                            
                        )}
                    </span>
                <ul className="hidden lg:flex items-center bg-white p-4 rounded-[20px] text-sm w-[46rem] xl:w-[60rem] 2xl:w-[70rem]">
                    <li className=""><a className="text-[#666] hover:text-primary" href="#">کالای دیجیتال</a></li>
                    <li className="mr-5"><a className="text-[#666] hover:text-primary" href="#">آرایشی و بهداشتی</a></li>
                    <li className="mr-5"><a className="text-[#666] hover:text-primary" href="#">ابزار و اداری</a></li>
                    <li className="mr-5"><a className="text-[#666] hover:text-primary" href="#">مد و پوشاک</a></li>
                    <li className="mr-5"><a className="text-[#666] hover:text-primary" href="#">خانه و آشپزخانه</a></li>
                    <li className="mr-5"><a className="text-[#666] hover:text-primary" href="#">لوازم تحریر و هنر</a></li>
                    <li className="mr-5"><a className="text-[#666] hover:text-primary" href="#">کودک و نوزاد</a></li>
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
                    <button className="bg-[#60BD10] text-white flex items-center justify-center rounded-[20px] p-4">
                    <MdOutlineShoppingBag className="w-[1.3rem] h-[1.3rem]"/>
                    <span className="text-sm mx-3 font-iranSansDemiBold">سبد خرید</span>
                    <span className="text-xs bg-white text-[#60BD10] rounded-full py-[3px] px-2">0</span>
                    </button>
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




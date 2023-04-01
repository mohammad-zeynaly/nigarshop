import React from "react"
import {FaSearch } from "react-icons/fa"
import {FaUserAlt} from "react-icons/fa"
import { Link } from "react-router-dom";

function Topbar () {

    return(
        <section className="topbar my-5 hidden lg:block">
            <div className="container">
                <div className="flex justify-between items-center">
                    <Link to="/" className="w-32">
                        <img className="w-full object-cover " src="./assets/images/negarshop-logo.png" />
                    </Link>
                    <div className="w-[35rem] flex items-center relative">
                        <input className="py-4 px-4 focus:border-none focus:outline-none rounded-[20px] font-iranSansRegular text-sm w-full" type="text" placeholder="جستجو محصولات" />
                        <button className="absolute left-0 ml-2 bg-[#999999] p-[14px] rounded-[20px]">
                        <FaSearch className="text-white"/>
                        </button>
                    </div>
                    <div className="flex items-center">
                        <span className="text-[#666] text-sm ml-3 font-iranSansBold">حساب کاربری</span>
                        <button className="bg-[#dedede] p-[14px] rounded-[20px] group hover:bg-primary">
                        <FaUserAlt className="text-[#888] w-[1.1rem] h-[1.1rem] group-hover:text-white"/>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Topbar;
import React,{useState} from "react";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Link } from "react-router-dom";

function UserBasket (props) {
    let{count} = props
    return(
        <div className="">
            <Link to="/shoppingCart" className="bg-[#60BD10] text-white flex items-center justify-center rounded-[20px] p-4">
            <MdOutlineShoppingBag className="w-[1.3rem] h-[1.3rem]"/>
            <span className="text-sm mx-3 font-iranSansDemiBold">سبد خرید</span>
            {count ? (

                <span className="text-xs bg-white text-[#60BD10] rounded-full py-[3px] px-2">{count}</span>
            ):(
                <span className="text-xs bg-white text-[#60BD10] rounded-full py-[3px] px-2">0</span>
            )
            }
            </Link>
        </div>
    )
}

export default UserBasket;
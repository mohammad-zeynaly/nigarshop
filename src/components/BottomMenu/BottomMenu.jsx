import React from "react";
import { AiOutlineHome,AiOutlineSearch,AiOutlineUser,AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from "react-router-dom"


function BottomMenu () {
    return(
        <section className="bottom-menu lg:hidden bg-white py-3 fixed left-0 right-0 bottom-0 shadow-[0_-3px_6px_rgba(0,0,0,0.1)] z-40">
            <div className="container">
                <div className="flex justify-around">
                    <NavLink to="/"><AiOutlineHome className="w-[1.5rem] h-[1.6rem] text-[#757575] cursor-pointer"/></NavLink>
                    <NavLink to="/search"><AiOutlineSearch className="w-[1.5rem] h-[1.6rem] text-[#757575]"/></NavLink>
                    <NavLink to="/shoppingCart"><AiOutlineShoppingCart className="w-[1.5rem] h-[1.6rem] text-[#757575] cursor-pointer"/></NavLink>
                    <NavLink to="/myAccount"><AiOutlineUser className="w-[1.5rem] h-[1.6rem] text-[#757575] cursor-pointer"/></NavLink>
                </div>
            </div>
        </section>
    )
}

export default BottomMenu;
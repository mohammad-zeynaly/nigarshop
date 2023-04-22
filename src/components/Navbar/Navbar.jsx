import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AiFillHeart, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import { shopContext } from "../../contexts/shopContext";
import DesktopMenu from "../Menu/DesktopMenu";
import MobileMenu from "../Menu/MobileMenu";
import UserBasket from "./UserBasket";

function Navbar() {
    
  //Context
  const { statusMenu, setStatusMenu } = useContext(shopContext);

  return (
    <>
      <nav className="mt-6">
        <div className="container">
          <div className="flex flex-row-reverse lg:flex-row justify-between items-center">

            <span
              className="lg:hidden cursor-pointer"
              onClick={() => setStatusMenu((prevStatus) => !prevStatus)}
            >
              {statusMenu ? (
                <AiOutlineClose className="w-[1.3rem] h-[1.3rem] z-50 sticky text-white" />
              ) : (
                <AiOutlineMenu className="w-[1.3rem] h-[1.3rem]" />
              )}
            </span>

            <DesktopMenu />

            <MobileMenu />

            {/* Login In Cart Icon */}
            <div className="hidden lg:flex items-center">
              <div className="ml-4">
                <button className="bg-[#999999] p-4 rounded-[20px] text-white">
                  <AiFillHeart className="w-[1.3rem] h-[1.3rem] " />
                </button>
              </div>
              <div className="">
                <UserBasket />
              </div>
            </div>

            {/* brand Logo */}
            <Link to="/" className="w-32 lg:hidden">
              <img className="w-full object-cover " src="./assets/images/negarshop-logo.png" alt="لوگو سایت"/>
            </Link>

          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

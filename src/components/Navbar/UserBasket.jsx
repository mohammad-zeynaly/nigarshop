import React, { useState, useContext } from "react";
import { shopContext } from "../../contexts/shopContext";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Link } from "react-router-dom";

function UserBasket() {
  const { userCart } = useContext(shopContext);

  return (
    <div className="">
      <Link
        to="/shoppingCart"
        className="bg-[#60BD10] text-white flex items-center justify-center rounded-[20px] p-4"
      >
        <MdOutlineShoppingBag className="w-[1.3rem] h-[1.3rem]" />
        <span className="text-sm mx-3 font-iranSansDemiBold">سبد خرید</span>
        {userCart ? (
          <span className="text-xs bg-white text-[#60BD10] rounded-full py-[3px] px-2">
            {userCart.length}
          </span>
        ) : (
          <span className="text-xs bg-white text-[#60BD10] rounded-full py-[3px] px-2">
            0
          </span>
        )}
      </Link>
    </div>
  );
}

export default UserBasket;

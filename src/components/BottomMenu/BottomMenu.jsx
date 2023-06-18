import { useContext } from "react";
import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { shopContext } from "../../contexts/shopContext";

function BottomMenu() {
  const { userCart } = useContext(shopContext);

  return (
    <section className="bottom-menu lg:hidden bg-white py-3 fixed left-0 right-0 bottom-0 shadow-[0_-3px_6px_rgba(0,0,0,0.1)] z-40">
      <div className="container">
        <div className="flex justify-around">
          <NavLink to="/">
            <AiOutlineHome className="w-[1.7rem] h-[1.8rem] text-[#757575] cursor-pointer" />
          </NavLink>
          <NavLink to="/search">
            <AiOutlineSearch className="w-[1.7rem] h-[1.8rem] text-[#757575]" />
          </NavLink>
          <NavLink to="/shoppingCart" className="flex items-center relative">
            <AiOutlineShoppingCart className="w-[1.7rem] h-[1.8rem] text-[#757575] cursor-pointer" />
            <span className="absolute top-[-8px] right-[-12px] flex justify-center items-center text-[12px] bg-[#f44336] text-white w-5 h-5 rounded-full leading-5">
              {userCart.length > 0 ? userCart.length : 0}
            </span>
          </NavLink>
          <NavLink to="/myAccount">
            <AiOutlineUser className="w-[1.7rem] h-[1.8rem] text-[#757575] cursor-pointer" />
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default BottomMenu;

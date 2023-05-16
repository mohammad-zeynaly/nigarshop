import React from "react";
import { Link } from "react-router-dom";

import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

function DiscountItem(props) {
  const persian = new Intl.NumberFormat("fa");

  const addProductToCart = (id) => {
    props.onAddProduct(id);
  };

  return (
    <>
      <Link className="flex flex-col " to={`/productDetails/${props.id}`}>
        <div className="w-[13rem] xl:w-56 mx-auto">
          <img className="w-full object-cover" src={props.img} alt="عکس محصول" />
        </div>
      </Link>
      <div className="max-w-[16rem] mx-auto text-center">
        <Link
          to={`/productDetails/${props.id}`}
          className="text-[#666] hover:text-[#D60000]"
        >
          <h4 className="text-sm font-iranSansBold">{props.name}</h4>
        </Link>
        <span className="text-[#D60000] block mt-2 font-iranSansBold text-sm">
          {" "}
          {persian.format(props.price)} تومان
        </span>
      </div>
      <div className="flex items-center justify-center my-3">
        <span
          onClick={() => addProductToCart(props.id)}
          className="mx-3 text-[#7a7a7a] cursor-pointer"
          title="افزودن به سبد خرید"
        >
          {" "}
          <FiShoppingCart className="w-[1.5rem] h-[1.5rem]" />
        </span>
        <span
          className="mx-3 text-[#7a7a7a] cursor-pointer"
          title=" مشاهده سریع محصول "
        >
          {" "}
          <AiOutlineSearch className="w-[1.5rem] h-[1.5rem]" />
        </span>
        <span
          className="mx-3 text-[#7a7a7a] cursor-pointer"
          title="افزودن به علاقه مندی ها"
        >
          {" "}
          <AiOutlineHeart className="w-[1.5rem] h-[1.5rem]" />
        </span>
      </div>
    </>
  );
}

export default DiscountItem;

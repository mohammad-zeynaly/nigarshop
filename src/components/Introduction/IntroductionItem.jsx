import React from "react";
import { Link } from "react-router-dom";

function IntroductionItem(props) {
  return (
    <>
      <Link
        to={`/productCategory/${props.type}`}
        className="flex flex-col items-center rounded-[20px] group bg-white transition-all duration-200 hover:bg-primary hover:-translate-y-[6px] py-3 "
      >
        <div className="w-16">
          <img
            className="w-full object-cover rounded-[20px]"
            src={props.img}
            alt="Introduction Item image"
          />
        </div>
        <div className="mt-2">
          <h4 className="font-iranSansDemiBold text-[#444] group-hover:text-white">
            {props.title}
          </h4>
          <h6 className="text-[#666] text-sm mt-1 group-hover:text-white">
            +{props.count} محصول
          </h6>
        </div>
      </Link>
    </>
  );
}

export default IntroductionItem;

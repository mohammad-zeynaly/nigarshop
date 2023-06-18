import React, { useContext } from "react";
import { shopContext } from "../../contexts/shopContext";

function MobileMenu() {
  const { statusMenu } = useContext(shopContext);

  return (
    <ul
      className={`flex flex-col lg:hidden bg-white fixed top-0 z-50 ${
        statusMenu ? "right-0" : "right-[-260px]"
      } w-[260px] bottom-0 py-5 transition-all duration-200`}
    >
      <li className="mb-2 px-5 group hover:bg-[#f5f5f5] py-2">
        <a className="text-[#666]  group-hover:text-[#202124]" href="#">
          نحوه ثبت سفارش
        </a>
      </li>
      <li className="mb-2 px-5 group hover:bg-[#f5f5f5] py-2">
        <a className="text-[#666]  group-hover:text-[#202124]" href="#">
          رویه ارسال سفارش
        </a>
      </li>
      <li className="mb-2 px-5 group hover:bg-[#f5f5f5] py-2">
        <a className="text-[#666]  group-hover:text-[#202124]" href="#">
          شیوه‌های پرداخت
        </a>
      </li>
    </ul>
  );
}

export default MobileMenu;

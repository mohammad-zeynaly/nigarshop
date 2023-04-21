import React, { useState } from "react";

function ProductCategoryMenu({ menuIemHandler, activeMenuItem }) {
    
  const [menus, setMenus] = useState([
    { id: 1, name: "جدیدترین", type: "item1" },
    { id: 2, name: "محبوب‌ترین", type: "item2" },
    { id: 3, name: "رتبه بندی", type: "item3" },
    { id: 4, name: "ارزان‌ترین", type: "item4" },
    { id: 5, name: "گران‌ترین", type: "item5" },
  ]);

  return (
    <div className="mt-5 md:mr-12 md:mt-0 flex items-center text-[#777] product-category">
      {menus.map((item, index) => (
        <li
          onClick={() => menuIemHandler(item.type)}
          className={`ml-5 sm:ml-6 ${
            activeMenuItem === item.type ? "active" : ""
          }${activeMenuItem === index ? "active" : ""}`}
        >
          <button>{item.name}</button>
        </li>
      ))}
    </div>
  );
}

export default ProductCategoryMenu;

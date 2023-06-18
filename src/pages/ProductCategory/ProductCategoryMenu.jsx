import React, { useState } from "react";

function ProductCategoryMenu({ menuIemHandler }) {
  const [menus, setMenus] = useState([
    { id: 1, name: "جدیدترین", type: "item1" },
    { id: 2, name: "محبوب‌ترین", type: "item2" },
    { id: 3, name: "ارزان‌ترین", type: "item3" },
    { id: 4, name: "گران‌ترین", type: "item4" },
  ]);

  const [activeMenuItems, setActiveMenuItems] = useState([]);

  const menuItemBtnHandler = (item) => {
    if (activeMenuItems.includes(item)) {
      setActiveMenuItems(
        activeMenuItems.filter((itemType) => itemType !== item)
      );
    } else {
      setActiveMenuItems([item]);
    }
  };

  return (
    <div className="mt-5 md:mr-12 md:mt-0 flex items-center text-[#777] product-category">
      {menus.map((item) => (
        <li
          key={item.id}
          onClick={() => {
            menuIemHandler(item.type, item.name);
            menuItemBtnHandler(item.type);
          }}
          className={`ml-5 sm:ml-6 ${
            activeMenuItems.includes(item.type) ? "active" : ""
          }`}
        >
          <button>{item.name}</button>
        </li>
      ))}
    </div>
  );
}

export default ProductCategoryMenu;

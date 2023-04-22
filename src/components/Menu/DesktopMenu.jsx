import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function DesktopMenu() {
    
  const [menuItems, setMenuItems] = useState([
    { id: 1, title: "صفحه اصلی", href: "/" },
    { id: 2, title: "کالای دیجیتال", href: "/productCategory/discountProduct" },
    { id: 3, title: "کودک و نوزاد", href: "productCategory/toyProduct" },
    { id: 4, title: "مد و پوشاک", href: "productCategory/clothesProduct" },
    { id: 5, title: "لوازم ورزشی", href: "productCategory/sportProduct" },
    { id: 6, title: "ابزار و اداری", href: "productCategory/laptopProduct" },
    { id: 7, title: "لوازم آرایشی", href: "productCategory/cosmeticsProduct" },
  ]);

  return (
    <ul className="hidden lg:flex items-center bg-white p-4 rounded-[20px] text-sm w-[46rem] xl:w-[60rem] 2xl:w-[70rem]">
      {menuItems.map((item) => (
        <li key={item.id} className="mr-5 menu__item">
          <NavLink
            to={`${item.href}`}
            className="text-[#666] hover:text-primary"
          >
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );

}

export default DesktopMenu;

import React, { useState, useEffect } from "react";
import ProductsData from "../../data/ProductData";
import DiscountItem from "./DiscountItem";
import CardHoc from "./../HOC/CardHoc";
import SwiperTemplate from "../SwiperTemplate/SwiperTemplate";

function Discount({ addProductToCart }) {

  const [discountProduct, setDiscountProduct] = useState([]);
  const [allProduct, setALlProduct] = useState(ProductsData);

  const filterDiscountProduct = allProduct.filter(
    (discount) => discount.categories === "discountProduct"
  );

  useEffect(() => {
    setDiscountProduct(filterDiscountProduct);
  }, [allProduct]);

  return (
    <>
      <section className="discount mt-10 bg-[#F22C4F]">
        <div className="container">
          <div className="py-3">
            <h2 className="text-white text-center text-3xl my-5 font-iranSansBold">
              {" "}
              زنگ تخفیفه!{" "}
            </h2>

            <SwiperTemplate
              products={discountProduct}
              ProductItem={DiscountItem}
              onAddProduct={addProductToCart}
              swiperClass={"bg-white flex flex-col rounded-[20px] py-2 h-auto"}
            />

          </div>
        </div>
      </section>
    </>
  );
  
}

export default CardHoc(Discount);

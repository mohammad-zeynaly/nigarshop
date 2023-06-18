import React, { useState, useEffect, useContext } from "react";
import { shopContext } from "../../contexts/shopContext";
import DiscountItem from "./DiscountItem";
import CardHoc from "./../HOC/CardHoc";
import SwiperTemplate from "../SwiperTemplate/SwiperTemplate";

function Discount({ addProductToCart }) {
  const { productData } = useContext(shopContext);
  const [discountProduct, setDiscountProduct] = useState([]);

  useEffect(() => {
    if (productData) {
      const filterDiscountProduct = productData.filter(
        (discount) => discount.categories === "discountProduct"
      );
      setDiscountProduct(filterDiscountProduct);
    }
  }, [productData]);

  return (
    <>
      <section className="discount mt-10 bg-[#F22C4F]">
        <div className="container">
          <div className="py-3">
            <h2 className="text-white text-center text-3xl my-5 font-iranSansBold">
              زنگ تخفیفه!
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

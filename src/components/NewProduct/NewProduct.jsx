import React, { useState, useEffect, useContext } from "react";
import { shopContext } from "../../contexts/shopContext";
import Products from "../Products/Products";
import ProductItem from "../ProductItem/ProductItem";
import CardHoc from "./../HOC/CardHoc";
import SwiperTemplate from "../SwiperTemplate/SwiperTemplate";

function NewProduct({ addProductToCart }) {
  const [productsTemplate, setProductsTemplate] = useState([
    { id: 1, name: "جدیدترین محصولات", link: "/allProduct" },
  ]);

  const { productData } = useContext(shopContext);
  const [newProducts, setNewProducts] = useState([]);

  useEffect(() => {
    if (productData) {
      const filterNewProduct = productData.filter(
        (discount) => discount.categories === "discountProduct"
      );
      setNewProducts(filterNewProduct);
    }
  }, [productData]);

  return (
    <Products {...productsTemplate[0]}>
      <SwiperTemplate
        products={newProducts}
        ProductItem={ProductItem}
        onAddProduct={addProductToCart}
      />
    </Products>
  );
}

export default CardHoc(NewProduct);

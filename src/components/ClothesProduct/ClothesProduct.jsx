import React, { useState, useEffect, useContext } from "react";
import { shopContext } from "../../contexts/shopContext";
import Products from "../Products/Products";
import ProductItem from "../ProductItem/ProductItem";
import CardHoc from "./../HOC/CardHoc";
import SwiperTemplate from "../SwiperTemplate/SwiperTemplate";

function ClothesProduct({ addProductToCart }) {
  const [productsTemplate, setProductsTemplate] = useState([
    { id: 1, name: "مد و پوشاک روز", link: "/allProduct" },
  ]);

  const { productData } = useContext(shopContext);
  const [clothesProduct, setClothesProduct] = useState([]);

  useEffect(() => {
    if (productData) {
      const filterClothesProduct = productData.filter(
        (discount) => discount.categories === "clothesProduct"
      );
      setClothesProduct(filterClothesProduct);
    }
  }, [productData]);

  return (
    <Products {...productsTemplate[0]}>
      <SwiperTemplate
        products={clothesProduct}
        ProductItem={ProductItem}
        onAddProduct={addProductToCart}
      />
    </Products>
  );
}

export default CardHoc(ClothesProduct);

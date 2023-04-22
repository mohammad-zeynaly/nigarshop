import React, { useState, useEffect } from "react";
import ProductsData from "../../data/ProductData";
import Products from "../Products/Products";
import ProductItem from "../ProductItem/ProductItem";
import CardHoc from "./../HOC/CardHoc";
import SwiperTemplate from "../SwiperTemplate/SwiperTemplate";

function ClothesProduct({ addProductToCart }) {
  const [productsTemplate, setProductsTemplate] = useState([
    { id: 1, name: "مد و پوشاک روز", link: "/" },
  ]);

  const [clothesProduct, setClothesProduct] = useState([]);
  const [allProduct, setAllProduct] = useState(ProductsData);

  const filterClothesProduct = allProduct.filter(
    (discount) => discount.categories === "clothesProduct"
  );

  useEffect(() => {
    setClothesProduct(filterClothesProduct);
  }, [allProduct]);

  
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

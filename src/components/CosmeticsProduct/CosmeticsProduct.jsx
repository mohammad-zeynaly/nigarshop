import React, { useState, useEffect } from "react";
import ProductsData from "../../data/ProductData";
import Products from "../Products/Products";
import ProductItem from "../ProductItem/ProductItem";
import CardHoc from "./../HOC/CardHoc";
import SwiperTemplate from "../SwiperTemplate/SwiperTemplate";

function CosmeticsProduct({ addProductToCart }) {

  const [productsTemplate, setProductsTemplate] = useState([
    { id: 1, name: "لوازم آرایشی و بهداشتی ", link: "/allProduct" },
  ]);

  const [cosmeticsProduct, setCosmeticsProduct] = useState([]);
  const [allProduct, setAllProduct] = useState(ProductsData);

  const filterCosmeticsProduct = allProduct.filter(
    (discount) => discount.categories === "cosmeticsProduct"
  );

  useEffect(() => {
    setCosmeticsProduct(filterCosmeticsProduct);
  }, [allProduct]);

  return (
    <Products {...productsTemplate[0]}>

      <SwiperTemplate
        products={cosmeticsProduct}
        ProductItem={ProductItem}
        onAddProduct={addProductToCart}
      />
      
    </Products>
  );

}

export default CardHoc(CosmeticsProduct);

import React, { useState, useEffect } from "react";
import ProductsData from "../../data/ProductData";
import Products from "../Products/Products";
import ProductItem from "../ProductItem/ProductItem";
import CardHoc from "./../HOC/CardHoc";
import SwiperTemplate from "../SwiperTemplate/SwiperTemplate";

function NewProduct({ addProductToCart }) {
  const [productsTemplate, setProductsTemplate] = useState([
    { id: 1, name: "جدیدترین محصولات", link: "/" },
  ]);

  const [newProducts, setNewProducts] = useState([]);
  const [allProduct, setAllProduct] = useState(ProductsData);

  // Filtering Product
  const filterNewProduct = allProduct.filter(
    (discount) => discount.categories === "discountProduct"
  );

  useEffect(() => {
    setNewProducts(filterNewProduct);
  }, [allProduct]);

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

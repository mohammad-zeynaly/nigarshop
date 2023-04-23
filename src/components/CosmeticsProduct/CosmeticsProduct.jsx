import { useState, useEffect, useContext } from "react";
import { shopContext } from "../../contexts/shopContext";
import Products from "../Products/Products";
import ProductItem from "../ProductItem/ProductItem";
import CardHoc from "./../HOC/CardHoc";
import SwiperTemplate from "../SwiperTemplate/SwiperTemplate";

function CosmeticsProduct({ addProductToCart }) {
  const [productsTemplate, setProductsTemplate] = useState([
    { id: 1, name: "لوازم آرایشی و بهداشتی ", link: "/allProduct" },
  ]);

  const { productData } = useContext(shopContext);
  const [cosmeticsProduct, setCosmeticsProduct] = useState([]);

  useEffect(() => {
    if (productData) {
      const filterCosmeticsProduct = productData.filter(
        (discount) => discount.categories === "cosmeticsProduct"
      );
      setCosmeticsProduct(filterCosmeticsProduct);
    }
  }, [productData]);

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

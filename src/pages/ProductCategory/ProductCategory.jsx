import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import CardHoc from "../../components/HOC/CardHoc";
import ProductsData from "../../data/ProductData";
import ProductCategoryMenu from "./ProductCategoryMenu";
import ProductCategoryItem from "./ProductCategoryItem";

function ProductCategory({ addProductToCart }) {

  const params = useParams();
  const [allProducts, setAllProduct] = useState(ProductsData);
  const [activeMenuItem, setActiveMenuItem] = useState(0);

  const [categoryProduct, setCategoryProduct] = useState([]);

  // Filtering Products
  const mainProducts = allProducts.filter(
    (product) => product.categories === params.productType
  );

  useEffect(() => {
    setCategoryProduct(mainProducts);
  }, [allProducts, params]);

  const menuIemHandler = (item) => {
    setActiveMenuItem(item);
  };

  return (
    <section className="product-category my-12">
      <div className="container">
        <div className="bg-white p-5 rounded-[20px] my-8">
          <h4 className="text-[#666]">دسته بندی کالا</h4>
          <h5 className="text-[15px] text-[#999] mt-2 sm:hidden">
            مرتب سازی بر اساس :
          </h5>
          <ul className="whitespace-nowrap overflow-auto sm:overflow-visible py-3 sm:py-0 flex flex-col md:items-center md:flex-row text-sm mt-2 md:mt-4">
            <h5 className="text-[15px] text-[#999] hidden sm:block">
              مرتب سازی بر اساس :
            </h5>

            <ProductCategoryMenu
              menuIemHandler={menuIemHandler}
              activeMenuItem={activeMenuItem}
            />
          </ul>
        </div>
        
        <ProductCategoryItem
          categoryProduct={categoryProduct}
          addProductToCart={addProductToCart}
        />

      </div>
    </section>
  );
}

export default CardHoc(ProductCategory);

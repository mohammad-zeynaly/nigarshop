import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import CardHoc from "../../components/HOC/CardHoc";
import { shopContext } from "../../contexts/shopContext";
import ProductCategoryMenu from "./ProductCategoryMenu";
import ProductCategoryItem from "./ProductCategoryItem";

function ProductCategory({ addProductToCart }) {
  const params = useParams();
  const { productData } = useContext(shopContext);
  const [activeMenuItem, setActiveMenuItem] = useState(0);

  const [categoryProduct, setCategoryProduct] = useState([]);

  useEffect(() => {
    if (productData) {
      // Filtering Products
      const mainProducts = productData.filter(
        (product) => product.categories === params.productType
      );
      setCategoryProduct(mainProducts);
    }
  }, [productData, params]);

  const menuIemHandler = (itemType, itemName) => {
    const filteredProducts = productData.filter(
      (product) => product.type === "product"
    );

    setActiveMenuItem(itemType);

    switch (itemName) {
      case "گران‌ترین": {
        const orderingCategory = filteredProducts.filter(
          (product) => product.price > 4_000_000
        );
        setCategoryProduct(orderingCategory);
        break;
      }
      case "ارزان‌ترین": {
        const orderingCategory = filteredProducts.filter(
          (product) => product.price < 4_000_000
        );
        setCategoryProduct(orderingCategory);
        break;
      }
      case "جدیدترین": {
        const orderingCategory = filteredProducts.filter(
          (product) => product.categories === "discountProduct"
        );
        setCategoryProduct(orderingCategory);
        break;
      }

      case "محبوب‌ترین": {
        const orderingCategory = filteredProducts.filter(
          (product) => product.popularity === true
        );
        setCategoryProduct(orderingCategory);
        break;
      }
    }
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

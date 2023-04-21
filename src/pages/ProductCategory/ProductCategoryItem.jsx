import React from "react";
import ProductItem from "../../components/ProductItem/ProductItem";

function ProductCategoryItem({ categoryProduct, addProductToCart }) {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 py-12">
      {categoryProduct.map((product) => (
        <ProductItem 
        key={product.id}
          onAddProduct={addProductToCart}
          {...product}
        ></ProductItem>
      ))}
    </div>
  );

}


export default ProductCategoryItem;
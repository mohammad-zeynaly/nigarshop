import { useState, useContext } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FaRegChartBar } from "react-icons/fa";
import { FiArchive } from "react-icons/fi";
import { toast } from "react-toastify";
import { shopContext } from "../../contexts/shopContext";

const ProductDetailsItem = ({ productDetail }) => {
  const persian = new Intl.NumberFormat("fa");
  const [count, setCount] = useState(1);
  const { productData,userCart, setUserCart } = useContext(shopContext);

  // Add Product To cart
  const addProductToUserCart = (productId) => {
    const mainProduct = productData.find((product) => product.id === productId);

    const shoppingCartProduct = userCart.some(
      (cartProduct) => cartProduct.name === mainProduct.name
    );

    if (!shoppingCartProduct) {
      setUserCart((prevProduct) => {
        return [...prevProduct, mainProduct];
      });
    } else {
      let shoppingCartProduct = [...userCart];

      shoppingCartProduct.some((product) => {
        if (product.name === mainProduct.name) {
          product.count += 1;
          return true;
        }
      });

      setUserCart(shoppingCartProduct);
    }

    // create toastBox success addToCart
    toast.success("محصول به سبد خرید اضافه شد", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className="bg-white flex flex-col lg:flex-row items-center my-8 rounded-[20px] overflow-hidden p-4">
      <div className="w-full lg:w-1/4">
        <img
          className="object-cover w-full"
          src={productDetail.img}
          alt="product image"
        />
      </div>
      <div className="text-sm w-full lg:w-1/2">
        <h3 className="text-lg">{productDetail.name}</h3>

        <div className="flex items-center mt-3">
          <span className="flex items-center">
            <FiArchive className="ml-2" />
            دسته : {productDetail.categoriesPersian}
          </span>
          <span className="flex items-center pr-8">
            <FaRegChartBar className="ml-2" />
            24 فروش موفق
          </span>
        </div>

        <h4 className="mt-8 text-base border-b border-[#eee] pb-4 text-[#555] font-iranSansBold">
          آماده ارسال
        </h4>
        <div className="text-[#757575]">
          <h4 className="text-base mt-5 text-[#777] font-iranSansBold">
            ویژگی های محصول
          </h4>
          <ul className="flex flex-col mt-2">
            <li className="mb-2 text-[#464646]">ویژگی اول : لورم ایپسوم</li>
            <li className="mb-2 text-[#464646]">ویژگی دوم : لورم ایپسوم</li>
            <li className="mb-2 text-[#464646]">ویژگی سوم : لورم ایپسوم</li>
          </ul>
        </div>
      </div>
      <div
        id="basket"
        className="w-full lg:w-1/4 bg-[#EEEEEE] my-3 px-4 py-6 rounded-[20px] text-[#888]"
      >
        <div className="flex justify-between items-center">
          <span>فروشنده:</span>
          <span>سام تل</span>
        </div>

        <div className="flex justify-between items-center mt-4">
          <span>قیمت:</span>
          <span className="text-primary font-iranSansBold">
            {persian.format(productDetail.price)} تومان
          </span>
        </div>

        <div className="flex justify-between items-center mt-6">
          <div className="flex items-center relative">
            <button
              onClick={() => count < 10 && setCount((current) => current + 1)}
              className="flex justify-center items-center bg-[#eee] absolute right-[2px] h-8 w-6 rounded-[20px]"
            >
              <AiOutlinePlus className="text-[#666]" />
            </button>
            <input
              type="number"
              className="rounded-[10px] text-center w-20 h-10 bg-[#f5f5f5] focus:outline-none"
              min="1"
              max="10"
              value={count}
            />
            <button
              onClick={() => count > 0 && setCount((current) => current - 1)}
              className="flex justify-center items-center bg-[#eee] absolute left-[2px] h-8 w-6 rounded-[20px]"
            >
              <AiOutlineMinus className="text-[#666]" />
            </button>
          </div>
          <button
            onClick={() => addProductToUserCart(productDetail.id)}
            className="bg-primary text-white rounded-[20px] py-2 px-2 text-sm xl:text-base sm:px-4 lg:px-[6px] xl:px-4"
          >
            افزودن به سبد خرید
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsItem;

import React, { useState, useEffect, useContext, useCallback, useMemo } from "react";
import { shopContext } from "../../contexts/shopContext";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import ShoppingCartItem from "./ShoppingCartItem";
import ProductsData from "../../data/ProductData";

function ShoppingCart() {

  const [allProduct, setAllProduct] = useState(ProductsData);
  const persian = new Intl.NumberFormat("fa");
  const [cartItems, setCartItems] = useState([]);

  const { userCart, setUserCart } = useContext(shopContext);

  useEffect(() => {
    setCartItems(userCart);
  }, [allProduct]);

  useEffect(() => setUserCart(cartItems), [cartItems]);

  // Remove Product In User Basket
  const removeProductInCart = useCallback((productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((productItem) => productItem.id !== productId)
    );
  }, []);


  // Calculate All Cart Product Price
  const totalCartPrice = useMemo(() => {
    return userCart.reduce((total,productItem) => total + productItem.price * productItem.count,0)
  },[userCart])


  console.log(totalCartPrice)
  return (
    <section className="cart my-16">
      <div className="container">
        <div className=" bg-white rounded-[20px] p-5">
          {cartItems.length ? (
            <>
              <table className="table-auto w-full text-center text-[#777] text-[15px]">
                <thead className="hidden sm:table-row-group">
                  <tr>
                    <th className=""></th>
                    <th className=""></th>
                    <th className="">محصول</th>
                    <th className="">قیمت</th>
                    <th className="">تعداد</th>
                  </tr>
                </thead>
                <tbody>
                    <ShoppingCartItem onRemove={removeProductInCart}/>
                </tbody>
              </table>

              <div className="bg-[#F5F5F5] mt-8 p-4 rounded-[20px] text-center">
                <h5 className="text-[#999]">مجموع کل سبد خرید</h5>
                <h6 className="mt-4 text-[15px]">
                  {" "}
                  قیمت کل:
                  <span> {persian.format(totalCartPrice)} تومان </span>
                </h6>
                <div className="mt-4">
                  <button className="bg-primary text-white py-3 px-5 rounded-[20px]">
                    تسویه حساب
                  </button>
                  <Link
                    to="/"
                    className="bg-[#828282] text-white py-3 px-5 rounded-[20px] mr-3 hidden sm:inline-block"
                  >
                    خرید محصول های دیگر
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#f4f4f4] rounded-full p-10">
                <AiOutlineShoppingCart className="w-32 h-32 text-[#a8a8a8]" />
              </div>
              <h4 className="text-lg sm:text-2xl text-[#999] mt-6 sm:mt-5">
                سبد خرید شما در حال حاضر خالی است.
              </h4>
              <Link
                to="/"
                className="bg-primary text-white rounded-[20px] py-1 px-2 my-6"
              >
                بازگشت به فروشگاه
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ShoppingCart;

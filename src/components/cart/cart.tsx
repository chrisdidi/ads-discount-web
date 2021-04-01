import React, { useContext, useState } from "react";
import cartStore from "../../context/cartStore";
import cartStyles from "./styles";
import { IoIosClose } from "react-icons/io";
import Loader from "../loader";
import CartItem from "../cart-item/cart-item";
import Button from "../button/button";

interface IProps {
  accountId: number;
}
const Cart: React.FC<IProps> = ({ accountId }) => {
  const { options, loading } = useContext(cartStore);

  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <div
        className={cartStyles.cartButtonStyle}
        onClick={setShowCart.bind(this, !showCart)}
      >
        <p className=" text-lg text-white font-bold ">
          {options?.cart.length || 0}
        </p>
      </div>
      <div
        className={`${cartStyles.cartContainer} ${
          showCart ? " max-w-screen-sm" : "max-w-0"
        }`}
      >
        <div className=" w-full pt-14 min-w-max relative h-screen">
          {loading && (
            <div className=" absolute w-full h-full top-0 left-0 bg-gray-50 bg-opacity-50 flex items-center justify-center overflow-y-auto">
              <div className=" bg-gray-700 bg-opacity-90 rounded-lg w-16 h-16 flex items-center justify-center">
                <Loader />
              </div>
            </div>
          )}
          <div className=" w-full flex justify-between items-center p-3">
            <h1 className=" text-gray-700 font-bold text-2xl">My Cart</h1>
            <div
              className=" flex items-center text-yellow-600 cursor-pointer hover:text-yellow-800"
              onClick={setShowCart.bind(this, !showCart)}
            >
              <p>Collapse</p>
              <IoIosClose size={24} />
            </div>
          </div>
          <div className=" w-full p-3">
            {options?.cart && options?.cart.length > 0 ? (
              options.cart.map((a) => (
                <CartItem
                  accountId={accountId}
                  item={a}
                  key={`${a.id}_${a.name}`}
                />
              ))
            ) : (
              <p>No items in cart yet.</p>
            )}
            <div className=" absolute bottom-0 w-full left-0 p-3 pb-8 flex flex-col items-center justify-center">
              <Button
                onClick={() => {}}
                label={`Pay RM ${
                  options?.discountedPrice || options?.originalPrice
                }`}
              />
              {options?.discountedPrice && (
                <p className=" text-gray-600 italic mt-2 text-sm">
                  Original Price: RM{options.originalPrice}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

import React, { useContext } from "react";
import cartStore from "../../context/cartStore";
import { UpdateCart_updateCart_data_cart } from "../../__generated__/UpdateCart";
import RoundButton from "../round-button";

interface IProps {
  item: UpdateCart_updateCart_data_cart;
  accountId: number;
}
const CartItem: React.FC<IProps> = ({ item, accountId }) => {
  const { onUpdateCart } = useContext(cartStore);

  return (
    <div className=" w-full flex justify-between items-center border-b border-solid border-gray-200 py-3">
      <div>
        <h1 className=" font-semibold text-gray-700 text-lg">{item.name}</h1>
        <p className="text-gray-600">
          <span className={`${item.discountedPrice && " line-through"}`}>
            RM {item.price}
          </span>{" "}
          {item.discountedPrice && <span>RM {item.discountedPrice}</span>}
        </p>
      </div>
      <div className=" flex items-center justify-center flex-col">
        <div className=" flex items-center w-full justify-between mb-2">
          <RoundButton
            label={"-"}
            size="lg"
            onClick={onUpdateCart?.bind(this, {
              accountId,
              adId: item.id,
              quantity: -1,
            })}
          />
          <p className=" mx-3">{item.quantity}</p>
          <RoundButton
            label={"+"}
            size="lg"
            onClick={onUpdateCart?.bind(this, {
              accountId,
              adId: item.id,
              quantity: 1,
            })}
          />
        </div>
        {item.free !== null && +item.free > 0 && (
          <p className=" text-gray-600 text-sm text-semibold italic">
            {item.free} for free!
          </p>
        )}
      </div>
    </div>
  );
};

export default CartItem;

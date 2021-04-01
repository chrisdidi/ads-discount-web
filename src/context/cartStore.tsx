import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import React, { createContext, useState } from "react";
import {
  UpdateCart,
  UpdateCartVariables,
  UpdateCart_updateCart_data,
} from "../__generated__/UpdateCart";

interface onUpdateProps {
  accountId: number;
  adId: number;
  quantity: number;
}

interface IContextProps {
  options: UpdateCart_updateCart_data;
  itemsCounts: number;
  loading: boolean;
  error?: any;
  onUpdateCart: (updateVariables: onUpdateProps) => any;
  customError?: string;
}

const cartStore = createContext<Partial<IContextProps>>({});

const UPDATE_CART = gql`
  mutation UpdateCart(
    $adId: Int!
    $accountId: Int!
    $quantity: Int!
    $currentCart: [CartItemInput!]!
  ) {
    updateCart(
      input: {
        adId: $adId
        accountId: $accountId
        quantity: $quantity
        currentCart: $currentCart
      }
    ) {
      data {
        cart {
          id
          price
          name
          quantity
          free
          discountedPrice
        }
        originalPrice
        discountedPrice
      }
      error
    }
  }
`;

export const CartStoreProvider: React.FC = ({ children }) => {
  const [options, setOptions] = useState<UpdateCart_updateCart_data>();
  const [customError, setCustomError] = useState("");
  const [updateCart, { loading, error }] = useMutation<
    UpdateCart,
    UpdateCartVariables
  >(UPDATE_CART);

  const onUpdateCart = ({ adId, accountId, quantity }: onUpdateProps) => {
    let adIndex = options?.cart.findIndex((a) => a.id === adId);
    if (adIndex !== undefined && adIndex > -1) {
      quantity = (options?.cart[adIndex].quantity || 0) + quantity;
    }
    const currentCart = options?.cart.map((item) => ({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
    }));

    updateCart({
      variables: {
        adId,
        accountId,
        quantity,
        currentCart: currentCart || [],
      },
    })
      .then((data) => {
        data.data?.updateCart.data && setOptions(data.data?.updateCart.data);
        if (data.data?.updateCart.error) {
          setCustomError(data.data?.updateCart.error);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <cartStore.Provider
      value={{
        options,
        loading,
        error,
        onUpdateCart,
        customError,
      }}
    >
      {children}
    </cartStore.Provider>
  );
};

export default cartStore;

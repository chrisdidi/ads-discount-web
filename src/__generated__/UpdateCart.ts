/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CartItemInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateCart
// ====================================================

export interface UpdateCart_updateCart_data_cart {
  __typename: "CartItemOutput";
  id: number;
  price: number;
  name: string;
  quantity: number;
}

export interface UpdateCart_updateCart_data {
  __typename: "OutputData";
  cart: UpdateCart_updateCart_data_cart[];
  originalPrice: number;
  discountedPrice: number;
}

export interface UpdateCart_updateCart {
  __typename: "UpdateCartOutput";
  data: UpdateCart_updateCart_data | null;
  error: string | null;
}

export interface UpdateCart {
  updateCart: UpdateCart_updateCart;
}

export interface UpdateCartVariables {
  adId: number;
  accountId: number;
  quantity: number;
  currentCart: CartItemInput[];
}

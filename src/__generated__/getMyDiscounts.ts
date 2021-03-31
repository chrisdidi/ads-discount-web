/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getMyDiscounts
// ====================================================

export interface getMyDiscounts_myDiscounts_data_discounts_adType {
  __typename: "AdTypes";
  name: string;
  price: number;
}

export interface getMyDiscounts_myDiscounts_data_discounts_freeAd {
  __typename: "AdTypes";
  name: string;
}

export interface getMyDiscounts_myDiscounts_data_discounts {
  __typename: "DiscountsAccounts";
  min_purchase: number;
  newPrice: number | null;
  adType: getMyDiscounts_myDiscounts_data_discounts_adType;
  freeQuantity: number;
  freeAd: getMyDiscounts_myDiscounts_data_discounts_freeAd | null;
}

export interface getMyDiscounts_myDiscounts_data {
  __typename: "AdAccounts";
  name: string;
  discounts: getMyDiscounts_myDiscounts_data_discounts[] | null;
}

export interface getMyDiscounts_myDiscounts {
  __typename: "MyDiscountsOutput";
  data: getMyDiscounts_myDiscounts_data;
}

export interface getMyDiscounts {
  myDiscounts: getMyDiscounts_myDiscounts;
}

export interface getMyDiscountsVariables {
  id: number;
}

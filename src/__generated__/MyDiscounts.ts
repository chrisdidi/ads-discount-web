/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MyDiscounts
// ====================================================

export interface MyDiscounts_myDiscounts_data_discounts_adType {
  __typename: "AdTypes";
  name: string;
}

export interface MyDiscounts_myDiscounts_data_discounts_freeAd {
  __typename: "AdTypes";
  name: string;
}

export interface MyDiscounts_myDiscounts_data_discounts {
  __typename: "DiscountsAccounts";
  min_purchase: number;
  newPrice: number | null;
  adType: MyDiscounts_myDiscounts_data_discounts_adType;
  freeQuantity: number;
  freeAd: MyDiscounts_myDiscounts_data_discounts_freeAd | null;
}

export interface MyDiscounts_myDiscounts_data {
  __typename: "AdAccounts";
  name: string;
  discounts: MyDiscounts_myDiscounts_data_discounts[] | null;
}

export interface MyDiscounts_myDiscounts {
  __typename: "MyDiscountsOutput";
  data: MyDiscounts_myDiscounts_data;
}

export interface MyDiscounts {
  myDiscounts: MyDiscounts_myDiscounts;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MyAdAccounts
// ====================================================

export interface MyAdAccounts_myAdAccounts_data_discounts {
  __typename: "DiscountsAccounts";
  id: number;
}

export interface MyAdAccounts_myAdAccounts_data {
  __typename: "AdAccounts";
  id: number;
  name: string;
  discounts: MyAdAccounts_myAdAccounts_data_discounts[] | null;
}

export interface MyAdAccounts_myAdAccounts {
  __typename: "MyAdAccountsOutput";
  data: MyAdAccounts_myAdAccounts_data[];
}

export interface MyAdAccounts {
  myAdAccounts: MyAdAccounts_myAdAccounts;
}

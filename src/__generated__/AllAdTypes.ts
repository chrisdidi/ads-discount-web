/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllAdTypes
// ====================================================

export interface AllAdTypes_allAdTypes_data {
  __typename: "AdTypes";
  id: number;
  name: string;
  price: number;
}

export interface AllAdTypes_allAdTypes {
  __typename: "AllAdTypesOutput";
  data: AllAdTypes_allAdTypes_data[];
}

export interface AllAdTypes {
  allAdTypes: AllAdTypes_allAdTypes;
}

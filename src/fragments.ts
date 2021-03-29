import gql from "graphql-tag";

export const CORE_QUERY_OUTPUT = `
    currentPage
    itemCount
    pageCount
    perPage
    hasNextPage
    hasPrevPage
`;

export const DISCOUNT_ACCOUNTS_FRAGMENT = gql`
  fragment DiscountsAccountsParts on DiscountsAccounts {
    min_purchase
    newPrice
    freeAd
    freeQuantity
  }
`;

export const AD_TYPES_FRAGMENT = gql`
  fragment AdTypesParts on AdTypes {
    name
    price
    description
  }
`;

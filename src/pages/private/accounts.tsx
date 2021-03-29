import { gql, useQuery } from "@apollo/client";
import React from "react";

const GET_MY_ACCOUNTS = gql`
  {
    myAdAccounts {
      data {
        id
        name
        discounts {
          id
          newPrice
          min_purchase
          freeQuantity
          adType {
            name
            price
          }
          freeAd {
            name
            price
          }
        }
      }
    }
  }
`;
const Accounts = () => {
  const { data, loading, error } = useQuery(GET_MY_ACCOUNTS);
  return (
    <div className=" w-full p-3 min-h-screen bg-blue-50">
      <div className=" w-full max-w-md">
        <h1 className=" text-gray-600 font-bold text-2xl">
          Select an Ad Account
        </h1>
      </div>
    </div>
  );
};
export default Accounts;

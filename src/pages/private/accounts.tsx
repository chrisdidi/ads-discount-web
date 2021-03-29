import { gql, useQuery } from "@apollo/client";
import React from "react";
import AccountCard from "../../components/account-card/account-card";
import ErrorAlert from "../../components/error-alert";
import Loader from "../../components/loader";
import { GetMyAccountType } from "../../types/queries";

const GET_MY_ACCOUNTS = gql`
  {
    myAdAccounts {
      data {
        id
        name
        discounts {
          id
        }
      }
    }
  }
`;
const Accounts = () => {
  const { data, loading, error } = useQuery<GetMyAccountType>(GET_MY_ACCOUNTS);

  console.log(data);
  return (
    <div className=" w-full p-3 min-h-screen bg-blue-50">
      <div className=" w-full max-w-md">
        <h1 className=" text-gray-600 font-bold text-2xl mb-3">
          Select an Ad Account ({data?.myAdAccounts?.data.length})
        </h1>
        {loading && <Loader />}
        {!loading && error && (
          <ErrorAlert title="Error" message="An error has occured!" />
        )}
        {!loading &&
          data &&
          (data?.myAdAccounts?.data?.length > 0
            ? data.myAdAccounts.data.map((acc) => (
                <AccountCard key={acc.id} account={acc} />
              ))
            : "No account found!")}
      </div>
    </div>
  );
};
export default Accounts;

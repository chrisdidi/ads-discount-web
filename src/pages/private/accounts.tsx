import { gql, useQuery } from "@apollo/client";
import React, { useCallback } from "react";
import { RouteComponentProps, withRouter } from "react-router";
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

interface IProps extends RouteComponentProps<any> {}
const Accounts: React.FC<IProps> = ({ history }) => {
  const { data, loading, error } = useQuery<GetMyAccountType>(GET_MY_ACCOUNTS);

  const onCardClicked = useCallback(
    (id) => {
      history.push("/checkout/" + id);
    },
    [history]
  );
  return (
    <div className=" w-full p-4 min-h-screen bg-blue-100">
      <div className=" w-full max-w-md">
        <h1 className=" text-gray-600 font-bold text-2xl mb-3">
          Select an Ad Account ({data?.myAdAccounts?.data.length || 0})
        </h1>
        {loading && <Loader />}
        {!loading && error && (
          <ErrorAlert title="Error" message="An error has occured!" />
        )}
        {!loading &&
          data &&
          (data?.myAdAccounts?.data?.length > 0
            ? data.myAdAccounts.data.map((acc) => (
                <AccountCard
                  key={acc.id}
                  account={acc}
                  onSelect={onCardClicked.bind(this)}
                />
              ))
            : "No account found!")}
      </div>
    </div>
  );
};
export default withRouter(Accounts);

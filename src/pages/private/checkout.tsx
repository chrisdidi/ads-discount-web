import { gql, useQuery } from "@apollo/client";
import React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import AdCard from "../../components/ad-card/ad-card";
import Cart from "../../components/cart/cart";
import Loader from "../../components/loader";
import ProfileHeader from "../../components/profile-header/profile-header";
import { CartStoreProvider } from "../../context/cartStore";
import { AllAdTypes } from "../../__generated__/AllAdTypes";

type RouteProps = {
  id: string;
};

const ALL_ADS_TYPE = gql`
  query AllAdTypes {
    allAdTypes {
      data {
        id
        name
        price
      }
    }
  }
`;

interface IProps extends RouteComponentProps<RouteProps> {}
const Checkout: React.FC<IProps> = ({ match }) => {
  const id = parseInt(match.params.id);
  const { data, loading } = useQuery<AllAdTypes>(ALL_ADS_TYPE);

  return (
    <CartStoreProvider>
      <div className=" w-full min-h-screen bg-blue-100 pt-14">
        <ProfileHeader id={id} />
        {loading && <Loader />}
        {!loading && data?.allAdTypes.data && (
          <div className=" w-full p-3 max-w-lg">
            <h1 className=" text-xl text-gray-600 font-bold mb-3">
              Advertisement Package
            </h1>
            {data.allAdTypes.data.length > 0 ? (
              data.allAdTypes.data.map((ad, index) => (
                <AdCard accountId={id} key={`${ad.name}_${index}`} ad={ad} />
              ))
            ) : (
              <p>
                No advertisement package at the moment. Please try again later.
              </p>
            )}
          </div>
        )}
      </div>
      <Cart accountId={id} />
    </CartStoreProvider>
  );
};

export default withRouter(Checkout);

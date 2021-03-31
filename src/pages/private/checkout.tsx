import { gql, useQuery } from "@apollo/client";
import React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import ProfileHeader from "../../components/profile-header/profile-header";
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
  const { data, loading, error } = useQuery<AllAdTypes>(ALL_ADS_TYPE);

  return (
    <div className=" w-full min-h-screen bg-blue-100">
      <ProfileHeader id={id} />
    </div>
  );
};

export default withRouter(Checkout);

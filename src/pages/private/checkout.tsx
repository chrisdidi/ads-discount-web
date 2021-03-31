import React from "react";
import { RouteComponentProps, withRouter } from "react-router";

type RouteProps = {
  id: string;
};
interface IProps extends RouteComponentProps<RouteProps> {}
const Checkout: React.FC<IProps> = ({ match }) => {
  return <div className=" w-full min-h-screen bg-blue-100"></div>;
};

export default withRouter(Checkout);

import { Route, Switch } from "react-router";
import Accounts from "../pages/private/accounts";
import Checkout from "../pages/private/checkout";

const PrivateApp = () => {
  const routes = [
    {
      path: "/",
      component: Accounts,
    },
    {
      path: "/checkout/:id",
      component: Checkout,
    },
  ];
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route key={`${route.path}_${index}`} exact {...route} />
      ))}
    </Switch>
  );
};

export default PrivateApp;

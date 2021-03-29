import { Route, Switch } from "react-router";
import Accounts from "../pages/private/accounts";

const PrivateApp = () => (
  <Switch>
    <Route exact path="/" component={Accounts} />
  </Switch>
);

export default PrivateApp;

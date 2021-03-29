import { Route, Switch } from "react-router";
import Auth from "../pages/public/auth";

const PublicApp = () => (
  <Switch>
    <Route exact path="/" component={Auth} />
  </Switch>
);

export default PublicApp;

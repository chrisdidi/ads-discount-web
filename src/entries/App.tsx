import { useReactiveVar } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { isLoggedInVar } from "../providers/apollo";
import PrivateApp from "./private-app";
import PublicApp from "./public-app";

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return (
    <div className="App">
      <BrowserRouter>
        {isLoggedIn ? <PrivateApp></PrivateApp> : <PublicApp></PublicApp>}
      </BrowserRouter>
    </div>
  );
}

export default App;

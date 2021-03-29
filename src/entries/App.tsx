import { BrowserRouter } from "react-router-dom";
import { isLoggedInVar } from "../providers/apollo";
import PrivateApp from "./private-app";
import PublicApp from "./public-app";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {isLoggedInVar() ? <PrivateApp></PrivateApp> : <PublicApp></PublicApp>}
      </BrowserRouter>
    </div>
  );
}

export default App;

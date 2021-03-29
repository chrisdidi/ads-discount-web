import { BrowserRouter } from "react-router-dom";
import PrivateApp from "./private-app";
import PublicApp from "./public-app";

function App() {
  const isLoggedIn = true;
  return (
    <div className="App">
      <BrowserRouter>
        {isLoggedIn ? <PrivateApp></PrivateApp> : <PublicApp></PublicApp>}
      </BrowserRouter>
    </div>
  );
}

export default App;

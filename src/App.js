import { BrowserRouter, Router } from "react-router-dom";
import Navigation from "./Components/Navigation";
import RouterComponent from "./utils/Router";
import ProductContext from "./Contexts/ProductContext";
import AllProductContext from "./Contexts/AllProductContext";

function App() {
  return (
    <ProductContext>
      <AllProductContext>
        <BrowserRouter>
          <Navigation />
          <RouterComponent />
        </BrowserRouter>
      </AllProductContext>
    </ProductContext>
  );
}

export default App;

import React from "react";
import "./reset.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AppProvider } from "./context/CartContext";
import NavBar from "./components/NavBar/NavBar";
// import Home from "./components/Home/Home";
import ItemListContainer from "./components/ItemListContainer/ItemListcontainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";

// No me funciono el array

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <NavBar />

        <Switch>
          <Route component={ItemListContainer} path="/" exact />

          <Route path="/category/:id">
            <ItemListContainer />
          </Route>

          <Route component={ItemDetailContainer} path="/detail/:id" exact />

          <Route component={Cart} path="/cart" />

          <Route component={Footer} />
        </Switch>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;

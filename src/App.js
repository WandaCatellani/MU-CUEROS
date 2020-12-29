import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
// import Home from "./components/Home/Home";
import ItemListContainer from "./components/ItemListContainer/ItemListcontainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Footer from "./components/Footer/Footer";
import "./reset.scss";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Switch>
        <Route exact path="/" component={ItemListContainer} />

        <Route exact path="/category/:id" component={ItemDetailContainer} />

        <Route>
          <Footer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

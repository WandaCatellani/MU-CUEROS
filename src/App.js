import NavBar from "./components/NavBar/NavBar";
// import Home from "./components/Home/Home";
// import ItemListContainer from "./components/ItemListContainer/ItemListcontainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Footer from "./components/Footer/Footer";
import "./reset.scss";

function App() {
  return (
    <>
      <NavBar />
      <ItemDetailContainer />      
      <Footer />
    </>
  );
}

export default App;

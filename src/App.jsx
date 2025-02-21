import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Discover from "./components/Discover";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <Home />
        <Discover />
        <ProductList />
        <Footer />
      </div>
    </Provider>
  );
};

export default App;





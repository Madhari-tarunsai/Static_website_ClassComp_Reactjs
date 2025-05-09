import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Products from "./Components/Products/Products";
import Reviews from "./Components/Reviews/Reviews";
import { Routes, Route } from "react-router-dom";
import Order from "./Components/Order/Order";
import AddCart from "./Components/AddCard/Add";

class App extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/order" element={<Order />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/cart" element={<AddCart />} />
        </Routes>
      </>
    );
  }
}

export default App;


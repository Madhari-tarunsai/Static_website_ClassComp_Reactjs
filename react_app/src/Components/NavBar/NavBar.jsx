import React from "react";
import { LuIceCreamBowl } from "react-icons/lu";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./NavBar.css";

class NavBar extends React.Component {
  render() {
    return (
      <div className="Main_Nav">
        <h1>
          Ice_Cream_Stone <LuIceCreamBowl />
        </h1>
        <div className="Middle_Nav">
          <Link to="/home"><p>Home</p></Link>
          <Link to="/about"><p>About</p></Link>
          <Link to="/products"><p>Products</p></Link>
          <Link to="/order"><p>Order</p></Link>
        </div>
        <div className="Last_Nav_1">
          <Link to="/reviews"><p>Reviews</p></Link>
          <Link to="/cart"><p>AddCart <BsCart4 /></p></Link>
        </div>
      </div>
    );
  }
}

export default NavBar;

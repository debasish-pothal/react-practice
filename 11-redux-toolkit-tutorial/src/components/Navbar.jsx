import React from "react";
import { useSelector } from "react-redux";
import { CartIcon } from "../assets/icons";
import { selectTotalItems } from "../features/cart/cartSlice";

const Navbar = () => {
  const totalItems = useSelector(selectTotalItems);

  return (
    <nav>
      <div className="nav-center">
        <h3>redux toolkit</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{totalItems}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

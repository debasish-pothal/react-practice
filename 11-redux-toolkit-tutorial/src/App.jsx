import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import Modal from "./components/Modal";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartItems } from "./features/cart/cartSlice";

const App = () => {
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartItems());
  }, []);

  return (
    <>
      <Navbar />
      <CartContainer />
      {isOpen && <Modal />}
    </>
  );
};

export default App;

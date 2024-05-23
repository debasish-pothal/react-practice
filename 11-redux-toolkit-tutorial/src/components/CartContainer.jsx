import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTotalItems, selectTotalPrice } from "../features/cart/cartSlice";
import CartItem from "./CartItem";
import { openModal } from "../features/modal/modalSlice";

const CartContainer = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const totalItems = useSelector(selectTotalItems);
  const totalPrice = useSelector(selectTotalPrice);
  const dispatch = useDispatch();

  if (totalItems < 1) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${totalPrice.toFixed(2)}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => dispatch(openModal())}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;

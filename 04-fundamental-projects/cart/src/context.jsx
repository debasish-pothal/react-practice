import {
  createContext,
  useState,
  useContext,
  useReducer,
  useEffect,
} from "react";
import reducer from "./reducer";
import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from "./actions";
import cartItems from "./data";

const calculateTotal = (items) => {
  const totalPrice = [...items.values()].reduce((acc, item) => {
    const price = parseFloat(item.price);
    const amount = item.amount;
    return acc + price * amount;
  }, 0);

  return {
    totalAmount: items.size,
    totalCost: totalPrice.toFixed(2),
  };
};

const INITIAL_STATE = {
  loading: true,
  cart: new Map(),
};

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { totalAmount, totalCost } = calculateTotal(state.cart);

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE, payload: { id } });
  };

  const increaseItem = (id) => {
    dispatch({ type: INCREASE, payload: { id } });
  };

  const decreaseItem = (id) => {
    dispatch({ type: DECREASE, payload: { id } });
  };

  const fetchData = async () => {
    dispatch({ type: LOADING });
    const response = await fetch(
      "https://www.course-api.com/react-useReducer-cart-project"
    );
    const cart = await response.json();
    dispatch({ type: DISPLAY_ITEMS, payload: { cart } });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increaseItem,
        decreaseItem,
        totalAmount,
        totalCost,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

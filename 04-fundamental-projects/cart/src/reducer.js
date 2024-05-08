import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from "./actions";

const reducer = (state, action) => {
  if (action.type === LOADING) {
    return {
      ...state,
      loading: true,
    };
  }

  if (action.type === DISPLAY_ITEMS) {
    const { cart } = action.payload;

    return {
      ...state,
      loading: false,
      cart: new Map(cart.map((item) => [item.id, item])),
    };
  }

  if (action.type === CLEAR_CART) {
    return {
      ...state,
      cart: new Map(),
    };
  }

  if (action.type === REMOVE) {
    const { id } = action.payload;
    const newCart = new Map(state.cart);
    newCart.delete(id);

    return {
      ...state,
      cart: newCart,
    };
  }

  if (action.type === INCREASE) {
    const { id } = action.payload;
    const newCart = new Map(state.cart);
    const item = structuredClone(newCart.get(id));
    item.amount = item.amount + 1;
    newCart.set(id, item);

    return {
      ...state,
      cart: newCart,
    };
  }

  if (action.type === DECREASE) {
    const { id } = action.payload;
    const newCart = new Map(state.cart);
    const item = structuredClone(newCart.get(id));

    if (item.amount === 1) {
      newCart.delete(id);
    } else {
      item.amount = item.amount - 1;
      newCart.set(id, item);
    }

    return {
      ...state,
      cart: newCart,
    };
  }

  throw new Error(`no matching action : ${action.type}`);
};

export default reducer;

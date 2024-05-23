import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import cartItems from "../../assets/cartItems";

const API_URL = "https://www.course-api.com/react-useReducer-cart-project";

export const fetchCartItems = createAsyncThunk(
  "cart/fetchCartItems",
  async () => {
    const response = await axios.get(API_URL);
    return response.data;
  }
);

const initialState = {
  cartItems: [],
  isLoading: true,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, action) => {
      const itemId = action.payload;
      const item = state.cartItems.find((item) => item.id === itemId);
      item.amount += 1;
    },
    decrease: (state, action) => {
      const itemId = action.payload;
      const item = state.cartItems.find((item) => item.id === itemId);
      if (item) {
        if (item.amount > 1) {
          item.amount -= 1;
        } else {
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== itemId
          );
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload;
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Error occurred!";
      });
  },
});

export const selectTotalItems = (state) =>
  state.cart.cartItems.reduce((total, item) => total + item.amount, 0);

export const selectTotalPrice = (state) =>
  state.cart.cartItems.reduce(
    (total, item) => total + item.price * item.amount,
    0
  );

export const { clearCart, removeItem, increase, decrease } = cartSlice.actions;

export default cartSlice.reducer;

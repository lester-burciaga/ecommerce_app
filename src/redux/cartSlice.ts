import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { Product } from "../types/types";

interface CartState {
  cart: Product[];
}

const initialState: CartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Product>) => {
      const item = action.payload;
      // Check if item exist
      const existItem = state.cart.find((element) => element.id === item.id);
      if (existItem) {
        state.cart = state.cart.map((element) =>
          element.id === item.id
            ? { ...element, qty: element.qty + 1 }
            : element
        );
      } else {
        state.cart = [...state.cart, { ...item, qty: 1 }];
      }
    },
    deleteItem: (state, action: PayloadAction<Product>) => {
      const item = action.payload;
      const existItem = state.cart.find((element) => element.id === item.id);

      if (existItem?.qty === 1) {
        state.cart = state.cart.filter((element) => element.id !== item.id);
      } else {
        state.cart = state.cart.map((element) =>
          element.id === item.id
            ? { ...element, qty: element.qty - 1 }
            : element
        );
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, deleteItem } = cartSlice.actions;
export const selectCount = (state: RootState) => state.cart;

export default cartSlice.reducer;

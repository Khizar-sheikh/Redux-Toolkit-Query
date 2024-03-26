import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = { ...action.payload, quantity: 1 }; // Set default quantity to 1
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += newItem.quantity;
      } else {
        state.items.push(newItem);
      }
      state.total += newItem.price * newItem.quantity;
    },
    removeItem: (state, action) => {
      const itemIdtoRemove = action.payload;
      const itemToRemove = state.items.find(
        (item) => item.id === itemIdtoRemove
      );
      if (itemToRemove) {
        state.items = state.items.filter((item) => item.id !== itemIdtoRemove);
        state.total -= itemToRemove.price * itemToRemove.quantity;
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    },
    increaseQuantity: (state, action) => {
      const itemIdtoIncrease = action.payload;
      const itemtoIncrease = state.items.find(
        (item) => item.id === itemIdtoIncrease
      );
      if (itemtoIncrease) {
        itemtoIncrease.quantity++;
        state.total += itemtoIncrease.price;
      }
    },
    decreaseQuantity: (state, action) => {
      const itemToDecrease = state.items.find(
        (item) => item.id === action.payload
      );
      if (itemToDecrease) {
        if (itemToDecrease.quantity > 1) {
          itemToDecrease.quantity--;
          state.total -= itemToDecrease.price;
        }
      }
    },
  },
});

export const {
  addItem,
  removeItem,
  clearCart,
  decreaseQuantity,
  increaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;

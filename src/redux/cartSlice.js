


import { createSlice } from "@reduxjs/toolkit";

const loadCartFromStorage = () => {
  if (typeof window !== "undefined") {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
  }
  return [];
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: loadCartFromStorage(),
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItemIndex = state.cartItems.findIndex((i) => i.id === item.id);

      if (existingItemIndex !== -1) {
        state.cartItems[existingItemIndex].quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    loadCart: (state) => {
      state.cartItems = loadCartFromStorage();
    },
  },
});

export const { addToCart, loadCart } = cartSlice.actions;
export default cartSlice.reducer;


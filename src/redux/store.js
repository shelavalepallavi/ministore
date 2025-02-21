import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { loadCart } from "./cartSlice";
import productReducer from "./productSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
});


store.dispatch(loadCart());

export default store;

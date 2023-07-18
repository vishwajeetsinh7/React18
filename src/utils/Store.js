import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
  // create slices
  reducer: {
    cart: cartSlice,
  },
});

export default store;

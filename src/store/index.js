// Import configureStore from Redux Toolkit to create a Redux store
import { configureStore } from "@reduxjs/toolkit";
// Import the cart slice reducer to manage cart state
import cartReducer from "@/store/slices/cart-slice";

// Create a Redux store and add the cart reducer
const store = configureStore({
  reducer: {
    cart: cartReducer, // Attach cart reducer to handle cart-related actions
  },
});

// Export the store to use it throughout the app
export default store;

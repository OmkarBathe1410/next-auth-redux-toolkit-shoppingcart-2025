// Import createSlice from Redux Toolkit to create a slice for the cart
import { createSlice } from "@reduxjs/toolkit";

// Define the initial state for the cart, which contains an empty cartItems array
const initialState = {
  cartItems: [],
};

// Create a slice for the cart with actions to add or remove items
const cartSlice = createSlice({
  name: "cart", // Name of the slice
  initialState, // Initial state of the cart
  reducers: {
    // Reducer to add an item to the cart
    addToCart(state, action) {
      console.log(state, action); // Log the state and action (useful for debugging)
      state.cartItems.push(action.payload); // Add the new item to cartItems array
    },
    // Reducer to remove an item from the cart
    removeFromCart(state, action) {
      let cpyCartItems = [...state.cartItems]; // Create a copy of the cartItems array
      cpyCartItems = cpyCartItems.filter((item) => item.id !== action.payload); // Filter out the item to be removed
      state.cartItems = cpyCartItems; // Update the cartItems array with the filtered list

      return state; // Return updated state
    },
  },
});

// Export the action creators (addToCart and removeFromCart) to dispatch them in components
export const { addToCart, removeFromCart } = cartSlice.actions;
// Export the cart slice reducer to be included in the Redux store
export default cartSlice.reducer;

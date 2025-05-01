"use client"; // Ensure this file runs client-side

import { useDispatch, useSelector } from "react-redux"; // Import necessary hooks from redux for dispatching actions and selecting state
import { Button } from "../ui/button"; // Import custom Button component
import { addToCart, removeFromCart } from "@/store/slices/cart-slice"; // Import addToCart and removeFromCart actions

function AddToCartButton({ productItem }) {
  const { cart } = useSelector((state) => state); // Get cart state from Redux store
  const dispatch = useDispatch(); // Access dispatch function to update the store

  // Function to handle adding product to the cart
  function handleAddToCart() {
    dispatch(addToCart(productItem)); // Dispatch action to add product to the cart
  }

  // Function to handle removing product from the cart
  function handleRemoveFromCart() {
    dispatch(removeFromCart(productItem?.id)); // Dispatch action to remove product by id
  }

  return (
    <div className="mt-8 max-w-md">
      <Button
        type="button"
        onClick={
          // Toggle action between adding/removing product from the cart
          cart?.cartItems.some((item) => item.id === productItem.id)
            ? handleRemoveFromCart
            : handleAddToCart
        }
        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300" // Styled button with smooth hover effect
      >
        {cart?.cartItems.some((item) => item.id === productItem.id)
          ? "Remove from cart" // If item exists in cart, show remove button
          : "Add to cart"}{" "}
      </Button>
    </div>
  );
}

export default AddToCartButton;

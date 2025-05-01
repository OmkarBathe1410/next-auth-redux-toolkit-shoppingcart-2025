"use server"; // This tells Next.js that this file contains server-side actions.

import { signIn, signOut } from "@/auth"; // Import authentication methods from auth.js

// Function to fetch all products from an external API
export async function fetchAllProducts() {
  try {
    const result = await fetch("https://dummyjson.com/products", {
      method: "GET",
      cache: "no-store", // Always fetch fresh data without using cache
    });
    const data = await result.json();

    return {
      success: true,
      data: data?.products, // Return list of products if successful
    };
  } catch (e) {
    console.log(e);
    return {
      success: false,
      message: "Some error occured! Please try again", // Return error if API call fails
    };
  }
}

// Function to fetch details of a specific product using its ID
export async function fetchProductDetails(currentProductID) {
  try {
    const result = await fetch(
      `https://dummyjson.com/products/${currentProductID}`,
      {
        method: "GET",
        cache: "no-store", // Always fetch fresh data without using cache
      }
    );
    const data = await result.json();

    return data; // Return product details
  } catch (e) {
    console.log(e);
    return {
      success: false,
      message: "Some error occured! Please try again", // Return error if API call fails
    };
  }
}

// Action to handle user login via GitHub authentication
export async function loginAction() {
  await signIn("github"); // Initiates the sign-in process using GitHub authentication provider
}

// Action to handle user logout
export async function logoutAction() {
  await signOut(); // Initiates the sign-out process to log the user out of the application
}

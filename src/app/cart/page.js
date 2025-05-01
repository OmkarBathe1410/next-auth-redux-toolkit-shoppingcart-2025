import { auth } from "@/auth"; // Import authentication function to check user session
import Cart from "@/components/cart"; // Import Cart component to display cart items
import { redirect } from "next/navigation"; // Import redirect function to navigate to another page

// Async function to load the Cart page after checking the user's session
async function CartPage() {
  const getSession = await auth(); // Check if user is authenticated
  if (!getSession?.user) redirect("/unauth-page"); // If no user, redirect to the unauthorized page

  return <Cart />; // Render the Cart component if the user is authenticated
}

export default CartPage; // Export the CartPage function to be used in the application

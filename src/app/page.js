import { fetchAllProducts } from "@/actions"; // Import function to fetch all products
import ProductCard from "../components/product-card"; // Import the reusable product card component
import { auth } from "@/auth"; // Import auth function to check if user is logged in
import { redirect } from "next/navigation"; // Import redirect utility from Next.js

export default async function Home() {
  const getSession = await auth(); // Get the current user session

  if (!getSession?.user) redirect("/unauth-page"); // If no user found, redirect to unauthenticated page

  const getAllProducts = await fetchAllProducts(); // Fetch all products from API

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
          🛒 Welcome to the Shopping Cart
        </h1>

        {/* Display products */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {getAllProducts &&
          getAllProducts.data &&
          getAllProducts.data.length > 0 ? (
            getAllProducts.data.map((productItem) => (
              <ProductCard key={productItem.id} item={productItem} />
            ))
          ) : (
            <p className="text-center text-gray-600 col-span-full">
              No products available. Please check back later!
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
